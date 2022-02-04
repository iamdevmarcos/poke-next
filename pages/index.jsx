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
    <div>
      <h1>PokeNext</h1>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
