// Controls whether the live chatbot is enabled.
// Off by default so a public demo deployment never spends the owner's
// Vercel AI Gateway tokens. Clone the project, connect your own AI Gateway
// account, and set NEXT_PUBLIC_CHAT_ENABLED="true" to turn it on.
export const CHAT_ENABLED = process.env.NEXT_PUBLIC_CHAT_ENABLED === "true"
