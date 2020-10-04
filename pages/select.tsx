import { Trainer } from "../src/trainer";
import { queue } from "../src/combos";

export default function Page() {
  return <Trainer combos={queue} />;
}
