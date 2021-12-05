function test1(){
    var arr1 = [];
    for (let index = 0; index <= 10; index++) {
        arr1.push(index);
        
    }
    let ret = arr1.toString();
    return ret;
}
console.log(test1());