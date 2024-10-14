import type { Context } from "npm:telegraf";
import modules from "@atlas";

// const enabledModules = Deno.env.get("MODULES")?.split(" ") || [];

function main(ctx: Context) {
  //@ts-ignore хз почему но срет на отсутствосовие
  if (ctx.payload) {
    commandHelp(ctx);
    return false;
  }
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

function commandHelp(ctx: Context) {
  //@ts-ignore бля заебал ошибками срать бесполезная хуйня
  if (!modules[ctx.payload]) {
    ctx.reply("Команда не найдена");
    return false;
  
  }
  //@ts-ignore бля заебал ошибками срать бесполезная хуйня
  const command = modules[ctx.payload];
  const reply = [
    `Команда /${command.trigger.readable || command.trigger.string}`,
    command.description || "Без описания",
    command.fullDescription || "Без описания",
    command.args ? command.args.map((e: { title: string; example: string; }) => `\n${e.title} - ${e.example}`) : "",
  ];
  ctx.reply(reply.join("\n"));
}

export default {
  description: "ты еблан?",
  trigger: {
    type: "command",
    string: "help",
  },
  exec: main,
};
