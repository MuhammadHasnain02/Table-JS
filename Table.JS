// one in table name
// second in table stop value

var i;
var userinput = +prompt ('Enter Any Table Name')
var userinput2= +prompt ('Enter Value Stop Table')

for( i=1; i<=userinput2; i++ )
{

document.write(userinput + ' * ' + i+ ' = ' + userinput*i + '<br>')

}