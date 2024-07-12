import Image from 'next/image';
import { Badge } from '../badge';
import { Button } from '../button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '../dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '../table';
import { ProductType } from '@/app/lib/definitions';
import { deleteProduct } from '@/app/dashboard/actions';

export function Product({ product }: { product: ProductType }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={product.image_url}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {product.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${product.price}`}</TableCell>
      <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
      <TableCell className="hidden md:table-cell">
        {product.available_at ? product.available_at.toLocaleDateString() : ''}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>编辑</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deleteProduct}>
                <button type="submit">删除</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
