# M.U.G.E.N coding supporter

MUGENでキャラ制作をする際に使われるdef, cmd, cns, stファイルの編集を手助けする拡張機能です。

## 機能

以下の機能を実装しています。
* シンタックスハイライト
* コードスニペット
* StateDefの折り畳み
* StateDefのアウトライン表示
* StateDefの定義、および参照へ移動
* Nullステートコントローラーの自動生成

### **シンタックスハイライト**

![シンタックスハイライト](images/Syntax%20Highlight.png)

StateDefやTrigger、文字列、演算子などに色をつけます。

### **コードスニペット**
![コードスニペット](images/Code%20Snippet.gif)

記述の一部を自動的に補完します。

### **StateDefの折り畳み**
![StateDef折り畳み](images/StateDef%20Folding.gif)

StateDefを折り畳んで、必要なStateDefのみ表示させることができます。

### **StateDefのアウトライン表示**
![StateDefアウトライン](images/StateDef%20Outline.png)

開かれているファイル内で定義されているStateDefやステートコントローラーをツリー表示します。

### **StateDefの定義、および参照へ移動**
![StateDefの定義、参照へ移動](images/Go%20to%20Definition%20Reference.gif)

StateNo=XXXやChangeState、SelfStateなどで指定されたステート番号から該当StateDefへ移動したり、そのStateDefを参照しているステートコントローラーへ移動することができます。
ただし、StateNo=var(0)など、整数値でない場合は移動できません。

### **Nullステートコントローラーの自動生成**
![Nullステコン自動生成](images/Generate%20Null.gif)
![生成されたNullステコン](images/Null%20StateControllers.png)

コマンドパレット(`Ctrl+Shift+P`)から、**'Generate Null States'**
を実行すると、指定された数のNullステコンを自動生成できます。

---

## 更新履歴

### 1.0.0

初公開
