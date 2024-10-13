import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Flowers from "./images/flowers.jpg";
import Summer from "./images/summer.jpg";
import Winter from "./images/winter.jpg";
import Sunset from "./images/sunset.jpg";

function App() {
  return (
    <div className="App">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">CARDS</p>
        </div>
      </section>
      <section className="section"></section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              image={Flowers}
              title="Flowers"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh est, gravida non massa eu, consectetur feugiat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis id dolor bibendum blandit. Maecenas eu est et massa volutpat vehicula vitae vitae libero. Ut volutpat sapien nunc, ac consectetur diam venenatis quis. Aenean leo ligula, mattis sit amet lacinia sed, gravida in nunc. Nullam eu orci quam."
            />
          </div>
          <div className="column">
            <Course
              image={Summer}
              title="Summer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh est, gravida non massa eu, consectetur feugiat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis id dolor bibendum blandit. Maecenas eu est et massa volutpat vehicula vitae vitae libero. Ut volutpat sapien nunc, ac consectetur diam venenatis quis. Aenean leo ligula, mattis sit amet lacinia sed, gravida in nunc. Nullam eu orci quam."
            />
          </div>
          <div className="column">
            <Course
              image={Winter}
              title="Winter"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh est, gravida non massa eu, consectetur feugiat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis id dolor bibendum blandit. Maecenas eu est et massa volutpat vehicula vitae vitae libero. Ut volutpat sapien nunc, ac consectetur diam venenatis quis. Aenean leo ligula, mattis sit amet lacinia sed, gravida in nunc. Nullam eu orci quam."
            />
          </div>
          <div className="column">
            <Course
              image={Sunset}
              title="Sunset"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh est, gravida non massa eu, consectetur feugiat turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis id dolor bibendum blandit. Maecenas eu est et massa volutpat vehicula vitae vitae libero. Ut volutpat sapien nunc, ac consectetur diam venenatis quis. Aenean leo ligula, mattis sit amet lacinia sed, gravida in nunc. Nullam eu orci quam."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
