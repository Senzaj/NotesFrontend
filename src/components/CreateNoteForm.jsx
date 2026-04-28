import {Button, Input, Textarea} from "@chakra-ui/react";

export default function CreateNoteForm() {
    return <section className="p-8 flex flex-row justify-start items-start gap-12">
        <div className="flex flex-col w-1/3 gap-10">
            <form className="w-full flex flex-col gap-3">
                <h3 className="font-bold text-xl">Note creation</h3>
                <Input placeholder="Title"/>
                <Textarea placeholder="Description"/>
                <Button>Create</Button>
            </form>
        </div>
    </section>;
}
