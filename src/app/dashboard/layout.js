import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import '../globals.css'; // Ensure this path is correct

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-darkText dark:text-white">
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            <Link href="/dashboard/student-motivation" className="hover:text-gray-300 dark:hover:text-gray-400">
              Student Motivation
            </Link>
            <Link href="/dashboard/engagement" className="hover:text-gray-300 dark:hover:text-gray-400">
              Engagement Tracking
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="p-6">
        {children}
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-4 text-center">
        <p>&copy; 2024 Teacher Dashboard</p>
      </footer>
    </div>
  );
}
