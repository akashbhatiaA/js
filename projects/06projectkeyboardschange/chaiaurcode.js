const insert = document.querySelector('#insert');
window.addEventListener('keydown',function(e){
    insert.innerHTML=`
    <div class ='color'>
    <table>
    <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code<th>
    </tr>
    <tr>
    <td>${e.key === " "? "Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>`
})///4:58:40 very  IMPORTANT->> setTime out , changeinterval ya sab kush asyncnous ka part ha 
//asyncronus ka ya matlab ni hmasa api pr request bajo..
//async-> javascript ka  andar make build ha 
// javascript async ha because  api sath ma  aya ri ha 
// api is called interaction between frontend or backend (or two system)