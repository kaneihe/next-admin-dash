import "./globals.css";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import {
  Logo,
  SettingsIcon,
  UsersIcon,
  VercelLogo,
} from "@/app/components/ui/icons";
import { User } from "./user";
import { NavItem } from "./nav-item";
import ProviderWrapper from "./components/sessionProviderWrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Search } from "./search";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import { SearchInput } from "./searchInput";

export const metadata = {
  title: "Next.js App Router + NextAuth + Tailwind CSS",
  description:
    "A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.",
};

/**
 * RootLayout 组件定义了应用程序的根布局。
 *
 * 该组件使用 React.ReactNode 类型的 children 参数，
 * 用于渲染在布局中的具体内容。
 *
 * @param {React.ReactNode} children - 应用程序的子组件。
 * @returns 返回根布局的 HTML 结构，包括侧边栏、头部和分析脚本等。
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 渲染整个应用程序的 HTML 结构
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <ProviderWrapper>
          <main className="flex min-h-screen w-full flex-col bg-muted/40">
            <DesktopNav />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <MobileNav />
                <DashboardBreadcrumb />
                <SearchInput />
                <User />
              </header>
              <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
                {children}
              </main>
            </div>
            <Analytics mode="development" debug={true} />
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}

/**
 * DesktopNav 组件用于渲染桌面版本的导航栏。
 * 
 * 此组件展示了一侧固定的导航菜单，包含多个导航项和一个设置按钮。
 * 导航项通过 `<NavItem>` 组件呈现，每个项都链接到相应的页面。
 * 设置按钮是一个带提示的链接，使用 `<Tooltip>` 组件来显示提示文本。
 * 
 * @returns 返回导航栏的 React 元素。
 */
function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <VercelLogo className="h-3 w-3 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {/* Home导航 */}
        <NavItem href="/dashboard" label="Dashboard">
          <Home className="h-5 w-5" />
        </NavItem>
        {/* 购物车导航Icon */}
        <NavItem href="/dashboard/orders" label="Orders">
          <ShoppingCart className="h-5 w-5" />
        </NavItem>
        {/* 产品导航Icon */}
        <NavItem href="/dashboard/products" label="Products">
          <Package className="h-5 w-5" />
        </NavItem>
        {/* 客户导航Icon */}
        <NavItem href="/dashboard/customers" label="Customers">
          <Users2 className="h-5 w-5" />
        </NavItem>

        <NavItem href="#" label="Analytics">
          <LineChart className="h-5 w-5" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Vercel</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Package className="h-5 w-5" />
            Products
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users2 className="h-5 w-5" />
            Customers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/**
 * 控制台面包屑导航组件。
 * 
 * 该组件用于在页面顶部显示当前页面的导航路径，帮助用户快速了解当前所在的位置，并能快速返回上一级或跳转到其他页面。
 * 在小屏幕设备上，面包屑导航会被隐藏，以提供更多的屏幕空间给主要内容。
 * 
 * @returns 返回Breadcrumb组件，其中包含当前页面的导航路径。
 */
function DashboardBreadcrumb() {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">BI仪表盘</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">产品</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>全部产品</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
