import { mysqlTable, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .notNull()
    .$defaultFn(() => crypto.randomUUID()), 
  name: text("name").notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),
});