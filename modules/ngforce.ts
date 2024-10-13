import type { Context } from "npm:telegraf";

export default function main(ctx: Context) {
  if(ctx.chat?.type === 'private') {
    ctx.reply('Долбоеб, это не чят');
    return false;
  }
  ctx.reply('Это чят')
}
