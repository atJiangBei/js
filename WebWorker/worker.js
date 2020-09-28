

var  startWork = Date.now();
var a = 0;
for(var i=0;i<1000000000;i++){
	a++
}
console.log("结束",a,Date.now()-startWork)
postMessage(i)