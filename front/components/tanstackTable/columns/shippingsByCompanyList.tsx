import { ColumnDef } from "@tanstack/react-table";

export const shippingsByCompanyList: ColumnDef<any, any>[] = [
  {
    accessorFn: (row) => row.id,
    id: "id",
    header: "배송번호",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.userName,
    id: "userName",
    header: "주문자",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.shippedAddressName,
    id: "shippedAddressName",
    header: "배송지이름",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.shippingType,
    id: "shippingType",
    header: "배송사",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.shippedAt,
    id: "shippedAt",
    header: "배송일",
    cell: (info) => info.getValue()?.substr(0, 10),
  },
  {
    accessorFn: (row) => row.trackingNumber,
    id: "trackingNumber",
    header: "운송장번호",
    cell: (info) => info.getValue()?.substr(0, 10),
  },
  {
    accessorFn: (row) => row.totalCount,
    id: "totalCount",
    header: "상품종류",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.itemsCount,
    id: "itemsCount",
    header: "총수량",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.itemsPrice,
    id: "itemsPrice",
    header: "상품가격",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.shippingPrice,
    id: "shippingPrice",
    header: "배송비",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.totalPrice,
    id: "totalPrice",
    header: "총액",
    cell: (info) => info.getValue(),
  },
];
