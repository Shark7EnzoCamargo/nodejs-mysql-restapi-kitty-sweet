import {Router} from 'express'
import {getProductos, getProducto, postProducto, deleteProducto, updateProducto} from '../controllers/producto.controller.js'

const router = Router()

router.get('/productos', getProductos)

router.get('/producto/:id', getProducto)

router.post('/producto', postProducto)

router.delete('/producto/:id', deleteProducto)

router.put('/producto/:id', updateProducto)

export default router