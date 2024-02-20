import style from "./App.module.scss";
import recipe from "./assets/image-omelette.jpeg";

function App() {
  return (
    <>
      <main>
        <div className={style.containerOne}>
          <img src={recipe} alt="reicpe img" />
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This Classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.{" "}
          </p>

          <div className={style.containerTwo}>
            <h2>Preparation time</h2>
            <ul>
              <li>
                <p>
                  <span>Total: </span> Approximately 10 minutes
                </p>
              </li>
              <li>
                <p>
                  <span>Preparation: </span> 5 minutes
                </p>
              </li>
              <li>
                <p>
                  <span>Cooking: </span> 5 minutes
                </p>
              </li>
            </ul>
          </div>

          <h2>Ingredients</h2>
          <ul>
            <li>
              <p>2-3 large eggs</p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste</p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>

          <h2>Instructions</h2>
          <ol>
            <li>
              <p>
                <span>Beat the eggs: </span>In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffer texture.
              </p>
            </li>
            <li>
              <p>
                <span>Heat the pan: </span>Place a non-stick frying pan over
                medium heat and add butter or oil.
              </p>
            </li>
            <li>
              <p>
                <span>Cook the omelette: </span>Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p>
                <span>Add fillings(optional): </span>When the egs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li>
              <p>
                <span>Fold and server: </span>As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li>
              <p>
                <span>Enjoy: </span>Serve hot, with additional salt and pepper
                if needed.
              </p>
            </li>
          </ol>

          {/* the table */}
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table>
            <tr>
              <td>Calories</td>
              <td>277kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>22g</td>
            </tr>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
