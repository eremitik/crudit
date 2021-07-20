const express = require("express");
const knex = require("./knex");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.get("/api/note", async (_, res) => {
    try {
        const notes = await knex.select().table("notes");
        res.status(200).send(notes);
    } catch (error) {
        console.log(error)
    }
});

app.post("/api/post", async (req, res) => {
    // const posts = { id: 5, message: 'High', summary: 'Five' }
    try {
        // res.status(200).send(req.body)
        const DBResult = await knex.insert(req.body).into("notes");
        res.status(200).send(DBResult)
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }
})

app.put("/api/put", async (req, res) => {
    try {
        const { username, message } = req.body
        const notes = await knex.select().table("notes");
        await knex.select().table("notes").update({ message: message }).where({ username: username })
        res.status(200).send(notes)
    } catch (error) {
        console.log(error)
    }
})

app.delete("/api/delete", async (req, res) => {
    try {
        const { username } = req.body
        const notes = await knex.select().table("notes");
        await knex.select().table("notes").del().where({ username: username })
        res.send(200).send(notes)
    } catch (error) {
        console.log(error)
    }
})


const port = 5000 || process.env.PORT;
app.listen(5000, () => {
    console.log(`Server running at https://localhost:${port}!`);
});
