import Image from "next/image";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      list: data.results,
    },
  };
}

export default function Home({ list }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>

      <div className={styles.pokemonContainer}>
        {list.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}
