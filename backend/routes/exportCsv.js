const express = require('express');
const router = express.Router();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Submission = require('../models/Submission');

// CSV Export Route
router.get('/', async (req, res) => {
  const csvWriter = createCsvWriter({
    path: 'submissions.csv',
    header: [
      { id: 'email', title: 'Email' },
      { id: 'currentCountry', title: 'Current Country' },
      { id: 'originalCountry', title: 'Original Country' },
      { id: 'ageGroup', title: 'Age Group' },
      { id: 'gender', title: 'Gender' },
      { id: 'background', title: 'Background' },
      { id: 'additionalInfo', title: 'Additional Info' },
      { id: 'diagnosis.wasDiagnosed', title: 'Was Diagnosed' },
      { id: 'diagnosis.whoDiagnosed', title: 'Who Diagnosed' },
      { id: 'symptoms', title: 'Symptoms' },
      { id: 'barriersToTreatment', title: 'Barriers to Treatment' },
      { id: 'helpfulTreatment', title: 'Helpful Treatment' },
      { id: 'accessibility', title: 'Accessibility' },
      { id: 'otherIdentities', title: 'Other Identities' },
      { id: 'otherMentalIllnesses', title: 'Other Mental Illnesses' },
      { id: 'personalityTraits', title: 'Personality Traits' },
      { id: 'additionalComments', title: 'Additional Comments' },
      { id: 'consentForPublication', title: 'Consent for Publication' },
      { id: 'consentForFollowUp', title: 'Consent for Follow-Up' }
    ]
  });

  try {
    const submissions = await Submission.find().lean();
    
    // Format submissions to match the structure expected by the CSV writer
    const formattedSubmissions = submissions.map(submission => ({
      email: submission.email || '',
      currentCountry: submission.currentCountry || '',
      originalCountry: submission.originalCountry || '',
      ageGroup: submission.ageGroup || '',
      gender: submission.gender || '',
      background: submission.background || '',
      additionalInfo: submission.additionalInfo || '',
      'diagnosis.wasDiagnosed': submission.diagnosis?.wasDiagnosed || '',
      'diagnosis.whoDiagnosed': submission.diagnosis?.whoDiagnosed || '',
      symptoms: submission.symptoms || '',
      barriersToTreatment: submission.barriersToTreatment || '',
      helpfulTreatment: submission.helpfulTreatment || '',
      accessibility: submission.accessibility || '',
      otherIdentities: submission.otherIdentities || '',
      otherMentalIllnesses: submission.otherMentalIllnesses || '',
      personalityTraits: submission.personalityTraits || '',
      additionalComments: submission.additionalComments || '',
      consentForPublication: submission.consentForPublication ? 'Yes' : 'No',
      consentForFollowUp: submission.consentForFollowUp || ''
    }));

    // Write the CSV file
    await csvWriter.writeRecords(formattedSubmissions);

    // Send the CSV file as a response
    res.download('submissions.csv', 'submissions.csv', (err) => {
      if (err) {
        console.error('Error downloading the file:', err);
        res.status(500).send('Error downloading the file');
      } else {
        console.log('CSV file created and sent successfully.');
      }
    });
  } catch (error) {
    console.error('Error writing to CSV:', error);
    res.status(500).send('Error creating CSV file');
  }
});

module.exports = router;
