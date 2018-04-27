#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <Ethernet.h>
#include <PubSubClient.h>
#include <MsTimer2.h>

#define USE_DHCP
#define ROOT_TOPIC "/sensor/bme280/0/"

Adafruit_BME280 bme;

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#if not defined(USE_DHCP)
IPAddress ip(192, 168, 128, 177);
#endif
EthernetClient ethClient;
PubSubClient client(ethClient);

void setup() {
	Serial.begin(9600);
	if (!bme.begin(0x76)) {
		Serial.println("Could not find a valid BME280 sensor, check wiring!");
		while (1);
	}
	#if defined(USE_DHCP)
	if (Ethernet.begin(mac) == 0) {
		Serial.println("Failed to configure Ethernet using DHCP");
		// no point in carrying on, so do nothing forevermore:
		while (1);
	}
	#else
	Ethernet.begin(mac, ip);
	#endif
	printIPAddress();
	MsTimer2::set(10000, bmeSendMqtt);
	MsTimer2::start();
}

/**
 * Print IPv4 address to Serial monitor
 */
void printIPAddress() {
	Serial.print("My IPv4 address: ");
	for (byte thisByte = 0; thisByte < 4; thisByte++) {
		// print the value of each byte of the IP address:
		Serial.print(Ethernet.localIP()[thisByte], DEC);
		Serial.print(".");
	}
	Serial.println();
}

void loop() {
	// Run MQTT driver
	if (!client.connected()) {
		mqttReconnect();
	}
	client.loop();
}

/**
 * Send values from BME280 to MQTT broker
 */
void bmeSendMqtt() {
	client.publish(ROOT_TOPIC + "humidity", bme.readHumidity());
	client.publish(ROOT_TOPIC + "temperature", bme.readTemperature());
	client.publish(ROOT_TOPIC + "pressure", (bme.readPressure() / 100.0F));
}

/**
 * MQTT callback
 * @param topic MQTT topic
 * @param payload MQTT payload
 * @param length Length of MQTT payload
 */
void mqttCallback(char* topic, byte* payload, unsigned int length) {
	Serial.print("Message arrived [");
	Serial.print(topic);
	Serial.print("] ");
	for (uint16_t i = 0; i < length; i++) {
		Serial.print((char) payload[i]);
	}
	Serial.println();
}

/**
 * Check MQTT connection and reconnect
 */
void mqttReconnect() {
	Serial.print("Attempting MQTT connection...");
	// Attempt to connect
	if (client.connect("arduinoSensorClient")) {
		Serial.println("connected");
		// Once connected, publish an announcement...
		client.publish(ROOT_TOPIC + "status", "connected");
	} else {
		Serial.print("failed, rc=");
		Serial.print(client.state());
		Serial.println(" try again in 5 seconds");
	}
}
