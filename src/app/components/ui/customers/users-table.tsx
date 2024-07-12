"use client";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Customer } from "../../../lib/definitions";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DeleteCustomer, UpdateCustomer } from "./link-customer";

export function CustomersTable({
  customers,
  offset,
  q,
  totalCustomers,
}: {
  customers: Customer[];
  offset: number;
  q: string;
  totalCustomers: number;
}) {
  const router = useRouter();
  
  const customersPerPage = 5;
  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`/dashboard/customers?offset=${offset}&q=${q}`, { scroll: false });
  }
 
  return (
    <>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">名字</TableHead>
              <TableHead className="hidden md:table-cell">邮件</TableHead>
              <TableHead className="hidden md:table-cell">使用名</TableHead>
              <TableHead className="hidden md:table-cell">编号</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <UserRow key={customer.id} customer={customer} />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex">
        <Button
          className="mt-4 w-30"
          variant="secondary"
          onClick={() => prevPage()}
          disabled={offset === customersPerPage}          
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          上一页
        </Button>
        <Button
          className="mt-4 w-30"
          variant="secondary"
          onClick={() => nextPage()}
          disabled={offset > totalCustomers || offset === 0}
        >
          下一页
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

/**
 * 用户行组件，用于在表格中显示用户信息，并提供删除用户的操作。
 *
 * @param {Object} props - 组件的属性对象。
 * @param {User} props.user - 用户对象，包含用户的基本信息。
 * @returns 返回一个 TableRow 元素，其中包含用户的信息和一个删除按钮。
 */
function UserRow({ customer }: { customer: Customer }) {
  const router = useRouter();
  // 提取用户ID，用于后续删除操作。
  const customerId = customer.id; 
  
  // 返回表格行，其中包含用户的名字、邮箱、用户名、用户ID的链接和一个删除按钮。
  return (
    <TableRow>
      <TableCell className="font-medium">{customer.name}</TableCell>
      <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
      <TableCell>{customer.username}</TableCell>
      <TableCell className="text-left">
        <Link href={`/dashboard/customers/${customer.id}/edit`} >{customer.id}</Link>
      </TableCell>
      <TableCell>
        <div className="flex justify-end space-x-2">
          <UpdateCustomer id = {customerId}/>
          <DeleteCustomer id = {customerId}/>          
        </div>
      </TableCell>
    </TableRow>
  );
}
