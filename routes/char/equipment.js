const equipment = (arr) => {
  let value = {
    사멸: {
      1: 0,
      2: 0,
      3: 0,
    },
    악몽: {
      1: 0,
      2: 0,
      3: 0,
    },
    환각: {
      1: 0,
      2: 0,
      3: 0,
    },
    구원: {
      1: 0,
      2: 0,
      3: 0,
    },
    지배: {
      1: 0,
      2: 0,
      3: 0,
    },
    갈망: {
      1: 0,
      2: 0,
      3: 0,
    },
    배신: {
      1: 0,
      2: 0,
      3: 0,
    },
    파괴: {
      1: 0,
      2: 0,
      3: 0,
    },
    매혹: {
      1: 0,
      2: 0,
      3: 0,
    },
  };

  if (arr === null) {
    return value;
  }

  for (let i = 0; i < 6; i++) {
    let tmp = arr[i].Tooltip.split(" <FONT COLOR='#FFD200'>Lv.");
    let set = tmp[0].slice(-2);
    let level = tmp[1].slice(0, 1);
    ++value[set][level];
  }

  return value;
};

module.exports = equipment;
