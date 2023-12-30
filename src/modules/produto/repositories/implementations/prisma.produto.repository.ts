import { ProdutoRepository } from "../produto.repository";
import { ProdutoEntity } from "../../entities/produto.entity";
import { PrismaClient } from "@prisma/client";
import { ProdutoDTO } from "../../dtos/produto.dto";

export class PrismaProdutoRepository implements ProdutoRepository{
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }
    async listarProdutos(): Promise<ProdutoEntity[]> {
        try {
            const produtos = await this.prisma.produtos.findMany()
            return produtos
        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }
    async listarProdutoPorId(id: number): Promise<ProdutoEntity> {
        try {
            const produto = await this.prisma.produtos.findFirstOrThrow({where:{id}})
            return produto
        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }
    async listarProdutoPorNome(nome: string): Promise<ProdutoEntity> {
        try {
            const produto = await this.prisma.produtos.findFirstOrThrow({where: {nome: nome}})
            return produto
        } catch (error) {
            throw new Error("Erro: "+error)
        }
    }
    async criarProduto(produto: ProdutoEntity): Promise<void> {
        try {
            await this.prisma.produtos.create({data: produto})
        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }
    async atualizar(id: number, produtoAtualizado: ProdutoDTO): Promise<void> {
        try {
            await this.prisma.produtos.update({where: {id}, data: produtoAtualizado})
        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }
    async deletar(id: number): Promise<void> {
        try {
            await this.prisma.produtos.delete({where: {id}})
        } catch (error) {
            throw new Error("Erro: " + error)
        }    
    }
}