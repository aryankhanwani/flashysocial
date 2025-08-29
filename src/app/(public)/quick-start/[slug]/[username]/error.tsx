"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const hardReset = useCallback(() => {
    reset();
    router.refresh();
  }, [reset, router]);

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-muted-foreground">
          It looks like you&apos;ve entered an invalid URL parameter. Please
          check your input and try again.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button onClick={hardReset} size="sm">
            Try again
          </Button>
          <Link href="." prefetch={false}>
            <Button size="sm" variant="link">
              Restart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
