"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FolderTree, FileCode, Layers } from "lucide-react";
import Link from "next/link";

export default function Routing() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">ページとルーティング</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsのApp Routerを使用した最新のルーティングシステムについて解説します。
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">ファイルベースルーティング</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <FolderTree className="h-6 w-6 text-primary mt-1" />
            <div>
              <p className="text-muted-foreground">
                Next.jsは<code>app</code>ディレクトリ内のファイル構造に基づいて、
                自動的にルーティングを生成します。
              </p>
              <pre className="mt-4 p-4 bg-muted rounded-lg">
                <code>{`app/
├── page.tsx           # /
├── about/
│   └── page.tsx      # /about
├── blog/
│   ├── page.tsx      # /blog
│   └── [slug]/
│       └── page.tsx  # /blog/[slug]
└── shop/
    └── [...slug]/
        └── page.tsx  # /shop/*`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">特別なファイル規則</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <FileCode className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">page.tsx</h3>
            <p className="text-muted-foreground">
              URLにアクセス可能なページを定義します。
              このファイルがルートのUIを作成します。
            </p>
            <pre className="mt-4 p-4 bg-muted rounded-lg">
              <code>{`// app/blog/page.tsx
export default function BlogPage() {
  return <h1>ブログページ</h1>;
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <Layers className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">layout.tsx</h3>
            <p className="text-muted-foreground">
              複数のページで共有されるUIを定義します。
              ネストされたレイアウトも作成可能です。
            </p>
            <pre className="mt-4 p-4 bg-muted rounded-lg">
              <code>{`// app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-layout">
      <nav>ブログナビゲーション</nav>
      {children}
    </div>
  );
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">動的ルーティング</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">動的セグメント</h3>
            <p className="text-muted-foreground mb-4">
              角括弧[...]を使用して動的なルートセグメントを作成できます。
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">[id] - 単一の動的セグメント</p>
                <pre className="mt-2 p-4 bg-muted rounded-lg">
                  <code>{`app/posts/[id]/page.tsx → /posts/1, /posts/2`}</code>
                </pre>
              </div>
              <div>
                <p className="font-semibold">[...slug] - キャッチオールセグメント</p>
                <pre className="mt-2 p-4 bg-muted rounded-lg">
                  <code>{`app/shop/[...slug]/page.tsx → /shop/a/b/c`}</code>
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">パラメータの取得</h3>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// app/posts/[id]/page.tsx
export default function Post({ params }: {
  params: { id: string }
}) {
  return <h1>記事 {params.id}</h1>;
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">並行ルート</h2>
        <Card className="p-6">
          <p className="text-muted-foreground mb-4">
            @フォルダを使用して、同じレイアウト内で複数のページを同時に表示できます。
          </p>
          <pre className="p-4 bg-muted rounded-lg">
            <code>{`app/
├── @modal
│   └── login/
│       └── page.tsx
└── layout.tsx`}</code>
          </pre>
        </Card>
      </section>

      <div className="mt-12 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/intro/project-structure">
            前のページ
          </Link>
        </Button>
        <Button asChild>
          <Link href="/basics/data-fetching">
            データフェッチングを学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}