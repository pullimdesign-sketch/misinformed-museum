const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const profiles = [
  {
    keys: ['헤어롤','구르프','hair roller'], title: '다중 두개 감응 모듈', className: 'MULTIFUNCTIONAL CRANIAL MODULE',
    observations: ['원통형의 다공성 골격', '외부를 덮은 미세 갈고리', '반복 압축에 의한 국부 마모', '열과 습기에 노출된 표면', '동일 규격의 반복 생산'],
    hypotheses: [
      ['정신 안정 장치','국부 압력과 반복 접촉을 통해 정서적 동요를 낮춘 개인 치료 도구'],
      ['꿈 저장 장치','수면 중 발생한 습기와 휘발성 기억을 내부 격자에 보관한 용기'],
      ['기억 활성 장치','열을 두피에 분산시켜 약화된 기억 반응을 되살린 장치'],
      ['집단 정신 동기화 장치','여러 사용자가 같은 배열을 착용해 사고 주기를 맞춘 의례 도구']
    ]
  },
  {
    keys: ['클립','종이클립','paper clip'], title: '문서 기억 결속 표식', className: 'ARCHIVAL MEMORY BINDING TOKEN',
    observations: ['한 줄의 금속이 두 겹으로 휘어진 구조', '외력이 사라지면 원형으로 돌아가는 탄성', '끝부분에 집중된 접촉 마모', '소형이며 동일 규격으로 반복 생산', '다른 기록물 주변에서 발견될 가능성'],
    hypotheses: [
      ['기억 결속 표식','분리될 수 있는 기억 단위를 임시로 결속한 기록 의례용 표식'],
      ['손가락 긴장 측정기','압력에 대한 탄성 반응으로 작업자의 긴장도를 측정한 도구'],
      ['신분 봉인 장치','얇은 의복이나 문서에 부착해 일시적 접근 권한을 표시한 장치'],
      ['미세 전류 순환기','금속 고리를 통해 생체 전류를 짧게 순환시킨 휴대형 장치']
    ]
  },
  {
    keys: ['빨래집게','집게','clothespin'], title: '대칭 압력 봉인 장치', className: 'DUAL-PRESSURE SEALING INSTRUMENT',
    observations: ['두 개의 대칭 몸체', '중앙의 금속 스프링', '끝부분에 집중된 압착 흔적', '한 손으로 개폐 가능한 크기', '다수의 동일 표본'],
    hypotheses: [
      ['감정 봉인 장치','개인의 불안한 기억을 얇은 매체에 고정한 휴대형 봉인구'],
      ['호흡 리듬 교정기','신체 말단을 일정 압력으로 자극해 호흡 주기를 조절한 도구'],
      ['계급 표시 클램프','의복 가장자리에 부착해 집단 내 역할을 표시한 표식'],
      ['소형 재활 장치','반복적으로 벌리고 닫으며 손가락 운동을 수행한 치료 도구']
    ]
  },
  {
    keys: ['칫솔','toothbrush'], title: '구강 기억 채집봉', className: 'ORAL TRACE COLLECTION WAND',
    observations: ['길고 가벼운 손잡이', '끝부분에 밀집된 탄성 섬유', '섬유 방향을 따라 남은 반복 마모', '습기와 향 성분의 잔류 가능성', '개별 사용에 적합한 크기'],
    hypotheses: [
      ['구강 기억 채집봉','말하기 전후의 생체 흔적을 섬유에 저장한 개인 기록 도구'],
      ['발성 조율 장치','입안의 특정 부위를 자극해 목소리의 주파수를 교정한 도구'],
      ['신원 검증 채취기','개인의 체액을 수집해 신원을 확인한 일상적 인증 장치'],
      ['아침 정화 의례봉','수면 중 축적된 불순한 언어를 제거하는 반복 의례 도구']
    ]
  },
  {
    keys: ['숟가락','스푼','spoon'], title: '반사형 생체 배분기', className: 'REFLECTIVE VITAL SUBSTANCE DISPENSER',
    observations: ['오목한 타원형 끝부분', '길게 연장된 손잡이', '한쪽 면에 반복적인 미세 긁힘', '액체와 고체를 함께 지지하는 곡률', '개인의 손과 입 사이에 적합한 길이'],
    hypotheses: [
      ['생체 에너지 배분기','정량의 영양 물질을 의례 참가자에게 분배한 개인 장치'],
      ['얼굴 반응 관찰경','오목한 반사면으로 사용자의 표정을 왜곡해 감정을 진단한 도구'],
      ['액체 기억 전달기','공동 용기에서 개인에게 기억 성분을 옮긴 매개체'],
      ['소형 천체 관측판','반사되는 빛의 형태로 하루의 행동 시점을 결정한 도구']
    ]
  }
];

const genericHypotheses = [
  ['개인 상태 조율 장치','반복 접촉을 통해 사용자의 신체 상태를 일정하게 조정한 휴대 도구'],
  ['기억 보존 매개체','표면의 마모와 잔류물에 개인의 경험을 축적한 기록 장치'],
  ['사회적 신분 표식','소지 방식과 배치에 따라 집단 내 역할을 표시한 상징물'],
  ['집단 의례 동기화 도구','동일한 물체를 반복 사용해 공동 행동의 시점을 맞춘 장치'],
  ['미세 감각 측정기','접촉·빛·온도 변화로 사용자의 반응을 확인한 진단 도구'],
  ['생활 환경 정화기','주변의 불순물과 습기를 흡수해 개인 공간을 정리한 물체']
];

const genericObservations = [
  '손으로 다루기 적합한 휴대 크기', '반복 접촉을 암시하는 표면 변화', '기능을 특정하기 어려운 대칭 구조',
  '한 방향으로 집중된 사용 흔적', '동일 형태로 반복 생산된 흔적', '서로 다른 재료가 결합된 구조'
];

const experiments = [
  ['표면 마모 지도','사선광으로 접촉 흔적의 위치와 방향을 비교합니다.','검증 범위 · 반복 접촉 여부'],
  ['압력 복원 반응','동일한 하중을 세 차례 적용해 변형과 복원 시간을 기록합니다.','검증 범위 · 기계적 반응'],
  ['잔류물 분포 채취','표면의 습기·지질·향 성분을 위치별로 분리해 기록합니다.','검증 범위 · 접촉 물질'],
  ['열 전달 관찰','낮은 온도의 열원을 적용하고 표면 온도 변화를 비교합니다.','검증 범위 · 열 분포'],
  ['다중 표본 비교','동일 물체 여러 개의 마모 방향과 규격 편차를 대조합니다.','검증 범위 · 생산과 사용의 반복성'],
  ['진동 감쇠 비교','동일한 기계 진동을 입력하고 구조별 감쇠 시간을 기록합니다.','검증 범위 · 재료 반응']
];

let currentRecord = null;
let approvalTimer = null;
let generationSequence = 0;

function hash(text) {
  return [...text].reduce((a,c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 2166136261) >>> 0;
}
function seededPick(list, seed, count) {
  const copy = [...list], out = [];
  let s = seed;
  while (copy.length && out.length < count) {
    s = (s * 1664525 + 1013904223) >>> 0;
    out.push(copy.splice(s % copy.length, 1)[0]);
  }
  return out;
}

function normalizeKoreanName(value){
  return value.replace(/[^가-힣]/g,'').slice(0,10);
}

function escapeXml(value){
  return String(value).replace(/[<>&'\"]/g, character => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','\"':'&quot;'}[character]));
}

function fallbackArchiveImage(record,type){
  const seed=record.seed+(type==='reconstruction'?173:0);
  const accent=['#829d68','#9fb77f','#728b62'][seed%3];
  const shape=seed%4;
  const objectShapes=[
    `<ellipse cx="512" cy="498" rx="260" ry="126"/><rect x="264" y="420" width="496" height="156" rx="78"/>`,
    `<path d="M270 640 420 276h184l150 364-128 54-114-278-114 278z"/>`,
    `<rect x="292" y="278" width="440" height="440" rx="92"/><circle cx="512" cy="498" r="112"/>`,
    `<path d="M252 350c120-98 400-98 520 0v294c-120 98-400 98-520 0z"/><path d="M352 498h320"/>`
  ];
  const scene=type==='artifact'
    ? `<g fill="none" stroke="${accent}" stroke-width="12">${objectShapes[shape]}</g><g fill="${accent}" opacity=".14">${objectShapes[shape]}</g>`
    : `<circle cx="512" cy="390" r="112" fill="${accent}" opacity=".85"/><path d="M260 780c26-190 124-276 252-276s226 86 252 276" fill="${accent}" opacity=".42"/><g fill="none" stroke="#d9dbcf" stroke-width="9" opacity=".78">${objectShapes[shape]}</g>`;
  const label=type==='artifact'?'OPTICAL SURVEY / UNVERIFIED':'CULTURAL RECONSTRUCTION / APPROVED';
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
    <rect width="1024" height="1024" fill="#232323"/>
    <g stroke="#d9dbcf" opacity=".12"><path d="M64 128h896M64 896h896M128 64v896M896 64v896"/><circle cx="512" cy="512" r="360" fill="none"/><circle cx="512" cy="512" r="274" fill="none" stroke-dasharray="10 16"/></g>
    ${scene}
    <text x="72" y="96" fill="${accent}" font-family="Arial,sans-serif" font-size="25" letter-spacing="5">MHR 2526 · ${label}</text>
    <text x="72" y="944" fill="#d9dbcf" opacity=".76" font-family="Arial,sans-serif" font-size="24">${escapeXml(record.accession)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setGeneratedImage(type,src,sourceLabel){
  const prefix=type==='artifact'?'artifact':'reconstruction';
  const visual=$(`#${prefix}-visual`);
  const image=$(`#${prefix}-image`);
  const status=$(`#${prefix}-image-status`);
  const source=$(`#${prefix}-image-source`);
  image.onload=()=>{
    image.hidden=false;
    visual.classList.remove('is-generating');
    visual.classList.add('is-generated');
  };
  image.src=src;
  status.textContent=type==='artifact'?'발굴 유물 광학 기록 완료':'승인된 문화 복원 기록 완료';
  source.textContent=sourceLabel;
}

function resetGeneratedImage(type){
  const prefix=type==='artifact'?'artifact':'reconstruction';
  const visual=$(`#${prefix}-visual`);
  const image=$(`#${prefix}-image`);
  visual.classList.add('is-generating');
  visual.classList.remove('is-generated','is-fallback');
  image.hidden=true;
  image.removeAttribute('src');
  $(`#${prefix}-image-status`).textContent=type==='artifact'?'유물 광학 기록 생성 중':'승인된 해석을 문화 장면으로 복원 중';
  $(`#${prefix}-image-source`).textContent=type==='artifact'?'OPENAI IMAGE MODEL · SECURE LINK':'HUMAN APPROVAL → AI RECONSTRUCTION';
}

async function generateMuseumImage(type){
  if(!currentRecord) return;
  const sequence=++generationSequence;
  const prefix=type==='artifact'?'artifact':'reconstruction';
  resetGeneratedImage(type);
  const selected=currentRecord.hypotheses[currentRecord.selectedIndex ?? 0];
  const payload={
    type,
    name:currentRecord.name,
    accession:currentRecord.accession,
    title:currentRecord.title,
    hypothesis:selected?.[0] || '',
    hypothesisDescription:selected?.[1] || ''
  };
  try{
    const response=await fetch('/api/generate-image',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(!response.ok) throw new Error(`image endpoint ${response.status}`);
    const data=await response.json();
    if(!data.image) throw new Error('empty image');
    if(sequence!==generationSequence && type==='artifact') return;
    setGeneratedImage(type,data.image,'OPENAI IMAGE MODEL · LIVE GENERATION');
  }catch(error){
    const visual=$(`#${prefix}-visual`);
    visual.classList.add('is-fallback');
    setGeneratedImage(type,fallbackArchiveImage(currentRecord,type),'EXHIBITION DEMO · API CONNECTION REQUIRED');
  }
}

$('#artifact-name').addEventListener('input', event => {
  if(event.isComposing) return;
  event.target.value=normalizeKoreanName(event.target.value);
});
$('#artifact-name').addEventListener('compositionend', event => {
  event.target.value=normalizeKoreanName(event.target.value);
});

$('#artifact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const name=normalizeKoreanName($('#artifact-name').value.trim());
  $('#artifact-name').value=name;
  if(!/^[가-힣]{1,10}$/.test(name)){ $('#form-error').hidden=false; return; }
  $('#form-error').hidden=true;
  $('#intake').hidden=true; $('#analysis').hidden=false;
  $('#scan-glyph').textContent=name.slice(0,1);
  window.scrollTo({top:0,behavior:'smooth'});
  await runAnalysis();
  renderResult(name);
});

async function runAnalysis(){
  const titles=['형태와 사용 흔적을 수집합니다','2026년의 이름과 용도를 봉인합니다','2526년의 오인 가설을 생성합니다','가설을 검증할 실험을 설계합니다','담당 학예사인 당신의 판단을 기다립니다'];
  for(let i=0;i<5;i++){
    $$('#analysis-steps li').forEach((el,j)=>{el.classList.toggle('active',j===i);el.classList.toggle('done',j<i)});
    $('#analysis-title').textContent=titles[i]; $('#progress-bar').style.width=`${(i+1)*20}%`;
    await new Promise(r=>setTimeout(r,560));
  }
}

function resolveProfile(name){
  const lower=name.toLowerCase();
  return profiles.find(p=>p.keys.some(k=>lower.includes(k))) || null;
}

function renderResult(name){
  const seed=hash(name); const profile=resolveProfile(name);
  const accession=`MHR-2526-${String(seed%10000).padStart(4,'0')}`;
  const title=profile?.title || `${name.length+2}형 개인 감응 유물`;
  const className=profile?.className || 'DOMESTIC SENSORY MEDIATION OBJECT';
  const observations=(profile?.observations || seededPick(genericObservations,seed,5));
  const hypotheses=profile?.hypotheses || seededPick(genericHypotheses,seed,4);
  const chosenExperiments=seededPick(experiments,seed,3);
  const confidence=68+(seed%19);
  currentRecord={name,seed,accession,title,className,observations,hypotheses,chosenExperiments,confidence,selectedIndex:null};

  $('#accession-number').textContent=accession;
  $('#label-accession').textContent=accession;
  $('#artifact-title').textContent=title;
  $('#result-object-glyph').textContent=name.slice(0,1);
  $('#sealed-name').textContent='2026 DESIGNATION · SEALED';
  $('#object-metrics').textContent=`INPUT ${name.length} SYLLABLES · CONTEXT REMOVED`;
  $('#observations').innerHTML=observations.slice(0,6).map(o=>`<li>${o}</li>`).join('');
  $('#hypothesis-grid').innerHTML=hypotheses.map((h,i)=>`
    <article class="hypothesis-card">
      <button type="button" aria-label="가설 ${i+1} 보기">
        <span class="hypothesis-number">HYPOTHESIS 0${i+1}</span>
        <h4>${h[0]}</h4><p>${h[1]}</p>
        <p class="hypothesis-meta">근거 연결도 ${72+((seed+i*7)%23)}%</p>
      </button>
    </article>`).join('');
  $$('.hypothesis-card button').forEach((btn,index)=>btn.addEventListener('click',()=>{
    currentRecord.selectedIndex=index;
    $$('.hypothesis-card').forEach(c=>c.classList.remove('active'));btn.closest('.hypothesis-card').classList.add('active');
    $('#hypothesis-instruction').textContent=`‘${hypotheses[index][0]}’을 승인 후보로 선택했습니다.`;
    $('#hypothesis-next').disabled=false;
  }));
  $('#experiment-list').innerHTML=chosenExperiments.map((e,i)=>`
    <button type="button" class="experiment-row" data-test="${i}"><span class="test-id">TEST 0${i+1}</span><b>${e[0]}</b><span>${e[1]}<br>${e[2]}</span><em>미검토</em></button>`).join('');
  $$('.experiment-row').forEach(row=>row.addEventListener('click',()=>{
    row.classList.toggle('reviewed');
    row.querySelector('em').textContent=row.classList.contains('reviewed')?'검토 완료':'미검토';
    const complete=$$('.experiment-row.reviewed').length===$$('.experiment-row').length;
    $('#experiment-next').disabled=!complete;
    $('#experiment-instruction').textContent=complete?'모든 실험의 검증 범위를 확인했습니다.':`${$$('.experiment-row.reviewed').length} / ${$$('.experiment-row').length} 기록 검토 완료`;
  }));
  $('#label-classification').textContent=className;
  $('#label-confidence').textContent=`${confidence}% · PROVISIONAL`;
  $('#label-description').textContent='';
  $('#truth-name').textContent=name;
  $('#hypothesis-next').disabled=true;
  $('#hypothesis-instruction').textContent='박물관 기록으로 발전시킬 가설을 한 장 선택하세요.';
  $('#experiment-next').disabled=true;
  $('#experiment-instruction').textContent='세 개의 실험 기록을 모두 검토하세요.';
  $('#approval-gate').hidden=false;
  $('#approved-record').hidden=true;
  $('#result-footer').hidden=true;
  $('#truth-envelope').open=false;
  $('#judgment-prompt').hidden=true;
  $('#judgment-response').textContent='';
  $('#analysis').hidden=true; $('#result').hidden=false;
  showScene(0,false);
  window.scrollTo({top:0,behavior:'smooth'});
  generateMuseumImage('artifact');
}

function showScene(index,scroll=true){
  $$('.result-scene').forEach(scene=>scene.classList.toggle('is-active',Number(scene.dataset.scene)===index));
  $$('[data-progress]').forEach(step=>{
    const value=Number(step.dataset.progress);
    step.classList.toggle('current',value===index);
    step.classList.toggle('complete',value<index);
  });
  if(scroll) $('.result-provenance').scrollIntoView({behavior:'smooth',block:'start'});
}

function updateApprovedLabel(){
  const index=currentRecord.selectedIndex ?? 0;
  const hypothesis=currentRecord.hypotheses[index];
  $('#label-confidence').textContent=`${currentRecord.confidence}% · PROVISIONAL`;
  $('#label-description').textContent=`본 유물은 ${currentRecord.observations[0]}와 ${currentRecord.observations[2]}을 가진 생활 유물이다. 미래 박물관은 이를 ‘${hypothesis[0]}’로 분류했다. ${hypothesis[1]}였을 가능성이 제기되지만, 이 결론은 물질적 관찰만으로 직접 증명되지 않는다.`;
}

function approveRecord(){
  clearTimeout(approvalTimer);
  $('#hold-approve').classList.remove('is-holding');
  $('#approval-gate').hidden=true;
  $('#approved-record').hidden=false;
  $('#result-footer').hidden=false;
  updateApprovedLabel();
  const hypothesis=currentRecord.hypotheses[currentRecord.selectedIndex ?? 0];
  $('#reconstruction-caption').textContent=`‘${hypothesis[0]}’ 가설을 바탕으로 생성된 2026년 생활 복원`;
  generateMuseumImage('reconstruction');
  setTimeout(()=>$('#approved-record').scrollIntoView({behavior:'smooth',block:'start'}),80);
}

$$('[data-next-scene]').forEach(button=>button.addEventListener('click',()=>showScene(Number(button.dataset.nextScene))));
$('#hypothesis-next').addEventListener('click',()=>{
  if(currentRecord?.selectedIndex===null) return;
  updateApprovedLabel();
  showScene(2);
});
$('#experiment-next').addEventListener('click',()=>showScene(3));
$('#return-hypothesis').addEventListener('click',()=>showScene(1));

const holdButton=$('#hold-approve');
function beginApproval(){
  if(approvalTimer) return;
  holdButton.classList.add('is-holding');
  approvalTimer=setTimeout(()=>{approvalTimer=null;approveRecord();},1200);
}
function cancelApproval(){
  clearTimeout(approvalTimer);approvalTimer=null;holdButton.classList.remove('is-holding');
}
holdButton.addEventListener('pointerdown',beginApproval);
holdButton.addEventListener('pointerup',cancelApproval);
holdButton.addEventListener('pointerleave',cancelApproval);
holdButton.addEventListener('pointercancel',cancelApproval);
holdButton.addEventListener('keydown',event=>{if(event.code==='Space'||event.code==='Enter'){event.preventDefault();beginApproval();}});
holdButton.addEventListener('keyup',event=>{if(event.code==='Space'||event.code==='Enter')cancelApproval();});

$('#truth-envelope').addEventListener('toggle',event=>{
  if(event.target.open){
    $('#judgment-prompt').hidden=false;
    setTimeout(()=>$('#judgment-prompt').scrollIntoView({behavior:'smooth',block:'center'}),100);
  }
});

$$('[data-judgment]').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-judgment]').forEach(choice=>choice.classList.toggle('selected',choice===button));
  $('#judgment-response').textContent=button.dataset.judgment==='ai'
    ? 'AI는 가설을 만들었습니다. 그러나 그것을 역사로 승인한 것은 인간과 기관입니다.'
    : '박물관의 승인은 불완전한 추론을 공식적인 사실로 바꾸었습니다.';
}));

$('#restart-button').addEventListener('click',()=>{
  generationSequence++;
  $('#result').hidden=true;$('#intake').hidden=false;$('#artifact-form').reset();
  cancelApproval();
  window.scrollTo({top:0,behavior:'smooth'});
});
$('#print-button').addEventListener('click',()=>window.print());
