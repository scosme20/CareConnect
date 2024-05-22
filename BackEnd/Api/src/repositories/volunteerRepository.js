import VolunteerModels from '../Models/volunteersModel';

export default class VolunteerRepository {
  static async createVolunteerGroup(volunteerGroupData) {
    return await VolunteerModels.create(volunteerGroupData);
  }

  static async getAllVolunteerGroups() {
    return await VolunteerModels.find();
  }

  static async getVolunteerGroupById(id) {
    return await VolunteerModels.findById(id);
  }

  static async updateVolunteerGroup(id, newData) {
    return await VolunteerModels.findByIdAndUpdate(id, newData, { new: true });
  }

  static async deleteVolunteerGroup(id) {
    return await VolunteerModels.findByIdAndDelete(id);
  }
}
