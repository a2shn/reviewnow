import { drizzle } from "drizzle-orm/neon-http"
import { neon, neonConfig } from "@neondatabase/serverless"
import ws from "ws"

console.log(process.env.DATABASE_URL)

neonConfig.webSocketConstructor = ws

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql)

