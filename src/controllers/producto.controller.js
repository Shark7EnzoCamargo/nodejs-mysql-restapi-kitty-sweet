import {pool} from '../db.js'

export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM producto')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM producto WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Producto not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const postProducto = async (req, res) => {
    try {
        const { nombre, precio_venta, id_tipoproducto } =req.body
        const [rows] = await pool.query('INSERT INTO producto (nombre, precio_venta, id_tipoproducto) VALUES (?, ?, ?)', [nombre, precio_venta, id_tipoproducto])
        res.send({
            id: rows.insertId,
            nombre,
            precio_venta,
            id_tipoproducto,
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteProducto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM producto WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Producto not found'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateProducto = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, precio_venta, id_tipoproducto} = req.body

        const [result] = await pool.query('UPDATE producto SET nombre = ?, precio_venta = ?, id_tipoproducto = ? WHERE id = ?', [nombre, precio_venta, id_tipoproducto, id])
    
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Producto not found'
        })

        const [rows] = await pool.query('SELECT * FROM producto WHERE id = ?', [req.params.id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}