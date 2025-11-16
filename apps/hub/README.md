# Hub (모리모 게임 허브)

크랙 스토리챗 미니게임들을 연결하는 메인 허브 페이지입니다.

## 🌐 배포 URL

https://hud.chat-img.cc

## 🎮 연결된 게임

### 1. 페로 폰 훔쳐보기
- **링크**: https://perrophone.chat-img.cc
- **원본 스토리챗**: 경찰과 괴도

### 2. 지원군 요청하기
- **링크**: https://threemessengers.chat-img.cc
- **원본 스토리챗**: 3인의 전령

## 🏗️ 기술 스택

- HTML5
- CSS3
- 모바일 반응형 디자인

## ✨ 특징

- 모바일 환경 최적화
- 반응형 레이아웃 (세로/가로 모드 지원)
- 모던한 UI/UX 디자인
- 각 게임으로 직접 연결

## 🚀 로컬 실행

```bash
# 이 디렉토리에서
open index.html

# 또는 Live Server 사용 (VS Code 확장)
# index.html 우클릭 → Open with Live Server
```

## 🎨 커스터마이징

### 게임 아이콘 변경

현재는 이모지 아이콘(📱, ✉️)과 그라데이션 배경을 사용합니다.

실제 이미지로 변경하려면:

1. `images/` 폴더에 1:1 비율 이미지 추가
2. `index.html`에서 해당 부분 수정:

```html
<!-- 현재 -->
<div class="icon-text">📱</div>

<!-- 이미지로 변경 -->
<img src="images/perrophone.png" alt="페로 폰 훔쳐보기"
     style="width: 100%; height: 100%; object-fit: cover;">
```

### 색상/스타일 변경

`css/style.css`의 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... */
}
```

## 📦 독립성

**이 앱은 완전히 독립적으로 동작합니다:**
- Monorepo의 다른 앱과 의존성 없음
- 단독으로 배포 가능
- 별도 저장소로 분리 가능

---

© 2025 모리모 | 크랙 플랫폼
