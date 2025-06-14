import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f9fafb;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
`;
