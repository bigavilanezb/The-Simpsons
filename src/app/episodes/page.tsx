"use client";
import { useState } from 'react';
 // Necesario si usas hooks o interactividad

export default function Episodes() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email enviado:", email);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Contacto</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}