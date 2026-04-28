import {Card, CardBody, CardFooter, CardHeader, Heading} from "@chakra-ui/react";

export default function Note() {
	return (
		<Card variant={"filled"} divideX="2px">
			<CardHeader>
				<Heading size={"md"}>Заметка</Heading>
			</CardHeader>
			<CardBody>
				<Text>Текст заметки</Text>
			</CardBody>
			<CardFooter>
				Дата создания
			</CardFooter>
		</Card>);
}