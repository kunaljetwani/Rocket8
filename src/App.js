import { useEffect, useState } from "react";
import AllEmails from "./innerComponents/AllEmails";
import ViewMail from "./innerComponents/ViewMail";

function App() {
  const toNormalDate = (timstamp) => {
    const timestamp = 1582728505000; // Unix timestamp in milliseconds
    const date = new Date(timestamp);
    const normalDate = date.toLocaleString();
    return normalDate;
  };
  const [allEmails, setAllEmails] = useState([]);
  const [viewMail, setViewMail] = useState(0);
  const getAllMails = () => {
    fetch("https://flipkart-email-mock.vercel.app/")
      .then((response) => response.json())
      .then((data) => setAllEmails(data.list));
  };
  useEffect(() => {
    getAllMails();
  }, []);
  return (
    <div className="App">
      <div>
        Filter By : <button>Unread</button> <button>Read</button>{" "}
        <button>Favourites</button>
      </div>
      <div className="mailBody">
        <AllEmails
          allmails={allEmails}
          setViewMail={setViewMail}
          fullWidth={!viewMail ? 1 : ""}
        />
        {/* <ViewMail allmails={allEmails} viewMail={viewMail} /> */}
        {viewMail ? (
          <ViewMail allmails={allEmails} viewMail={viewMail} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
