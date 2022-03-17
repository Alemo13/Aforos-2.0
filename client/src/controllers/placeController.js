const res = require('express/lib/response');
const mongoose = require('mongoose');
const { placeSchema } = require('../models/placeModel');
// const Place = require('../models/placeModel');
const Place = mongoose.model('Place', placeSchema)

module.exports = {
    index:  async (req, res, next) => {
        const places = await Place.find({});
        res.status(200).json(places);
    },
    
    newPlace: async (req, res, next) => {
        const newPlace = new Place(req.body);
        const place = await newPlace.save();
        res.status(200).json(place);
    },

    getPlace: async (req, res, next) => {
        const { placeId } = req.params;
        const place = await Place.findById(placeId);
        res.status(200).json(place);
    },

    replacePlace: async (req, res, next) => {
        const { placeId } = req.params;
        const newPlace = req.body;
        const oldPlace = await Place.findByIdAndUpdate(placeId, newPlace);
        res.status(200).json({success: true});
    },

    updatePlace: async (req, res, next) => {
        const { placeId } = req.params;
        const newPlace = req.body;
        const oldPlace = await Place.findByIdAndUpdate(placeId, newPlace);
        res.status(200).json({success: true});
    },

    deletePlace: async (req, res, next) => {
        const { placeId } = req.params;
        const oldPlace = await Place.findByIdAndRemove(placeId);
        res.status(200).json({success: true});
    }
    
}