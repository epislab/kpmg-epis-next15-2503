import Image from 'next/image';

const PresentationSlide = () => {
  return (
    <div className="relative w-full h-screen bg-[#1C3D7A] overflow-hidden text-white">
      {/* 배경 장식 - 원형 */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-300 rounded-full mix-blend-overlay opacity-40"></div>
      </div>

      {/* 왼쪽 하단: 작업자 이미지 */}
      <div className="absolute bottom-0 left-4 z-10">
        <img src="/assets/worker.svg" alt="worker" className="w-[250px]" />
      </div>

      {/* 오른쪽 상단: FoM 로고 */}
      <div className="absolute top-8 right-8 z-10">
        <img src="/assets/fom-logo.svg" alt="FoM Logo" className="w-[80px]" />
      </div>

      {/* 중앙 텍스트 */}
      <div className="absolute top-[40%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-right z-20">
        <h1 className="text-5xl font-bold text-blue-200">WITH FoM</h1>
        <h2 className="text-4xl mt-2">PRESENTATION</h2>
      </div>

      {/* 빗선 장식 */}
      <div className="absolute bottom-8 left-[300px] w-[300px] h-[150px] z-0">
        <div className="diagonal-lines w-full h-full" />
      </div>

      {/* 내부 CSS 정의 */}
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
  );
};

export default PresentationSlide;
