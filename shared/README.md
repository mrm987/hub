# Shared Resources

모든 게임에서 공통으로 사용할 수 있는 리소스 모음입니다.

## 📁 구조

```
shared/
├── styles/
│   └── theme.css      # 공통 CSS 변수 및 테마
└── assets/            # 공통 이미지, 폰트 등
```

## 🎨 styles/theme.css 사용법

### HTML 프로젝트에서 사용

```html
<!-- 직접 링크 -->
<link rel="stylesheet" href="../../shared/styles/theme.css">

<!-- 또는 CSS에서 import -->
<style>
@import url('../../shared/styles/theme.css');
</style>
```

### React/Vite 프로젝트에서 사용

```typescript
// main.tsx 또는 App.tsx에서
import '../../shared/styles/theme.css';
```

### CSS에서 변수 사용

```css
.my-button {
    background: var(--primary-gradient);
    color: var(--text-white);
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
    transition: var(--transition-normal);
}

.my-button:hover {
    box-shadow: var(--shadow-lg);
}
```

## 🔧 커스터마이징

프로젝트마다 다른 색상이 필요한 경우:

```css
/* 공통 테마를 import한 후 덮어쓰기 */
:root {
    --primary-color: #your-color;
    --primary-gradient: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

## 📦 공통 에셋 추가

로고, 아이콘, 폰트 등 공통 에셋은 `shared/assets/`에 추가하고
각 프로젝트에서 참조하세요.

```
shared/assets/
├── icons/
├── images/
└── fonts/
```
