import type {Context} from "npm:telegraf";

function main(ctx: Context) {
  ctx.reply('а пока не портировал.........')
}

export default {
  description: "Поиск хентая",
  fullDescription: 'Поиск артов по запросу на всяких разных сайтах',
  trigger: {
    type: "command",
    string: "hentai",
  },
  args: [
    {
      title: "Теги для поиска",
      example: "/hentai love_live"
    },
    {
      title: "Сайт для поиска",
      example: "/hentai @sb love_live"
    }
  ],
  exec: main,
};
