This was created during my time as a student at Code Chrysalis.

'Crudit' is a simple CRUD app built with Postgres, Knex and some simple html.


Here are the steps to run on local:
- After copying the repo, do `npm install`
- Create a `.env` file and insert three criteria: `DB_NAME=notes` `DB_USER=yourPSQLusername` `DB_PASSWORD=yourPSQLpassword`
- Run `npm start` to fire up server
- Open `index.html` in the `app` folder
- Create a database in psql called `notes`
- Run the migration and seed files using terminal commands `knex migrate:latest` and `knex seed:run`
- You can make GET, POST, PUT, DELETE requests from these endpoints:
    - /api/notes ---> GET
    - /api/post ---> POST
    - /api/put ---> PUT
    - /api/delete ---> DELETE
- I recommend using Thunder Client, a vscode plugin to hit the API


Future improvements:
- Make migration & seed files easier to use
- Make `index.html` a bit more interactive, take inputs from client to interact with API
