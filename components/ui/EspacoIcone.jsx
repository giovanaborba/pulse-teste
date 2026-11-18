import {
  ArrowClockwise,
  ArrowCounterClockwise,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowsClockwise,
  ArrowsOutCardinal,
  CaretLeft,
  CaretRight,
  Eye,
  House,
  Image as ImageIcone,
  Notebook,
  Pause,
  PencilSimple,
  Play,
  Plus,
  Pulse,
  SpeakerHigh,
  SpeakerSlash,
  Trash,
  Warning,
  WarningCircle,
  Watch,
  X,
} from "@phosphor-icons/react/ssr";

// Usa a versão "ssr" do pacote: funciona em Server e Client Components. Nome fora da
// lista volta o espaço vazio, que não ocupa lugar (decisão 4 da 9.0).
const ICONES = {
  ArrowClockwise,
  ArrowCounterClockwise,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowsClockwise,
  ArrowsOutCardinal,
  CaretLeft,
  CaretRight,
  Eye,
  House,
  Image: ImageIcone,
  Notebook,
  Pause,
  PencilSimple,
  Play,
  Plus,
  Pulse,
  SpeakerHigh,
  SpeakerSlash,
  Trash,
  Warning,
  WarningCircle,
  Watch,
  X,
};

export default function EspacoIcone({ nome }) {
  const Icone = ICONES[nome];

  if (!Icone) {
    return <span aria-hidden="true" data-icone={nome} className="hidden" />;
  }

  // shrink-0: em linhas com texto longo (erro, mensagens), o ícone não encolhe
  return <Icone size={24} weight="bold" aria-hidden="true" className="shrink-0" />;
}
