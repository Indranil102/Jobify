import { MongoClient } from 'mongodb';
import fs from 'fs/promises';

const uri = 'mongodb+srv://hackteck:Divyanshupr1@cluster0.3htxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function appendData() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('test');
    const collection = database.collection('jobs');

    // Read JSON file
    const data = JSON.parse(await fs.readFile('data3.json', 'utf-8'));

    // Insert data into the existing collection
    if (Array.isArray(data)) {
      await collection.insertMany(data);
    } else {
      await collection.insertOne(data);
    }

    console.log('Data appended successfully');
  } catch (error) {
    console.error('Error appending data:', error);
  } finally {
    await client.close();
  }
}

appendData();
