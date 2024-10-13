import type { Context } from "npm:telegraf";
import * as modules from './_atlas.ts';

const enabledModules = Deno.env.get("MODULES")?.split(' ') || []

function main(ctx: Context) {
  const res = [`TRASHKEK_BOT НА ДЕНО ${Deno.version.deno} ОХУЕТБ`];
  enabledModules.forEach((e) => {
    // @ts-ignore: БЛЯ ЗАЕБАЛ ДА ЭТО ГРЯЗЬБ
    const mod = modules[e];
    if(mod.trigger.type === 'command') res.push(`/${mod.trigger.string} - ${mod.description}`)
    if(mod.trigger.type === 'regex') res.push(`🌐 ${mod.trigger.readable} - ${mod.description}`)
  })

  ctx.reply(res.join('\n'), {
    link_preview_options: {
      is_disabled: true
    }
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
