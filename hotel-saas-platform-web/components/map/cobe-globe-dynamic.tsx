"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { GlobeMarker } from "./cobe-globe";

const DynamicCobeGlobe = dynamic(() => import("./cobe-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center">
      <Skeleton className="w-[80%] h-[80%] rounded-full opacity-20" />
    </div>
  ),
});

interface CobeGlobeDynamicProps {
  markers?: GlobeMarker[];
}

export function CobeGlobeDynamic({ markers }: CobeGlobeDynamicProps) {
  return <DynamicCobeGlobe markers={markers} />;
}
