import Link from 'next/link';

export default function Card({ title, content, href }) {
  return (
    <Link href={href} className="block p-4 rounded shadow-md transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{content}</p>

    </Link>
  );
}


