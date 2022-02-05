import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pkm, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const avatar = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;

  return (
    <div className={styles.pokemonContainer}>
      <h1 className={styles.pokemonTitle}>{pokemon.name}</h1>
      <Image src={avatar} width="200" height="200" alt={pokemon.name} />
      <div>
        <h3>Pokedex Number</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Type:</h3>
        <div className={styles.typesContainer}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles[`type_${item.type.name}`]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.dataHeight}>
          <h4>Height:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.dataWeight}>
          <h4>Weight:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
