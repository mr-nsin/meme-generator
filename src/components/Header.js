export default function Header() {
    return (
        <header className="header">
            <img src={require("../images/troll-face.png")} className="header--image"/>
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--project">React course - Project 3</h4>
        </header>
        
    )
}