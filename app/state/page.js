"use client"
import { useState } from "react";
import "./style.css";
import style from "@/styles/styles.module.css";

export default function State(){
    
    const [count, setCount] = useState(0);
    const [isButtonActive, setIsButtonActive] = useState(false); 

    function toggleButtonState(){
        setIsButtonActive(prevState => !prevState);
    }

    return(
        <>
            <main>
                <h2>this will get the css from style.css</h2>
            </main>
            <div className={style.center}>
                <h2 className={style.hero}> this will get the css from the style.module.css file</h2>
                <button 
                className={isButtonActive ? style.normalButton : style.activeButton} 
                onClick={toggleButtonState} >change color</button>
            </div>
        </>
    )
}