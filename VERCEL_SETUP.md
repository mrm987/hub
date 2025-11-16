# Vercel 배포 가이드

Monorepo의 각 앱을 독립적으로 Vercel에 배포하는 방법입니다.

## 🚀 전체 프로세스

1. Vercel에서 프로젝트 3개 생성 (각 앱마다)
2. 각 프로젝트의 Root Directory 설정
3. 커스텀 도메인 연결
4. 완료! 이후 자동 배포

---

## 📦 프로젝트 1: Hub (허브 페이지)

### 1단계: Vercel에서 New Project

1. https://vercel.com/new 접속
2. GitHub 저장소 `mrm987/hub` 선택
3. **Import** 클릭

### 2단계: 프로젝트 설정

**Project Name:**
```
hub
```

**Framework Preset:**
```
Other
```

**Root Directory:**
```
apps/hub
```
(⚠️ 중요! 반드시 "apps/hub" 입력)

**Build and Output Settings:**
- Build Command: (비워두기)
- Output Directory: `.` (점 하나)
- Install Command: (비워두기)

### 3단계: Deploy

**Deploy** 버튼 클릭!

---

## 🎮 프로젝트 2: PerroPhone (페로 폰)

### 1단계: Vercel에서 New Project

1. https://vercel.com/new 접속
2. **같은 저장소** `mrm987/hub` 다시 선택
3. **Import** 클릭

### 2단계: 프로젝트 설정

**Project Name:**
```
perrophone
```

**Framework Preset:**
```
Other
```

**Root Directory:**
```
apps/perrophone
```
(⚠️ 중요! 반드시 "apps/perrophone" 입력)

**Build and Output Settings:**
- Build Command: (비워두기)
- Output Directory: `.` (점 하나)
- Install Command: (비워두기)

### 3단계: Deploy

**Deploy** 버튼 클릭!

---

## ✉️ 프로젝트 3: ThreeMessengers (지원군)

### 1단계: Vercel에서 New Project

1. https://vercel.com/new 접속
2. **같은 저장소** `mrm987/hub` 다시 선택
3. **Import** 클릭

### 2단계: 프로젝트 설정

**Project Name:**
```
threemessengers
```

**Framework Preset:**
```
Vite
```
(⚠️ Vite 자동 선택됨)

**Root Directory:**
```
apps/threemessengers
```
(⚠️ 중요! 반드시 "apps/threemessengers" 입력)

**Build and Output Settings:**
- Build Command: `npm run build` (자동 입력됨)
- Output Directory: `dist` (자동 입력됨)
- Install Command: `npm install` (자동 입력됨)

### 3단계: Deploy

**Deploy** 버튼 클릭!

---

## 🌐 도메인 연결

각 프로젝트 배포 완료 후:

### Hub 프로젝트

1. Vercel 대시보드 → `hub` 프로젝트 선택
2. **Settings** → **Domains**
3. **Add Domain** 클릭
4. 입력: `hud.chat-img.cc`
5. DNS 설정 안내가 나옴:

**DNS 레코드 추가 (도메인 DNS 설정):**
```
Type: CNAME
Name: hud
Value: cname.vercel-dns.com
```

### PerroPhone 프로젝트

1. Vercel 대시보드 → `perrophone` 프로젝트 선택
2. **Settings** → **Domains**
3. **Add Domain** 클릭
4. 입력: `perrophone.chat-img.cc`
5. DNS 설정:

```
Type: CNAME
Name: perrophone
Value: cname.vercel-dns.com
```

### ThreeMessengers 프로젝트

1. Vercel 대시보드 → `threemessengers` 프로젝트 선택
2. **Settings** → **Domains**
3. **Add Domain** 클릭
4. 입력: `threemessengers.chat-img.cc`
5. DNS 설정:

```
Type: CNAME
Name: threemessengers
Value: cname.vercel-dns.com
```

---

## ⚡ 이후 자동 배포

설정 완료 후:

```
코드 수정 → git push
    ↓
Vercel이 자동으로:
- 변경 감지
- 해당 앱만 빌드
- 30초-1분 내 배포 완료
```

---

## 🎯 확인 방법

각 프로젝트 배포 후 임시 URL 확인:

```
Hub:            https://hub-xxx.vercel.app
PerroPhone:     https://perrophone-xxx.vercel.app
ThreeMessengers: https://threemessengers-xxx.vercel.app
```

도메인 연결 후:

```
https://hud.chat-img.cc
https://perrophone.chat-img.cc
https://threemessengers.chat-img.cc
```

---

## 🔧 문제 해결

### "Root Directory가 비어있다"는 에러

→ Root Directory 설정을 다시 확인하세요
→ 정확히 `apps/hub`, `apps/perrophone`, `apps/threemessengers`

### 빌드 에러 (ThreeMessengers)

→ Framework Preset이 "Vite"로 선택되었는지 확인
→ Node.js Version을 18.x 이상으로 설정

### 도메인 연결 안 됨

→ DNS 전파 시간 필요 (최대 48시간, 보통 10분)
→ DNS 레코드가 정확한지 확인

---

## 💡 팁

1. **Preview 배포**:
   - 메인 브랜치 외 다른 브랜치 푸시 시 자동으로 preview URL 생성
   - PR 만들면 자동으로 댓글에 미리보기 링크 추가

2. **즉시 롤백**:
   - Vercel 대시보드 → Deployments
   - 이전 배포 선택 → Promote to Production

3. **빌드 로그**:
   - 배포 실패 시 Vercel에서 자세한 로그 확인 가능
   - GitHub보다 훨씬 친절함

---

## ✅ 완료 체크리스트

- [ ] Hub 프로젝트 생성 및 배포
- [ ] PerroPhone 프로젝트 생성 및 배포
- [ ] ThreeMessengers 프로젝트 생성 및 배포
- [ ] hud.chat-img.cc 도메인 연결
- [ ] perrophone.chat-img.cc 도메인 연결
- [ ] threemessengers.chat-img.cc 도메인 연결
- [ ] 각 URL 접속하여 정상 작동 확인

---

도움이 필요하면 언제든지 물어보세요!
