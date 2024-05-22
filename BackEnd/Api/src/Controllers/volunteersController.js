import VolunteerModel from '../Models/volunteersModel.js';

class VolunteerController {
  async createVolunteer(req, res) {
    try {
      const { body } = req;
      const newVolunteer = await VolunteerModel.create(body);
      return res.status(201).json(newVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllVolunteers(req, res) {
    try {
      const volunteers = await VolunteerModel.find();
      return res.status(200).json(volunteers);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getVolunteerById(req, res) {
    try {
      const { id } = req.params;
      const volunteer = await VolunteerModel.findById(id);
      if (!volunteer) {
        return res.status(404).json({ message: 'Volunteer not found' });
      }
      return res.status(200).json(volunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateVolunteer(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedVolunteer = await VolunteerModel.findByIdAndUpdate(id, body, { new: true });
      if (!updatedVolunteer) {
        return res.status(404).json({ message: 'Volunteer not found' });
      }
      return res.status(200).json(updatedVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteVolunteer(req, res) {
    try {
      const { id } = req.params;
      const deletedVolunteer = await VolunteerModel.findByIdAndDelete(id);
      if (!deletedVolunteer) {
        return res.status(404).json({ message: 'Volunteer not found' });
      }
      return res.status(200).json(deletedVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default VolunteerController;




