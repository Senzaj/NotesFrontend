import {Input, Select} from "@chakra-ui/react";

export default function Filters({filter, setFilter}) {
	return (
		<div>
			<Input
				placeholder="Search"
				onChange={(e) => setFilter({...filter, search: e.target.value})}/>
			<Select onChange={(e) => setFilter({...filter, sortOrder: e.target.value})}>
				<option>Start with new</option>
				<option>Start with old</option>
			</Select>
		</div>
	);
}