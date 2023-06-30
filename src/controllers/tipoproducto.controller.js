import {pool} from '../db.js'

export const getTipoproductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tipo_producto')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getTipoproducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tipo_producto WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Tipoproducto not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const postTipoproducto = async (req, res) => {
    try {
        const { categoria } =req.body
        const [rows] = await pool.query('INSERT INTO tipo_producto (categoria) VALUES (?)', [categoria])
        res.send({
            id: rows.insertId,
            categoria,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteTipoproducto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM tipo_producto WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Tipoproducto not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateTipoproducto = async (req, res) => {
    try {
        const {id} = req.params
        const {categoria} = req.body

        const [result] = await pool.query('UPDATE tipo_producto SET categoria = ? WHERE id = ?', [categoria, id])
    
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Tipoproducto not found'
        })

        const [rows] = await pool.query('SELECT * FROM tipo_producto WHERE id = ?', [req.params.id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}