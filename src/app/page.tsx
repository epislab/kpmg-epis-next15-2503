'use client';

import React from 'react';

export default function MainPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* 네비게이션 바 */}
      <div className="fixed top-0 left-0 w-full bg-blue-900 z-30 py-4 px-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <ul className="flex space-x-4 w-full justify-between">
            <li className="flex flex-col">
              <span className="text-xl font-bold">01</span>
              <span className="text-sm">about With-FoM</span>
              <span className="text-xs">회사 개요</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xl font-bold">02</span>
              <span className="text-sm">about With-FoM</span>
              <span className="text-xs">회사 연혁</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xl font-bold">03</span>
              <span className="text-sm">Business area</span>
              <span className="text-xs">사업분야</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xl font-bold">04</span>
              <span className="text-sm">Market Scope</span>
              <span className="text-xs">한국시장의 현재</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xl font-bold">05</span>
              <span className="text-sm">What we do</span>
              <span className="text-xs">위드폼이 하는 일</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xl font-bold">06</span>
              <span className="text-sm">CONTACT</span>
              <span className="text-xs">연락</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* 네비게이션 바 아래의 컨텐츠 영역 */}
      <div className="w-full h-full pt-[95px]">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 w-full h-full mt-[95px]">
          <img
            src="/assets/intro/background.svg"
            alt="Intro background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 왼쪽 상단 도형 (삼각형) */}
        <div className="absolute top-[95px] left-0 w-[100px] h-[100px] z-10">
          <img src="/assets/intro/left-triangle.svg" alt="triangle" className="w-full h-full" />
        </div>

        {/* 왼쪽 상단 도형 (스윙 곡선) */}
        <div className="absolute top-[95px] left-0 w-[500px] h-[500px] z-0" style={{ marginTop: "-100px" }}>
          <img src="/assets/intro/left-swing.svg" alt="swing" className="w-full h-full" />
        </div>

        {/* FoM 로고 */}
        <div className="absolute top-[101px] right-6 z-10">
          <img src="/assets/intro/fom-icon.svg" alt="FoM Logo" className="w-[225px]" />
        </div>

        {/* 작업자 이미지 */}
        <div className="absolute bottom-0 left-0 z-10">
          <img src="/assets/intro/worker.png" alt="worker" className="w-[450px]" />
        </div>

        {/* 중앙 텍스트 - W와 P를 세로로 정렬하고 간격 조정 */}
        <div className="absolute top-[50%] right-[100px] transform -translate-y-1/2 text-left z-20">
          <h1 className="text-8xl font-bold text-blue-300" style={{ fontSize: '6rem', letterSpacing: '0.05em', lineHeight: '1' }}>WITH FoM</h1>
          <h2 className="font-normal tracking-widest" style={{ fontSize: '5rem', letterSpacing: '0.05em', marginTop: '1px' }}>PRESENTATION</h2>
        </div>

        {/* 빗선 사각형 영역 */}
        <div
          className="absolute bottom-0 left-[250px] w-[734px] h-[300px] z-0"
          style={{
            clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)',
          }}
        >
          <div className="diagonal-lines w-full h-full" />
        </div>

        {/* 내부 CSS - 빗선 정의 */}
        <style jsx>{`
        .diagonal-lines {
          background-image: repeating-linear-gradient(
            45deg,
            white,
            white 2px,
            transparent 2px,
            transparent 10px
          );
        }
      `}</style>
      </div>
    </div>
  );
}
