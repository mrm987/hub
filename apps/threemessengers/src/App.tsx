import { useState, useRef, useEffect } from 'react';
import type { Country, Card, GameState, SwipeDirection } from './types';
import { countries } from './data/countries';
import { cardsByCountry } from './data/cards';
import CountrySelect from './components/CountrySelect';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [gameState, setGameState] = useState<GameState>({
    currentCountry: null,
    persuasion: 0,
    currentCardIndex: 0,
    totalCards: 10,
    gameStatus: 'country-select',
  });

  const [cards, setCards] = useState<Card[]>([]);
  const [leaderResponse, setLeaderResponse] = useState<{
    message: string;
    persuasionChange: number;
  } | null>(null);
  const responseTimerRef = useRef<number | null>(null);
  const [succeededCountries, setSucceededCountries] = useState<Set<string>>(new Set());

  // 모든 이미지 미리 로드
  useEffect(() => {
    const imagesToLoad: string[] = [];

    // 모든 국가의 이미지 수집
    countries.forEach(country => {
      if (country.selectImage) {
        imagesToLoad.push(country.selectImage);
      }
      imagesToLoad.push(country.leaderImages.low);
      imagesToLoad.push(country.leaderImages.medium);
      imagesToLoad.push(country.leaderImages.high);
    });

    let loadedCount = 0;
    const totalImages = imagesToLoad.length;

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (!src.startsWith('/') && !src.startsWith('http')) {
          // 이모지나 경로가 아닌 경우 바로 완료
          resolve();
          return;
        }

        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
          resolve(); // 에러가 나도 계속 진행
        };
        img.src = src;
      });
    };

    Promise.all(imagesToLoad.map(loadImage))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(() => {
        setImagesLoaded(true); // 에러가 나도 게임 시작
      });
  }, []);

  // 브라우저 뒤로가기 처리
  useEffect(() => {
    const handlePopState = () => {
      if (gameState.gameStatus === 'playing' || gameState.gameStatus === 'success' || gameState.gameStatus === 'failure') {
        // 게임 중이거나 결과 화면일 때 뒤로가기하면 국가 선택 화면으로
        setGameState({
          currentCountry: null,
          persuasion: 0,
          currentCardIndex: 0,
          totalCards: 10,
          gameStatus: 'country-select',
        });
        setCards([]);
        setLeaderResponse(null);
      }
    };

    // 게임이 시작되거나 결과 화면일 때 히스토리에 상태 추가
    if (gameState.gameStatus === 'playing' || gameState.gameStatus === 'success' || gameState.gameStatus === 'failure') {
      window.history.pushState({ page: gameState.gameStatus }, '', '');
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [gameState.gameStatus]);

  // 국가 선택
  const handleSelectCountry = (country: Country) => {
    const countryCards = cardsByCountry[country.id];
    setCards(countryCards);
    setGameState({
      currentCountry: country,
      persuasion: 0,
      currentCardIndex: 0,
      totalCards: countryCards.length,
      gameStatus: 'playing',
    });
  };

  // 카드 스와이프
  const handleSwipe = (direction: SwipeDirection) => {
    const currentCard = cards[gameState.currentCardIndex];

    // 선택에 따른 응답과 설득도 변경
    const choice = direction === 'left' ? currentCard.leftChoice : currentCard.rightChoice;
    const change = choice.persuasionChange;
    const response = choice.leaderResponse;

    // 이전 타이머가 있으면 취소
    if (responseTimerRef.current !== null) {
      clearTimeout(responseTimerRef.current);
    }

    // 리더 반응 표시
    setLeaderResponse({
      message: response,
      persuasionChange: change,
    });

    // 2초 후 리더 반응 숨김
    responseTimerRef.current = window.setTimeout(() => {
      setLeaderResponse(null);
      responseTimerRef.current = null;
    }, 2000);

    const newPersuasion = Math.max(0, Math.min(100, gameState.persuasion + change));

    // 다음 카드로
    const nextCardIndex = gameState.currentCardIndex + 1;

    // 게임 종료 조건 체크 (즉시 실행)
    if (nextCardIndex >= gameState.totalCards) {
      // 모든 카드를 다 씀
      if (newPersuasion >= 100) {
        // 성공한 국가 추가
        if (gameState.currentCountry) {
          setSucceededCountries(prev => new Set(prev).add(gameState.currentCountry!.id));
        }
        setGameState({
          ...gameState,
          persuasion: newPersuasion,
          gameStatus: 'success',
        });
      } else {
        setGameState({
          ...gameState,
          persuasion: newPersuasion,
          gameStatus: 'failure',
        });
      }
    } else {
      // 설득도 100% 달성 시 즉시 성공
      if (newPersuasion >= 100) {
        // 성공한 국가 추가
        if (gameState.currentCountry) {
          setSucceededCountries(prev => new Set(prev).add(gameState.currentCountry!.id));
        }
        setGameState({
          ...gameState,
          persuasion: 100,
          currentCardIndex: nextCardIndex,
          gameStatus: 'success',
        });
      } else {
        // 게임 계속
        setGameState({
          ...gameState,
          persuasion: newPersuasion,
          currentCardIndex: nextCardIndex,
        });
      }
    }
  };

  // 재시작
  const handleRestart = () => {
    setGameState({
      currentCountry: null,
      persuasion: 0,
      currentCardIndex: 0,
      totalCards: 10,
      gameStatus: 'country-select',
    });
    setCards([]);
  };

  return (
    <div className="app">
      {!imagesLoaded ? (
        <div className="loading-screen">
          <h1>3인의 전령</h1>
          <div className="loading-bar">
            <div className="loading-fill" style={{ width: `${loadingProgress}%` }} />
          </div>
          <p className="loading-text">이미지 로딩 중... {loadingProgress}%</p>
        </div>
      ) : (
        <>
          {gameState.gameStatus === 'country-select' && (
            <CountrySelect
              countries={countries}
              onSelectCountry={handleSelectCountry}
              succeededCountries={succeededCountries}
            />
          )}

          {gameState.gameStatus === 'playing' && gameState.currentCountry && (
            <GameScreen
              country={gameState.currentCountry}
              currentCard={cards[gameState.currentCardIndex]}
              persuasion={gameState.persuasion}
              currentCardIndex={gameState.currentCardIndex}
              totalCards={gameState.totalCards}
              onSwipe={handleSwipe}
              leaderResponse={leaderResponse}
            />
          )}

          {(gameState.gameStatus === 'success' || gameState.gameStatus === 'failure') &&
            gameState.currentCountry && (
              <ResultScreen
                success={gameState.gameStatus === 'success'}
                country={gameState.currentCountry}
                persuasion={gameState.persuasion}
                onRestart={handleRestart}
              />
            )}
        </>
      )}
    </div>
  );
}

export default App;
