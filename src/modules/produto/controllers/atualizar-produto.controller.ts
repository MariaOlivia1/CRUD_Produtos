import { ProdutoDTO } from "../dtos/produto.dto";
import { AtualizarProdutoService } from "../services/atualizar-produto.service";
import { Request, Response } from "express";

export class AtualizarProdutoController{
    constructor(private readonly service: AtualizarProdutoService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const id = Number(request.params.id)
            const produto = <ProdutoDTO>request.body
            await this.service.execute(id, produto)
            return response.status(200).send("Produto atualizado")
        } catch (error) {
            return response.status(500).send("Erro a atualizar pedido | " + error)
        }
    }
}