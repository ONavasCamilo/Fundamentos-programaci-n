var usuario = "w";
function sayHello(user) {
    console.log("Hola ".concat(user.toUpperCase()));
}
sayHello(usuario);
sayHello(1);
sayHello(true);
sayHello(["No", "Funca"]);
