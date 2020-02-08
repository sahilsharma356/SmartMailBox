const router = require("express").Router(); 

let OrderedItems = require("../models/ordered.data.model.js");
let DeliveredItems = require("../models/delivered.data.model.js");

// app
router.get("/getOrders", (req, res) => {
    OrderedItems.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get("/getDelivered", (req, res) => {
    DeliveredItems.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err));
});

// rasp pi
router.post("/addOrders", (req, res) => {
    let delivered = req.body.delivered; 
    let time = req.body.time; 
    let weight = req.body.weight;
    let barcode = req.body.barcode;

    let newOrderedData = new OrderedItems({
        delivered,
        time,
        weight,
        barcode,
    }); 

    newOrderedData
        .save()
        .then(() => {
            res.status(200).json({data: "Data was added successfully"}); 
        })
        .catch(err => {
            res.status(400).send("New data was not successfully added"); 
        }); 
});

router.post("/addDelivered", (req, res) => {
    let delivered = req.body.delivered; 
    let time = req.body.time; 
    let weight = req.body.weight; 
    let barcode = req.body.barcode;

    let newDeliveredData = new DeliveredItems({
        delivered,
        time,
        weight,
        barcode
    }); 

    newDeliveredData
        .save()
        .then(() => {
            res.status(200).json({data: "Data was added successfully"}); 
        })
        .catch(err => {
            res.status(400).send("New data was not successfully added"); 
        }); 
});

module.exports = router;