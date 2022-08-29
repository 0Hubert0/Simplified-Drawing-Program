var noc=0, e, f=true;
var punkt = new Array(10000);

document.addEventListener("click", draw, true);
document.addEventListener("mousedown", checkb1, true);
document.addEventListener("mouseup", checkb2, true);

class Point
{
	constructor (y, x, color="black", radius="5")
	{
	this.y=y;
	this.x=x;
	this.color=color;
	this.radius=radius
	}
	
	drawpoint()
	{
		noc++;
		addelement(this.y, this.x, this.radius, this.color);
	}
	
}
function checkb2()
{
	f=false;
	checkb();
}

function checkb1()
{
	f=true;
	checkb();
}

function checkb()
{
	if(f==false){
	document.removeEventListener("mousemove", draw, false);}
	else if	(f==true ){
	document.addEventListener("mousemove", draw, false);}
}

function draw(e)
{	
	var cursorX = e.pageX;
	var cursorY = e.pageY;
	if(cursorX>=60 && cursorX <=860 && cursorY>=89 && cursorY<=490){
	punkt[noc] = new Point (cursorY, cursorX);
	punkt[noc].drawpoint();}
}

function addelement(y, x, radius, color)
{
		var newDiv = document.createElement("div");
		document.getElementById("simulation").appendChild(newDiv);
		var t =y-95+"px";
		newDiv.style.setProperty("margin-top", t);
		var y =x-63+"px";
		newDiv.style.setProperty("margin-left", y);
		newDiv.style.setProperty("background-color",color);
		var u =radius*2+"px";
		newDiv.style.setProperty("width", u);
		newDiv.style.setProperty("height", u);
		newDiv.style.display="absolute";
		newDiv.setAttribute("class", "point");
}


