# 테레오 홈페이지

테레오 홈페이지는 Next.js 15와 TypeScript를 기반으로 구축된 동적 웹사이트입니다. 관리자 패널을 통해 콘텐츠를 실시간으로 관리할 수 있으며, PostgreSQL 데이터베이스를 사용하여 데이터를 영구 저장합니다.

## 주요 기능

- 🏢 **기업 소개**: 회사 정보, 팀 소개, 연혁 등
- ⚙️ **서비스 관리**: 제공 서비스의 동적 관리
- 📰 **뉴스 관리**: 뉴스 및 공지사항 관리
- 🎥 **미디어 관리**: 이미지 및 동영상 관리
- 💼 **프로젝트 관리**: 프로젝트 포트폴리오 관리
- ⭐ **후기 관리**: 고객 후기 및 추천사 관리
- 🔐 **관리자 시스템**: 로그인 기반 콘텐츠 관리
- 📱 **반응형 디자인**: 모바일 및 데스크톱 최적화

## 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel / Docker

## 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd tereo-homepage
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/tereo_homepage?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
ADMIN_EMAIL="admin@tereo.com"
ADMIN_PASSWORD="admin123"
```

### 4. 데이터베이스 설정

PostgreSQL 데이터베이스를 생성하고 Prisma를 설정합니다:

```bash
# Prisma 클라이언트 생성
npm run db:generate

# 데이터베이스 스키마 적용
npm run db:push

# 샘플 데이터 생성
npm run db:seed
```

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인하세요.

## Docker를 사용한 실행

### 1. Docker Compose로 실행

```bash
docker-compose up -d
```

### 2. 개별 컨테이너 빌드

```bash
# 데이터베이스만 실행
docker-compose up -d postgres

# 애플리케이션 빌드 및 실행
docker build -t tereo-homepage .
docker run -p 3000:3000 --env-file .env.local tereo-homepage
```

## 배포

### Vercel 배포

1. Vercel 계정에 로그인
2. 프로젝트를 Vercel에 연결
3. 환경 변수 설정:
   - `DATABASE_URL`: PostgreSQL 연결 문자열
   - `NEXTAUTH_SECRET`: 랜덤 시크릿 키
   - `NEXTAUTH_URL`: 배포된 도메인
4. 배포 완료

### Docker 배포

1. Docker 이미지 빌드
2. 컨테이너 레지스트리에 푸시
3. 프로덕션 서버에서 실행

## 관리자 기능

### 로그인

- URL: `/admin/login`
- 기본 계정: `admin@tereo.com` / `admin123`

### 관리 가능한 콘텐츠

- **페이지 관리** (`/admin/pages`): 홈페이지 콘텐츠
- **서비스 관리** (`/admin/services`): 제공 서비스
- **뉴스 관리** (`/admin/news`): 뉴스 및 공지사항
- **미디어 관리** (`/admin/media`): 이미지 및 동영상
- **프로젝트 관리** (`/admin/projects`): 프로젝트 포트폴리오
- **후기 관리** (`/admin/testimonials`): 고객 후기

## API 엔드포인트

### 공개 API

- `GET /api/services/public` - 공개 서비스 목록
- `GET /api/news/public` - 공개 뉴스 목록
- `GET /api/projects/public` - 공개 프로젝트 목록

### 관리자 API

- `GET /api/services` - 서비스 목록 (관리자)
- `POST /api/services` - 서비스 생성
- `PUT /api/services/[id]` - 서비스 수정
- `DELETE /api/services/[id]` - 서비스 삭제

## 데이터베이스 스키마

주요 테이블:
- `User` - 사용자 (관리자)
- `Service` - 서비스
- `News` - 뉴스
- `Media` - 미디어
- `Project` - 프로젝트
- `Testimonial` - 후기
- `Page` - 페이지

## 개발 가이드

### 새로운 서비스 추가

1. 관리자 패널에서 서비스 생성
2. API를 통해 동적으로 데이터 조회
3. 프론트엔드에서 자동으로 렌더링

### 새로운 페이지 추가

1. `src/app/` 디렉토리에 새 페이지 생성
2. 필요시 API 엔드포인트 추가
3. 관리자 패널에서 콘텐츠 관리

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.