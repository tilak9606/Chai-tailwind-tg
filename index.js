import { apply, generate, extract } from "./engine.js";

export function chaitailwind(){
  const cls = extract();
  const css = generate(cls);

  apply(css);
}
chaitailwind();
