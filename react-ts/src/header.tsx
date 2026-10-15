import clsx from "clsx";
import type { ReactNode } from "react";

export function Link(props: {
  inline?: boolean;
  href: string;
  iconName: string;
  children?: ReactNode;
}) {
  const display = props.inline ? "inline" : "block";

  return (
    <a
      className={clsx(
        display,
        "text-nowrap text-sm pt-serif-regular hover:text-purple-200",
        "visited:text-green-100 visited:hover:text-purple-200",
        "focus-visible:outline focus-visible:outline-red-400 focus-visible:shadow",
        "focus-visible:shadow-white",
      )}
      href={props.href}
    >
      {props.children}
      <> </>
      <i className={clsx("bi", props.iconName, "px-2")}></i>
    </a>
  );
}

function Header() {
  return (
    <>
      <div
        className={clsx(
          "flex max-w-4xl min-w-fit justify-between from-(--purple-black) bg-linear-to-r to-(--purple-dark)",
          "shadow shadow-white/10 text-(--purple-white) rounded-2xl p-2 sm:px-4 hover:shadow-white/20",
        )}
      >
        <div className="hidden md:flex md:flex-col justify-center">
          <img
            src="https://raw.githubusercontent.com/zwill22/website/refs/heads/main/public/logo.svg"
            width="170"
            height="179"
            alt="Logo"
          />
        </div>

        <div className="flex flex-col md:text-nowrap justify-between text-left px-2 py-4">
          <h1 className="text-4xl zen-antique-soft-regular">
            Zack M Williams PhD
          </h1>
          <div className="py-2">
            <h2 className="text-sm sm:text-base md:text-xl pt-serif-regular-italic">
              Scientist
            </h2>
            <h2 className="text-sm sm:text-base md:text-xl pt-serif-regular-italic">
              Software Developer
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between text-right py-4">
          <Link href="mailto:z.m.will@icloud.com" iconName="bi-envelope-at">
            z.m.will@icloud.com
          </Link>

          <Link
            href="https://www.linkedin.com/in/zmwill"
            iconName="bi-linkedin"
          >
            linkedin.com/in/zmwill
          </Link>
          <Link href="https://www.github.com/zwill22" iconName="bi-github">
            github.com/zwill22
          </Link>
          <Link href="tel:+447900000000" iconName="bi-phone">
            +44 7900 000000
          </Link>
          <Link href="https://zmwill.uk" iconName="bi-globe">
            zmwill.uk
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
