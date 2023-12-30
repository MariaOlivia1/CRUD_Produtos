import { DeletarProdutoService } from "../services/deletar-produto.service";
import { Request, Response } from "express";

export class DeletarProdutoController{
    constructor(private readonly service: DeletarProdutoService){}
    async handle(request: Request, response: Response):Promise<Response>{
        try {
            const id = Number(request.params.id)
            await this.service.execute(id)
            return response.status(200).send("produto deletado")
        } catch (error) {
            return response.status(500).send("Erro ao deletar produto")
        }
    }
}