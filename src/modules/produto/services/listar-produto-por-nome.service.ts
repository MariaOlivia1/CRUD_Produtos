import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class ListarProdutoPorNomeService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(nome: string): Promise<ProdutoEntity>{
        return this.repository.listarProdutoPorNome(nome)
    }
}