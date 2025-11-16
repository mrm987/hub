import { useState, useRef, useEffect } from 'react';
import type { Card, SwipeDirection } from '../types';
import './SwipeCard.css';

interface SwipeCardProps {
  card: Card;
  onSwipe: (direction: SwipeDirection) => void;
}

export default function SwipeCard({ card, onSwipe }: SwipeCardProps) {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setCurrentX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentX - startX;
    const threshold = 100; // 스와이프로 인정할 최소 거리

    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        onSwipe('left'); // 왼쪽으로 스와이프 = 긍정적 선택
      } else {
        onSwipe('right'); // 오른쪽으로 스와이프 = 부정적 선택
      }
    }

    // 리셋
    setCurrentX(startX);
  };

  // 마우스 이벤트
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // 터치 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // 전역 마우스 업 이벤트 리스너
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleEnd();
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDragging, currentX, startX]);

  const offset = isDragging ? currentX - startX : 0;
  const rotation = offset * 0.05; // 회전 효과
  const opacity = 1 - Math.abs(offset) / 300;

  return (
    <div className="swipe-card-container">
      <div
        ref={cardRef}
        className="swipe-card"
        style={{
          transform: `translateX(${offset}px) rotate(${rotation}deg)`,
          opacity: opacity,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="card-content">
          <p className="situation">{card.situation}</p>

          <div className="choices">
            <div className={`choice left ${offset < -50 ? 'active' : ''}`}>
              <span className="choice-label">👍 긍정</span>
              <p>{card.leftChoice.text}</p>
            </div>

            <div className={`choice right ${offset > 50 ? 'active' : ''}`}>
              <span className="choice-label">👎 부정</span>
              <p>{card.rightChoice.text}</p>
            </div>
          </div>
        </div>

        {/* 스와이프 힌트 */}
        {!isDragging && offset === 0 && (
          <div className="swipe-hint">좌우로 밀어서 선택</div>
        )}
      </div>
    </div>
  );
}
