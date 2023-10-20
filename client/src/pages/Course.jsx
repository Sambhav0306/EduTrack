import { useParams } from "react-router-dom";

const Course = () => {
	const params = useParams();

	if (params.courseId === "123") {
		throw new Error("this is a error");
	}
	return <div>{params.courseId}</div>;
};

export default Course;
