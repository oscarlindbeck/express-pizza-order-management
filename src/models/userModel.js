import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome do usuário é obrigatório"],
    },
    email: {
      type: String,
      required: [true, "Email do usuário é obrigatório"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Senha do usuário é obrigatório"],
    },
    active: {
      type: Boolean,
      required:  [true, "Active do usuário é obrigatório"],
    }
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", userSchema);
export { User, userSchema };
