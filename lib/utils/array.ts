type SortByDate = {
  items: any[];
  key: string;
  sort?: 'asc' | 'desc';
};

export function sortByDate({ items, key, sort = 'desc' }: SortByDate) {
  if (sort === 'asc') {
    return items.sort((a, b) => new Date(a[key]).valueOf() - new Date(b[key]).valueOf());
  }

  return items.sort((a, b) => new Date(b[key]).valueOf() - new Date(a[key]).valueOf());
}
