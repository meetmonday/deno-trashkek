import { Telegraf } from 'npm:telegraf'

import tiktok from '#m/tiktok.ts'
import ngforce from '#m/ngforce.ts'

const bot = new Telegraf(Deno.env.get('BOT_TOKEN')!)

if (import.meta.main) {
  bot.hears(/tiktok/, tiktok)
  bot.command('ngforce', (ctx) => { ngforce(ctx) })
  bot.launch()
}
