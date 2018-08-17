module.exports.getGif = (category) => {
    var gifs = require("./jsons/gifs.json");

    var img = gifs[category]["gif"][this.randomInteger(0, gifs[category]["gif"].length - 1)];
    var msg = gifs[category]["text"][this.randomInteger(0, gifs[category]["text"].length - 1)];

    return { img, msg }
};
