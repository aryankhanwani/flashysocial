import { Logo } from "@/components/commons/logo";
import { ArrowLeftIcon, RotateCwIcon } from "lucide-react";
import type { ReactNode } from "react";
import { QuickStartRouterButton } from "../quick-start/[slug]/[username]/components/router-button";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-slate-50">
      <div className="mx-auto max-w-screen-md pt-4">
        <header className="sticky top-1 z-50 mx-2 flex flex-row items-center gap-4 rounded-full bg-card p-4 shadow-sm">
          <QuickStartRouterButton action="push" args={["/"]}>
            <ArrowLeftIcon />
          </QuickStartRouterButton>

          <Logo className="mx-auto max-h-8" draggable={false} />

          <QuickStartRouterButton
            action="refresh"
            clickInterval={3000}
            preserveIcon
          >
            <RotateCwIcon />
          </QuickStartRouterButton>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
