import DonationModels from '../Models/donationModels.js';

class DonationController {

  static async createDonation(req, res) {
    try {
      const { tipo, quantidade, origem } = req.body;

      const newDonation = await DonationModels.create({ tipo, quantidade, origem });

      return res.status(201).json(newDonation);
    } catch (error) {
   
      return res.status(500).json({ error: error.message });
    }
  }


  static async getAllDonations(req, res) {
    try {

      const donations = await DonationModels.find();

      return res.status(200).json(donations);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getDonationById(req, res) {
    try {
      const { id } = req.params;

      const donation = await DonationModels.findById(id);

      if (!donation) {
        return res.status(404).json({ message: 'Doação não encontrada' });
      }

      return res.status(200).json(donation);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async updateDonation(req, res) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const updatedDonation = await DonationModels.findByIdAndUpdate(id, newData, { new: true });

      if (!updatedDonation) {
        return res.status(404).json({ message: 'Doação não encontrada' });
      }

      return res.status(200).json(updatedDonation);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async deleteDonation(req, res) {
    try {
      const { id } = req.params;

      const deletedDonation = await DonationModels.findByIdAndDelete(id);

      if (!deletedDonation) {
        return res.status(404).json({ message: 'Doação não encontrada' });
      }

      return res.status(200).json(deletedDonation);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }
}


export default DonationController;
