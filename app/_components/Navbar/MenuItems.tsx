import Link from "next/link";
import { Menu } from "./Navbar";
import Dropdown from "./Dropdown";
import { IoChevronDown } from "react-icons/io5";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MenuItems = ({ items }: { items: Menu }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLLIElement | null>(null);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = useCallback(() => setDropdown(true), []);
  const onMouseLeave = useCallback(() => setDropdown(false), []);
  useEffect(() => {
    const handler = (event: TouchEvent | MouseEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current?.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li
      className="inline"
      ref={ref}
      onMouseEnter={items.submenu ? onMouseEnter : undefined}
      onMouseLeave={items.submenu ? onMouseLeave : undefined}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            aria-haspopup="menu"
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-1 cursor-pointer outline-none border-none"
          >
            {items.title} <IoChevronDown />
          </button>

          
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
          
        </>
      ) : (
        <Link
          href={items.url}
          className={`hover-underline-animation  ${
            pathname === items.url ? "active" : ""
          }`}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
