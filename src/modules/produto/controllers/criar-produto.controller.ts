import { ProdutoDTO } from "../dtos/produto.dto";
import { CriarProdutoService } from "../services/criar-produto.service";
import { Request, Response } from "express";

export class CriarProdutoController{
    constructor(private readonly service: CriarProdutoService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const produto = <ProdutoDTO>request.body
            await this.service.execute(produto)
            return response.status(200).send("Produto criado")
        } catch (error) {
            return response.status(500).send("Erro ao criar produto | " + error)
        }
    }
}