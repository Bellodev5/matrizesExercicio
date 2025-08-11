let tamanhoMatriz = 5
//////// Questão 1
let mat1 =[]
for(let i =0; i<tamanhoMatriz; i++){
    mat1[i] =[]
    for(let j =0; j<tamanhoMatriz; j++){
        if(i%2===1){
            mat1[i][j]=3
        }else{
            mat1[i][j]=5
        }
    }
}
//////// Questão 2
let mat2 =[]
for(let i =0; i<tamanhoMatriz; i++){
    mat2[i] =[]
    for(let j =0; j<tamanhoMatriz; j++){
        if(i%2===1){
            mat2[i][j]=5
        }else{
            mat2[i][j]=7
        }
    }
}
//////// Função para somar matrizes
function somaMatriz(){
    let somaTotal = 0
    for(i =0; i<tamanhoMatriz; i ++){
        for (let j = 0; j < tamanhoMatriz; j++) {
            somaTotal += mat1[i][j] + mat2[i][j];
        }    
    }
    return somaTotal
}
let somaMatrizes = somaMatriz()

//////// # Respostas
console.table(mat1)
console.table(mat2)
console.log("A soma das matrizes é:" + somaMatrizes)
