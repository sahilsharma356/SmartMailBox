const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const orderedItems = new Schema ( 
    {
        time: {
            type: String
        },

        weight: {
            type: Number
        },

        barcode: {
            type: Number
        }
        
    }
);

const OrderedItems = mongoose.model("OrderedItems", orderedItems, "OrderedItems");

module.exports = OrderedItems;