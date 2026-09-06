const students = [
{id:1,name:"Pragati Sanjay Yadav",roll:"CS2101",className:"B.Sc-III CS",email:"pragati.yadav@gmail.com",mobile:"9876543210",skills:"C, Java, HTML, API",image:"https://i.pravatar.cc/100?img=5"},
{id:2,name:"Rahul Patil",roll:"CS2102",className:"B.Sc-III CS",email:"rahul@gmail.com",mobile:"9876543211",skills:"Python, SQL",image:"https://i.pravatar.cc/100?img=8"}
];
let editId = null;
function renderStudents(list=students){
document.getElementById('studentList').innerHTML = list.map(s=>`
<div style="border:1px solid #ddd;padding:12px;border-radius:10px;margin-bottom:12px;background:#fff">
<div style="display:flex;gap:10px;align-items:center"><img src="${s.image}" style="width:50px;height:50px;border-radius:50%"><div><b>${s.name}</b><br><small>${s.roll} - ${s.className}</small></div></div>
<p style="font-size:13px;margin-top:8px"><b>Email:</b> ${s.email}<br><b>Mobile:</b> ${s.mobile}</p>
<p style="font-size:12px;background:#f1f5f9;padding:6px;border-radius:6px"><b>Skills:</b> ${s.skills}</p>
<div style="margin-top:10px;display:flex;gap:8px"><button style="padding:6px 12px;background:#0ea5e9;color:#fff;border:none;border-radius:6px" onclick="editStudent(${s.id})">Edit</button><button style="padding:6px 12px;background:#ef4444;color:#fff;border:none;border-radius:6px" onclick="deleteStudent(${s.id})">Delete</button></div>
</div>`).join("");
const t=document.getElementById('totalStudents'); if(t) t.innerText=students.length;
}
function addStudent(){const name=document.getElementById('sName').value;const roll=document.getElementById('sRoll').value;const className=document.getElementById('sClass').value;const email=document.getElementById('sEmail').value;const mobile=document.getElementById('sMobile').value;const skills=document.getElementById('sSkills').value;if(!name||!roll){alert("Name and Roll required");return}if(editId){const idx=students.findIndex(s=>s.id===editId);students[idx]={...students[idx],name,roll,className,email,mobile,skills};editId=null}else{students.push({id:Date.now(),name,roll,className,email,mobile,skills,image:"https://i.pravatar.cc/100?img="+Math.floor(Math.random()*70)})};renderStudents();["sName","sRoll","sClass","sEmail","sMobile","sSkills"].forEach(id=>document.getElementById(id).value="");}
function editStudent(id){const s=students.find(x=>x.id===id);document.getElementById('sName').value=s.name;document.getElementById('sRoll').value=s.roll;document.getElementById('sClass').value=s.className;document.getElementById('sEmail').value=s.email;document.getElementById('sMobile').value=s.mobile;document.getElementById('sSkills').value=s.skills;editId=id;window.scrollTo(0,0);}
function deleteStudent(id){if(confirm("Delete this student?")){const idx=students.findIndex(s=>s.id===id);students.splice(idx,1);renderStudents();}}
function searchStudent(){const q=document.getElementById('searchInput').value.toLowerCase();const filtered=students.filter(s=>s.name.toLowerCase().includes(q)||s.roll.toLowerCase().includes(q));renderStudents(filtered);}
renderStudents();
