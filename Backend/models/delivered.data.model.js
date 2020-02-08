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
            type: String
        },

       barcode: {
           type: String
       },
    }
]);

const Delivered = mongoose.model("DeliveredItems", deliveredItems);

module.exports = Delivered;