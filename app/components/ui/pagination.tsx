"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export type PaginationAlignment = "start" | "center" | "end";

type PaginationProps = {
  totalPages: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
  alignment?: PaginationAlignment;
  label?: string;
};

const clampPage = (page: number, totalPages: number) => Math.min(Math.max(page, 1), totalPages);

export function Pagination({ totalPages, page, defaultPage = 1, onPageChange, alignment = "start", label = "Pagination" }: PaginationProps) {
  const safeTotalPages = Math.max(1, Math.floor(totalPages));
  const [internalPage, setInternalPage] = useState(() => clampPage(defaultPage, safeTotalPages));
  const currentPage = clampPage(page ?? internalPage, safeTotalPages);
  const pageNumbers = Array.from({ length: safeTotalPages }, (_, index) => index + 1);

  const selectPage = (nextPage: number) => {
    const resolvedPage = clampPage(nextPage, safeTotalPages);
    if (page === undefined) setInternalPage(resolvedPage);
    onPageChange?.(resolvedPage);
  };

  return <nav className={`pagination-yoru pagination-yoru--${alignment}`} aria-label={label}><ul><li><button type="button" className="pagination-yoru-control" onClick={() => selectPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Go to previous page"><ChevronLeft aria-hidden="true" /><span>Previous</span></button></li>{pageNumbers.map((pageNumber) => <li key={pageNumber}><button type="button" className={`pagination-yoru-control ${pageNumber === currentPage ? "is-active" : ""}`} onClick={() => selectPage(pageNumber)} aria-current={pageNumber === currentPage ? "page" : undefined} aria-label={pageNumber === currentPage ? `Page ${pageNumber}, current page` : `Go to page ${pageNumber}`}>{pageNumber}</button></li>)}<li><button type="button" className="pagination-yoru-control" onClick={() => selectPage(currentPage + 1)} disabled={currentPage === safeTotalPages} aria-label="Go to next page"><span>Next</span><ChevronRight aria-hidden="true" /></button></li></ul></nav>;
}
