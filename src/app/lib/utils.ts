import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


/**
 * 组合多个类名以创建一个用于渲染HTML元素的类字符串。
 * 
 * 此函数提供了一种简洁的方式来合并多个类名，这些类名可以是字符串、对象或数组。
 * 它的主要目的是为了在React等前端框架中方便地操作类名，特别是在基于条件地添加或删除类名的场景下。
 * 
 * @param inputs 多个类名值的参数列表。这些值可以是字符串、对象或数组，具体取决于clsx库的处理方式。
 * @returns 返回一个合并后的类名字符串，适用于渲染HTML元素。
 */
export function cn(...inputs: ClassValue[]) {
    // 调用twMerge函数来合并类名，这里假设twMerge是一个外部定义的函数，用于处理类名合并的逻辑。
    // clsx是一个常用的类名合并库，这里将其作为参数传递给twMerge函数。
    return twMerge(clsx(inputs))
}