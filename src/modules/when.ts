import type { Context } from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply("а пока не портировал.........");
}

export default {
  description: "когда будет стрелять наган",
  trigger: {
    type: "regex",
    string: /когда/,
  },
  exec: main,
};
