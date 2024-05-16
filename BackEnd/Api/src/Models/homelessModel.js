import mongoose, { Schema } from 'mongoose';


class IHomelessRepository {

  async create(homelessData) {}

  async find() {}

  async findById(id) {}

  async findByIdAndDelete(id) {}

  async findByIdAndUpdate(id, newData) {}
}


class HomelessRepository extends IHomelessRepository {
  constructor(homelessModel) {
    super();

    this.homelessModel = homelessModel;
  }


  async create(homelessData) {
    return await this.homelessModel.create(homelessData);
  }


  async find() {
    return await this.homelessModel.find();
  }


  async findById(id) {
    return await this.homelessModel.findById(id);
  }


  async findByIdAndDelete(id) {
    return await this.homelessModel.findByIdAndDelete(id);
  }


  async findByIdAndUpdate(id, newData) {
    return await this.homelessModel.findByIdAndUpdate(id, newData, { new: true });
  }
}


class HomelessRepositoryFactory {
  static create(homelessModel) {
    return new HomelessRepository(homelessModel);
  }
}


const homelessSchema = new Schema({

  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },

  historico: {
    type: String,
    required: true
  },

  necessidades: {
    abrigo: {
      type: Boolean,
      default: false
    },
    alimentacao: {
      type: Boolean,
      default: false
    },
    assistenciaMedica: {
      type: Boolean,
      default: false
    }
  }
}, { timestamps: true }); 


const HomelessModel = mongoose.model('Homeless', homelessSchema);


const HomelessModels = new HomelessRepository(HomelessModel);


export default HomelessModels;
