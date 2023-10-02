(function () {
    console.log('mi primera IIFE')
})();

(function (d,w,c) {
    console.log('Mi segunda IIFE')
    console.log(d)
    c.log(w)
    c.log('este es un consolelogosinho')
})(document, window, console);

(function () {
    console.log('esto es muy facil')
})();

// FORMAS DE ESCRBIR LAS FUNCIONES ANONIMAS AUTOEJECUTABLES

// CLASICA
(function(){
    console.log('Versión clasica')
})();

// La Crockford (Js the good parts)
((function (){
    console.log('versión Crockford')
})());

// Unaria
+function(){
    console.log('version unaria')
}()

//  Facebook
!function(){
    console.log('version Facebook')
}()