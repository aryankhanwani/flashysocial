"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function InstagramGetStartedButton() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => setVisible(window.scrollY >= 450);

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-full transition-transform",
        visible && "bottom-2 translate-y-0",
      )}
    >
      <Button type="submit" resetClassName className="button w-button">
        <Link href="#hero">Get Started</Link>
      </Button>
    </div>
  );
}
