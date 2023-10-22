import Circle from "./Circle";

const AllEmails = ({ allmails, setViewMail, fullWidth }) => {
    const toNormalDate = (timstamp) => {
        const timestamp = 1582728505000; // Unix timestamp in milliseconds
        const date = new Date(timestamp);
        const normalDate = date.toLocaleString();
        return normalDate;
      }
    return (
        <div className="allmails" style={{flex : fullWidth}}>
            {
                allmails?.map((mail) => <div className="mail" key={mail.id} onClick={()=> setViewMail(mail.id)}>
                <div className="top">
                    <div className="left">
                        <div className="namespace"><Circle data={mail.from.name[0].toUpperCase()} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="from">
                            From : {mail.from.name} {mail.from.email}
                        </div>
                        <div className="subject">
                            Subject : {mail.subject}
                        </div>
                    </div>
                </div>
                <div className="top aftertop">
                    <div className="left"></div>
                    <div className="right">
                        <div className="short_description">
                            {mail.short_description}
                        </div>
                        <div className="date">
                            {toNormalDate(mail.date)}
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
        
    )
}

export default AllEmails;