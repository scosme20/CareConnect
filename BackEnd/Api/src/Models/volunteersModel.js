// volunteersModel.js
import mongoose, { Schema, model } from 'mongoose';

const volunteerSchema = new Schema({
  nomeGrupo: String,
  voluntarios: [String],
  correspondencia: [String],
  agendamento: [String],
  reconhecimento: String
}, { timestamps: true });

const VolunteerModel = model('Volunteer', volunteerSchema);

export default VolunteerModel;


