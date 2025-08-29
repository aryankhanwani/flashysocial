import { cn } from "@/lib/utils";
import {
  CircleCheckBigIcon,
  type LucideProps,
  TriangleAlertIcon,
} from "lucide-react";
import type {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

declare namespace UserAccountStatus {
  export interface Props {
    status: "valid" | "invalid";
    icons?: Partial<
      Record<
        Props["status"],
        ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      >
    >;
    messages?: Partial<Record<Props["status"], ReactNode>>;
    size?: string;
    defaultOpen?: boolean;
  }
}

export function UserAccountStatus({
  icons,
  messages,
  status,
  size = "1.5rem",
  defaultOpen = false,
}: UserAccountStatus.Props) {
  const defaultIcons = {
    invalid: TriangleAlertIcon,
    valid: CircleCheckBigIcon,
  };

  const defaultMessages = {
    invalid: <p>Account does not match the required criterias.</p>,
    valid: <p>This account matches exactly the required criterias.</p>,
  };

  const Icon = icons?.[status] ?? defaultIcons[status];
  const message = messages?.[status] ?? defaultMessages[status];

  return (
    <Tooltip defaultOpen={defaultOpen}>
      <TooltipTrigger>
        <Icon
          size={size}
          className={cn(
            "rounded-lg",
            status === "invalid" && "bg-yellow-200 p-1 text-yellow-700",
            status === "valid" && "bg-green-200 p-1 text-green-700",
          )}
        />
      </TooltipTrigger>
      <TooltipContent
        className={cn(
          "border-current font-semibold",
          status === "invalid" && "bg-yellow-200 text-yellow-700",
          status === "valid" && "bg-green-200 text-green-700",
        )}
      >
        {message}
      </TooltipContent>
    </Tooltip>
  );
}
