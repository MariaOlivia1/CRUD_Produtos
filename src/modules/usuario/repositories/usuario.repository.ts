import { UsuarioDTO } from "../dtos/usuario.dto";
import { TokenEntity } from "../entities/token.entity";

export interface UsuarioRepository{
    cadastrar(usuario: UsuarioDTO):Promise<void>
    login(matricula: string, senha: string):Promise<TokenEntity>
}