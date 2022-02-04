import Image from "next/image";

export default function Card({ pokemon }) {
  const avatar = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;

  return (
    <div>
      <Image src={avatar} width="120" height="120" alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}
