import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom';
import {getByAltText, render} from '@testing-library/react'

import Home from '../src/components/Home'

test('renders logo', () => {

  const { getByAltText } =  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

    const image = getByAltText('PHA_logo');
    expect(image.src).toContain('http://localhost/pokemonHenryApp.png');
    
    // const component = render(
    //   <BrowserRouter>
    //     <Home />
    //   </BrowserRouter>
    // );
    // expect(component.container).toHaveTextContent('Inside a Pokeball')
})

// import Pokemons from "./src/components/pokemons/Pokemons";
// it("Does component renders child component correctly based on type?", () => {
//     const component = shallow(<Pokemons/>);
//     console.log(component.debug());
//     // const content = component.find(ParentComponent).dive().dive().find(ChildComponent);
//     // expect(content.exists()).toEqual(true);
// });