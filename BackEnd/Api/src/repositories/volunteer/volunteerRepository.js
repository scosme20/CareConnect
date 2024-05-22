import VolunteerModel from '../../Models/volunteersModel.js';

class VolunteerRepository {
  async createVolunteer(data) {
    return await VolunteerModel.create(data);
  }

  async getAllVolunteers() {
    return await VolunteerModel.find();
  }

  async getVolunteerById(id) {
    return await VolunteerModel.findById(id);
  }

  async updateVolunteer(id, data) {
    return await VolunteerModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteVolunteer(id) {
    return await VolunteerModel.findByIdAndDelete(id);
  }
}

export default VolunteerRepository;

