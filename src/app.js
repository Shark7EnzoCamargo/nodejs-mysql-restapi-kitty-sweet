import express from 'express'
import lugartiendaRoutes from './routes/lugartienda.routes.js'
import indexRoutes from './routes/index.routes.js'
import productoRoutes from './routes/producto.routes.js'
import tipoproductoRoutes from './routes/tipoproducto.routes.js'

const app = express()

app.use(express.json())

app.use(lugartiendaRoutes)
app.use(productoRoutes)
app.use(tipoproductoRoutes)

app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;
