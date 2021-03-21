import { useState } from 'react';

let NameApp = () => {

    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");



    let greeting = firstname && lastname ? `Hello ${firstname} ${lastname}!`: "I do not know your full name :(";

    return (
        <div>
            <h1>Please tell me your name.</h1>
            <input
                onChange={(e)=> setFirstname(e.target.value)}
                type="text"
                placeholder="What is your firstname?"
                name="firstname"
                value={firstname}
            />
            <input
                onChange={(e)=> setLastname(e.target.value)}
                type="text"
                placeholder="What is your lastname?"
                name="lastname"
                value={lastname}
            />
            <p>Your firstname is: {firstname}</p> 
            <p>Your lastname is: {lastname}</p>
            <p>{greeting}</p>
        </div>
    );
}

let FoodApp = () => {

    let [food, setFood] = useState("");
    let [quantity, setQuanity] = useState(1);
    let [order, setOrder] = useState(false);



    let orderForm = (
        <form onSubmit={() => setOrder(true)}>
            <div>
                <label>
                    Food
                    <input
                        onChange={(e) => setFood(e.target.value)}
                        placeholder="What food would you like?"
                        name="food"
                        value={food}
                    />
                </label>
            </div>
            <div>
                <label>
                    Quantity
                    <select
                        onChange={(e) => setQuanity(e.target.value)}
                        name="quantity"
                        value={quantity}
                    >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </label>
            </div>
            <button type="submit">Place your order</button>
        </form>
    );

    let orderReceived = (
           <div>
               <h3>Order received!</h3>
               <p>Food: {food}</p>
               <p>Quantiy: {quantity}</p>
               <p>Coming right up!</p>
           </div> 
    );

    let displayElement = order ? orderReceived : orderForm;

    return (
        <div>
            <h1>What would you like to eat?</h1>
            {displayElement}
        </div>
    );
}


let PinApp = () => {
    let [pin, setPin] = useState("");
    let [error, setError] = useState(false);

    let handleSubmit = (e) => {
        e.preventDefault();
        if (pin === "1234") {
            alert("Thank you for the pin!");
            setPin("");
        } else {
            setPin("");
            setError(true);
        }
    }

    let err = error ? <p style={{color:"red"}}>Wrong!. Please try again</p> : null;

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
        {err}
            <label>Enter your pin:</label>
            <input
                type="text"
                value={pin}
                onChange={(e) => {setPin(e.target.value); setError(false)}}
            />
            <button type="submit">Enter</button>
        </form>
    )
}

export default PinApp; 