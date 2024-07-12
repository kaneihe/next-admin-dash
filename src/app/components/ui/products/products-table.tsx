'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/app/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../card';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ProductType } from '@/app/lib/definitions';
import { Product } from './product';

export function ProductsTable({
  products,
  offset,
  totalProducts
}: {
  products: ProductType[];
  offset: number;
  totalProducts: number;
}) {
  let router = useRouter();
  let productsPerPage = 5;

  function prevPage() {
    router.back();
  }

/**
 * 跳转到下一页。
 * 
 * 本函数用于在用户请求下一页时，更新路由以加载更多产品数据。
 * 它通过修改URL中的offset参数来实现分页，确保用户能够平滑地浏览产品列表的后续部分。
 * 使用router.push进行页面导航，同时通过{ scroll: false }选项禁止页面滚动到顶部。
 */
function nextPage() {
  router.push(`/dashboard/products/?offset=${offset}`, { scroll: false });
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>产品</CardTitle>
        <CardDescription>
        管理您的产品并查看其销售业绩。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>产品名</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="hidden md:table-cell">价格</TableHead>
              <TableHead className="hidden md:table-cell">
                总销售数量
              </TableHead>
              <TableHead className="hidden md:table-cell">创建于</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            正在展示{' '}
            <strong>{totalProducts}</strong>
            {' '}中的{' '}
            <strong>
              {Math.min(offset - productsPerPage, totalProducts) + 1}-{offset}
            </strong>{' '}
              个产品
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              上一页
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalProducts}
            >
              下一页
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  );
}
