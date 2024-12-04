# Exemplos de alguns comandos básicos em mySQL

## Adição de registros:
```sql
-- Exemplos de adição de registros
INSERT INTO projeto (nome) VALUES ('XXX');
```

## Consultas:
```sql
-- Exemplos de consulta
SELECT * FROM projeto; -- Todas as colunas
SELECT id FROM projeto; -- Só a coluna id
SELECT nome FROM projeto; -- Só a coluna nome
SELECT id, nome FROM projeto; -- As duas colunas
```

## Consultas com WHERE:
```sql
-- Exemplos de consultas com where (condição)
SELECT * FROM projeto WHERE nome LIKE 'Gu%';
SELECT * FROM projeto WHERE id = 2;
```

## Exclusão de registros:
```sql
-- Exemplo de exclusão de registros (PERIGOSO!)
DELETE * FROM projeto;

-- MENOS PERIGOSO MAS AINDA É PERIGOSO KKK)
DELETE FROM projeto WHERE id = 3;
```

## Atualizar registros:
```sql
-- Atualizar registros
UPDATE projeto SET nome = 'XXX' WHERE id = 1;
```