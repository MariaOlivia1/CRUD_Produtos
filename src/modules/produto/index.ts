import { PrismaProdutoRepository } from "./repositories/implementations/prisma.produto.repository";
import { ListarProdutosService } from "./services/listar-produtos.service";
import { ListarProdutosController } from "./controllers/listar-produtos.controller";
import { ListarProdutoPorIdService } from "./services/listar-produto-por-id.service";
import { ListarProdutoPorIdController } from "./controllers/listar-produto-por-id.controller";
import { ListarProdutoPorNomeService } from "./services/listar-produto-por-nome.service";
import { ListarProdutoPorNomeController } from "./controllers/listar-produto-por-nome.controller";
import { CriarProdutoService } from "./services/criar-produto.service";
import { CriarProdutoController } from "./controllers/criar-produto.controller";
import { AtualizarProdutoService } from "./services/atualizar-produto.service";
import { AtualizarProdutoController } from "./controllers/atualizar-produto.controller";
import { DeletarProdutoService } from "./services/deletar-produto.service";
import { DeletarProdutoController } from "./controllers/deletar-produto.controller";

const repository = new PrismaProdutoRepository()
const listarProdutosService = new ListarProdutosService(repository)
const listarProdutosController = new ListarProdutosController(listarProdutosService)
const listarProdutoPorIdService = new ListarProdutoPorIdService(repository)
const listarProdutoPorIdController = new ListarProdutoPorIdController(listarProdutoPorIdService)
const listarProdutoPorNomeService = new ListarProdutoPorNomeService(repository)
const listarProdutoPorNomeController = new ListarProdutoPorNomeController(listarProdutoPorNomeService)
const criarProdutoService = new CriarProdutoService(repository)
const criarProdutoController = new CriarProdutoController(criarProdutoService)
const atualizarProdutoService = new AtualizarProdutoService(repository)
const atualizarProdutoController = new AtualizarProdutoController(atualizarProdutoService)
const deletarProdutoService = new DeletarProdutoService(repository)
const deletarProdutoController = new DeletarProdutoController(deletarProdutoService)

export {
    listarProdutosController,
    listarProdutoPorIdController,
    listarProdutoPorNomeController,
    criarProdutoController,
    atualizarProdutoController,
    deletarProdutoController
}