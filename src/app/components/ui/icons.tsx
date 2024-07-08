

/**
 * 寻找图标组件。
 * 
 * 该组件是一个SVG图标，用于表示搜索或查找操作。它接受React.SVGProps<SVGSVGElement>作为属性，允许定制SVG元素的属性。
 * 
 * @param props - SVG元素的属性，可以用于定制颜色、大小等。
 * @returns 返回一个SVG图标元素，表示搜索操作。
 */
export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    // SVG元素的基本配置，定义了图标的基本属性如大小、视口和填充。
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
         {/* 圆形路径，表示搜索框的轮廓。 */}
        <circle cx="11" cy="11" r="8" />
        {/* 直线路径，表示搜索的指向性，从右上角到左下角。 */}
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        {/* 弧线路径，连接搜索框轮廓和搜索指针，增强视觉效果。 */}
        <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}


/**
 * Spinner组件用于显示一个加载中的指示器。
 * 
 * 该组件渲染一个带有旋转动画的SVG图形，通常用于表示页面或操作正在加载中。
 * 它是一个绝对定位的元素，位于页面的右上角，占据整个页面的高度，以确保在任何屏幕尺寸下都能可见。
 * SVG图形包括一个圆形和一条路径，两者都使用了动画效果来创建旋转的视觉效果。
 */
export function Spinner() {
    return (
      <div className="absolute right-5 top-0 bottom-0 flex items-center justify-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-80000"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }


  export function Logo() {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-gray-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" rx="16" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="black"
        />
      </svg>
    );
  }


  export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }


  export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        aria-label="Vercel logomark"
        height="64"
        role="img"
        viewBox="0 0 74 64"
      >
        <path
          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }
  