const equipment = (arr) => {
  let value = [];
  for (let i = 0; i < 6; i++) {
    let tmp = arr[i].Tooltip.split(" <FONT COLOR='#FFD200'>Lv.");
    let set = tmp[0].slice(-2);
    let level = tmp[1].slice(0, 1);
    value.push({ set, level });
  }
  return value;
};

module.exports = equipment;
