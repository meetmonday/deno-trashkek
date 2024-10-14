import type {Context} from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply('а пока не написал.........')
}

export default {
  description: "Присоединиться к игре братан дня",
  trigger: {
    type: "command",
    string: "brjoin",
  },
  exec: main,
};
