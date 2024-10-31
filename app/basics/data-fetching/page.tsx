"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Server, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function DataFetching() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">データフェッチング</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsにおける効率的なデータ取得方法と、各アプローチの使い分けについて解説します。
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">サーバーコンポーネントでのデータフェッチ</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Server className="h-6 w-6 text-primary mt-1" />
            <div>
              <p className="text-muted-foreground mb-4">
                サーバーコンポーネントでは、直接データベースやAPIにアクセスできます。
              </p>
              <pre className="p-4 bg-muted rounded-lg">
                <code>{`// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">データフェッチの種類</h2>
        <div className="grid gap-6">
          <Card className="p-6">
            <Database className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">静的データフェッチ</h3>
            <p className="text-muted-foreground mb-4">
              ビルド時にデータを取得し、静的にHTMLを生成します。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// デフォルトで静的フェッチ
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <Globe className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">動的データフェッチ</h3>
            <p className="text-muted-foreground mb-4">
              リクエスト時にデータを取得します。キャッシュを制御できます。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// 動的フェッチの設定
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store'  // 常に新しいデータを取得
  });
  return res.json();
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <Zap className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">再検証（Revalidation）</h3>
            <p className="text-muted-foreground mb-4">
              一定時間ごとにデータを再取得します。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// 60秒ごとに再検証
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }  // 60秒ごとに更新
  });
  return res.json();
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">エラーハンドリングとローディング状態</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">エラーハンドリング</h3>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;  // error.tsxで捕捉
  }
}`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">ローディング状態</h3>
            <p className="text-muted-foreground mb-4">
              loading.tsxファイルでローディング中のUIを定義できます。
            </p>
            <pre className="p-4 bg-muted rounded-lg">
              <code>{`// app/posts/loading.tsx
export default function Loading() {
  return <div>データを読み込み中...</div>;
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">ベストプラクティス</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              1
            </div>
            <div>
              <p className="font-semibold">適切なキャッシュ戦略</p>
              <p className="text-muted-foreground">
                データの性質に応じて、静的/動的フェッチを使い分けます。
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              2
            </div>
            <div>
              <p className="font-semibold">エラーハンドリング</p>
              <p className="text-muted-foreground">
                適切なエラー処理とフォールバックUIを用意します。
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              3
            </div>
            <div>
              <p className="font-semibold">型安全性の確保</p>
              <p className="text-muted-foreground">
                TypeScriptを使用して、データの型を定義します。
              </p>
            </div>
          </li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/basics/routing">
            前のページ
          </Link>
        </Button>
        <Button asChild>
          <Link href="/basics/rendering">
            レンダリング戦略を学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}