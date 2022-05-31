import "./message.css"
function Message({ text, type, imgSrc, me_or_friend, thisTime }) {
    //IMAGES!
    if (type === "image" && me_or_friend === "me") {
        return (
            <div className="mine">
                <div className="imgblock">
                    <img src={imgSrc} alt=""/>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>

        );
    }
    else if (type === "image" && me_or_friend === "friend") {
        return (
            <div className="friend">
                <div className="imgblock">
                    <img src={imgSrc} alt=""/>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        );
    }

    //MESSAGES!
    else if (type === "text" && me_or_friend === "me") {
        return (
            <div className="mine">
                <div className="txtblock">
                    <p className="messageText">{text}</p>
                    <div className="smallblackarea-text">{thisTime}</div>
                </div>
            </div>
        );
    }
    else if (type === "text" && me_or_friend === "friend") {
        return (
            <div className="friend">
                <div className="txt-friend-block">

                    <p className="messageText">{text}</p>
                    <div className="smallblackarea-text">{thisTime}</div>
                </div>
            </div>
        );
    }

    //VIDEOS!
    else if (type === "video" && me_or_friend === "me") {
        return (

            <div className="mine">
                <div className="imgblock">
                    <video controls><source src={imgSrc} type="video/mp4"></source></video>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        )
    }
    else if (type === "video" && me_or_friend === "friend") {
        return (
            <div className="friend">
                <div className="imgblock">
                    <video controls><source src={imgSrc} type="video/mp4"></source></video>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        )
    }
    else if (type === "record" && me_or_friend === "me") {
        return (
            <div className="mine">
                <div className="imgblock">
                    <audio controls><source src={imgSrc} type="audio/mp3"></source></audio>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        )
    }
    else if (type === "record" && me_or_friend === "friend") {
        return (
            <div className="friend">
                <div className="imgblock">
                    <audio controls><source src={imgSrc} type="audio/mp3"></source></audio>
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        )
    }
}
export default Message;