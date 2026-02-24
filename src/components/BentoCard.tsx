import type { PropsWithChildren } from "react";

type BentoCardProps = {
  className?: string;
};

export default function BentoCard({
  className,
  children,
}: PropsWithChildren<BentoCardProps>) {
  return (
    <div className={`glass-card rounded-2xl ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
