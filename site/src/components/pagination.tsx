import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { type KeyboardEvent } from "react";
import { cn } from "~/lib/utils";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  desktopSticky?: boolean;
};

export function Pagination(props: PaginationProps) {
  const { totalItems, itemsPerPage, currentPage } = props;
  const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);

  function gotoPage(page: number) {
    props.onPageChange(page);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Enter": {
        const page = validateInput(e.currentTarget, totalPages);
        if (page) props.onPageChange(page);
        break;
      }

      case "Escape":
        e.currentTarget.blur();
        break;
    }
  }

  const isDisabled = totalItems === 0;

  return (
    <div
      className={cn(
        "sticky bottom-2 mx-auto mt-5 flex w-fit flex-wrap items-center justify-center gap-2 rounded-md border border-slate-500 bg-blue-100/85 p-1 text-lg sm:static",
        props.desktopSticky && "sm:sticky",
      )}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => gotoPage(1)}
        className={cn(
          "rounded-sm not-disabled:cursor-pointer not-disabled:hover:bg-blue-200 disabled:opacity-15",
        )}
      >
        <ChevronFirst />
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => gotoPage(currentPage - 1)}
        className={cn(
          "rounded-sm not-disabled:cursor-pointer not-disabled:hover:bg-blue-200 disabled:opacity-15",
        )}
      >
        <ChevronLeft />
      </button>
      <input
        key={currentPage}
        inputMode="numeric"
        defaultValue={currentPage.toString()}
        disabled={isDisabled}
        onKeyDown={onKeyDown}
        onBlur={(e) => {
          e.currentTarget.value = currentPage.toString();
        }}
        className="field-sizing-content px-2 not-focus:hover:outline-1 disabled:opacity-15"
      />
      <div className={cn(isDisabled && "opacity-15")}>/</div>
      <div className={cn("px-2", isDisabled && "opacity-15")}>{totalPages}</div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => gotoPage(currentPage + 1)}
        className={cn(
          "rounded-sm not-disabled:cursor-pointer not-disabled:hover:bg-blue-200 disabled:opacity-15",
        )}
      >
        <ChevronRight />
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => gotoPage(totalPages)}
        className={cn(
          "rounded-sm not-disabled:cursor-pointer not-disabled:hover:bg-blue-200 disabled:opacity-15",
        )}
      >
        <ChevronLast />
      </button>
    </div>
  );
}

function validateInput(node: HTMLInputElement, totalPages: number) {
  let inputPage = Number(node.value);
  switch (true) {
    case Number.isNaN(inputPage):
      node.blur();
      return;

    case inputPage < 1:
      inputPage = 1;
      break;

    case inputPage > totalPages:
      inputPage = totalPages;
      break;
  }

  return inputPage;
}
