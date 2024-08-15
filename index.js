// index.js
import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de productos
app.use('/api', productRoutes);

// Puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
