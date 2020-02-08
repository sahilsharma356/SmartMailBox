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
            type: String
        },

       barcode: {
           type: String
       },
    }
]);

const Ordered = mongoose.model("OrderedItems", orderedItems);

module.exports = Ordered;