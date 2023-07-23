export default function About({ returnToHomePage }) {

    return (
        <div >
            <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
            <div id="about" style={{ height: "72.5vh", textAlign: "center", padding: "30px" }}>
                <h2 style={{ height: "7vh" }}>about...</h2>
                <div>
                    <b>Car Sharing is a car rental company <br />
                        that has been working for you since 1982. <br />
                        <br />
                        What guides us is the benefit of the customers. <br />
                        We become more efficient over time and always face forward. <br />
                    </b>
                </div>
                <h3>for you</h3>
                <img style={{ margin: "0px", width: "47%" }} src={"https://www.cars.com/i/large/in/v2/stock_photos/6d9063d6-ac36-4192-885a-c2f0eaa7ef1a/67f38577-3517-4aec-9033-9b2f1b9653e8.png"} />
            </div>
        </div>
    )
}