const mongoose = require('mongoose');
const performanceSchema = new mongoose.Schema({
  assetId: {
    type: String,
    required: [true, 'an Asset ID must be provided'],
    unique: true,
  },
  uptime: {
    type: Date,
    required: true,
  },
  downtime: {
    type: Date,
  },

  cost: {
    type: Number,
    required: true,
    
  },
  failurRate: {
    type: Number,
    required: true,
  },
  efficiency: {
    type: Number,
    required: true,
  }
});
const Performance = mongoose.model('Performance', performanceSchema);
module.exports = Performance;