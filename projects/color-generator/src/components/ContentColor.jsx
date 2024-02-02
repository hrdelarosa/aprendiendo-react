import { Colors } from "./Colors"

export function ContentColor({children, colors}){
    return (  
    <div className='colors-list'>
        <Colors color={colors}>
            {children}
        </Colors>
    </div>
    )
}