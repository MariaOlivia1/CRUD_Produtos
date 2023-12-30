import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoEntity } from "../entities/produto.entity";

export interface ProdutoRepository{
    listarProdutos():Promise<ProdutoEntity[]>
    listarProdutoPorNome(nome: string):Promise<ProdutoEntity>
    listarProdutoPorId(id:number):Promise<ProdutoEntity>
    criarProduto(produto:ProdutoEntity):Promise<void>
    atualizar(id:number, produtoAtualizado: ProdutoDTO):Promise<void>
    deletar(id:number):Promise<void>
}