import MeNo from "../assets/MeNo.gif"

function Notfound() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1 style={{ color: "white", margin: "0 auto" }}> Do not be playful </h1>
            <img style={{ width: "200px", borderRadius: "20px", margin: "0 auto" }} src={MeNo} alt="no" />
        </div>
    );
}

export default Notfound;