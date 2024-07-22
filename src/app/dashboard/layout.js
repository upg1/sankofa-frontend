import ThemeToggle from '@/components/ThemeToggle';
import '../globals.css';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Teacher Dashboard</h1>
        <ThemeToggle />
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
