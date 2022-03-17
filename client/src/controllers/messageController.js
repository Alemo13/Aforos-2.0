const mongoose = require('mongoose');
const { placeSchema } = require('../models/placeModel');
// const collection = process.env.COLLECTION || 'Place';

const MessageModel = mongoose.model("Place", placeSchema)

async function processMessage(message, messageChannel) {
    const messageContent = JSON.parse(message.content.toString());
    // console.log(messageContent);
    const newMessage = new MessageModel({tipo: messageContent.tipo, nombre: messageContent.nombre, capacidad: messageContent.capacidad});
    if(!newMessage){
        await newMessage.save();
    }else{
        await MessageModel.findByIdAndUpdate(newMessage._id, newMessage)
    }
    messageChannel.ack(message);
}

module.exports = {
    processMessage: processMessage
}