import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeObserverRef } from "rooks";
import { cn } from "~/lib/utils";
import { Pagination } from "../pagination";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export type PDFProps = {
  src: string;
  aspectRatio?: number;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Component(props: PDFProps) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [previewPage, setPreviewPage] = useState(1);

  const [width, setWidth] = useState(0);
  const [ref] = useResizeObserverRef((v) => setWidth(v[0].contentRect.width));

  const className =
    "rounded-md border border-gray-500 p-1 drop-shadow-[7px_7px_7px] drop-shadow-black/14";

  const isRendered = previewPage != page;

  return (
    <div ref={ref} className="mx-auto max-w-250">
      <Document
        file={props.src}
        suspense={false}
        onLoadSuccess={(d) => setNumPages(d.numPages)}
      >
        <Page
          key={`preview-${previewPage}`}
          pageNumber={previewPage}
          width={width}
          className={cn(className, !isRendered && "hidden")}
        />

        <Page
          key={`page-${page}`}
          pageNumber={page}
          width={width}
          onRenderSuccess={() => setPreviewPage(page)}
          className={cn(className, isRendered && "hidden")}
        />
      </Document>
      <Pagination
        totalItems={numPages}
        itemsPerPage={1}
        currentPage={page}
        onPageChange={setPage}
        desktopSticky
      />
    </div>
  );
}
