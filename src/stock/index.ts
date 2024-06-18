import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { stockTable } from "../../db/schema";

const stock = new Hono<{ Bindings: { DB: D1Database } }>();

stock
  .get("/", async (c) => {
    const db = drizzle(c.env.DB);
    const res = await db.select().from(stockTable);
    return c.json(res);
  })
  .post("/", async (c) => {
    const db = drizzle(c.env.DB);
    const stock = await c.req.json<typeof stockTable.$inferInsert>();
    const res = await db.insert(stockTable).values(stock);
    return c.json(res);
  })
  .delete("/:code", async (c) => {
    const db = drizzle(c.env.DB);
    const code = await c.req.param("code");
    const res = await db.delete(stockTable).where(eq(stockTable.code, code));
    return c.json(res);
  });

export default stock;
