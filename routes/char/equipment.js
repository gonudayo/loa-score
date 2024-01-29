let template = {
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
  bracelet: [],
};

const equipment = {
  set: (arr) => {
    let value = JSON.parse(JSON.stringify(template));

    if (arr === null) {
      return value;
    }

    for (let i = 0; i < arr.length; i++) {
      if (i < 6) {
        const vaildType = ["무기", "투구", "상의", "하의", "장갑", "어깨"];
        if (vaildType.includes(arr[i].Type)) {
          let tmp = arr[i].Tooltip.split(" <FONT COLOR='#FFD200'>Lv.");
          let set = tmp[0].slice(-2);
          let level = tmp[1].slice(0, 1);
          ++value[set][level];
        }
      } else if (arr[i].Type === "팔찌") {
        const regexPattern = /<FONT COLOR=''>\s*([^<]+)\s*<\/FONT>/g;
        const matches = [];

        let match;
        while ((match = regexPattern.exec(arr[i].Tooltip)) !== null) {
          matches.push(match[1]);
        }

        value.bracelet.push(matches);
      }
    }

    return value;
  },

  bracelet: (arr) => {
    if (arr === null) {
      return value;
    }
  },
};

module.exports = equipment;
