import { DarkMode } from "./components/DarkMode";
import { Directives } from "./components/Directives";
import { Modifiers } from "./components/Modifiers";
import { Plugins } from "./components/Plugins";
import { Responsiveness } from "./components/Responsiveness";
import { TheBasics } from "./components/TheBasics";
import { Theming } from "./components/Theming";
import { Tooling } from "./components/Tooling";
import { Utilities } from "./components/Utilities";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-950">
      {/* <TheBasics /> */}
      {/* <Modifiers /> */}
      {/* <DarkMode /> */}
      {/* <Responsiveness /> */}
      {/* <Utilities /> */}
      {/* <Theming /> */}
      {/* <Directives /> */}
      {/* <Plugins /> */}
      <Tooling />
    </main>
  );
}
