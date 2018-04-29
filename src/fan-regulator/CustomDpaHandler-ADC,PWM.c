/*
 * Copyright (C) 2018 Roman Ondráček
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// Default IQRF include (modify the path according to your setup)
#include "IQRF.h"

// Default DPA header (modify the path according to your setup)
#include "DPA.h"
// Default Custom DPA Handler header (modify the path according to your setup)
#include "DPAcustomHandler.h"

// Definitions used for TR72 having connected pins
#define _OUT_A5 TRISA.5
#define _OUT_B4 TRISB.4
#define _OUT_C6 TRISC.6
#define _PIN_C6 LATC.6

#define PNUM_USER_ADC (PNUM_USER + 1)
#define PNUM_USER_PWM PNUM_USER

// Must be the 1st defined function in the source code in order to be placed at the correct FLASH location!

bit CustomDpaHandler()
{
	// Handler presence mark
	clrwdt();

	// Detect DPA event to handle
	switch (GetDpaEvent()) {
		// -------------------------------------------------
	case DpaEvent_Interrupt:
		// Do an extra quick background interrupt work
		// ! The time spent handling this event is critical.If there is no interrupt to handle return immediately otherwise keep the code as fast as possible.
		// ! Make sure the event is the 1st case in the main switch statement at the handler routine.This ensures that the event is handled as the 1st one.
		// ! It is desirable that this event is handled with immediate return even if it is not used by the custom handler because the Interrupt event is raised on every MCU interrupt and the empty return handler ensures the shortest possible interrupt routine response time.
		// ! Only global variables or local ones marked by static keyword can be used to allow reentrancy.
		// ! Make sure race condition does not occur when accessing those variables at other places.
		// ! Make sure( inspect.lst file generated by C compiler ) compiler does not create any hidden temporary local variable( occurs when using division, multiplication or bit shifts ) at the event handler code.The name of such variable is usually Cnumbercnt.
		// ! Do not call any OS functions except setINDFx().
		// ! Do not use any OS variables especially for writing access.
		// ! All above rules apply also to any other function being called from the event handler code, although calling any function from Interrupt event is not recommended because of additional MCU stack usage.

		DpaHandleReturnTRUE :
		return TRUE;

	case DpaEvent_Init:
		// Do a one time initialization work before main loop starts
		// C5 (AN4) as input 
		_OUT_A5 = 1;
		_OUT_B4 = 1;
		_OUT_C6 = 1;
		break;

	case DpaEvent_DpaRequest:
		// Called to interpret DPA request for peripherals
		// Peripheral enumeration
		if (IsDpaEnumPeripheralsRequest()) {
			// We implement 2 user peripherals
			_DpaMessage.EnumPeripheralsAnswer.UserPerNr = 2;
			FlagUserPer(_DpaMessage.EnumPeripheralsAnswer.UserPer, PNUM_USER_PWM);
			FlagUserPer(_DpaMessage.EnumPeripheralsAnswer.UserPer, PNUM_USER_ADC);
			_DpaMessage.EnumPeripheralsAnswer.HWPID = 0x000F;
			_DpaMessage.EnumPeripheralsAnswer.HWPIDver = 0x0001;
			goto DpaHandleReturnTRUE;
		} else if (IsDpaPeripheralInfoRequest()) {
			// Get information about peripheral
			switch (_PNUM) {
			case PNUM_USER_PWM:
				_DpaMessage.PeripheralInfoAnswer.PerT = PERIPHERAL_TYPE_PWM;
				_DpaMessage.PeripheralInfoAnswer.PerTE = PERIPHERAL_TYPE_EXTENDED_WRITE;
				goto DpaHandleReturnTRUE;
			case PNUM_USER_ADC:
				_DpaMessage.PeripheralInfoAnswer.PerT = PERIPHERAL_TYPE_ADC;
				_DpaMessage.PeripheralInfoAnswer.PerTE = PERIPHERAL_TYPE_EXTENDED_READ;
				goto DpaHandleReturnTRUE;
			}
			break;
		} else {
			// Handle peripheral command
			switch (_PNUM) {
			case PNUM_USER_PWM:
				// Check command
				if (_PCMD != 0) {
					DpaApiReturnPeripheralError(ERROR_PCMD);
				}
				// Check data length
				if (_DpaDataLength != sizeof(_DpaMessage.PerPwmSet_Request)) {
					DpaApiReturnPeripheralError(ERROR_DATA_LEN);
				}
				// Read module info into bufferINFO
				moduleInfo();
				// We use FSR0 to access PerPwmSet structure and to avoid to many MOVLB MCU instructions
				FSR0 = (uns16) & _DpaMessage.PerPwmSet_Request;

#define _Prescaler FSR0[offsetof(TPerPwmSet_Request,Prescaler)]
#define _Period  FSR0[offsetof(TPerPwmSet_Request,Period)]
#define _Duty  FSR0[offsetof(TPerPwmSet_Request,Duty)]

				// prescaler has to be in range 0 - 3
				// 2 LSbs of duty cycle is coded into 4 and 5 bit of prescaler 0b00xx0000
				if ((0x03 < _Prescaler) && (0x03 < (_Prescaler >> 4))) {
					DpaApiReturnPeripheralError(ERROR_DATA);
				}
				// PWM setup
				if (0x00 == _Prescaler && 0x00 == _Period && 0x00 == _Duty) {
					// Stop PWM
					_PIN_C6 = 0;
					T6CON = 0;
					CCPTMRS0 = 0;
					CCP3CON = 0;
				} else { // Start PWM
					// TR module with connected pins?
					if (bufferINFO[5].7 == 0) {
						_OUT_A5 = 1;
						_OUT_B4 = 1;
					}
					// PWM duty cycle
					CCPR3L = _Duty;
					// Change duty cycle only
					CCP3CON = 0b00001100 | (_Prescaler & 0b00110000);
					if (_Period != PR6 || ((_Prescaler ^ T6CON) & 0b00000011) != 0) {
						// Prescaler
						T6CON = _Prescaler & 0b00000011;
						// Set timer6 as CCP3 timer
						CCPTMRS0 = 0b00100000;
						// CCP3 single mode coded from prescaler byte
						// Select RC6 as P3A function output
						CCP3SEL = 0;
						PR6 = _Period; // PWM period
						TMR6IF = 0;
						TMR6ON = 1;
						// To send a complete duty cycle and period on the first PWM
						while (!TMR6IF);
					}

					_OUT_C6 = 0;
				}
WriteNoError:
				_DpaDataLength = 0;
				goto DpaHandleReturnTRUE;
			case PNUM_USER_ADC:
				// Check command
				if (_PCMD != 0) {
					DpaApiReturnPeripheralError(ERROR_PCMD);
				}
				// Check data length
				if (_DpaDataLength != 0) {
					DpaApiReturnPeripheralError(ERROR_DATA_LEN);
				}
				// ADC init (for more info see PIC datasheet) pin C5 (AN4) as analog input
				ANSELA.5 = 1;
				// ADC setting (AN4 channel)
				ADCON0 = 0b0.00100.01;
				// ADC result - right justified, Fosc/8
				ADCON1 = 0b10010000;
				// start ADC
				GO = 1;
				// wait for ADC finish
				while (GO);
				// 10b result is stored in ADRESH and ADRESL
				_DpaMessage.Response.PData[1] = ADRESH & 0x03;
				_DpaMessage.Response.PData[0] = ADRESL;
				_DpaDataLength = sizeof(uns16);
				goto DpaHandleReturnTRUE;
			}
		}
	}
	return FALSE;
}

// Default Custom DPA Handler header; 2nd include to implement Code bumper to detect too long code of the Custom DPA Handler (modify the path according to your setup) 
#include "DPAcustomHandler.h"
