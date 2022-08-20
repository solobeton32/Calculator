
let p = document.getElementsByTagName('p');
let key = document.querySelector('.keyboard');
let buttons = Array.from(key.children);
buttons.forEach(button => {
    button.onclick = (value)=>{
        let v = button.value;
        let input = p[1].innerHTML += v;
        if(v == 'clear'){
            p[1].innerHTML = 0;
            p[0].innerHTML = '';
        }
        else if(v == ''){
            p[1].innerHTML = p[1].innerHTML.substr(0, p[1].innerHTML.length - 1);
        }
        else if(v == 'equal'){
            input = input.substr(0, input.length -5);
            let result = eval(input);
            p[0].innerHTML = input;
            p[1].innerHTML = result;
        }
    };
});