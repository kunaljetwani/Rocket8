import { useEffect } from "react";
import Circle from "./Circle";

const ViewMail = ({ allmails, viewMail }) => {
    const toNormalDate = (timstamp) => {
        const timestamp = 1582728505000; // Unix timestamp in milliseconds
        const date = new Date(timestamp);
        const normalDate = date.toLocaleString();
        return normalDate;
    }
    useEffect(() => {

    }, [viewMail])
    return (
        <div className="viewMail mail">
            <div className="top">
                <div className="left">
                    <Circle data={allmails[viewMail].from.name[0].toUpperCase()} />
                </div>
                <div className="right">
                    <h1>{allmails[viewMail].subject}</h1>
                    <div>{toNormalDate(allmails[viewMail].date)}</div>
                    <h1>{allmails[viewMail].body ? allmails[viewMail].body : "Email Body from " + allmails[viewMail].from.email}</h1>
                    <p>
                        ext for some display at my text area. This text can be used by all people who want to use simple english text instead of Loream Ipsum as a dummy text. There is no copyrigtht or any restriction for the use on this text. Regards.
                        With my introduction in first paragraph lets extend the text further. This is the second paragraph of dummy text. It can help developers to know what text is included. Since this text is in simple english it is easy and soothing to eyes and mind for people who work with english language on a daily basis. Also when people are bored they start thinking about problems and if we present some simple english text some(if not all) would rather engage in reading this dummy text and it would be beneficial for them.
                        This is the third paragrpah of our dummy text. This text can be used by all people who want to use simple english text instead of Loream Ipsum as a dummy text. This is fun to create our own dummy text. The readers would also undertand that this is some english text and would be able to read this rather than just yawning and thinking Loream Ipsum is so hard to read. Also since this text is in simple english it is easy and soothing to eyes and mind for people who work with english language on a daily basis.
                        Now, in this final paragraph let me tell you i don't know, if it would be beneficial to anyone eventhough i have created it. I can use it and you can also use it if you would like to use it. This is a fun text. This is a bazinga text. This is a bad boys text. This is a dummy english text. This is a sample text in english. It is simple to read. Rock, Paper, Lizard, Scissors, Spock. Acha humko Sikhariya hai.
                        Lets extend our dummy text now in Hinglish. What we mean to say is that some text is in english transcript but it is in Hindi language. We would also add some dialogues from good movies and some songs. Please bear with the text.
                        Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai?
                        Mere paas, mere paas... Maa hai..., from Deewar
                        Kitney aadmi they.? from Sholay
                        Rishte mein to hum tumhare baap lagte hain, naam hai Shahenshah.. from Shahenshah
                    </p>
                </div>
            </div>

        </div>

    )
}

export default ViewMail;