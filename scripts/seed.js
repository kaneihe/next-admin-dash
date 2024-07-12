const { getClient } = require("./pg-local.js");
const { products } = require("./data.js");

/**
 * Asynchronously seeds the "products" table in the database.
 * This function first checks and installs the necessary UUID extension, then creates the "products" table if it does not exist.
 * It then inserts a batch of product data into the table, using the `ON CONFLICT` clause to avoid duplicate entries.
 *
 * @param {Object} client - The database client, used to execute SQL statements.
 * @returns {Object} An object containing the creation of the "products" table and the inserted product data.
 * @throws Will throw an error if any SQL execution fails.
 */
async function seedProducts(client) {
  try {
    // Insert a batch of product data into the "products" table.
    // Uses Promise.all to handle multiple asynchronous insertions at the same time.
    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return client.sql`
        INSERT INTO products (id, image_url, name, status, price, stock, available_at)
        VALUES (
          ${product.id}, 
          ${product.image_url}, 
          ${product.name},
          ${product.status}, 
          ${product.price}, 
          ${product.stock}, 
          CURRENT_TIMESTAMP
          ) 
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    // Returns the creation statement of the "products" table and the inserted product data.
    return {
      users: insertedProducts, // Note: Here the returned key is "users", but it should be "products" to match the content.
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

/**
 * 主函数，用于初始化数据库并种子测试数据。
 *
 * 本函数首先根据环境变量决定是否使用本地Postgres数据库客户端。
 * 如果环境变量LOCAL_VERCEL_POSTGRES存在，则尝试获取本地客户端；
 * 否则，使用默认的数据库连接方式。
 * 接着，本函数将种子测试产品数据到数据库，并在完成后关闭数据库连接。
 *
 * @async
 */
async function main() {
  // 根据环境变量决定使用哪种方式获取数据库客户端
  const client = await getClient();
  try {
    // 打印数据库初始化信息
    console.log("Seeding database...", client);

    // 种子测试产品数据
    await seedProducts(client);
  } catch (error) {
    console.error(
      "An error occurred while attempting to seed the database:",
      error
    );
  } finally {
    // 关闭数据库连接
    await client.end();
    console.log("Database connection closed.");
  }
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
