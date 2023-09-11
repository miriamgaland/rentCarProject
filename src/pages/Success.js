export default function Success({ returnToHomePage, car, user,hours }) {

    return (
        <div>
            <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
            <div style={{ height: "73.5vh", paddingTop: "7vh"}}>
                <div>

                    <h1 style={{fontSize:'x-large'}}>Hi </h1>
                    <h1 style={{fontSize:'x-large'}}>{user ? user.name : ''}</h1>

                    <br />
                    <h1 style={{fontSize:'30px'}}> {car.manufacturer} car rental for {hours} hours at a price of {car.price*hours} per hour </h1>
                    <br />
                    <h1 style={{fontSize:'30px'}}>Was successfully completed</h1>
                    <br />
                    <h1 style={{fontSize:'x-large',fontWeight:"500"}}>Have a nice trip!!</h1>
                </div>
                <img style={{ width: "40%" }} src={"https://www.cars.com/i/large/in/v2/stock_photos/6d9063d6-ac36-4192-885a-c2f0eaa7ef1a/67f38577-3517-4aec-9033-9b2f1b9653e8.png"} />
            </div>
        </div>
    )
}