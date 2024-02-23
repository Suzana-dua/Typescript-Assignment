

let Guest_list : string[]=['Maryline','Suneel','steve'];
// for(let i=0; i <Guest_list. length ; i++){

//     console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

// }
let absent_guest: string ='Maryline';
let New_guest: string ='Sheral';

Guest_list[0]=New_guest;

for(let i=0; i <Guest_list. length ; i++){

    console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}
console. log (`Mr.s${absent_guest} is not coming to the party`);

console. log('Good New!We Find Big Table So we are Inviting 3 more Guests.')

Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2,0,'suzana');
Guest_list.push('zoya');
for(let i=0; i <Guest_list. length ; i++){

    console.log('Dear Mr.'+ Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')

}
