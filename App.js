import propTypes from 'prop-types'

function Game({ name, picture, rating}) {
  return(
    <div>
       <h2>i like {name} </h2>
       <h4>{rating}/5.0</h4>
       <img src={picture} alt={name} />
       </div>
   );
  }

const gameILike = [
  {
    key: 1,
    name: 'Diablo II resurrected',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M1kh_F3eAC_RMKfQd6BkqgHaEK%26pid%3DApi&f=1',
    rating: 4.2,
  },
  { 
    key: 2,
    name: 'starcraft',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t93u1tezB8Hm8pj6XTIijQHaDt%26pid%3DApi&f=1',
    rating: 4.8,
  },
  { 
    key: 3,
    name: 'League of legend',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2hInko6OXypSDF12IQ5F8AHaEL%26pid%3DApi&f=1',
    rating: 4.3,
  },
  { 
    key:4.,
    name: 'PUBG',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mouH1iW8v0Xw1J2CwyhNqwHaDF%26pid%3DApi&f=1',
    rating: 4.2,
  },
  { 
    key: 5,
    name: 'LostArk',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jH_UFjQ6XMiXfiW163G-UwAAAA%26pid%3DApi&f=1',
    rating: 5,
  },
  { 
    key: 6,
    name: 'Hearthstone',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.XPL76c49Lag8CNiPi9BVXQHaD_%26pid%3DApi&f=1',
    rating: 3.7,
  },
  { 
    key: 7,
    name: 'yugioh masterdual',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hqQyYaeZc6Fm05xbEojJRwHaEP%26pid%3DApi&f=1',
    rating: 3.1,
  },
]
  function App() {
    return (
      <div>
        {gameILike.map(play => (
          <Game key={play.id} name={play.name} picture={play.image} rating={play.rating} />
        ))}
      </div>
    );
  }

  Game.propTypes ={
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
  };
  
export default App;
