CREATE TABLE servicos (
    id int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200),
    tipo varchar(200)
);

CREATE TABLE cliente (
    cpf int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200)
);

CREATE TABLE tipo_festa (
    id int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200)
);

CREATE TABLE utensilio (
    id int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200)
);

CREATE TABLE saloes (
    id int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200),
    cidade varchar(200),
    id_tipo_festa int,
    id_utensilios int,
    id_servicos int,
    FOREIGN KEY(id_tipo_festa) REFERENCES tipo_festa(id),
    FOREIGN KEY(id_utensilios) REFERENCES utensilio(id),
    FOREIGN KEY(id_servicos) REFERENCES servicos(id)
);

CREATE TABLE festas (
    id int UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cpf_cliente int,
    id_saloes int,
    FOREIGN KEY(cpf_cliente) REFERENCES cliente(cpf),
    FOREIGN KEY(id_saloes) REFERENCES saloes(id)

);



INSERT INTO saloes(nome, cidade) values ("Fest Haus", "São Leopoldo");