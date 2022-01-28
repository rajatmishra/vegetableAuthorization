import { Document, Schema } from 'mongoose';

export interface UserInterface extends Document {
     email: String,
     password: String,
     userType: String,
     created_at: Date,
     updated_at:Date
}