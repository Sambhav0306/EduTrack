import classes from './Item.module.css';

const Item = (props) => {
	return (
		<div className={classes.topic}>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid enim
				accusamus minus.
			</p>
			<a href='#' target='_blank'>
				VIDEO
			</a>
			<select name='' id=''>
				<option id='0' value='0'>
					Pending
				</option>
				<option id='1' value='1'>
					Finished
				</option>
				<option id='2' value='2'>
					Revisit
				</option>
			</select>
		</div>
	);
};

export default Item;
