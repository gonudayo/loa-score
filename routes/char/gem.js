const data = {
  10: 1.4,
  9: 1.3,
  8: 1.24,
  7: 1.21,
  6: 1.18,
  5: 1.15,
  4: 1.12,
  3: 1.09,
  2: 1.06,
  1: 1.03,
};

const gem = (arr) => {
  let value = 0,
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Name.split("레벨 ")[1].split("의 보석")[0] == "멸화") {
      ++cnt;
      value += data[arr[i].Level];
    }
  }
  return value / cnt;
};

module.exports = gem;
