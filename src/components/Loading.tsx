import { Skeleton } from "./ui/skeleton";

function Loading() {
  return (
    <>
      <div className="grid gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="mx-auto h-4 w-[250px]" />
                <Skeleton className="mx-auto h-4 w-[200px]" />
              </div>
            </div>
          );
        })}
      </div>
      {/* Divider */}

      <div>
        <div>
          <Skeleton className="mb-4 mt-10 h-1 w-full" />
        </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="mb-2 h-56 w-full rounded-xl sm:w-72 md:w-60 lg:w-80" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Loading;
