import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class ListarProdutosService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute():Promise<ProdutoEntity[]>{
        return await this.repository.listarProdutos()
    }
}