import IAddress from './address';
import ICustomer from './customer';

export default interface IProject {
	_id?: string;
	title: string;
	description: string;
	postedDate: Date;
	address: IAddress;
	status: string;
	bidDeadline: Date;
	numberOfHours?: number;
	customerId: ICustomer;
}

export interface INewProject {
	title: string;
	description: string;
	address: IAddress;
	numberOfHours: string;
	bidDeadline: string;
}
