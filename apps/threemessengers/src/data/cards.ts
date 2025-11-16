import type { Card } from '../types';

// 북부 발하림 카드 (힘 증명 필요)
export const balharimCards: Card[] = [
  {
    id: 1,
    situation: '여왕의 전사들이 당신의 검술 실력을 시험하려 합니다.',
    leftChoice: {
      text: '결투를 받아들인다',
      persuasionChange: 15,
      leaderResponse: '환영합니다, 전령님. 진정한 전사의 자질을 보이시는군요.',
    },
    rightChoice: {
      text: '말로 설득한다',
      persuasionChange: -5,
      leaderResponse: '말재주보다는... 검으로 말하는 편이 좋습니다.',
    },
  },
  {
    id: 2,
    situation: '프리다 여왕이 "약한 자를 도울 이유가 있나?"라고 묻습니다.',
    leftChoice: {
      text: '"아스텔도 강합니다"',
      persuasionChange: -8,
      leaderResponse: '허세는... 통하지 않습니다.',
    },
    rightChoice: {
      text: '"솔직히 말해 약합니다. 하지만..."',
      persuasionChange: 12,
      leaderResponse: '솔직함은 용기의 시작입니다, 전령님.',
    },
  },
  {
    id: 3,
    situation: '전사들이 술자리에서 힘겨루기를 제안합니다.',
    leftChoice: {
      text: '승부를 받아들인다',
      persuasionChange: 10,
      leaderResponse: '패기가 있으시군요, 전령님.',
    },
    rightChoice: {
      text: '정중히 거절한다',
      persuasionChange: -3,
      leaderResponse: '전사의 기질이... 부족해 보입니다.',
    },
  },
  {
    id: 4,
    situation: '거친 산악 지형을 오르던 중 위험한 지름길과 안전한 우회로가 보입니다.',
    leftChoice: {
      text: '무모하게 지름길로 간다',
      persuasionChange: -5,
      leaderResponse: '용기와 무모함은... 다릅니다.',
    },
    rightChoice: {
      text: '전략적으로 우회한다',
      persuasionChange: 13,
      leaderResponse: '현명하십니다. 진정한 전략가의 판단이군요.',
    },
  },
  {
    id: 5,
    situation: '훈련장에서 전사들과 함께 훈련할 기회가 생겼습니다.',
    leftChoice: {
      text: '열심히 참여한다',
      persuasionChange: 11,
      leaderResponse: '훌륭한 움직임입니다, 전령님.',
    },
    rightChoice: {
      text: '구경만 한다',
      persuasionChange: -2,
      leaderResponse: '직접 부딪쳐야... 배우는 법입니다.',
    },
  },
  {
    id: 6,
    situation: '여왕이 당신의 용기를 시험하려 합니다.',
    leftChoice: {
      text: '당당하게 맞선다',
      persuasionChange: 14,
      leaderResponse: '그 눈빛... 훌륭합니다!',
    },
    rightChoice: {
      text: '신중하게 대답한다',
      persuasionChange: 4,
      leaderResponse: '조금 더... 담대함이 필요해 보입니다.',
    },
  },
  {
    id: 7,
    situation: '검은 제국의 힘에 대해 묻습니다.',
    leftChoice: {
      text: '"우리가 더 강합니다"',
      persuasionChange: -7,
      leaderResponse: '허세는... 자신을 속일 뿐입니다.',
    },
    rightChoice: {
      text: '"강하지만 함께라면 이깁니다"',
      persuasionChange: 14,
      leaderResponse: '그렇습니다, 전령님. 연합의 힘을 믿으시는군요.',
    },
  },
  {
    id: 8,
    situation: '부상당한 전사를 발견했습니다.',
    leftChoice: {
      text: '직접 치료를 시도한다',
      persuasionChange: 5,
      leaderResponse: '용감하시지만... 조금 서툽니다.',
    },
    rightChoice: {
      text: '치료사를 부른다',
      persuasionChange: 12,
      leaderResponse: '현명한 판단입니다, 전령님.',
    },
  },
  {
    id: 9,
    situation: '발하림의 명예로운 전통 의식에 초대받았습니다.',
    leftChoice: {
      text: '적극 참여한다',
      persuasionChange: 10,
      leaderResponse: '우리 문화를 존중하시는군요.',
    },
    rightChoice: {
      text: '관찰만 한다',
      persuasionChange: 1,
      leaderResponse: '참여하지 않으시겠습니까, 전령님?',
    },
  },
  {
    id: 10,
    situation: '여왕이 최후의 질문을 합니다. "왜 당신을 믿어야 하나?"',
    leftChoice: {
      text: '"함께 싸우겠습니다"',
      persuasionChange: 13,
      leaderResponse: '좋습니다... 그 말을 믿겠습니다, 전령님.',
    },
    rightChoice: {
      text: '"조약이 있습니다"',
      persuasionChange: 3,
      leaderResponse: '종이 따위로... 맺어지는 것이 아닙니다.',
    },
  },
];

// 동부 실레나 카드 (황제 vs 섭정)
export const silenaCards: Card[] = [
  {
    id: 1,
    situation: '발레리아 섭정이 "조약? 선황제가 맺은 것일 뿐"이라고 말합니다.',
    leftChoice: {
      text: '알레시아에게만 호소한다',
      persuasionChange: -6,
      leaderResponse: '(발레리아) 현실을 모르는군.',
    },
    rightChoice: {
      text: '발레리아도 설득한다',
      persuasionChange: 11,
      leaderResponse: '(발레리아) 흠... 일리가 있군.',
    },
  },
  {
    id: 2,
    situation: '알레시아가 작게 "저를... 믿어주세요"라고 간청합니다.',
    leftChoice: {
      text: '황제를 지지한다',
      persuasionChange: 14,
      leaderResponse: '(알레시아) 감사합니다!',
    },
    rightChoice: {
      text: '중립을 지킨다',
      persuasionChange: 5,
      leaderResponse: '(알레시아) 그래도... 괜찮아요.',
    },
  },
  {
    id: 3,
    situation: '섭정이 "구체적 이익을 제시하라"고 요구합니다.',
    leftChoice: {
      text: '감정에 호소한다',
      persuasionChange: -5,
      leaderResponse: '(발레리아) 감상주의는 필요 없어.',
    },
    rightChoice: {
      text: '전략적 가치를 설명한다',
      persuasionChange: 13,
      leaderResponse: '(발레리아) 듣고 보니 나쁘지 않군.',
    },
  },
  {
    id: 4,
    situation: '알레시아의 왕관이 흘러내립니다. 발레리아가 비웃습니다.',
    leftChoice: {
      text: '왕관을 바로 올려드린다',
      persuasionChange: 13,
      leaderResponse: '(알레시아) 고마워요...',
    },
    rightChoice: {
      text: '못 본 척한다',
      persuasionChange: -3,
      leaderResponse: '(알레시아) ...',
    },
  },
  {
    id: 5,
    situation: '섭정이 알레시아의 명령을 무시합니다.',
    leftChoice: {
      text: '공개적으로 항의한다',
      persuasionChange: -8,
      leaderResponse: '(발레리아) 건방진 녀석.',
    },
    rightChoice: {
      text: '나중에 조용히 얘기한다',
      persuasionChange: 12,
      leaderResponse: '(발레리아) 외교적이군.',
    },
  },
  {
    id: 6,
    situation: '알레시아가 용기를 내어 "동맹을 지켜야 해요"라고 말합니다.',
    leftChoice: {
      text: '적극 지지한다',
      persuasionChange: 12,
      leaderResponse: '(알레시아) 힘이 나요!',
    },
    rightChoice: {
      text: '조심스럽게 동의한다',
      persuasionChange: 6,
      leaderResponse: '(알레시아) 네...',
    },
  },
  {
    id: 7,
    situation: '발레리아가 "실레나의 실권자는 나"라고 선언합니다.',
    leftChoice: {
      text: '정면으로 반박한다',
      persuasionChange: -7,
      leaderResponse: '(발레리아) 감히!',
    },
    rightChoice: {
      text: '"황제와 함께 다스리시죠"',
      persuasionChange: 14,
      leaderResponse: '(발레리아) 그럴싸한 제안이군.',
    },
  },
  {
    id: 8,
    situation: '알레시아가 비밀리에 만나자고 합니다.',
    leftChoice: {
      text: '응한다',
      persuasionChange: 13,
      leaderResponse: '(알레시아) 제 진심을 들어주세요.',
    },
    rightChoice: {
      text: '공개 회의를 제안한다',
      persuasionChange: 4,
      leaderResponse: '(알레시아) 아... 그래요.',
    },
  },
  {
    id: 9,
    situation: '두 사람이 동시에 당신에게 다른 명령을 내립니다.',
    leftChoice: {
      text: '황제의 명령만 따른다',
      persuasionChange: 5,
      leaderResponse: '(발레리아) 순진하군.',
    },
    rightChoice: {
      text: '중재안을 제시한다',
      persuasionChange: 15,
      leaderResponse: '(알레시아) 좋은 방법이에요!',
    },
  },
  {
    id: 10,
    situation: '알레시아가 마지막 결단을 내려야 하는 순간입니다.',
    leftChoice: {
      text: '황제를 믿고 지원한다',
      persuasionChange: 15,
      leaderResponse: '(알레시아) 제가 해낼게요!',
    },
    rightChoice: {
      text: '섭정과 타협한다',
      persuasionChange: 1,
      leaderResponse: '(알레시아) 역시... 안 되는구나.',
    },
  },
];

// 남부 마르케 카드 (상인, 해적 문제)
export const markeCards: Card[] = [
  {
    id: 1,
    situation: '미라벨이 "돈이 없으면 뭘 해도 안 되는 게 장사판"이라고 말합니다.',
    leftChoice: {
      text: '의리에 호소한다',
      persuasionChange: -6,
      leaderResponse: '어머, 의리로 빵을 살 수 있는 건 아니랍니다.',
    },
    rightChoice: {
      text: '구체적 이익을 제시한다',
      persuasionChange: 13,
      leaderResponse: '이제야 제대로 된 얘기를 하시는군요!',
    },
  },
  {
    id: 2,
    situation: '해적 선장 산차의 얘기가 나옵니다. 미라벨이 동요합니다.',
    leftChoice: {
      text: '산차와 화해를 중재한다',
      persuasionChange: 15,
      leaderResponse: '...그게 가능할까요?',
    },
    rightChoice: {
      text: '해적 토벌을 제안한다',
      persuasionChange: 5,
      leaderResponse: '그건... 좀 곤란한데요.',
    },
  },
  {
    id: 3,
    situation: '상인 길드가 무역로 안전을 요구합니다.',
    leftChoice: {
      text: '막연한 약속을 한다',
      persuasionChange: -5,
      leaderResponse: '빈 약속은 필요 없답니다.',
    },
    rightChoice: {
      text: '구체적 보호 계획을 제시한다',
      persuasionChange: 14,
      leaderResponse: '어머, 이거라면 충분하겠어요!',
    },
  },
  {
    id: 4,
    situation: '미라벨이 산차에 대한 죄책감을 드러냅니다.',
    leftChoice: {
      text: '과거를 바로잡을 기회라고 설득한다',
      persuasionChange: 13,
      leaderResponse: '그럴 수 있을까요... 제가?',
    },
    rightChoice: {
      text: '과거는 잊으라고 한다',
      persuasionChange: 2,
      leaderResponse: '잊을 수 있다면... 좋겠죠.',
    },
  },
  {
    id: 5,
    situation: '산차가 미라벨의 무역선만 약탈한다는 정보를 얻었습니다.',
    leftChoice: {
      text: '두 사람의 관계를 파악한다',
      persuasionChange: 11,
      leaderResponse: '...예리하시네요.',
    },
    rightChoice: {
      text: '단순 해적으로 취급한다',
      persuasionChange: 4,
      leaderResponse: '그렇게 간단한 일이 아니랍니다.',
    },
  },
  {
    id: 6,
    situation: '길드가 재정 파탄 직전입니다.',
    leftChoice: {
      text: '감정적으로 위로한다',
      persuasionChange: -4,
      leaderResponse: '위로로 해결될 문제가 아니에요.',
    },
    rightChoice: {
      text: '전쟁 후 무역 독점권을 제안한다',
      persuasionChange: 15,
      leaderResponse: '어머, 이건... 큰 기회네요!',
    },
  },
  {
    id: 7,
    situation: '미라벨이 "제 사람들을 먹여살려야 하니까요"라고 진지하게 말합니다.',
    leftChoice: {
      text: '구체적 이익을 제시한다',
      persuasionChange: 12,
      leaderResponse: '이 정도면 설득이 되네요.',
    },
    rightChoice: {
      text: '의리를 강조한다',
      persuasionChange: 6,
      leaderResponse: '의리도 중요하지만... 현실도 봐야죠.',
    },
  },
  {
    id: 8,
    situation: '산차를 직접 만날 기회가 생겼습니다.',
    leftChoice: {
      text: '만나서 설득한다',
      persuasionChange: 13,
      leaderResponse: '설득할 수 있다면... 감사하죠.',
    },
    rightChoice: {
      text: '미라벨과만 거래한다',
      persuasionChange: 3,
      leaderResponse: '그게 더 편하긴 하겠네요.',
    },
  },
  {
    id: 9,
    situation: '7개 도시가 각자 다른 요구를 합니다.',
    leftChoice: {
      text: '모두를 만족시키려 한다',
      persuasionChange: -7,
      leaderResponse: '불가능한 걸 약속하시는군요.',
    },
    rightChoice: {
      text: '현실적 타협안을 제시한다',
      persuasionChange: 13,
      leaderResponse: '역시 장사꾼을 아시는군요!',
    },
  },
  {
    id: 10,
    situation: '미라벨이 최종 결정을 내려야 합니다.',
    leftChoice: {
      text: '과거를 바로잡고 함께하자',
      persuasionChange: 15,
      leaderResponse: '...알겠어요. 도와드리죠.',
    },
    rightChoice: {
      text: '이익만 강조한다',
      persuasionChange: 2,
      leaderResponse: '돈만 있으면 되는 건 아니에요.',
    },
  },
];

export const cardsByCountry: Record<string, Card[]> = {
  balharim: balharimCards,
  silena: silenaCards,
  marke: markeCards,
};
