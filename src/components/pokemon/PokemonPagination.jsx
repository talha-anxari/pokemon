import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const PokemonPagination = ({ page, totalPages, setSearchParams }) => {
  const getVisiblePages = () => {
    const delta = 2;

    let start = Math.max(1, page - delta);
    let end = Math.min(totalPages, page + delta);

    // Agar starting pages par hain
    if (page <= 3) {
      end = Math.min(5, totalPages);
    }

    // Agar last pages par hain
    if (page >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="text-foreground/80 hover:text-primary hover:bg-white/5"
            onClick={(e) => {
              e.preventDefault();

              if (page > 1) {
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("page", page - 1);
                  return params;
                });
              }
            }}
          />
        </PaginationItem>

        {/* First Ellipsis */}
        {page > 3 && (
          <PaginationItem>
            <PaginationEllipsis className="text-muted-foreground" />
          </PaginationItem>
        )}

        {/* Pages */}
        {visiblePages.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              isActive={page === number}
              className={
                page === number
                  ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_14px_color-mix(in_oklch,var(--primary),transparent_55%)]"
                  : "text-foreground/70 hover:bg-white/5 hover:text-primary"
              }
              onClick={(e) => {
                e.preventDefault();

                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("page", number);
                  return params;
                });
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last Ellipsis */}
        {page < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis className="text-muted-foreground" />
          </PaginationItem>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="text-foreground/80 hover:text-primary hover:bg-white/5"
            onClick={(e) => {
              e.preventDefault();

              if (page < totalPages) {
                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("page", page + 1);
                  return params;
                });
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PokemonPagination;
