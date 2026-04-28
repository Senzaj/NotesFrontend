import {Input, Select} from "@chakra-ui/react";

export default function Filters(){
	return (
		<div>
			<Input placeholder="Search"/>
			<Select>
				<option>Start with new</option>
				<option>Start with old</option>
			</Select>
		</div>
	);
}