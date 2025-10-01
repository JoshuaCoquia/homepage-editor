import { useState } from "react";
interface Widget {
    id: string;
    title: string;
    description: string;

}

export default function App({ widgets }: { widgets: Widget[] | null }) {
    const [widgetList, setWidgetList] = useState<Widget[] | null>(widgets);
    return <ul>
        {widgetList?.map(widget => <li key={widget.id}>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
        </li>)}
    </ul>
}
