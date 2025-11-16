import type { Country, Card, SwipeDirection } from '../types';
import SwipeCard from './SwipeCard';
import LeaderResponse from './LeaderResponse';
import './GameScreen.css';

interface GameScreenProps {
  country: Country;
  currentCard: Card;
  persuasion: number;
  currentCardIndex: number;
  totalCards: number;
  onSwipe: (direction: SwipeDirection) => void;
  leaderResponse?: {
    message: string;
    persuasionChange: number;
  } | null;
}

export default function GameScreen({
  country,
  currentCard,
  persuasion,
  currentCardIndex,
  totalCards,
  onSwipe,
  leaderResponse,
}: GameScreenProps) {
  // 설득도에 따라 리더 이미지 결정
  const getLeaderImage = () => {
    if (persuasion <= 33) return country.leaderImages.low;
    if (persuasion <= 66) return country.leaderImages.medium;
    return country.leaderImages.high;
  };

  // 이미지 경로인지 이모지인지 판단
  const isImagePath = (str: string) => {
    return str.startsWith('/') || str.startsWith('http');
  };

  const leaderImage = getLeaderImage();

  return (
    <div className="game-screen" style={{ backgroundColor: country.backgroundColor }}>
      {/* 상단 헤더 */}
      <div className="game-header">
        <div className="country-info">
          <h2>{country.name}</h2>
          <p>{country.leaderName}</p>
        </div>

        {/* 리더 이미지 */}
        <div className="leader-portrait">
          {isImagePath(leaderImage) ? (
            <img
              key={leaderImage}
              src={leaderImage}
              alt={country.leaderName}
              className="leader-image"
            />
          ) : (
            <div className="leader-icon">{leaderImage}</div>
          )}

          {/* 설득도 증감 표시 */}
          {leaderResponse && (
            <div className="persuasion-change-indicator">
              {leaderResponse.persuasionChange > 0 && (
                <span className="change-badge positive">+{leaderResponse.persuasionChange}%</span>
              )}
              {leaderResponse.persuasionChange < 0 && (
                <span className="change-badge negative">{leaderResponse.persuasionChange}%</span>
              )}
            </div>
          )}

          {/* 리더 반응 표시 (비주얼 노벨 스타일) */}
          <div className={`leader-response-wrapper ${leaderResponse ? 'visible' : 'hidden'}`}>
            {leaderResponse && (
              <LeaderResponse
                message={leaderResponse.message}
                persuasionChange={leaderResponse.persuasionChange}
                onClose={() => {}}
              />
            )}
          </div>
        </div>

        {/* 설득도 바 */}
        <div className="persuasion-container">
          <div className="persuasion-label">
            <span>설득도</span>
            <span className="persuasion-value">{Math.round(persuasion)}%</span>
          </div>
          <div className="persuasion-bar">
            <div
              className="persuasion-fill"
              style={{
                width: `${persuasion}%`,
                backgroundColor: persuasion >= 100 ? '#4caf50' : '#2196f3',
              }}
            />
          </div>
        </div>

        {/* 카드 진행 상황 */}
        <div className="card-progress">
          카드 {currentCardIndex + 1} / {totalCards}
        </div>
      </div>

      {/* 카드 영역 */}
      <div className="card-area">
        <SwipeCard key={currentCard.id} card={currentCard} onSwipe={onSwipe} />
      </div>
    </div>
  );
}
