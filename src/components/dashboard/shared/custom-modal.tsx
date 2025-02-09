"use client";

// Provider
import { useModal } from "@/providers/modal-provider";

// UI components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  maxWidth?: string;
};

const CustomModal = ({
  children,
  defaultOpen,
  subheading,
  heading,
  maxWidth,
}: Props) => {
  const { isOpen, setClose } = useModal();
  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent
        className={cn(
          "overflow-y-scroll scrollbar-thin md:max-h-[700px] md:h-fit h-screen bg-card",
          maxWidth
        )}
      >
        <DialogTitle>
          <DialogHeader className="pt-8 text-left">
            {heading && (
              <DialogTitle className="text-2xl font-bold">
                {heading}
              </DialogTitle>
            )}
            {subheading && <DialogDescription>{subheading}</DialogDescription>}
            {children}
          </DialogHeader>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
