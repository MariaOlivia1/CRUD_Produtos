import { Request, Response } from "express";
import { ListarProdutosService } from "../services/listar-produtos.service";

export class ListarProdutosController{
    constructor(private readonly service: ListarProdutosService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const produtos = await this.service.execute()
            return response.status(200).send(produtos)
        } catch (error) {
            return response.status(500).send("Erro na listagem | " + error)
        }
    }
}