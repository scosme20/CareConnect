import HostelModels from '../Models/hostelModel.js';

class HostelController {

  static async createHostel(req, res) {
    try {
      const { nome, localizacao, capacidade, servicos } = req.body;

      const newHostel = await HostelModels.create({ nome, localizacao, capacidade, servicos });

      return res.status(201).json(newHostel);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }

  static async getAllHostels(req, res) {
    try {

      const hostels = await HostelModels.find();

      return res.status(200).json(hostels);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getHostelById(req, res) {
    try {
      const { id } = req.params;

      const hostel = await HostelModels.findById(id);

      if (!hostel) {
        return res.status(404).json({ message: 'Albergue não encontrado' });
      }

      return res.status(200).json(hostel);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async updateHostel(req, res) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const updatedHostel = await HostelModels.findByIdAndUpdate(id, newData, { new: true });

      if (!updatedHostel) {
        return res.status(404).json({ message: 'Albergue não encontrado' });
      }

      return res.status(200).json(updatedHostel);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async deleteHostel(req, res) {
    try {
      const { id } = req.params;

      const deletedHostel = await HostelModels.findByIdAndDelete(id);

      if (!deletedHostel) {
        return res.status(404).json({ message: 'Albergue não encontrado' });
      }

      return res.status(200).json(deletedHostel);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }
}


export default HostelController;
