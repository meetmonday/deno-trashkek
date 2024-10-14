import type { Context } from "npm:telegraf";
import modules from "@atlas";

// const enabledModules = Deno.env.get("MODULES")?.split(" ") || [];

function main(ctx: Context) {
  const res = [`TRASHKEK_BOT НА ДЕНО ${Deno.version.deno} ОХУЕТБ`];
  Object.entries(modules).forEach((a) => {
    const m = a[1];
    if (m.trigger.type === "command") {
      res.push(`/${m.trigger.string} - ${m.description}`);
    }
    if (m.trigger.type === "regex") {
      res.push(
        //@ts-ignore: бляяяяяяяяяяяяя
        `🌐 ${m.trigger.readable || m.trigger.string} - ${m.description}`,
      );
    }
  });

  ctx.reply(res.join("\n"), {
    link_preview_options: {
      is_disabled: true,
    },
  });
}

export default {
  description: "ты еблан?",
  trigger: {
    type: "command",
    string: "help",
  },
  exec: main,
};
