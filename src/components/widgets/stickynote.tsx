import { useState } from "react";

interface Props {
    id: string;
    title: string;
    description: string;
    initialContent?: string;
}

export default function StickyNote({ id, title, description, initialContent = "" }: Props) {
    const [content, setContent] = useState(initialContent);

    return (
        <section className="sticky-note">
            <h2>{title}</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
                rows={5}
                cols={30}
            />
            <br />
            <button onClick={() => setContent("")}>Clear Note</button>
        </section>
    );
}