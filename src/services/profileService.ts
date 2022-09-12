import axios from 'axios';
import IProfile from '../types/profile';
import { getCurrentUser } from './authService';

const baseUrl = process.env.REACT_APP_API_URL;

class ProfileService {
	http = axios.create({
		baseURL: baseUrl,
		headers: {
			'content-type': 'application/json',
		},
	});

	async getProfileDetails() {
		const id = getCurrentUser()?.userId;
		const response = await this.http.get<IProfile>(`/tradies/${id}`);
		return response.data;
	}
}

export default new ProfileService();
