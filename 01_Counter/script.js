document.addEventListener('DOMContentLoaded',function(){
    const input=document.querySelector('#input');
    const minbutton=document.getElementById('min');
    const resetbutton=document.getElementById('reset');
    const maxbutton=document.getElementById('max');

    let counter=0;

    input.addEventListener('change',function(){
        counter=parseInt(input.value)
    })

    minbutton.addEventListener('click',function(){
        counter--;
        input.value=counter;
    });

    resetbutton.addEventListener('click',function(){
        counter=0;
        input.value=counter;
    });

    maxbutton.addEventListener('click',function(){
        counter++;
        input.value=counter;
    })

}
)