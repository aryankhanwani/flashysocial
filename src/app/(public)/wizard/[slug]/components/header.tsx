"use client";

import { Logo } from "@/components/commons/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ServiceProviders } from "@/services";
import Link from "next/link";
import { useParams } from "next/navigation";
import headerStyles from "./styles/header.module.css";

export function LandingTemplateHeader() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <header className="nav_container">
      <a href="#" className="nav_brand w-nav-brand">
        <Logo className="nav_logo" />
      </a>
      <nav className="nav_menu w-nav-menu">
        <div className="nav-menu_inner flex gap-2">
          {Object.values(ServiceProviders).map((provider) => (
            <Link
              key={provider.config.appKey}
              href={`/wizard/${provider.config.appKey}`}
              aria-current="page"
              className={cn(
                "rounded-full px-4 py-1 text-foreground no-underline hover:bg-foreground/40",
                slug === provider.config.appKey && "!bg-foreground text-card",
              )}
              prefetch={false}
            >
              {provider.config.appLabel}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex flex-row gap-x-2">
        <Link href="/dashboard" prefetch={false}>
          <Button
            variant="ghost"
            className={cn(
              headerStyles["bg-brandmark-gradient"],
              "rounded-full text-[1rem] font-semibold text-foreground transition-opacity hover:opacity-80",
            )}
          >
            Dashboard
          </Button>
        </Link>
        <Link href="#contact-us" prefetch={false}>
          <Button
            variant="ghost"
            className="rounded-full text-[1rem] text-foreground transition-opacity"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  );
}
