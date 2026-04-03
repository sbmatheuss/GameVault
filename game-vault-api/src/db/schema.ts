import { mysqlTable, varchar, text, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),
});

export const favorite = mysqlTable("favorites", {
   id: varchar("id", { length: 36 })
    .primaryKey()
    .notNull(),
  name: text("name").notNull(),
})

export const cart = mysqlTable("cart", {
   id: varchar("id", { length: 36 })
    .primaryKey()
    .notNull(),
  name: text("name").notNull(),
})