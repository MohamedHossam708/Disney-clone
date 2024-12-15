import { Skeleton } from "@/components/ui/skeleton"

export  default function SkeletonDemo() {
  return (<>

  <div className="ms-32">   



    <div className="flex  items-center space-x-4 mt-32">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
    <Skeleton className="h-4 w-[400px]" />
    <Skeleton className="h-4 w-[400px]" />
    </div>
    </div>
    

    <div className="flex items-center space-x-4 mt-32">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
        </div>
    </div>


    <div className="flex items-center space-x-4 mt-32">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
        </div>
    </div>


    <div className="flex items-center space-x-4 mt-32">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[400px]" />
        </div>
    </div>

    </div>
    

    </> )
}
