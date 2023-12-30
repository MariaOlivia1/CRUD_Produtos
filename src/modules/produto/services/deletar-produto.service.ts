import { ProdutoRepository } from "../repositories/produto.repository";

export class DeletarProdutoService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(id:number):Promise<void>{
        await this.repository.deletar(id)
    }
}