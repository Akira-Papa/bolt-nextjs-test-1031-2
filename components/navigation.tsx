"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navigation = [
  {
    title: "はじめに",
    items: [
      { title: "Next.jsとは", href: "/intro/what-is-nextjs" },
      { title: "インストール方法", href: "/intro/installation" },
      { title: "プロジェクト構造", href: "/intro/project-structure" },
    ],
  },
  {
    title: "基本概念",
    items: [
      { title: "ページとルーティング", href: "/basics/routing" },
      { title: "データフェッチング", href: "/basics/data-fetching" },
      { title: "レンダリング戦略", href: "/basics/rendering" },
      { title: "スタイリング", href: "/basics/styling" },
    ],
  },
  {
    title: "応用トピック",
    items: [
      { title: "認証と認可", href: "/advanced/auth" },
      { title: "状態管理", href: "/advanced/state-management" },
      { title: "APIルート", href: "/advanced/api-routes" },
      { title: "ミドルウェア", href: "/advanced/middleware" },
    ],
  },
  {
    title: "最適化",
    items: [
      { title: "画像最適化", href: "/optimization/images" },
      { title: "パフォーマンス", href: "/optimization/performance" },
      { title: "SEO対策", href: "/optimization/seo" },
    ],
  },
  {
    title: "デプロイ",
    items: [
      { title: "Vercelへのデプロイ", href: "/deployment/vercel" },
      { title: "その他のプラットフォーム", href: "/deployment/others" },
    ],
  },
];

function NavigationItems() {
  const pathname = usePathname();

  return (
    <Accordion type="multiple" defaultValue={navigation.map(item => item.title)} className="w-full">
      {navigation.map((section) => (
        <AccordionItem key={section.title} value={section.title}>
          <AccordionTrigger className="text-sm">{section.title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-1">
              {section.items.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    "justify-start",
                    pathname === item.href && "bg-muted font-medium"
                  )}
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Navigation() {
  return (
    <>
      {/* モバイル用ナビゲーション */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0">
            <div className="h-full py-6 pl-8 pr-6">
              <NavigationItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* デスクトップ用ナビゲーション */}
      <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <div className="h-full py-6 pl-8 pr-6 lg:py-8">
          <NavigationItems />
        </div>
      </div>
    </>
  );
}