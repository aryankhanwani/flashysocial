import Image from "next/image";
import Link from "next/link";

export function QuickStartHelpMeSection() {
  return (
    <>
      <Image
        src="/assets/sprites/order-help-me.png"
        alt=""
        width={362}
        height={426}
        draggable={false}
        className="mx-auto mb-6 hidden max-h-96 w-auto max-w-full md:block"
        priority
      />
      <div>
        <h2 className="text-xl font-bold">Do you need help?</h2>
        <p className="mt-2 text-gray-600">
          If you have any questions for our team, please send us a message any
          time at{" "}
          <Link
            href="mailto:support@flashysocial.com"
            className="primary-gradient bg-clip-text font-semibold text-transparent underline-offset-4 hover:underline"
          >
            support@flashysocial.com
          </Link>
        </p>
      </div>
    </>
  );
}
