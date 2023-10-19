const fs = require('fs');
const path = require('path');

const modelo = {
    fileRoute: path.join(__dirname, '../data/products.json'),

    // Read all
    findAll: () => {
        // Buscamos el contenido del archivo JSON
        const jsonData = fs.readFileSync(modelo.fileRoute, 'utf-8');
        // Convertimos el JSON en Javascript
        const products = JSON.parse(jsonData);

        return products;
    },

    // Read one
    findById: (id) => {
        // Obtenemos todos los productos
        const products = modelo.findAll();

        const selectedProduct = products.find(productoActual => productoActual.id == id);

        return selectedProduct;
    },

    // Create one
    createProduct: (bodyData) => {
        let products = modelo.findAll();

        const lastProdId = products[products.length - 1].id;

        const newProduct = {
            id: lastProdId + 1,
            ...bodyData
        };

        products.push(newProduct);

        // Convertimos el Javascript en JSON
        const jsonData = JSON.stringify(products);

        fs.writeFileSync(modelo.fileRoute, jsonData, 'utf-8');

        return newProduct;
    },

    // Delete
    destroy: (id) => {
        let products = modelo.findAll();

        // Filtramos el producto de ID seleccionado
        products = products.filter(productoActual => productoActual.id !== id);

        console.log(products);

        const jsonProducts = JSON.stringify(products);

        fs.writeFileSync(modelo.fileRoute, jsonProducts, 'utf-8');
    },

    // Edit
    updateProduct: (updatedProduct) => {
        // Buscar array de productos ya existentes
        let products = modelo.findAll();
        // Conseguir en qué indice de ese array, está guardado el producto del id en cuestión
        const prodIndex = products.findIndex(productoActual => productoActual.id === updatedProduct.id);
        // Modificar el elemento del array en ese índice, por el que nos pasaron por parámetro
        products[prodIndex] = updatedProduct;
        // Convertir este nuevo array en JSON
        const productsJson = JSON.stringify(products);
        // Guardar todo al JSON
        fs.writeFileSync(modelo.fileRoute, productsJson, 'utf-8');
    }
};


module.exports = modelo;