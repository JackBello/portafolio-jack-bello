import { Application, send } from "https://deno.land/x/oak@14.2.0/mod.ts";
import { brotli } from "https://deno.land/x/oak_compress@v0.0.2/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { existsSync } from "https://deno.land/std@0.221.0/fs/mod.ts";

const app = new Application();

app.use(oakCors());
app.use(brotli());

app.use(async (ctx) => {
  let filePath = ctx.request.url.pathname;

  if (!existsSync(`dist${filePath}`)) {
    filePath = "/index.html";
  }

  await send(ctx, filePath, {
    root: `${Deno.cwd()}/dist`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
