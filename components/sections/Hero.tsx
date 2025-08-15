"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter(); // Initialize router

  return (
    <section className="container section-y" aria-labelledby="home-title">
      <h1
        id="home-title"
        className="font-display tracking-tight opacity-80 text-[2rem] sm:text-[3rem] lg:text-[3.9rem] font-medium leading-tight"
      >
        404 Boredom Not <br />
        Found.
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
        I&apos;m Majed, Software Developer at{" "}
        <span className="font-semibold">Wakeb</span>
        <br className="hidden sm:inline" />• Java Spring Boot, Vue.js, React.js.
      </p>

      <div className="mt-6 sm:mt-4 flex gap-2">
        <Button
          size="default"
          className="text-sm"
          onClick={() => router.push("/contact")}
        >
          Get in touch
        </Button>
        <Button
          size="default"
          variant="ghost"
          className="text-sm"
          onClick={() => router.push("/works")}
        >
          View all work
        </Button>
      </div>
    </section>
  );
}
