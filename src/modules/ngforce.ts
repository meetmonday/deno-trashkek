import type { Context } from "npm:telegraf";

function main(ctx: Context) {
  if (ctx.chat?.type === "private") {
    ctx.reply("Долбоеб, это не чят");
    return false;
  }
  ctx.reply("Это чят");
}

export default {
  description: "НГФОРС или СЛУЧАЙНЫЙ КАМЕНТ С ТРЕШБОКСА",
  trigger: {
    type: "command",
    string: "ngforce",
  },
  exec: main,
};
