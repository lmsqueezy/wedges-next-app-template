import { Alert } from "@lemonsqueezy/wedges";
import { CodeIcon } from "@iconicicons/react";
import { Counter } from "@/components/Counter";
import { LemonSqueezy } from "@/components/LemonSqueezy";

export default function Home() {
  return (
    <main className="flex wg-bg-primary-600 min-h-screen flex-col items-center justify-center">
      <div className="container px-10 space-y-10 max-w-4xl py-24">
        <h1 className="text-5xl font-medium md:text-6xl text-balance text-white text-center">
          Build faster with Wedges. An open-source collection of UI components for React.
        </h1>

        <p className="text-lg text-surface-600 leading-relaxed text-balance text-center">
          An ever-expanding, open-source React UI library built with the Wedges Design System, Radix
          primitives, and Tailwind CSS.
        </p>

        <div className="flex items-center justify-center gap-8">
          <Alert before={<CodeIcon />} title="Start by editing app/page.tsx" />
          <Counter />
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
