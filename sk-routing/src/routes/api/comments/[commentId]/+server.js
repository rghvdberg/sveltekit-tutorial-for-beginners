import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export function GET(requestEvent) {
  // console.log(requestEvent);
  const { params } = requestEvent;
  // console.log(params);
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return json(comment);
}

export async function PATCH({ params, request }) {
  const { commentId } = params;
  console.log(commentId);
  const { text } = await request.json();
  console.log(text);
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);
  comment.text = text;
  return json(comment);
}
