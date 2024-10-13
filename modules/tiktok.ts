import type { Context } from "npm:telegraf";

export default async function main(ctx: Context) {
  const req = await fetch("https://api.cobalt.tools/api/json", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: ctx.text })
  });
  const res = await req.json();
  ctx.persistentChatAction('upload_video', async () => {})

  ctx.sendVideo(res.url)
}
