
document.getElementById('sum').innerHTML = `${
[1,2,3,4].reduce((sum,num)=>{
    return sum + num
},0)
}`
function reduce(arr,cb,initValue){  
    if(initValue === undefined){
        initValue=arr[0],
        arr= arr.slide(1)
    }
    for(const item of arr){
        initValue= cb(initValue,item)
    }
    return initValue
}