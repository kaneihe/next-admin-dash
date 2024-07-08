'use client'
import { useEffect, useRef, useState, useTransition } from "react";
import { SearchIcon, Spinner } from "./components/ui/icons";
import { useRouter } from "next/navigation";
import { Input } from "./components/ui/input";


/**
 * 搜索组件，用于用户输入搜索关键字并执行搜索操作。
 * 
 * @param props - 组件属性
 * @param props.value - 搜索输入的默认值，可选
 */
export function Search(props: {value?: string}) {
  // 使用next.js的router来处理页面跳转
  const router = useRouter();
  // 创建一个ref来获取输入框的实例
  const inputRef = useRef<HTMLInputElement>(null);
  // 状态管理：存储搜索关键字的值
  const [value, setValue] = useState(props.value);
  // 状态管理：控制搜索操作的过渡状态
  const [isPending, startTransition] = useTransition();

  // 监听搜索关键字的变化，并更新URL查询参数
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log('value = ', value);
    
    // 根据关键字的值来设置或删除查询参数
    if (value === undefined) {
      return;
    } else if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    // 平滑过渡到新的URL
    startTransition(() => {
      router.replace(`?${params.toString()}`);
    });
  }, [router, value]);

  // 渲染搜索组件
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
      <Input
        type="search"        
        className="w-full bg-white shadow-none appearance-none pl-8"
        placeholder="Search users..."
        defaultValue={props.value}
        value={value ?? ''}
        ref={inputRef}
        onInput={(e) => {
          setValue(e.currentTarget.value);
        }}
        spellCheck="false"
      />
      {isPending && <Spinner />}
    </div>
  );
}