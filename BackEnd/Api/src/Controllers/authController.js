import AuthService from '../services/authService.js';

class AuthController {
  async register(req, res) {
    const { username, email, password } = req.body;
    try {
      const result = await AuthService.register(username, email, password);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();

