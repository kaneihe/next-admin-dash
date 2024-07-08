'use server';

import { revalidatePath } from "next/cache";
import { deleteUserById } from "./lib/db";

export async function deleteUser(userId: string){
    await deleteUserById(userId);
    revalidatePath('/users')
}