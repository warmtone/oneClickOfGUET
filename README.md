oneClickOfGUET
==============

适用于旧版教务系统的一键评教
原理比较简单，在书签上附一段js调用oneclickbookmark.js， js里遍历input标签，然后全部选中value==100的，也就是最高评价那个选项 把ratio的checked属性设成true，最后模拟一个点击事件提交即可

var evObj = document.createEvent('MouseEvent'); evObj.initEvent('click',true,false); document.getElementsByName('lwBtntijiao')[0].dispatchEvent(evObj);
这个方法比较有意思，ie和ff都通用，当然chrome也没问题，opera没试过。。 跟jQuery的click()实现差不多，但是jQuery处理得更优雅一些

基本上所有的教务系统评教都可以这么处理吧。。。

本份代码遵循BSD开源协议