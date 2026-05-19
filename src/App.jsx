import Card from "./Card";
import "./app.css";

function App() {
  return (
    <div className="card-container">

      <Card
        image="hero.png"
        name="Manikanta"
        hobby="Play story games and watch peak anime and series"
      />

      <Card
        image="hero2.png"
        name="Naruto Fan"
        hobby="Watch anime and grind coding problems"
      />

      <Card
        image="hero3.png"
        name="React Learner"
        hobby="Build websites and learn frontend development"
      />

    </div>
  );
}

export default App;