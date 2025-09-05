# Vercel 배포 가이드

## 1. GitHub에 코드 업로드

### GitHub 저장소 생성
1. [GitHub.com](https://github.com)에 로그인
2. "New repository" 클릭
3. Repository name: `tereo-homepage`
4. Public 또는 Private 선택
5. "Create repository" 클릭

### 코드 업로드
```bash
# Git 초기화
git init

# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/tereo-homepage.git

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit"

# 푸시
git push -u origin main
```

## 2. Vercel 배포

### Vercel 계정 생성 및 연결
1. [vercel.com](https://vercel.com)에 접속
2. "Sign Up" 클릭
3. GitHub 계정으로 로그인
4. GitHub 권한 승인

### 프로젝트 배포
1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 저장소에서 `tereo-homepage` 선택
3. "Import" 클릭

### 환경 변수 설정
프로젝트 설정에서 다음 환경 변수들을 추가:

```
DATABASE_URL=postgresql://username:password@host:port/database?schema=public
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
ADMIN_EMAIL=admin@tereo.com
ADMIN_PASSWORD=admin123
```

### 데이터베이스 설정
Vercel에서는 PostgreSQL을 사용하려면 외부 데이터베이스 서비스가 필요합니다:

#### 옵션 1: Vercel Postgres (권장)
1. Vercel 대시보드에서 "Storage" 탭
2. "Create Database" 클릭
3. "Postgres" 선택
4. 데이터베이스 생성 후 연결 문자열을 `DATABASE_URL`에 설정

#### 옵션 2: Supabase (무료)
1. [supabase.com](https://supabase.com)에서 계정 생성
2. 새 프로젝트 생성
3. Settings > Database에서 연결 문자열 복사
4. Vercel 환경 변수에 설정

### 배포 완료
1. "Deploy" 버튼 클릭
2. 배포 완료 후 제공되는 URL로 접속
3. 관리자 페이지: `https://your-domain.vercel.app/admin/login`

## 3. 초기 데이터 설정

배포 완료 후 다음 명령으로 초기 데이터를 설정:

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리에서
vercel env pull .env.local

# 데이터베이스 마이그레이션 및 시드
npx prisma db push
npx prisma db seed
```

## 4. 관리자 계정

기본 관리자 계정:
- 이메일: admin@tereo.com
- 비밀번호: admin123

**보안을 위해 배포 후 즉시 비밀번호를 변경하세요!**

## 5. 도메인 설정 (선택사항)

1. Vercel 대시보드에서 프로젝트 선택
2. "Settings" > "Domains" 탭
3. 커스텀 도메인 추가
4. DNS 설정 완료

## 문제 해결

### 빌드 오류
- Node.js 버전 확인 (18.x 권장)
- 의존성 설치 확인
- 환경 변수 설정 확인

### 데이터베이스 연결 오류
- DATABASE_URL 형식 확인
- 데이터베이스 서비스 상태 확인
- 방화벽 설정 확인

### 인증 오류
- NEXTAUTH_SECRET 설정 확인
- NEXTAUTH_URL 설정 확인
- 세션 설정 확인
