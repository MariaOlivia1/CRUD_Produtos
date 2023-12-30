import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class AtualizarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(id: number, produto: ProdutoDTO):Promise<void>{
        await this.repository.atualizar(id, produto)
    }
}