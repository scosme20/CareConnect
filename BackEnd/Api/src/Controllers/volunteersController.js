import VolunteerRepository from "../repositories/volunteer/volunteerRepository.js";

class VolunteerController {
  constructor() {
    this.volunteerRepository = new VolunteerRepository();
  }

  async createVolunteer(req, res) {
    try {
      const { body } = req;
      const newVolunteer = await this.volunteerRepository.createVolunteer(body);
      return res.status(201).json(newVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllVolunteers(req, res) {
    try {
      const volunteers = await this.volunteerRepository.getAllVolunteers();
      return res.status(200).json(volunteers);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getVolunteerById(req, res) {
    try {
      const { id } = req.params;
      const volunteer = await this.volunteerRepository.getVolunteerById(id);
      if (!volunteer) {
        return res.status(404).json({ message: 'Voluntário não encontrado' });
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
      const updatedVolunteer = await this.volunteerRepository.updateVolunteer(id, body);
      if (!updatedVolunteer) {
        return res.status(404).json({ message: 'Voluntário não encontrado' });
      }
      return res.status(200).json(updatedVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteVolunteer(req, res) {
    try {
      const { id } = req.params;
      const deletedVolunteer = await this.volunteerRepository.deleteVolunteer(id);
      if (!deletedVolunteer) {
        return res.status(404).json({ message: 'Voluntário não encontrado' });
      }
      return res.status(200).json(deletedVolunteer);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default  VolunteerController;


