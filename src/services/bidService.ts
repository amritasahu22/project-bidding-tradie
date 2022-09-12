import axios from 'axios';
import IBid, { INewBid } from '../types/bid';

const baseUrl = process.env.REACT_APP_API_URL;

class BidService {
	http = axios.create({
		baseURL: baseUrl,
		headers: {
			'content-type': 'application/json',
		},
	});

	async getBid() {
		return await this.http.get<IBid[]>('/bids');
	}

	// async getProjectById(id: string) {
	// 	console.log('Fecth by Project ID', id);
	// 	const response = await this.http.get<IProject>(`/projects/${id}`);
	// 	return response.data;
	// }

	async saveBid(data: INewBid) {
		console.log('Data::', data);
		return await this.http.post<IBid>('/bids', { data });
	}
}

export default new BidService();
