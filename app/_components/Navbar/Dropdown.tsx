import Link from "next/link";
import { SubMenu } from "./Navbar";
import { usePathname } from "next/navigation";

const Dropdown = ({
  submenus,
  dropdown,
}: {
  submenus: SubMenu[];
  dropdown: boolean;
  
}) => {
  const pathname = usePathname();
  return (
    <ul
      onClick={(e) => e.stopPropagation()}
      className={`absolute z-10 top-10 left-0 w-[500px] right-0 bg-black/60 p-4 rounded ${
        dropdown ? "opacity-100" : "opacity-0"
      } transition duration-300 space-y-4 after:content-[''] after:absolute after:-top-2 after:rotate-45 after:left-28 after:w-4 after:h-4 after:bg-black/60`}
    >
  
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link
            href={submenu.url}
            className={`hover-underline-animation  ${
              pathname === submenu.url ? "active" : ""
            }`}
          >
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
