const data = {
  "결투의 대가 Lv. 1": 1.05,
  "결투의 대가 Lv. 2": 1.12,
  "결투의 대가 Lv. 3": 1.25,
  "기습의 대가 Lv. 1": 1.05,
  "기습의 대가 Lv. 2": 1.12,
  "기습의 대가 Lv. 3": 1.25,
  "달인의 저력 Lv. 1": 1.03,
  "달인의 저력 Lv. 2": 1.08,
  "달인의 저력 Lv. 3": 1.16,
  "돌격대장 Lv. 1": 1.04,
  "돌격대장 Lv. 2": 1.088,
  "돌격대장 Lv. 3": 1.18,
  "바리케이드 Lv. 1": 1.03,
  "바리케이드 Lv. 2": 1.08,
  "바리케이드 Lv. 3": 1.16,
  "속전속결 Lv. 1": 1.04,
  "속전속결 Lv. 2": 1.1,
  "속전속결 Lv. 3": 1.2,
  "슈퍼 차지 Lv. 1": 1.04,
  "슈퍼 차지 Lv. 2": 1.1,
  "슈퍼 차지 Lv. 3": 1.2,
  "안정된 상태 Lv. 1": 1.03,
  "안정된 상태 Lv. 2": 1.08,
  "안정된 상태 Lv. 3": 1.16,
  "예리한 둔기 Lv. 1": 1,
  "예리한 둔기 Lv. 2": 1.06,
  "예리한 둔기 Lv. 3": 1.16,
  "원한 Lv. 1": 1.04,
  "원한 Lv. 2": 1.1,
  "원한 Lv. 3": 1.2,
  "타격의 대가 Lv. 1": 1.03,
  "타격의 대가 Lv. 2": 1.08,
  "타격의 대가 Lv. 3": 1.16,
  "공격력 감소 Lv. 1": 0.98,
  "공격력 감소 Lv. 2": 0.96,
  "공격력 감소 Lv. 3": 0.94,
};

const critData = {
  "아드레날린 Lv. 1": 5,
  "아드레날린 Lv. 2": 10,
  "아드레날린 Lv. 3": 15,
  "정밀 단도 Lv. 1": 4,
  "정밀 단도 Lv. 2": 10,
  "정밀 단도 Lv. 3": 15,
};

const engraving = {
  getDamage: (arr) => {
    let value = 1;

    if (arr === null) {
      return value;
    }

    for (let i = 0; i < arr.length; i++) {
      value *= data[arr[i].Name] ?? 1;
    }

    return value;
  },

  getCrit: (arr) => {
    let value = 0;

    if (arr === null) {
      return value;
    }

    for (let i = 0; i < arr.length; i++) {
      value += critData[arr[i].Name] ?? 0;
    }

    return value;
  },
};

module.exports = engraving;
