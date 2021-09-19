const botao11 = document.getElementById("botao11");
const botao12 = document.getElementById("botao12");
const botao21 = document.getElementById("botao21");
const botao22 = document.getElementById("botao22");
const botao31 = document.getElementById("botao31");
const botao32 = document.getElementById("botao32");


let endDaImg1 = document.getElementById("img1id")
let endDaImg2 = document.getElementById("img2id")
let endDaImg3 = document.getElementById("img3id")

let texturaAtualDaImg1 = 0
let texturaAtualDaImg2 = 0
let texturaAtualDaImg3 = 0

const QtdDeImgs = 4



botao11.addEventListener("click", change)
botao12.addEventListener("click", change)
botao21.addEventListener("click", change)
botao22.addEventListener("click", change)
botao31.addEventListener("click", change)
botao32.addEventListener("click", change)



function change(){
    let clicouNoMaisOuNoMenos = this.id.split("o")[2].split("")[1]
    let devoModificarAImgdeNumero = this.id.split("o")[2].split("")[0]
    console.log(clicouNoMaisOuNoMenos, devoModificarAImgdeNumero)

    switch (devoModificarAImgdeNumero) {
        
        

        case "1":
            if (clicouNoMaisOuNoMenos == 1) {
                if(texturaAtualDaImg1 == 0) {
                    texturaAtualDaImg1 = QtdDeImgs
                    endDaImg1.src = `assets/${texturaAtualDaImg1}.jpg`
                    document.getElementById("ImgCentral1").src = `assets/imgcentro/1${texturaAtualDaImg1}.png`
                }
                else {
                    texturaAtualDaImg1--
                    console.log(texturaAtualDaImg1)
                    endDaImg1.src = `assets/${texturaAtualDaImg1}.jpg`
                    document.getElementById("ImgCentral1").src = `assets/imgcentro/1${texturaAtualDaImg1}.png`
                }
                
            }
            
            else {
                if(texturaAtualDaImg1 >= QtdDeImgs) {
                    texturaAtualDaImg1 = 0
                    endDaImg1.src = `assets/${texturaAtualDaImg1}.jpg`
                    document.getElementById("ImgCentral1").src = `assets/imgcentro/1${texturaAtualDaImg1}.png`
                }
                else {
                    texturaAtualDaImg1++
                    console.log(texturaAtualDaImg1)
                    endDaImg1.src = `assets/${texturaAtualDaImg1}.jpg`
                    document.getElementById("ImgCentral1").src = `assets/imgcentro/1${texturaAtualDaImg1}.png`
                }
                
                }           
        break;







        
        

        case "2":
            if (clicouNoMaisOuNoMenos == 1) {
                if(texturaAtualDaImg2 == 0) {
                    texturaAtualDaImg2 = QtdDeImgs
                    endDaImg2.src = `assets/${texturaAtualDaImg2}.jpg`
                    document.getElementById("ImgCentral2").src = `assets/imgcentro/2${texturaAtualDaImg2}.png`
                }
                else {
                    texturaAtualDaImg2--
                    console.log(texturaAtualDaImg2)
                    endDaImg2.src = `assets/${texturaAtualDaImg2}.jpg`
                    document.getElementById("ImgCentral2").src = `assets/imgcentro/2${texturaAtualDaImg2}.png`
                }
                
            }
            
            else {
                if(texturaAtualDaImg2 >= QtdDeImgs) {
                    texturaAtualDaImg2 = 0
                    endDaImg2.src = `assets/${texturaAtualDaImg2}.jpg`
                    document.getElementById("ImgCentral2").src = `assets/imgcentro/2${texturaAtualDaImg2}.png`
                }
                else {
                    texturaAtualDaImg2++
                    console.log(texturaAtualDaImg2)
                    endDaImg2.src = `assets/${texturaAtualDaImg2}.jpg`
                    document.getElementById("ImgCentral2").src = `assets/imgcentro/2${texturaAtualDaImg2}.png`
                }
                
                }           
        break;


                
        

        case "3":
            if (clicouNoMaisOuNoMenos == 1) {
                if(texturaAtualDaImg3 == 0) {
                    texturaAtualDaImg3 = QtdDeImgs
                    endDaImg3.src = `assets/${texturaAtualDaImg3}.jpg`
                    console.log("case 1 com textura menor")
                    document.getElementById("ImgCentral3").src = `assets/imgcentro/3${texturaAtualDaImg3}.png`
                }
                else {
                    texturaAtualDaImg3--
                    console.log(texturaAtualDaImg3)
                    endDaImg3.src = `assets/${texturaAtualDaImg3}.jpg`
                    document.getElementById("ImgCentral3").src = `assets/imgcentro/3${texturaAtualDaImg3}.png`
                }
                
            }
            
            else {
                if(texturaAtualDaImg3 >= QtdDeImgs) {
                    texturaAtualDaImg3 = 0
                    endDaImg3.src = `assets/${texturaAtualDaImg3}.jpg`
                    document.getElementById("ImgCentral3").src = `assets/imgcentro/3${texturaAtualDaImg3}.png`
                }
                else {
                    texturaAtualDaImg3++
                    console.log(texturaAtualDaImg3)
                    endDaImg3.src = `assets/${texturaAtualDaImg3}.jpg`
                    document.getElementById("ImgCentral3").src = `assets/imgcentro/3${texturaAtualDaImg3}.png`
                }
                
                }           
        break;
    }


}





// function fazerEnd() {
    
//     return `endDaImg${texturaAtualDaImg2}`
// }

// function fazerNomeDaImg(){
//     return `assets/${texturaAtualDaImg1}.jpg`
// }

// function change() {
//     fazerEnd().src = fazerNomeDaImg(texturaAtualDaImg1++)
//     console.log(fazerEnd().src)

// }





// function change() {
//     let clicouNoMaisOuNoMenos = this.id.split("o")[2].split("")[1]
//     let devoModificarAImgdeNumero = this.id.split("o")[2].split("")[0]
    
//     if(clicouNoMaisOuNoMenos == 1) {
//         let estouModificando = `endDaImg${devoModificarAImgdeNumero}`

//         let texturaAtual = `texturaAtualImg${devoModificarAImgdeNumero}`
//         var numDaImg = texturaAtual

//         numDaImg--;
//         texturaAtual = numDaImg;
//         (estouModificando + devoModificarAImgdeNumero).src = "assets/4.jpg";
//         console.log("endDaImg"+`${devoModificarAImgdeNumero}`);

//     }
    
//     else {
//         numDaImg++
//         estouModificando.src = `assets/${numDaImg}.jpg`

        
//     }
    // console.log(`devoModificarAImgdeNumero = ${devoModificarAImgdeNumero}`) 
    // console.log(`clicouNoMaisOuNoMenos = ${clicouNoMaisOuNoMenos}`) 
    // console.log(`estouModificando = ${estouModificando}`) 
    // console.log(`numDaImg = ${numDaImg}`) 
    // console.log(`texuraAtual = ${texturaAtual}`)
    // console.log(`endDaImg${devoModificarAImgdeNumero}`)
    









    // if (1 < 5) {
    //     1 = ++1
    //     
    //     console.log(1)
    // }
    // else {
    //     1 = 1
    //     textura1.src = `assets/${1}.jpg`
    //     console.log(1)
//     // }
// }