"use client";

import * as React from "react";
import { PRODUCT_CATEGORIES } from "~/config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "~/hooks/use-on-click-outside";
import { ESCAPE_KEY, KEYDOWN_EVENT } from "~/lib/constants";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === ESCAPE_KEY) {
        setActiveIndex(null);
      }
    };

    document.addEventListener(KEYDOWN_EVENT, handler);

    return () => {
      document.removeEventListener(KEYDOWN_EVENT, handler);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = React.useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex h-full gap-4" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
