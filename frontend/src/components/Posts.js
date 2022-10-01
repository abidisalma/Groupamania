import images from "../assets/placeholder.png";
import { useNavigate } from "react-router-dom";
function Posts({ data }) {
	const navigate = useNavigate();

	let img = data?.imageUrl || images;
	return (
		<div
			className="post"
			onClick={() => {
				navigate("/posts/" + data._id);
			}}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className="bloctext">
				<h2 className="title">{data.title}</h2>
				<div className="description">{data.description}</div>
			</div>
		</div>
	);
}

export default Posts;
