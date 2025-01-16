import ThemeToggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end items-center gap-x-5">
        <UserButton />
        <ThemeToggle />
      </div>
      <div className="font-barlow text-6xl text-red-300">Homepage</div>
    </div>
  );
}
