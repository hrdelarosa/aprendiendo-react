CREATE TABLE contact (	
	id int primary key auto_increment,
	nombre varchar(155) not null,
	phone varchar(30) not null,
	email varchar(155) not null,
	city varchar(50) not null,
	address varchar(155) not null
);

INSERT INTO contact (nombre, phone, email, city, address) VALUES
("John Doe","1234567890", "johndoe@example.com", "New York", "123 Main St"),
("Jane Smith", "0987654321", "janesmith@example.com", "Los Angeles", "456 Elm St"),
("Mike Johnson", "5555555555", "mikejohnson@example.com", "Chicago", "789 Oak St"),
("Emily Davis", "1111111111", "emilydavis@example.com", "Houston", "987 Pine St"),
("David Wilson", "9999999999", "davidwilson@example.com", "Phoenix", "654 Birch St"),
("Sarah Taylor", "7777777777", "sarahtaylor@example.com", "Philadelphia", "321 Cedar St"),
("Chris Anderson", "4444444444", "chrisanderson@example.com", "San Antonio", "876 Maple St"),
("Jessica Thomas", "2222222222", "jessicathomas@example.com", "San Diego", "543 Walnut St"),
("Ryan Martinez", "8888888888", "ryanmartinez@example.com", "Dallas", "210 Oak St"),
("Melissa Clark", "6666666666", "melissaclark@example.com", "San Francisco", "987 Elm St");

