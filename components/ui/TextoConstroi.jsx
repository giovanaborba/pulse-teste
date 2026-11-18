"use client";

import { useTextoConstroi } from "@/hooks/useTextoConstroi";

export default function TextoConstroi({ children, className = "" }) {
  const refBloco = useTextoConstroi();

  return (
    <div ref={refBloco} className={className}>
      {children}
    </div>
  );
}
