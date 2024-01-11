const axios = require("axios");

const api = async (name, filter) => {
  try {
    return await axios.get(
      encodeURI(
        "https://developer-lostark.game.onstove.com/armories/characters/" +
          name +
          filter
      ),
      {
        headers: { authorization: process.env.TOKEN },
      }
    );
  } catch (error) {}
};

module.exports = api;
