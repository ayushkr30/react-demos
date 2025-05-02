import {useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);

    return (
        <div>
            My name is {userName} & I'm {Age } years old.
        </div>
    )
}

export default ComponentC;