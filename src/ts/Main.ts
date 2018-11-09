import { Scene } from './view/Scene';

class Main
{
	public static instance: Main;
	public static getInstance(): Main
	{
		return Main.instance || new Main();
	}

	private _scene: Scene;

	constructor()
	{
		Main.instance = this;

		this._scene = new Scene();
	}

	public get scene(): Scene
	{
		return this._scene;
	}
}

const main = Main.getInstance();