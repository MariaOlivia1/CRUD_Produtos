import { ProdutoDTO } from "../dtos/produto.dto";
import { ProdutoEntity } from "../entities/produto.entity";

export class ProdutoMapping{
    static from (produto: ProdutoDTO):ProdutoEntity{
        return {
            nome: produto.nome,
            valor: produto.valor,
            categoria: produto.categoria,
            quantidade: produto.quantidade
        }
    }
}