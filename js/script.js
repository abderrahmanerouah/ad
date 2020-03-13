var bs = document.getElementsByClassName('testbtn');
var paras = document.getElementsByClassName('para');

for(let i = 0; i < bs.length; i++)
{ bs[i].addEventListener('click', function(){
	paras[i].textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae voluptatum quasi voluptatibus illum expedita cum impedit eligendi officia soluta ducimus itaque repellat repudiandae porro ex, in fuga sapiente? Quae?";
})}
