
# 🧑‍💻 Stack Snapshot (Frontend) - 사진 추억 남기기 서비스

<img width="1725" alt="스크린샷 2024-12-03 18 06 21" src="https://github.com/user-attachments/assets/c65b1d28-420b-4349-8791-9afb76e213e5">

**Stack Snapshot**은 '인생네컷'과 유사한 기능을 제공하는 사진 추억 남기기 서비스로, **경북 2024 해커톤**에서 참가자들의 소중한 추억을 기록해주는 프로젝트입니다. 사용자는 다양한 프레임을 적용해 사진을 찍고, 소중한 추억을 남길 수 있습니다.

---

## 🧑‍💻 기여자
[![Contributors](https://img.shields.io/badge/contributors-4-brightgreen)](#-기여자-contributors)  

| 이름         | Github 프로필            | 역할                              | 사용 언어 |
|--------------|--------------------------|-----------------------------------|-------------|
| **권민지** | [mjgwon24](https://github.com/mjgwon24) | PM & frontend & backend           | React, JavaScript, CSS |
| **김이현** | [lh7721004](https://github.com/lh7721004) | frontend & backend        | React, JavaScript, CSS |
| **임석진** | [seokjin925](https://github.com/seokjin925) | frontend & backend                 | React, JavaScript, CSS |
| **김현나** | [nanaring1](https://github.com/nanaring1) | frontend                 | React, JavaScript, CSS |

---

## 🛠️ 개발 환경

### 협업 툴
   ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)  ![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white)   ![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white)

### 서비스 배포 환경
  ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

---

## 🔧 기술 스택

### Language  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Framework
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

### Cooperation  
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)  ![GitHub Projects](https://img.shields.io/badge/Projects-0366D6?style=flat&logo=github&logoColor=white)

---

## 🔄 Development Workflow

### 브랜치 전략

브랜치 전략은 Git Flow를 기반으로 하며, 다음과 같은 브랜치를 사용합니다.

- **Main Branch**:  
    - 배포 가능한 상태의 코드를 유지합니다.  
    - 모든 배포는 이 브랜치에서 이루어집니다.
- **Develop Branch**:
    - 기능 개발을 취합하는 브랜치입니다.
- **Feature Branches**:  
    - 기능별로 분기한 브랜치입니다.
    - 각 기능 개발은 `feature/{기능명}` 형식의 브랜치에서 이루어지며, 작업 완료 후 Develop Branch로 병합됩니다.
---

## 🔧 주요 기능

- **사진 찍기:** 사용자는 다양한 필터를 적용하여 사진을 찍을 수 있습니다.
- **추억 저장:** 최종적으로 생성된 사진을 다운로드할 수 있습니다.
- **QR 코드 제공:** 사진이 생성된 후, 다운로드를 위한 QR 코드가 제공됩니다.

---

## 📅 개발 기간

- **개발 기간**: 2024년 10월 13일 ~ 2024년 11월 20일  
  
---

## 📂 프로젝트 구조

```plaintext
src/
├── components/             # 재사용 가능한 UI 컴포넌트
├── css/                    # 스타일 관련 파일
├── images/                 # 이미지 파일
├── pages/                  # 앱의 주요 화면
├── App.js                  # 앱 진입점
├── index.js                # 애플리케이션 시작 지점
├── reportWebVitals.js      # 성능 리포트 설정
├── setupTests.js           # 테스트 설정
public/
├── index.html              # HTML 파일
.gitignore                  # Git에서 제외할 파일 목록
package.json                # 프로젝트 의존성 관리 파일
package-lock.json           # 의존성 정확한 버전 관리
README.md                  # 프로젝트 설명 파일
```

---

## 💻 설치 방법

1. 저장소 클론

```bash
git clone https://github.com/mjgwon24/stack-snapshot-front.git
```

2. 프로젝트 디렉터리로 이동

```bash
cd stack-snapshot-front
```

3. 필요한 의존성 설치

```bash
npm install
```

4. 로컬 서버 실행

```bash
npm start
```

5. 로컬에서 `http://localhost:3000` 에 접속하여 서비스 확인

---

## 📬 문의

프로젝트 관련 문의는 GitHub Issues 또는 아래 연락처로 보내주세요.

- **GitHub Repository:** [stack-snapshot-front](https://github.com/mjgwon24/stack-snapshot-front.git)

- **이메일:** alswlchlrh8@naver.com
