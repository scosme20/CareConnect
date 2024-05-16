import VolunteerModels from '../Models/volunteersModel.js';

class VolunteerController {

  static async createVolunteerGroup(req, res) {
    try {
      const { nomeGrupo, voluntarios, correspondencia, agendamento, reconhecimento } = req.body;

      const newVolunteerGroup = await VolunteerModels.create({ nomeGrupo, voluntarios, correspondencia, agendamento, reconhecimento });

      return res.status(201).json(newVolunteerGroup);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getAllVolunteerGroups(req, res) {
    try {

      const volunteerGroups = await VolunteerModels.find();

      return res.status(200).json(volunteerGroups);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async getVolunteerGroupById(req, res) {
    try {
      const { id } = req.params;

      const volunteerGroup = await VolunteerModels.findById(id);

      if (!volunteerGroup) {
        return res.status(404).json({ message: 'Grupo de voluntariado não encontrado' });
      }

      return res.status(200).json(volunteerGroup);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async updateVolunteerGroup(req, res) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const updatedVolunteerGroup = await VolunteerModels.findByIdAndUpdate(id, newData, { new: true });

      if (!updatedVolunteerGroup) {
        return res.status(404).json({ message: 'Grupo de voluntariado não encontrado' });
      }

      return res.status(200).json(updatedVolunteerGroup);
    } catch (error) {

      return res.status(500).json({ error: error.message });
    }
  }


  static async deleteVolunteerGroup(req, res) {
    try {
      const { id } = req.params;

      const deletedVolunteerGroup = await VolunteerModels.findByIdAndDelete(id);

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
