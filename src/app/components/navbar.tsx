import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/characters" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/episodes" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}