import { Request, Response } from "express";
import { ListarProdutoPorIdService } from "../services/listar-produto-por-id.service";

export class ListarProdutoPorIdController{
    constructor(private readonly service: ListarProdutoPorIdService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const id = Number(request.params.id)
            const produto = await this.service.execute(id)
            return response.status(200).send(produto)
        } catch (error) {
            return response.status(500).send("Erro Ao listar Produto por id | " + error)
        }
    }
}