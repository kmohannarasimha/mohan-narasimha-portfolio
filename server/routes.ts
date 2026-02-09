import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid input", details: parsed.error.flatten() });
      }
      const message = await storage.createContactMessage(parsed.data);
      return res.status(201).json(message);
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Failed to save message" });
    }
  });

  return httpServer;
}
