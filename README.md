# kadai04
## Notion APIを利用したアプリ

## ①課題内容（どんな作品か）
- Notion APIを使って、Notionに議事録を簡単に送れるアプリ
- npm, Node.jsを利用して実装しました

## 操作手順
- ターミナルでnpm run devStartとコマンドを打って、サーバーを起動させる
- localhost:3000 を開く
- タイトル、日付、Agenda、Todo、Decisionを記入する
- Send To Notionボタンをクリックする
- 別途記載するリンク先のNotionのページに議事録として追加されていることを確認する
- Titleがページとなっており、Open Pageとすると、Agenda, Todo, Decisionの内容が確認できる

## ②工夫した点・こだわった点
- Notionにデータを送るため、Notion Javascript用のnpmの導入を行ないました<br>
　　　　https://developers.notion.com/<br>
- YouTubeの動画を参考にしながら最終的には、動画では触れられていないblocksの送信を行える様にしています<br>
  https://youtu.be/zVfVLBjQuSA <br>
  
③質問・疑問（あれば）

- 本当は先週の課題にNotionを実装したかったのですが、<br>
  LocalhostやNode.jsなどのキャッチアップに手間取り、<br>
  Notionにシンプルに送るだけの実装になりました。<br>
- npm, Node.js, expressフレームワークと知らないことだらけでしたが、PHPを前に勉強になりました
  
