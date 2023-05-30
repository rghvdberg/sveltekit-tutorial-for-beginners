import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments.js";
export function GET() {
  return json(comments);
}
