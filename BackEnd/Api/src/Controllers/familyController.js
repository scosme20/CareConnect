
import FamiliesModels from '../Models/familyModels.js'; 


class FamiliesController {

  static async createFamily(req, res) {
    try {
      const { name, register, donation, followUp } = req.body;

      const newFamily = await FamiliesModels.create({ name, register, donation, followUp });

      return res.status(201).json(newFamily);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getAllFamilies(req, res) {
    try {

      const families = await FamiliesModels.find();

      return res.status(200).json(families);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }

  static async getFamilyById(req, res) {
    try {
      const { id } = req.params;

      const family = await FamiliesModels.findById(id);

      if (!family) {
        return res.status(404).json({ message: 'Família não encontrada' });
      }

      return res.status(200).json(family);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }

  static async updateFamily(req, res) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const updatedFamily = await FamiliesModels.findByIdAndUpdate(id, newData, { new: true });

      if (!updatedFamily) {
        return res.status(404).json({ message: 'Família não encontrada' });
      }

      return res.status(200).json(updatedFamily);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async deleteFamily(req, res) {
    try {
      const { id } = req.params;

      const deletedFamily = await FamiliesModels.findByIdAndDelete(id);

      if (!deletedFamily) {
        return res.status(404).json({ message: 'Família não encontrada' });
      }

      return res.status(200).json(deletedFamily);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }
}

export default FamiliesController;
