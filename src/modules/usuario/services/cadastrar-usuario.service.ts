import { UsuarioDTO } from "../dtos/usuario.dto";
import { UsuarioMapping } from "../mappings/usuario.mapping";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class CadastrarUsuarioService{
    constructor(private readonly repository: UsuarioRepository){}
    async execute(usuario: UsuarioDTO):Promise<void>{
        const usuarioo = UsuarioMapping.from(usuario)
        await this.repository.cadastrar(usuarioo)
    }
}