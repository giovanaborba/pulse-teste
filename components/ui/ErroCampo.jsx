import EspacoIcone from "@/components/ui/EspacoIcone";

// Regra: ícone + texto; a cor nunca carrega a informação sozinha (seção 3, item 7).
export default function ErroCampo({ id, papel, className = "", children }) {
  return (
    <p id={id} role={papel} className={`flex items-start gap-2 font-bold text-erro ${className}`}>
      <EspacoIcone nome="WarningCircle" />
      <span>{children}</span>
    </p>
  );
}
