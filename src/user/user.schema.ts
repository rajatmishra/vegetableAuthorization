import * as mongoose from 'mongoose';
//import * as bcrypt from 'bcryptjs';

export const UserSchema = new mongoose.Schema({
    email: String/*{
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
          validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: "Please enter a valid email"
      },
      required: [true, "Email required"]
  }*/,
    password: String,
    userType: {
      type: String,
      enum : ['user','admin'],
      default: 'user'
  },
    created_at: { type: Date, default: Date.now },
    updated_at:{ type: Date, default: Date.now }
   /* async hashPassword() {
        this.password = await bcrypt.hash(this.password, 8);
      }*/
})