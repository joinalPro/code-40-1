//split part
const lyrics = 'ami tomay valobashi. bondu tumi kala pakhi';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const char = lyrics.split('');
console.log(sentence);
console.log(parts);
console.log(char);

//slice part

const partial = lyrics.slice(4, 9);
console.log(partial);