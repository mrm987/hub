import { useEffect } from 'react';
import type { Country } from '../types';

/**
 * 게임 시작 시 해당 국가의 모든 리더 이미지를 미리 로드
 */
export function usePreloadCountryImages(country: Country | null) {
  useEffect(() => {
    if (!country) return;

    const imagesToPreload = [
      country.leaderImages.low,
      country.leaderImages.medium,
      country.leaderImages.high,
    ];

    // 이미지 프리로드
    imagesToPreload.forEach((src) => {
      if (src.startsWith('/') || src.startsWith('http')) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [country]);
}
