import { useEffect, useState } from "react";
import { getAll, getTiny } from "./Api";
import { FameResponse, TinyFame } from "./Complete";

export function Fame () {

    const [fame, setFame] = useState<FameResponse | null>(null);
    const [tiny, setTiny] = useState<TinyFame[]>([])

    useEffect(()=>{
        getAll().then(data => setFame(data));
        getTiny().then(data => setTiny(data));

    }, []);

    return (

        <div>
        <ul>
            { fame?.complete.map(person=> <li>{person.firstName} {person.lastName}</li>)}

        </ul>

         <ul>
         { tiny.map(person => <li>{person.name}</li>)}
        </ul>

        </div>
    );
}