// let matrix = [[0,0,0],[0,0,0],[0,0,0]]

// // this is a matrix n x n - מטריצה ריבועית

// // function matrixBuilder(size){
// //     let matrix = [];
// // //     for (let row = 0; row < size; row++) {
// // //         let inner_arr = []
// // //         for(let col=0; col < size; col++){
// // //             inner_arr.push(0);
// // //         }
// // //         matrix.push(inner_arr)
// // //     }
// // //     return matrix
// // // }

// // // let m = matrixBuilder(5)
// // // console.log(m)

// // function matrixBuilder2(size, arguments=0){
// //     let matrix = [];
// //     for (let row = 0; row < size; row++) {
// //         let inner_arr = []
// //         for(let col=0; col < size; col++){
// //             inner_arr.push(arguments);
// //         }
// //         matrix.push(inner_arr)
// //     }
// //     return matrix
// // }

// // let n = matrixBuilder2(8, "x")
// // console.log(n)

// // not like this***

// function setIndex(i, j, val){
//     let matrix = [];
//     for (let row = 0; row < i; row++) {
//         let inner_arr = []
//         for(let col=0; col < i; col++){
//             inner_arr.push(val);
//             let j = 1;
            
//                     inner_arr.push(j);
                
//                 matrix.push(inner_arr)
//             }
        
//         matrix.push(inner_arr)
//     }
//     return matrix
// }

// let o = setIndex(3,3,0)
// console.log(o)

// [[0,0,0],[0,1,0],[0,0,0]]

// let m = matrixBuilder2(3)

// function setIndex(i, j, val){
//     let matrix = [];
//     for (let row = 0; row < i; row++) {
//         let inner_arr = []
//         for(let col=0; col < i; col++){
//             inner_arr.push(val);
//             let j = 1;
            
//                     inner_arr.push(j);
                
//                 matrix.push(inner_arr)
//             }
        
//         matrix.push(inner_arr)
//     }
//     return matrix
// }


function printMat(m){
    for (let i = 0; i < m.length; i++){
        console.log(m[i])
    }
}


printMat(3)

function diagonal(m, val = 1) {
    // for (let i = 0; i < m.length; i++){
    //     m[i][i] = val;
    
    //     }
    //     return m;
    // }
    
    // function printMat(m){
    //     for(let i = 0; i < m.length; i++){
    //         console.log(m[i])
    //     }
    // }
    
    // printMat(diagonal(matrixBiulder(3,0)))
    
    
    function diagonal1(m, val = 1,) {
        let i = 0;
        
        while (i < m.length) {
            m[i][i] = val;
            console.log(m[i])
            i++
        }
    }
    diagonal1(matrixBiulder(5, 0))
    
    // function diagonal(m, val = 1,) {
    //     let i = 0;
    //     do {
    //     m[i][i] = val;
    //     console.log(m[i])
    //     i++
    //     }
    //     while (i < m.length) 
          
    // }
    // diagonal(matrixBiulder(5, 0))