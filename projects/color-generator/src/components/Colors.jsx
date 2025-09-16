export function Colors({color }){
    return (
        <div onClick={() => {
            navigator.clipboard.writeText(color)
            document.body.style.backgroundColor = color
            }} className='content-color' style={{backgroundColor: color}}>
            <h2 className='color' style={{backgroundColor: color }}>
                {color}
            </h2>
        </div>
    )
}