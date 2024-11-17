const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Product = require("../models/Product"); // Importa el modelo

const connectDB = async () => {
  try {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB en memoria conectado: ${uri}`);

    // Inserta datos iniciales
    const initialProducts = [
      {
        name: "Camiseta de Algodón",
        description: "Camiseta cómoda y de alta calidad.",
        price: 19.99,
        image: "https://via.placeholder.com/150",
        category: "Ropa",
        stock: 50,
      },
      {
        name: "Audífonos Bluetooth",
        description: "Audífonos inalámbricos de alta fidelidad.",
        price: 49.99,
        image: "https://via.placeholder.com/150",
        category: "Electrónica",
        stock: 30,
      },
    ];

    await Product.insertMany(initialProducts);
    console.log("Datos iniciales insertados.");
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
