import { auth } from "@/auth";
import Count from "@/components/Count";
import Counter from "@/components/Counter";
import NavigationBar from "@/components/NavigationBar";
import { Suspense } from "react";

export default async function CSRPage() {
  const session = await auth();

  return (
    <div className="flex flex-col h-full">
      <NavigationBar session={session} />
      <main className="isolate flex-1 pt-16">
        <div className="mx-auto container h-full max-w-7xl px-6 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="container mx-auto max-w-7xl h-full">
              <div className="flex flex-col items-center justify-center gap-4 h-full">
                <p className="font-bold text-4xl">Recoil</p>
                <Count />
                <Counter />
              </div>
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
