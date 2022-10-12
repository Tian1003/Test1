var dataUrl= "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    
// 2.new一個XMLHttpRequest物件(以此物件的方法進行資料請求) 
var xhr = new XMLHttpRequest()

// 3.以GET方法開啟一個請求
//open('Method',API的URL,預設值為true非同步進行)
xhr.open('GET',dataUrl, true)


// 4.送出請求(若為GET參數不填或填null)
xhr.send() 

// 5-1 或直接用 onload => 資料接收/送出成功後執行的function
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    console.log(data);
}