// controllers/productController.js
import { pool } from '../config/db.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const [result] = await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
        res.json({ id: result.insertId, name, price });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        await pool.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id]);
        res.json({ id, name, price });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM products WHERE id = ?', [id]);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};
