import mongoose, { Document } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
UserSchema.plugin(uniqueValidator)
interface IUser extends Document {
  email: string
  password: string
  firstName: string
  lastName: string
  isValidPassword(password: string): Promise<boolean>
}
const User = mongoose.model<IUser>('User', UserSchema)

export default User
