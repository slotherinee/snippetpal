import { SVGSkeleton, Skeleton } from "@/components/Skeleton";
// import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col min-h-dvh">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Skeleton className="animate-pulse h-4 w-[250px] relative flex-1" />
          <Skeleton className="animate-pulse h-4 w-[250px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="rounded-md border shadow-sm flex flex-col md:flex-row justify-between items-center p-4">
          <div className="max-w-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 w-10 h-10">
                  <span className="flex h-full w-full items-center justify-center">
                    <Skeleton className="w-[16px] max-w-full" />
                  </span>
                </span>
                <div>
                  <h3>
                    <a>
                      <Skeleton className="w-[504px] max-w-full" />
                    </a>
                  </h3>
                  <p>
                    <Skeleton className="w-[320px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p>
                <Skeleton className="w-[2328px] max-w-full" />
              </p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
          <div className="w-64 h-32">
            <SVGSkeleton className="w-[0px] h-[0px]" />
          </div>
        </div>
        <div className="rounded-md border shadow-sm flex flex-col md:flex-row justify-between items-center p-4">
          <div className="max-w-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 w-10 h-10">
                  <span className="flex h-full w-full items-center justify-center">
                    <Skeleton className="w-[16px] max-w-full" />
                  </span>
                </span>
                <div>
                  <h3>
                    <a>
                      <Skeleton className="w-[504px] max-w-full" />
                    </a>
                  </h3>
                  <p>
                    <Skeleton className="w-[320px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p>
                <Skeleton className="w-[2328px] max-w-full" />
              </p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
          <div className="w-64 h-32">
            <SVGSkeleton className="w-[0px] h-[0px]" />
          </div>
        </div>
        <div className="rounded-md border shadow-sm flex flex-col md:flex-row justify-between items-center p-4">
          <div className="max-w-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 w-10 h-10">
                  <span className="flex h-full w-full items-center justify-center">
                    <Skeleton className="w-[16px] max-w-full" />
                  </span>
                </span>
                <div>
                  <h3>
                    <a>
                      <Skeleton className="w-[504px] max-w-full" />
                    </a>
                  </h3>
                  <p>
                    <Skeleton className="w-[320px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p>
                <Skeleton className="w-[2328px] max-w-full" />
              </p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
          <div className="w-64 h-32">
            <SVGSkeleton className="w-[0px] h-[0px]" />
          </div>
        </div>
        <div className="rounded-md border shadow-sm flex flex-col md:flex-row justify-between items-center p-4">
          <div className="max-w-3xl">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 w-10 h-10">
                  <span className="flex h-full w-full items-center justify-center">
                    <Skeleton className="w-[16px] max-w-full" />
                  </span>
                </span>
                <div>
                  <h3>
                    <a>
                      <Skeleton className="w-[504px] max-w-full" />
                    </a>
                  </h3>
                  <p>
                    <Skeleton className="w-[320px] max-w-full" />
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p>
                <Skeleton className="w-[2328px] max-w-full" />
              </p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <a>
                <Skeleton className="w-[72px] max-w-full" />
              </a>
            </div>
          </div>
          <div className="w-64 h-32">
            <SVGSkeleton className="w-[0px] h-[0px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
