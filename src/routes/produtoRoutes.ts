import { Request, Response } from "express";
import {Router} from "express"
import { atualizarProdutoController, criarProdutoController, deletarProdutoController, listarProdutoPorIdController, listarProdutoPorNomeController, listarProdutosController } from "../modules/produtos";

const routes = Router()

routes
.get("/produtos", (request: Request, response: Response)=>{
    listarProdutosController.handle(request, response)
})
.get("/produtoPorId/:id", (request: Request, response: Response)=>{
    listarProdutoPorIdController.handle(request, response)
})
.get("/produtos/nome/", (request: Request, response: Response)=>{
    listarProdutoPorNomeController.handle(request, response)
})
.post("/produtos", (request: Request, response: Response)=>{
    criarProdutoController.handle(request, response)
})
.put("/produtos/:id", (request: Request, response: Response)=>{
    atualizarProdutoController.handle(request, response)
})
.delete("/produtos/:id", (request: Request, response: Response)=>{
    deletarProdutoController.handle(request, response)
})

export default routes