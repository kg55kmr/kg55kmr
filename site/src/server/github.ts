import { Octokit } from "@octokit/rest";
import { fileTypeFromBuffer } from "file-type";
import { serverEnv } from "~/config/env";

const client = new Octokit({ auth: serverEnv.GITHUB_PERSONAL_ACCESS_TOKEN });

export async function latestCommit(opts: { repo: string }) {
  const response = await client.repos.getCommit({
    owner: "kg55kmr",
    repo: opts.repo,
    ref: "main",
  });
  return response.data.sha;
}

export async function sha(opts: { repo: string; sha: string }) {
  const response = await client.git.getBlob({
    owner: "kg55kmr",
    repo: opts.repo,
    file_sha: opts.sha,
  });
  const data = Buffer.from(response.data.content, "base64");
  const contentType = await fileTypeFromBuffer(data);
  return { content: data, contentType: contentType?.mime };
}
