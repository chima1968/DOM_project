const color_box=document.getElementById('color-box');

/*color_box.addEventListener('click',()=>{
    color_box.style.backgroundColor=color_box.style.backgroundColor==='red'? 'blue':'red';
});*/



function getrandomcolor(){

    const letters='0123456789ABCDEF';
    let color='#';
    for (let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
};

const  change_color=document.getElementById('change-color-btn');
change_color.addEventListener('click',()=>{
        color_box.style.backgroundColor=getrandomcolor();
});
