import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

	const subjectMarksData = [
		{ studentId: 1, name: "Alice", math: 85, physics: 90, chemistry: 88 },
		{ studentId: 2, name: "Bob", math: 92, physics: 85, chemistry: 95 },
		{ studentId: 3, name: "Charlie", math: 78, physics: 80, chemistry: 82 },
		{ studentId: 4, name: "David", math: 88, physics: 87, chemistry: 90 },
		{ studentId: 5, name: "Eva", math: 95, physics: 92, chemistry: 89 },
		{ studentId: 6, name: "Frank", math: 72, physics: 75, chemistry: 80 },
		{ studentId: 7, name: "Grace", math: 89, physics: 91, chemistry: 94 },
		{ studentId: 8, name: "Hannah", math: 91, physics: 89, chemistry: 85 },
		{ studentId: 9, name: "Ian", math: 80, physics: 78, chemistry: 82 },
		{ studentId: 10, name: "Jack", math: 76, physics: 74, chemistry: 79 }
	  ];
	  

	return (
		<div>
			<LChart width={800} height={400} data={subjectMarksData}>

				<XAxis dataKey='name' ></XAxis>
				<YAxis></YAxis>
				<Line dataKey='math' stroke='red'></Line>
				<Line dataKey={'physics'} stroke='purple' ></Line>
			</LChart>
		</div>
	);
};

export default LineChart;