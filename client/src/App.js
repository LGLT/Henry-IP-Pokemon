import Home from './components/Home';
import {Route, Switch} from "react-router-dom";

import Pokemons from './components/pokemons/Pokemons';
import PokemonDetails from './components/pokemons/PokemonDetails';
import CreatePokemon from './components/pokemons/CreatePokemon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pokemons'>
          <Pokemons />
        </Route>
        <Route exact path='/pokemons/createPokemon'>
          <CreatePokemon />
        </Route>
        <Route exact path='/pokemons/:pokemon'>
          <PokemonDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
