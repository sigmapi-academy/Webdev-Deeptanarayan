
function showMessage(from, text=`no text given`){
    from = `*` + from + `*`;
    console.log(`${from} : ${text}`)
}

let from = `Deeptanarayan`;

showMessage(from);
showMessage('Harry', 'Good Afternoon')


