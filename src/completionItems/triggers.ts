import { CompletionItemKind, SnippetString, MarkdownString } from 'vscode';

interface triggerCompletionData {
    label: string,
    kind: CompletionItemKind,
    insertText: SnippetString,
    documentation: MarkdownString
    detail?: string | undefined
};

export const triggerCompletionItems: triggerCompletionData[] = [
    {
        label: 'Abs',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Abs($1)'),
        documentation: new MarkdownString('nの絶対値を返します。'),
        detail: 'Abs(n)'
    },{
        label: 'Acos',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Acos($1)'),
        documentation: new MarkdownString('ラジアンの逆余弦を返します。'),
        detail: 'Acos(ラジアン)'
    },{
        label: 'Alive',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Alive'),
        documentation: new MarkdownString('生死判定を返します。')
    },{
        label: 'Anim',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Anim'),
        documentation: new MarkdownString('現在のアニメ番号を返します。')
    },{
        label: 'AnimElem =',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('AnimElem = $1'),
        documentation: new MarkdownString('現在のアニメのコマを判断します。'),
        detail: 'AnimElem = 値'
    },{
        label: 'AnimElem =, =',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('AnimElem = $1, = $2'),
        documentation: new MarkdownString('現在のアニメのコマとその経過時間を判断します。'),
        detail: 'AnimElem = 値1, = 値2'
    },{
        label: 'AnimElemNo',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('AnimElemNo($1)'),
        documentation: new MarkdownString('現在のアニメのnフレーム後のコマを返します。'),
        detail: 'AnimElemNo(n)'
    },{
        label: 'AnimElemTime',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('AnimElemTime($1)'),
        documentation: new MarkdownString('現在のアニメがnコマ目になってからの経過時間を返します。'),
        detail: 'AnimElemTime(n)'
    },{
        label: 'AnimExist',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('AnimExist($1)'),
        documentation: new MarkdownString('指定したアニメが存在するかどうかを返します。'),
        detail: 'AnimExist(値)'
    },{
        label: 'AnimTime',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('AnimTime'),
        documentation: new MarkdownString('現在のアニメが残り何フレームで終了するかを返します。')
    },{
        label: 'Asin',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Asin($1)'),
        documentation: new MarkdownString('ラジアンの逆正弦を返します。'),
        detail: 'Asin(ラジアン)'
    },{
        label: 'Atan',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Atan($1)'),
        documentation: new MarkdownString('ラジアンの逆正接を返します。'),
        detail: 'Atan(ラジアン)'
    },{
        label: 'AuthorName = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('AuthorName = "$1"'),
        documentation: new MarkdownString('defファイルで設定したAuthorNameを判定し、真偽を返します。'),
        detail: 'AuthorName = "作者名"'
    },{
        label: 'BackEdgeBodyDist',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('BackEdgeBodyDist'),
        documentation: new MarkdownString('プレイヤーの背面から、背面側の画面端までの距離を返します。')
    },{
        label: 'BackEdgeDist',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('BackEdgeDist'),
        documentation: new MarkdownString('プレイヤーの中心軸から、後ろ側の画面端までの距離を返します。')
    },{
        label: 'CanRecover',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('CanRecover'),
        documentation: new MarkdownString('プレイヤーが空中受身を取れるかどうかを返します。')
    },{
        label: 'Ceil',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Ceil($1)'),
        documentation: new MarkdownString('nの小数点以下を切り上げた結果を返します。'),
        detail: 'Ceil(n)'
    },{
        label: 'Command = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('Command = "$1"'),
        documentation: new MarkdownString('cmdファイルで設定したコマンド名を判定し、真偽を返します。'),
        detail: 'Command = "コマンド名"'
    },{
        label: 'Const',
        kind: CompletionItemKind.Constant,
        insertText: new SnippetString('Const(${1|Data.Life,Data.Attack,Data.Defence,Data.Fall.Defence_Mul,Data.Liedown.Time,Data.AirJuggle,Data.SparkNo,Data.Guard.SparkNo,Data.KO.Echo,Data.IntPersistIndex,Data.FloatPersistIndex,Size.XScale,Size.YScale,Size.Ground.Back,Size.Ground.Front,Size.Air.Back,Size.Air.Front,Size.Height,Size.Attack.Dist,Size.Proj.Attack.Dist,Size.Proj.Doscale,Size.Head.Pos.X,Size.Head.Pos.Y,Size.Mid.Pos.X,Size.Mid.Pos.Y,Size.Shadowoffset,Size.Draw.offset.Y,Size.Draw.offset.X,Velocity.Walk.Fwd.X,Velocity.Walk.Back.X,Velocity.Run.Fwd.X,Velocity.Run.Fwd.Y,Velocity.Run.Back.X,Velocity.Run.Back.Y,Velocity.Jump.Y,Velocity.Jump.Neu.X,Velocity.Jump.Back.X,Velocity.Jump.Fwd.X,Velocity.Runjumo.Back.X,Velocity.Runjumo.Fwd.X,Velocity.AirJump.Y,Velocity.AirJump.Neu.X,Velocity.AirJump.Back.X,Velocity.AirJump.Fwd.X,Movement.Airjump.Num,Movement.AirJump.Height,Movement.YAccel,Movement.Stand.Friction,Movement.Crouch.Friction|})'),
        documentation: new MarkdownString('cnsファイルの[Data]で設定した各種定数を返します。'),
        detail: 'Const(定数)'
    },{
        label: 'Cos',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Cos($1)'),
        documentation: new MarkdownString('ラジアンの余弦を返します。'),
        detail: 'Cos(ラジアン)'
    },{
        label: 'Ctrl',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Ctrl'),
        documentation: new MarkdownString('プレイヤーのコントロールフラグを返します。')
    },{
        label: 'DrawGame',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('DrawGame'),
        documentation: new MarkdownString('ラウンドで引き分けたかどうかを返します。')
    },{
        label: 'E',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('E'),
        documentation: new MarkdownString('ネイピア数eを返します。')
    },{
        label: 'Exp',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Exp($1)'),
        documentation: new MarkdownString('ネイピア数eのn乗を返します。'),
        detail: 'Exp(n)'
    },{
        label: 'FVar',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('FVar($1)'),
        documentation: new MarkdownString('小数変数FVarの値を返します。'),
        detail: 'FVar(変数番号)'
    },{
        label: 'FVar :=',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('FVar($1) := $2'),
        documentation: new MarkdownString('小数変数FVarに値を代入します。'),
        detail: 'FVar(変数番号) := 代入したい値'
    },{
        label: 'Facing',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Facing'),
        documentation: new MarkdownString('プレイヤーの向きを返します。')
    },{
        label: 'Floor',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Floor($1)'),
        documentation: new MarkdownString('nの小数点以下を切り捨てた結果を返します。'),
        detail: 'Floor(n)'
    },{
        label: 'FrontEdgeBodyDist',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('FrontEdgeBodyDist'),
        documentation: new MarkdownString('プレイヤー前面の当たり判定から、前方の画面端までの距離を返します。')
    },{
        label: 'FrontEdgeDist',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('FrontEdgeDist'),
        documentation: new MarkdownString('プレイヤーの中心軸から、前面の画面端までの距離を返します。')
    },{
        label: 'GameTime',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('GameTime'),
        documentation: new MarkdownString('ゲームの経過時間を返します。')
    },{
        label: 'GetHitVar',
        kind: CompletionItemKind.Constant,
        insertText: new SnippetString('GetHitVar(${1|AnimType,GroundType,AirType,Damage,HitShakeTime,HitTime,HitShakeTime,SlideTime,CtrlTime,RecoverTime,HitCount,FallCount,XVel,YVel,YAccel,Fall,Fall.Damage,Fall.XVel,Fall.YVel,Fall.Recover,Fall.RecoverTime,ChainID,Guarded,IsBound,XVelAdd,YVelAdd,Type,XOff,YOff,ZOff,Fall.Kill,Fall.Envshake.Time,Fall.Envshake.Freq,Fall.Envshake.Ampl,Fall.Envshake.Phase|})'),
        documentation: new MarkdownString('受けた攻撃に関する情報を参照します。'),
        detail: 'GetHitVar(定数)'
    },{
        label: 'HitCount',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitCount'),
        documentation: new MarkdownString('そのステート内でのヒット数を返します。')
    },{
        label: 'HitDefAttr = ,',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('HitDefAttr = $1, $2'),
        documentation: new MarkdownString('HitDefコントローラのAttrの値を判定します。'),
        detail: 'HitDefAttr = 値1, 値2'
    },{
        label: 'HitFall',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitFall'),
        documentation: new MarkdownString('落下やられ状態にあるかどうかを返します。')
    },{
        label: 'HitOver',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitOver'),
        documentation: new MarkdownString('攻撃を受けてHitTimeが0になったかどうかを返します。')
    },{
        label: 'HitPauseTime',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitPauseTime'),
        documentation: new MarkdownString('攻撃がヒットしたときの停止時間が終了するまでの時間を返します。')
    },{
        label: 'HitShakeOver',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitShakeOver'),
        documentation: new MarkdownString('攻撃を受けてヒットシェイクが終了したかどうかを返します。')
    },{
        label: 'HitVel X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitVel X'),
        documentation: new MarkdownString('攻撃を受けたときのX速度を取得します。')
    },{
        label: 'HitVel Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('HitVel Y'),
        documentation: new MarkdownString('攻撃を受けたときのY速度を取得します。')
    },{
        label: 'ID',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('ID'),
        documentation: new MarkdownString('プレイヤーIDを返します。')
    },{
        label: 'IfElse',
        kind: CompletionItemKind.Class,
        insertText: new SnippetString('IfElse($1, $2, $3)'),
        documentation: new MarkdownString('条件式の真偽に合わせた結果を返します。'),
        detail: 'IfElse(条件式, 真のときの処理, 偽のときの処理)'
    },{
        label: 'InGuardDist',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('InGuardDist'),
        documentation: new MarkdownString('相手の攻撃、または相手の飛び道具のガード範囲内にいるかどうかを返します。')
    },{
        label: 'IsHelper',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('IsHelper'),
        documentation: new MarkdownString('ヘルパーかどうかを返します。')
    },{
        label: 'IsHelper()',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('IsHelper($1)'),
        documentation: new MarkdownString('指定したIDのヘルパーかどうかを返します。'),
        detail: 'IsHelper(HelperのID)'
    },{
        label: 'IsHomeTeam',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('IsHomeTeam'),
        documentation: new MarkdownString('プレイヤーのチームがホームチームかどうかを返します。')
    },{
        label: 'Life',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Life'),
        documentation: new MarkdownString('現在のライフを返します。')
    },{
        label: 'LifeMax',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('LifeMax'),
        documentation: new MarkdownString('ライフの最大値を返します。')
    },{
        label: 'Ln',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Ln($1)'),
        documentation: new MarkdownString('nの自然対数を返します。'),
        detail: 'Ln(n)'
    },{
        label: 'Log',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Log($1, $2)'),
        documentation: new MarkdownString('mを底としたnの対数を返します。'),
        detail: 'Log(m, n)'
    },{
        label: 'Lose',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Lose'),
        documentation: new MarkdownString('ラウンドで敗北したかどうかを返します。')
    },{
        label: 'LoseKO',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('LoseKO'),
        documentation: new MarkdownString('ラウンドをKOで敗北したかどうかを返します。')
    },{
        label: 'LoseTime',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('LoseTime'),
        documentation: new MarkdownString('ラウンドをタイムオーバーで敗北したかどうかを返します。')
    },{
        label: 'MatchNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MatchNo'),
        documentation: new MarkdownString('現在の試合数を返します。')
    },{
        label: 'MatchOver',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MatchOver'),
        documentation: new MarkdownString('試合で決着がついたかどうかを返します。')
    },{
        label: 'MoveContact',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MoveContact'),
        documentation: new MarkdownString('攻撃が接触したかどうかを返します。')
    },{
        label: 'MoveGuarded',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MoveGuarded'),
        documentation: new MarkdownString('攻撃がガードされたかどうかを返します。')
    },{
        label: 'MoveHit',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MoveHit'),
        documentation: new MarkdownString('攻撃がヒットしたかどうかを返します。')
    },{
        label: 'MoveReversed',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('MoveReversed'),
        documentation: new MarkdownString('攻撃が相手のReversalDefに取られたかどうかを返します。')
    },{
        label: 'MoveType = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('MoveType = $1'),
        documentation: new MarkdownString('現在のMoveTypeを判定し、真偽を返します。'),
        detail: 'MoveType = 動作型'
    },{
        label: 'Name = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('Name = "$1"'),
        documentation: new MarkdownString('defファイルで設定したNameを判定し、真偽を返します。'),
        detail: 'Name = "名前"'
    },{
        label: 'NumEnemy',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumEnemy'),
        documentation: new MarkdownString('現在の相手の数を返します。')
    },{
        label: 'NumExplod',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumExplod'),
        documentation: new MarkdownString('出現しているExplodの数を返します。')
    },{
        label: 'NumExplod()',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('NumExplod($1)'),
        documentation: new MarkdownString('出現している指定したIDのExplodの数を返します。'),
        detail: 'NumExplod(ExplodのID)'
    },{
        label: 'NumHelper',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumHelper'),
        documentation: new MarkdownString('プレイヤーが出現させているHelperの数を返します。')
    },{
        label: 'NumHelper()',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('NumHelper($1)'),
        documentation: new MarkdownString('プレイヤーが出現させている指定したIDのHelperの数を返します。'),
        detail: 'NumHelper(HelperのID)'
    },{
        label: 'NumPartner',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumPartner'),
        documentation: new MarkdownString('現在のパートナー数を返します。')
    },{
        label: 'NumProj',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumProj'),
        documentation: new MarkdownString('プレイヤーが出現させているProjectileの数を返します。')
    },{
        label: 'NumProjID',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('NumProjID($1)'),
        documentation: new MarkdownString('プレイヤーが出現させている指定したIDのProjectileの数を返します。'),
        detail: 'NumProjID(ProjectileのID)'
    },{
        label: 'NumTarget',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('NumTarget'),
        documentation: new MarkdownString('プレイヤーのターゲットの数を返します。')
    },{
        label: 'NumTarget()',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('NumTarget($1)'),
        documentation: new MarkdownString('プレイヤーの指定したヒットIDのターゲットの数を返します。'),
        detail: 'NumTarget(ヒットID)'
    },{
        label: 'P1Name = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P1Name = "$1"'),
        documentation: new MarkdownString('プレイヤーのnameを判定し、真偽を返します。'),
        detail: 'P1Name = "名前"'
    },{
        label: 'P2Name = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P2Name = "$1"'),
        documentation: new MarkdownString('プレイヤーの最初の相手のnameを判定し、真偽を返します。'),
        detail: 'P2Name = "名前"'
    },{
        label: 'P3Name = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P3Name = "$1"'),
        documentation: new MarkdownString('プレイヤーにチームメイトがいる場合、そのnameを判定し真偽を返します。'),
        detail: 'P3Name = "名前"'
    },{
        label: 'P4Name = ""',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P4Name = "$1"'),
        documentation: new MarkdownString('プレイヤーの2番目の相手のnameを判定し、真偽を返します。'),
        detail: 'P4Name = "名前"'
    },{
        label: 'P2BodyDist X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2BodyDist X'),
        documentation: new MarkdownString('プレイヤーからP2までの当たり判定同士のX方向の距離を返します。')
    },{
        label: 'P2BodyDist Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2BodyDist Y'),
        documentation: new MarkdownString('プレイヤーからP2までの当たり判定同士のY方向の距離を返します。')
    },{
        label: 'P2Dist X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2Dist X'),
        documentation: new MarkdownString('プレイヤーの中心軸からP2までのX方向の距離を返します。')
    },{
        label: 'P2Dist Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2Dist Y'),
        documentation: new MarkdownString('プレイヤーの中心軸からP2までのY方向の距離を返します。')
    },{
        label: 'P2Life',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2Life'),
        documentation: new MarkdownString('P2の現在のライフを返します。')
    },{
        label: 'P2MoveType = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P2MoveType = $1'),
        documentation: new MarkdownString('P2の現在のMoveTypeを判定し、真偽を返します。'),
        detail: 'P2MoveType = 動作型'
    },{
        label: 'P2StateNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('P2StateNo'),
        documentation: new MarkdownString('P2の現在のステート番号を返します。')
    },{
        label: 'P2StateType = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('P2StateType = $1'),
        documentation: new MarkdownString('P2の現在のStateTypeを判定し、真偽を返します。'),
        detail: 'P2StateType = 状態型'
    },{
        label: 'PalNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('PalNo'),
        documentation: new MarkdownString('プレイヤーのパレット番号を返します。')
    },{
        label: 'ParentDist X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('ParentDist X'),
        documentation: new MarkdownString('ヘルパーの親までのX方向の距離を返します。')
    },{
        label: 'ParentDist Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('ParentDist Y'),
        documentation: new MarkdownString('ヘルパーの親までのY方向の距離を返します。')
    },{
        label: 'PI',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('PI'),
        documentation: new MarkdownString('円周率を返します。')
    },{
        label: 'PlayerIDExist',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('PlayerIDExist($1)'),
        documentation: new MarkdownString('指定したIDのプレイヤーが存在するかどうかを返します。'),
        detail: 'PlayerIDExist(プレイヤーID)'
    },{
        label: 'Pos X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Pos X'),
        documentation: new MarkdownString('プレイヤーのX座標を返します。')
    },{
        label: 'Pos Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Pos Y'),
        documentation: new MarkdownString('プレイヤーのY座標を返します。')
    },{
        label: 'Power',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Power'),
        documentation: new MarkdownString('現在のパワーゲージ量を返します。')
    },{
        label: 'PowerMax',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('PowerMax'),
        documentation: new MarkdownString('パワーゲージの最大量を返します。')
    },{
        label: 'PrevStateNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('PrevStateNo'),
        documentation: new MarkdownString('直前のステート番号を返します。')
    },{
        label: 'ProjCancelTime',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('ProjCancelTime(${1:0})'),
        documentation: new MarkdownString('指定したIDのProjectileが相殺されてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        detail: 'ProjCancelTime(ProjectileのID)'
    },{
        label: 'ProjContact = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjContact${1:0} = $2'),
        documentation: new MarkdownString('指定したIDのProjectileが相手に接触したかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjContact[ProjectileのID] = 接触フラグ'
    },{
        label: 'ProjContact = , =',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjContact${1:0} = $2, = $3'),
        documentation: new MarkdownString('指定したIDのProjectileが相手に接触したかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjContact[ProjectileのID] = 接触フラグ, = 時間'
    },{
        label: 'ProjContactTime',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('ProjContactTime(${1:0})'),
        documentation: new MarkdownString('指定したIDのProjectileが相手に接触してからの時間を返します。IDを指定しない場合、0を引数にします。'),
        detail: 'ProjContactTime(ProjectileのID)'
    },{
        label: 'ProjGuarded = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjGuarded${1:0} = $2'),
        documentation: new MarkdownString('指定したIDのProjectileがガードされたかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjGuarded[ProjectileのID] = ガードフラグ'
    },{
        label: 'ProjGuarded = , =',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjGuarded${1:0} = $2, = $3'),
        documentation: new MarkdownString('指定したIDのProjectileがガードされたかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjGuarded[ProjectileのID] = ガードフラグ, = 時間'
    },{
        label: 'ProjGuardedTime',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('ProjGuardedTime(${1:0})'),
        documentation: new MarkdownString('指定したIDのProjectileがガードされてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        detail: 'ProjGuardedTime(ProjectileのID)'
    },{
        label: 'ProjHit = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjHit${1:0} = $2'),
        documentation: new MarkdownString('指定したIDのProjectileがヒットしたかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjHit[ProjectileのID] = ヒットフラグ'
    },{
        label: 'ProjHit = , =',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('ProjHit${1:0} = $2, = $3'),
        documentation: new MarkdownString('指定したIDのProjectileがヒットしたかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        detail: 'ProjHit[ProjectileのID] = ヒットフラグ, = 時間'
    },{
        label: 'ProjHitTime',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('ProjHitTime(${1:0})'),
        documentation: new MarkdownString('指定したIDのProjectileがヒットしてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        detail: 'ProjHitTime(ProjectileのID)'
    },{
        label: 'Random',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Random'),
        documentation: new MarkdownString('0から999までの乱数を返します。')
    },{
        label: 'RootDist X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('RootDist X'),
        documentation: new MarkdownString('ヘルパーのルートまでのX方向の距離を返します。')
    },{
        label: 'RootDist Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('RootDist Y'),
        documentation: new MarkdownString('ヘルパーのルートまでのY方向の距離を返します。')
    },{
        label: 'RoundNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('RoundNo'),
        documentation: new MarkdownString('現在のラウンド数を返します。')
    },{
        label: 'RoundState',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('RoundState'),
        documentation: new MarkdownString('現在のラウンドの状態を返します。')
    },{
        label: 'RoundsExisted',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('RoundsExisted'),
        documentation: new MarkdownString('プレイヤーが存在していたラウンドの数を返します。')
    },{
        label: 'ScreenPos X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('ScreenPos X'),
        documentation: new MarkdownString('プレイヤーの画面上でのXの絶対座標を返します。')
    },{
        label: 'ScreenPos Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('ScreenPos Y'),
        documentation: new MarkdownString('プレイヤーの画面上でのYの絶対座標を返します。')
    },{
        label: 'SelfAnimExist',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('SelfAnimExist($1)'),
        documentation: new MarkdownString('指定したアニメが存在するかどうかを返します。AnimExistと異なり、相手に参照させるステートで実行した場合、相手のアニメを返します。'),
        detail: 'SelfAnimExist(値)'
    },{
        label: 'Sin',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Sin($1)'),
        documentation: new MarkdownString('ラジアンの正弦を返します。'),
        detail: 'Sin(ラジアン)'
    },{
        label: 'StandBy',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('StandBy'),
        documentation: new MarkdownString('TagOutが使用されたかどうかを返します。')
    },{
        label: 'StateNo',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('StateNo'),
        documentation: new MarkdownString('現在のステート番号を返します。')
    },{
        label: 'StateType = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('StateType = $1'),
        documentation: new MarkdownString('現在のStateTypeを判定し、真偽を返します。'),
        detail: 'StateType = 状態型'
    },{
        label: 'SysFVar',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('SysFVar($1)'),
        documentation: new MarkdownString('システムの小数変数SysFVarの値を返します。'),
        detail: 'SysFVar(変数番号)'
    },{
        label: 'SysVar',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('SysVar($1)'),
        documentation: new MarkdownString('システムの変数SysVarの値を返します。'),
        detail: 'SysVar(変数番号)'
    },{
        label: 'Tan',
        kind: CompletionItemKind.Function,
        insertText: new SnippetString('Tan($1)'),
        documentation: new MarkdownString('ラジアンの正接を返します。'),
        detail: 'Tan(ラジアン)'
    },{
        label: 'TeamMode = ',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('TeamMode = $1'),
        documentation: new MarkdownString('現在のチームモードを判定し、真偽を返します。'),
        detail: 'TeamMode = チームモード'
    },{
        label: 'TeamSide',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('TeamSide'),
        documentation: new MarkdownString('プレイヤーが所属するチームを返します。')
    },{
        label: 'TicksPerSecond',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('TicksPerSecond'),
        documentation: new MarkdownString('1秒あたりのフレーム数を返します。')
    },{
        label: 'Time',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Time'),
        documentation: new MarkdownString('現在のステートでの経過時間を返します')
    },{
        label: 'TimeMod = ,',
        kind: CompletionItemKind.Field,
        insertText: new SnippetString('TimeMod = $1, $2'),
        documentation: new MarkdownString('Timeの剰余計算を比較した結果を返します。'),
        detail: 'TimeMod = 除数, 剰余'
    },{
        label: 'UniqHitCount',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('UniqHitCount'),
        documentation: new MarkdownString('そのステート内でのヒット数を返します。HitCountと異なり、複数の相手にヒットした場合、各相手へのヒット数も加算されます。')
    },{
        label: 'Var',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('Var($1)'),
        documentation: new MarkdownString('変数Varの値を返します。'),
        detail: 'Var(変数番号)'
    },{
        label: 'Var :=',
        kind: CompletionItemKind.Variable,
        insertText: new SnippetString('Var($1) := $2'),
        documentation: new MarkdownString('変数Varに値を代入します。'),
        detail: 'Var(変数番号) := 代入したい値'
    },{
        label: 'Vel X',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Vel X'),
        documentation: new MarkdownString('プレイヤーのX方向の速度を返します。')
    },{
        label: 'Vel Y',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Vel Y'),
        documentation: new MarkdownString('プレイヤーのY方向の速度を返します。')
    },{
        label: 'Win',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('Win'),
        documentation: new MarkdownString('ラウンドで勝利したかどうかを返します。')
    },{
        label: 'WinKO',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('WinKO'),
        documentation: new MarkdownString('ラウンドをKOで勝利したかどうかを返します。')
    },{
        label: 'WinPerfect',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('WinPerfect'),
        documentation: new MarkdownString('ラウンドをKOかつライフ全快で勝利したかどうかを返します。')
    },{
        label: 'WinTime',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString('WinTime'),
        documentation: new MarkdownString('ラウンドをタイムオーバーで勝利したかどうかを返します。')
    }
];