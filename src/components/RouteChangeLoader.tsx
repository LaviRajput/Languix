"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CircularLoader from "@/components/CircularLoader";

// This loader will show for 400ms on every route/language change
const RouteChangeLoader: React.FC = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <CircularLoader />
    </div>
  );
};

export default RouteChangeLoader;
