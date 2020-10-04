import { Trainer } from "../src/trainer";
import { build } from "../src/combos";

export default function Page() {
  return <Trainer combos={build} />;
}
