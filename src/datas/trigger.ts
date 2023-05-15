import * as vscode from 'vscode';
import { Data } from '../datas';

export const triggerData: Data[] = [
    {
        label: 'Abs',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('nの絶対値を返します。'),
        snippet: new vscode.SnippetString('Abs($1)'),
        detail: 'Abs(n)'
    },
	{
        label: 'Acos',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの逆余弦を返します。'),
        snippet: new vscode.SnippetString('Acos($1)'),
        detail: 'Acos(ラジアン)'
    },
	{
        label: 'Alive',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('生死判定を返します。'),
        snippet: new vscode.SnippetString('Alive'),
        detail: 'Alive'
    },
	{
        label: 'Anim',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のアニメ番号を返します。'),
        snippet: new vscode.SnippetString('Anim'),
        detail: 'Anim'
    },
	{
        label: 'AnimElem =',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('現在のアニメのコマを判断します。'),
        snippet: new vscode.SnippetString('AnimElem = $1'),
        detail: 'AnimElem = 値'
    },
	{
        label: 'AnimElem =, =',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('現在のアニメのコマとその経過時間を判断します。'),
        snippet: new vscode.SnippetString('AnimElem = $1, = $2'),
        detail: 'AnimElem = 値1, = 値2'
    },
	{
        label: 'AnimElemNo',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('現在のアニメのnフレーム後のコマを返します。'),
        snippet: new vscode.SnippetString('AnimElemNo($1)'),
        detail: 'AnimElemNo(n)'
    },
	{
        label: 'AnimElemTime',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('現在のアニメがnコマ目になってからの経過時間を返します。'),
        snippet: new vscode.SnippetString('AnimElemTime($1)'),
        detail: 'AnimElemTime(n)'
    },
	{
        label: 'AnimExist',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したアニメが存在するかどうかを返します。'),
        snippet: new vscode.SnippetString('AnimExist($1)'),
        detail: 'AnimExist(値)'
    },
	{
        label: 'AnimTime',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のアニメが残り何フレームで終了するかを返します。'),
        snippet: new vscode.SnippetString('AnimTime'),
        detail: 'AnimTime'
    },
	{
        label: 'Asin',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの逆正弦を返します。'),
        snippet: new vscode.SnippetString('Asin($1)'),
        detail: 'Asin(ラジアン)'
    },
	{
        label: 'Atan',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの逆正接を返します。'),
        snippet: new vscode.SnippetString('Atan($1)'),
        detail: 'Atan(ラジアン)'
    },
	{
        label: 'AuthorName = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('defファイルで設定したAuthorNameを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('AuthorName = "$1"'),
        detail: 'AuthorName = "作者名"'
    },
	{
        label: 'BackEdgeBodyDist',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの背面から、背面側の画面端までの距離を返します。'),
        snippet: new vscode.SnippetString('BackEdgeBodyDist'),
        detail: 'BackEdgeBodyDist'
    },
	{
        label: 'BackEdgeDist',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの中心軸から、後ろ側の画面端までの距離を返します。'),
        snippet: new vscode.SnippetString('BackEdgeDist'),
        detail: 'BackEdgeDist'
    },
	{
        label: 'CanRecover',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーが空中受身を取れるかどうかを返します。'),
        snippet: new vscode.SnippetString('CanRecover'),
        detail: 'CanRecover'
    },
	{
        label: 'Ceil',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('nの小数点以下を切り上げた結果を返します。'),
        snippet: new vscode.SnippetString('Ceil($1)'),
        detail: 'Ceil(n)'
    },
	{
        label: 'Command = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('cmdファイルで設定したコマンド名を判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('Command = "$1"'),
        detail: 'Command = "コマンド名"'
    },
	{
        label: 'Const',
        kind: vscode.CompletionItemKind.Constant,
        description: new vscode.MarkdownString('cnsファイルの[Data]で設定した各種定数を返します。'),
        snippet: new vscode.SnippetString('Const(${1|Data.Life,Data.Attack,Data.Defence,Data.Fall.Defence_Mul,Data.Liedown.Time,Data.AirJuggle,Data.SparkNo,Data.Guard.SparkNo,Data.KO.Echo,Data.IntPersistIndex,Data.FloatPersistIndex,Size.XScale,Size.YScale,Size.Ground.Back,Size.Ground.Front,Size.Air.Back,Size.Air.Front,Size.Height,Size.Attack.Dist,Size.Proj.Attack.Dist,Size.Proj.Doscale,Size.Head.Pos.X,Size.Head.Pos.Y,Size.Mid.Pos.X,Size.Mid.Pos.Y,Size.Shadowoffset,Size.Draw.offset.Y,Size.Draw.offset.X,Velocity.Walk.Fwd.X,Velocity.Walk.Back.X,Velocity.Run.Fwd.X,Velocity.Run.Fwd.Y,Velocity.Run.Back.X,Velocity.Run.Back.Y,Velocity.Jump.Y,Velocity.Jump.Neu.X,Velocity.Jump.Back.X,Velocity.Jump.Fwd.X,Velocity.Runjumo.Back.X,Velocity.Runjumo.Fwd.X,Velocity.AirJump.Y,Velocity.AirJump.Neu.X,Velocity.AirJump.Back.X,Velocity.AirJump.Fwd.X,Movement.Airjump.Num,Movement.AirJump.Height,Movement.YAccel,Movement.Stand.Friction,Movement.Crouch.Friction|})'),
        detail: 'Const(定数)'
    },
	{
        label: 'Cos',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの余弦を返します。'),
        snippet: new vscode.SnippetString('Cos($1)'),
        detail: 'Cos(ラジアン)'
    },
	{
        label: 'Ctrl',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのコントロールフラグを返します。'),
        snippet: new vscode.SnippetString('Ctrl'),
        detail: 'Ctrl'
    },
	{
        label: 'DrawGame',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドで引き分けたかどうかを返します。'),
        snippet: new vscode.SnippetString('DrawGame'),
        detail: 'DrawGame'
    },
	{
        label: 'E',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ネイピア数eを返します。'),
        snippet: new vscode.SnippetString('E'),
        detail: 'E'
    },
	{
        label: 'Exp',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ネイピア数eのn乗を返します。'),
        snippet: new vscode.SnippetString('Exp($1)'),
        detail: 'Exp(n)'
    },
	{
        label: 'FVar',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('小数変数FVarの値を返します。'),
        snippet: new vscode.SnippetString('FVar($1)'),
        detail: 'FVar(変数番号)'
    },
	{
        label: 'FVar :=',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('小数変数FVarに値を代入します。'),
        snippet: new vscode.SnippetString('FVar($1) := $2'),
        detail: 'FVar(変数番号) := 代入したい値'
    },
	{
        label: 'Facing',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの向きを返します。'),
        snippet: new vscode.SnippetString('Facing'),
        detail: 'Facing'
    },
	{
        label: 'Floor',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('nの小数点以下を切り捨てた結果を返します。'),
        snippet: new vscode.SnippetString('Floor($1)'),
        detail: 'Floor(n)'
    },
	{
        label: 'FrontEdgeBodyDist',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤー前面の当たり判定から、前方の画面端までの距離を返します。'),
        snippet: new vscode.SnippetString('FrontEdgeBodyDist'),
        detail: 'FrontEdgeBodyDist'
    },
	{
        label: 'FrontEdgeDist',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの中心軸から、前面の画面端までの距離を返します。'),
        snippet: new vscode.SnippetString('FrontEdgeDist'),
        detail: 'FrontEdgeDist'
    },
	{
        label: 'GameTime',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ゲームの経過時間を返します。'),
        snippet: new vscode.SnippetString('GameTime'),
        detail: 'GameTime'
    },
	{
        label: 'GetHitVar',
        kind: vscode.CompletionItemKind.Constant,
        description: new vscode.MarkdownString('受けた攻撃に関する情報を参照します。'),
        snippet: new vscode.SnippetString('GetHitVar(${1|AnimType,GroundType,AirType,Damage,HitShakeTime,HitTime,HitShakeTime,SlideTime,CtrlTime,RecoverTime,HitCount,FallCount,XVel,YVel,YAccel,Fall,Fall.Damage,Fall.XVel,Fall.YVel,Fall.Recover,Fall.RecoverTime,ChainID,Guarded,IsBound,XVelAdd,YVelAdd,Type,XOff,YOff,ZOff,Fall.Kill,Fall.Envshake.Time,Fall.Envshake.Freq,Fall.Envshake.Ampl,Fall.Envshake.Phase|})'),
        detail: 'GetHitVar(情報)'
    },
	{
        label: 'HitCount',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('そのステート内でのヒット数を返します。'),
        snippet: new vscode.SnippetString('HitCount'),
        detail: 'HitCount'
    },
	{
        label: 'HitDefAttr = ,',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('HitDefコントローラのAttrの値を判定します。'),
        snippet: new vscode.SnippetString('HitDefAttr = $1, $2'),
        detail: 'HitDefAttr = 値1, 値2'
    },
	{
        label: 'HitFall',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('落下やられ状態にあるかどうかを返します。'),
        snippet: new vscode.SnippetString('HitFall'),
        detail: 'HitFall'
    },
	{
        label: 'HitOver',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃を受けてHitTimeが0になったかどうかを返します。'),
        snippet: new vscode.SnippetString('HitOver'),
        detail: 'HitOver'
    },
	{
        label: 'HitPauseTime',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃がヒットしたときの停止時間が終了するまでの時間を返します。'),
        snippet: new vscode.SnippetString('HitPauseTime'),
        detail: 'HitPauseTime'
    },
	{
        label: 'HitShakeOver',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃を受けてヒットシェイクが終了したかどうかを返します。'),
        snippet: new vscode.SnippetString('HitShakeOver'),
        detail: 'HitShakeOver'
    },
	{
        label: 'HitVel X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃を受けたときのX速度を取得します。'),
        snippet: new vscode.SnippetString('HitVel X'),
        detail: 'HitVel X'
    },
	{
        label: 'HitVel Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃を受けたときのY速度を取得します。'),
        snippet: new vscode.SnippetString('HitVel Y'),
        detail: 'HitVel Y'
    },
	{
        label: 'ID',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーIDを返します。'),
        snippet: new vscode.SnippetString('ID'),
        detail: 'ID'
    },
	{
        label: 'IfElse',
        kind: vscode.CompletionItemKind.Class,
        description: new vscode.MarkdownString('条件式の真偽に合わせた結果を返します。'),
        snippet: new vscode.SnippetString('IfElse($1, $2, $3)'),
        detail: 'IfElse(条件式, 真のときの処理, 偽のときの処理)'
    },
	{
        label: 'InGuardDist',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('相手の攻撃、または相手の飛び道具のガード範囲内にいるかどうかを返します。'),
        snippet: new vscode.SnippetString('InGuardDist'),
        detail: 'InGuardDist'
    },
	{
        label: 'IsHelper',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ヘルパーかどうかを返します。'),
        snippet: new vscode.SnippetString('IsHelper'),
        detail: 'IsHelper'
    },
	{
        label: 'IsHelper()',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのヘルパーかどうかを返します。'),
        snippet: new vscode.SnippetString('IsHelper($1)'),
        detail: 'IsHelper(HelperのID)'
    },
	{
        label: 'IsHomeTeam',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのチームがホームチームかどうかを返します。'),
        snippet: new vscode.SnippetString('IsHomeTeam'),
        detail: 'IsHomeTeam'
    },
	{
        label: 'Life',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のライフを返します。'),
        snippet: new vscode.SnippetString('Life'),
        detail: 'Life'
    },
	{
        label: 'LifeMax',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ライフの最大値を返します。'),
        snippet: new vscode.SnippetString('LifeMax'),
        detail: 'LifeMax'
    },
	{
        label: 'Ln',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('nの自然対数を返します。'),
        snippet: new vscode.SnippetString('Ln($1)'),
        detail: 'Ln(n)'
    },
	{
        label: 'Log',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('mを底としたnの対数を返します。'),
        snippet: new vscode.SnippetString('Log($1, $2)'),
        detail: 'Log(m, n)'
    },
	{
        label: 'Lose',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドで敗北したかどうかを返します。'),
        snippet: new vscode.SnippetString('Lose'),
        detail: 'Lose'
    },
	{
        label: 'LoseKO',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドをKOで敗北したかどうかを返します。'),
        snippet: new vscode.SnippetString('LoseKO'),
        detail: 'LoseKO'
    },
	{
        label: 'LoseTime',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドをタイムオーバーで敗北したかどうかを返します。'),
        snippet: new vscode.SnippetString('LoseTime'),
        detail: 'LoseTime'
    },
	{
        label: 'MatchNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在の試合数を返します。'),
        snippet: new vscode.SnippetString('MatchNo'),
        detail: 'MatchNo'
    },
	{
        label: 'MatchOver',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('試合で決着がついたかどうかを返します。'),
        snippet: new vscode.SnippetString('MatchOver'),
        detail: 'MatchOver'
    },
	{
        label: 'MoveContact',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃が接触したかどうかを返します。'),
        snippet: new vscode.SnippetString('MoveContact'),
        detail: 'MoveContact'
    },
	{
        label: 'MoveGuarded',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃がガードされたかどうかを返します。'),
        snippet: new vscode.SnippetString('MoveGuarded'),
        detail: 'MoveGuarded'
    },
	{
        label: 'MoveHit',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃がヒットしたかどうかを返します。'),
        snippet: new vscode.SnippetString('MoveHit'),
        detail: 'MoveHit'
    },
	{
        label: 'MoveReversed',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('攻撃が相手のReversalDefに取られたかどうかを返します。'),
        snippet: new vscode.SnippetString('MoveReversed'),
        detail: 'MoveReversed'
    },
	{
        label: 'MoveType = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('現在のMoveTypeを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('MoveType = $1'),
        detail: 'MoveType = 動作型'
    },
	{
        label: 'Name = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('defファイルで設定したNameを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('Name = "$1"'),
        detail: 'Name = "名前"'
    },
	{
        label: 'NumEnemy',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在の相手の数を返します。'),
        snippet: new vscode.SnippetString('NumEnemy'),
        detail: 'NumEnemy'
    },
	{
        label: 'NumExplod',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('出現しているExplodの数を返します。'),
        snippet: new vscode.SnippetString('NumExplod'),
        detail: 'NumExplod'
    },
	{
        label: 'NumExplod()',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('出現している指定したIDのExplodの数を返します。'),
        snippet: new vscode.SnippetString('NumExplod($1)'),
        detail: 'NumExplod(ExplodのID)'
    },
	{
        label: 'NumHelper',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーが出現させているHelperの数を返します。'),
        snippet: new vscode.SnippetString('NumHelper'),
        detail: 'NumHelper'
    },
	{
        label: 'NumHelper()',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('プレイヤーが出現させている指定したIDのHelperの数を返します。'),
        snippet: new vscode.SnippetString('NumHelper($1)'),
        detail: 'NumHelper(HelperのID)'
    },
	{
        label: 'NumPartner',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のパートナー数を返します。'),
        snippet: new vscode.SnippetString('NumPartner'),
        detail: 'NumPartner'
    },
	{
        label: 'NumProj',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーが出現させているProjectileの数を返します。'),
        snippet: new vscode.SnippetString('NumProj'),
        detail: 'NumProj'
    },
	{
        label: 'NumProjID',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('プレイヤーが出現させている指定したIDのProjectileの数を返します。'),
        snippet: new vscode.SnippetString('NumProjID($1)'),
        detail: 'NumProjID(ProjectileのID)'
    },
	{
        label: 'NumTarget',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのターゲットの数を返します。'),
        snippet: new vscode.SnippetString('NumTarget'),
        detail: 'NumTarget'
    },
	{
        label: 'NumTarget()',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('プレイヤーの指定したヒットIDのターゲットの数を返します。'),
        snippet: new vscode.SnippetString('NumTarget($1)'),
        detail: 'NumTarget(ヒットID)'
    },
	{
        label: 'P1Name = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('プレイヤーのnameを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('P1Name = "$1"'),
        detail: 'P1Name = "名前"'
    },
	{
        label: 'P2Name = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('プレイヤーの最初の相手のnameを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('P2Name = "$1"'),
        detail: 'P2Name = "名前"'
    },
	{
        label: 'P3Name = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('プレイヤーにチームメイトがいる場合、そのnameを判定し真偽を返します。'),
        snippet: new vscode.SnippetString('P3Name = "$1"'),
        detail: 'P3Name = "名前"'
    },
	{
        label: 'P4Name = ""',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('プレイヤーの2番目の相手のnameを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('P4Name = "$1"'),
        detail: 'P4Name = "名前"'
    },
	{
        label: 'P2BodyDist X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーからP2までの当たり判定同士のX方向の距離を返します。'),
        snippet: new vscode.SnippetString('P2BodyDist X'),
        detail: 'P2BodyDist X'
    },
	{
        label: 'P2BodyDist Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーからP2までの当たり判定同士のY方向の距離を返します。'),
        snippet: new vscode.SnippetString('P2BodyDist Y'),
        detail: 'P2BodyDist Y'
    },
	{
        label: 'P2Dist X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの中心軸からP2までのX方向の距離を返します。'),
        snippet: new vscode.SnippetString('P2Dist X'),
        detail: 'P2Dist X'
    },
	{
        label: 'P2Dist Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの中心軸からP2までのY方向の距離を返します。'),
        snippet: new vscode.SnippetString('P2Dist Y'),
        detail: 'P2Dist Y'
    },
	{
        label: 'P2Life',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('P2の現在のライフを返します。'),
        snippet: new vscode.SnippetString('P2Life'),
        detail: 'P2Life'
    },
	{
        label: 'P2MoveType = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('P2の現在のMoveTypeを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('P2MoveType = $1'),
        detail: 'P2MoveType = 動作型'
    },
	{
        label: 'P2StateNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('P2の現在のステート番号を返します。'),
        snippet: new vscode.SnippetString('P2StateNo'),
        detail: 'P2StateNo'
    },
	{
        label: 'P2StateType = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('P2の現在のStateTypeを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('P2StateType = $1'),
        detail: 'P2StateType = 状態型'
    },
	{
        label: 'PalNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのパレット番号を返します。'),
        snippet: new vscode.SnippetString('PalNo'),
        detail: 'PalNo'
    },
	{
        label: 'ParentDist X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ヘルパーの親までのX方向の距離を返します。'),
        snippet: new vscode.SnippetString('ParentDist X'),
        detail: 'ParentDist X'
    },
	{
        label: 'ParentDist Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ヘルパーの親までのY方向の距離を返します。'),
        snippet: new vscode.SnippetString('ParentDist Y'),
        detail: 'ParentDist Y'
    },
	{
        label: 'PI',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('円周率を返します。'),
        snippet: new vscode.SnippetString('PI'),
        detail: 'PI'
    },
	{
        label: 'PlayerIDExist',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのプレイヤーが存在するかどうかを返します。'),
        snippet: new vscode.SnippetString('PlayerIDExist($1)'),
        detail: 'PlayerIDExist(プレイヤーID)'
    },
	{
        label: 'Pos X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのX座標を返します。'),
        snippet: new vscode.SnippetString('Pos X'),
        detail: 'Pos X'
    },
	{
        label: 'Pos Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのY座標を返します。'),
        snippet: new vscode.SnippetString('Pos Y'),
        detail: 'Pos Y'
    },
	{
        label: 'Power',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のパワーゲージ量を返します。'),
        snippet: new vscode.SnippetString('Power'),
        detail: 'Power'
    },
	{
        label: 'PowerMax',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('パワーゲージの最大量を返します。'),
        snippet: new vscode.SnippetString('PowerMax'),
        detail: 'PowerMax'
    },
	{
        label: 'PrevStateNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('直前のステート番号を返します。'),
        snippet: new vscode.SnippetString('PrevStateNo'),
        detail: 'PrevStateNo'
    },
	{
        label: 'ProjCancelTime',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのProjectileが相殺されてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        snippet: new vscode.SnippetString('ProjCancelTime(${1:0})'),
        detail: 'ProjCancelTime(ProjectileのID)'
    },
	{
        label: 'ProjContact = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileが相手に接触したかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjContact${1:0} = $2'),
        detail: 'ProjContact[ProjectileのID] = 接触フラグ'
    },
	{
        label: 'ProjContact = , =',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileが相手に接触したかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjContact${1:0} = $2, = $3'),
        detail: 'ProjContact[ProjectileのID] = 接触フラグ, = 時間'
    },
	{
        label: 'ProjContactTime',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのProjectileが相手に接触してからの時間を返します。IDを指定しない場合、0を引数にします。'),
        snippet: new vscode.SnippetString('ProjContactTime(${1:0})'),
        detail: 'ProjContactTime(ProjectileのID)'
    },
	{
        label: 'ProjGuarded = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileがガードされたかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjGuarded${1:0} = $2'),
        detail: 'ProjGuarded[ProjectileのID] = ガードフラグ'
    },
	{
        label: 'ProjGuarded = , =',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileがガードされたかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjGuarded${1:0} = $2, = $3'),
        detail: 'ProjGuarded[ProjectileのID] = ガードフラグ, = 時間'
    },
	{
        label: 'ProjGuardedTime',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのProjectileがガードされてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        snippet: new vscode.SnippetString('ProjGuardedTime(${1:0})'),
        detail: 'ProjGuardedTime(ProjectileのID)'
    },
	{
        label: 'ProjHit = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileがヒットしたかどうかを返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjHit${1:0} = $2'),
        detail: 'ProjHit[ProjectileのID] = ヒットフラグ'
    },
	{
        label: 'ProjHit = , =',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('指定したIDのProjectileがヒットしたかどうかを、時間条件を指定して返します。IDを指定しない場合、0を指定するか省略します。'),
        snippet: new vscode.SnippetString('ProjHit${1:0} = $2, = $3'),
        detail: 'ProjHit[ProjectileのID] = ヒットフラグ, = 時間'
    },
	{
        label: 'ProjHitTime',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したIDのProjectileがヒットしてからの時間を返します。IDを指定しない場合、0を引数にします。'),
        snippet: new vscode.SnippetString('ProjHitTime(${1:0})'),
        detail: 'ProjHitTime(ProjectileのID)'
    },
	{
        label: 'Random',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('0から999までの乱数を返します。'),
        snippet: new vscode.SnippetString('Random'),
        detail: 'Random'
    },
	{
        label: 'RootDist X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ヘルパーのルートまでのX方向の距離を返します。'),
        snippet: new vscode.SnippetString('RootDist X'),
        detail: 'RootDist X'
    },
	{
        label: 'RootDist Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ヘルパーのルートまでのY方向の距離を返します。'),
        snippet: new vscode.SnippetString('RootDist Y'),
        detail: 'RootDist Y'
    },
	{
        label: 'RoundNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のラウンド数を返します。'),
        snippet: new vscode.SnippetString('RoundNo'),
        detail: 'RoundNo'
    },
	{
        label: 'RoundState',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のラウンドの状態を返します。'),
        snippet: new vscode.SnippetString('RoundState'),
        detail: 'RoundState'
    },
	{
        label: 'RoundsExisted',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーが存在していたラウンドの数を返します。'),
        snippet: new vscode.SnippetString('RoundsExisted'),
        detail: 'RoundsExisted'
    },
	{
        label: 'ScreenPos X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの画面上でのXの絶対座標を返します。'),
        snippet: new vscode.SnippetString('ScreenPos X'),
        detail: 'ScreenPos X'
    },
	{
        label: 'ScreenPos Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーの画面上でのYの絶対座標を返します。'),
        snippet: new vscode.SnippetString('ScreenPos Y'),
        detail: 'ScreenPos Y'
    },
	{
        label: 'SelfAnimExist',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('指定したアニメが存在するかどうかを返します。AnimExistと異なり、相手に参照させるステートで実行した場合、相手のアニメを返します。'),
        snippet: new vscode.SnippetString('SelfAnimExist($1)'),
        detail: 'SelfAnimExist(値)'
    },
	{
        label: 'Sin',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの正弦を返します。'),
        snippet: new vscode.SnippetString('Sin($1)'),
        detail: 'Sin(ラジアン)'
    },
	{
        label: 'StandBy',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('TagOutが使用されたかどうかを返します。'),
        snippet: new vscode.SnippetString('StandBy'),
        detail: 'StandBy'
    },
	{
        label: 'StateNo',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のステート番号を返します。'),
        snippet: new vscode.SnippetString('StateNo'),
        detail: 'StateNo'
    },
	{
        label: 'StateType = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('現在のStateTypeを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('StateType = $1'),
        detail: 'StateType = 状態型'
    },
	{
        label: 'SysFVar',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('システムの小数変数SysFVarの値を返します。'),
        snippet: new vscode.SnippetString('SysFVar($1)'),
        detail: 'SysFVar(変数番号)'
    },
	{
        label: 'SysVar',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('システムの変数SysVarの値を返します。'),
        snippet: new vscode.SnippetString('SysVar($1)'),
        detail: 'SysVar(変数番号)'
    },
	{
        label: 'Tan',
        kind: vscode.CompletionItemKind.Function,
        description: new vscode.MarkdownString('ラジアンの正接を返します。'),
        snippet: new vscode.SnippetString('Tan($1)'),
        detail: 'Tan(ラジアン)'
    },
	{
        label: 'TeamMode = ',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('現在のチームモードを判定し、真偽を返します。'),
        snippet: new vscode.SnippetString('TeamMode = $1'),
        detail: 'TeamMode = チームモード'
    },
	{
        label: 'TeamSide',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーが所属するチームを返します。'),
        snippet: new vscode.SnippetString('TeamSide'),
        detail: 'TeamSide'
    },
	{
        label: 'TicksPerSecond',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('1秒あたりのフレーム数を返します。'),
        snippet: new vscode.SnippetString('TicksPerSecond'),
        detail: 'TicksPerSecond'
    },
	{
        label: 'Time',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('現在のステートでの経過時間を返します'),
        snippet: new vscode.SnippetString('Time'),
        detail: 'Time'
    },
	{
        label: 'TimeMod = ,',
        kind: vscode.CompletionItemKind.Field,
        description: new vscode.MarkdownString('Timeの剰余計算を比較した結果を返します。'),
        snippet: new vscode.SnippetString('TimeMod = $1, $2'),
        detail: 'TimeMod = 除数, 剰余'
    },
	{
        label: 'UniqHitCount',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('そのステート内でのヒット数を返します。HitCountと異なり、複数の相手にヒットした場合、各相手へのヒット数も加算されます。'),
        snippet: new vscode.SnippetString('UniqHitCount'),
        detail: 'UniqHitCount'
    },
	{
        label: 'Var',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('変数Varの値を返します。'),
        snippet: new vscode.SnippetString('Var($1)'),
        detail: 'Var(変数番号)'
    },
	{
        label: 'Var :=',
        kind: vscode.CompletionItemKind.Variable,
        description: new vscode.MarkdownString('変数Varに値を代入します。'),
        snippet: new vscode.SnippetString('Var($1) := $2'),
        detail: 'Var(変数番号) := 代入したい値'
    },
	{
        label: 'Vel X',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのX方向の速度を返します。'),
        snippet: new vscode.SnippetString('Vel X'),
        detail: 'Vel X'
    },
	{
        label: 'Vel Y',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('プレイヤーのY方向の速度を返します。'),
        snippet: new vscode.SnippetString('Vel Y'),
        detail: 'Vel Y'
    },
	{
        label: 'Win',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドで勝利したかどうかを返します。'),
        snippet: new vscode.SnippetString('Win'),
        detail: 'Win'
    },
	{
        label: 'WinKO',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドをKOで勝利したかどうかを返します。'),
        snippet: new vscode.SnippetString('WinKO'),
        detail: 'WinKO'
    },
	{
        label: 'WinPerfect',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドをKOかつライフ全快で勝利したかどうかを返します。'),
        snippet: new vscode.SnippetString('WinPerfect'),
        detail: 'WinPerfect'
    },
	{
        label: 'WinTime',
        kind: vscode.CompletionItemKind.Value,
        description: new vscode.MarkdownString('ラウンドをタイムオーバーで勝利したかどうかを返します。'),
        snippet: new vscode.SnippetString('WinTime'),
        detail: 'WinTime'
    }
];