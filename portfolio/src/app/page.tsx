'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/portfolio");
  }, [router]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Keeping the original content which will be shown briefly before redirect */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Original content... */}
      </main>
    </div>
  );
}
