import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  interestedcourse: {
    type: String,
    required: true,
    enum: ["software-development", "cyber-security", "dot-net"],
  },
  queries: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Admission =
  mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);

export default Admission;
