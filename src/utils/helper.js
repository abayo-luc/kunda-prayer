import moment from 'moment';
export const formatPostData = (data) =>
	data.reduce(
		(prev, current) => ({
			...prev,
			[current.id]: {
				...current,
				description: current.content?.split('<br>')[0],
				updatedAt: moment(current.updatedAt).format('lll'),
				createdAt: moment(current.createdAt).format('lll'),
			},
		}),
		{}
	);

export const mapArrayToObject = (data) =>
	data.reduce(
		(prev, current) => ({
			...prev,
			[current.id]: {
				...current,
				updatedAt: moment(current.updatedAt).format('lll'),
				createdAt: moment(current.createdAt).format('lll'),
			},
		}),
		{}
	);
