import type { Country } from '../types';
import './ResultScreen.css';

interface ResultScreenProps {
  success: boolean;
  country: Country;
  persuasion: number;
  onRestart: () => void;
}

export default function ResultScreen({ success, country, persuasion, onRestart }: ResultScreenProps) {
  // 이미지 경로인지 이모지인지 판단
  const isImagePath = (str: string) => {
    return str.startsWith('/') || str.startsWith('http');
  };

  const getLeaderImage = () => {
    if (success) return country.leaderImages.high;
    return persuasion <= 33 ? country.leaderImages.low : country.leaderImages.medium;
  };

  // 설득도별 리더 대사 가져오기
  const getLeaderMessage = () => {
    if (success) return country.finalMessages.success;
    if (persuasion <= 33) return country.finalMessages.low;
    if (persuasion <= 66) return country.finalMessages.medium;
    return country.finalMessages.high;
  };

  // 설득도별 별 표시
  const getStarRating = () => {
    if (success) return '★★★★';
    if (persuasion <= 33) return '★☆☆☆';
    if (persuasion <= 66) return '★★☆☆';
    return '★★★☆';
  };

  // 설득도별 등급 텍스트
  const getRatingText = () => {
    if (success) return '성공';
    if (persuasion <= 33) return '낮음';
    if (persuasion <= 66) return '중간';
    return '높음';
  };

  const leaderImage = getLeaderImage();

  return (
    <div
      className="result-screen"
      style={{
        background: success
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      }}
    >
      <div className="result-content">
        {success ? (
          <>
            <div className="result-icon success">🎉</div>
            <h1 className="result-title">원군 확보 성공!</h1>
            <p className="result-message">
              {country.name}의 {country.leaderName}이(가) 아스텔을 돕기로 했습니다.
            </p>

            {/* 리더 이미지 */}
            <div className="leader-final">
              {isImagePath(leaderImage) ? (
                <img src={leaderImage} alt={country.leaderName} className="leader-final-image" />
              ) : (
                <div className="leader-final-icon">{leaderImage}</div>
              )}
            </div>

            {/* 리더 최종 대사 */}
            <p className="leader-message">"{getLeaderMessage()}"</p>

            {/* 최종 설득도 */}
            <div className="result-stats">
              <div className="stat">
                <span className="stat-label">최종 설득도</span>
                <span className="stat-value">{Math.round(persuasion)}%</span>
              </div>
              <div className="rating-display">
                <span className="rating-stars">{getStarRating()}</span>
                <span className="rating-text">{getRatingText()}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="result-icon failure">😞</div>
            <h1 className="result-title">원군 확보 실패</h1>
            <p className="result-message">
              {country.name}의 {country.leaderName}을(를) 설득하지 못했습니다.
            </p>

            {/* 리더 이미지 */}
            <div className="leader-final">
              {isImagePath(leaderImage) ? (
                <img src={leaderImage} alt={country.leaderName} className="leader-final-image" />
              ) : (
                <div className="leader-final-icon">{leaderImage}</div>
              )}
            </div>

            {/* 리더 최종 대사 */}
            <p className="leader-message">"{getLeaderMessage()}"</p>

            {/* 최종 설득도 */}
            <div className="result-stats">
              <div className="stat">
                <span className="stat-label">최종 설득도</span>
                <span className="stat-value failure-value">{Math.round(persuasion)}%</span>
              </div>
              <div className="rating-display">
                <span className="rating-stars">{getStarRating()}</span>
                <span className="rating-text">{getRatingText()}</span>
              </div>
            </div>
          </>
        )}

        <div className="button-group">
          <button className="restart-button" onClick={onRestart}>
            국가 선택으로
          </button>
          <button
            className="storychat-button"
            onClick={() => window.open('https://share.crack.wrtn.ai/zeq4bc0', '_blank')}
          >
            스토리챗 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}
