import Card from '@/components/Card';

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Student Motivation"
          content="Track and analyze student motivation levels."
          href="/dashboard/student-motivation"
        />
        <Card
          title="Engagement Metrics"
          content="Monitor and evaluate student engagement."
          href="/dashboard/engagement-metrics"
        />
        <Card
          title="Knowledge Assessment"
          content="Assess student understanding and knowledge."
          href="/dashboard/knowledge-assessment"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
