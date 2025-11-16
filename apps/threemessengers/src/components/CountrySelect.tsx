import type { Country } from '../types';
import './CountrySelect.css';

interface CountrySelectProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
  succeededCountries: Set<string>;
}

export default function CountrySelect({
  countries,
  onSelectCountry,
  succeededCountries,
}: CountrySelectProps) {
  const allSucceeded = succeededCountries.size === countries.length;

  return (
    <div className="country-select">
      <div className="title-section">
        <h1>3인의 전령</h1>
        <p className="subtitle">7일 후, 검은 제국이 아스텔을 침공합니다.</p>
        <p className="instruction">원군을 요청할 나라를 선택하세요.</p>
      </div>

      <div className="country-list">
        {countries.map((country) => (
          <button
            key={country.id}
            className={`country-card ${country.selectImage ? 'has-image' : ''} ${
              succeededCountries.has(country.id) ? 'succeeded' : ''
            }`}
            style={{ backgroundColor: country.backgroundColor }}
            onClick={() => onSelectCountry(country)}
          >
            {succeededCountries.has(country.id) && (
              <div className="success-badge">성공</div>
            )}
            {country.selectImage ? (
              <img src={country.selectImage} alt={country.name} className="country-select-image" />
            ) : (
              <>
                <div className="country-icon">{country.leaderImages.medium}</div>
                <h2>{country.name}</h2>
                <p className="leader-name">{country.leaderName}</p>
                <p className="country-desc">{country.description}</p>
              </>
            )}
          </button>
        ))}
      </div>

      {allSucceeded && (
        <div className="completion-section">
          <div className="completion-message">
            <div className="completion-icon">🎊</div>
            <h2>축하합니다!</h2>
            <p>세 나라 모두 아스텔을 돕기로 했습니다!</p>
          </div>
          <button
            className="completion-storychat-button"
            onClick={() => window.open('https://share.crack.wrtn.ai/zeq4bc0', '_blank')}
          >
            스토리챗 하러가기
          </button>
        </div>
      )}
    </div>
  );
}
