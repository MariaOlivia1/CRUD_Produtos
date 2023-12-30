import { ProdutoEntity } from "../entities/produto.entity";
import { ProdutoRepository } from "../repositories/produto.repository";

export class ListarProdutoPorIdService{
    constructor(private readonly repository: ProdutoRepository){}
    async execute(id:number):Promise<ProdutoEntity>{
        return this.repository.listarProdutoPorId(id)
    }
}