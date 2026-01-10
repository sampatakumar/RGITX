function copyText(id, btn) {
  const textarea = document.getElementById(id);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const originalText = btn.innerText;
  btn.innerText = "Copied ✓";
  btn.classList.add("copied");

  setTimeout(() => {
    btn.innerText = originalText;
    btn.classList.remove("copied");
  }, 2000);
}


    // pro7

    // PROGRAM 7 SCRIPT (DISPLAY ONLY — FULL CODE)
document.getElementById("code7").value = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JSON/CSV Converter & Hash Generator</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"><\/script>

<style>
body{font-family:Arial;margin:0;padding:20px;background:#f4f4f4;}
.container{max-width:800px;margin:auto;background:#fff;padding:20px;
border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.1);}
h1{color:#333}
textarea{width:100%;height:100px;margin:10px 0}
button{background:#4CAF50;color:#fff;padding:10px 15px;border:none;
border-radius:4px;cursor:pointer;margin:5px 5px 5px 0}
button:hover{background:#45a049}
#result{margin-top:20px;padding:10px;background:#e7e7e7;
border-radius:4px;white-space:pre-wrap}
</style>
</head>

<body>
<div class="container">
  <h1>JSON/CSV Converter & Hash Generator</h1>

  <h2>a) JSON → Object</h2>
  <textarea id="jsonInput" placeholder="Enter JSON"></textarea>
  <button onclick="toObj()">Convert</button>

  <h2>b) JSON → Date</h2>
  <textarea id="jsonDateInput" placeholder='{"date":"2023-05-15T12:00:00Z"}'></textarea>
  <button onclick="toDate()">Convert</button>

  <h2>c) JSON ↔ CSV</h2>
  <textarea id="dataInput" placeholder="Enter JSON or CSV"></textarea>
  <button onclick="toCsv()">JSON→CSV</button>
  <button onclick="toJson()">CSV→JSON</button>

  <h2>d) Hash String</h2>
  <textarea id="hashInput" placeholder="Enter string"></textarea>
  <button onclick="makeHash()">Generate</button>

  <div id="result"></div>
</div>

<script>
const out=t=>document.getElementById('result').innerText=t;

function toObj(){
  try{out("Object:\\n"+JSON.stringify(JSON.parse(jsonInput.value),null,2))}
  catch(e){out("Error: "+e.message)}
}

function toDate(){
  try{out("Date: "+new Date(JSON.parse(jsonDateInput.value).date))}
  catch(e){out("Error: "+e.message)}
}

function toCsv(){
  try{
    const arr=JSON.parse(dataInput.value),h=Object.keys(arr[0]);
    const csv=[h.join(','),...arr.map(r=>h.map(f=>JSON.stringify(r[f])).join(','))].join('\\n');
    out("CSV:\\n"+csv)
  }catch(e){out("Error: "+e.message)}
}

function toJson(){
  try{
    const [h,...rows]=dataInput.value.split('\\n'),keys=h.split(',');
    const json=rows.map(r=>{
      const v=r.split(',');
      return keys.reduce((o,k,i)=>(o[k]=v[i],o),{})
    });
    out("JSON:\\n"+JSON.stringify(json,null,2))
  }catch(e){out("Error: "+e.message)}
}

function makeHash(){
  try{out("SHA-256:\\n"+CryptoJS.SHA256(hashInput.value))}
  catch(e){out("Error: "+e.message)}
}
<\/script>

</body>
</html>
`;

    // end pro7