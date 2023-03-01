// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor='blue'
//         setTimeout(()=>{
//             document.body.style.backgroundColor='gray'},
//         2000)
//     },
//     2000)
// },
// 2000)

const delayedcolorchange=(color, time, donext)=>{
    setTimeout(()=>{
             document.body.style.backgroundColor=color,
             donext && donext();
            }, time)
}

delayedcolorchange('red', 1000, ()=>{
    delayedcolorchange('orange', 1000, ()=>{
        delayedcolorchange('yellow', 1000, ()=>{
            delayedcolorchange('green', 2000, ()=>{
                delayedcolorchange('blue', 2000, ()=>{
               })
            })
        })
    })
})
