// volunteerRepository.js
import VolunteerModel from '../Models/volunteersModel.js';

class VolunteerRepository {
  async createVolunteerGroup(volunteerGroupData) {
    return await VolunteerModel.create(volunteerGroupData);
  }

  async getAllVolunteerGroups() {
    return await VolunteerModel.find();
  }

  async getVolunteerGroupById(id) {
    return await VolunteerModel.findById(id);
  }

  async updateVolunteerGroup(id, newData) {
    return await VolunteerModel.findByIdAndUpdate(id, newData, { new: true });
  }

  async deleteVolunteerGroup(id) {
    return await VolunteerModel.findByIdAndDelete(id);
  }
}

export default VolunteerRepository;
