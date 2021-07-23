import schema from "enigma.js/schemas/12.67.2.json";
import enigma from "enigma.js";
import { embed } from "@nebula.js/stardust";
import bar from "@nebula.js/sn-bar-chart";

export class QlikComponent {
  constructor() {}
  async session() {
    const session = enigma.create({
      schema,
      url: `ws://localhost:4848/app/engineData`,
      createSocket: (url) => new WebSocket(url),
    });

    const global = await session.open();
    // @ts-ignore
    return await global.openDoc("Cars.qvf");
  }
  async chart() {
    let app = await this.session();
    const nebbie = embed(app, {
      context: { theme: "light" },
      types: [
        {
          name: "bar",
          load: () => bar,
        },
      ],
    });

    return nebbie;
  }
}
