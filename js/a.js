console.log('a.js load succ')
function acc(){
	console.log('acc Fun');
	
};
define(function(){
    function fun1(){
      console.log("a.js,it works");
    }
    fun1();
})