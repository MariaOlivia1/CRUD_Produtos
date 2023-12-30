import produtos from "../routes/produtoRoutes"
import usuarios from "../routes/usuarioRoutes"
import { Router } from "express"

const routes = Router()

routes.use(produtos)
routes.use(usuarios)

export default routes