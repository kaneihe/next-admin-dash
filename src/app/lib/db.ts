import { Pool } from "pg";
import { User } from "./definitions";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

/**
 * 异步获取数据库客户端。
 *
 * 该函数通过连接池异步获取一个数据库客户端。使用连接池可以有效地管理数据库连接，
 * 避免频繁地创建和销毁连接，提高系统的资源利用率和性能。
 *
 * @returns {Promise<Client>} 返回一个Promise，解析为数据库客户端实例。
 */
async function getClient() {
  // 从连接池获取数据库连接
  const client = await pool.connect();
  // 返回获取的数据库客户端
  return client;
}

/**
 * 根据搜索条件和偏移量异步获取用户列表。
 * 如果提供了搜索条件，则返回匹配的用户列表，不包含新的偏移量。
 * 如果未提供搜索条件但提供了偏移量，则返回根据偏移量分页的用户列表，并计算新的偏移量。
 * 如果未提供搜索条件且偏移量为null，则返回空用户列表和null的偏移量。
 *
 * @param search 搜索条件，用于过滤用户。
 * @param offset 偏移量，用于分页。
 * @returns 返回包含用户数组和新偏移量的对象。如果不再有更多用户，则新偏移量为null。
 */
export async function getUsers(
  search: string,
  offset: number
): Promise<{ users: User[]; newOffset: number | null }> {
  // 获取数据库客户端
  const client = await getClient();
  try {
    // 构建SQL语句和参数
    const sqlQuery = "SELECT * FROM clients WHERE name ILIKE $1 LIMIT $2";
    const params = [`%${search}%`, 100];
    
    // 当提供搜索条件时，执行搜索查询
    // 搜索用户
    if (search) {
      const res = await client.query(sqlQuery, params);

      // 返回搜索结果，不更新偏移量
      return {
        users: res.rows,
        newOffset: null,
      };
    }

    // 当偏移量为null时，表示没有更多的用户，返回空列表
    if (offset === null) {
      return { users: [], newOffset: null };
    }

    // 定义每页的用户数量
    const limit = 20; // 每页显示的记录数
    // 执行分页查询
    const res = await client.query(
      "SELECT * FROM clients ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    // 计算新的偏移量，如果没有更多用户，则为null
    // 判断是否有更多数据
    const newOffset = res.rows.length === limit ? offset + limit : null;
    console.log("newOffset = ", newOffset);
    // console.log("res.rows = ", res.rows);
    // 返回分页结果和新的偏移量
    return { users: res.rows, newOffset: newOffset };
  } finally {
    // 释放数据库客户端资源
    client.release();
  }
}


/**
 * 异步删除数据库中指定ID的用户。
 * 
 * 此函数首先从连接池获取一个数据库客户端。然后，它构造一个SQL查询语句，
 * 用于删除ID匹配传入参数的用户记录。执行查询后，无论成功与否，都会释放数据库客户端，
 * 以便其他操作可以使用。
 * 
 * @param id 用户的唯一标识符。这个ID用于在数据库中定位并删除对应的用户记录。
 * @returns 无返回值。这个函数使用Promise<void>来表示它的异步性质，但不返回任何具体值。
 */
export async function deleteUserById(id: string): Promise<void> {
  // 从连接池获取数据库客户端
  // 获取数据库客户端
  const client = await getClient();
  try {
    // 构造删除用户的SQL查询语句
    // 构建SQL语句和参数
    const sqlQuery = "DELETE FROM clients WHERE id = $1";
    // 准备用于SQL查询的参数
    const params = [id];
    // 执行SQL查询，删除指定ID的用户
    // 执行删除操作
    await client.query(sqlQuery, params);
  } finally {
    // 无论操作成功或失败，都释放数据库客户端
    // 释放数据库客户端资源
    client.release();
  }
}
