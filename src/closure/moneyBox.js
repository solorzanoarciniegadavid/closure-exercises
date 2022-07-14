function mymoneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log("MoneyBox: " , saveCoins);
    }
    return countCoins;
}

 const myMB = mymoneyBox();


myMB(5);
myMB(10);
myMB(50);
