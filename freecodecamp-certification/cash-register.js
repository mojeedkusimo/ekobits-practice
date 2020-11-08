let checkCashRegister = (price, cash, cid) => {
// Get the change required for the purchase
// Evaluate the cid to a single number value
// Check evaluated cid with change
    // if evaluated cid is less than change
        // return { status: "INSUFFICIENT_FUNDS", change: [] }
    // if evaluated cid is equal to change
        // return { status: "CLOSED", change: changeFromCID }
    // else return { status: "OPEN", change: changeFromCID }

    let diff = cash - price;
    let evaluatedCID = cid.reduce((acc, val) => {
            return acc + val[1];
    }, 0);
    let CIDResponse = { status: "", change: [] };
    let CIDChange = [
        ["ONE HUNDRED", 0],
        ["TWENTY", 0],
        ["TEN", 0],
        ["FIVE", 0],
        ["ONE", 0],
        ["QUARTER", 0],
        ["DIME", 0],
        ["NICKEL", 0],
        ["PENNY", 0]
    ];

    let currencyValue = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let currencyValueInCID = [];
    let noOfCurrency = [];
    let noOfCurrencyChange = Array(9).fill(0);

    // Get the number each unit value of currency in the cid received
    cid.reverse().forEach((val,index) => {
        noOfCurrency.push(Number(((val[1])/currencyValue[index]).toFixed()));
        if (val[1] === 0) {
            currencyValueInCID.push(0)
        } else {
            currencyValueInCID.push(Number(((val[1])/noOfCurrency[index]).toFixed(2)));
        }
    });

    // Decrease the number each unit value of currency in the cid on every deduction of price and increase the corresponding number of unit of change to be given
    let changeToGive = diff;
    currencyValueInCID.forEach((val, index, array) => {
        if (val !== 0 && Number(changeToGive.toFixed(2)) >= val && noOfCurrency[index] > 0) {
            for (let i = 0; i < noOfCurrency[index]; i++) {
                if (Number(changeToGive.toFixed(2)) >= val) {
                    changeToGive = Number(changeToGive.toFixed(2)) - val;
                    noOfCurrencyChange[index] += 1;
                }
            }
        }
    });

    // Calculate the total value of each currency unit to be given as change 
    CIDChange.forEach((val, index) => {
        val[1] = Number((currencyValue[index] * noOfCurrencyChange[index]).toFixed(2));
    });

    // Removing any total value of currency unit equal to zero
    let changeWithMoreCIDLeft = CIDChange.reduce((acc, val) => {
        if (val[1] !== 0) {
          acc.push(val);   
        }
        return acc;
    }, []);

    // Update response object based on the change to be given
    if ( evaluatedCID < diff || changeToGive > 0 ) {
        CIDResponse.status = "INSUFFICIENT_FUNDS";
        console.log(CIDResponse);
    } else if ( evaluatedCID === diff ) {
        CIDResponse.status = "CLOSED";
        CIDResponse.change = cid.reverse();
        console.log(CIDResponse);

    } else {
        CIDResponse.status = "OPEN";
        CIDResponse.change = changeWithMoreCIDLeft;
        console.log(CIDResponse);
        console.log(changeToGive);
    }
}


// checkCashRegister(206, 1059, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 1000]])


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])