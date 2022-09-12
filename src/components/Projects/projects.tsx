import { useEffect, useState } from 'react';
import ProjectList from '../ProjectList';
import IProject from '../../types/project';
import projectService from '../../services/projectService';
import Dropdown from '../Dropdown/dropdown';

function Projects() {
	const [projects, setProjects] = useState<IProject[]>([]);

	const loadProjects = async () => {
		const { data: projects } = await projectService.getProjects();
		setProjects(projects);
	};

	useEffect(() => {
		loadProjects();
	}, []);

	if (projects.length === 0) {
		return (
			<p className='text-center font-weight-normal'>
				There are no projects to display.
			</p>
		);
	}

	return (
		<>
			<main
				className='container-lg py-5 my-4'
				style={{ minHeight: '100vh', marginTop: '4rem' }}
			>
				<div className='row'>
					<div className='col'>
						<h1 className='page-header'>All Projects</h1>
						<hr />
						<div className='fs-5 text-muted'>
							Filter: <Dropdown />
						</div>
						<p className='font-weight-normal pt-3 text-sm-center text-muted fs-5'>
							Showing {projects?.length} projects
						</p>
						<ProjectList items={projects} />
					</div>
				</div>
			</main>
		</>
	);
}

export default Projects;
