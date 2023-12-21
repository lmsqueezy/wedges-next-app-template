"use client";

import * as React from "react";
import { Button } from "@lemonsqueezy/wedges";

export function Counter() {
  const [count, setCount] = React.useState(1);

  return (
    <div className="flex items-center space-x-4">
      <Button
        className="min-w-20"
        variant="secondary"
        shape="pill"
        onClick={() => setCount((prev) => prev + 1)}
      >
        🍋 {count}
      </Button>
    </div>
  );
}
