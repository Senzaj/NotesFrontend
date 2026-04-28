import {Button, Input, Textarea} from "@chakra-ui/react";
import {useState} from "react";

export default function CreateNoteForm(onCreate) {
    const [note, setNote] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setNote(null);
        onCreate(note);
    }

    return <section className="p-8 flex flex-row justify-start items-start gap-12">
            <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
                <h3 className="font-bold text-xl">Note creation</h3>
                <Input
                    placeholder="Title"
                    value = {note?.title ?? ""}
                    onChange={(e) => setNote({...note, title: e.target.value})}
                />
                <Textarea
                    placeholder="Description"
                    value = {note?.description ?? ""}
                    onChange={(e) => setNote({...note, description: e.target.value})}
                />
                <Button> type="submit" Create</Button>
            </form>
    </section>;
}
