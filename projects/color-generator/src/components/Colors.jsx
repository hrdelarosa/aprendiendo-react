export function Colors({children, color }){
    return (
        <div onClick={() => {navigator.clipboard.writeText(color), console.log('color copiado')}} className='content-color' style={{backgroundColor: color }}>
            <h2 className='color' style={{backgroundColor: color }}>
                {children}
            </h2>
        </div>
    )
}