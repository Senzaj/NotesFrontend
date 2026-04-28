import {Card, CardBody, CardFooter, CardHeader, Heading} from "@chakra-ui/react";

export default function Note() {
	return (
		<Card variant={"filled"} divideX="2px">
			<CardHeader>
				<Heading size={"md"}>Title</Heading>
			</CardHeader>
			<CardBody>
				<Text>Description</Text>
			</CardBody>
			<CardFooter>Created at</CardFooter>
		</Card>);
}