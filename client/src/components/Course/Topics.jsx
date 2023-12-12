import TopicGroup from "./TopicGroup";

const Topics = (props) => {
	return (
		<div className={props.className}>
			<TopicGroup />
			<TopicGroup />
			<TopicGroup />
		</div>
	);
};

export default Topics;
