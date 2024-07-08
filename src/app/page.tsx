import { getUsers } from "./lib/db";
import { Search } from "./search";
import { UsersTable } from "./users-table";

/**
 * 首页组件，负责展示用户列表和搜索功能。
 * 
 * @param {object} searchParams - 搜索参数对象，包含查询关键字q和偏移量offset。
 * @param {string} searchParams.q - 查询关键字。
 * @param {string} searchParams.offset - 数据偏移量，用于分页。
 * @returns 返回一个React组件，显示用户列表和搜索框。
 */
export default async function IndexPage({
  searchParams,
}: {
  searchParams: { q: string; offset: string };
}) {
  // 获取查询关键字，如果未提供则使用空字符串。
  const search = searchParams.q ?? "";
  // 获取数据偏移量，如果未提供则默认为0。
  const offset = searchParams.offset ?? 0;
  // 异步获取用户数据和新的偏移量。
  const { users, newOffset } = await getUsers(search, Number(offset));
  
  // 返回首页组件，包含用户列表、搜索框和分页信息。
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibol text-lg md:text-2xl">用户</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <div>
        <UsersTable users={users} offset={newOffset} />
      </div>
    </main>
  );
}
