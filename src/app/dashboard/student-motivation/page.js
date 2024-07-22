'use client'
import BarChart from '../../../components/BarChart';

export default function StudentMotivationPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Student Motivation</h2>
      <p>Here you can track and analyze student motivation levels.</p>
      <BarChart />
    </div>
  );
}
