import { UsuarioDTO } from "../dtos/usuario.dto";
import { UsuarioEntity } from "../entities/usuarios.entity";

export class UsuarioMapping{
    static from(usuario: UsuarioDTO):UsuarioEntity{
        return {
            matricula: usuario.matricula,
            senha: usuario.senha
        }
    }
}