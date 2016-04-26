require.config({
    paths : {
        "jquery" :["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery.min"],//url自动添加.js
			//当net上的jquery没有加载成功后，会加载本地js目录下的jquery
        "a" : "js/a"   ,
		"k" : "js/k"   
    }
})
//调用一下，否则不加载上面的jquery和a.js
require(["jquery","a"], function(moduleA,moduleB) {
  console.log($('body'),moduleB);
   acc()

});

require(['k'], function (math){
　　　　alert(math.add(1,1));
});