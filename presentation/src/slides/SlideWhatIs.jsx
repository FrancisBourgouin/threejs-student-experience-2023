import BrowserExplode from "../components/BrowserExplode";

export default function SlideWhatIs(props) {
  return (
    <section className="Slide SlideWhatIs">
      <header>
        <h1>WHAT IS THREE.JS?</h1>

        <p>
          <strong>Three.js</strong> is a cross-browser JavaScript library and application
          programming interface (API) used to create and display animated 3D computer
          graphics in a web browser using WebGL.
        </p>
        <p>
          <strong>React Three Fiber</strong> is a React renderer for three.js.
        </p>
        <p>
          <strong>Drei</strong> is a growing collection of useful helpers and fully
          functional, ready-made abstractions for @react-three/fiber
        </p>
      </header>
      <div>
        <BrowserExplode />
      </div>
    </section>
  );
}
