const api = require("./api");
const card = require("./card");
const engraving = require("./engraving");

const ctrl = async (req, res) => {
  const profiles = await api(req.params.name, "/profiles").then((body) => {
    return body.data;
  });

  const equipment = await api(req.params.name, "/equipment").then((body) => {
    return body.data;
  });

  const engravings = await api(req.params.name, "/engravings").then((body) => {
    return body.data.Effects;
  });

  const cards = await api(req.params.name, "/cards").then((body) => {
    return body.data.Effects[0].Items;
  });

  let attackPower = profiles.Stats[7].Value;
  let additionalDamage =
    1 + equipment[0].Tooltip.split("추가 피해 +")[1].split("%")[0] / 100;
  let cardDamage = card[cards[cards.length - 1].Name] ?? 1;
  let engravingDamage = engraving(engravings);

  return res.status(200).json({
    data: attackPower * additionalDamage * cardDamage * engravingDamage,
  });
};

module.exports = ctrl;
