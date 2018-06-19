# 🐯String

@(知识库)

---

## Important



### 🎉 slice [start, stop( 不包含此位置的字符串 )] 用于从原来字符串中取出子字符串并返回新的.

1. 有2个参数,第1个参数子字符串的起始位置,第2个参数子字符串的结束位置(不包含该位置)
	
	var str7 = "hello world";
	var res14 = str7.slice(1,3);//'el'

2. 1个参数 如果省略slice()中的第二个参数,则表示子字符串一直到整个字符串结束为止.
	
	var res15 = str7.slice(1);// 'ell0 world'

3. 如果该函数只有一个参数,且为负数,则从字符串结尾开始(从右向左)计算位置
	
	var res16 = str7.slice(-5);//world

4. 如果该函数的第一个参数大于第二个参数,则返回一个空的字符串

	var res17 = str7.slice(12,5);//返回一个空字符串""



###🎉  substring [ start, stop(不包含) ] 之间的新的字符串


	#: 从原字符串中取出子字符串,跟slice使用一样.但是我们一般优先使用slice函数
1. 如果该函数的第一个参数大于第二个参数,系统会自动调换2个参数的位置

	var str8 = "helloWorld";
	var res18 = str8.substring(0,2);// 'he'
	var res18 = str8.substring(2,0);// 'he'

2. 如果函数参数中有负数,系统会把负数转换为0

	var res20 = str8.substring(0,-4);//会把-4变成0 返回空字符串""; 等效于str8.substring(0,0)



##🎉🎉🎉 substr [start,length] 开始位置起的指定长度新的字符串

1. 省略第二个参数 表示一直到字符串结束

		var res22 = "abcdef".substr(4);//ef

2.  如果第一个参数是负数,表示从右向左确定字符串的起始位置

	var  res23 = "abcdef".substr(-2);//ef

3. 该函数两个参数,第二个参数值是负数,则会自动转换为0

	var res24  ="abcdefg".substr(2,-3);//"",第二个参数-3会变成0
	//等效于"abcdefg".substr(2,0)


##  split()	把字符串分割为字符串数组
```
	var  res23 = "abcdef".split('');// ['a',"b","c","d","e","f"]
```

..............................
1.  创建字符串  New String( ) / "string"/ + 连接符

```
 let demo1 = new String("hello world")
 let demo2 = "hello world"
 let demo3 = '223' + 22  //转换 + 为字符串连接符号 ''22322''
```

2. String.fromCharCode
```
var str = String.fromCharCode(0x12,0x45,0x67,0x122,0xfe,0x23);
1.该方法中的参数是一系列unicode的码点(例如:'\u0012' 码点:0012),返回对应的字符串.
2.传入参数的值不能超过0xFFFF大小
3.该方法定义在对象本身,而不是创建对象实例方法上面

#: String.fromCharCode而不是str.fromCharCode
```

3.  作用于实例对象的方法和属性
```
1. length 返回字符串的长度 : string.length

2. charAt 返回指定位置的字符,参数从0开始

	( 这个方法等效于用数组下标方式来返回字符, 
	如果参数为负或者超过字符的长度,charAt()返回空字符串)

	str = 'hello'
	str.charAt(2) == 'l'
	str.charAt(-1) ||  str.charAt(7)  === ''# 空字符串

3. charCodeAt 该函数返回给定位置字符Unicode的码点(10进制表示),刚好是String.fromCharCode()的逆操作.
	
	var str2 = "acd";
	var result2 = str2.charCodeAt(2);//d字符码点:100
	var resu2 = String.fromCharCode(100);//把100转换为Unicode字符d
	
4.concat 用于连接两个字符串,返回一个新的字符串

	- concat()中的参数可以写1个或者多个字符串
	var str3 = "hello";
	var str4 = "world";
	var str5 = "zhang";
	var str6 ="san";
	var res10 = str3.concat(str4);
	var res11 = str3.concat(str4,str5,str6);

	- 该方法的字符串连接等效于+连接符
	var res12 = "abc".concat("a","b","c");//abcabc
	var res13 = "abc"+"a"+"b"+"c";//abcabc

🎉 5. slice [start, stop( 不包含此位置的字符串 )] 用于从原来字符串中取出子字符串并返回新的.

	- 有2个参数,第1个参数子字符串的起始位置,第2个参数子字符串的结束位置(不包含该位置)
	
	var str7 = "hello world";
	var res14 = str7.slice(1,3);//'el'

	- 1个参数 如果省略slice()中的第二个参数,则表示子字符串一直到整个字符串结束为止.
	
	var res15 = str7.slice(1);// 'ell0 world'

	- 如果该函数只有一个参数,且为负数,则从字符串结尾开始(从右向左)计算位置
	
	var res16 = str7.slice(-5);//world

	- 如果该函数的第一个参数大于第二个参数,则返回一个空的字符串

	var res17 = str7.slice(12,5);//返回一个空字符串""

🎉 6. substring [ start, stop(不包含) ] 之间的新的字符串
	#: 从原字符串中取出子字符串,跟slice使用一样.但是我们一般优先使用slice函数

	- 如果该函数的第一个参数大于第二个参数,系统会自动调换2个参数的位置

	var str8 = "helloWorld";
	var res18 = str8.substring(0,2);// 'he'
	var res18 = str8.substring(2,0);// 'he'

	- 如果函数参数中有负数,系统会把负数转换为0

	var res20 = str8.substring(0,-4);//会把-4变成0 返回空字符串""; 等效于str8.substring(0,0)


🎉 7. substr [start,length] 开始位置起的指定长度新的字符串
	- 省略第二个参数 表示一直到字符串结束

	var res22 = "abcdef".substr(4);//ef

	-  如果第一个参数是负数,表示从右向左确定字符串的起始位置

	var  res23 = "abcdef".substr(-2);//ef

	- 该函数两个参数,第二个参数值是负数,则会自动转换为0

	var res24  ="abcdefg".substr(2,-3);//"",第二个参数-3会变成0
	//等效于"abcdefg".substr(2,0)


8. indexOf()  lastIndexOf()

	- 这两个方法用于确定一个字符串在另外一个字符串中的起始位置.都返回一个整数(位置一定是从左到右算起的).表示匹配的开始位置.如果返回-1表示不匹配.

	- 两者的不同,indexOf()从字符串的头部开始匹配;lastIndexOf()从字符串的尾部开始匹配 
	
	var stri = "assessd".indexOf("ss");//1
	var stri1 ="assessd".lastIndexOf("ss");//4

9. trim 去除两边空格 ' trung'.trim() // "trung"

10. replace 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

11. match()	找到一个或多个正则表达式的匹配。
12. search()	检索与正则表达式相匹配的值。
13. split()	把字符串分割为字符串数组。
14. toLocaleLowerCase()	把字符串转换为小写。
15. toLocaleUpperCase()	把字符串转换为大写。toString()	返回字符串。
20. valueOf()	返回某个字符串对象的原始值。
```

