import IAddress from './address';

export default interface IProfile {
	name: string;
	email: string;
	phone: string;
	address: IAddress;
}
