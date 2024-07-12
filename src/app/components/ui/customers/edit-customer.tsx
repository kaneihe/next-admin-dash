"use client";

import {
  AtSymbolIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { State, UpdateCustomer } from "@/app/lib/actions";
import { Button } from "../button";
import { Input } from "../input";
import { Customer } from "@/app/lib/definitions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

export default function EditCustomerForm({ customer }: { customer: Customer }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(UpdateCustomer, initialState);
  const router = useRouter();
  
  return (
    <form action={formAction}>
      <Input type="hidden" name="id" value={customer.id} />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            请填写客户名
          </label>
          <div className="relative">
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            <Input
              id="name"
              name="name"
              type="text"
              defaultValue={customer.name}
              placeholder="Enter name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name?.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer username */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            请记入使用名
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="username"
                name="username"
                type="text"
                defaultValue={customer.username}
                placeholder="Enter user name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="username-error"
              />
              <UserPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.username &&
              state.errors.username.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer email */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            请填写电子邮件
          </legend>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="text"
                defaultValue={customer.email}
                placeholder="Enter email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button
          onClick={() => router.back()}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          撤销
        </Button>
        <Button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          提交
        </Button>
      </div>
    </form>
  );
}
