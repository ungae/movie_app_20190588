
function Game({name, picture}) {
  return(
    <div>
       <h2>i like {name} </h2>
       <img src={picture} />
       </div>
   );
  }

const gameILike = [
  {
    name: 'Diablo II resurrected',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M1kh_F3eAC_RMKfQd6BkqgHaEK%26pid%3DApi&f=1',
  },
  {
    name: 'starcraft',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t93u1tezB8Hm8pj6XTIijQHaDt%26pid%3DApi&f=1',
  },
  {
    name: 'League of legend',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2hInko6OXypSDF12IQ5F8AHaEL%26pid%3DApi&f=1',
  },
  {
    name: 'PUBG',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mouH1iW8v0Xw1J2CwyhNqwHaDF%26pid%3DApi&f=1',
  },
  {
    name: 'LostArk',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jH_UFjQ6XMiXfiW163G-UwAAAA%26pid%3DApi&f=1',
  },
  {
    name: 'Hearthstone',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.XPL76c49Lag8CNiPi9BVXQHaD_%26pid%3DApi&f=1',
  },
  {
    name: 'yugioh masterdual',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hqQyYaeZc6Fm05xbEojJRwHaEP%26pid%3DApi&f=1',
  },
]
  function App() {
    return (
      <div>
        {gameILike.map(play => (
          <Game name={play.name} picture={play.image} />
        ))}
      </div>
    );
  }

export default App;

