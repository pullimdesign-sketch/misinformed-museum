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
  const titles=['표면의 물질적 흔적을 추출합니다','실제 이름과 용도를 봉인합니다','복수의 해석 가설을 생성합니다','반증 가능한 실험을 설계합니다','학예위원의 검토를 기다립니다'];
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
  $('#hypothesis-instruction').textContent='승인 후보를 한 장 선택하세요.';
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
  $('#result').hidden=true;$('#intake').hidden=false;$('#artifact-form').reset();
  cancelApproval();
  window.scrollTo({top:0,behavior:'smooth'});
});
$('#print-button').addEventListener('click',()=>window.print());
