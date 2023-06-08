create database hero;

use hero;

create table personagens
(idPersonagem int primary key auto_increment,
nome varchar (50),
heal_points INT NOT NULL,
attack INT NOT NULL,
defense INT NOT NULL,
hero boolean,
url varchar(255));

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (50),
email varchar (45),
senha varchar (40),
vitoria int,
derrota int,
empate int
);

CREATE TABLE votos_uniforme (
  traje VARCHAR(50),
  votos int,
  fkUsuario int,
  constraint fkUsuario foreign key (fkUsuario)references usuario (idUsuario),
  constraint votos primary key (traje,fkUsuario)
);
    
CREATE TABLE votos_personagem (
  personagem VARCHAR(50),
  votos int,
  fkUser int,
  constraint fkUser foreign key (fkUser)references usuario (idUsuario),
  constraint votos primary key (personagem,fkUser)
);

select * from usuario;
select * from personagens;
select * from votos_uniforme;
select * from votos_personagem;

select count(votos) from  votos_uniforme;
SELECT count(votos), max(votos), min(votos),truncate(avg(votos),0) FROM votos_uniforme;

desc personagens;