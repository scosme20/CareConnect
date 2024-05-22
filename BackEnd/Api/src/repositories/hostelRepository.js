import mongoose, { Schema } from 'mongoose';

class HostelRepository {
  constructor(hostelModel) {
    this.hostelModel = hostelModel;
  }

  async create(hostelData) {
    return await this.hostelModel.create(hostelData);
  }

  async find() {
    return await this.hostelModel.find();
  }

  async findById(id) {
    return await this.hostelModel.findById(id);
  }

  async findByIdAndDelete(id) {
    return await this.hostelModel.findByIdAndDelete(id);
  }

  async findByIdAndUpdate(id, newData) {
    return await this.hostelModel.findByIdAndUpdate(id, newData, { new: true });
  }
}

const hostelSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  localizacao: {
    type: String,
    required: true
  },
  capacidade: {
    type: Number,
    required: true
  },
  servicos: [String],
  avaliacoes: [{
    usuario: String,
    comentario: String,
    classificacao: Number // De 1 a 5
  }],
  reservas: [{
    moradorRuaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Homeless'
    },
    dataCheckIn: Date,
    dataCheckOut: Date
  }],
  doacoesRecebidas: [{
    tipo: String,
    quantidade: Number,
    origem: String,
    dataRecebimento: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

const HostelModel = mongoose.model('Hostel', hostelSchema);
const HostelRepositoryInstance = new HostelRepository(HostelModel);

export default HostelRepositoryInstance;
