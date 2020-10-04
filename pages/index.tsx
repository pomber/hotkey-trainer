import { allCombos } from "../src/combos";
import { Trainer } from "../src/trainer";

export default function Page() {
  return <Trainer combos={allCombos} />;
}
