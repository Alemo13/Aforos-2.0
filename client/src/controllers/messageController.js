const mongoose = require('mongoose');
const { placeSchema } = require('../models/placeModel');
const collection = process.env.COLLECTION || 'Place';

const MessageModel = mongoose.model(collection, placeSchema)

function processMessage(message, messageChannel) {
    const messageContent = JSON.parse(message.content.toString());
    // console.log(messageContent);
    const newMessage = new MessageModel({tipo: messageContent.tipo, nombre: messageContent.nombre, capacidad: messageContent.capacidad});
    await newMessage.save();
    newMessage.save();
    messageChannel.ack(message);
}

module.exports = {
    processMessage: processMessage
}