import { Skeleton, SVGSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto">
      <section className="flex flex-col gap-y-16">
        <div className="w-full h-[500px]">
          <SVGSkeleton className="rounded object-cover w-full h-full" />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-32 mb-20 md:mb-28">
          <div>
            <h1 className="mb-4 leading-normal">
              <a>
                <Skeleton className="w-[288px] max-w-full" />
                <em>
                  <Skeleton className="w-[80px] max-w-full" />
                </em>
              </a>
            </h1>
            <time>
              <Skeleton className="w-[112px] max-w-full" />
            </time>
          </div>
          <div className="max-w-sm md:max-w-md">
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
            <Skeleton className="w-full" />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
