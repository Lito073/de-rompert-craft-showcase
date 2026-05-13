import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const routes = ["/vught", "/den-bosch", "/diensten", "/over-ons", "/contact", "/veelgestelde-vragen", "/faq"];
const distDir = "dist";
const indexFile = join(distDir, "index.html");

await Promise.all(
  routes.map(async (route) => {
    const routeIndex = join(distDir, route, "index.html");
    await mkdir(dirname(routeIndex), { recursive: true });
    await copyFile(indexFile, routeIndex);
  }),
);

await copyFile(indexFile, join(distDir, "404.html"));
