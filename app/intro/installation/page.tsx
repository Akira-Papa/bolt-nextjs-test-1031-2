"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Terminal, Package, Wrench } from "lucide-react";
import Link from "next/link";

export default function Installation() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">インストール方法</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsプロジェクトを始めるための環境構築とセットアップ方法を解説します。
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">必要な環境</h2>
        <Card className="p-6">
          <ul className="space-y-4 list-none pl-0 mb-0">
            <li className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Node.js 18.17以降</span>
            </li>
            <li className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span>npmまたはyarn、pnpmパッケージマネージャー</span>
            </li>
            <li className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <span>コードエディタ（VSCode推奨）</span>
            </li>
          </ul>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">プロジェクトの作成</h2>
        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>npx create-next-app@latest my-app</code></pre>
            </Card>
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>yarn create next-app my-app</code></pre>
            </Card>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>pnpm create next-app my-app</code></pre>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">セットアップの選択肢</h3>
          <Card className="p-6">
            <ul className="space-y-4 list-none pl-0 mb-0">
              <li>
                <p className="font-semibold mb-1">TypeScriptを使用しますか？</p>
                <p className="text-muted-foreground text-sm">
                  型安全な開発のために推奨します。
                </p>
              </li>
              <li>
                <p className="font-semibold mb-1">ESLintを使用しますか？</p>
                <p className="text-muted-foreground text-sm">
                  コードの品質維持のために推奨します。
                </p>
              </li>
              <li>
                <p className="font-semibold mb-1">Tailwind CSSを使用しますか？</p>
                <p className="text-muted-foreground text-sm">
                  モダンなスタイリングのために推奨します。
                </p>
              </li>
              <li>
                <p className="font-semibold mb-1">App Routerを使用しますか？</p>
                <p className="text-muted-foreground text-sm">
                  新しいプロジェクトでは推奨します。
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">開発サーバーの起動</h2>
        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>cd my-app
npm run dev</code></pre>
            </Card>
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>cd my-app
yarn dev</code></pre>
            </Card>
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <Card className="p-6 bg-muted/50">
              <pre className="m-0"><code>cd my-app
pnpm dev</code></pre>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <div className="mt-12 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/intro/what-is-nextjs">
            前のページ
          </Link>
        </Button>
        <Button asChild>
          <Link href="/intro/project-structure">
            プロジェクト構造を学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}