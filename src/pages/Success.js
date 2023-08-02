export default function Success({ returnToHomePage, car, user }) {

    return (
        <div>
            <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
            <div style={{ height: "73.5vh", paddingTop: "7vh" }}>
                <div>
                    <h1>Lease purchase for car {car.manufacturer} at price {car.price}</h1>
                    <br />
                    <h1 >{user ? `per ${user.name} was successfully completed` : ''}</h1>
                    <br />
                    <h1 style={{fontWeight:"500"}}>Have a good day!!</h1>
                </div>
                <img style={{ width: "40%" }} src={"https://www.cars.com/i/large/in/v2/stock_photos/6d9063d6-ac36-4192-885a-c2f0eaa7ef1a/67f38577-3517-4aec-9033-9b2f1b9653e8.png"} />
            </div>
        </div>
    )
}