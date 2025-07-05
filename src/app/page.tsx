

import { Link } from "@/i18n/navigation";
import CircularLoader from "@/components/CircularLoader";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Multilang</h1>
      <div className="mb-4">
        <Link href="/" className="link">Home</Link>
      </div>
      <div className="mt-6">
        <p>Available languages: English, हिन्दी, Franch,Spanish</p>
      </div>
      <div className="mt-10">
        <CircularLoader />
      </div>
    </div>
  );
}
