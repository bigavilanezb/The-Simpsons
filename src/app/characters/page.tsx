import { CharactersCard } from "../components/characters-card";

export const metadata = {
  title: "Sobre Nosotros",
};

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Galeria de personajes</h1>
      <CharactersCard/>
    </div>
  );
}