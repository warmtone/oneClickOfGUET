oneClickOfGUET
==============

适用于旧版教务系统的一键评教
原理比较简单，在书签上附一段js调用oneclickbookmark.js， js里遍历input标签，然后全部选中value==100的，也就是最高评价那个选项 把ratio的checked属性设成true，最后模拟一个点击事件提交即可

    var evObj = document.createEvent('MouseEvent'); 
    evObj.initEvent('click',true,false); 
    document.getElementsByName('lwBtntijiao')[0].dispatchEvent(evObj);
    
这个方法比较有意思，ie和ff都通用，当然chrome也没问题，opera没试过。。 跟jQuery的click()实现差不多，但是jQuery处理得更优雅一些

基本上所有的教务系统评教都可以这么处理吧。。。

##许可
==============

本代码使用 BSD-2 许可证

    Copyright (c) 2012, warmtone
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    * Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.