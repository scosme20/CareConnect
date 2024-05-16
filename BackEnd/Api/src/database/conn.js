import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Conectado no banco');
    } catch (error) {
        console.error(error);
    }
}

export default main;

