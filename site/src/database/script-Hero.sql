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

select * from usuario;	

CREATE TABLE votos_uniforme (
  idUniforme INT PRIMARY KEY AUTO_INCREMENT,
  traje VARCHAR(50) NOT NULL,
  votos INT DEFAULT 0
);

CREATE TABLE votos_personagem (
  idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
  personagem VARCHAR(50) NOT NULL,
  votos INT DEFAULT 0
);


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
	references votos_uniforme(idUniforme),
fkPersonagem int,
constraint fkPersonagem foreign key (fkPersonagem)
	references votos_personagem (idPersonagem)
);



insert into votos_uniforme values
(null,'Noir', null),
(null,'2099',null),
(null,'Simbionte',null),
(null,'Traje Classico',null),
(null,'Aranha de Ferro',null);

insert into votos_personagem values
	(null,'Venom',null),
	(null,'Spider-Gwen',null),
	(null,'Spider-Man',null),
	(null,'Miles Morales',null),
	(null,'2099',null),
	(null,'Ultimate-Spider-Man',null),
	(null,'Gata Negra',null);



select * from usuario;
select * from personagens;
select * from votos_uniforme;

desc personagens;