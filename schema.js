const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value.indexOf("@") > 0;
            },
            message: props => `${props.value} is not a valid email!`
        },
        index: {
            unique: true,
            sparse: true
        }
    },
    gender: {
        type: String,
        enum: ['m', 'f']
    },
    age: Number,
    createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', function(next, done) {
    console.log('before saving user');
    next();
});

const orderSchema = new Schema({
    items: [String],
    total: Number,
    user: {
        type: Schema.Types.ObjectId, ref: 'Users'
    }
});

exports.userSchema = userSchema;
exports.orderSchema = orderSchema;