import { getServiceProviderConfig } from "@/services";
import { LandingForm } from "../wizard/[slug]/components/commons/landing-form";

export default function Page() {
  const provider = getServiceProviderConfig("instagram", true)!;

  return <LandingForm provider={provider} />;
}
