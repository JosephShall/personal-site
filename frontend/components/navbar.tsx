import Link from "next/link";
import { useRouter } from "next/router";

const MenuItems = [
  { text: "About", href: "/" },
  { text: "Resume", href: "/resume" }
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {MenuItems.map(({ text, href }) => {
          let isActive = router.asPath == href;
          return (
            <>
              <li className={`navbar-item}`}>
                <Link href={href} passHref legacyBehavior>
                  <button
                    className={`navbar-link ${isActive ? "active" : ""}`}
                    data-nav-link
                  >
                    {text}
                  </button>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
}
