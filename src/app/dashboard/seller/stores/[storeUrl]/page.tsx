"use client";

import { useToast } from "@/hooks/use-toast";
export default function SellerStorePage() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Hello, world!",
      description: "This is a toast message.",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Show toast</button>
    </div>
  );
}
