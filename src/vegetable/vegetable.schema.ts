import * as mongoose from 'mongoose';

export const VegetableSchema = new mongoose.Schema({
    color: String,
    price: Number,
    name: String,
    created_at: { type: Date, default: Date.now }
})