import Section from './Section';

const Topics = (props) => {
	const { sections } = props;
	return (
		<div className={props.className}>
			<ul>
				{sections.map((section) => (
					<Section key={section.id} items={section.items} />
				))}
			</ul>
		</div>
	);
};

export default Topics;
