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
  cho: [],
  elixir: [
    {
      sum: 0,
    },
  ],
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
          let setTmp = arr[i].Tooltip.split(" <FONT COLOR='#FFD200'>Lv.");
          let set = setTmp[0].slice(-2);
          let level = setTmp[1].slice(0, 1);
          ++value[set][level];

          if (arr[i].Type !== vaildType[0]) {
            if (arr[i].Tooltip.includes("초월")) {
              let choTmp = arr[i].Tooltip.split(
                "</FONT>단계 <img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img>"
              );
              let grade = choTmp[0].slice(-1);
              const matchResult = choTmp[1].match(/\d+/);
              let num = parseInt(matchResult[0], 10);

              value.cho.push({
                set: arr[i].Type,
                grade: grade,
                num: num,
              });
            }
            if (arr[i].Tooltip.includes("엘릭서")) {
              const regexStart = /<\/FONT>(.*?)<FONT color='#FFD200'>Lv\./g;
              const regexEnd = /<FONT color='#FFD200'>Lv\.(.*?)<\/FONT>/g;

              const matchName = arr[i].Tooltip.match(regexStart);
              const matchLevel = arr[i].Tooltip.match(regexEnd);

              for (let j = 0; j < matchName.length; j++) {
                let name = matchName[j].match(/> (.*?) </)[1];
                let level = Number(matchLevel[j].match(/>Lv\.(.*?)</)[1]);
                value.elixir.push({
                  set: arr[i].Type,
                  name: name,
                  level: level,
                });
                value.elixir[0].sum += level;
              }
            }
          }
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
};

module.exports = equipment;
