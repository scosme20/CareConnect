
import mongoose from 'mongoose';


const { Schema } = mongoose;


class IFamiliesRepository {

  async create(familiesData) {}

  async find() {}

  async findById(id) {}

  async findByIdAndDelete(id) {}

  async findByIdAndUpdate(id, newData) {}
}


class FamiliesRepository extends IFamiliesRepository {
  constructor(familiesModel) {
    super();

    this.familiesModel = familiesModel;
  }


  async create(familiesData) {
    return await this.familiesModel.create(familiesData);
  }


  async find() {
    return await this.familiesModel.find();
  }


  async findById(id) {
    return await this.familiesModel.findById(id);
  }


  async findByIdAndDelete(id) {
    return await this.familiesModel.findByIdAndDelete(id);
  }


  async findByIdAndUpdate(id, newData) {
    return await this.familiesModel.findByIdAndUpdate(id, newData, { new: true });
  }
}


class FamiliesRepositoryFactory {
  static create(familiesModel) {
    return new FamiliesRepository(familiesModel);
  }
}


const familiesSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },

  register: {
    type: Number,
    required: true,
  },

  donation: {
    type: Number,
    required: true,
  },

  followUp: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true }); 


const FamiliesModel = mongoose.model("Families", familiesSchema);


const FamiliesModels = new FamiliesRepository(FamiliesModel);


export default FamiliesModels;
