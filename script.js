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

// pro4

document.getElementById("code4").value =`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    table {
      margin: auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    td {
      padding: 10px;
    }
    label {
      color: #555;
      font-weight: bold;
    }
    input, select, textarea {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    input[type="radio"], input[type="checkbox"] {
      width: auto;
    }
    input[type="submit"] {
      background: #4CAF50;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background: #45a049;
    }
  </style>
</head>
<body>
  <h1>Registration Form</h1>
  <form>
    <table>
      <tr>
        <td><label for="fullname">Full Name:</label></td>
        <td><input type="text" id="fullname" name="fullname" required></td>
      </tr>
      <tr>
        <td><label for="email">Email:</label></td>
        <td><input type="email" id="email" name="email" required></td>
      </tr>
      <tr>
        <td><label for="password">Password:</label></td>
        <td><input type="password" id="password" name="password" required></td>
      </tr>
      <tr>
        <td><label for="confirm_password">Confirm Password:</label></td>
        <td><input type="password" id="confirm_password" name="confirm_password" required></td>
      </tr>
      <tr>
        <td><label>Gender:</label></td>
        <td>
          <input type="radio" name="gender" value="male"> Male
          <input type="radio" name="gender" value="female"> Female
          <input type="radio" name="gender" value="other"> Other
        </td>
      </tr>
      <tr>
        <td><label for="birthdate">Date of Birth:</label></td>
        <td><input type="date" id="birthdate" name="birthdate" required></td>
      </tr>
      <tr>
        <td><label for="country">Country:</label></td>
        <td>
          <select id="country" name="country" required>
            <option value="">Select</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Other</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><label>Interests:</label></td>
        <td>
          <input type="checkbox" name="interests" value="sports"> Sports
          <input type="checkbox" name="interests" value="music"> Music
          <input type="checkbox" name="interests" value="reading"> Reading
          <input type="checkbox" name="interests" value="travel"> Travel
        </td>
      </tr>
      <tr>
        <td><label for="bio">Bio:</label></td>
        <td><textarea id="bio" name="bio" rows="4"></textarea></td>
      </tr>
      <tr>
        <td colspan="2" style="text-align:center;">
          <input type="submit" value="Register">
        </td>
      </tr>
    </table>
  </form>
</body>
</html>
`;
