import Introcard from "./component/introcard";
import Intro from "./component/me";
import Skill from "./component/skills";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section */}
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Introcard />
        <section className="mt-96">
        <Intro />
        </section>
      </main>

      {/* Skill Section */}
      <section className="w-full flex justify-center">
        <Skill />
      </section>
    </div>
  );
}
