// Valores criados manualmente para esta demonstração. Não representam operação real.
const months=["jan","fev","mar","abr","mai","jun"];
const labels={jan:"Jan",fev:"Fev",mar:"Mar",abr:"Abr",mai:"Mai",jun:"Jun"};
const people={"Equipe A":18,"Equipe B":22,"Equipe C":16};
const workdays={jan:21,fev:20,mar:22,abr:20,mai:21,jun:21};
const data={
  "Equipe A":{jan:[12,4],fev:[10,3],mar:[14,5],abr:[9,3],mai:[11,4],jun:[8,3]},
  "Equipe B":{jan:[18,6],fev:[16,5],mar:[15,5],abr:[19,6],mai:[17,5],jun:[14,4]},
  "Equipe C":{jan:[8,2],fev:[9,3],mar:[7,2],abr:[10,3],mai:[8,2],jun:[9,3]}
};
const byId=(id)=>document.getElementById(id);
const percent=(value)=>new Intl.NumberFormat("pt-BR",{style:"percent",minimumFractionDigits:1,maximumFractionDigits:1}).format(value);
function addBar(container,label,value,max,display){
  const row=document.createElement("div");row.className="bar-row";
  const name=document.createElement("span");name.textContent=label;
  const track=document.createElement("span");track.className="track";
  const fill=document.createElement("span");fill.className="fill";fill.style.width=`${max?Math.max(0,Math.min(100,value/max*100)):0}%`;
  const result=document.createElement("strong");result.textContent=display;
  track.append(fill);row.append(name,track,result);container.append(row);
}
function render(){
  const selectedMonth=byId("periodo").value,selectedTeam=byId("equipe").value;
  const activeMonths=selectedMonth==="todos"?months:[selectedMonth];
  const activeTeams=selectedTeam==="todas"?Object.keys(people):[selectedTeam];
  const totals=activeTeams.map(team=>{
    const absent=activeMonths.reduce((sum,m)=>sum+data[team][m][0],0);
    const notes=activeMonths.reduce((sum,m)=>sum+data[team][m][1],0);
    const available=activeMonths.reduce((sum,m)=>sum+people[team]*workdays[m],0);
    return {team,absent,notes,available,rate:absent/available};
  });
  const absent=totals.reduce((sum,x)=>sum+x.absent,0),notes=totals.reduce((sum,x)=>sum+x.notes,0),available=totals.reduce((sum,x)=>sum+x.available,0);
  const top=[...totals].sort((a,b)=>b.rate-a.rate)[0];
  byId("colaboradores").textContent=activeTeams.reduce((sum,t)=>sum+people[t],0);
  byId("atestados").textContent=notes;
  byId("ausencias").textContent=absent;
  byId("dias-uteis").textContent=activeMonths.reduce((sum,m)=>sum+workdays[m],0);
  byId("maior-taxa").textContent=percent(top.rate);
  byId("maior-equipe").textContent=top.team;
  byId("taxa-geral").textContent=percent(absent/available);
  const teamsChart=byId("chart-equipes");teamsChart.replaceChildren();
  totals.forEach(x=>addBar(teamsChart,x.team,x.rate,.08,percent(x.rate)));
  const monthsChart=byId("chart-meses");monthsChart.replaceChildren();
  activeMonths.forEach(m=>{
    const monthAbsent=activeTeams.reduce((sum,t)=>sum+data[t][m][0],0);
    const monthAvailable=activeTeams.reduce((sum,t)=>sum+people[t]*workdays[m],0);
    const rate=monthAbsent/monthAvailable;
    addBar(monthsChart,labels[m],rate,.08,percent(rate));
  });
  const typesChart=byId("chart-tipos");typesChart.replaceChildren();
  const other=Math.max(0,absent-notes*2);
  addBar(typesChart,"Atestados",notes*2,absent,String(notes*2));
  addBar(typesChart,"Outras",other,absent,String(other));
  byId("resumo").textContent=`No recorte selecionado, a taxa simulada é de ${percent(absent/available)}. ${top.team} apresenta a maior taxa entre as equipes exibidas (${percent(top.rate)}).`;
}
byId("periodo").addEventListener("change",render);
byId("equipe").addEventListener("change",render);
render();
