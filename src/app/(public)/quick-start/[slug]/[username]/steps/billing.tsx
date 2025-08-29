"use client";

import { Input } from "@/components/ui/input";
import yup from "@/lib/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useProceedCheckout } from "../../hooks/use-proceed-checkout";
import { QuickStartContinueButton } from "../components/continue-button";

const schema = yup.object({
  email: yup.string().required().default(""),
});

export function QuickStartStepsBilling() {
  const [proceedCheckout, isPending] = useProceedCheckout();

  const form = useForm({
    mode: "onChange",
    defaultValues: schema.getDefault(),
    resolver: yupResolver(schema),
  });

  return (
    <form id="checkout-form" onSubmit={form.handleSubmit(proceedCheckout)}>
      <div className="mt-6 flex flex-col gap-4">
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Enter your email address:</label>
              <Input id={field.name} {...field} />
            </div>
          )}
        />
      </div>
      <div className="sticky bottom-0 z-50 mt-6 bg-white py-2">
        <QuickStartContinueButton
          className="bottom-2 z-50 mt-2"
          type="submit"
          isLoading={isPending}
          form="checkout-form"
        />
      </div>
    </form>
  );
}
