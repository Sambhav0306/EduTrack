import classes from './Section.module.css';
import ProgressBar from './ProgressBar';
import Card from '../UI/Card';
import Item from './Item';

const Section = (props) => {
	const { items } = props;

	return (
		<Card className={classes.card}>
			<ProgressBar className={classes.progress} />
			<div className={classes.topics}>
				{items.map((item) => (
					<Item key={item.id} />
				))}
			</div>
		</Card>
	);
};

export default Section;
