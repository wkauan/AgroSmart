<img src="./docs/capa_projeto.png">

Bem-vindo ao AgroSmart, onde a inovação transforma a agricultura. Nosso sistema utiliza sensores avançados de temperatura e umidade, junto com câmeras ESP32, para monitorar sua plantação em tempo real. Todas as informações são exibidas em um dashboard intuitivo, permitindo que você tome decisões informadas, aumente a produtividade e garanta a saúde das suas plantas como nunca antes.

## Necessário para rodar o projeto
- `Python`: Instale o python em [https://www.python.org/downloads/]
- `NodeJS`: Instale o nodejs em [https://nodejs.org/pt]

## Como executar o projeto

### Com o NodeJs instalado execute:

```console
    cd frontend
    npm i
    npm run dev
```

### Com o Python instalado execute:

```console
    cd backend
    python -m venv .venv
    .\.venv\Scripts\activate
    pip install -r requirements.txt
    py main.py
```

Se encontrar dificuldades ao iniciar a virtual environment (venv), execute o seguinte comando no terminal: `Set-ExecutionPolicy -scope Process -ExecutionPolicy Bypass`

### Integrantes

- [Kauan Bomfim](https://github.com/wkauan)
- [Vitor Carvalho](https://github.com/devvhitor)
- [Thiago Rodrigues](https://github.com/thizinrodrigues)

| Função | Responsável |
| ------ | ------ |
| **Scrum Master** | Vitor Carvalho |
| **Documentação** | Vitor Carvalho |
| **Desenvolvedor Front-End** | Kauan Bomfim |
| **Desenvolvedor Back-End** | Kauan Bomfim |
| **Banco de dados** | Kauan Bomfim |
| **Desenvolvedor ESP32** | Thiago Rodrigues e Vitor Carvalho |

## Warning
```console
    Não é possível rodar o projeto sem a ESP32 e suas devidas configurações de rede!!

    Por questões de segurança existe uma chave de acesso em um arquivo de ambiente, sem ele não é possível realizar cadastro e login
```
### Configuração da ESP
```console
    Na pasta esp_code, vc pode encontrar o código usado em nosso projeto, suba ele em sua ESP.

    Após isso, crie um ip fixo na sua rede da seguinte maneira:
    IP - 192.168.0.10
    Máscara - 255.255.255.0
    Gateway - 192.168.0.1

    DNS - 192.168.0.1

    digite ping 192.168.0.100 em seu CMD para verificar se a conexão com a ESP foi feita. Lembre-se de ligar a ESP na energia.
```
