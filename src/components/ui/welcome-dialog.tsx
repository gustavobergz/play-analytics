import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const WelcomeDialog = AlertDialogPrimitive.Root;

const WelcomeDialogPortal = AlertDialogPrimitive.Portal;

const WelcomeDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-[#020b16]/75 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));

WelcomeDialogOverlay.displayName =
  AlertDialogPrimitive.Overlay.displayName;

const WelcomeDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <WelcomeDialogPortal>
    <WelcomeDialogOverlay />

    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "relative",
        "fixed left-[50%] top-[50%] z-50",
        "w-[calc(100%-2rem)] max-w-md",
        "translate-x-[-50%] translate-y-[-50%]",
        "overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-[#081827]",
        "p-8",
        "shadow-[0_25px_80px_rgba(0,0,0,0.55)]",
        "duration-200",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    >
      {/* Green glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8cff24]/10 blur-3xl" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#1677ff]/10 blur-3xl" />

      {children}
    </AlertDialogPrimitive.Content>
  </WelcomeDialogPortal>
));

WelcomeDialogContent.displayName =
  AlertDialogPrimitive.Content.displayName;

const WelcomeDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative flex flex-col items-center space-y-3 text-center",
      className,
    )}
    {...props}
  />
);

WelcomeDialogHeader.displayName = "WelcomeDialogHeader";

const WelcomeDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-2xl font-bold tracking-tight text-white",
      className,
    )}
    {...props}
  />
));

WelcomeDialogTitle.displayName =
  AlertDialogPrimitive.Title.displayName;

const WelcomeDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(
      "max-w-sm text-sm leading-6 text-gray-400",
      className,
    )}
    {...props}
  />
));

WelcomeDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const WelcomeDialogBadge = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "inline-flex w-fit items-center gap-2 rounded-full",
      "border border-[#8cff24]/20 bg-[#8cff24]/10 px-3 py-1",
      "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d7ffb1]",
      className,
    )}
    {...props}
  />
);

WelcomeDialogBadge.displayName = "WelcomeDialogBadge";

const WelcomeDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "relative mt-8 flex items-center justify-center",
      className,
    )}
    {...props}
  />
);

WelcomeDialogFooter.displayName = "WelcomeDialogFooter";

const WelcomeDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      buttonVariants(),
      "min-w-35 w-full rounded-full border-0 sm:w-auto",
      "bg-[#8cff24] px-8 py-3",
      "font-semibold text-[#07120a]",
      "shadow-[0_0_25px_rgba(140,255,36,0.25)]",
      "transition-all",
      "hover:scale-105 hover:bg-[#9cff3d]",
      "hover:shadow-[0_0_35px_rgba(140,255,36,0.4)]",
      "active:scale-95",
      className,
    )}
    {...props}
  />
));

WelcomeDialogAction.displayName =
  AlertDialogPrimitive.Action.displayName;

export {
  WelcomeDialog,
  WelcomeDialogPortal,
  WelcomeDialogOverlay,
  WelcomeDialogContent,
  WelcomeDialogHeader,
  WelcomeDialogTitle,
  WelcomeDialogDescription,
  WelcomeDialogBadge,
  WelcomeDialogFooter,
  WelcomeDialogAction,
};
