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
nome varchar (50),
email varchar (45),
senha varchar (40),
vitoria int,
derrota int,
empate int,
fkVilao int,
	constraint fkVilao foreign key (fkVilao)
		references personagens (idPersonagem),
fkHeroi int,
	constraint fkHeroi foreign key (fkHeroi)
		references personagens (idPersonagem)
);

select * from usuario;
select * from personagens;
desc personagens;