create database hero;

drop database hero;

use hero;

create table personagens
(idPersonagem int primary key auto_increment,
nome varchar (50),
heal_points INT NOT NULL,
attack INT NOT NULL,
defense INT NOT NULL,
hero boolean,
url varchar(255));

select * from usuario;	

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (50),
email varchar (45),
senha varchar (40),
vitoria int,
derrota int,
empate int,
fkUniforme int,
	constraint fkUniforme foreign key (fkUniforme)
		references uniforme (idUniforme),
fkPersonagem int,
	constraint fkPersonagem foreign key (fkPersonagem)
		references personagens (idPersonagem)
);

CREATE TABLE uniforme (
	idUniforme INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(30) NOT NULL, 
    fkUsuario INT NULL,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;
select * from personagens;
select * from uniforme;

desc personagens;