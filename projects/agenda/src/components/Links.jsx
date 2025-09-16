import '../styles/Links.css'

export function Links({link, url}) {

    return (
        <div className="link">
            <a href={link}>{url}</a>
        </div>
    )
}