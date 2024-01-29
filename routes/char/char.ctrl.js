const api = require("./api");
const card = require("./card");
const engraving = require("./engraving");
const gem = require("./gem");
const equipment = require("./equipment");

const ctrl = async (req, res) => {
  let attackPower = 1;
  let critRate = 0;
  let additionalDamage = 1;

  const profiles = await api(req.params.name, "/profiles").then((body) => {
    if (body.data.Stats === null) {
      return body.data;
    }
    attackPower = body.data.Stats[7]?.Value ?? 1;
    critRate += (body.data.Stats[0]?.Value ?? 27.944) / 27.944;
    console.log("공격력 : " + attackPower);
    console.log("치명타 확률 : " + critRate);
    return body.data;
  });

  const equipments = await api(req.params.name, "/equipment").then((body) => {
    if (body.data === null) {
      return body.data;
    }
    additionalDamage =
      (1 + body.data[0].Tooltip.split("추가 피해 +")[1].split("%")[0]) / 100;
    console.log("추가 피해 : " + additionalDamage);
    return body.data;
  });

  const engravings = await api(req.params.name, "/engravings").then((body) => {
    if (body.data === null) {
      return body.data;
    }
    return body.data.Effects;
  });

  const cardDamage = await api(req.params.name, "/cards").then((body) => {
    if (body.data === null) {
      return 1;
    }
    return (
      card[
        body.data.Effects[0].Items[body.data.Effects[0].Items.length - 1].Name
      ] ?? 1
    );
  });

  const gemDamage = await api(req.params.name, "/gems").then((body) => {
    if (body.data === null) {
      return 1;
    }
    return gem(body.data.Gems);
  });

  critRate += engraving.getCrit(engravings);
  let engravingDamage = engraving.getDamage(engravings);
  let set = equipment.set(equipments);

  return res.status(200).json({
    name: profiles.CharacterName,
    score:
      attackPower * additionalDamage * cardDamage * engravingDamage * gemDamage,
    critRate: critRate,
    set: set,
  });
};

module.exports = ctrl;
