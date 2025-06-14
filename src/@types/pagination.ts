type MetaProps = {
  total: number;
  current: number;
};

export type Paginated<T> = {
  items: T[];
  meta: MetaProps;
};

export type Pagination = {
  pageNumber?: number;
  pageSize?: number;
};
