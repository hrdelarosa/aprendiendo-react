import { Colors } from "./Colors"

export function ContentColor({colors}){
    return (  
        <div className='colors-list'>
            <Colors color={colors}/>
        </div>
    )
}
