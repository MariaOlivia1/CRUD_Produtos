import { TokenEntity } from "../../entities/token.entity";
import { UsuarioEntity } from "../../entities/usuarios.entity";
import { UsuarioRepository } from "../usuario.repository";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"


export class PrismaUsuarioRepository implements UsuarioRepository{
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }
    async cadastrar(usuario: UsuarioEntity): Promise<void> {
        try {
            await this.prisma.usuario.create({data: usuario})
        } catch (error) {
            throw new Error("Erro: "+error)
        }
    }
    async login(matricula: string, senha: string): Promise<TokenEntity> {
        try {
            const usuario = await this.prisma.usuario.findFirstOrThrow({where: {matricula, senha}})
            
            if(usuario){
                const token = jwt.sign({ userId: usuario.id }, 'aksjdpolikchpiaodkjkl', { expiresIn: '1h' });
                return { token }
            }else{
                throw new Error("Usuário não encontrado")
            }
        } catch (error) {
            throw new Error("Erro: " + error)
        }
    }
}