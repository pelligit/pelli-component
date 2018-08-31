export default function(tar){
    let count = 0;
    for(let key in tar){
        count++;
    }
    return count;
};