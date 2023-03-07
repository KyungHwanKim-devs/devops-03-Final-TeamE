import styled from "@emotion/styled";

const TableRowContainer = styled.tr`
  border: 1px;
  background-color: aliceblue;
`;

export default function TableRow({ row, flexRender }: any) {
  return (
    <TableRowContainer key={row.id}>
      {row.getVisibleCells().map((cell: any) => {
        return (
          <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </TableRowContainer>
  );
}
