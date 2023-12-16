import { useParams } from 'react-router-dom';
import classes from '../styles/Course.module.css';
import Topics from '../components/Course/Topics';
import Modules from '../components/Course/Modules';
import Status from '../components/Course/Status';
import Card from '../components/UI/Card';
import { useEffect, useState } from 'react';

const Course = () => {
	const params = useParams();
	const [course, setCourse] = useState();
	const [modules, setModules] = useState();
	const [selectedModule, setSelectedModule] = useState(1);
	const [sections, setSections] = useState();

	useEffect(() => {
		const fetchCourses = async () => {
			const response = await fetch('../../test.json');
			const data = await response.json();
			// console.log(data);

			let dsa = {};
			for (const key in data) {
				if (data[key].id === 'dsa') {
					dsa = { ...data[key] };
					break;
				}
			}

			setCourse(dsa);

			const loadedModules = dsa.topics.map((topic) => ({
				id: topic.id,
				title: topic.title,
			}));
			setModules(loadedModules);
			setSections(dsa.topics[0].sections);
			// console.log(dsa);
		};

		fetchCourses();
	}, []);

	if (!course) {
		return (
			<h3 style={{ textAlign: 'center' }}>Loading the course content...</h3>
		);
	}

	// console.log(sections);
	const moduleChangeHandler = (id) => {
		setSelectedModule(id);
		let requiredSections = [];
		for (const key in course.topics) {
			if (course.topics[key].id === id) {
				requiredSections = [...course.topics[key].sections];
				break;
			}
		}
		setSections(requiredSections);
	};

	return (
		<main>
			<div className={classes.header}>
				<Card className={classes.left}>
					<h2>Operating System</h2>
				</Card>
				<Status className={classes.right} />
			</div>
			<div className={`${classes.content}`}>
				<Modules
					className={classes.left}
					modules={modules}
					selected={selectedModule}
					onModuleChange={moduleChangeHandler}
				/>
				<Topics className={classes.right} sections={sections} />
			</div>
		</main>
	);
};

export default Course;
