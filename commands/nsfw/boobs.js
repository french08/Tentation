const { MessageEmbed } = require('discord.js');

const { color } = require('../../config.json')

module.exports = { 

     name: "boobs", 

     description: "Envoie une image nsfw.", 

     category: "🔞・nsfw", 

     botPermission: [], 

     authorPermission: [], 

     ownerOnly: false,

     

     usage: "",

     aliases: ["seins"],

     run: async (client, message, args) => {

         

if (message.channel.nsfw === false) {

    return message.channel.send(":warning: Ce salon n'est pas NSFW !");}

         if (message.channel.nsfw === true) {

 const API = require('anime-images-api')

const images_api = new API() 

        images_api.nsfw.boobs().then(response => {

            

const embed = new MessageEmbed()

    .setTitle('Boobs')

    .setImage(response.image)

    .setColor(color)

            

       

            message.channel.send(embed)

        }) 

    

}

     }
    };