# 게임 이미지 사용 방법

**현재 폴더에 SVG 플레이스홀더 파일들이 준비되어 있습니다.**
실제 게임용 이미지로 교체하려면 같은 파일명으로 PNG/JPG 파일을 덮어쓰면 됩니다.

---

## 1. 캐릭터 이미지 (게임 화면)
게임 중 리더의 표정을 나타내는 이미지입니다.

### 이미지 준비
- **비율**: 1216 x 832 (가로:세로 = 19:13)
- **형식**: PNG, JPG 권장
- **개수**: 각 국가당 3개 (low, medium, high)

### 플레이스홀더 파일 (이미 생성됨):
- 발하림: `balharim-low.svg`, `balharim-medium.svg`, `balharim-high.svg`
- 실레나: `silena-low.svg`, `silena-medium.svg`, `silena-high.svg`
- 마르케: `marke-low.svg`, `marke-medium.svg`, `marke-high.svg`

### 실제 이미지로 교체하려면:
같은 파일명으로 PNG나 JPG 파일을 준비하세요.
- 예: `balharim-low.png`, `balharim-medium.png`, `balharim-high.png`

### 설정 방법
`src/data/countries.ts` 파일에서:

```typescript
leaderImages: {
  low: '/images/balharim-low.png',
  medium: '/images/balharim-medium.png',
  high: '/images/balharim-high.png',
}
```

### 이미지 설명
- **low (0-33%)**: 부정적인 표정 / 화난 표정
- **medium (34-66%)**: 중립적인 표정
- **high (67-100%)**: 긍정적인 표정 / 기쁜 표정

---

## 2. 국가 선택 화면 이미지
국가 선택 화면에 표시되는 배경 이미지입니다.

### 이미지 준비
- **비율**: 1280 x 600 (가로:세로 = 64:30)
- **형식**: PNG, JPG 권장
- **개수**: 각 국가당 1개
- **주의**: 이미지에 국가 이름이 포함되어야 합니다 (텍스트 대체용)

### 플레이스홀더 파일 (이미 생성됨):
- 발하림: `balharim-select.svg`
- 실레나: `silena-select.svg`
- 마르케: `marke-select.svg`

### 실제 이미지로 교체하려면:
같은 파일명으로 PNG나 JPG 파일을 준비하세요.
- 예: `balharim-select.png`, `silena-select.png`, `marke-select.png`

### 설정 방법
`src/data/countries.ts` 파일에서:

```typescript
selectImage: '/images/balharim-select.png',
```

이렇게 변경하면 됩니다. (undefined → 이미지 경로)

---

## 파일 배치
모든 이미지를 이 폴더(`public/images/`)에 넣으면 됩니다.
