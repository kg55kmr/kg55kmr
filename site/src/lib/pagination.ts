export function pagination<T>(options: {
  items: T[];
  itemsPerPage: number;
  page: number;
}) {
  const start = options.page * options.itemsPerPage;
  const end = start + options.itemsPerPage;
  const items = options.items.slice(start, end);
  const itemsPlaceholder = Array<number>(
    options.itemsPerPage - items.length,
  ).fill(0);

  return {
    items,
    itemsPlaceholder: itemsPlaceholder,
  };
}
