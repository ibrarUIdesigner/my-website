import { useEffect, useState } from "react";
import type { JSX } from "react";
import AdminLayout from "../../components/AdminLayout";
import BentoCard from "../../components/BentoCard";
import MetricCard from "../../components/MetricCard";
import StatsRow from "../../components/StatsRow";
import { getCounts } from "../../lib/firebase";

export default function AdminDashboard(): JSX.Element {
  const [counts, setCounts] = useState<{ projects: number; blogs: number }>({ projects: 0, blogs: 0 });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCounts()
      .then(setCounts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AdminLayout title="Dashboard">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            <>
              <BentoCard className="h-28 animate-pulse" />
              <BentoCard className="h-28 animate-pulse" />
              <BentoCard className="h-28 animate-pulse" />
            </>
          ) : (
            <>
              <MetricCard value={String(counts.projects)} label="Projects" badge="Admin" />
              <MetricCard value={String(counts.blogs)} label="Blogs" badge="Admin" />
              <MetricCard value="OK" label="Status" badge="System" />
            </>
          )}
        </div>
        <StatsRow />
      </div>
    </AdminLayout>
  );
}
