const express = require('express');
const router = express.Router();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Submission = require('../models/Submission');

// CSV Export Route
router.get('/', async (req, res) => {
  const csvWriter = createCsvWriter({
    path: 'submissions.csv',
    header: [
      { id: 'firstName', title: 'First Name' },
      { id: 'lastName', title: 'Last Name' },
      { id: 'pronouns', title: 'Pronouns' },
      { id: 'email', title: 'Email' },
      { id: 'phone', title: 'Phone' },
      { id: 'ancestry', title: 'Ancestry' },
      { id: 'country', title: 'Country' },
      { id: 'city', title: 'City' },
      { id: 'ageGroup', title: 'Age Group' },
      { id: 'gender', title: 'Gender' },
      { id: 'experience.firstEngagement', title: 'First Engagement' },
      { id: 'experience.realization', title: 'Realization' },
      { id: 'experience.recoveryProcess', title: 'Recovery Process' },
      { id: 'experience.obstacles', title: 'Obstacles' },
      { id: 'experience.impact', title: 'Impact' }
    ]
  });

  try {
    const submissions = await Submission.find().lean();
    const formattedSubmissions = submissions.map(submission => ({
      ...submission,
      'experience.firstEngagement': submission.experience.firstEngagement,
      'experience.realization': submission.experience.realization,
      'experience.recoveryProcess': submission.experience.recoveryProcess,
      'experience.obstacles': submission.experience.obstacles,
      'experience.impact': submission.experience.impact
    }));

    await csvWriter.writeRecords(formattedSubmissions);

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
