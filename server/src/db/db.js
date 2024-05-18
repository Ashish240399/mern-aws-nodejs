// db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://ashish:${process.env.MONGO_PASSWORD}@mern-aws-cluster-1.mj0wgca.mongodb.net/?retryWrites=true&w=majority&appName=mern-aws-cluster-1`; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('mern-aws'); // Replace with your database name
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
}

function getDB() {
  if (!db) {
    throw new Error('Database not connected!');
  }
  return db;
}

module.exports = { connectDB, getDB };
