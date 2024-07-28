const express = require('express');
const router = express.Router();

const Person = require('../models/person.js');

router.post('/', async (req, res) => {
    const data = req.body;
    const newperson = new Person(data);
    console.log(`data of new person ${data.name} is saved`)
    try {
        const response = await newperson.save();
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

})

router.get('/', async (req, res) => {
    try {
        
        const response = await Person.find(req.query);
        if(response.length==0){
            res.status(404).json("No persons found");
         }
        else res.status(200).json(response);
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
})

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;

        const want = {
            work: worktype,
            ...req.query
        };
        const response = await Person.find(want);
        if (response.length == 0) {
            res.status(404).json({
                error: "Not found"
            });
        }
        else res.status(201).json(response);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const updatedddata = req.body;
        const response = await Person.findByIdAndUpdate(personid, updatedddata, {
            new: true,
            runValidators: true
        })
        if (!response) {
            res.status(404).json("No such person found");
        }
        else res.status(201).json(response);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
})
router.put('/', async (req, res) => {
    try {
        const updatedddata = req.body;
        const response = await Person.updateMany(req.query, updatedddata)
        if (response.modifiedCount==0) {
            res.status(404).json("Person not found")
        }
        else res.status(201).json(response);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const response = await Person.findByIdAndDelete(personid);
        if (!response) {
            res.status(404).json("Person to be deleted not found");
        }
        else res.status(201).json({
            deletedperson: response
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})

router.delete('/', async (req, res) => {
    try {
        
        const response = await Person.deleteMany(req.query);
        if (response.deletedCount==0) {
            res.status(404).json("Person to be deleted not found");
        }
        else res.status(201).json({
           deletedperson: response
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})
module.exports = router;

