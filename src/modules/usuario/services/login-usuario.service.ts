import { TokenEntity } from "../entities/token.entity";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class LoginUsuarioService{
    constructor(private readonly repository: UsuarioRepository){}
    async execute(matricula: string, senha: string):Promise<TokenEntity>{
        return this.repository.login(matricula, senha)
    }
}