# 맛길(mat-gil)
> **유명 유튜브 영상 기반 맛집 소개 웹 애플리케이션.** <br/> **개발기간: 2025.01.16 ~ 2025.03.01**

<div align="center">
<img width="250" alt="image" src="https://github.com/user-attachments/assets/d2446034-0c63-458e-88b2-dc0b4c27d5d0">
</div>

## 배포 주소

> [http://mat-gil.vercel.app](http://mat-gil.vercel.app)

## 프로젝트 소개

`맛길`은 유튜브를 통해 검증된 인기 맛집 리스트를 제공하는 웹 애플리케이션입니다. 사용자는 유튜브 영상으로 확인된 맛집의 다양한 메뉴를 살펴볼 수 있으며, 실시간 길찾기 기능을 통해 목적지까지의 최적 경로를 손쉽게 찾을 수 있습니다.

#### A web application providing a verified list of popular restaurants on YouTube and real-time optimal route
`Matgil` is a web application that provides a list of popular restaurants verified through YouTube. Users can explore various menus of the restaurants confirmed in YouTube videos, and with the real-time navigation feature, they can easily find the optimal route to their destination.

## 시작 가이드
### Installation
``` bash
$ git clone https://github.com/hpk5802/mat-gil.git
$ cd mat-gil
$ npm install 
$ npm run dev
```
---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Back-end
![Serverless-API](https://img.shields.io/badge/serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white)

### Deploy
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

---
## 화면 구성 📺
|  메인(리스트) 페이지  |  소개(상세) 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/user-attachments/assets/388ad04f-2f01-497b-a849-cc269ccbf246"/> |  <img width="329" src="https://github.com/user-attachments/assets/a65669b3-a41b-43e9-a513-039a2d70b2ba"/> |  
| 길 찾기 | 길 찾기 시연 |
| <img width="329" src="https://github.com/user-attachments/assets/d256eb02-2759-4578-b831-29be0daabcfc"/>   |  <img width="329" src="https://github.com/user-attachments/assets/da683750-a61f-4829-8d2c-f5569fb6b40e" /> |



---
## 주요 기능 📦

### ⭐️ 맛집 위치 및 메뉴 정보 확인
- 유명 유튜브 채널(또간집, 먹을텐데, 미식은 경험이다, 줄서는 식당, 님아 그 식당을 가오)의 맛집 정보 제공(영상, 메뉴, 위치)
  - Youtube Data API & Naver Map API 사용
  - 추후 채널, 맛집 추가 예정

### ⭐️ 맛집까지 최적 경로 확인
- 현재 위치에서 맛집까지 실시간 최적 경로 확인 (거리, 예상 시간, 택시 요금, 통행료)
  - Geolocation API & Naver Direction API 사용
  - 현재 자동차 경로만 지원, 추후 Naver Direction API 업데이트에 맞춰 자동차 길찾기 외 기능은 추가 예정

---
## 디렉토리 구조
```bash
app
 ┣ api
 ┃ ┣ directions
 ┃ ┃ ┗ route.ts
 ┃ ┣ sitemap
 ┃ ┃ ┗ route.ts
 ┃ ┗ [channel]
 ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┗ route.ts
 ┃ ┃ ┗ route.ts
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ Dialog.tsx
 ┃ ┃ ┣ Divider.tsx
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ LazyImage.tsx
 ┃ ┃ ┣ ScrollButton.tsx
 ┃ ┃ ┗ Tag.tsx
 ┃ ┣ direction
 ┃ ┃ ┣ DirectionDescription.tsx
 ┃ ┃ ┣ DirectionDescriptionSkeleton.tsx
 ┃ ┃ ┗ DirectionWrap.tsx
 ┃ ┣ icons
 ┃ ┃ ┣ IconArrowLeft.tsx
 ┃ ┃ ┣ IconArrowRight.tsx
 ┃ ┃ ┣ IconCharge.tsx
 ┃ ┃ ┣ IconClock.tsx
 ┃ ┃ ┣ IconClose.tsx
 ┃ ┃ ┣ IconHandle.tsx
 ┃ ┃ ┣ IconInfo.tsx
 ┃ ┃ ┣ IconMarker.tsx
 ┃ ┃ ┣ IconNavigation.tsx
 ┃ ┃ ┣ IconRetry.tsx
 ┃ ┃ ┗ Logo.tsx
 ┃ ┣ lists
 ┃ ┃ ┣ Card.tsx
 ┃ ┃ ┣ Category.tsx
 ┃ ┃ ┗ ListContainer.tsx
 ┃ ┣ Map
 ┃ ┃ ┣ DirectionMap.tsx
 ┃ ┃ ┣ DirectionMapSkeleton.tsx
 ┃ ┃ ┣ Map.tsx
 ┃ ┃ ┗ MapSkeleton.tsx
 ┃ ┣ menu
 ┃ ┃ ┗ Menu.tsx
 ┃ ┣ Skeleton
 ┃ ┃ ┗ SkeletonImage.tsx
 ┃ ┣ video
 ┃ ┃ ┗ VideoPlayer.tsx
 ┃ ┗ TagContainer.tsx
 ┣ constants
 ┃ ┣ channelMap.ts
 ┃ ┗ tags.ts
 ┣ hooks
 ┃ ┣ useDialog.ts
 ┃ ┣ useFetchData.ts
 ┃ ┗ useIntersectionObserver.ts
 ┣ lib
 ┃ ┣ getRoute.ts
 ┃ ┗ instance.ts
 ┣ types
 ┃ ┣ directions.ts
 ┃ ┗ youtube.ts
 ┣ utils
 ┃ ┣ convertTimeToSeconds.ts
 ┃ ┣ format.ts
 ┃ ┗ handleGeolocationError.ts
 ┣ [channel]
 ┃ ┣ [id]
 ┃ ┃ ┗ page.tsx
 ┃ ┗ page.tsx
 ┣ apple-icon.png
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┣ page.tsx
 ┣ robots.txt
 ┗ sitemap.ts
data
 ┣ baekjongwon.json
 ┣ haennim.json
 ┣ hongseokcheon.json
 ┣ pungja.json
 ┗ seongsigyeong.json
```
