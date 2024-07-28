// transferToGoogleSheets.js
const { google } = require('googleapis');
const mongoose = require('mongoose');
const credentials = require('./credentials.json'); // Your credentials JSON file

// MongoDB connection URI
const uri = 'your_mongodb_connection_string';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your data model (replace this with your actual model)
const DataModel = mongoose.model('Data', new mongoose.Schema({
  firstName: String,
  lastName: String,
  pronouns: String,
  email: String,
  phone: String,
  ancestry: String,
  country: String,
  city: String,
  ageGroup: String,
  gender: String,
  experience: {
    firstEngagement: String,
    realization: String,
    recoveryProcess: String,
    obstacles: String,
    impact: String,
  }
}));

// Function to authorize and get the sheets client
const authorize = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
};

// Function to transfer data to Google Sheets
const transferToGoogleSheets = async () => {
  try {
    const sheets = await authorize();

    const data = await DataModel.find().lean();
    if (data.length === 0) {
      console.log('No data found');
      return;
    }

    const sheetData = [
      ['First Name', 'Last Name', 'Pronouns', 'Email', 'Phone', 'Ancestry', 'Country', 'City', 'Age Group', 'Gender', 'First Engagement', 'Realization', 'Recovery Process', 'Obstacles', 'Impact']
    ];

    data.forEach((item) => {
      sheetData.push([
        item.firstName,
        item.lastName,
        item.pronouns,
        item.email,
        item.phone,
        item.ancestry,
        item.country,
        item.city,
        item.ageGroup,
        item.gender,
        item.experience.firstEngagement,
        item.experience.realization,
        item.experience.recoveryProcess,
        item.experience.obstacles,
        item.experience.impact
      ]);
    });

    const spreadsheetId = 'your_spreadsheet_id'; // Replace with your spreadsheet ID
    const range = 'Sheet1!A1'; // Adjust the range as needed

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: sheetData
      }
    });

    console.log('Data transferred to Google Sheets successfully');
  } catch (error) {
    console.error('Error transferring data to Google Sheets', error);
  } finally {
    mongoose.connection.close();
  }
};

transferToGoogleSheets();
