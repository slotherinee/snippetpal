import { Skeleton, SVGSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto">
      <article className="prose lg:prose-xl prose-pre:p-0 prose-pre:m-0">
        <h2>
          <Skeleton className="w-[504px] max-w-full" />
        </h2>
        <p>
          <Skeleton className="w-[472px] max-w-full" />
          <strong>
            <Skeleton className="w-[56px] max-w-full" />
          </strong>
          <strong>
            <Skeleton className="w-[40px] max-w-full" />
          </strong>
          <strong>
            <Skeleton className="w-[80px] max-w-full" />
          </strong>
        </p>
        <div className="h-[500px]">
          <SVGSkeleton className="rounded w-full h-full" />
        </div>
        <p>
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
        </p>
      </article>
    </section>
  );
}
