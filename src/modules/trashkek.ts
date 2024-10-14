import type { Context } from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply("а пока не портировал.........");
}

export default {
  description: "кинуть крутой камент с крутого сайта трешбокс",
  trigger: { type: "regex", string: /#div_comment/, readable: "trashbox.ru" },
  exec: main,
};
