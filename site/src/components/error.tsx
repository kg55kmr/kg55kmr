import type { ErrorComponentProps } from "@tanstack/react-router";

export function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const err = getError(error);
  return (
    <div className="m-2 flex flex-col gap-5 rounded-md border border-red-400 bg-red-50 p-3">
      <p className="whitespace-pre">{err.message}</p>
      <p className="whitespace-pre-wrap">{err.stack}</p>
      <button
        onClick={reset}
        className="cursor-pointer rounded-md border border-blue-400 bg-blue-50 px-5 py-1"
      >
        Reset
      </button>
    </div>
  );
}

function getError(error: unknown) {
  if (error instanceof Error)
    return { message: error.message, stack: error.stack };

  if (typeof error === "string") return { message: error };

  return { message: "Unknown error" };
}
