import { LemonSqueezy } from "@/components/LemonSqueezy";
import { ArrowUpRightIcon } from "@iconicicons/react";
import { Button, Tooltip } from "@lemonsqueezy/wedges";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex wg-bg-[rgb(84_35_231)] min-h-screen flex-col items-center justify-center">
      <div className="container px-10 space-y-10 max-w-4xl py-24">
        <h1 className="text-5xl font-medium md:text-6xl text-balance text-white text-center">
          Build faster with Wedges. An open-source collection of UI components for React.
        </h1>

        <p className="text-lg text-surface-700 leading-relaxed text-balance text-center">
          An ever-expanding, open-source React UI library built with the Wedges Design System, Radix
          primitives, and Tailwind CSS.
        </p>

        <div className="text-center">
          <Tooltip content="Stay zesty 🍋" color="secondary">
            <Button variant="secondary" shape="pill" className="px-6">
              Start by editing <code className="text-primary-700">app/page.tsx</code>
            </Button>
          </Tooltip>
        </div>

        <div className="flex justify-center gap-8">
          <Button asChild variant="link" before={<ArrowUpRightIcon />}>
            <Link href="https://www.lemonsqueezy.com/wedges/docs" target="_blank">
              Documentation
            </Link>
          </Button>

          <Button asChild variant="link" before={<ArrowUpRightIcon />}>
            <Link href="https://www.lemonsqueezy.com/wedges/figma" target="_blank">
              Figma
            </Link>
          </Button>
        </div>

        <div className="flex text-sm text-surface-600 items-center justify-center pt-16 gap-3">
          <span>Brought to you by </span>
          <a
            className="flex items-center gap-2"
            href="https://www.lemonsqueezy.com"
            target="_blank"
          >
            <LemonSqueezy />
          </a>
        </div>
      </div>
    </main>
  );
}
