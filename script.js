let string = ""

let button = document.getElementsByClassName('btnjs');

Array.from(button).map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '=':
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch {
                    document.querySelector('input').value = "Invalid!";
                }
                break;
            case 'Clear':
                string = "";
                document.querySelector('input').value = string;
                break;
            case 'Del':
                if (e.target.innerText) {
                    string = string.slice(0, -1);
                    document.querySelector('input').value = string;
                }
                break;
            default:
                string = string + e.target.innerText;
                document.querySelector('input').value = string;
        }
        // if (e.target.innerText == '=') {
        //     string = eval(string);
        //     document.querySelector('input').value = string;
        // }
        // else if (e.target.innerText == 'Clear') {
        //     string = "";
        //     document.querySelector('input').value = string;
        // }
        // else if (e.target.innerText == 'Del') {
        //     if (e.target.innerText) {
        //         string = string.slice(0, -1);
        //         document.querySelector('input').value = string;
        //     }
        // }
        // else {
        //     string = string + e.target.innerText;
        //     document.querySelector('input').value = string;
        // }
    })
})