import Demo from "@/components/demo";
import Intro from "@/components/intro";
import LightDarkButtonTesting from "@/components/light-dark-button-testing";
import LightDarkButtonTesting2 from "@/components/light-dark-button-testing2";

export default function Home() {
  return (
    <div className="relative w-full">
      <main className="flex flex-col items-center px-6 sm:px-[100px]">
        {/* <Intro /> */}
        <Demo />
      </main>

      <LightDarkButtonTesting />
      <LightDarkButtonTesting2 />
    </div>
  );
}
