import type { Column } from "@/@types/table";
import {
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
  Wrapper,
} from "./styles";

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function DataTable<T extends object>({ data, columns }: TableProps<T>) {
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <TableRow>
            {columns.map((col, index) => (
              <TableHeader key={index}>{col.header}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : (row[col.accessor] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
}
