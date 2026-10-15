import { Link } from "./header";

export function Footer() {
  return (
    <>
      <div className="flex justify-end mx-auto">
        <p className="text-(--purple-white)/30 p-2 text-center text-sm">
          <Link
            inline
            href="https://www.linkedin.com/in/zmwill"
            iconName="bi-linkedin"
          />
          <Link
            inline
            href="https://www.github.com/zwill22"
            iconName="bi-github"
          />
          <Link inline href="https://zmwill.uk" iconName="bi-globe" />
        </p>
        <p className="text-(--purple-white)/10 p-2 text-center text-sm">|</p>
        <p className="text-(--purple-white)/30 p-2 text-center text-sm">
          <i className="bi bi-c-circle" /> {new Date().getFullYear()} Z M
          Williams
        </p>
      </div>
    </>
  );
}
