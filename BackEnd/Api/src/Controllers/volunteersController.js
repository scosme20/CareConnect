import VolunteerRepository from "../repositories/volunteerRepository.js";

class VolunteerController {
  constructor() {
    this.volunteerRepository = new VolunteerRepository();
  }

  async createVolunteerGroup(req, res) {
    try {
      const { body } = req;
      const newVolunteerGroup = await this.volunteerRepository.createVolunteerGroup(body);
      return res.status(201).json(newVolunteerGroup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAllVolunteerGroups(req, res) {
    try {
      const volunteerGroups = await this.volunteerRepository.getAllVolunteerGroups();
      return res.status(200).json(volunteerGroups);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getVolunteerGroupById(req, res) {
    try {
      const { id } = req.params;
      const volunteerGroup = await this.volunteerRepository.getVolunteerGroupById(id);
      if (!volunteerGroup) {
        return res.status(404).json({ message: 'Grupo de voluntariado não encontrado' });
      }
      return res.status(200).json(volunteerGroup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateVolunteerGroup(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedVolunteerGroup = await this.volunteerRepository.updateVolunteerGroup(id, body);
      if (!updatedVolunteerGroup) {
        return res.status(404).json({ message: 'Grupo de voluntariado não encontrado' });
      }
      return res.status(200).json(updatedVolunteerGroup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteVolunteerGroup(req, res) {
    try {
      const { id } = req.params;
      const deletedVolunteerGroup = await this.volunteerRepository.deleteVolunteerGroup(id);
      if (!deletedVolunteerGroup) {
        return res.status(404).json({ message: 'Grupo de voluntariado não encontrado' });
      }
      return res.status(200).json(deletedVolunteerGroup);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default VolunteerController;

