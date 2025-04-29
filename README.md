# 🍕 Pizza Order Management

Sistema de gerenciamento de pedidos de pizza usando Node.js e Express.

## 🚀 Instalação

Siga os passos abaixo para clonar e configurar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/oscarlindbeck/express-pizza-order-management.git
```

2. Acesse o diretório do projeto:

```bash
cd express-pizza-order-management
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto com a string de conexão do banco de dados. Exemplo:

```
DB_CONNECTION_STRING=your_database_connection_string_here
```

5. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

## 📦 Tecnologias

- Node.js
- Express
- MongoDB (ou outro, dependendo da configuração)
- dotenv

## 🧾 Modelos de Dados

### 🍕 Pizza

```json
{
  "size": "extraordinary",
  "flavours": ["Frango", "Calabresa"]
}
```

- **size**: Tamanho da pizza (ex: `"small"`, `"medium"`, `"large"`, `"extraordinary"`).
- **flavours**: Lista de sabores incluídos na pizza.

---

### 👤 Customer (Cliente)

```json
{
  "national_id": "111.222.333-44",
  "name": "O nominho aqui",
  "phone": "(41) 91111-2222"
}
```

- **national_id**: Documento de identificação nacional (CPF, por exemplo).
- **name**: Nome completo do cliente.
- **phone**: Número de telefone para contato.

---

### 📦 Order (Pedido)

```json
{
  "customer_id": "id aqui",
  "pizza_id": "id aqui",
  "status": "pending",
  "delivery_status": "not_started"
}
```

- **customer_id**: ID de referência ao cliente.
- **pizza_id**: ID da pizza pedida.
- **status**: Estado atual do pedido (ex: `"pending"`, `"confirmed"`, `"completed"`).
- **delivery_status**: Estado da entrega (ex: `"not_started"`, `"in_progress"`, `"delivered"`).
