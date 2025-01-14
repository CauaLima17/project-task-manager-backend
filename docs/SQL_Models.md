# Modelos utilizados na criação das tabelas do projeto

```sql
-- Modelo de tabela 'Projeto'
create table projeto (
   	id int AUTO_INCREMENT PRIMARY KEY,
    user_id int
    nome varchar(300) not null
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
    FOREIGN KEY (projeto_id) REFERENCES projeto(id) ON DELETE CASCADE
);
```

## Observações: 

<br>

**AUTO_INCREMENT** -> Significa que esse valor será automaticamente incrementado ao longo da tabela.

**PRIMARY KEY** -> Significa que esse valor é uma **chave primária** do registro em questão, ou seja, é uma chave que não se repete e faz referência apenas à um registro. 

**VARCHAR( N )** -> Significa que o valor em questão da tabela será limitado a uma quantidade **N** de caracteres.