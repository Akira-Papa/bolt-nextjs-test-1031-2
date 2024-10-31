import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Code2, Rocket, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Next.js完全解説ガイド
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          日本人開発者のための詳細なNext.jsドキュメント。
          基礎から実践まで、現場で使える知識を徹底解説します。
        </p>
        <div className="flex gap-4">
          <Button size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            ドキュメントを読む
          </Button>
          <Button size="lg" variant="outline">
            <Code2 className="mr-2 h-5 w-5" />
            チュートリアルを始める
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Rocket className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">はじめての方へ</h3>
            <p className="mt-2 text-muted-foreground">
              Next.jsの基本概念から、環境構築、最初のアプリケーション作成まで丁寧に解説します。
            </p>
          </Card>
          <Card className="p-6">
            <Code2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">実践ガイド</h3>
            <p className="mt-2 text-muted-foreground">
              ルーティング、データフェッチング、最適化など、実践的な開発テクニックを学びます。
            </p>
          </Card>
          <Card className="p-6">
            <Sparkles className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">プロの技</h3>
            <p className="mt-2 text-muted-foreground">
              パフォーマンス最適化、セキュリティ対策など、現場で使える高度なテクニックを解説。
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}