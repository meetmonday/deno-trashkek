import { Telegraf } from "npm:telegraf";

import modules from "@atlas";
const bot = new Telegraf(Deno.env.get("BOT_TOKEN")!);

if (import.meta.main) {
  Object.entries(modules).forEach((a) => {
    const mod = a[1];
    if (mod.trigger.type === "command") {
      //@ts-ignore: aasdasdasdasd
      bot.command(mod.trigger.string, (ctx) => mod.exec(ctx));
    } else if (mod.trigger.type === "regex") {
      bot.hears(mod.trigger.string, (ctx) => {
        mod.exec(ctx);
      });
    }
  });
  bot.launch();
}
