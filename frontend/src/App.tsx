import { useRef } from 'react';

function App() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const changeText = () => {
  for (let i: number = 0; i < 3; i++) {
    setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.innerHTML = `${i}`;
      }
    }, i * 1000); // 1-second intervals
  }
};

  return (
    <>
      <h1 ref={headingRef} className="text-green-500 text-center text-[25px]">
        Hello Developer
      </h1>
      <button onClick={changeText}>Change</button>
    </>
  );
}

export default App;