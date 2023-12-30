import { UsuarioDTO } from "../dtos/usuario.dto";
import { CadastrarUsuarioService } from "../services/cadastrar-usuario.service";
import { Request, Response } from "express";

export class CadastrarUsuarioController{
    constructor(private readonly service: CadastrarUsuarioService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const usuario = <UsuarioDTO>request.body
            await this.service.execute(usuario)
            return response.status(200).send("usuário criado")
        } catch (error) {
            return response.status(500).send("Erro ao cadastrar usuário | " +error)
        }
    }
}