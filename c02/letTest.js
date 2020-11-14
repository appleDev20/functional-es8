var simpleFn = () => { //function scope
    if(true) {
        let a = 1;
        var b = 2;
        console.log(a)
        console.log(b)
    } //if block scope
    console.log(b) //function scope
    console.log(a) //function scope
}

simpleFn();
