import {pool} from '../db.js'

export const getLugartiendas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM lugar_tienda')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
    
}

export const getLugartienda = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM lugar_tienda WHERE id = ?', [req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Lugartienda not found'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }  
}

export const postLugartienda = async (req, res) => {
    try {
        const { distrito, codigo_postal, direccion } =req.body
        const [rows] = await pool.query('INSERT INTO lugar_tienda (distrito, codigo_postal, direccion) VALUES (?, ?, ?)', [distrito, codigo_postal, direccion])
        res.send({
            id: rows.insertId,
            distrito,
            codigo_postal,
            direccion,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteLugartienda = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM lugar_tienda WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Lugartienda not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateLugartienda = async (req, res) => {
    try {
        const {id} = req.params
        const {distrito, codigo_postal, direccion} = req.body

        const [result] = await pool.query('UPDATE lugar_tienda SET distrito = ?, codigo_postal = ?, direccion = ? WHERE id = ?', [distrito, codigo_postal, direccion, id])
    
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Lugartienda not found'
        })

        const [rows] = await pool.query('SELECT * FROM lugar_tienda WHERE id = ?', [req.params.id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}