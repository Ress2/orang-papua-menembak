const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Flash,
		C3.Plugins.Camera3D,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Plugins.Shape3D.Cnds.CompareZElevation,
		C3.Plugins.Shape3D.Acts.SubInstanceVar,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Plugins.Camera3D.Exps.LookZ,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{LavaFloor: 0},
	{heart: 0},
	{key10: 0},
	{"8Direction": 0},
	{Flash: 0},
	{Player: 0},
	{"3DCamera": 0},
	{Solid: 0},
	{"3DShape": 0},
	{Keyboard: 0},
	{HandGun: 0},
	{aim: 0},
	{heartDemon: 0},
	{MoveTo: 0},
	{Demon: 0},
	{DemonSprt: 0},
	{Background: 0},
	{Bullet: 0},
	{PlayerBullet: 0},
	{Mouse: 0},
	{TiledBackground: 0},
	{Sprite: 0},
	{"3DShape2": 0},
	{e2aeb1567e91bfc2404cecca6aceecd: 0},
	{Y: 0},
	{TgNrm: 0},
	{Touch: 0},
	{loadimg: 0},
	{hp: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{pngtreepuffedbloodborderpngimage_: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Variable1: 0},
	{peluru: 0},
	{"3DShape3": 0},
	{BAG: 0},
	{Text: 0},
	{tas: 0},
	{Sprite6: 0},
	{lose: 0},
	{restart: 0},
	{menu: 0},
	{ress: 0},
	{KEY: 0},
	{mennu: 0},
	{demontext: 0},
	{jumlahKey: 0},
	{gunbulleticonfreevector_prev_ui: 0},
	{kiri: 0},
	{kanan: 0},
	{atas: 0},
	{Sprite7: 0},
	{fire: 0},
	{Audio: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{restart2: 0},
	{MENU2: 0},
	{RESSSHOOTER: 0},
	{Sensitivity: 0},
	{bullet: 0},
	{bag: 0},
	{enemy: 0}
];

self.InstanceType = {
	LavaFloor: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	Keyboard: class extends self.IInstance {},
	HandGun: class extends self.ISpriteInstance {},
	aim: class extends self.ISpriteInstance {},
	Demon: class extends self.I3DShapeInstance {},
	DemonSprt: class extends self.ISpriteInstance {},
	Background: class extends self.I3DShapeInstance {},
	PlayerBullet: class extends self.I3DShapeInstance {},
	Mouse: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	e2aeb1567e91bfc2404cecca6aceecd: class extends self.ISpriteInstance {},
	Y: class extends self.ITextInstance {},
	TgNrm: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	loadimg: class extends self.ISpriteInstance {},
	hp: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	pngtreepuffedbloodborderpngimage_: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	peluru: class extends self.ITextInstance {},
	_3DShape3: class extends self.I3DShapeInstance {},
	BAG: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	tas: class extends self.ITextInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	lose: class extends self.ISpriteInstance {},
	restart: class extends self.ITextInstance {},
	menu: class extends self.ITextInstance {},
	ress: class extends self.IButtonInstance {},
	KEY: class extends self.I3DShapeInstance {},
	mennu: class extends self.IButtonInstance {},
	demontext: class extends self.ITextInstance {},
	jumlahKey: class extends self.ISpriteInstance {},
	gunbulleticonfreevector_prev_ui: class extends self.ISpriteInstance {},
	kiri: class extends self.ISpriteInstance {},
	kanan: class extends self.ISpriteInstance {},
	atas: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	fire: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	restart2: class extends self.ITextInstance {},
	MENU2: class extends self.ITextInstance {},
	RESSSHOOTER: class extends self.ITextInstance {}
}