'use client'

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { User } from "./lib/definitions";
import { Button } from "./components/ui/button";
import { deleteUser } from "./actions";
import { useRouter } from 'next/navigation';

export function UsersTable({
  users,
  offset,
}: {
  users: User[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }
  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">名字</TableHead>
              <TableHead className="hidden md:table-cell">邮件</TableHead>
              <TableHead className="hidden md:table-cell">使用名</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
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
function UserRow({ user }: { user: User }) {
  // 提取用户ID，用于后续删除操作。
  const userId = user.id;
  // 绑定删除函数，使其携带用户ID，简化删除操作的代码。
  const deleteUserWithId = deleteUser.bind(null, userId);

  // 返回表格行，其中包含用户的名字、邮箱、用户名、用户ID的链接和一个删除按钮。
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell className="text-right">
        <Link href={`/users/${user.id}`} />
      </TableCell>
      <TableCell>
        <Button
          className="w-full"
          size={"sm"}
          variant={"outline"}
          formAction={deleteUserWithId}
          disabled={true}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
