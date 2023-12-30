import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoMapping } from "../mappings/produto.mapping";
import { ProdutoRepository } from "../repositories/produto.repository";

export class CriarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(produto: ProdutoDTO):Promise<void>{
        const produtoo = ProdutoMapping.from(produto)
        await this.repository.criarProduto(produtoo)
    }
}