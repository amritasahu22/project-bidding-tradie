import axios from 'axios';
import IProject from '../types/project';

const baseUrl = process.env.REACT_APP_API_URL + '/tradies';

class ProjectService {
	http = axios.create({
		baseURL: baseUrl,
		headers: {
			'content-type': 'application/json',
		},
	});

	async getProjects() {
		return await this.http.get<IProject[]>('/projects');
	}

	async getProjectById(id: string) {
		console.log('Fetch by Project ID', id);
		return await this.http.get<IProject>(`/projects/${id}`);
	}
}

export default new ProjectService();
