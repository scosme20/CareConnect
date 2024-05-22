import mongoose, { Schema } from 'mongoose';

const volunteerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  shift: String,
  contact: String
}, { timestamps: true });

const VolunteerModel = mongoose.model('Volunteer', volunteerSchema);

export default VolunteerModel;




