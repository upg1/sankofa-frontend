import Card from '@/components/Card';
import '../globals.css'; // Ensure this path is correct

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Student Motivation"
          description="Track and analyze student motivation levels."
          link="/dashboard/student-motivation"
        />
        <Card
          title="Engagement Tracking"
          description="Monitor student engagement and participation."
          link="/dashboard/engagement"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
