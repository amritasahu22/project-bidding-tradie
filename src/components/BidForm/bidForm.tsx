import { useContext, useState } from 'react';
import { INewBid, Options } from '../../types/bid';
import bidService from '../../services/bidService';
import UserContext from '../../context/userContext';
import { useHistory } from 'react-router-dom';
import './bidForm.css';
import { toast } from 'react-toastify';

interface BidFormProps {
	projectId: string;
}

const BidForm = ({ projectId }: BidFormProps) => {
	console.log('Project ID:', projectId);
	const userContext = useContext(UserContext);
	const currentUser = userContext?.userId;
	const history = useHistory();

	const [bid, setBid] = useState<INewBid>({
		projectId: projectId,
		tradieId: currentUser || '',
		bidPrice: '',
		bidType: '',
	});

	const bidOptions: Options[] = [
		{ id: 'fixed', label: 'Fixed Price' },
		{ id: 'hourly', label: 'Hourly Rate' },
	];

	const handleChange = ({
		currentTarget: input,
	}: React.FormEvent<HTMLInputElement>) => {
		console.log(input.name, input.value);
		setBid({ ...bid, [input.name]: input.value });
	};

	const handleSelectChange = ({
		currentTarget: select,
	}: React.FormEvent<HTMLSelectElement>) => {
		console.log(select.name, select.value);
		setBid({ ...bid, [select.name]: select.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await bidService.saveBid(bid);
		history.push('/projects');
		toast('Your bid is successful');
	};

	return (
		<form className='' onSubmit={handleSubmit}>
			<h2>Make a bid</h2>
			<div className='row g-2 align-items-center'>
				<div className='col-md-4 col-lg-3'>
					<select
						name='bidType'
						onChange={handleSelectChange}
						className='form-select form-select-lg mb-2 bidDropdown'
						value={bid.bidType}
					>
						<option value=''>Choose Bid Type</option>
						{bidOptions.map(option => (
							<option key={option.id} value={option.id}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<div className='col-md-4 col-lg-3'>
					<div className='input-group flex-nowrap mb-2'>
						<span className='input-group-text' id='addon-wrapping'>
							A$
						</span>
						<input
							name='bidPrice'
							value={bid.bidPrice}
							type='text'
							className='form-control bidPrice'
							placeholder='Enter price...'
							aria-label='bidPrice'
							aria-describedby='addon-wrapping'
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='col'>
					<div className='d-grid d-md-block mb-2'>
						<button className='btn btn-success'>Bid Now</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default BidForm;
