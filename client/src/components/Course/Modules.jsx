import Card from '../UI/Card';
import classes from './Modules.module.css';

const Modules = (props) => {
	const { selected } = props;

	return (
		<Card className={`${props.className} ${classes.card}`}>
			{(!props.modules || props.modules.length === 0) && (
				<p className={classes.module}>Loading modules...</p>
			)}
			{props.modules && (
				<ul>
					{props.modules.map((module) => (
						<li
							key={module.id}
							id={module.id}
							className={`${classes.module} ${
								module.id === selected
									? classes.selected
									: +module.id % 2 == 1
									? classes.bg1
									: classes.bg2
							} ${module.id === selected ? classes.selected : ''}`}
							onClick={() => {
								props.onModuleChange(module.id);
							}}
						>
							{module.title}
						</li>
					))}
				</ul>
			)}
		</Card>
	);
};

export default Modules;
