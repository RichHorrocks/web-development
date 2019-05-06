import React, { useEffect } from 'react';

import { useHttp } from '../hooks/http';

import Summary from './Summary';

const Character = props => {
  const [isLoading, fetchedData] = useHttp(
    'https://swapi.co/api/people/' + props.selectedChar,
    [props.selectedChar]
  );

  const loadedCharacter = fetchedData
    ? {
      id: props.selectedChar,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length
    }
    : {};

  // const fetchData = async () => {
  //   console.log(
  //     'Sending Http request for new character with id ' + props.selectedChar
  //   );
  //
  //   setIsLoading(true);
  //
  //   try {
  //     const response = await fetch(
  //       'https://swapi.co/api/people/' + props.selectedChar
  //     );
  //     if (!response.ok) {
  //       throw new Error('Could not fetch person!');
  //     }
  //
  //     const charData = await response.json();
  //     const loadedCharacter = {
  //       id: props.selectedChar,
  //       name: charData.name,
  //       height: charData.height,
  //       colors: {
  //         hair: charData.hair_color,
  //         skin: charData.skin_color
  //       },
  //       gender: charData.gender,
  //       movieCount: charData.films.length
  //     };
  //     setLoadedCharacter(loadedCharacter);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     console.log(err);
  //   }
  // };
  //
  // useEffect(
  //   () => {
  //     fetchData();
  //
  //     return () => {
  //       console.log('Cleaning up...');
  //     };
  //   },
  //   [props.selectedChar]
  // );

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter.id) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

// Any prop changing should trigger an update. No need for second function.
export default React.memo(Character);
