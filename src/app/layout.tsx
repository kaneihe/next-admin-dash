import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/app/components/ui/icons';
import { User } from './user';
import { NavItem } from './nav-item';
import SessionProviderWrapper from './components/sessionProviderWrapper';


export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
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
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  // 渲染整个应用程序的 HTML 结构
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <SessionProviderWrapper>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          {/* 侧边栏，在大屏幕设备上显示，包含导航和品牌信息 */}
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              {/* 品牌区域，包含网站标识和名称  */}
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">ACME</span>
                </Link>
              </div>
              {/* 导航区域，包含用户和设置等导航项 */}
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <UsersIcon className="h-4 w-4" />
                    用户
                  </NavItem>
                  <NavItem href="/settings">
                    <SettingsIcon className="h-4 w-4" />
                    设置
                  </NavItem>
                  <NavItem href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs">
                    <VercelLogo className="h-4 w-4" />
                    开发
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          {/* 主要内容区域，包含头部和子组件 */}
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              {/* 头部的左区域，包含品牌信息，在小屏幕设备上隐藏 */}
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                <Logo />
                <span className="">ACME</span>
              </Link>
              {/* 用户信息和操作区域，如登录、注销等 */}
              <User />
            </header>
            {/* 渲染传入的子组件，它们将占据主要内容区域 */}
            {children}
          </div>
        </div>
        {/* 分析脚本，用于收集开发模式下的分析数据 */}
        <Analytics mode={'development'} debug={true} />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
