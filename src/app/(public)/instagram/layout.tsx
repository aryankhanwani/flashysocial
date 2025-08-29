/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { InstagramGetStartedButton } from "./get-started-button";
import './instagram-styles.css';

export const metadata: Metadata = {
  title: "Flashy Social | Instagram Growth Service",
  description:
    "Instagram Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",
  icons: [
    {
      url: "/instagram-landing/images/favicon.png",
      rel: "shortcut icon",
      type: "image/x-icon",
    },
    {
      url: "/instagram-landing/images/webclip.png",
      type: "apple-touch-icon",
    },
  ],

  openGraph: {
    title: "Flashy Social | Instagram Growth Service",
    description:
      "Instagram Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",
    type: "website",
  },

  twitter: {
    title: "Flashy Social | Instagram Growth Service",
    description:
      "Instagram Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",
    card: "summary_large_image",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Fallback CSS link for production */}
      <link rel="stylesheet" href="/instagram-landing/css/template.css" />
      
      <div className="page-wrapper">
        <div
          data-animation="default"
          className="navbar_component w-nav"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="medium"
          data-w-id="cd3a0c45-b5d8-5543-aa87-165c08cddaca"
          role="banner"
          data-duration={400}
        >
          <div className="navbar_container">
            <a
              href="index.html"
              aria-current="page"
              className="navbar_logo-link w-nav-brand w--current"
            >
              <img
                src="/instagram-landing/images/Design-sans-titre-6.png"
                loading="lazy"
                sizes="(max-width: 479px) 59vw, 154px"
                width={154}
                alt=""
                srcSet="/instagram-landing/images/Design-sans-titre-6-p-500.png 500w, /instagram-landing/images/Design-sans-titre-6-p-800.png 800w, /instagram-landing/images/Design-sans-titre-6-p-1080.png 1080w, /instagram-landing/images/Design-sans-titre-6.png 1250w"
                className="navbar_logo"
              />
            </a>
            <nav
              role="navigation"
              className="navbar_menu is-page-height-tablet w-nav-menu"
            >
              <Link
                href="#How-it-works"
                prefetch={false}
                className="navbar_link w-nav-link"
              >
                How it works
              </Link>
              <Link
                href="#faq"
                prefetch={false}
                className="navbar_link w-nav-link"
              >
                FAQ
              </Link>
              <div className="navbar_menu-buttons">
                <Link
                  href="/dashboard"
                  prefetch={false}
                  className="button is-nav w-button"
                >
                  Dashboard
                </Link>
              </div>
            </nav>
            <Link
              href="/dashboard"
              prefetch={false}
              className="button is-nav w-button !block !py-2 lg:!hidden"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="global-styles w-embed">
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n/* Make text look crisper and more legible in all browsers */\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n/* Focus state style for keyboard navigation for the focusable elements */\n*[tabindex]:focus-visible,\n  input[type="file"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n/* Get rid of top margin on first element in any rich text element */\n.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* Prevent all click and hover interaction with an element */\n.pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.pointer-events-on {\n  pointer-events: auto;\n}\n/* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.div-square::after {\n\tcontent: "";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n/* Make sure containers never lose their center alignment */\n.container-medium,.container-small, .container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example "All Links" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Apply "..." after 3 lines of text */\n.text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n/* Apply "..." after 2 lines of text */\n.text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n/* Adds inline flex display */\n.display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .hide, .hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .hide-mobile{\n      display: none !important;\n    }\n}\n.margin-0 {\n  margin: 0rem !important;\n}\n.padding-0 {\n  padding: 0rem !important;\n}\n.spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n',
            }}
          />
        </div>
        <main className="main-wrapper">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-small">
                <div className="home-header_component dark" id="hero">
                  <div
                    id="w-node-a0026e05-0ffc-8c23-d4d3-2e044679e1fc-604c3e30"
                    className="home-header_content-wrapper"
                  >
                    <h1 className="heading">
                      <strong>We help your</strong>
                      <strong> </strong>
                      <strong className="bold-text valo">Instagram </strong>
                      <strong>Explode</strong>
                    </h1>
                    <div className="padding-bottom padding-medium" />
                    <div className="max-width-medium">
                      <p className="text-size-medium text-weight-bold">
                        Experience unmatched growth with our premier Instagram
                        acceleration service.
                      </p>
                    </div>

                    {children}

                    <div className="padding-bottom padding-custom1 mt-4" />
                    <div className="home-header_review-wrapper text-center md:text-start">
                      <div className="home-header_review-wrapper-left">
                        <div>Excellent</div>
                        <div
                          id="w-node-a0026e05-0ffc-8c23-d4d3-2e044679e213-604c3e30"
                          className="home-header_review-logo-wrapper"
                        >
                          <img
                            src="/instagram-landing/images/stars-4.5.svg"
                            loading="lazy"
                            alt="TrustPilot Rating"
                            className="home-header_review-logo-wrapper"
                          />
                        </div>
                        <div
                          id="w-node-a0026e05-0ffc-8c23-d4d3-2e044679e215-604c3e30"
                          className="home-header_review-logo-wrapper"
                        >
                          <img
                            src="/instagram-landing/images/logo-white.svg"
                            loading="lazy"
                            alt="TrustPilot Logo"
                            className="home-header_review-logo-wrapper"
                          />
                        </div>
                      </div>
                      <div className="home-header_divider" />
                      <div>Join our community of 4204+ &nbsp;</div>
                    </div>
                  </div>
                  <div
                    id="w-node-a0026e05-0ffc-8c23-d4d3-2e044679e21a-604c3e30"
                    className="home-hero_image-wrapper relative isolate"
                  >
                    <img
                      src="/instagram-landing/images/Group-222.png"
                      loading="lazy"
                      width={499}
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 78vw, (max-width: 991px) 499px, 38vw"
                      alt="A woman and man chatting"
                      srcSet="/instagram-landing/images/Group-222-p-500.png 500w, /instagram-landing/images/Group-222-p-800.png 800w, /instagram-landing/images/Group-222.png 998w"
                      className="home-header_main-image"
                    />
                    <Image
                      src="/instagram-landing/images/Design-sans-titre-7-p-500.png"
                      loading="lazy"
                      width={256}
                      height={128}
                      alt=""
                      className="absolute right-0 max-w-[12rem] rotate-6"
                      quality={100}
                    />
                    <Image
                      src="/instagram-landing/images/Design-sans-titre-8-p-500.png"
                      loading="lazy"
                      width={222}
                      height={236}
                      alt=""
                      className="absolute bottom-0 left-0 max-w-[12rem] translate-y-1/4 rotate-6"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header id="Home" className="section_home-header">
            <div>
              <div className="container-large">
                <div className="padding-top padding-small" />
              </div>
            </div>
          </header>
          <section
            data-w-id="c4effdc1-9cb8-4513-9260-694d74611166"
            className="section_circular"
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-custom">
                  <div className="circular_component">
                    <div
                      id="w-node-_29529c7a-9242-0642-b2fd-f95c48de79bf-604c3e30"
                      className="circular_content-left"
                    >
                      <div className="circular_image-wrapper">
                        <img
                          src="/instagram-landing/images/Design-sans-titre-2.jpg"
                          loading="lazy"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 44vw"
                          width={551}
                          alt=""
                          srcSet="/instagram-landing/images/Design-sans-titre-2-p-500.jpg 500w, /instagram-landing/images/Design-sans-titre-2-p-800.jpg 800w, /instagram-landing/images/Design-sans-titre-2.jpg 1080w"
                          className="circular_image"
                        />
                      </div>
                    </div>

                    <div
                      id="w-node-_29529c7a-9242-0642-b2fd-f95c48de79b3-604c3e30"
                      className="circular_content-right"
                    >
                      <div className="circular_small-headline">
                        <div className="text-weight-black text-color-purple">
                          Our process is quick and easy!
                        </div>
                      </div>
                      <div className="padding-bottom padding-small" />
                      <h2>
                        <strong>
                          100% Money
                          <br />
                          Back{" "}
                        </strong>
                        Guarantee
                      </h2>
                      <div className="padding-bottom padding-custom1" />
                      <p className="text-size-custom text-weight-medium">
                        We understand that at times, things may not work out as
                        intended. If for any reason, we are unable to deliver
                        the promised results, rest assured that we will provide
                        a refund for any undelivered services. This is our
                        performance guarantee, and we take it seriously.
                      </p>
                      <div className="padding-bottom padding-custom1" />
                      <div className="circular_button-wrapper">
                        <a href="#" className="button w-button">
                          Try FlashySocial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="How-it-works" className="section_how-it-wroks">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-small">
                  <div className="w-layout-grid how-it-works_component">
                    <div className="how-it-works_content-wrapper">
                      <div className="padding-bottom padding-small" />
                      <h2>
                        <strong>
                          Track orders in <br />
                          your
                        </strong>{" "}
                        <strong className="bold-text-2">Dashboard</strong>
                      </h2>
                      <div className="padding-bottom padding-custom1" />
                      <p className="text-size-custom">
                        The easiest way to stay on track of your orders is to
                        follow along in your FlashySocial dashboard. You can
                        clearly see which orders have started to deliver or
                        which ones are already completed.
                      </p>
                    </div>
                    <div
                      id="w-node-_6bbaa4ac-5287-d315-f039-06c44a6aa9ae-604c3e30"
                      className="how-it-works_image-wrapper"
                    >
                      <img
                        src="/instagram-landing/images/Mockup-Shary-Template-1.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 336px, 100vw"
                        width={407}
                        alt="Shary App Mockup"
                        srcSet="/instagram-landing/images/Mockup-Shary-Template-1-p-500.png 500w, /instagram-landing/images/Mockup-Shary-Template-1-p-800.png 800w, /instagram-landing/images/Mockup-Shary-Template-1.png 814w"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-w-id="8123424e-745e-261a-f137-9b68d94ff12e"
            className="section_features"
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-custom">
                  <div className="features_heading-wrapper">
                    <h2>
                      <strong>
                        Here&apos;s How <br />‍
                      </strong>
                      <strong className="bold-text-3">FlashySocial </strong>
                      <strong>Works</strong>
                    </h2>
                  </div>
                  <div className="features_component">
                    <div
                      data-w-id="9d9b88ac-220b-629c-05f5-007d640183cb"
                      className="features_item"
                    >
                      <img
                        src="/instagram-landing/images/item1.png"
                        loading="lazy"
                        width={80}
                        id="w-node-_69accd72-e6bf-77e6-3dc9-f7835267c9f7-604c3e30"
                        alt=""
                        className="vectors-wrapper-8"
                      />
                      <div className="features_item-content-bottom">
                        <div className="text-size-medium text-weight-bold">
                          <strong className="bold-text-6 s">
                            1. Choose Account
                          </strong>
                        </div>
                        <div className="text-weight-medium text-size-custom">
                          Select the Instagram account that you want to enhance.
                          Whether it&apos;s your personal profile or someone
                          else&apos;s, our service can help you amplify your
                          followers and elevate your influence.
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_9d9b88ac-220b-629c-05f5-007d640183c4-604c3e30"
                      data-w-id="9d9b88ac-220b-629c-05f5-007d640183c4"
                      className="features_item"
                    >
                      <img
                        src="/instagram-landing/images/item2.png"
                        loading="lazy"
                        width={87}
                        id="w-node-d7fe31b8-e747-9659-cdc1-4c771a1d49ac-604c3e30"
                        alt=""
                        className="vectors-wrapper-8"
                      />
                      <div className="features_item-content-bottom">
                        <div className="text-size-medium text-weight-bold s">
                          <strong className="s">2. Select Package</strong>
                          <br />
                        </div>
                        <div className="text-weight-medium text-size-custom">
                          Customize your campaign and select the number of
                          followers, likes, comments, and saves. You can choose
                          which posts or stories you want to promote, giving you
                          full control over your Instagram growth strategy.
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_9d9b88ac-220b-629c-05f5-007d640183d2-604c3e30"
                      data-w-id="9d9b88ac-220b-629c-05f5-007d640183d2"
                      className="features_item"
                    >
                      <img
                        src="/instagram-landing/images/item3.png"
                        loading="lazy"
                        width={93}
                        alt=""
                        className="vectors-wrapper-8"
                      />
                      <div className="features_item-content-bottom">
                        <div className="text-size-medium text-weight-bold">
                          <strong className="s">3. Get Results</strong>
                        </div>
                        <div className="text-weight-medium text-size-custom">
                          We start to work on your campaign within 24-48 hours
                          and provide transparent reporting and dedicated
                          support throughout the process. For any questions,
                          simply reach out to us.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-w-id="cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c97f"
            className="section_testimonials"
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-custom">
                  <div className="testimonials_heading-wrapper">
                    <h2>
                      <strong>Join</strong>{" "}
                      <strong className="bold-text-4">4,205+</strong>{" "}
                      <strong>Happy Creators &amp; Brands</strong>
                    </h2>
                  </div>
                  <div className="w-layout-grid testimonials_component">
                    <div className="testimonial_item">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;Using FlashySocial for 3 months now and after trying
                        many services in the market, I can confidently say that
                        they are one of the most reliable ones out there and
                        always deliver&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Jane Cooper</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c98f-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                    <div className="testimonial_item">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;Sooo gladd I gave them a try after thinking about it
                        for a while. Massive amounts of streams in past two
                        months from their site.&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Jenny Wilson</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c9ad-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                    <div className="testimonial_item pink top">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;Delivered everything exactly as I ordered. No
                        complaints and customer service was there when I had
                        questions. That&apos;s more than I got from other social
                        media promotion sites I tried&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Wade Warren</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c9c1-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                    <div className="testimonial_item">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;Whatever I bought from other providers just kept on
                        dropping. But since I am with them, all is stable and
                        good. love the service too&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Robert Fox</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c9a3-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                    <div className="testimonial_item hide-mobile-landscape">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;Wasnt sure it would work and started with the smallest
                        package. Did exactly what they say and since then my
                        orders keep getting bigger and bigger&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Leslie Alexander</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c999-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                    <div className="testimonial_item hide-mobile-landscape">
                      <div className="text-size-custom text-weight-medium s">
                        &ldquo;If you&apos;re looking for a strong promotion strategy and
                        awesome people to work with, go no further than
                        FlashySocial.&rdquo;
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="stars-icon w-embed">
                        <svg
                          width={116}
                          height={20}
                          viewBox="0 0 116 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_144_1353)">
                            <path
                              d="M9.07088 1.4893C9.41462 0.672838 10.5854 0.672839 10.9291 1.4893L12.9579 6.30819C13.1029 6.65239 13.4306 6.88756 13.8067 6.91735L19.0727 7.33443C19.9649 7.4051 20.3267 8.50509 19.6469 9.08035L15.6348 12.4756C15.3482 12.7182 15.223 13.0987 15.3106 13.4613L16.5363 18.538C16.744 19.3981 15.7969 20.078 15.033 19.6171L10.5245 16.8965C10.2025 16.7022 9.7975 16.7022 9.47548 16.8965L4.96699 19.6171C4.20311 20.078 3.25596 19.3981 3.46363 18.538L4.68942 13.4613C4.77698 13.0987 4.65182 12.7182 4.36526 12.4756L0.353062 9.08035C-0.326718 8.50509 0.0350679 7.4051 0.927291 7.33443L6.19336 6.91735C6.5695 6.88756 6.89716 6.65239 7.04207 6.30819L9.07088 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.0709 1.4893C33.4146 0.672838 34.5854 0.672839 34.9291 1.4893L36.9579 6.30819C37.1029 6.65239 37.4306 6.88756 37.8067 6.91735L43.0727 7.33443C43.9649 7.4051 44.3267 8.50509 43.6469 9.08035L39.6348 12.4756C39.3482 12.7182 39.223 13.0987 39.3106 13.4613L40.5363 18.538C40.744 19.3981 39.7969 20.078 39.033 19.6171L34.5245 16.8965C34.2025 16.7022 33.7975 16.7022 33.4755 16.8965L28.967 19.6171C28.2031 20.078 27.256 19.3981 27.4636 18.538L28.6894 13.4613C28.777 13.0987 28.6518 12.7182 28.3653 12.4756L24.3531 9.08035C23.6733 8.50509 24.0351 7.4051 24.9273 7.33443L30.1934 6.91735C30.5695 6.88756 30.8972 6.65239 31.0421 6.30819L33.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M57.0709 1.4893C57.4146 0.672838 58.5854 0.672839 58.9291 1.4893L60.9579 6.30819C61.1029 6.65239 61.4306 6.88756 61.8067 6.91735L67.0727 7.33443C67.9649 7.4051 68.3267 8.50509 67.6469 9.08035L63.6348 12.4756C63.3482 12.7182 63.223 13.0987 63.3106 13.4613L64.5363 18.538C64.744 19.3981 63.7969 20.078 63.033 19.6171L58.5245 16.8965C58.2025 16.7022 57.7975 16.7022 57.4755 16.8965L52.967 19.6171C52.2031 20.078 51.256 19.3981 51.4636 18.538L52.6894 13.4613C52.777 13.0987 52.6518 12.7182 52.3653 12.4756L48.3531 9.08035C47.6733 8.50509 48.0351 7.4051 48.9273 7.33443L54.1934 6.91735C54.5695 6.88756 54.8972 6.65239 55.0421 6.30819L57.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M81.0709 1.4893C81.4146 0.672838 82.5854 0.672839 82.9291 1.4893L84.9579 6.30819C85.1029 6.65239 85.4306 6.88756 85.8067 6.91735L91.0727 7.33443C91.9649 7.4051 92.3267 8.50509 91.6469 9.08035L87.6348 12.4756C87.3482 12.7182 87.223 13.0987 87.3106 13.4613L88.5363 18.538C88.744 19.3981 87.7969 20.078 87.033 19.6171L82.5245 16.8965C82.2025 16.7022 81.7975 16.7022 81.4755 16.8965L76.967 19.6171C76.2031 20.078 75.256 19.3981 75.4636 18.538L76.6894 13.4613C76.777 13.0987 76.6518 12.7182 76.3653 12.4756L72.3531 9.08035C71.6733 8.50509 72.0351 7.4051 72.9273 7.33443L78.1934 6.91735C78.5695 6.88756 78.8972 6.65239 79.0421 6.30819L81.0709 1.4893Z"
                              fill="currentColor"
                            />
                            <path
                              d="M105.071 1.4893C105.415 0.672838 106.585 0.672839 106.929 1.4893L108.958 6.30819C109.103 6.65239 109.431 6.88756 109.807 6.91735L115.073 7.33443C115.965 7.4051 116.327 8.50509 115.647 9.08035L111.635 12.4756C111.348 12.7182 111.223 13.0987 111.311 13.4613L112.536 18.538C112.744 19.3981 111.797 20.078 111.033 19.6171L106.525 16.8965C106.202 16.7022 105.797 16.7022 105.475 16.8965L100.967 19.6171C100.203 20.078 99.256 19.3981 99.4636 18.538L100.689 13.4613C100.777 13.0987 100.652 12.7182 100.365 12.4756L96.3531 9.08035C95.6733 8.50509 96.0351 7.4051 96.9273 7.33443L102.193 6.91735C102.569 6.88756 102.897 6.65239 103.042 6.30819L105.071 1.4893Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_144_1353">
                              <rect
                                width={116}
                                height="18.8889"
                                fill="currentColor"
                                transform="translate(0 0.876953)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="padding-bottom padding-medium" />
                      <div className="div-block-13">
                        <p className="text-weight-bold">Floyd Miles</p>
                        <div
                          id="w-node-cb7a4b6c-b1e0-9d3f-f24b-7b12fab5c9b7-604c3e30"
                          className="div-block-12"
                        />
                        <p className="text-weight-medium">Trustpilot Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            id="faq"
            data-w-id="08e1edab-b194-5b5f-c3f8-b1dab6beb71d"
            className="section_faq"
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="faq_component">
                    <div className="faq_content-top">
                      <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq_questions-wrapper">
                      <div className="faq_accordion is-first">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <div>01. Why should I buy your services?</div>
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="faq_answer-text">
                            The number of fans and likes and other metrics of
                            your channel is one of the most common indicators of
                            success and health of your channel. If you are going
                            to boost your profile, you&apos;ve got to do everything
                            that you can to boost your numbers, because that is
                            what your viewers will see first. s, as these are
                            what you see first. This means producing the best
                            content, following a sophisticated strategy, and
                            even purchasing fans at the right time. That way you
                            can ensure that people not only see you have great
                            content but also notice that the social proof
                            (likes, followers, engagement etc.) confirms the
                            popularity of your account. Here at FlashySocial, we
                            have years of experience offering social media
                            services to our customers. We only work with
                            high-quality accounts that help to elevate the
                            profile of your account and we aim to always offer
                            these services at the best price possible. Last but
                            not least, we always keep your accounts 100%
                            confidential so no one will know that you have been
                            using our services to boost your profile.
                          </p>
                        </div>
                      </div>
                      <div className="faq_accordion">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <div>02. What happens after I purchase?</div>
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="faq_answer-text">
                            Orders can be made from as little as $3.99. However
                            the final price will vary based on how many
                            subscribers etc. you will order.
                          </p>
                        </div>
                      </div>
                      <div className="faq_accordion">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <div>04. How do I buy your service?</div>
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="faq_answer-text">
                            To get started, please insert the link of the
                            Instagram channel you want to promote at the top of
                            this page. Afterwards you will be able to select how
                            many subscribes, views, likes, saves and comments
                            you are looking to purchase.
                          </p>
                        </div>
                      </div>
                      <div className="faq_accordion last">
                        <div className="faq_question">
                          <div className="faq_question-text">
                            <div>05. How long do I have to wait?</div>
                          </div>
                          <div className="faq_icon-wrapper">
                            <div className="faq_icon w-embed">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ic"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="faq_answer-text">
                            Once you place your order, we will start the order
                            within 24 hours. Depending on the size of your order
                            the delivery time may differ. Larger orders may take
                            several days and small orders can often be finished
                            within 1-2 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="cta" className="section_home-cta">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="cta_component">
                    <div className="cta_content-left">
                      <h2>
                        <strong className="bold-text-5">Growth </strong>
                        <strong>for Everyone</strong>
                      </h2>
                      <div className="text-size-custom text-weight-medium s">
                                                    It doesn&apos;t matter whether you are a musician, a business
                        or simply run a small cooking channel. <br />
                        <br />
                        Our <strong>universal methods</strong> work for any
                        channel.
                      </div>
                      <div className="cta_buttons-wrapper">
                        <a
                          href="#"
                          target="_blank"
                          className="cta_button-wrapper is-first w-inline-block"
                        />
                        <a
                          href="#"
                          target="_blank"
                          className="cta_button-wrapper w-inline-block"
                        />
                      </div>
                    </div>
                    <div className="cta_content-right hide-mobile-landscape">
                      <div className="cta_image-wrapper">
                        <img
                          src="/instagram-landing/images/Design-sans-titre-14.png"
                          loading="lazy"
                          width={357}
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 31vw, 100vw"
                          alt=""
                          srcSet="/instagram-landing/images/Design-sans-titre-14-p-500.png 500w, /instagram-landing/images/Design-sans-titre-14.png 714w"
                          className="cta_image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer" className="footer_component">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-footer">
                <div className="padding-bottom padding-0" />
                <div className="footer_content-top">
                  <div className="footer_content-left">
                    <a
                      href="index.html"
                      aria-current="page"
                      className="footer_logo-link w-inline-block w--current"
                    >
                      <img
                        src="/instagram-landing/images/Design-sans-titre-6.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 80vw, 193px"
                        width={193}
                        alt=""
                        srcSet="/instagram-landing/images/Design-sans-titre-6-p-500.png 500w, /instagram-landing/images/Design-sans-titre-6-p-800.png 800w, /instagram-landing/images/Design-sans-titre-6-p-1080.png 1080w, /instagram-landing/images/Design-sans-titre-6.png 1250w"
                        className="footer_logo"
                      />
                    </a>
                  </div>
                  <div className="footer_content-right">
                    <div className="footer_link-col is-first">
                      <div className="text-weight-black text-color-purple">
                        Menu
                      </div>
                      <div className="footer_links-wrapper">
                        <a
                          href="#How-it-works"
                          id="w-node-_0b1baa9a-8b0d-0347-d945-477193c939b5-604c3e30"
                          className="footer_link"
                        >
                          How it works
                        </a>
                        <a href="#" target="_blank" className="footer_link">
                          Blog
                        </a>
                        <a href="#faq" className="footer_link">
                          FAQ
                        </a>
                      </div>
                    </div>
                    <div className="footer_link-col">
                      <div className="text-weight-black text-color-purple">
                        Legal
                      </div>
                      <div className="footer_links-wrapper">
                        <a href="#" target="_blank" className="footer_link">
                          Privacy Policy
                        </a>
                        <a href="#" target="_blank" className="footer_link">
                          Terms of Use
                        </a>
                        <a href="#" target="_blank" className="footer_link">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <InstagramGetStartedButton />
    </>
  );
}
