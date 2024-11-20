const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please enter the product name"] ,
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },

    {
        timestamps:true, 
    }
);

const Product = mongoose.model('Product', ProductSchema); // 'Product' is the collection name
module.exports = Product;


//When MongoDB stores data, it automatically pluralizes and lowercases the model name 
//      (e.g., User becomes users in the database).


//Mongoose will add two properties of type Date to your schema.
//      createdAt : a date representing when this document was created.
//      updatedAt : a date representing when this document was last updated.