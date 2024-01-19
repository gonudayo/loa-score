const api = require("./api");
const card = require("./card");
const engraving = require("./engraving");
const gem = require("./gem");
const equipment = require("./equipment");

const ctrl = async (req, res) => {
  const profiles = await api(req.params.name, "/profiles").then((body) => {
    return body.data;
  });

  const equipments = await api(req.params.name, "/equipment").then((body) => {
    return body.data;
  });

  const engravings = await api(req.params.name, "/engravings").then((body) => {
    return body.data.Effects;
  });

  const cards = await api(req.params.name, "/cards").then((body) => {
    return body.data.Effects[0].Items;
  });

  const gems = await api(req.params.name, "/gems").then((body) => {
    return body.data;
  });

  let attackPower = profiles.Stats[7].Value;
  let additionalDamage =
    1 + equipments[0].Tooltip.split("추가 피해 +")[1].split("%")[0] / 100;
  let cardDamage = card[cards[cards.length - 1].Name] ?? 1;
  let engravingDamage = engraving.getDamage(engravings);
  let gemDamage = gem(gems.Gems);

  let critRate =
    profiles.Stats[0].Value / 27.944 + engraving.getCrit(engravings);

  let tmp = equipment(equipments);

  return res.status(200).json({
    score:
      attackPower * additionalDamage * cardDamage * engravingDamage * gemDamage,
    critRate: critRate,
    set: tmp,
  });
};

module.exports = ctrl;
