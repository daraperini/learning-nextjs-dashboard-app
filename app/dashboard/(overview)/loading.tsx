// fallback UI to show as a replacement while page content loads, file built on top of Suspense
// Any UI you add in loading.tsx will be embedded as part of the static file, and sent first

import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton/>;
}
