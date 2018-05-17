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
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <Ethernet.h>
#include <PubSubClient.h>

Adafruit_BME280 bme;

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
IPAddress ip(192, 168, 128, 177);
IPAddress mqttServer(192, 168, 128, 151);
EthernetClient ethClient;
PubSubClient client(ethClient);

/**
 * Setup peripherals
 */
void setup() {
	Serial.begin(9600);
	Serial.println(F("BME280 test"));
	if (!bme.begin(0x76)) {
		Serial.println("Could not find a valid BME280 sensor, check wiring!");
		while (1);
	}
	Ethernet.begin(mac, ip);
	client.setServer(mqttServer, 1883);
	Serial.print("server is at ");
	Serial.println(Ethernet.localIP());
}

/**
 * Main loop
 */
void loop() {
	delay(500);
	if (!client.connected()) {
		mqttReconnect();
	}
	client.loop();
	mqttSendData();
}

/**
 * Send data from BME280 to MQTT broker
 */
void mqttSendData() {
	String temperature = String(bme.readTemperature());
	String pressure = String(bme.readPressure() / 100.0F);
	String humidity = String(bme.readHumidity());
	char dataToSend[64];
	temperature.toCharArray(dataToSend, 64);
	client.publish("/sensors/bme280/0/temperature", dataToSend);
	pressure.toCharArray(dataToSend, 64);
	client.publish("/sensors/bme280/0/pressure", dataToSend);
	humidity.toCharArray(dataToSend, 64);
	client.publish("/sensors/bme280/0/humidity", dataToSend);
	client.loop();
}

/**
 * Check MQTT connection and reconnect
 */
void mqttReconnect() {
	// Loop until we're reconnected
	while (!client.connected()) {
		Serial.print("Attempting MQTT connection...");
		// Attempt to connect
		if (client.connect("arduinoSensor0")) {
			Serial.println("connected");
			client.publish("/sensors/bme280/0/status", "connected");
		} else {
			Serial.print("failed, rc=");
			Serial.print(client.state());
			Serial.println(" try again in 5 seconds");
			// Wait 5 seconds before retrying
			delay(5000);
		}
	}
}
