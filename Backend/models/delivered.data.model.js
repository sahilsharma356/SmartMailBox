const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const deliveredItems = new Schema (
    {
        time: {
            type: String
        },

        weight: {
            type: Number
        },

       barcode: {
           type: Number
       },
    }
);

const deliveredItem = mongoose.model("DeliveredItems", deliveredItems, "DeliveredItems");

module.exports = deliveredItem;