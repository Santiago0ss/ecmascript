function newFuntion(name, age, contry) {
    var name = name || "Santiago";
    var age = age || "21";
    var contry = contry || "Colombia";
    console.log(name, age, contry);
}

// es6

function newFuntion2(name = "santiago", age = "21", contry = "Colombia"){
    console.log(name, age, contry)
};

newFuntion2();
newFuntion2("Ricardo", "23", "MX")