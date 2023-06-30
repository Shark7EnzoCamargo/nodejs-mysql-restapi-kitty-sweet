import {Router} from 'express'
import {getLugartiendas, getLugartienda, postLugartienda, deleteLugartienda, updateLugartienda} from '../controllers/lugartienda.controller.js'

const router = Router()

router.get('/lugartiendas', getLugartiendas)

router.get('/lugartienda/:id', getLugartienda)

router.post('/lugartienda', postLugartienda)

router.delete('/lugartienda/:id', deleteLugartienda)

router.put('/lugartienda/:id', updateLugartienda)

export default router