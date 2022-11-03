const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    require: true
  },
  country: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  hotelPics: [String],
  activities: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
  }]
}, {
  timestamps: true
});
// blogSchema.remove();

const model = mongoose.model('Blog', blogSchema);
model.count({}, async function (err, count) {
  if (count === 0) {
    
    await model.create({
      firstName: "John",
      lastName: "doe",
      from: "USA",
      country: 'India',
      hotel: "Taj Mahal Hotel",
      hotelPics: ['https://google.co'],
      activities: [{
        name: "visit taj Mahal",
        url: "https://google.com",
      }]
    })
  }
})
module.exports = model;
