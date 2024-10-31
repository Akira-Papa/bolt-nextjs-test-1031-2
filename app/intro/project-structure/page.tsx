"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FolderTree, FileCode, Settings } from "lucide-react";
import Link from "next/link";

export default function ProjectStructure() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">プロジェクト構造</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsプロジェクトの基本的なディレクトリ構造と各ファイルの役割について解説します。
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">基本的なディレクトリ構造</h2>
        <Card className="p-6 font-mono text-sm">
          <pre className="m-0">
            <code>{`my-app/
├── app/              # Appルーターのメインディレクトリ
├── components/       # 再利用可能なコンポーネント
├── public/          # 静的ファイル（画像など）
├── styles/          # グローバルスタイル
├── lib/             # ユーティリティ関数
├── .env             # 環境変数
├── .gitignore       # Gitの除外設定
├── next.config.js   # Next.jsの設定
├── package.json     # プロジェクト設定
└── tsconfig.json    # TypeScript設定`}</code>
          </pre>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">重要なディレクトリの説明</h2>
        
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <FolderTree className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">app/ディレクトリ</h3>
                <p className="text-muted-foreground mb-4">
                  App Routerの中心となるディレクトリです。ページ、レイアウト、ルート定義を含みます。
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li>📄 page.tsx - ページコンポーネント</li>
                  <li>📄 layout.tsx - レイアウト定義</li>
                  <li>📄 loading.tsx - ローディング状態</li>
                  <li>📄 error.tsx - エラーハンドリング</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <FileCode className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">components/ディレクトリ</h3>
                <p className="text-muted-foreground mb-4">
                  再利用可能なUIコンポーネントを格納します。
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li>🔧 UI部品（ボタン、カード等）</li>
                  <li>🔧 レイアウトコンポーネント</li>
                  <li>🔧 機能コンポーネント</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Settings className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">設定ファイル</h3>
                <p className="text-muted-foreground mb-4">
                  プロジェクトの動作を制御する重要な設定ファイルです。
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li>⚙️ next.config.js - Next.jsの設定</li>
                  <li>⚙️ tsconfig.json - TypeScriptの設定</li>
                  <li>⚙️ package.json - 依存関係と実行スクリプト</li>
                </ul>
              </div>
            </div>
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
              <p className="font-semibold">機能ごとのモジュール化</p>
              <p className="text-muted-foreground">
                関連する機能はまとめて一つのディレクトリに配置し、モジュール化を心がけます。
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              2
            </div>
            <div>
              <p className="font-semibold">命名規則の統一</p>
              <p className="text-muted-foreground">
                ファイルやディレクトリの命名規則を統一し、分かりやすい構造を維持します。
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              3
            </div>
            <div>
              <p className="font-semibold">適切な分割</p>
              <p className="text-muted-foreground">
                コンポーネントや機能は適切なサイズに分割し、メンテナンス性を向上させます。
              </p>
            </div>
          </li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/intro/installation">
            前のページ
          </Link>
        </Button>
        <Button asChild>
          <Link href="/basics/routing">
            ページとルーティングを学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}