import { PrismaUsuarioRepository } from "./repositories/implementations/prisma.usuario.repository";
import { CadastrarUsuarioService } from "./services/cadastrar-usuario.service";
import { CadastrarUsuarioController } from "./controllers/cadastrar-usuario.controller";
import { LoginUsuarioService } from "./services/login-usuario.service";
import { LoginUsuarioController } from "./controllers/login-usuario.controller";

const repository = new PrismaUsuarioRepository()
const cadastrarUsuarioService = new CadastrarUsuarioService(repository)
const cadastrarUsuarioController = new CadastrarUsuarioController(cadastrarUsuarioService)
const loginUsuarioService = new LoginUsuarioService(repository)
const loginUsuarioController = new LoginUsuarioController(loginUsuarioService)  

export {
    cadastrarUsuarioController,
    loginUsuarioController
}