"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cpu, Globe, Zap, Gauge } from "lucide-react";
import Link from "next/link";

export default function Rendering() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">レンダリング戦略</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsが提供する様々なレンダリング方式と、それぞれの特徴や使い分けについて解説します。
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">レンダリングの種類</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <Cpu className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">サーバーサイドレンダリング (SSR)</h3>
            <p className="text-muted-foreground mb-4">
              リクエストごとにサーバーでHTMLを生成します。動的なコンテンツに最適です。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// app/dynamic/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store'
  });
  return <div>{/* データを表示 */}</div>;
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <Globe className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">静的サイト生成 (SSG)</h3>
            <p className="text-muted-foreground mb-4">
              ビルド時にHTMLを生成。高速な表示とSEO対策に効果的です。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// app/static/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{/* データを表示 */}</div>;
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">インクリメンタル静的再生成 (ISR)</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Zap className="h-6 w-6 text-primary mt-1" />
            <div>
              <p className="text-muted-foreground mb-4">
                静的ページを定期的に再生成し、データを更新します。
              </p>
              <pre className="p-4 bg-muted rounded-lg">
                <code>{`// app/blog/[slug]/page.tsx
export default async function Page({ params }) {
  const data = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { revalidate: 3600 } // 1時間ごとに再生成
  });
  return <div>{/* ブログ記事を表示 */}</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">クライアントサイドレンダリング</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Gauge className="h-6 w-6 text-primary mt-1" />
            <div>
              <p className="text-muted-foreground mb-4">
                クライアントで動的なUIを生成。インタラクティブな要素に使用します。
              </p>
              <pre className="p-4 bg-muted rounded-lg">
                <code>{`"use client";

// app/interactive/page.tsx
import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">レンダリング方式の選択基準</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">SSRを選ぶ場合</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>リアルタイムのデータが必要な場合</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>ユーザー固有のコンテンツを表示する場合</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>リクエストごとに異なる内容を表示する場合</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">SSGを選ぶ場合</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>ブログや商品カタログなど、静的なコンテンツ</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>SEOが重要なページ</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>高いパフォーマンスが求められる場合</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">ISRを選ぶ場合</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>定期的な更新が必要なコンテンツ</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>大規模なサイトで全ページの再ビルドを避けたい場合</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <div className="mt-12 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/basics/data-fetching">
            前のページ
          </Link>
        </Button>
        <Button asChild>
          <Link href="/basics/styling">
            スタイリングを学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}