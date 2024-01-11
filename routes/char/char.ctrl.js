const api = require("./api");

const ctrl = async (req, res) => {
  const level = await api(req.params.name, "/profiles").then((body) => {
    return body.data.Stats[7].Value;
  });

  return res.status(200).json({
    name: req.params.name,
    level: level,
  });
};

module.exports = ctrl;
