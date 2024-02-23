let personNAME: string ='';

personNAME = prompt('What is your name?') ||'';
if (personNAME !== null && personNAME !==''){
    alert(`Hello ${personNAME} , would you like to learn some Python today?`)
}
else{
    alert('You have to fill your name !')
}