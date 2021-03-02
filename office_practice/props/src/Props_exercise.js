import "./style.css"

let Pokedex = (props) => {

    let pokeList = props.pokemon.map(poke => {
        return (
            <Pokecard
            key={poke.id}
            name={poke.name}
            type={poke.type}
            image={poke.image}
        />
        );
    });

    return (
        <div>
            <h1 id='pokedex-header'>Pokedex</h1>
            <div className='flex-container'>
                {pokeList}
            </div>
        </div>
    );
}

let Pokecard = (props) => {
    return (
        <div className='poke-card'>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <p>Type: {props.type}</p>
        </div>
    );
}




Pokedex.defaultProps = {
pokemon: [
    {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
    ]
}
export default Pokedex;