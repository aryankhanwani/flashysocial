import { redirect, RedirectType } from "next/navigation";
import { QuickStartOrderStepView } from "./components/order-step-view";
import type { QuickStartStep } from "./entities";

export default function Page({
  searchParams,
}: {
  searchParams: { step?: QuickStartStep };
}) {
  if (!searchParams.step) {
    const sParams = new URLSearchParams(searchParams);
    sParams.set(
      "step",
      searchParams.step ?? ("services-selection" satisfies QuickStartStep),
    );

    return redirect("?" + sParams.toString(), RedirectType.replace);
  }

  return <QuickStartOrderStepView />;
}
