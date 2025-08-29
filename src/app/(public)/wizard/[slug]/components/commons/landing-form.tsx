"use client";

import type { SearchUsernameAction } from "@/app/actions/search-username/action";
import searchUsername from "@/app/actions/search-username/action";
import { ServiceLogo } from "@/components/commons/service-logo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAccountStatus } from "@/components/user-account-status";
import { cn, getThirdPartyAssetPermanentUrl } from "@/lib/utils";
import yup from "@/lib/yup";
import type { ServiceProvider, ServiceProviderKey } from "@/services";
import type { ServicesUnifiedApi } from "@/services/services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object({
  username: yup.string().min(3).required().default(""),
});

declare namespace LandingForm {
  export interface Props extends ComponentPropsWithoutRef<"form"> {
    provider: ServiceProvider.Config;
  }
}

export function LandingForm({ provider, ...props }: LandingForm.Props) {
  const router = useRouter();

  const [selectedUser, setSelectedUser] = useState<ServicesUnifiedApi.User>();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [state, setState] = useState<SearchUsernameAction.Response>();
  const form = useForm({
    mode: "onChange",
    defaultValues: schema.getDefault(),
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (args: {
      service: ServiceProviderKey;
      options: SearchUsernameAction.Options;
    }) => searchUsername(args.service, args.options),
  });

  const handleSearch = useCallback(
    ({ username }: yup.InferType<typeof schema>) => {
      mutate(
        {
          service: provider.appKey as ServiceProviderKey,
          options: {
            username,
          },
        },
        {
          onSettled(res, err) {
            if (err) {
              setState({
                status: "error",
                message: err.message,
              });
              return;
            }

            setState(res);
          },
        },
      );
    },
    [mutate, provider.appKey],
  );

  const handleStartOrder = useCallback(
    (user: ServicesUnifiedApi.User) => () => {
      setSelectedUser(user);
      setIsRedirecting(true);
      
      router.push(`/quick-start/${provider.appKey}/${user.username}`);
    },
    [provider.appKey, router],
  );

  useEffect(() => {
    return () => {
      setSelectedUser(undefined);
      setIsRedirecting(false);
    };
  }, []);

  return (
    <form
      method="post"
      onSubmit={form.handleSubmit(handleSearch)}
      className="mt-10 w-full"
      {...props}
    >
      <Controller
        control={form.control}
        name="username"
        render={({ field }) => (
          <>
            <Image
              src="/assets/arrow-input-mobile.png"
              alt="input indicators"
              width={370}
              height={36}
              className="mx-auto mb-6 block max-w-full animate-bounce text-transparent md:hidden md:animate-none"
            />
            <div className="flex w-full flex-row items-center gap-4 overflow-hidden rounded-full bg-white p-1 pl-4">
              <label htmlFor={field.name} className="!m-0 shrink-0">
                <ServiceLogo
                  className="h-[1rem] w-[1rem] md:h-[1.5rem] md:w-[1.5rem]"
                  active
                  serviceName={provider.appKey as ServiceProviderKey}
                />
              </label>
              <input
                id={field.name}
                placeholder={`Insert your ${provider.appLabel} username to start`}
                {...field}
                className={cn(
                  "flex-1 scroll-my-40 bg-transparent p-2 pl-0 font-[inherit] text-card outline-none md:text-lg",
                )}
              />
              <Button
                type="submit"
                resetClassName
                className="button w-button !hidden shrink-0 !translate-y-0 md:!inline-flex"
                isLoading={isPending}
                disabled={!provider}
              >
                Get Started
              </Button>
              <Button
                type="submit"
                resetClassName
                className="button !inline-flex shrink-0 !translate-y-0 !px-3 shadow-sm md:!hidden"
                isLoading={isPending}
                disabled={!provider}
                size="icon"
              >
                <SearchIcon size="1em" />
              </Button>
            </div>
          </>
        )}
      />

      {state && (
        <>
          <Drawer
            open={state.status === "success"}
            onOpenChange={(open) => {
              if (open) return;
              setState(undefined);
            }}
          >
            <DrawerContent className="mx-auto max-w-screen-md px-4">
              <DrawerHeader>
                <DrawerTitle>
                  Here are a few results you might like.
                </DrawerTitle>
                <DrawerDescription>
                  Please select your account from the list bellow.
                </DrawerDescription>
              </DrawerHeader>

              <div className="px-2">
                {state.status === "success" && (
                  <ScrollArea className="h-screen max-h-[50dvh]">
                    <ul className="flex flex-col gap-4 pl-0 pr-4">
                      {state.users.map((user) => (
                        <li
                          key={user.id}
                          className="flex flex-row items-center gap-4"
                        >
                          <img
                            src={getThirdPartyAssetPermanentUrl(
                              user.profilePicUrl,
                            )}
                            alt={`${user.username} profile picture`}
                            className="h-8 w-8 rounded-full"
                          />
                          <span className="flex-1">{user.username}</span>
                                                      <Button
                              size="sm"
                              className="rounded-lg border-2 border-solid bg-transparent font-semibold text-foreground"
                              variant="ghost"
                              onClick={handleStartOrder(user)}
                              isLoading={selectedUser?.id === user.id || isRedirecting}
                                                          disabled={
                              Boolean(selectedUser && selectedUser.id !== user.id) || isRedirecting
                            }
                            >
                              {isRedirecting && selectedUser?.id === user.id ? "Loading..." : "Select"}
                            </Button>
                          {!user.selectable && (
                            <UserAccountStatus
                              status="invalid"
                              messages={{
                                invalid: (
                                  <>
                                    <p>Private accounts cannot be operated.</p>
                                    <p>
                                      You may proceed for now, but please
                                      remember to update your account status at
                                      a later time.
                                    </p>
                                  </>
                                ),
                              }}
                            />
                          )}
                          {user.selectable && (
                            <UserAccountStatus status="valid" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                )}
              </div>

              <DrawerFooter className="mt-4 border-t">
                <DrawerClose asChild>
                  <Button
                    variant="link"
                    className="font-semibold text-foreground"
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </form>
  );
}
