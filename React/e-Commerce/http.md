2 app iletişim

=> API

http, https


- [GET] /api/contacts => URL: http://localhost:5000/api/contacts?name=John
=> parametre URL üzerinden alınır açıktır
=> şifreleme, auth vb. işlemler yapılmamıştır
'https://dummyjson.com/products/search?q=phone'

- [POST] /api/contacts => URL: http://localhost:5000/api/contacts?name=John
=> body parametre gönderme {name: 'John'} => encrypt
=> şifreleme, auth, gizli bilgiler gönderilebilir

GET / POST => Get data alır, Post data kaydeder
POST = GET + Body(Body şifrelenir)