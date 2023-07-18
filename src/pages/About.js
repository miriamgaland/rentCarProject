export default function About({ returnToHomePage }) {

    return (
        <div >
            <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
            <div id="about" style={{height:"72.5vh", textAlign:"center",padding:"30px"}}>
                <h2>About...</h2>
                <div>
                    <b>Car Sharing is a car rental company <br />
                    that has been working for you since 1982. <br />
                    What guides us is the benefit of the customers. <br />
                    We become more efficient over time and always face forward. <br /></b>              
                </div>
                <h3>for you</h3>
            </div>
        </div>
    )
}