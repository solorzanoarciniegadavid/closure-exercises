//ejemplo de block scope y el alcance de las variables

function fruits(){
    if(true){
        var fruit1 = 'Apple'; //Function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = "Banana"; //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);


}

fruits();