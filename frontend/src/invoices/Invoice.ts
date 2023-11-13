export class Invoice {
	constructor(public id: number, public amount: number, public due_date: Date, public details: string) { }
}