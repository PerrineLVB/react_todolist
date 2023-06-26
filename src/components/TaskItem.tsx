import React, { useState } from "react";

interface TaskItemProps {
    task: string;
    completed: boolean;
}

export function TaskItem(props: TaskItemProps) {
    const [completed, setCompleted] = useState(false);

    function handleState() {
        setCompleted(!completed);
    }

    return (
        <>
            <li>
                <p>{props.task}</p>
                <button onClick={() => handleState()} className={completed ? 'completed' : 'notCompleted'}>
                    {completed ? 'Accomplie' : 'A faire'}
                </button>
            </li>
        </>
    );
}
