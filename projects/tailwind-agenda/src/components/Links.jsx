export function Links({link, url}) {

    return (
        <div className="px-2">
            <a className="text-color-font" href={link}>{url}</a>
        </div>
    )
}