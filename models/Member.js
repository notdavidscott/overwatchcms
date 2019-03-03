const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MemberSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  ministies: {
    type: [String]
  },
  family: [
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String
        },
        relation: {
            type: String, 
        },
        date: {
        type: Date,
        default: Date.now
        }
    },
],
  notes: [
        {
            user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
            },
            title: {
            type: String, 
            required: true
            },
            text: {
            type: String,
            required: true
            },
            avatar: {
            type: Schema.Types.ObjectId,
            ref: 'user'
            },
            date: {
            type: Date,
            default: Date.now
            }
        },
    ],
    date: {
    type: Date,
    default: Date.now
  } 

});

module.exports = Member = mongoose.model('member', MemberSchema);
