import { Telegraf } from 'npm:telegraf'

import * as modules from './modules/_atlas.ts';
const bot = new Telegraf(Deno.env.get('BOT_TOKEN')!)
const enabledModules = Deno.env.get("MODULES")?.split(' ') || []

if (import.meta.main) {
  enabledModules.forEach((e) => {
    // @ts-ignore: БЛЯ ЗАЕБАЛ ДА ЭТО ГРЯЗЬБ
    const mod = modules[e];
    if(mod.trigger.type === 'command') {
      bot.command(mod.trigger.string, (ctx) => mod.exec(ctx))
    }
    else if(mod.trigger.type === 'regex') {
      bot.hears(mod.trigger.string, ctx => { mod.exec(ctx) })
    }
  })
  bot.launch()
}
