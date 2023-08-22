const lyrics = 'ami tomay Valobashi';

const searchString = 'Valobashi';
// const doesExist = lyrics.toLowerCase(searchString.toLowerCase);
// const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);


// console.log (lyrics.indexOf('tomay'));

if(lyrics.indexOf('tomay')!== -1){
    console.log('Exist inside the string')
}
else{
    console.log('not Existed');
}