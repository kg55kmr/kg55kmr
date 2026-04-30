import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeObserverRef } from "rooks";
import { withClientOnly } from "~/lib/with";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Pagination } from "./pagination";

export type PDFProps = {
  src: string;
  forceExternalViewer?: boolean;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Pdf = withClientOnly((props: PDFProps) => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(0);
  const [ref] = useResizeObserverRef((v) => setWidth(v[0].contentRect.width));
  return (
    <div ref={ref} className="mx-auto max-w-250">
      <Document file={props.src} onLoadSuccess={(d) => setNumPages(d.numPages)}>
        <Page
          pageNumber={currentPage}
          width={width}
          className="rounded-md border border-gray-500 p-1 drop-shadow-[7px_7px_7px] drop-shadow-black/14"
        />
      </Document>
      <Pagination
        totalItems={numPages}
        itemsPerPage={1}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        className="sticky bottom-2 z-2 mx-auto w-fit rounded-md border border-gray-500 bg-slate-100 p-1 text-lg sm:sticky"
      />
    </div>
  );
});
