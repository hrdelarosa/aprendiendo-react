import { Colors } from "./Colors"
import { generateColor } from "../logic/generateColor"
import { useEffect } from "react"
import { useState } from "react"

export function ColorPalette({colors}){
    

    return (
        <div className='colors-list'>
            <Colors color={colors[0]}/>
            <Colors color={colors[1]}/>
            <Colors color={colors[2]}/>
            <Colors color={colors[3]}/>
            <Colors color={colors[4]}/>
        </div>
    )
}