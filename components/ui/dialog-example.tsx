"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ダイアログを開く</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* DialogTitleは必須 - スクリーンリーダーのアクセシビリティのため */}
          <DialogTitle>ダイアログのタイトル</DialogTitle>
          <DialogDescription>
            ダイアログの説明文をここに記述します。
          </DialogDescription>
        </DialogHeader>
        {/* ダイアログの主要なコンテンツ */}
        <div className="py-4">
          <p>ダイアログの内容</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}