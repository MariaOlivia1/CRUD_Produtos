import { Request, Response } from "express";
import { Router } from "express";
import { cadastrarUsuarioController, loginUsuarioController } from "../modules/usuario";

const routes = Router()

routes
.post("/cadastro", (request: Request, response: Response)=>{
    cadastrarUsuarioController.handle(request, response)
})
.post("/login", (request: Request, response: Response)=>{
    loginUsuarioController.handle(request, response)
})

export default routes