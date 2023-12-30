import { ListarProdutoPorNomeService } from "../services/listar-produto-por-nome.service";
import { Request, Response } from "express";

export class ListarProdutoPorNomeController{
    constructor(private readonly service: ListarProdutoPorNomeService){}
    async handle(request: Request, response: Response):Promise<Response>{   
        try {
            const nome = String(request.query.nome)
            const produto = await this.service.execute(nome)
            return response.status(200).send(produto)
        } catch (error) {
            return response.status(500).send("Erro ao listar este produto | " + error)
        }
    }
}