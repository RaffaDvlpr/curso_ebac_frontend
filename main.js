// // // // // // // // // Base café // // // // // // // // //

function FazerCafe(mlAgua, gCafe){
    this.mlAgua = mlAgua
    this.gCafe = gCafe

    this.inicio = function(){
        console.log("Ele colocou na panela "+this.mlAgua+"ml de água, aqueceu até ferver")
        console.log("Colocou "+this.gCafe+"g de café solúvel")
    }
}

//                                                                   //
//                                                                  //
// // // // // // // // // Cafés com leite // // // // // // // // //

function CafeLeite(mlAgua, gCafe, mlLeite){
    FazerCafe.call(this, mlAgua, gCafe)
    this.mlLeite = mlLeite

    this.leite = function(){
        console.log("adicionou "+this.mlLeite+"ml de leite")
    }
}

function CafeLeiteAcucar(mlAgua, gCafe, mlLeite, gAcucar){
    CafeLeite.call(this, mlAgua, gCafe, mlLeite)
    this.gAcucar = gAcucar

    this.acucar = function(){
        console.log("e finalizou com "+this.gAcucar+"g de açucar")
    }
}

function CafeLeiteChocolate(mlAgua, gCafe, mlLeite, gChocolate){
    CafeLeite.call(this, mlAgua, gCafe, mlLeite)
    this.gChocolate = gChocolate

    this.chocolate = function(){
        console.log("e finalizou com "+this.gChocolate+"g de chocolate em pó")
    }
}

//                                                                              //
//                                                                             //
// // // // // // // // // Café achocolatado e canela // // // // // // // // //

function CafeChocolate(mlAgua, gCafe, gChocolate){
    FazerCafe.call(this, mlAgua, gCafe)
    this.gChocolate = gChocolate

    this.chocolate = function(){
        console.log("adicionou "+this.gChocolate+"ml de chocolate em pó")
    }
}

function CafeChocolateCanela(mlAgua, gCafe, gChocolate, gCanela){
    CafeChocolate.call(this, mlAgua, gCafe, gChocolate)
    this.gCanela = gCanela

    this.canela = function(){
        console.log("e finalizou com "+this.gCanela+"g de canela")
    }
}

//
//
// // // // // // // // //  CRIAÇÃO DOS CAFÉS

const cafeLeitado = new CafeLeite(100, 50, 100)
const cafeAcucarado = new CafeLeiteAcucar(80, 50, 100, 20)
const cafeAchocolatado = new CafeLeiteChocolate(70, 40, 100, 40)
const cafeChoconela = new CafeChocolateCanela(150, 40, 40, 20)

//
//
// // // // // // // // //  CHAMADAS DOS CAFÉS

// Englobando chamada
const get_cafeLeitado = function(){cafeLeitado.inicio()+cafeLeitado.leite()}
const get_cafeAcucarado = function(){cafeAcucarado.inicio()+cafeAcucarado.leite()+cafeAcucarado.acucar()}
const get_cafeAchocolatado = function(){cafeAchocolatado.inicio()+cafeAchocolatado.leite()+cafeAchocolatado.chocolate()}
const get_cafeChoconela = function(){cafeChoconela.inicio()+cafeChoconela.chocolate()+cafeChoconela.canela()}

// Chamando 

console.log("//                         //")
get_cafeLeitado()
console.log("//                         //")
get_cafeAcucarado()
console.log("//                         //")
get_cafeAchocolatado()
console.log("//                         //")
get_cafeChoconela()