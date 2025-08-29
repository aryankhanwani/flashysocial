import { getServiceProviderConfig } from "@/services";
import { LandingForm } from "../wizard/[slug]/components/commons/landing-form";

// Force dynamic rendering to avoid build issues
export const dynamic = 'force-dynamic';

export default function Page() {
  const provider = getServiceProviderConfig("instagram", true)!;

  return <LandingForm provider={provider} />;
}
