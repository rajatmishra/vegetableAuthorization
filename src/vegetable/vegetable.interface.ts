import { Document } from 'mongoose';

export interface Vegetable extends Document {
     color: string;
     price: number;
     name: string;
     created_at: Date;
}