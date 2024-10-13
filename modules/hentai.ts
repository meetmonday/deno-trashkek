import type {Context} from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply('а пока не портировал.........')
}

export default {
  description: "хентай (запрещен никитам)",
  trigger: {
    type: "command",
    string: "hentai",
  },
  exec: main,
};
