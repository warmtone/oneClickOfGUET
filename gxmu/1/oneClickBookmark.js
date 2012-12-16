(function(){
	var doit = function(){
		//console.log('do it');
		var ratio = document.getElementsByTagName('input');
		for(var i=0;i<ratio.length;i++){
			if(ratio[i].getAttribute('value')==100) ratio[i].checked = true;
		}
		var evObj = document.createEvent('MouseEvent');
		evObj.initEvent('click',true,false);
		document.getElementsByName('lwBtntijiao')[0].dispatchEvent(evObj);
	};
	doit();
})();