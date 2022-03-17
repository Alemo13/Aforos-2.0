const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    tipo: String,
    nombre: String,
    capacidad: Number,
});

module.exports = mongoose.model('Place', placeSchema);