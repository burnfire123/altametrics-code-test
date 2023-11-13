export class Invoice {
	constructor(public id: string, public amount: number, public due_date: Date, public details: string, public User: {
		name: string,
		email: string,
		id: string
	}) { }
}