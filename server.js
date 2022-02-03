const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

class Usuario {
  constructor() {
    this.carneDeIdentidad = faker.datatype.uuid();
    this.primerNombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.numeroDeTelefono = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.contrasenia = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.carneDeIdentidad = faker.datatype.uuid();
    this.nombre = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCodeByState(),
      pais: faker.address.country(),
    };
  }
}
const user = new Usuario();
const business = new Empresa();
const newCompany = { Usuario: new Usuario(), Empresa: new Empresa() };

// console.log(business);

app.get("/api/users/new", (req, res) => {
  res.json(user);
});

app.get("/api/companies/new", (req, res) => {
  res.json(business);
});

app.get("/api/user/company", (req, res) => {
  res.json(newCompany);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
