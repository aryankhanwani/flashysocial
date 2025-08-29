import type { ReactNode } from "react";
import { LandingTemplateHeader } from "../header";

export function LandingTemplateSectionsHero({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="section_hero dark">
      <div className="hero_background">
        <div className="padding-global">
          <LandingTemplateHeader />

          <div className="spacer-xhuge" />
          <div
            id="w-node-ae792f4c-f742-0e46-6871-43504291a0eb-f3f3e09b"
            className="max-width-full"
          >
            <div
              id="w-node-ae792f4c-f742-0e46-6871-43504291a0ec-f3f3e09b"
              className="hero_content align-center text-align-center text-color-white"
            >
              <div className="margin-bottom margin-small">
                <div className="heading_pill">
                  <img
                    src="/landing-template/66df16ea37b2d5e8f3f3e0f9_Pill.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 79vw, 244.953125px"
                    srcSet="/landing-template/66df16ea37b2d5e8f3f3e0f9_Pill-p-500.png 500w, /landing-template/66df16ea37b2d5e8f3f3e0f9_Pill.png 735w"
                    alt=""
                  />
                </div>
              </div>
              <div className="margin-bottom margin-small">
                <h1 className="heading-style-h1 text-effect-gradient">
                  Empower Your Finances with Strategic Investments
                </h1>
              </div>
              <div className="max-width-medium">
                <p className="text-size-medium">
                  Maximize your business and investment profits with expert
                  guidance and innovative solutions.
                </p>
              </div>

              <div className="mb-6 mt-12 flex flex-col items-center justify-center rounded-2xl bg-foreground/10 p-4 text-center">
                {children}
              </div>

              <div className="margin-top margin-medium">
                <div className="button-group">
                  <a
                    href="https://relume.io"
                    target="_blank"
                    className="button w-inline-block"
                  >
                    <div>Getting started</div>
                  </a>
                  <div className="hero_rating-wrapper">
                    <img
                      src="/landing-template/66df16ea37b2d5e8f3f3e0cf_Frame%2014.png"
                      loading="lazy"
                      alt=""
                      className="rating_image"
                    />
                    <div className="spacer-xxsmall" />
                    <div className="text-size-small">
                      From 3,123+ Users (4.8 of 5)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-large" />
            <div className="hero_image-wrapper" />
          </div>
        </div>
      </div>
    </section>
  );
}
