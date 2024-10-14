import type {Context} from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply('а пока не написал.........')
}

export default {
  description: "Список участников игры",
  trigger: {
    type: "command",
    string: "brjoined",
  },
  exec: main,
};
