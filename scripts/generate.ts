import config from "../src/index.ts";
import { resolve as r, dirname, fromFileUrl } from "https://deno.land/std@0.175.0/path/mod.ts";

/**
 * Resolves paths relative to this module
 */
const resolve = (...args: string[]) => r(dirname(fromFileUrl(import.meta.url)), ...args);

try {
  await Deno.remove(resolve("../dist"), { recursive: true });
} catch (_) { /**/ }
await Deno.mkdir(resolve("../dist"));
await Deno.writeTextFile(resolve("../dist/data.json"), JSON.stringify(config));
