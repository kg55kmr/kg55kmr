import { createFileRoute } from "@tanstack/react-router";
import { sha } from "~/server/github";

export const Route = createFileRoute("/api/github/sha/$repo/$sha")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const data = await sha({ repo: params.repo, sha: params.sha });
        if (!data.contentType)
          return Response.json(
            { error: `Unknown content type: ${request.url}` },
            { status: 404 },
          );

        return new Response(data.content, {
          headers: {
            "Content-Type": data.contentType,
            "Access-Control-Allow-Origin": "*",
          },
        });
      },
    },
  },
});

