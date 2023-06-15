import { useState } from "react";
import "./App.scss";
import SlideIntro from "./slides/SlideIntro";
import SlideWhatIs from "./slides/SlideWhatIs";
import SlideScene from "./slides/SlideScene";
import SlideExample1 from "./slides/SlideExample1";
import SlideExample2 from "./slides/SlideExample2";
import SlideExample3 from "./slides/SlideExample3";
import SlideExample4 from "./slides/SlideExample4";
import { useEffect } from "react";
import SlideLight from "./slides/SlideLight";
import SlideCamera from "./slides/SlideCamera";
import SlideObjects from "./slides/SlideObjects";
import SlideBuild from "./slides/SlideBuild";
import SlideQuestion from "./slides/SlideQuestion";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const slider = (event) => {
      console.log(event.keyCode);
      if (event.keyCode === 39 && count !== 11) {
        setCount(count + 1);
      }
      if (event.keyCode === 37 && count !== 1) {
        setCount(count - 1);
      }
    };

    document.addEventListener("keydown", slider);

    return () => document.removeEventListener("keydown", slider);
  });

  return (
    <>
      {count === 1 && <SlideIntro />}
      {count === 2 && <SlideExample1 />}
      {count === 3 && <SlideExample2 />}
      {count === 4 && <SlideExample3 />}
      {count === 5 && <SlideWhatIs />}
      {count === 6 && <SlideScene />}
      {count === 7 && <SlideLight />}
      {count === 8 && <SlideCamera />}
      {count === 9 && <SlideObjects />}
      {count === 10 && <SlideBuild />}
      {count === 11 && <SlideQuestion />}
    </>
  );
}

export default App;
