import { useEffect } from 'react';
import './LeaderResponse.css';

interface LeaderResponseProps {
  message: string;
  persuasionChange: number;
  onClose: () => void;
}

export default function LeaderResponse({ message, persuasionChange, onClose }: LeaderResponseProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2초 후 자동 닫기

    return () => clearTimeout(timer);
  }, [onClose]);

  const isPositive = persuasionChange > 0;
  const isNegative = persuasionChange < 0;

  return (
    <div className="leader-response-overlay">
      <div className={`leader-response ${isPositive ? 'positive' : ''} ${isNegative ? 'negative' : ''}`}>
        <p className="response-message">"{message}"</p>
      </div>
    </div>
  );
}
