

let Guest_list : string[]=['Maryline','Suneel','steve'];
// for(let i=0; i <Guest_list. length ; i++){

//     console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

// }
let absent_guest: string ='Maryline';
let New_guest: string ='Sheral';

Guest_list[0]=New_guest;

// for(let i=0; i <Guest_list. length ; i++){

//     console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

// }
console. log (`Mr.s${absent_guest} is not coming to the party`);

console. log('Good New!We Find Big Table So we are Inviting 3 more Guests.')
// array mai  3 guest add kiye hai .
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2,0,'suzana');
Guest_list.push('zoya');
// yahan pr maine 6 guest k array ko print kiya hai .
for(let i=0; i <Guest_list. length ; i++){

    console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}
// sorry msg to guest for not inviting.
console.log('\nSorry we can not arrange big table , only two people invited.');
// yahan maine guest remove kiye hai .
while(Guest_list.length>2){
    let remove_Guest =Guest_list.pop();
    console.log(`Sorry Mr${remove_Guest},You are not invited for dinner.`);
}
// humare bachy huway do guest.
for(let i=0; i <Guest_list. length ; i++){

    console.log('Dear Mr.'+ Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!')

}
// maine saray guest array sy remove kr diye.
Guest_list.splice(0,2);
console.log(Guest_list);