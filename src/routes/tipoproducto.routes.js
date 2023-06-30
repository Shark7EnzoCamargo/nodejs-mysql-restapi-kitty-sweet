import {Router} from 'express'
import {getTipoproductos, getTipoproducto, postTipoproducto, deleteTipoproducto, updateTipoproducto} from '../controllers/tipoproducto.controller.js'

const router = Router()

router.get('/tipoproductos', getTipoproductos)

router.get('/tipoproducto/:id', getTipoproducto)

router.post('/tipoproducto', postTipoproducto)

router.delete('/tipoproducto/:id', deleteTipoproducto)

router.put('/tipoproducto/:id', updateTipoproducto)

export default router