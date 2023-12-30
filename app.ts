import express from "express";
import cors from "cors"
import todasAsRotas from "./src/routes/index"

const app = express()
const porta = 3000

app.use(express.json(), cors(), todasAsRotas)
app.listen(porta, ()=>{
    console.log("API http://localhost:3000")
})