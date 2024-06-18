import { Hono } from "hono";
import stock from "./stock";

const app = new Hono<{ Bindings: { DB: D1Database } }>();

app.route("stocks", stock);

export default app;
