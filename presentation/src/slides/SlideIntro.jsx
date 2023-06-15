import Browser from "../components/Browser";

export default function SlideIntro(props) {
  return (
    <section className="Slide SlideIntro">
      <header>
        <h1>USING 3D IN THE BROWSER</h1>

        <p>
          An exploration of Three.js, React Three Fiber, Blender and other great tools
        </p>

        <p>By Francis Bourgouin</p>
      </header>
      <div>
        <Browser />
      </div>
    </section>
  );
}
