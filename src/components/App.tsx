import { useState } from "react";
import StickyNote from "./widgets/stickynote.tsx";

interface Widget {
    id: string;
    title: string;
    description: string;
    type: string;
}

interface Props {
    widgets?: Widget[];
}

export default function App({ widgets = [] }: Props) {
    const [widgetList, setWidgetList] = useState<Widget[]>(widgets);

    function addWidget(title: string, description: string) {
        const newWidget: Widget = {
            id: (Math.random() * 1000000).toFixed(0),
            title,
            description,
            type: "stickynote",
        };
        setWidgetList([...widgetList!, newWidget]);
    }

    return <>
        <button onClick={() => addWidget("New Widget", "New Widget")}>Add Widget</button>
        <ul>
            {widgetList?.map(widget => <li key={widget.id}>
                <h2>{widget.title}</h2>
                {widget.type === "stickynote" && (
                    <StickyNote
                        id={widget.id}
                        title={widget.title}
                        description={widget.description}
                        initialContent=""
                    />
                )}
                <small>ID: {widget.id}</small>
                <br />
                <button onClick={() => setWidgetList(widgetList.filter(w => w.id !== widget.id))}>Remove</button>
            </li>)}
        </ul>
    </>
}
