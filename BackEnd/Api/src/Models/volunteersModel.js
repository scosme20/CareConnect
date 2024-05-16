import mongoose, { Schema } from 'mongoose';

class IVolunteerRepository {

  async create(volunteerData) {}

  async find() {}

  async findById(id) {}

  async findByIdAndDelete(id) {}

  async findByIdAndUpdate(id, newData) {}
}


class VolunteerRepository extends IVolunteerRepository {
  constructor(volunteerModel) {
    super();

    this.volunteerModel = volunteerModel;
  }


  async create(volunteerData) {
    return await this.volunteerModel.create(volunteerData);
  }

  async find() {
    return await this.volunteerModel.find();
  }

  async findById(id) {
    return await this.volunteerModel.findById(id);
  }


  async findByIdAndDelete(id) {
    return await this.volunteerModel.findByIdAndDelete(id);
  }


  async findByIdAndUpdate(id, newData) {
    return await this.volunteerModel.findByIdAndUpdate(id, newData, { new: true });
  }
}


class VolunteerRepositoryFactory {
  static create(volunteerModel) {
    return new VolunteerRepository(volunteerModel);
  }
}


const volunteerSchema = new Schema({

  nomeGrupo: {
    type: String,
    enum: ['Voluntariado em Ação', 'Mãos Solidárias'],
    required: true
  },

  voluntarios: [{
    nome: String,
    habilidades: [String],
    disponibilidade: String 
  }],

  correspondencia: [{
    habilidade: String,
    necessidade: String
  }],

  agendamento: [{
    atividade: String,
    data: Date,
    voluntarios: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Volunteer'
    }]
  }],

  reconhecimento: {
    maisAtivos: [String], 
    incentivos: String 
  }
}, { timestamps: true }); 


const VolunteerModel = mongoose.model('Volunteer', volunteerSchema);


const VolunteerModels = new VolunteerRepository(VolunteerModel);


export default VolunteerModels;
