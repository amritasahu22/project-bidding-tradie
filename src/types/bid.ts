export default interface IBid {
	projectId: string;
	tradieId: string;
	bidPrice: string;
	bidType: string;
}

export interface Bid {
	bidPrice: string;
	bidType: string;
}

export interface INewBid {
	projectId: string;
	tradieId: string;
	bidPrice: string;
	bidType: string;
}

export interface Options {
	id: string;
	label: string;
}
