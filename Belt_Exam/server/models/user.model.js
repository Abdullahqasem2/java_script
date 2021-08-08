const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({
    project: { type: String,
      required: [
                  true,
                  "First Name is required"
                ],
      minlength:[3,
                "First Name must be at least 3 char"
              ],
      unique: [true,
              "project must be unique"
      ],
                },
/////////////////////////////////////////////////////////////////////////
status: { type: Number,
required: [
              true,
              "section is required"
            ],
  min:[1,
            "section must be at least 3 char"
            ]
 },
/////////////////////////////////////////////////////////////////////////
due: {
    type: Date,
    min: '1994-09-28',
    max: '2021-05-23'
  }
},
////////////////////////////////////////////////////////////////////////////
 { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);
