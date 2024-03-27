//{ { { { var sera = 'sera?!?!' } } } }

{ 
    {
         {
             { var sera = 'sera?!?!' 
                console.log(sera)
            }
         } 
        
    }
 }
console.log(sera)
//As VAR conseguem ser acessadas de 
//qualquer lugar contando que nao esteja em um funcao. por ex:

function teste() {
    var local = 123
    console.log(local)
}

//teste()
console.log(local)
// nao consegue chamar a variavel pois VAR esta dentro de uma funcao