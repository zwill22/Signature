import "../styles/index.css";

import Header from "./header";
import clsx from "clsx";
import { Footer } from "./footer";

function Content() {
  return (
    <div
      className={clsx(
        "flex-1 bg-(--purple-white)/90 rounded-xl max-w-3xl mx-auto my-6 p-6",
        "shadow shadow-green-100/50 w-full min-h-full",
      )}
    >
      Insert text here!
    </div>
  );
}

export default function Email() {
  return (
    <div
      className={clsx(
        "flex flex-col max-w-4xl mx-auto bg-(--purple-white)/10 min-h-screen px-2 py-4",
        "shadow shadow-white/50",
      )}
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
