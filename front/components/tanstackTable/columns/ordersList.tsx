import { ColumnDef } from "@tanstack/react-table";
import { fuzzySort } from "../sorter/fuzzySort";

export const ordersListColumns: ColumnDef<any, any>[] = [
  {
    accessorFn: (row) => row.userName,
    id: "userName",
    header: "이름",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.orders,
    id: "orders",
    header: "주문수",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.shipping,
    id: "shipping",
    header: "배송수",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.cartsItems,
    id: "cartsItems",
    header: "장바구니",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.createdAt,
    id: "createdAt",
    header: "가입일",
    cell: (info) => info.getValue()?.substr(0, 10),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
];
