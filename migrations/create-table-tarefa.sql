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