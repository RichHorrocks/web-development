import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = () => {
  const [side, setSide] = useState('light');
  const [selectedCharacter, setCharacter] = useState(1);
  const [destroyed, setDestroyed] = useState(false);

  const sideHandler = side => {
    console.log(side);
    setSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={side}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this, 'light')}>Light Side</button>
      <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
      {side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }

  return content;
};

export default App;
