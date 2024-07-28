const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  pronouns: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ancestry: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  ageGroup: { type: String, required: true },
  gender: { type: String, required: true },
  experience: {
    firstEngagement: { type: String, required: true },
    realization: { type: String, required: true },
    recoveryProcess: { type: String, required: true },
    obstacles: { type: String, required: true },
    impact: { type: String, required: true }
  }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
