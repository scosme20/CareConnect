import HomelessModels from '../Models/homelessModel.js';

class HomelessController {

  static async createHomeless(req, res) {
    try {
      const { nome, idade, historico, necessidades } = req.body;

      const newHomeless = await HomelessModels.create({ nome, idade, historico, necessidades });

      return res.status(201).json(newHomeless);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getAllHomeless(req, res) {
    try {

      const homeless = await HomelessModels.find();

      return res.status(200).json(homeless);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getHomelessById(req, res) {
    try {
      const { id } = req.params;

      const homeless = await HomelessModels.findById(id);

      if (!homeless) {
        return res.status(404).json({ message: 'Registro de morador de rua não encontrado' });
      }

      return res.status(200).json(homeless);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }

 
  static async updateHomeless(req, res) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const updatedHomeless = await HomelessModels.findByIdAndUpdate(id, newData, { new: true });

      if (!updatedHomeless) {
        return res.status(404).json({ message: 'Registro de morador de rua não encontrado' });
      }

      return res.status(200).json(updatedHomeless);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async deleteHomeless(req, res) {
    try {
      const { id } = req.params;

      const deletedHomeless = await HomelessModels.findByIdAndDelete(id);

      if (!deletedHomeless) {
        return res.status(404).json({ message: 'Registro de morador de rua não encontrado' });
      }

      return res.status(200).json(deletedHomeless);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }
}


export default HomelessController;
