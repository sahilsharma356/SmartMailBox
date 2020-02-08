const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const orderedItems = new Schema ([ 
    {
        delivered: {
            type: Boolean
        }, 

        time: {
            type: String
        },

        weight: {
            type: Double
        },

       barcode: {
           type: Integer
       },
    }
]);

const OrderedItems = mongoose.model("Data", orderedItems);

module.exports = OrderedItems;