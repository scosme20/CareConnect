import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/userRepositories.js'
import { hashPassword, comparePassword } from '../utils/hashUtils.js';

class AuthService {
  async register(username, email, password) {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email já está em uso');
    }

    const hashedPassword = await hashPassword(password);

    const user = { username, email, password: hashedPassword };
    await UserRepository.save(user);

    return { message: 'Usuário registrado com sucesso' };
  }

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user || !(await comparePassword(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return { token };
  }
}

export default new AuthService();
