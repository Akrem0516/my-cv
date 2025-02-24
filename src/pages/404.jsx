import No from "../assets/404-no.gif"

function Notfound({ globalHidden }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className={globalHidden ? 'hide' : ''}>
            <h1 style={{ color: "white", margin: "0 auto" }}> Do not be playful </h1>
            <img style={{ width: "350px", borderRadius: "20px", margin: "0 auto" }} src={No} alt="no" />
        </div>
    );
}

export default Notfound;