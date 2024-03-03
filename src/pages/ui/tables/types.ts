export type TableRecord = {
	id: number
	firstName: string
	lastName: string
	username: string
}

export type Employee = {
	id: number
	age: number
	name: string
	company: string
	phone: string
	subRows?: Employee[]
}
export type Venue = {
	id: number
	rank: number
	name: string
	type: string
	HIndex: number
	website: string
	country: string
}