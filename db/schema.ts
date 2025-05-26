import {
  pgTable,
  text,
  timestamp,
  boolean,
  uuid,
  decimal,
  jsonb,
  inet,
  smallint,
  bigint,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// User Table
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// Session Table
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

// Account Table
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// Verification Table
export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Project Table
export const project = pgTable("project", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title"),
  description: text("description"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

// Scope Table
export const scope = pgTable("scope", {
  id: uuid("id").primaryKey().defaultRandom(),
  apiKey: text("api_key"),
  title: text("title"),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => project.id, { onDelete: "cascade" }),
});

// Review Table
export const review = pgTable("review", {
  id: uuid("id").primaryKey().defaultRandom(),
  scopeId: uuid("scope_id")
    .references(() => scope.id, { onDelete: "cascade" })
    .notNull(),
  feedbackType: text("feedback_type").notNull(),
  normalizedScore: decimal("normalized_score", { mode: "number" }).notNull(),
  comment: text("comment"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  metadata: jsonb("metadata"),
  reviewerId: text("reviewer_id")
    .references(() => reviewer.id, { onDelete: "cascade" })
    .notNull(),
});

// Reviewer Table
export const reviewer = pgTable("reviewer", {
  id: text("id").primaryKey(),
  ipAddress: inet("ip_address").notNull(),
  userAgent: text("user_agent").notNull(),
  country: text("country"),
  timezone: text("timezone"),
  device: text("device"),
  fingerprint: text("fingerprint").notNull(),
  firstSeen: timestamp("first_seen").defaultNow(),
  lastSeen: timestamp("last_seen").defaultNow(),
  entropyScore: text("entropy_score"),
  avgRating: decimal("avg_rating", { mode: "number" }).default(0),
  flagCount: smallint("flag_count").default(0).notNull(),
  activityScore: smallint("activity_score").default(0).notNull(),
  reviewCount: bigint("review_count", { mode: "number" }),
});

// Relations

// User Relations
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  projects: many(project),
}));

// Session Relations
export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

// Account Relations
export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

// Project Relations
export const projectRelations = relations(project, ({ one, many }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
  scopes: many(scope),
}));

// Scope Relations
export const scopeRelations = relations(scope, ({ one, many }) => ({
  project: one(project, {
    fields: [scope.projectId],
    references: [project.id],
  }),
  reviews: many(review),
}));

// Review Relations
export const reviewRelations = relations(review, ({ one }) => ({
  scope: one(scope, {
    fields: [review.scopeId],
    references: [scope.id],
  }),
  reviewers: one(reviewer, {
    fields: [review.reviewerId],
    references: [reviewer.id],
  }),
}));

// Reviewer Relations
export const reviewerRelations = relations(reviewer, ({ many }) => ({
  reviews: many(review),
}));
