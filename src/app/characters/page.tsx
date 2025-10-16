interface Character {
  id: number;
  name: string;
  portrait_path: string;
  age: number;
  occupation: string;
  status: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Character[];
}
async function getCharacters(page: number = 1): Promise<ApiResponse> {
  // Fetch a TU API interna, no a la API externa
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/characters?page=${page}`, {
    next: { revalidate: 3600 }, // Cachea 1 hora
  });

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  return res.json();
}

export default async function CharactersPage() {
  const data = await getCharacters();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Los Simpsons - Personajes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((character) => (
          <div
            key={character.id}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={character.portrait_path}
              alt={character.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-bold">{character.name}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p>Página 1 de {data.pages}</p>
        <p>Total de personajes: {data.count}</p>
      </div>
    </main>
  );
}
