# 게임 아이콘 이미지

이 디렉토리에 게임 아이콘 이미지를 추가할 수 있습니다.

## 권장 사양

- **파일 형식**: PNG, JPG, WebP
- **해상도**: 1:1 비율 (정사각형)
- **권장 크기**: 512x512px 이상
- **파일명**:
  - `perrophone.png` - 페로 폰 훔쳐보기
  - `threemessengers.png` - 지원군 요청하기

## 이미지 추가 방법

1. 1:1 비율의 이미지를 준비합니다
2. 위의 파일명으로 이 디렉토리에 저장합니다
3. `index.html`에서 해당 부분을 수정합니다:

```html
<!-- 현재 (이모지 아이콘) -->
<div class="icon-text">📱</div>

<!-- 이미지로 변경 -->
<img src="images/perrophone.png" alt="페로 폰 훔쳐보기" style="width: 100%; height: 100%; object-fit: cover;">
```

현재는 이모지 아이콘(📱, ✉️)과 그라데이션 배경을 사용하고 있습니다.
