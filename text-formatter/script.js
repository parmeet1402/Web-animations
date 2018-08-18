let text_input = document.querySelector('#text_input');
let color_picker = document.querySelector('#color_picker');
let text_size = document.querySelector('#text_size');
let color_view = document.querySelector('#color_view');
let bold_btn = document.querySelector('#bold_btn');
let italic_btn = document.querySelector('#italic_btn');
let underline_btn = document.querySelector('#underline_btn');

function updateUI() {
    if (color_picker.value.length === 3 || color_picker.value.length === 6) {
        document.documentElement.style.setProperty('--text_color', color_picker.value);
    }
    document.documentElement.style.setProperty('--text_size', text_size.value);
    
    if (bold_btn.checked){
        text_input.style.fontWeight= "900";
    }else{
        text_input.style.fontWeight= "300";
    }
    
    if(italic_btn.checked){
        text_input.style.fontStyle = "italic";
    }else{
        text_input.style.fontStyle = "normal";
    }

    if(underline_btn.checked){
        text_input.style.textDecoration =  "underline";
    }else{
        text_input.style.textDecoration =  "none";
    }
}



color_picker.addEventListener('input', updateUI);
text_size.addEventListener('change', updateUI);
bold_btn.addEventListener('click', updateUI);
italic_btn.addEventListener('click', updateUI);
underline_btn.addEventListener('click', updateUI);