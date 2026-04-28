import {Card, CardBody, CardFooter, CardHeader, Heading} from "@chakra-ui/react";
import moment from "moment";

export default function Note({title, description, createdAt}) {
	return (
		<Card variant={"filled"} divideX="2px">
			<CardHeader>
				<Heading size={"md"}>{title}</Heading>
			</CardHeader>
			<CardBody>
				<Text>{description}</Text>
			</CardBody>
			<CardFooter>{moment(createdAt).format("DD/MM/YYYY hh:mm:ss")}</CardFooter>
		</Card>);
}