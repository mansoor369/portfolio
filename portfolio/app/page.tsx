import Header from "./components/Header";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="max-w-8xl mx-20">
        <Intro />
      </div>
    </div>
  );
}
