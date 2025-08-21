// types/aos.d.ts (or just aos.d.ts at the root)
declare module "aos" {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: "phone" | "tablet" | "mobile" | boolean | (() => boolean);
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
  }

  namespace AOS {
    function init(options?: AosOptions): void;
    function refresh(): void;
    function refreshHard(): void;
    function disable(): void;
  }

  export = AOS;
}