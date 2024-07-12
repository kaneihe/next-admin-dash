"use server";

import { z } from "zod";
import { deleteCustomerById, InsertNewCustomer, UpdateClient } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required."),
  username: z.string().min(1, "Username is required."),
  email: z.string().email("Please enter a valid email address"),
});

const CreateCustomer = FormSchema.omit({ id: true });
const RenewCustomer = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    username?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function CreateNewCustomer(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
  });
  
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }

  // Prepare data for insertion into the database
  const { name, username, email } = validatedFields.data;
  try {
    // Insert data into the database
    InsertNewCustomer(name, username, email);
  } catch (error) {
    return {
      error: error,
      message: "Database Error: Failed to Create Customer.",
    };
  }
  
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}

/**
 * 异步更新客户信息。
 *
 * 本函数通过解析表单数据并更新客户的名称、用户名和电子邮件。如果更新过程中出现错误，
 * 则会返回错误信息；否则，将重新验证相关路由并重定向到客户管理页面。
 *
 * @param id 客户的唯一标识符。
 * @param formData 包含客户信息的表单数据对象。
 * @returns 如果更新失败，返回包含错误信息的对象；否则，不返回值。
 */
export async function UpdateCustomer(prevState: State, formData: FormData) {
  // 从表单数据中提取并解析客户的新信息
  const id = parseInt(formData.get("id") as string, 10);
  
  const validatedFields  = RenewCustomer.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
  });
  // console.log("UpdateCustomer = ", name, username, email, id);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    };
  }
  const { name, username, email } = validatedFields.data;
  // 尝试更新客户信息，如果发生错误，则记录错误信息
  // Update data into the database
  try {
    await UpdateClient(id, name, username, email);
  } catch (error) {
    console.log("error = ", error);
    return {
      error: error,
      message: "Database Error: Failed to Update Customer.",
    };
  }

  // 重新验证相关路由，确保页面数据的实时更新
  revalidatePath("/dashboard/customers");
  // 重定向到客户管理页面，供用户查看更新后的信息
  redirect("/dashboard/customers");
}


export async function deleteCustomer(id: number) {
  // throw new Error('删除发票失败');
  try {
    await deleteCustomerById(id);    
  } catch (error) {
    return {
      message: '数据库错误：无法删除发票。',
    };
  }

  revalidatePath('/dashboard/customers');
}
