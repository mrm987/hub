import type { Country } from '../types';

export const countries: Country[] = [
  {
    id: 'balharim',
    name: '발하림',
    leaderName: '여왕 프리다',
    description: '눈 덮인 산악의 전사 나라. 힘과 명예를 최고 가치로 여긴다.',
    leaderImages: {
      low: '/images/balharim-low.jpg',
      medium: '/images/balharim-medium.jpg',
      high: '/images/balharim-high.jpg',
    },
    backgroundColor: '#e3f2fd',
    selectImage: '/images/balharim-select.jpg',
    finalMessages: {
      low: '유감입니다, 전령님. 발하림의 동맹이 되려면... 더 많은 것이 필요합니다.',
      medium: '당신의 노력은 인정합니다. 하지만 지원은... 신중히 고려하겠습니다.',
      high: '진심은 전해졌습니다, 전령님. 그러나... 아직 충분하지 않습니다.',
      success: '환영합니다, 전령님. 발하림의 전사들이 아스텔과 함께하겠습니다.',
    },
  },
  {
    id: 'silena',
    name: '실레나',
    leaderName: '황제 알레시아',
    description: '화려한 궁전과 복잡한 정치. 유일한 동맹국이지만 섭정의 권력이 강하다.',
    leaderImages: {
      low: '/images/silena-low.jpg',
      medium: '/images/silena-medium.jpg',
      high: '/images/silena-high.jpg',
    },
    backgroundColor: '#f3e5f5',
    selectImage: '/images/silena-select.jpg',
    finalMessages: {
      low: '(발레리아) 어린 황제를 설득하려 했다니... 실레나는 아스텔을 도울 수 없소.',
      medium: '제 마음은 당신과 함께하지만... 섭정 발레리아가 허락하지 않을 거예요.',
      high: '당신의 진심은 알겠어요. 하지만 발레리아를 설득하기엔... 조금 더 필요했어요.',
      success: '제가 발레리아를 설득했어요! 실레나 제국의 군대가 아스텔을 도울 거예요!',
    },
  },
  {
    id: 'marke',
    name: '마르케',
    leaderName: '길드장 미라벨',
    description: '항구 도시 연합. 상인이 지배하며 돈이 곧 힘이다. 해적 문제로 골치를 앓는다.',
    leaderImages: {
      low: '/images/marke-low.jpg',
      medium: '/images/marke-medium.jpg',
      high: '/images/marke-high.jpg',
    },
    backgroundColor: '#fff3e0',
    selectImage: '/images/marke-select.jpg',
    finalMessages: {
      low: '어머, 이건 마르케에 아무 이익이 없는 거래랍니다. 저희는 사업가지, 자선가가 아니에요.',
      medium: '흠... 고민되는군요. 하지만 이 정도론 길드를 설득하기 어렵답니다.',
      high: '당신의 제안은 매력적이에요. 하지만 최종 결정을 내리기엔... 조금 부족하네요.',
      success: '좋아요! 이건 마르케에 충분한 이익이 되는 거래랍니다. 우리 함대가 아스텔을 도울게요!',
    },
  },
];
