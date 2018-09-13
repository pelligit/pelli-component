String.prototype.trim=function(){
	return this.replace(/(^\s*)|(\s*$)g, '');
}

String.prototype.ltrim=function(){
	return this.replace(/(^\s*)/g, '');
}

String.prototype.rtrim=function(){
	return this.replace(/(\s*$)/g, '');
}


function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, '');
}

function ltrim(str){
	return str.replace(/(^\s*)/g, '');
}

function rtrim(str){
	return str.replace(/(\s*$)/g, '');
}
