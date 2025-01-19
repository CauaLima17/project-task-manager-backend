# Modelos utilizados na criação das tabelas do projeto

```sql
-- Modelo de tabela 'Users'
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(80) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hash_password VARCHAR(255) NOT NULL
)

-- Modelo de tabela 'Projeto'
CREATE TABLE projeto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    nome VARCHAR(300) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Modelo de tabela 'Tarefa'
CREATE TABLE tarefa (
    id int AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(200) not null,
    descricao text,
    STATUS ENUM('pendente', 'em progesso', 'concluída') DEFAULT 'pendente',
    data_criacao timestamp DEFAULT CURRENT_TIMESTAMP,
    prioridade ENUM('baixa', 'média', 'alta') DEFAULT 'média',
    projeto_id int not null,
    user_id INT NOT NULL,
    FOREIGN KEY (projeto_id) REFERENCES projeto(id) ON DELETE CASCADE
);
```

## Observações: 

<br>

**AUTO_INCREMENT** -> Significa que esse valor será automaticamente incrementado ao longo da tabela.

**PRIMARY KEY** -> Significa que esse valor é uma **chave primária** do registro em questão, ou seja, é uma chave que não se repete e faz referência apenas à um registro. 

**VARCHAR( N )** -> Significa que o valor em questão da tabela será limitado a uma quantidade **N** de caracteres.