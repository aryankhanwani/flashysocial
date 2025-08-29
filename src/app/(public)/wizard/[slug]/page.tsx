import type { ServiceProviderKey } from "@/services";
import { LandingProviderSelector } from "./components/commons/landing-providers-selector";

export default function Page({
  params,
}: {
  params: { slug: ServiceProviderKey };
}) {
  return <LandingProviderSelector slug={params.slug} includeForm />;
}
