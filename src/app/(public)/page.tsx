import { redirect, RedirectType } from "next/navigation";

export default function Page() {
  //redirect(`/wizard/${Object.keys(ServiceProviders)[0]}`, RedirectType.replace);
  redirect("/instagram", RedirectType.replace);
}
