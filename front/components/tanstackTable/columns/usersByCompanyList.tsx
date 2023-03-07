import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { fuzzySort } from "../sorter/fuzzySort";

export const usersByCompanyList: ColumnDef<any, any>[] = [
  {
    accessorFn: (row) => row.userName,
    id: "userName",
    header: "이름",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.companyName,
    id: "companyName",
    header: "회사이름",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.userEmail,
    id: "userEmail",
    header: "유저 메일",
    cell: (info) => info.getValue(),
    filterFn: "fuzzy",
    sortingFn: fuzzySort,
  },
  {
    accessorFn: (row) => row.storeUrl,
    id: "storeUrl",
    header: "Store Link",
    cell: (info) => (
      <a href={`${info.getValue()}`} target="_blank" rel="noopener noreferrer">
        {info.getValue()}
      </a>
    ),
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
