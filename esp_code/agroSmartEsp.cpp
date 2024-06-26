#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>
#include "ArduinoJson.h"

// Configurações da rede Wi-Fi
const char* ssid = "AgroSmart";
const char* password = "12345678";

// Configurações do servidor web
const char* serverUrl = "http://192.168.0.10:8000/sensores"; // Substitua pelo IP do seu servidor

// Configurações do sensor DHT11
#define DHT_PIN 2        // Pino conectado ao sensor DHT11
#define DHT_TYPE DHT11   // Tipo do sensor DHT11
DHT dht(DHT_PIN, DHT_TYPE); // Cria uma instância da classe DHT

WiFiClient espClient;

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Conectando-se à rede ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  dht.begin();
}

void loop() {
  // Verifica se ainda está conectado ao Wi-Fi
  if (WiFi.status() != WL_CONNECTED) {
    setup_wifi();
    if (WiFi.status() != WL_CONNECTED) {
      Serial.println("Erro: Falha ao reconectar ao WiFi.");
      return;
    }
  }

  // Leitura da temperatura e umidade do ambiente
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Falha na leitura do sensor DHT!");
    delay(60000); // Espera 1 minuto antes de tentar novamente
    return;
  } else {
    Serial.print("Temperatura: ");
    Serial.print(temperature);
    Serial.print(" °C\tUmidade: ");
    Serial.print(humidity);
    Serial.println(" %");
  }

  // Envio dos dados para o servidor web
  HTTPClient http;
  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/json");

  // Adiciona um identificador único para cada ESP32
  String deviceId = "ESP32_CAM_1"; // Altere este ID para cada dispositivo

  // Cria o JSON com os dados
  String json = "{\"id\":\"" + deviceId + "\"," +
                "\"temperatura\":" + String(temperature) +
                ",\"umidade\":" + String(humidity) + "}";

  int httpResponseCode = http.POST(json);
  if (httpResponseCode > 0) {
    Serial.print("Resposta do servidor: ");
    Serial.println(httpResponseCode);
  } else {
    Serial.print("Erro na requisição HTTP: ");
    Serial.println(httpResponseCode);
  }
  http.end();

  delay(60000); // Delay de 1 minuto antes de enviar novos dados
}
