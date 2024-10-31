"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Server, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function WhatIsNextJs() {
  return (
    <article className="container mx-auto prose prose-slate dark:prose-invert max-w-none">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Next.jsとは</h1>
        <p className="text-lg text-muted-foreground">
          Next.jsは、Reactベースのフルスタックフレームワークです。
          モダンなウェブアプリケーション開発に必要な機能が全て揃っています。
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Server className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-xl mb-2">ハイブリッドレンダリング</h3>
          <p className="text-muted-foreground">
            静的生成（SSG）とサーバーサイドレンダリング（SSR）を柔軟に組み合わせ、
            最適なパフォーマンスを実現します。
          </p>
        </Card>

        <Card className="p-6">
          <Globe className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-xl mb-2">ファイルベースルーティング</h3>
          <p className="text-muted-foreground">
            ファイルシステムに基づく直感的なルーティング。
            複雑な設定なしでページを追加できます。
          </p>
        </Card>

        <Card className="p-6">
          <Zap className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-xl mb-2">自動最適化</h3>
          <p className="text-muted-foreground">
            画像、フォント、スクリプトの自動最適化により、
            優れたユーザー体験を提供します。
          </p>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">主な特徴</h2>
        <ul className="space-y-4 list-none pl-0">
          <li className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                1
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Zero Config</h3>
              <p className="text-muted-foreground">
                自動コンパイル、バンドリング、最適化。面倒な設定は不要です。
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                2
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">TypeScriptサポート</h3>
              <p className="text-muted-foreground">
                ビルトインのTypeScriptサポートで、型安全な開発が可能です。
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="mr-4 mt-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                3
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1">APIルート</h3>
              <p className="text-muted-foreground">
                サーバーレス関数としてAPIエンドポイントを簡単に作成できます。
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Next.jsを選ぶ理由</h2>
        <div className="prose max-w-none">
          <p>
            Next.jsは、Reactの柔軟性とサーバーサイドレンダリングの利点を組み合わせた
            フレームワークです。以下の開発者に特に適しています：
          </p>
          <ul>
            <li>パフォーマンスを重視するプロジェクトを開発したい方</li>
            <li>SEOを意識したウェブアプリケーションを作りたい方</li>
            <li>大規模なアプリケーションの開発を予定している方</li>
            <li>モダンな開発体験を求めている方</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-end">
        <Button asChild>
          <Link href="/intro/installation">
            インストール方法を学ぶ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}