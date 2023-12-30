import { LoginUsuarioService } from "../services/login-usuario.service";
import { Request, Response } from "express";

export class LoginUsuarioController{
    constructor(private readonly service: LoginUsuarioService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const {matricula, senha} = request.body
            const token = await this.service.execute(matricula, senha)

            if(!token){
                return response.status(404).send("Usuario não encontrado")
            }
            return response.status(200).send(token)
        } catch (error) {
            return response.status(500).send("Erro ao logar | " +error)
        }
    }
}