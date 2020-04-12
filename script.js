function check(){
    let choice = prompt("Please choose Your Gender");
    let gender = document.getElementById('gender');

if(choice == 'male'){
    gender.innerHTML = 'Hi King,  I wanted to say AprilFool but nah, you are too good for that.';
}else if(choice == 'female'){
    gender.innerHTML = "Hi Sweetheart,  I wanted to say AprilFool but nah, you are too good for that."
}else {
    gender.innerHTML = 'Hi Anonymous,  I wanted to say AprilFool but nah, you are too good for that.'
}

}

check();
