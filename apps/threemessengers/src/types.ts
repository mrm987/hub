export interface Country {
  id: string;
  name: string;
  leaderName: string;
  description: string;
  // 설득도에 따라 변하는 리더 이미지 (0~100%)
  leaderImages: {
    low: string;      // 0-33%
    medium: string;   // 34-66%
    high: string;     // 67-100%
  };
  backgroundColor: string;
  // 국가 선택 화면 배경 이미지 (1280x600 비율, 선택사항)
  selectImage?: string;
  // 최종 결과 화면 리더 대사
  finalMessages: {
    low: string;      // 설득도 0-33%
    medium: string;   // 설득도 34-66%
    high: string;     // 설득도 67-99%
    success: string;  // 설득도 100%
  };
}

export interface Card {
  id: number;
  situation: string;
  leftChoice: {
    text: string;
    persuasionChange: number;
    leaderResponse: string; // 리더의 반응 대사
  };
  rightChoice: {
    text: string;
    persuasionChange: number;
    leaderResponse: string; // 리더의 반응 대사
  };
}

export interface GameState {
  currentCountry: Country | null;
  persuasion: number; // 0-100
  currentCardIndex: number;
  totalCards: number;
  gameStatus: 'country-select' | 'playing' | 'success' | 'failure';
}

export type SwipeDirection = 'left' | 'right';
