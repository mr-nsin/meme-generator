export default function Meme(){
    function handleClick() {
        console.log("I was clicked")
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button className="form--button" onClick={handleClick}>
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}