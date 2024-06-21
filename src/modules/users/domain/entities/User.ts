import { randomBytes } from "crypto";

export class User {
	public readonly id: string;
	public name: string;
	public email: string;
	public password: string;
	public avatar: string | null;
	public isActive?: boolean;
	public createdAt?: Date;

	constructor(props: Omit<User, 'id'>, id?: string) {
		Object.assign(this, props);
		this.avatar = this.avatar ?? null;
		this.isActive = this.isActive || true;
		this.createdAt = this.createdAt || new Date();

		if (!id) {
			this.id = randomBytes(12).toString("hex");
		}
	}
}
