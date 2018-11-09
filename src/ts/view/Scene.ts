import * as BABYLON from 'babylonjs';

export class Scene
{
	private _canvas: HTMLCanvasElement;
	private _engine: BABYLON.Engine;
	private _scene: BABYLON.Scene;
	private _camera: BABYLON.FreeCamera;

	constructor()
	{
		this._canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
		this._engine = new BABYLON.Engine(this._canvas, true);

		this._scene = new BABYLON.Scene(this._engine);
		this._camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), this._scene);
		this._camera.setTarget(BABYLON.Vector3.Zero());
		this._camera.attachControl(this._canvas, false);

		//const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
		const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, this._scene);

		sphere.material = new BABYLON.PBRMaterial('glowingTeal', this._scene);
		(<BABYLON.StandardMaterial>sphere.material).emissiveColor = BABYLON.Color3.Teal();

		const glowLayer = new BABYLON.GlowLayer("glow", this._scene);

		glowLayer.addIncludedOnlyMesh(sphere);

		sphere.position.y = 1;

		const ground = BABYLON.MeshBuilder.CreateGround('ground1', {height: 6, width: 6, subdivisions: 2}, this._scene);
		ground.material = new BABYLON.PBRMaterial('gray', this._scene);
		(<BABYLON.PBRMaterial>ground.material).albedoColor = new BABYLON.Color3(0.1, 0.1, 0.1);

		window.addEventListener('resize', () =>
		{
			this._engine.resize();
		});

		this._engine.runRenderLoop(() =>
		{
			this._scene.render();
		});
	}
}