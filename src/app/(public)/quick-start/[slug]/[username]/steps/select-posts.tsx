/* eslint-disable @typescript-eslint/unbound-method */
"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { getThirdPartyAssetPermanentUrl } from "@/lib/utils";
import type { ServicesUnifiedApi } from "@/services/services";
import { CheckIcon } from "lucide-react";
import { QuickStartContinueButton } from "../components/continue-button";
import { useOrderContext } from "../components/order-provider";
import type { QuickStartStep } from "../entities";

export function QuickStartStepsSelectPosts() {
  const { navigate } = useSearchParamsNavigation<{ step: QuickStartStep }>();
  const { userPosts, selectedPosts, setSelectedPosts } = useOrderContext();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-2 mt-8 text-center text-xl font-semibold">
        Please select the articles you want to promote.
      </h1>
      
      {userPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {userPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                checked={selectedPosts.some((x) => x.id === post.id)}
                onSelectedChange={(selected) =>
                  setSelectedPosts((prev) => {
                    if (!selected) return prev.filter((x) => x.id !== post.id);
                    return [...prev, post];
                  })
                }
              />
            ))}
          </div>

          <div className="sticky bottom-0 z-50 mt-6 bg-white py-2">
            <QuickStartContinueButton
              className="bottom-2 z-50 mt-2"
              onClick={() =>
                navigate({
                  step: "billing",
                })
              }
              disabled={selectedPosts.length <= 0}
            />
          </div>
        </>
      ) : (
        <div className="rounded-lg bg-red-50 border border-red-200 p-6 text-center">
          <div className="mx-auto mb-4 h-12 w-12 text-red-400">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">
            No posts available
          </h3>
          <p className="text-red-700 mb-4">
            Your account is either private or you don't have any posts. 
            Services that require post selection (likes, comments, views) cannot be used.
          </p>
          <button 
            onClick={() => navigate({ step: "services-selection" })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Go Back to Services
          </button>
        </div>
      )}
    </div>
  );
}

interface PostCardProps {
  post: ServicesUnifiedApi.Post;
  checked?: boolean;
  onSelectedChange?(selected: boolean): void;
}
function PostCard({ post, checked, onSelectedChange }: PostCardProps) {
  return (
    <article className="primary-gradient group relative block aspect-[1/1.45] cursor-pointer overflow-clip rounded-xl p-1 has-[input:not(:checked)]:bg-white has-[input:not(:checked)]:bg-none">
      {post.mediaPreviewUrl && (
        <figure className="relative h-full overflow-clip rounded-lg border-none group-has-[input:checked]:opacity-70">
          <img
            src={getThirdPartyAssetPermanentUrl(post.mediaPreviewUrl)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />
        </figure>
      )}
      <div className="primary-gradient absolute left-3 top-3 grid h-6 w-6 place-items-center rounded-full border-2 border-white p-1 text-white opacity-0 transition-all group-has-[input:checked]:opacity-100">
        <CheckIcon className={"h-full w-full"} />
      </div>
      <input
        id={post.id}
        type="checkbox"
        className="absolute h-0 w-0 opacity-0"
        checked={checked}
        onChange={(e) => onSelectedChange?.(e.target.checked)}
      />
      <label
        htmlFor={post.id}
        className="absolute inset-0 cursor-pointer opacity-0"
      ></label>
    </article>
  );
}
