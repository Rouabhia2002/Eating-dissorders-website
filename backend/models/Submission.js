const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  currentCountry: { type: String, required: true },
  originalCountry: { type: String, required: true },
  ageGroup: { type: String, required: true },
  gender: { type: String, required: true },
  background: { type: String, required: true },
  additionalInfo: { type: String, required: true },
  diagnosis: {
    wasDiagnosed: { type: Boolean, required: true },
    whoDiagnosed: { type: String, required: true }
  },
  symptoms: { type: String, required: true },
  barriersToTreatment: { type: String, required: true },
  helpfulTreatment: { type: String, required: true },
  accessibility: { type: String, required: true },
  otherIdentities: { type: String, required: true },
  otherMentalIllnesses: { type: String, required: true },
  personalityTraits: { type: String, required: true },
  additionalComments: { type: String },
  consentForPublication: { type: Boolean, required: true },
  consentForFollowUp: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);
