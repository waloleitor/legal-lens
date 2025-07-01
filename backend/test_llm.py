import requests

response = requests.post("http://192.168.0.12:1234/v1/chat/completions", json={
    "messages": [
        {"role": "system", "content": "Eres un asistente legal que explica textos difíciles en lenguaje claro."},
        {"role": "user", "content": "¿Qué significa una cláusula de rescisión anticipada en un contrato?"}
    ],
    "temperature": 0.7,
    "max_tokens": 512
})

print(response.json())
