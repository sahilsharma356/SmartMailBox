const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const deliveredItems = new Schema ([ 
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
           type: Int64
       },
    }
]);

const DeliveredItems = mongoose.model("Data", deliveredItems);

module.exports = DeliveredItems;