import nextjsIcon from '@/assets/img/nextjs.svg'
import nestjsIcon from '@/assets/img/nestjs.svg'
import electronIcon from '@/assets/img/electron.svg'
import reactNativeIcon from '@/assets/img/react.svg'
import plasmoIcon from '@/assets/img/plasmo.svg'
import uniAppIcon from '@/assets/img/uni-app.png'
import expressIcon from '@/assets/img/express.svg'
import koaIcon from '@/assets/img/koa.svg'
import tauriIcon from '@/assets/img/tauri.svg'
import viteIcon from '@/assets/img/vite.svg'
import wxtIcon from '@/assets/img/wxt.svg'
import antdIcon from '@/assets/img/antd.svg'
import shadcnIcon from '@/assets/img/shadcn.svg'
import daisyuiIcon from '@/assets/img/daisyui.svg'
import mobileIcon from '@/assets/img/mobile-phone.svg'
import desktopIcon from '@/assets/img/desktop-computer.svg'
import webIcon from '@/assets/img/web.svg'
import extensionIcon from '@/assets/img/extension.svg'
import miniProgramIcon from '@/assets/img/mini-program.png'
import nodeJsIcon from '@/assets/img/node-js.svg'
import uiDesignIcon from '@/assets/img/ui-design.svg'
import designToolsIcon from '@/assets/img/design-tools.svg'
import memoIcon from '@/assets/img/memo.svg'
import yuqueIcon from '@/assets/img/yuque.png'
import notionIcon from '@/assets/img/notion.svg'
import tailwindIcon from '@/assets/img/tailwind-css.svg'
import bitcoinIcon from '@/assets/img/bitcoin.svg'
import lemonSqueezyIcon from '@/assets/img/lemon-squeezy.svg'
import stripeIcon from '@/assets/img/stripe.svg'
import tldrawIcon from '@/assets/img/tldraw.png'
import excalidrawIcon from '@/assets/img/excalidraw.png'
import stackblitzIcon from '@/assets/img/stackblitz.svg'
import codepenIcon from '@/assets/img/codepen.svg'
import codeSandBoxIcon from '@/assets/img/codesandbox.svg'
import uiTipIcon from '@/assets/img/ui-tip.svg'

export interface IToolItem {
  title: string
  description?: string
  icon?: any
  url: string
}

interface SiteMapItem {
  icon: any
  title: string
  description?: string
  links: IToolItem[]
}

const siteMap: SiteMapItem[] = [
  {
    icon: webIcon,
    title: 'web framework',
    description: '',
    links: [
      {
        title: 'Nextjs',
        description: 'The Full Stack React Framework',
        icon: nextjsIcon,
        url: 'https://nextjs.org/',
      },
      {
        title: 'Vite',
        description: 'Next Generation Frontend Tooling',
        icon: viteIcon,
        url: 'https://vitejs.dev/',
      },
    ],
  },
  {
    icon: desktopIcon,
    title: 'Desktop',
    description: '桌面端框架',
    links: [
      {
        title: 'Electron',
        description:
          'Build cross-platform desktop apps with JavaScript, HTML, and CSS',
        icon: electronIcon,
        url: 'https://www.electronjs.org/',
      },
      {
        title: 'Tauri',
        description: 'A toolkit for development multi-platform desktop apps',
        icon: tauriIcon,
        url: 'https://tauri.studio/',
      },
    ],
  },
  {
    icon: mobileIcon,
    title: 'Mobile',
    description: '移动端框架',
    links: [
      {
        title: 'React Native',
        description: 'Create native apps for Android and iOS using React',
        icon: reactNativeIcon,
        url: 'https://reactnative.dev/',
      },
    ],
  },
  {
    icon: extensionIcon,
    title: 'browser extension',
    description: 'extension framework',
    links: [
      {
        title: 'Plasmo',
        description:
          'Plasmo is a platform that makes it easy for browser extension developers to create, test, and publish extensions',
        icon: plasmoIcon,
        url: 'https://plasmo.app/',
      },
      {
        title: 'Wxt',
        description: 'Next-gen Web Extension Framework',
        icon: wxtIcon,
        url: 'https://wxt.dev/',
      },
    ],
  },
  {
    icon: miniProgramIcon,
    title: 'mini-program',
    description: '跨平台框架',
    links: [
      {
        title: 'Uni-app',
        description: 'mini-program framework with Vue syntax',
        icon: uniAppIcon,
        url: 'https://uniapp.dcloud.net.cn/',
      },
      {
        title: 'Taro',
        description:
          'an open style cross-platform and -framework solution that supports users to develop any mini-programs',
        url: 'https://github.com/nervjs/taro',
      },
    ],
  },
  {
    title: 'back-end framework',
    icon: nodeJsIcon,
    description: 'back-end',
    links: [
      {
        title: 'Nestjs',
        description:
          'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
        icon: nestjsIcon,
        url: 'https://nestjs.com/',
      },
      {
        title: 'Express',
        description:
          'Fast, unopinionated, minimalist web framework for Node.js',
        icon: expressIcon,
        url: 'https://expressjs.com/',
      },
      {
        title: 'Koa',
        description: 'Next generation web framework for Node.js',
        icon: koaIcon,
        url: 'https://koajs.com/',
      },
    ],
  },
  {
    icon: uiDesignIcon,
    title: 'Ui library',
    description: 'ui library',
    links: [
      {
        title: 'Ant Design',
        description:
          'An enterprise-class UI design language and React UI library',
        icon: antdIcon,
        url: 'https://ant.design/',
      },
      {
        title: 'Shadcn/ui',
        description:
          'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
        icon: shadcnIcon,
        url: 'https://ui.shadcn.com/',
      },
      {
        title: 'DaisyUI',
        description:
          'daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever.',
        icon: daisyuiIcon,
        url: 'https://daisyui.com/',
      },
      {
        title: 'Tailwind CSS',
        description:
          'A utility-first CSS framework for rapidly building custom designs',
        icon: tailwindIcon,
        url: 'https://tailwindcss.com/',
      },
    ],
  },
  {
    icon: designToolsIcon,
    title: 'Ui Tools',
    description: 'ui工具',
    links: [
      {
        title: 'Ui Tip',
        icon: uiTipIcon,
        description:
          'Learn how to design better user interfaces and make your users happier with these simple UI tips. All the tips are tested in real-life products',
        url: 'https://www.uidesign.tips/ui-tips',
      },
    ],
  },
  {
    title: 'Payment',
    icon: bitcoinIcon,
    description: '支付',
    links: [
      {
        title: 'Stripe',
        icon: stripeIcon,
        description: 'Online payment processing for internet businesses',
        url: 'https://stripe.com/',
      },
      {
        title: 'Lemon Squeezy',
        icon: lemonSqueezyIcon,
        description: 'Payments, tax & subscriptions for software companies',
        url: 'https://www.lemonsqueezy.com/',
      },
    ],
  },
  {
    icon: 'https://cos.codefe.top/images/pencil-icon.png',
    title: 'Online Practice',
    description: '线上练习',
    links: [
      {
        title: 'Stackblitz',
        icon: stackblitzIcon,
        description: 'The online code editor for web apps',
        url: 'https://stackblitz.com/',
      },
      {
        title: 'CodePen',
        icon: codepenIcon,
        description:
          'a social development environment for front-end designers and developers',
        url: 'https://codepen.io/',
      },
      {
        title: 'CodeSandbox',
        icon: codeSandBoxIcon,
        description: 'An online code editor tailored for web applications',
        url: 'https://codesandbox.io/',
      },
    ],
  },
  {
    icon: memoIcon,
    title: 'Writing',
    description: '写作',
    links: [
      {
        title: 'Notion',
        icon: notionIcon,
        description: 'All-in-one workspace',
        url: 'https://www.notion.so/',
      },
      {
        title: 'Yuque',
        icon: yuqueIcon,
        description:
          'Elegant and efficient online document editing and collaboration tool',
        url: 'https://www.yuque.com/',
      },
      {
        title: 'Tldraw',
        icon: tldrawIcon,
        description: 'digital whiteboard',
        url: 'https://tldraw.com/',
      },
      {
        title: 'Excalidraw',
        icon: excalidrawIcon,
        description: 'An open source virtual hand-drawn style whiteboard',
        url: 'https://excalidraw.com/',
      },
    ],
  },
  // {
  //   icon: 'https://cos.codefe.top/images/blog-icon.png',
  //   title: 'Articles',
  //   description: '技术博客',
  //   links: [],
  // },
]

export default siteMap
