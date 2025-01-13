import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-20">
      <div>
        <ThemeToggle />
      </div>
      <div className="text-red-300 font-barlow">Welcome to this courses</div>
      <Button variant="link">Click here</Button>
    </div>
  );
}
