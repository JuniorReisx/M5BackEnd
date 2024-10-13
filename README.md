# TechNBlack ✊🏿

## Description
Racial inequality in the Brazilian labor market is widely documented, revealing a significant difference between Black and non-Black individuals in terms of opportunities, income, and working conditions. These inequalities are a result of a historical context of exclusion, reinforced by the lack of effective public policies to combat institutional racism.

The inclusion of black people in the tech industry goes beyond social equity it represents an opportunity for innovation and growth for companies.

Diversity should not only be a moral priority, but also a business strategy. It creates more adaptable work environments and drives technological advancements, allowing different experiences and perspectives to be integrated into the development of more inclusive and effective products and services.

In this context, TechNBlack emerges, the final project from the Programadores do Amanhã training program. It is an API designed to manage tech job opportunities specifically for black individuals. The platform was developed as an inclusive solution, facilitating access to job opportunities and promoting greater diversity in the tech sector.

## Features
Allows listing, creating, and deleting job openings, recruiters, and users.

## Technologies Used
* Node.js
* Express: 4.21.0
* Sequelize: 6.37.4
* PostgreSQL
* CORS: 2.8.5

## Installation

### Clone the repository:

```
git clone https://github.com/dborahfagundes/M5BackEnd
```

### Install dependencies:

```
npm install
```

### Set up the Database:

Create the .env file and configure the DATABASE_URL variable with the database information:

```
DATABASE_URL='postgresql://postgres.agpfutrpnjoxdzitbslu:@M5BackEnd123@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
PORT='4000'
```

### Start the server

```
npm start
```

The server will be running on port 4000.

## API Endpoints

### Jobs

Method| Description | Endpoint
---|---|---
`POST`| Create Job | `/jobs`
`GET`| List Jobs | `/jobs`
`DELETE`| Delete Job by ID | `/jobs/:id`

* Body POST
``` sql
{
  "nome": varchar(255),
  "cargo": varchar(255),
  "nivel": varchar(50),
  "empresa": varchar(255),
  "quantidade": integer,
  "salario": decimal (10,2),
  "localizacao": varchar(255),
  "descricao": text,
}
```

### Recruiters

Method| Description | Endpoint
---|---|---
`POST`| Create Recruiter| `/recruiters`
`GET`| List Recruiters | `/recruiters`
`DELETE`| Delete Recruiter by ID | `/recruiters/:id`

* Body POST
``` sql
{
  "nome": varchar(255),
  "empresa": varchar(255),
  "contato": varchar(100),
}
```
### Users

Method| Description | Endpoint
---|---|---
`POST`| Create User | `/Users`
`GET`| List Users | `/Users`
`DELETE`| Delete User by ID | `/users/:id`

* Body POST
``` sql
{
  "nome": varchar(255),
  "formacao": varchar(255),
  "endereco": varchar(255),
  "pretensao salarial": decimal(10,2),
  "contato": varchar(100),
  "data de nascimento": date
}
```

## Contribution 

Contributions are welcome! Create a new branch for your changes and submit a pull request.

We hope you enjoy it! <3
