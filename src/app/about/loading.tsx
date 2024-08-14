import { Skeleton, SVGSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-dvh p-6">
      <section className="w-full h-[700px] md:py-24 lg:py-32 bg-muted relative">
        <SVGSkeleton className="object-cover w-full h-full" />
      </section>
    </div>
  );
}
