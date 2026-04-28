import {Input, Select} from "@chakra-ui/react";

export default function Filters(){
	return (
		<div>
			<Input placeholder="Поиск"/>
			<Select>
				<option>Сначала новые</option>
				<option>Сначала старые</option>
			</Select>
		</div>
	);
}