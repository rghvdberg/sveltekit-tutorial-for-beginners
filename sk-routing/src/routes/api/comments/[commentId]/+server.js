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

export async function DELETE({ params }) {
	const { commentId } = params;
	const deletedComment = comments.find((comment) => comment.id === parseInt(commentId));
	const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
	comments.splice(index, 1);
	return json(deletedComment);
}