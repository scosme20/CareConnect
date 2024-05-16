import mongoose, { Schema } from 'mongoose';


class IDonationRepository {

  async create(donationData) {}

  async find() {}

  async findById(id) {}

  async findByIdAndDelete(id) {}

  async findByIdAndUpdate(id, newData) {}
}


class DonationRepository extends IDonationRepository {
  constructor(donationModel) {
    super();

    this.donationModel = donationModel;
  }


  async create(donationData) {
    return await this.donationModel.create(donationData);
  }


  async find() {
    return await this.donationModel.find();
  }


  async findById(id) {
    return await this.donationModel.findById(id);
  }


  async findByIdAndDelete(id) {
    return await this.donationModel.findByIdAndDelete(id);
  }


  async findByIdAndUpdate(id, newData) {
    return await this.donationModel.findByIdAndUpdate(id, newData, { new: true });
  }
}


class DonationRepositoryFactory {
  static create(donationModel) {
    return new DonationRepository(donationModel);
  }
}


const donationSchema = new Schema({
  tipo: {
    type: String,
    required: true,
    unique: true
  },
  quantidade: {
    type: Number,
    required: true,
  },
  origem: {
    type: String,
    required: true
  },
}, { timestamps: true }); 


const DonationModel = mongoose.model('Donation', donationSchema);


const DonationModels = new DonationRepository(DonationModel);


export default DonationModels;
