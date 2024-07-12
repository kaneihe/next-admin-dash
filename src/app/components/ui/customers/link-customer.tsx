
import { deleteCustomer } from "@/app/lib/actions";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Trash2, UserRoundPlus } from "lucide-react";
import Link from "next/link";

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <UserRoundPlus className="h-3.5 w-3.5" />{" "}
      <span className="hidden md:block">创建客户</span>      
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/customers/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: number }) {
   // 绑定删除函数，使其携带用户ID，简化删除操作的代码。
   const deleteCustomerWithId = deleteCustomer.bind(null, id);
  
  return (
    <form action={deleteCustomerWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <Trash2 className="w-5" />
      </button>
    </form>
  );
}
