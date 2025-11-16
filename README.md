# 모리모 게임 허브 Monorepo

크랙 플랫폼의 스토리챗을 기반으로 한 미니게임 모음 저장소입니다.

## 🏗️ Monorepo 구조

```
hub/
├── apps/
│   ├── hub/              → https://hud.chat-img.cc
│   ├── perrophone/       → https://perrophone.chat-img.cc
│   └── threemessengers/  → https://threemessengers.chat-img.cc
└── shared/
    ├── styles/           (선택적 공통 테마)
    └── assets/           (선택적 공통 에셋)
```

## ⚡ 핵심 원칙: 완전한 격리

**각 앱은 완전히 독립적으로 동작합니다:**

- ✅ 각 앱은 자체 CNAME을 가짐 (독립 배포)
- ✅ 서로 의존성 없음
- ✅ 각각 별도로 개발/빌드/배포 가능
- ✅ 기술 스택이 달라도 무관 (HTML, React 등)

**`shared/` 폴더는 선택사항입니다:**
- 필수가 아닌 "선택적으로" 사용 가능한 공통 리소스
- UI 통일성을 원할 때만 사용
- 사용하지 않아도 각 앱은 정상 작동

## 📦 프로젝트 목록

### 1. Hub (허브 페이지)
- **경로**: `apps/hub/`
- **배포 URL**: https://hud.chat-img.cc
- **기술 스택**: HTML + CSS
- **설명**: 게임들을 연결하는 메인 허브 페이지

**로컬 실행:**
```bash
cd apps/hub
open index.html  # 또는 Live Server 사용
```

---

### 2. PerroPhone (페로 폰 훔쳐보기)
- **경로**: `apps/perrophone/`
- **배포 URL**: https://perrophone.chat-img.cc
- **기술 스택**: HTML
- **원본 스토리챗**: 경찰과 괴도

**로컬 실행:**
```bash
cd apps/perrophone
open index.html  # 또는 Live Server 사용
```

---

### 3. ThreeMessengers (지원군 요청하기)
- **경로**: `apps/threemessengers/`
- **배포 URL**: https://threemessengers.chat-img.cc
- **기술 스택**: React + Vite + TypeScript
- **원본 스토리챗**: 3인의 전령

**로컬 실행:**
```bash
cd apps/threemessengers
npm install
npm run dev
```

**빌드:**
```bash
npm run build
```

---

## 🎨 공통 스타일 사용 (선택사항)

UI 통일성을 원한다면 `shared/styles/theme.css`를 사용할 수 있습니다.

자세한 내용은 [`shared/README.md`](./shared/README.md)를 참고하세요.

---

## 🚀 배포

각 앱은 독립적으로 배포됩니다:

### GitHub Pages 배포 설정

1. **Settings → Pages**에서 각 앱별로 설정
2. 또는 GitHub Actions로 자동화:

```yaml
# 예시: apps/hub → hud.chat-img.cc
# 예시: apps/perrophone → perrophone.chat-img.cc
# 예시: apps/threemessengers → threemessengers.chat-img.cc
```

각 앱의 `CNAME` 파일이 이미 설정되어 있습니다.

---

## 🛠️ 개발 가이드

### 새 게임 추가하기

```bash
# apps/ 아래에 새 디렉토리 생성
mkdir apps/new-game

# 독립적인 프로젝트로 개발
cd apps/new-game
# ... 프로젝트 파일 추가 ...

# CNAME 파일 추가 (배포용)
echo "newgame.chat-img.cc" > CNAME
```

### 모든 프로젝트 한번에 수정

Monorepo의 장점: Claude가 모든 앱을 동시에 보고 수정 가능

```
"허브와 게임1,2의 헤더 색상을 파란색으로 통일해줘"
→ 한 번에 apps/hub, apps/perrophone, apps/threemessengers 모두 수정
```

### 개별 프로젝트만 수정

```
"ThreeMessengers 게임의 버그 수정해줘"
→ apps/threemessengers만 수정
```

---

## 📝 라이선스

© 2025 모리모 | 크랙 플랫폼

---

## 🔗 링크

- **허브**: https://hud.chat-img.cc
- **페로 폰**: https://perrophone.chat-img.cc
- **지원군**: https://threemessengers.chat-img.cc
