var img = document.getElementById('sam');
var img_array = ['http://www.w3schools.com/images/w3logotest2.png', 'http://www.w3schools.com/html/img_html5_html5.gif', 'assets/image-3.png', 'assets/image-4.png', 'assets/image-2.png', 'assets/image-1.png',];
function setImage(obj)
{
	var value = obj.value;
	img.src = img_array[value];
}
