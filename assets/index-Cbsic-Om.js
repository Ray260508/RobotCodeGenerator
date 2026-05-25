const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/viewport3d-BFWckKoi.js","assets/three-BABvm09T.js"])))=>i.map(i=>d[i]);
import{g as Me,r as Oe}from"./jszip-Cut6eRK0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Te="modulepreload",Ae=function(e){return"/RobotCodeGenerator/"+e},te={},Pe=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){let r=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=r(t.map(p=>{if(p=Ae(p),p in te)return;te[p]=!0;const m=p.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":Te,m||(c.as="script"),c.crossOrigin="",c.href=p,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return o.then(r=>{for(const s of r||[])s.status==="rejected"&&a(s.reason);return n().catch(a)})},$={talonfx_falcon:{name:"Falcon 500 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6380,stallTorque:4.69,canBus:!0},talonfx_kraken60:{name:"Kraken X60 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6e3,stallTorque:7.09,canBus:!0},talonfx_kraken44:{name:"Kraken X44 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:5800,stallTorque:4.69,canBus:!0},talonfxs_minion:{name:"Minion (TalonFXS)",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:1.22,canBus:!0},talonfxs:{name:"TalonFXS",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:7.09,canBus:!0},sparkmax_neo:{name:"SparkMax + NEO",vendor:"rev",class:"CANSparkMax",freeSpeed:5676,stallTorque:2.6,canBus:!0},sparkmax_neo550:{name:"SparkMax + NEO 550",vendor:"rev",class:"CANSparkMax",freeSpeed:11e3,stallTorque:.97,canBus:!0},sparkflex_vortex:{name:"SparkFlex + Vortex",vendor:"rev",class:"CANSparkFlex",freeSpeed:6784,stallTorque:3.6,canBus:!0}},ge={integrated:{name:"Integrated Encoder",vendor:"none",needsId:!1},cancoder:{name:"CANCoder",vendor:"ctre",needsId:!0},throughbore:{name:"Through Bore Encoder",vendor:"rev",needsId:!1,port:"DIO"},dutycycle:{name:"DutyCycle Encoder",vendor:"wpilib",needsId:!1,port:"DIO"}},Y={pigeon2:{name:"Pigeon 2.0",vendor:"ctre",class:"Pigeon2",needsCanId:!0},navx:{name:"NavX2",vendor:"kauai",class:"AHRS",needsCanId:!1},adis16470:{name:"ADIS16470",vendor:"wpilib",class:"ADIS16470_IMU",needsCanId:!1},adis16448:{name:"ADIS16448",vendor:"wpilib",class:"ADIS16448_IMU",needsCanId:!1}},he={swerve:{name:"Swerve Drive",modules:4,desc:"Holonomic drive with independent steer+drive per module"},tank:{name:"Tank Drive",modules:2,desc:"Differential drive with left/right side motors"},mecanum:{name:"Mecanum Drive",modules:4,desc:"Holonomic drive with mecanum wheels"}},be={ll3:{name:"Limelight 3",desc:"Upgraded sensor, wider FOV"},ll3a:{name:"Limelight 3A",desc:"High resolution"},ll3g:{name:"Limelight 3G",desc:"Google Coral AI accelerator"},ll4:{name:"Limelight 4",desc:"Latest gen, highest performance"}},Le={raspberrypi:{name:"Raspberry Pi",desc:"Raspberry Pi 4/5 running PhotonVision"},orangepi:{name:"Orange Pi",desc:"Orange Pi 5 running PhotonVision"}},B={mk4i_l2:{name:"MK4i L2",driveRatio:6.75,turnRatio:150/7,wheelDiam:.1016},mk4i_l3:{name:"MK4i L3",driveRatio:6.12,turnRatio:150/7,wheelDiam:.1016},mk4_l2:{name:"MK4 L2",driveRatio:6.75,turnRatio:12.8,wheelDiam:.1016},mk4n_l2:{name:"MK4n L2",driveRatio:5.9,turnRatio:18.75,wheelDiam:.1016},custom:{name:"Custom",driveRatio:null,turnRatio:null,wheelDiam:null}},ye={dio:{name:"RoboRIO DIO",desc:"Digital Input/Output port (0-9)"},can:{name:"CAN Bus Sensor",desc:"CAN-connected sensor (e.g. CANifier)"},analog:{name:"RoboRIO Analog",desc:"Analog Input port (0-3)"}},D={swerve:{fl_drive:11,fl_turn:12,fl_encoder:13,fr_drive:21,fr_turn:22,fr_encoder:23,bl_drive:31,bl_turn:32,bl_encoder:33,br_drive:41,br_turn:42,br_encoder:43},tank:{left_leader:11,left_follower:12,right_leader:21,right_follower:22},gyro:50,elevator:{motor:51,encoder:53},shooter:{motor:61},intake:{motor:71,sensor:0},roller:{motor:81},launcher:{motor:91,sensor:1}},z=new Map;function T(e,n){z.set(e,{id:e,...n})}function Ie(){return Array.from(z.values())}function _e(){const e={};for(const[n,t]of z)e[n]=t.defaultState?JSON.parse(JSON.stringify(t.defaultState)):{configured:!1};return e}const ie={id:"elevator",name:"Elevator",description:"Linear lifting mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:D.elevator.motor,role:"leader",inverted:!1}],encoder:null,gearRatio:null,maxHeight:null,minHeight:0,encoderId:D.elevator.encoder,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,motionMaxVel:null,motionMaxAccel:null,attachedTo:"chassis"},validAttachments:["chassis"]},ne={id:"shooter",name:"Shooter",description:"Flywheel shooter mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:D.shooter.motor,role:"leader",inverted:!1}],shooterType:"adjustable",turretMotor:{type:null,canId:25,role:"turret",inverted:!1},encoder:null,gearRatio:null,maxRPM:null,motorConfig:{currentLimit:60,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},oe={id:"intake",name:"Intake",description:"Floor intake mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:D.intake.motor,role:"leader",inverted:!1}],gearRatio:null,hasSensor:!1,sensorPortType:"dio",sensorPort:D.intake.sensor,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis"]},se={id:"roller",name:"Roller",description:"Simple roller mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:D.roller.motor,role:"leader",inverted:!1}],gearRatio:null,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},ae={id:"launcher",name:"Launcher",description:"Game piece launcher",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:D.launcher.motor,role:"leader",inverted:!1}],hasSensor:!1,sensorPortType:"dio",sensorPort:D.launcher.sensor,motorConfig:{currentLimit:20,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,attachedTo:"arm"},validAttachments:["elevator","arm","intake"]},re={id:"arm",name:"Arm",description:"Multi-jointed arm mechanism",defaultState:{configured:!1,enabled:!1,dof:1,joints:[{motors:[{type:null,canId:30,role:"leader",inverted:!1}],encoder:null,encoderId:31,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null}],attachedTo:"chassis"},validAttachments:["chassis","elevator"]},le={id:"custom",name:"Custom",description:"User-defined mechanism",defaultState:{configured:!1,enabled:!1},validAttachments:["chassis","elevator","arm"]};function je(){T(ie.id,ie),T(ne.id,ne),T(oe.id,oe),T(se.id,se),T(ae.id,ae),T(re.id,re),T(le.id,le)}je();function xe(){return{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20}}function we(e){return{name:`cam${e}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0}}const A={currentPage:"landing",selectedMechanism:null,sidebarOpen:!1,isMobile:!1,framework:"advantagekit",stateMachineIntegration:!1,chassis:{configured:!1,type:null,driveMotor:null,turnMotor:null,gyro:null,gyroCanId:D.gyro,gearRatio:null,turnGearRatio:null,wheelDiameter:null,trackWidth:null,maxSpeed:null,swervePreset:null,canIds:{...D.swerve},tankCanIds:{...D.tank},usePhoenix6Swerve:!1,swerveEncoderType:"cancoder",pathplannerEnabled:!0,motorConfig:xe()},mechanisms:_e(),attachmentRules:(()=>{const e={};return Ie().forEach(n=>{e[n.id]=n.validAttachments}),e})(),vision:{configured:!1,enabled:!1,system:null,limelightVersion:null,photonPlatform:null,cameraCount:1,cameras:[we(0)]},statemachine:{configured:!1,enabled:!1,states:[],transitions:[],jsonData:""}};class Ve{constructor(){this.state=JSON.parse(JSON.stringify(A)),this.listeners=[]}getState(){return this.state}subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}}notify(n){this.listeners.forEach(t=>t(this.state,n))}loadState(n){return!n||typeof n!="object"?!1:(this.state={...JSON.parse(JSON.stringify(A)),...n,chassis:{...JSON.parse(JSON.stringify(A.chassis)),...n.chassis||{}},mechanisms:{...JSON.parse(JSON.stringify(A.mechanisms)),...n.mechanisms||{}},vision:{...JSON.parse(JSON.stringify(A.vision)),...n.vision||{}},statemachine:{...JSON.parse(JSON.stringify(A.statemachine)),...n.statemachine||{}}},this.state.currentPage="landing",this.state.selectedMechanism=null,this.state.sidebarOpen=!1,this.notify("load"),!0)}setPage(n){this.state.currentPage=n,this.notify("currentPage")}setFramework(n){this.state.framework=n,this.notify("framework")}setStateMachineIntegration(n){this.state.stateMachineIntegration=!!n,this.notify("stateMachineIntegration")}selectMechanism(n){this.state.selectedMechanism=n,this.state.sidebarOpen=!!n,this.notify("selectedMechanism")}closeSidebar(){this.state.sidebarOpen=!1,this.state.selectedMechanism=null,this.notify("sidebarOpen")}updateChassis(n){Object.assign(this.state.chassis,n),this.state.chassis.configured=this._isChassisValid(),this._detectPhoenix6Swerve(),this.notify("chassis")}updateMechanism(n,t){if(this.state.mechanisms[n]){if(t.attachedTo!==void 0){const i=this.state.attachmentRules[n];i&&!i.includes(t.attachedTo)&&(t.attachedTo=this.state.mechanisms[n].attachedTo)}Object.assign(this.state.mechanisms[n],t),this.state.mechanisms[n].configured=this._isMechValid(n),this.notify(`mechanisms.${n}`)}}addMotor(n,t){this.state.mechanisms[n]&&(this.state.mechanisms[n].motors.push(t),this.notify(`mechanisms.${n}`))}removeMotor(n,t){this.state.mechanisms[n]&&t>0&&(this.state.mechanisms[n].motors.splice(t,1),this.notify(`mechanisms.${n}`))}updateMotor(n,t,i){this.state.mechanisms[n]?.motors[t]&&(Object.assign(this.state.mechanisms[n].motors[t],i),this.notify(`mechanisms.${n}`))}updateVision(n){if(Object.assign(this.state.vision,n),n.cameraCount!==void 0){const t=n.cameraCount;for(;this.state.vision.cameras.length<t;)this.state.vision.cameras.push(we(this.state.vision.cameras.length));this.state.vision.cameras.length=t}this.state.vision.configured=this._isVisionValid(),this.notify("vision")}updateCamera(n,t){this.state.vision.cameras[n]&&(Object.assign(this.state.vision.cameras[n],t),this.notify("vision.cameras"))}updateStateMachine(n){Object.assign(this.state.statemachine,n);let t=!1;if(this.state.statemachine.jsonData)try{const i=JSON.parse(this.state.statemachine.jsonData);if(typeof i=="object"&&!Array.isArray(i)&&Object.keys(i).length>0){t=!0;for(const[o,a]of Object.entries(i))if(!Array.isArray(a))t=!1;else for(const r of a)typeof r!="string"&&(t=!1)}}catch{t=!1}this.state.statemachine.configured=this.state.statemachine.enabled&&t,this.notify("statemachine")}resetAll(){this.state=JSON.parse(JSON.stringify(A)),this.state.isMobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),this.notify("reset")}getConfiguredCount(){let n=0;return this.state.chassis.configured&&n++,Object.values(this.state.mechanisms).forEach(t=>{t.configured&&t.enabled&&n++}),this.state.vision.configured&&this.state.vision.enabled&&n++,this.state.statemachine.configured&&this.state.statemachine.enabled&&n++,n}getExpectedCount(){let n=1;return Object.values(this.state.mechanisms).forEach(t=>{t.enabled&&n++}),this.state.vision.enabled&&n++,this.state.statemachine.enabled&&n++,n}_isChassisValid(){const n=this.state.chassis;return!!(n.type&&n.driveMotor)}_isMechValid(n){const t=this.state.mechanisms[n];return n==="arm"?!t?.enabled||!Array.isArray(t.joints)||t.joints.length<1?!1:t.joints.every(i=>Array.isArray(i.motors)&&i.motors.length>0&&!!i.motors[0]?.type):!!(t.enabled&&t.motors.length>0&&t.motors[0].type)}_isVisionValid(){const n=this.state.vision;return n.enabled?n.system==="limelight"?!!n.limelightVersion:n.system==="photonvision"?!!n.photonPlatform:!1:!1}_detectPhoenix6Swerve(){const n=this.state.chassis;if(n.type!=="swerve"){n.usePhoenix6Swerve=!1;return}const t=o=>o&&o.startsWith("talonfx"),i=n.swerveEncoderType==="cancoder";n.usePhoenix6Swerve=t(n.driveMotor)&&t(n.turnMotor)&&i}}const v=new Ve;function L(e,n){return'<option value="">— Select —</option>'+Object.entries(e).map(([t,i])=>`<option value="${t}" ${t===n?"selected":""}>${i.name}</option>`).join("")}function b(e,n,t,i,o="1"){return`<div class="config-group"><label class="config-label">${n}</label><input type="number" class="config-input" id="${e}" placeholder="${i}" step="${o}" value="${t||""}"></div>`}function y(e,n,t){return`<div class="config-group config-group-sm"><label class="config-label">${n}</label><input type="number" class="config-input" id="${e}" min="0" max="62" value="${t}" style="width:70px"></div>`}function F(e,n,t){return`<div class="radio-cards">${e.map(([i,o])=>`<div class="radio-card ${i===n?"active":""}" data-name="${t}" data-value="${i}"><div class="radio-dot"></div><div class="radio-card-info"><div class="radio-card-name">${o.name}</div>${o.desc?`<div class="radio-card-desc">${o.desc}</div>`:""}</div></div>`).join("")}</div>`}function _(e,n){return`<select class="config-select" id="${e}">${L($,n)}</select>`}const Ne={chassis:"Chassis",elevator:"Elevator",intake:"Intake"};function $e(e,n,t,i){const r=(t[e]||["chassis"]).filter(s=>s==="chassis"?!0:s==="elevator"?!!i.mechanisms?.elevator?.enabled:s==="intake"?!!i.mechanisms?.intake?.enabled:i.mechanisms?.[s]?!!i.mechanisms[s].enabled:!0).map(s=>`<option value="${s}" ${n.attachedTo===s?"selected":""}>${Ne[s]||s}</option>`).join("");return`<div class="config-divider"></div>
        <div class="config-section-title">SIMULATION</div>
        <div class="config-group">
            <label class="config-label">Attached To</label>
            <select class="config-select" id="cfg-${e}-attached">${r}</select>
            <p class="config-hint">Parent mechanism for physics sim (not shown in 3D view)</p>
        </div>`}function j(e){const n=v.getState(),t=document.getElementById("sidebar-title"),i=document.getElementById("sidebar-content");if(e==="chassis")return Be(n,t,i);if(e==="vision")return We(n,t,i);if(e==="statemachine")return Ye(n,t,i);const a={elevator:Ue,shooter:He,intake:Xe,roller:Je,launcher:Ge,arm:qe}[e];if(a)return a(n,t,i);const r=Ie().find(s=>s.id===e);if(r)return Fe(n,t,i,e,r.name)}function Be(e,n,t){n.textContent="DRIVETRAIN";const i=e.chassis,o=i.type==="swerve",a=i.type==="tank"||i.type==="mecanum";t.innerHTML=`
        <div class="config-group"><label class="config-label">Drivetrain Type</label>
        ${F(Object.entries(he),i.type,"chassisType")}</div>
        <div id="chassis-details" style="${i.type?"":"display:none"}">
        <div class="config-divider"></div>
        <div class="config-group"><label class="config-label">Drive Motor</label>${_("cfg-drive-motor",i.driveMotor)}</div>
        ${o?`
        <div class="config-group"><label class="config-label">Turn Motor</label>${_("cfg-turn-motor",i.turnMotor)}</div>
        <div class="config-group"><label class="config-label">Swerve Preset</label><select class="config-select" id="cfg-swerve-preset">${L(B,i.swervePreset)}</select></div>
        <div class="config-group"><label class="config-label">Module Encoder</label><select class="config-select" id="cfg-swerve-encoder">${L(ge,i.swerveEncoderType)}</select></div>
        ${i.usePhoenix6Swerve?'<div class="config-hint phoenix-badge">✓ Phoenix 6 SwerveDrivetrain (TalonFX + CANCoder)</div>':""}
        `:""}
        <div class="config-group"><label class="config-label">Gyro</label><select class="config-select" id="cfg-gyro">${L(Y,i.gyro)}</select></div>
        <div class="config-row">
            ${b("cfg-gear-ratio","Drive Gear Ratio",i.gearRatio,"6.75","0.01")}
            ${b("cfg-wheel-diam","Wheel Diameter (m)",i.wheelDiameter,"0.1016","0.001")}
        </div>
        ${o?b("cfg-turn-ratio","Turn Gear Ratio",i.turnGearRatio,"21.43","0.01"):""}
        ${b("cfg-max-speed","Max Speed (m/s)",i.maxSpeed,"4.5","0.1")}

        <div class="config-divider"></div>
        <div class="config-section-title">CAN IDs</div>
        ${o?`
        <div class="can-id-grid">
            <div class="can-id-module"><div class="can-id-module-title">FL Module</div><div class="config-row">
                ${y("can-fl-drive","Drive",i.canIds.fl_drive)}
                ${y("can-fl-turn","Turn",i.canIds.fl_turn)}
                ${y("can-fl-enc","Encoder",i.canIds.fl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">FR Module</div><div class="config-row">
                ${y("can-fr-drive","Drive",i.canIds.fr_drive)}
                ${y("can-fr-turn","Turn",i.canIds.fr_turn)}
                ${y("can-fr-enc","Encoder",i.canIds.fr_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BL Module</div><div class="config-row">
                ${y("can-bl-drive","Drive",i.canIds.bl_drive)}
                ${y("can-bl-turn","Turn",i.canIds.bl_turn)}
                ${y("can-bl-enc","Encoder",i.canIds.bl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BR Module</div><div class="config-row">
                ${y("can-br-drive","Drive",i.canIds.br_drive)}
                ${y("can-br-turn","Turn",i.canIds.br_turn)}
                ${y("can-br-enc","Encoder",i.canIds.br_encoder)}
            </div></div>
        </div>
        `:a?`
        <div class="config-row">${y("can-ll","Left Leader",i.tankCanIds.left_leader)}${y("can-lf","Left Follower",i.tankCanIds.left_follower)}</div>
        <div class="config-row">${y("can-rl","Right Leader",i.tankCanIds.right_leader)}${y("can-rf","Right Follower",i.tankCanIds.right_follower)}</div>
        `:""}
        ${y("can-gyro","Gyro CAN ID",i.gyroCanId)}
        </div>
    `,U("chassisType",s=>{v.updateChassis({type:s,configured:!1}),j("chassis")});const r=document.getElementById("cfg-swerve-preset");r&&r.addEventListener("change",s=>{const l=s.target.value;if(l&&B[l]&&l!=="custom"){const p=B[l],m=document.getElementById("cfg-gear-ratio"),d=document.getElementById("cfg-wheel-diam"),c=document.getElementById("cfg-turn-ratio");m&&(m.value=p.driveRatio),d&&(d.value=p.wheelDiam),c&&(c.value=p.turnRatio)}}),document.getElementById("cfg-swerve-encoder")?.addEventListener("change",s=>{v.updateChassis({swerveEncoderType:s.target.value}),j("chassis")})}function V(e,n,t,i,o,a="",r=""){const s=e.mechanisms[i];n.textContent=o.toUpperCase();let l=`<div class="config-section-title">MOTORS</div><div id="${i}-motors-list">`;s.motors.forEach((g,I)=>{l+=`<div class="motor-entry" data-idx="${I}">
            <div class="motor-entry-header">
                <div class="config-group config-group-sm" style="flex:1">
                    <label class="config-label">Role</label>
                    <select class="config-select motor-role-select" id="cfg-${i}-role-${I}">
                        <option value="leader" ${g.role==="leader"?"selected":""}>Leader</option>
                        <option value="follower" ${g.role==="follower"?"selected":""}>Follower</option>
                    </select>
                </div>
                ${I>0?`<button class="motor-remove-btn" data-type="${i}" data-idx="${I}" title="Remove">✕</button>`:""}
            </div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor</label>${_(`cfg-${i}-motor-${I}`,g.type)}</div>
                ${y(`cfg-${i}-canid-${I}`,"CAN ID",g.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-${i}-inv-${I}" ${g.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        </div>`}),l+=`</div><button class="btn-add-motor" id="btn-add-motor-${i}">+ Add Motor</button>`;const p=s.motorConfig||{};let m=`<div class="config-divider"></div>
        <div class="config-section-title">MOTOR CONFIG</div>
        <div class="config-row">
            ${b(`cfg-${i}-curlimit`,"Current Limit (A)",p.currentLimit,"40","1")}
        </div>
        <div class="config-group"><label class="config-label">Idle Mode</label>
            <div class="config-row config-row-inline">
                <label class="config-radio"><input type="radio" name="cfg-${i}-brakemode" value="brake" ${p.brakeMode!==!1?"checked":""}> Brake</label>
                <label class="config-radio"><input type="radio" name="cfg-${i}-brakemode" value="coast" ${p.brakeMode===!1?"checked":""}> Coast</label>
            </div>
        </div>`;if("rampRate"in s&&(m+=b(`cfg-${i}-ramp`,"Ramp Rate (ms)",s.rampRate,"0","1")),s.pid){const g=s.pid;m+=`<div class="config-divider"></div>
            <div class="config-section-title">PID / FEEDFORWARD</div>
            <div class="config-row">
                ${b(`cfg-${i}-kp`,"kP",g.kP,"0","0.001")}
                ${b(`cfg-${i}-ki`,"kI",g.kI,"0","0.001")}
                ${b(`cfg-${i}-kd`,"kD",g.kD,"0","0.001")}
            </div>
            <div class="config-row">
                ${b(`cfg-${i}-ks`,"kS",g.kS,"0","0.001")}
                ${b(`cfg-${i}-kv`,"kV",g.kV,"0","0.001")}
                ${b(`cfg-${i}-ka`,"kA",g.kA,"0","0.001")}
            </div>`}let d=`<div class="config-divider"></div>
        <div class="config-row">${b(`cfg-${i}-ratio`,"Gear Ratio",s.gearRatio,"1.0","0.01")}</div>`;const c=s.physics||{},u=`<div class="config-divider"></div>
        <details class="config-details">
            <summary class="config-section-title" style="cursor:pointer;user-select:none;">
                ⚙ PHYSICS (Simulation) <span style="font-size:0.7rem;color:var(--text-secondary);font-weight:400;">— optional, improves sim accuracy</span>
            </summary>
            <div class="config-row" style="margin-top:8px;">
                ${b(`cfg-${i}-mass`,"Mass (kg)",c.massKg,"e.g. 5.0","0.1")}
                ${b(`cfg-${i}-moi`,"MOI (kg·m²)",c.moiKgM2,"e.g. 0.1","0.001")}
            </div>
            <p class="config-hint" style="margin-top:4px;">Used in simulation physics model. Leave blank to use defaults.</p>
        </details>`,f=e.attachmentRules[i]?$e(i,s,e.attachmentRules,e):"";t.innerHTML=r+l+m+f+d+u+a,document.getElementById(`btn-add-motor-${i}`)?.addEventListener("click",()=>{const g=(s.motors[s.motors.length-1]?.canId||50)+1;v.addMotor(i,{type:null,canId:g,role:"follower",inverted:!1}),j(i)}),t.querySelectorAll(".motor-remove-btn").forEach(g=>{g.addEventListener("click",I=>{I.stopPropagation(),v.removeMotor(i,parseInt(g.dataset.idx)),j(i)})})}function Fe(e,n,t,i,o){V(e,n,t,i,o.toUpperCase())}function Ue(e,n,t){const i=e.mechanisms.elevator;V(e,n,t,"elevator","Elevator",`
        <div class="config-group"><label class="config-label">Encoder</label><select class="config-select" id="cfg-elevator-encoder">${L(ge,i.encoder)}</select></div>
        ${y("cfg-elevator-enc-id","Encoder CAN ID",i.encoderId)}
        <div class="config-row">
            ${b("cfg-elevator-min","Min Height (m)",i.minHeight,"0","0.01")}
            ${b("cfg-elevator-max","Max Height (m)",i.maxHeight,"1.5","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${b("cfg-elevator-softfwd","Forward Limit",i.softLimitFwd,"","0.01")}
            ${b("cfg-elevator-softrev","Reverse Limit",i.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">MOTION PROFILE</div>
        <div class="config-row">
            ${b("cfg-elevator-mmvel","Max Velocity (m/s)",i.motionMaxVel,"","0.01")}
            ${b("cfg-elevator-mmacc","Max Accel (m/s²)",i.motionMaxAccel,"","0.01")}
        </div>
    `)}function He(e,n,t){const i=e.mechanisms.shooter,o=`
        <div class="config-section-title" style="margin-top:0">SHOOTER TYPE</div>
        <div class="config-group">
            ${F([["flywheel_only",{name:"Flywheel Only",desc:"Static Angle Flywheels"}],["adjustable",{name:"Adjustable Hood",desc:"Pivot + Flywheels"}],["adjustable_turret",{name:"Adjustable + Turret",desc:"Pivot + Flywheels + Turret"}]],i.shooterType,"shooterType")}
        </div>
        <div class="config-divider"></div>
        <div class="config-row">${b("cfg-shooter-rpm","Max Flywheel RPM",i.maxRPM,"5000","100")}</div>
        <div class="config-divider"></div>
        <div class="config-section-title" style="margin-bottom:-10px">FLYWHEEL MOTORS</div>
    `;let a="";if(i.shooterType==="adjustable"||i.shooterType==="adjustable_turret"){const s=i.pivotMotor||{type:null,canId:24,inverted:!1};a=`
            <div class="config-divider"></div>
            <div class="config-section-title">PIVOT MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${_("cfg-shooter-pivot-motor",s.type)}</div>
                ${y("cfg-shooter-pivot-canid","CAN ID",s.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-pivot-inv" ${s.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}let r="";if(i.shooterType==="adjustable_turret"){const s=i.turretMotor||{type:null,canId:25,inverted:!1};r=`
            <div class="config-divider"></div>
            <div class="config-section-title">TURRET MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${_("cfg-shooter-turret-motor",s.type)}</div>
                ${y("cfg-shooter-turret-canid","CAN ID",s.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-turret-inv" ${s.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}V(e,n,t,"shooter","Shooter",a+r,o),U("shooterType",s=>{v.updateMechanism("shooter",{shooterType:s}),document.dispatchEvent(new CustomEvent("rcg:update-shooter-model",{detail:{type:s}})),j("shooter")})}function Xe(e,n,t){const i=e.mechanisms.intake;V(e,n,t,"intake","Intake",`
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-intake-sensor" ${i.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="intake-sensor-cfg" style="${i.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-intake-sensor-type">${L(ye,i.sensorPortType)}</select></div>
            ${b("cfg-intake-sensor-port","Port Number",i.sensorPort,"0")}
        </div>
    `),document.getElementById("cfg-intake-sensor")?.addEventListener("change",o=>{document.getElementById("intake-sensor-cfg").style.display=o.target.checked?"":"none"})}function Je(e,n,t){V(e,n,t,"roller","Roller")}function Ge(e,n,t){const i=e.mechanisms.launcher;V(e,n,t,"launcher","Launcher",`
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${b("cfg-launcher-softfwd","Forward Limit",i.softLimitFwd,"","0.01")}
            ${b("cfg-launcher-softrev","Reverse Limit",i.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-launcher-sensor" ${i.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="launcher-sensor-cfg" style="${i.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-launcher-sensor-type">${L(ye,i.sensorPortType)}</select></div>
            ${b("cfg-launcher-sensor-port","Port Number",i.sensorPort,"1")}
        </div>
    `),document.getElementById("cfg-launcher-sensor")?.addEventListener("change",o=>{document.getElementById("launcher-sensor-cfg").style.display=o.target.checked?"":"none"})}function qe(e,n,t){const i=e.mechanisms.arm;n.textContent="ARM";let o=`
        <div class="config-section-title" style="margin-top:0">DEGREES OF FREEDOM</div>
        <div class="config-group">
            <select class="config-select" id="cfg-arm-dof">
                <option value="1" ${i.dof===1?"selected":""}>1 DoF (Single Joint)</option>
                <option value="2" ${i.dof===2?"selected":""}>2 DoF (Double Jointed)</option>
                <option value="3" ${i.dof===3?"selected":""}>3 DoF (Triple Jointed)</option>
            </select>
        </div>
    `;for(let a=0;a<i.dof;a++){const r=i.joints[a]||{motors:[{type:null,canId:30+a*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+a*2,gearRatio:null,motorConfig:{currentLimit:40},pid:{kP:0,kI:0,kD:0},softLimitFwd:null,softLimitRev:null},s=r.motors[0]||{type:null,canId:30+a*2,inverted:!1},l=r.motors.length>1,p=r.motors[1]||{type:null,canId:31+a*2,inverted:!1};o+=`
            <div class="config-divider"></div>
            <div class="config-section-title" style="color: var(--accent-red); font-size: 0.95rem;">JOINT ${a+1}</div>
            
            <div class="config-group"><label class="config-label">Leader Motor Type</label>${_(`cfg-arm-joint-${a}-leader-motor`,s.type)}</div>
            <div class="config-row">
                ${y(`cfg-arm-joint-${a}-leader-canid`,"Leader CAN ID",s.canId)}
                <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                    <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${a}-leader-inv" ${s.inverted?"checked":""}> Inverted</label>
                </div>
            </div>

            <div class="config-group">
                <div class="config-toggle-wrap">
                    <span class="config-toggle-label">Has Follower Motor</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cfg-arm-joint-${a}-hasfollower" ${l?"checked":""}>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div id="cfg-arm-joint-${a}-follower-cfg" style="${l?"":"display:none"}">
                <div class="config-group"><label class="config-label">Follower Motor Type</label>${_(`cfg-arm-joint-${a}-follower-motor`,p.type)}</div>
                <div class="config-row">
                    ${y(`cfg-arm-joint-${a}-follower-canid`,"Follower CAN ID",p.canId)}
                    <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                        <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${a}-follower-inv" ${p.inverted?"checked":""}> Inverted</label>
                    </div>
                </div>
            </div>

            <div class="config-row">
                ${b(`cfg-arm-joint-${a}-ratio`,"Gear Ratio",r.gearRatio,"e.g. 80")}
                ${b(`cfg-arm-joint-${a}-curlimit`,"Current Limit (A)",r.motorConfig.currentLimit,"40")}
            </div>

            <!-- Encoder -->
            <div class="config-row">
                <div class="config-group">
                    <label class="config-label">Encoder Type</label>
                    <select class="config-select" id="cfg-arm-joint-${a}-encoder">
                        <option value="">Integrated</option>
                        <option value="cancoder" ${r.encoder==="cancoder"?"selected":""}>CANCoder</option>
                        <option value="throughbore" ${r.encoder==="throughbore"?"selected":""}>ThroughBore</option>
                    </select>
                </div>
                ${y(`cfg-arm-joint-${a}-encoder-id`,"Encoder ID/Port",r.encoderId)}
            </div>

            <!-- Soft Limits -->
            <div class="config-row">
                ${b(`cfg-arm-joint-${a}-softfwd`,"Soft Limit Fwd (rad)",r.softLimitFwd,"None","0.01")}
                ${b(`cfg-arm-joint-${a}-softrev`,"Soft Limit Rev (rad)",r.softLimitRev,"None","0.01")}
            </div>

            <!-- PID -->
            <div class="config-row">
                ${b(`cfg-arm-joint-${a}-kp`,"kP",r.pid.kP,"0")}
                ${b(`cfg-arm-joint-${a}-ki`,"kI",r.pid.kI,"0")}
                ${b(`cfg-arm-joint-${a}-kd`,"kD",r.pid.kD,"0")}
            </div>
        `}o+=$e("arm",i,e.attachmentRules,e),t.innerHTML=o,document.getElementById("cfg-arm-dof")?.addEventListener("change",a=>{const r=parseInt(a.target.value),s=[];for(let l=0;l<r;l++)s.push(i.joints[l]||{motors:[{type:null,canId:30+l*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+l*2,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null});v.updateMechanism("arm",{dof:r,joints:s}),j("arm")});for(let a=0;a<i.dof;a++)document.getElementById(`cfg-arm-joint-${a}-hasfollower`)?.addEventListener("change",r=>{document.getElementById(`cfg-arm-joint-${a}-follower-cfg`).style.display=r.target.checked?"":"none"})}function We(e,n,t){const i=e.vision;n.textContent="VISION SYSTEM",t.innerHTML=`
        <div class="config-group"><label class="config-label">Vision System</label>
        ${F([["limelight",{name:"Limelight",desc:"Smart camera using NetworkTables"}],["photonvision",{name:"PhotonVision",desc:"Open-source with PhotonLib"}]],i.system,"visionSystem")}</div>
        <div id="vision-sub"></div>
    `,U("visionSystem",o=>{v.updateVision({system:o}),W(o)}),i.system&&W(i.system)}function W(e){const n=document.getElementById("vision-sub");if(!n)return;const t=v.getState().vision;e==="limelight"?(n.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">LIMELIGHT</div>
            <div class="config-group"><label class="config-label">Limelight Version</label>
            ${F(Object.entries(be),t.limelightVersion,"llVersion")}</div>
            ${ce(t)}
        `,U("llVersion",i=>v.updateVision({limelightVersion:i}))):e==="photonvision"&&(n.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">PHOTONVISION</div>
            <div class="config-group"><label class="config-label">Coprocessor</label>
            ${F(Object.entries(Le),t.photonPlatform,"photonPlat")}</div>
            ${ce(t)}
        `,U("photonPlat",i=>v.updateVision({photonPlatform:i}))),Ke()}function ce(e){let n=`<div class="config-group"><label class="config-label">Number of Cameras</label>
        <select class="config-select" id="cfg-cam-count">${[1,2,3,4].map(t=>`<option value="${t}" ${e.cameraCount===t?"selected":""}>${t}</option>`).join("")}</select></div>
        <div id="camera-transforms">`;for(let t=0;t<e.cameraCount;t++){const i=e.cameras[t]||{name:`cam${t}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0};n+=`
        <div class="config-divider"></div>
        <div class="config-section-title">Camera ${t+1}</div>
        <div class="config-group"><label class="config-label">Name</label>
        <input class="config-input" id="cam-${t}-name" value="${i.name}" placeholder="camera_${t}"></div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Translation (meters from robot center)</div>
        <div class="config-row">
            ${b(`cam-${t}-x`,"X (forward)",i.x,"0","0.001")}
            ${b(`cam-${t}-y`,"Y (left)",i.y,"0","0.001")}
            ${b(`cam-${t}-z`,"Z (up)",i.z,"0","0.001")}
        </div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Rotation (degrees)</div>
        <div class="config-row">
            ${b(`cam-${t}-roll`,"Roll",i.roll,"0","0.1")}
            ${b(`cam-${t}-pitch`,"Pitch",i.pitch,"0","0.1")}
            ${b(`cam-${t}-yaw`,"Yaw",i.yaw,"0","0.1")}
        </div>`}return n+="</div>",n}function Ke(){document.getElementById("cfg-cam-count")?.addEventListener("change",e=>{v.updateVision({cameraCount:parseInt(e.target.value)}),W(v.getState().vision.system)})}function Ye(e,n,t){const i=e.statemachine;n.textContent="STATE MACHINE",t.innerHTML=`
        <a href="https://ray260508.github.io/StateMachineGraph/" target="_blank" class="btn-primary" style="display:inline-flex;text-decoration:none;justify-content:center;">OPEN STATE GRAPH GENERATOR</a>
        <div class="config-hint">Design your state graph externally, then paste JSON below.</div>
        <div class="config-group"><label class="config-label">State Graph JSON</label>
        <textarea class="config-input" id="cfg-sm-json" rows="8" placeholder='{"nodes":[],"edges":[]}' style="resize:vertical;font-family:var(--font-mono);font-size:0.75rem;">${i.jsonData||""}</textarea></div>
    `}function ze(e){const n=v.getState();if(e==="chassis"){const t={driveMotor:document.getElementById("cfg-drive-motor")?.value||null,turnMotor:document.getElementById("cfg-turn-motor")?.value||null,gyro:document.getElementById("cfg-gyro")?.value||null,gyroCanId:parseInt(document.getElementById("can-gyro")?.value)||50,gearRatio:parseFloat(document.getElementById("cfg-gear-ratio")?.value)||null,turnGearRatio:parseFloat(document.getElementById("cfg-turn-ratio")?.value)||null,wheelDiameter:parseFloat(document.getElementById("cfg-wheel-diam")?.value)||null,maxSpeed:parseFloat(document.getElementById("cfg-max-speed")?.value)||null,trackWidth:parseFloat(document.getElementById("cfg-track-width")?.value)||null},i=document.getElementById("cfg-swerve-preset")?.value;if(i&&B[i]&&i!=="custom"){const a=B[i];t.gearRatio=t.gearRatio||a.driveRatio,t.turnGearRatio=t.turnGearRatio||a.turnRatio,t.wheelDiameter=t.wheelDiameter||a.wheelDiam,t.swervePreset=i}const o=document.getElementById("cfg-swerve-encoder")?.value;o&&(t.swerveEncoderType=o),n.chassis.type==="swerve"?t.canIds={fl_drive:parseInt(document.getElementById("can-fl-drive")?.value)||11,fl_turn:parseInt(document.getElementById("can-fl-turn")?.value)||12,fl_encoder:parseInt(document.getElementById("can-fl-enc")?.value)||13,fr_drive:parseInt(document.getElementById("can-fr-drive")?.value)||21,fr_turn:parseInt(document.getElementById("can-fr-turn")?.value)||22,fr_encoder:parseInt(document.getElementById("can-fr-enc")?.value)||23,bl_drive:parseInt(document.getElementById("can-bl-drive")?.value)||31,bl_turn:parseInt(document.getElementById("can-bl-turn")?.value)||32,bl_encoder:parseInt(document.getElementById("can-bl-enc")?.value)||33,br_drive:parseInt(document.getElementById("can-br-drive")?.value)||41,br_turn:parseInt(document.getElementById("can-br-turn")?.value)||42,br_encoder:parseInt(document.getElementById("can-br-enc")?.value)||43}:t.tankCanIds={left_leader:parseInt(document.getElementById("can-ll")?.value)||11,left_follower:parseInt(document.getElementById("can-lf")?.value)||12,right_leader:parseInt(document.getElementById("can-rl")?.value)||21,right_follower:parseInt(document.getElementById("can-rf")?.value)||22},v.updateChassis(t)}else if(n.mechanisms.hasOwnProperty(e))Ze(e,n);else if(e==="vision"){const t=v.getState().vision;for(let i=0;i<t.cameraCount;i++)v.updateCamera(i,{name:document.getElementById(`cam-${i}-name`)?.value||`cam${i}`,x:parseFloat(document.getElementById(`cam-${i}-x`)?.value)||0,y:parseFloat(document.getElementById(`cam-${i}-y`)?.value)||0,z:parseFloat(document.getElementById(`cam-${i}-z`)?.value)||0,roll:parseFloat(document.getElementById(`cam-${i}-roll`)?.value)||0,pitch:parseFloat(document.getElementById(`cam-${i}-pitch`)?.value)||0,yaw:parseFloat(document.getElementById(`cam-${i}-yaw`)?.value)||0});v.updateVision({configured:t.enabled&&t.system})}else e==="statemachine"&&v.updateStateMachine({jsonData:document.getElementById("cfg-sm-json")?.value||""})}function Ze(e,n){const t=n.mechanisms[e];if(!t)return;if(e==="arm"){const m=parseInt(document.getElementById("cfg-arm-dof")?.value)||t.dof,d=[];for(let u=0;u<m;u++){const f=document.getElementById(`cfg-arm-joint-${u}-hasfollower`)?.checked||!1,g=[{type:document.getElementById(`cfg-arm-joint-${u}-leader-motor`)?.value||null,canId:parseInt(document.getElementById(`cfg-arm-joint-${u}-leader-canid`)?.value)||30+u*2,inverted:document.getElementById(`cfg-arm-joint-${u}-leader-inv`)?.checked||!1,role:"leader"}];f&&g.push({type:document.getElementById(`cfg-arm-joint-${u}-follower-motor`)?.value||null,canId:parseInt(document.getElementById(`cfg-arm-joint-${u}-follower-canid`)?.value)||31+u*2,inverted:document.getElementById(`cfg-arm-joint-${u}-follower-inv`)?.checked||!1,role:"follower"}),d.push({motors:g,gearRatio:parseFloat(document.getElementById(`cfg-arm-joint-${u}-ratio`)?.value)||null,encoder:document.getElementById(`cfg-arm-joint-${u}-encoder`)?.value||null,encoderId:parseInt(document.getElementById(`cfg-arm-joint-${u}-encoder-id`)?.value)||31+u*2,motorConfig:{currentLimit:parseInt(document.getElementById(`cfg-arm-joint-${u}-curlimit`)?.value)||40,brakeMode:!0},softLimitFwd:parseFloat(document.getElementById(`cfg-arm-joint-${u}-softfwd`)?.value)||null,softLimitRev:parseFloat(document.getElementById(`cfg-arm-joint-${u}-softrev`)?.value)||null,pid:{kP:parseFloat(document.getElementById(`cfg-arm-joint-${u}-kp`)?.value)||0,kI:parseFloat(document.getElementById(`cfg-arm-joint-${u}-ki`)?.value)||0,kD:parseFloat(document.getElementById(`cfg-arm-joint-${u}-kd`)?.value)||0,kS:0,kV:0,kA:0}})}const c=document.getElementById(`cfg-${e}-attached`)?.value;v.updateMechanism("arm",{dof:m,joints:d,attachedTo:c||t.attachedTo});return}t.motors.forEach((m,d)=>{v.updateMotor(e,d,{type:document.getElementById(`cfg-${e}-motor-${d}`)?.value||null,canId:parseInt(document.getElementById(`cfg-${e}-canid-${d}`)?.value)||m.canId,inverted:document.getElementById(`cfg-${e}-inv-${d}`)?.checked||!1,role:document.getElementById(`cfg-${e}-role-${d}`)?.value||m.role})});const i=document.querySelector(`input[name="cfg-${e}-brakemode"]:checked`)?.value,o={currentLimit:parseInt(document.getElementById(`cfg-${e}-curlimit`)?.value)||40,brakeMode:i!=="coast"},a=t.pid?{kP:parseFloat(document.getElementById(`cfg-${e}-kp`)?.value)||0,kI:parseFloat(document.getElementById(`cfg-${e}-ki`)?.value)||0,kD:parseFloat(document.getElementById(`cfg-${e}-kd`)?.value)||0,kS:parseFloat(document.getElementById(`cfg-${e}-ks`)?.value)||0,kV:parseFloat(document.getElementById(`cfg-${e}-kv`)?.value)||0,kA:parseFloat(document.getElementById(`cfg-${e}-ka`)?.value)||0}:void 0,r=document.getElementById(`cfg-${e}-attached`)?.value,s={gearRatio:parseFloat(document.getElementById(`cfg-${e}-ratio`)?.value)||null,motorConfig:o,attachedTo:r||t.attachedTo};a&&(s.pid=a),"rampRate"in t&&(s.rampRate=parseFloat(document.getElementById(`cfg-${e}-ramp`)?.value)||0),e==="elevator"&&(s.encoder=document.getElementById("cfg-elevator-encoder")?.value||null,s.encoderId=parseInt(document.getElementById("cfg-elevator-enc-id")?.value)||53,s.minHeight=parseFloat(document.getElementById("cfg-elevator-min")?.value)||0,s.maxHeight=parseFloat(document.getElementById("cfg-elevator-max")?.value)||null,s.softLimitFwd=parseFloat(document.getElementById("cfg-elevator-softfwd")?.value)||null,s.softLimitRev=parseFloat(document.getElementById("cfg-elevator-softrev")?.value)||null,s.motionMaxVel=parseFloat(document.getElementById("cfg-elevator-mmvel")?.value)||null,s.motionMaxAccel=parseFloat(document.getElementById("cfg-elevator-mmacc")?.value)||null),e==="shooter"&&(s.maxRPM=parseInt(document.getElementById("cfg-shooter-rpm")?.value)||null,(t.shooterType==="adjustable"||t.shooterType==="adjustable_turret")&&(s.pivotMotor={type:document.getElementById("cfg-shooter-pivot-motor")?.value||null,canId:parseInt(document.getElementById("cfg-shooter-pivot-canid")?.value)||24,inverted:document.getElementById("cfg-shooter-pivot-inv")?.checked||!1}),t.shooterType==="adjustable_turret"&&(s.turretMotor={type:document.getElementById("cfg-shooter-turret-motor")?.value||null,canId:parseInt(document.getElementById("cfg-shooter-turret-canid")?.value)||25,inverted:document.getElementById("cfg-shooter-turret-inv")?.checked||!1})),e==="intake"&&(s.hasSensor=document.getElementById("cfg-intake-sensor")?.checked||!1,s.sensorPortType=document.getElementById("cfg-intake-sensor-type")?.value||"dio",s.sensorPort=parseInt(document.getElementById("cfg-intake-sensor-port")?.value)||0),e==="launcher"&&(s.softLimitFwd=parseFloat(document.getElementById("cfg-launcher-softfwd")?.value)||null,s.softLimitRev=parseFloat(document.getElementById("cfg-launcher-softrev")?.value)||null,s.hasSensor=document.getElementById("cfg-launcher-sensor")?.checked||!1,s.sensorPortType=document.getElementById("cfg-launcher-sensor-type")?.value||"dio",s.sensorPort=parseInt(document.getElementById("cfg-launcher-sensor-port")?.value)||1);const l=parseFloat(document.getElementById(`cfg-${e}-mass`)?.value),p=parseFloat(document.getElementById(`cfg-${e}-moi`)?.value);(!isNaN(l)||!isNaN(p))&&(s.physics={massKg:isNaN(l)?t.physics?.massKg||null:l,moiKgM2:isNaN(p)?t.physics?.moiKgM2||null:p}),v.updateMechanism(e,s)}function U(e,n){document.querySelectorAll(`[data-name="${e}"]`).forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(`[data-name="${e}"]`).forEach(i=>i.classList.remove("active")),t.classList.add("active"),n(t.dataset.value)})})}function Qe(){const e=document.getElementById("particle-canvas");if(!e)return{start(){},stop(){},destroy(){},isRunning:!1};const n=e.getContext("2d");let t=[],i=null,o=!1,a=!1;function r(){e.width=window.innerWidth,e.height=window.innerHeight}function s(){t=[];const u=Math.floor(e.width*e.height/15e3);for(let f=0;f<u;f++)t.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,alpha:Math.random()*.4+.1})}function l(){if(!(!o||a)){n.clearRect(0,0,e.width,e.height);for(let u=0;u<t.length;u++)for(let f=u+1;f<t.length;f++){const g=t[u].x-t[f].x,I=t[u].y-t[f].y,C=Math.sqrt(g*g+I*I);C<120&&(n.beginPath(),n.moveTo(t[u].x,t[u].y),n.lineTo(t[f].x,t[f].y),n.strokeStyle=`rgba(213,0,28,${.08*(1-C/120)})`,n.lineWidth=.5,n.stroke())}t.forEach(u=>{u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>e.width)&&(u.vx*=-1),(u.y<0||u.y>e.height)&&(u.vy*=-1),n.beginPath(),n.arc(u.x,u.y,u.r,0,Math.PI*2),n.fillStyle=`rgba(213,0,28,${u.alpha})`,n.fill()}),i=requestAnimationFrame(l)}}const p=()=>{r(),s()};function m(){a||o||(o=!0,r(),s(),l(),window.addEventListener("resize",p))}function d(){o=!1,i&&(cancelAnimationFrame(i),i=null),window.removeEventListener("resize",p)}function c(){d(),a=!0,n.clearRect(0,0,e.width,e.height)}return{start:m,stop:d,destroy:c,get isRunning(){return o}}}function M(e,n="info"){const t=document.querySelector(".toast");t&&t.remove();const i=document.createElement("div");i.className=`toast ${n} toast-auto-hide`,i.innerHTML=`${n==="success"?"✓":n==="error"?"✕":"ℹ"} ${e}`,document.body.appendChild(i),setTimeout(()=>i.remove(),3e3)}var et=Oe();const tt=Me(et),w={frcYear:"2026",gradleRIO:"2026.2.1",javaVersion:"VERSION_17",vendordeps:{advantagekit:{fileName:"AdvantageKit.json",name:"AdvantageKit",version:"2026.1.0",uuid:"d94427e6-503d-4de9-b18b-474d5fd2a645",mavenUrls:["https://github.com/Mechanical-Advantage/AdvantageKit/releases/download/v2026.1.0/"],javaDependencies:[{groupId:"org.littletonrobotics.akit",artifactId:"akit-java",version:"2026.1.0"}]},phoenix6:{fileName:"Phoenix6.json",name:"CTRE-Phoenix (v6)",version:"26.0.0",vendorKey:"ctre",mavenUrls:["https://maven.ctr-electronics.com/release/"],jsonUrl:"https://maven.ctr-electronics.com/release/com/ctre/phoenix6/latest/Phoenix6-frc2026-latest.json",javaDependencies:[{groupId:"com.ctre.phoenix6",artifactId:"wpiapi-java",version:"26.0.0"}]},revlib:{fileName:"REVLib.json",name:"REVLib",version:"2026.1.1",vendorKey:"rev",mavenUrls:["https://maven.revrobotics.com/release/"],jsonUrl:"https://software-metadata.revrobotics.com/REVLib-2026.json",javaDependencies:[{groupId:"com.revrobotics.frc",artifactId:"REVLib-java",version:"2026.1.1"}]},navx:{fileName:"NavX.json",name:"NavX",version:"2026.2.0",vendorKey:"kauai",mavenUrls:["https://dev.studica.com/maven/release/2026/"],jsonUrl:"https://dev.studica.com/releases/2026/NavX.json",javaDependencies:[{groupId:"com.kauailabs.navx.frc",artifactId:"navx-frc-java",version:"2026.2.0"}]},photonlib:{fileName:"photonlib.json",name:"photonlib",version:"2026.2.1",vendorKey:"photonvision",mavenUrls:["https://maven.photonvision.org/repository/internal","https://maven.photonvision.org/repository/snapshots"],jsonUrl:"https://maven.photonvision.org/repository/internal/org/photonvision/photonlib-json/1.0/photonlib-json-1.0.json",javaDependencies:[{groupId:"org.photonvision",artifactId:"photonlib-java",version:"2026.2.1"}]},pathplanner:{fileName:"PathplannerLib.json",name:"PathplannerLib",version:"2026.3.0",mavenUrls:["https://3015rangerrobotics.github.io/pathplannerlib/repo"],jsonUrl:"https://3015rangerrobotics.github.io/pathplannerlib/PathplannerLib.json",javaDependencies:[{groupId:"com.pathplanner.lib",artifactId:"PathplannerLib-java",version:"2026.3.0"}]}},pathplannerFormat:"2026.0",motorApi:{ctre:{imports:["com.ctre.phoenix6.hardware.TalonFX","com.ctre.phoenix6.controls.VoltageOut","com.ctre.phoenix6.controls.PositionVoltage","com.ctre.phoenix6.configs.TalonFXConfiguration","com.ctre.phoenix6.signals.NeutralModeValue","com.ctre.phoenix6.signals.InvertedValue"]},rev:{imports:["com.revrobotics.spark.SparkMax","com.revrobotics.spark.SparkLowLevel.MotorType","com.revrobotics.spark.config.SparkMaxConfig","com.revrobotics.spark.config.SparkBaseConfig.IdleMode","com.revrobotics.RelativeEncoder","com.revrobotics.spark.SparkBase.ControlType"]}},advantagekitApi:{robotBaseClass:"LoggedRobot",robotBaseImport:"org.littletonrobotics.junction.LoggedRobot",loggerImport:"org.littletonrobotics.junction.Logger",logStart:"Logger.start()"},simApi:{getMotorSim:(e,n)=>({falcon500:`DCMotor.getFalcon500(${n})`,krakenx60:`DCMotor.getKrakenX60(${n})`,krakenx44:`DCMotor.getKrakenX60(${n})`,minion:`DCMotor.getFalcon500(${n})`,talonfxs:`DCMotor.getFalcon500(${n})`,neo:`DCMotor.getNEO(${n})`,neo550:`DCMotor.getNeo550(${n})`,vortex:`DCMotor.getNeoVortex(${n})`})[e]||`DCMotor.getNEO(${n})`}};function R(e){return e&&$[e]?.vendor==="ctre"}function k(e){return e&&$[e]?.vendor==="rev"}function it(e){return R(e)?w.motorApi.ctre.imports.map(n=>`import ${n};`).join(`
`)+`
`:k(e)?w.motorApi.rev.imports.map(n=>`import ${n};`).join(`
`)+`
`:""}function nt(e,n){let t="";return e.forEach((i,o)=>{const a=o===0?"leader":`follower${o}`,r=i.inverted?"InvertedValue.Clockwise_Positive":"InvertedValue.CounterClockwise_Positive";R(i.type)?t+=`
        {
            var cfg = new TalonFXConfiguration();
            cfg.CurrentLimits.StatorCurrentLimit = ${n}.CURRENT_LIMIT;
            cfg.CurrentLimits.StatorCurrentLimitEnable = true;
            cfg.MotorOutput.NeutralMode = ${n}.BRAKE_MODE ? NeutralModeValue.Brake : NeutralModeValue.Coast;
            cfg.MotorOutput.Inverted = ${r};
            ${a}.getConfigurator().apply(cfg);
            ${a}.setPosition(0);
        }`:k(i.type)&&(t+=`
        {
            var cfg = new SparkMaxConfig();
            cfg.idleMode(${n}.BRAKE_MODE ? IdleMode.kBrake : IdleMode.kCoast);
            cfg.smartCurrentLimit(${n}.CURRENT_LIMIT);
            ${a}.configure(cfg, null, null);
            ${a}.getEncoder().setPosition(0);
        }`)}),t}function ot(e){const n=e[0];return R(n?.type)?"leader.getPosition().getValueAsDouble()":k(n?.type)?"encoder.getPosition()":"0.0"}function st(e){return $[e.driveMotor],e.tankCanIds,R(e.driveMotor)?`package frc.robot.subsystems.drive;

import com.ctre.phoenix6.hardware.TalonFX;
import com.ctre.phoenix6.controls.VoltageOut;
import com.ctre.phoenix6.configs.TalonFXConfiguration;
import com.ctre.phoenix6.signals.NeutralModeValue;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import edu.wpi.first.math.kinematics.DifferentialDriveWheelSpeeds;
import frc.robot.Constants.DriveConstants;

public class DriveIOReal implements DriveIO {
    private final TalonFX leftLeader = new TalonFX(DriveConstants.LEFT_LEADER_ID);
    private final TalonFX leftFollower = new TalonFX(DriveConstants.LEFT_FOLLOWER_ID);
    private final TalonFX rightLeader = new TalonFX(DriveConstants.RIGHT_LEADER_ID);
    private final TalonFX rightFollower = new TalonFX(DriveConstants.RIGHT_FOLLOWER_ID);
    private final VoltageOut voltageOut = new VoltageOut(0);
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);

    public DriveIOReal() {
        configureMotor(leftLeader);
        configureMotor(leftFollower);
        configureMotor(rightLeader);
        configureMotor(rightFollower);
        leftFollower.setControl(new com.ctre.phoenix6.controls.Follower(leftLeader.getDeviceID()));
        rightFollower.setControl(new com.ctre.phoenix6.controls.Follower(rightLeader.getDeviceID()));
    }

    private void configureMotor(TalonFX motor) {
        var cfg = new TalonFXConfiguration();
        cfg.CurrentLimits.StatorCurrentLimit = 40;
        cfg.CurrentLimits.StatorCurrentLimitEnable = true;
        cfg.MotorOutput.NeutralMode = NeutralModeValue.Brake;
        motor.getConfigurator().apply(cfg);
    }

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        inputs.gyroYawRad = 0; // TODO: Pigeon2 / NavX on DriveConstants.GYRO_ID
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var wheelSpeeds = kinematics.toWheelSpeeds(speeds);
        leftLeader.setControl(voltageOut.withOutput(wheelSpeeds.leftMetersPerSecond * 12.0 / DriveConstants.MAX_SPEED_MPS));
        rightLeader.setControl(voltageOut.withOutput(wheelSpeeds.rightMetersPerSecond * 12.0 / DriveConstants.MAX_SPEED_MPS));
    }

    @Override
    public void stop() { drive(new ChassisSpeeds()); }

    @Override
    public Rotation2d getHeading() { return Rotation2d.fromRadians(0); }
}
`:k(e.driveMotor)?`package frc.robot.subsystems.drive;

import com.revrobotics.spark.SparkMax;
import com.revrobotics.spark.SparkLowLevel.MotorType;
import com.revrobotics.spark.config.SparkMaxConfig;
import com.revrobotics.spark.config.SparkBaseConfig.IdleMode;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import frc.robot.Constants.DriveConstants;

public class DriveIOReal implements DriveIO {
    private final SparkMax leftLeader = new SparkMax(DriveConstants.LEFT_LEADER_ID, MotorType.kBrushless);
    private final SparkMax leftFollower = new SparkMax(DriveConstants.LEFT_FOLLOWER_ID, MotorType.kBrushless);
    private final SparkMax rightLeader = new SparkMax(DriveConstants.RIGHT_LEADER_ID, MotorType.kBrushless);
    private final SparkMax rightFollower = new SparkMax(DriveConstants.RIGHT_FOLLOWER_ID, MotorType.kBrushless);
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);

    public DriveIOReal() {
        for (SparkMax m : new SparkMax[] { leftLeader, leftFollower, rightLeader, rightFollower }) {
            m.configure(new SparkMaxConfig().idleMode(IdleMode.kBrake).smartCurrentLimit(40), null, null);
        }
        leftFollower.follow(leftLeader);
        rightFollower.follow(rightLeader);
    }

    @Override public void updateInputs(DriveIOInputs inputs) { inputs.gyroYawRad = 0; }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var ws = kinematics.toWheelSpeeds(speeds);
        leftLeader.set(ws.leftMetersPerSecond / DriveConstants.MAX_SPEED_MPS);
        rightLeader.set(ws.rightMetersPerSecond / DriveConstants.MAX_SPEED_MPS);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Rotation2d getHeading() { return Rotation2d.kZero; }
}
`:null}function at(){return`package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.DifferentialDriveKinematics;
import edu.wpi.first.wpilibj.simulation.DifferentialDrivetrainSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.DriveConstants;

public class DriveIOSim implements DriveIO {
    private final DifferentialDriveKinematics kinematics =
        new DifferentialDriveKinematics(DriveConstants.TRACK_WIDTH_M);
    private final DifferentialDrivetrainSim sim = new DifferentialDrivetrainSim(
        kinematics,
        DifferentialDrivetrainSim.createKitbotChassis(DriveConstants.TRACK_WIDTH_M),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        edu.wpi.first.math.system.plant.LinearSystemId.createDCMotorSystem(
            edu.wpi.first.math.system.plant.DCMotor.getNEO(2), 2.0, 8.45),
        edu.wpi.first.math.system.plant.LinearSystemId.createDCMotorSystem(
            edu.wpi.first.math.system.plant.DCMotor.getNEO(2), 2.0, 8.45),
        edu.wpi.first.math.system.plant.DCMotor.getNEO(2),
        DriveConstants.WHEEL_DIAMETER_M / 2.0,
        DriveConstants.DRIVE_GEAR_RATIO,
        null);
    private Pose2d pose = new Pose2d();
    private Rotation2d heading = Rotation2d.kZero;

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        sim.update(0.02);
        pose = sim.getPose();
        heading = sim.getHeading();
        inputs.pose = pose;
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = kinematics.toChassisSpeeds(sim.getLeftVelocityMetersPerSecond(), sim.getRightVelocityMetersPerSecond());
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        var ws = kinematics.toWheelSpeeds(speeds);
        sim.setInputs(ws.leftMetersPerSecond, ws.rightMetersPerSecond);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return pose; }
    @Override public Rotation2d getHeading() { return heading; }
}
`}function rt(e){return`package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModulePosition;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import edu.wpi.first.math.util.Units;
import edu.wpi.first.wpilibj2.command.Subsystem;
import frc.robot.Constants.DriveConstants;

/**
 * Swerve IO — wire modules to your vendor (CTRE Phoenix 6 SwerveDrivetrain or WPILib SwerveModule).
 * CAN IDs are in DriveConstants (FL/FR/BL/BR drive, turn, encoder).
 */
public class DriveIOReal implements DriveIO {
    private final SwerveDriveKinematics kinematics = new SwerveDriveKinematics(
        DriveConstants.MODULE_TRANSLATIONS);
    private Rotation2d heading = Rotation2d.kZero;

    public DriveIOReal() {
        // TODO: Initialize ${e.usePhoenix6Swerve?"Phoenix 6 SwerveDrivetrain":"four SwerveModule instances"}
    }

    @Override public void updateInputs(DriveIOInputs inputs) {
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = new ChassisSpeeds();
        inputs.pose = new Pose2d(0, 0, heading);
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        SwerveModuleState[] states = kinematics.toSwerveModuleStates(speeds);
        SwerveDriveKinematics.desaturateWheelSpeeds(states, DriveConstants.MAX_SPEED_MPS);
        // TODO: apply states to modules
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return new Pose2d(0, 0, heading); }
    @Override public Rotation2d getHeading() { return heading; }
}
`}function lt(){return`package frc.robot.subsystems.drive;

import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.math.kinematics.SwerveDriveKinematics;
import edu.wpi.first.math.kinematics.SwerveModuleState;
import frc.robot.Constants.DriveConstants;

public class DriveIOSim implements DriveIO {
    private final SwerveDriveKinematics kinematics = new SwerveDriveKinematics(
        DriveConstants.MODULE_TRANSLATIONS);
    private Pose2d pose = new Pose2d();
    private Rotation2d heading = Rotation2d.kZero;
    private ChassisSpeeds lastSpeeds = new ChassisSpeeds();

    @Override
    public void updateInputs(DriveIOInputs inputs) {
        pose = pose.exp(lastSpeeds);
        heading = pose.getRotation();
        inputs.pose = pose;
        inputs.gyroYawRad = heading.getRadians();
        inputs.speeds = lastSpeeds;
    }

    @Override
    public void drive(ChassisSpeeds speeds) {
        lastSpeeds = speeds;
        SwerveModuleState[] states = kinematics.toSwerveModuleStates(speeds);
        SwerveDriveKinematics.desaturateWheelSpeeds(states, DriveConstants.MAX_SPEED_MPS);
    }

    @Override public void stop() { drive(new ChassisSpeeds()); }
    @Override public Pose2d getPose() { return pose; }
    @Override public Rotation2d getHeading() { return heading; }
}
`}function de(e,n,t){if(e==="arm"){let c=`import frc.robot.Constants.ArmConstants;
`,u="",f=`        // Initialize each joint
`,g="",I="";return n.joints.forEach((E,h)=>{const N=E.motors[0],ee=E.motors.length>1;N&&N.type&&(R(N.type)?(c+=`import com.ctre.phoenix6.hardware.TalonFX;
import com.ctre.phoenix6.controls.VoltageOut;
`,u+=`    private final TalonFX joint${h}Motor = new TalonFX(ArmConstants.JOINT_${h+1}_MOTOR_ID);
`,f+=`        var joint${h}Cfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
`,f+=`        joint${h}Cfg.MotorOutput.Inverted = ArmConstants.JOINT_${h+1}_MOTOR_0_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
`,f+=`        joint${h}Motor.getConfigurator().apply(joint${h}Cfg);
`,ee&&(u+=`    private final TalonFX joint${h}Follower = new TalonFX(ArmConstants.JOINT_${h+1}_FOLLOWER_1_ID);
`,f+=`        joint${h}Follower.setControl(new com.ctre.phoenix6.controls.Follower(joint${h}Motor.getDeviceID()));
`),g+=`        inputs.positionRad[${h}] = joint${h}Motor.getPosition().getValueAsDouble() * 2 * Math.PI;
`,g+=`        inputs.velocityRadPerSec[${h}] = joint${h}Motor.getVelocity().getValueAsDouble() * 2 * Math.PI;
`,g+=`        inputs.appliedVolts[${h}] = joint${h}Motor.getMotorVoltage().getValueAsDouble();
`,g+=`        inputs.currentAmps[${h}] = joint${h}Motor.getStatorCurrent().getValueAsDouble();
`):k(N.type)&&(c+=`import com.revrobotics.spark.SparkMax;
import com.revrobotics.spark.SparkLowLevel.MotorType;
`,u+=`    private final SparkMax joint${h}Motor = new SparkMax(ArmConstants.JOINT_${h+1}_MOTOR_ID, MotorType.kBrushless);
`,f+=`        var joint${h}Cfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,f+=`        joint${h}Cfg.inverted(ArmConstants.JOINT_${h+1}_MOTOR_0_INVERTED);
`,f+=`        joint${h}Motor.configure(joint${h}Cfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,ee&&(u+=`    private final SparkMax joint${h}Follower = new SparkMax(ArmConstants.JOINT_${h+1}_FOLLOWER_1_ID, MotorType.kBrushless);
`,f+=`        var joint${h}FollowerCfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,f+=`        joint${h}FollowerCfg.follow(joint${h}Motor);
`,f+=`        joint${h}Follower.configure(joint${h}FollowerCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`),g+=`        inputs.positionRad[${h}] = joint${h}Motor.getEncoder().getPosition();
`,g+=`        inputs.velocityRadPerSec[${h}] = joint${h}Motor.getEncoder().getVelocity();
`,g+=`        inputs.appliedVolts[${h}] = joint${h}Motor.getAppliedOutput() * joint${h}Motor.getBusVoltage();
`,g+=`        inputs.currentAmps[${h}] = joint${h}Motor.getOutputCurrent();
`),I+=`
    @Override
    public void setJointVolts(int jointIndex, double volts) {
        if (jointIndex == ${h}) {
            ${R(N.type)?`joint${h}Motor.setControl(new VoltageOut(volts));`:`joint${h}Motor.setVoltage(volts);`}
        }
    }
`)}),`package frc.robot.subsystems.arm;
${[...new Set(c.split(`
`).filter(Boolean))].join(`
`)}

public class ArmIOReal implements ArmIO {
${u}
    public ArmIOReal() {
${f}    }

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${g}    }

${I}
    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`}const i=n.motors||[],o=i[0];if(!o?.type)return null;const a=`${t}Constants`;let r="",s="",l="";i.forEach((c,u)=>{const f=u===0?"leader":`follower${u}`,g=u===0?"MOTOR_ID":`FOLLOWER_${u}_ID`;R(c.type)?(r+=`    private final TalonFX ${f} = new TalonFX(${a}.${g});
`,u===0&&(r+=`    private final VoltageOut voltageReq = new VoltageOut(0);
`)):k(c.type)&&(r+=`    private final SparkMax ${f} = new SparkMax(${a}.${g}, MotorType.kBrushless);
`,u===0&&(r+=`    private final RelativeEncoder encoder = leader.getEncoder();
`)),u>0&&(R(c.type)?l+=`        ${f}.setControl(new com.ctre.phoenix6.controls.Follower(leader.getDeviceID()));
`:k(c.type)&&(l+=`        ${f}.follow(leader);
`))}),s=nt(i,a);const p=R(o.type)?"        leader.setControl(voltageReq.withOutput(volts));":"        leader.setVoltage(volts);";let m="",d="";if(e==="shooter"&&(n.shooterType==="adjustable"||n.shooterType==="adjustable_turret")){const c=n.pivotMotor;c&&c.type&&(R(c.type)?(r+=`    private final TalonFX pivot = new TalonFX(${a}.PIVOT_MOTOR_ID);
`,s+=`
        // Pivot init
        var pivotCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        pivotCfg.MotorOutput.Inverted = ${a}.PIVOT_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        pivot.getConfigurator().apply(pivotCfg);
`,m+=`        inputs.pivotPositionRad = pivot.getPosition().getValueAsDouble();
`,d+=`
    @Override
    public void setPivotVoltage(double volts) {
        pivot.setControl(voltageReq.withOutput(volts));
    }
`):k(c.type)&&(r+=`    private final SparkMax pivot = new SparkMax(${a}.PIVOT_MOTOR_ID, MotorType.kBrushless);
`,s+=`
        // Pivot init
        var pivotCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        pivotCfg.inverted(${a}.PIVOT_INVERTED);
        pivot.configure(pivotCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,m+=`        inputs.pivotPositionRad = pivot.getEncoder().getPosition();
`,d+=`
    @Override
    public void setPivotVoltage(double volts) {
        pivot.setVoltage(volts);
    }
`))}if(e==="shooter"&&n.shooterType==="adjustable_turret"){const c=n.turretMotor;c&&c.type&&(R(c.type)?(r+=`    private final TalonFX turret = new TalonFX(${a}.TURRET_MOTOR_ID);
`,s+=`
        // Turret init
        var turretCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        turretCfg.MotorOutput.Inverted = ${a}.TURRET_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        turret.getConfigurator().apply(turretCfg);
`,m+=`        inputs.turretPositionRad = turret.getPosition().getValueAsDouble();
`,d+=`
    @Override
    public void setTurretVoltage(double volts) {
        turret.setControl(voltageReq.withOutput(volts));
    }
`):k(c.type)&&(r+=`    private final SparkMax turret = new SparkMax(${a}.TURRET_MOTOR_ID, MotorType.kBrushless);
`,s+=`
        // Turret init
        var turretCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        turretCfg.inverted(${a}.TURRET_INVERTED);
        turret.configure(turretCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,m+=`        inputs.turretPositionRad = turret.getEncoder().getPosition();
`,d+=`
    @Override
    public void setTurretVoltage(double volts) {
        turret.setVoltage(volts);
    }
`))}if(e==="launcher"&&n.launcherType==="arm_claw"){const c=n.clawMotor;c&&c.type&&(R(c.type)?(r+=`    private final TalonFX claw = new TalonFX(${a}.CLAW_MOTOR_ID);
`,s+=`
        // Claw init
        var clawCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        clawCfg.MotorOutput.Inverted = ${a}.CLAW_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        claw.getConfigurator().apply(clawCfg);
`,m+=`        inputs.clawPositionRad = claw.getPosition().getValueAsDouble();
`,d+=`
    @Override
    public void setClawVoltage(double volts) {
        claw.setControl(voltageReq.withOutput(volts));
    }
`):k(c.type)&&(r+=`    private final SparkMax claw = new SparkMax(${a}.CLAW_MOTOR_ID, MotorType.kBrushless);
`,s+=`
        // Claw init
        var clawCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        clawCfg.inverted(${a}.CLAW_INVERTED);
        claw.configure(clawCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,m+=`        inputs.clawPositionRad = claw.getEncoder().getPosition();
`,d+=`
    @Override
    public void setClawVoltage(double volts) {
        claw.setVoltage(volts);
    }
`))}return`package frc.robot.subsystems.${e};

${it(o.type)}
import frc.robot.Constants.${t}Constants;

public class ${t}IOReal implements ${t}IO {
${r}
    public ${t}IOReal() {${s}
${l}    }

    @Override
    public void updateInputs(${t}IOInputs inputs) {
        inputs.positionRad = ${ot(i)};
        inputs.velocityRadPerSec = 0.0;
        inputs.appliedVolts = 0.0;
${e==="elevator"?`        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;
`:""}${n.hasSensor?`        inputs.hasPiece = false; // TODO: sensor on Constants
`:""}${m}    }

    @Override
    public void setVoltage(double volts) {
${p}    }${d}

    @Override
    public void stop() { setVoltage(0); }

    @Override
    public void configurePID(double kP, double kI, double kD) {
        // TODO: Slot0 gains on motor controllers
    }
}
`}function ue(e,n,t,i){if(e==="arm"){let s="",l="",p="";return n.joints.forEach((m,d)=>{const u=m.motors[0]?.type?.toLowerCase()||"neo",f=m.motors.length,g=w.simApi.getMotorSim(u,f);s+=`    private final DCMotorSim joint${d}Sim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.${g.replace("DCMotor.","")}, 0.002, ${(10-d*2).toFixed(1)}),
        DCMotor.${g.replace("DCMotor.","")}, 0.002, 0.01);
    private double joint${d}AppliedVolts = 0.0;
`,l+=`
        joint${d}Sim.setInputVoltage(RoboRioSim.getVInVoltage() * joint${d}AppliedVolts / 12.0);
        joint${d}Sim.update(0.02);
        inputs.positionRad[${d}] = joint${d}Sim.getAngularPositionRad();
        inputs.velocityRadPerSec[${d}] = joint${d}Sim.getAngularVelocityRadPerSec();
        inputs.appliedVolts[${d}] = joint${d}AppliedVolts;
        inputs.currentAmps[${d}] = joint${d}Sim.getCurrentDrawAmps();
`,p+=`        if (jointIndex == ${d}) joint${d}AppliedVolts = volts;
`}),`package frc.robot.subsystems.arm;

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.ArmConstants;

public class ArmIOSim implements ArmIO {
    /** Simulation parent: ${i||"chassis"} */
${s}
    public ArmIOSim() {}

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${l}    }

    @Override
    public void setJointVolts(int jointIndex, double volts) {
${p}    }

    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`}let o="",a="",r="";return e==="shooter"&&(n.shooterType==="adjustable"||n.shooterType==="adjustable_turret")&&(o+=`
    private final DCMotorSim pivotSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim pivotEncoderSim = new EncoderSim(pivotSim);
    private double pivotAppliedVolts = 0.0;
`,a+=`
        pivotSim.setInputVoltage(RoboRioSim.getVInVoltage() * pivotAppliedVolts / 12.0);
        pivotSim.update(0.02);
        inputs.pivotPositionRad = pivotEncoderSim.getDistance();
        inputs.pivotVelocityRadPerSec = pivotEncoderSim.getRate();
        inputs.pivotAppliedVolts = pivotAppliedVolts;
`,r+=`
    @Override
    public void setPivotVoltage(double volts) { pivotAppliedVolts = volts; }
`),e==="shooter"&&n.shooterType==="adjustable_turret"&&(o+=`
    private final DCMotorSim turretSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim turretEncoderSim = new EncoderSim(turretSim);
    private double turretAppliedVolts = 0.0;
`,a+=`
        turretSim.setInputVoltage(RoboRioSim.getVInVoltage() * turretAppliedVolts / 12.0);
        turretSim.update(0.02);
        inputs.turretPositionRad = turretEncoderSim.getDistance();
        inputs.turretVelocityRadPerSec = turretEncoderSim.getRate();
        inputs.turretAppliedVolts = turretAppliedVolts;
`,r+=`
    @Override
    public void setTurretVoltage(double volts) { turretAppliedVolts = volts; }
`),`package frc.robot.subsystems.${e};

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.${t}Constants;

public class ${t}IOSim implements ${t}IO {
    /** Simulation parent: ${i||"chassis"} */
    private final DCMotorSim motorSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(${(()=>{const s=n.motors||[],p=s[0]?.type?.toLowerCase()||"neo",m=s.length;return w.simApi.getMotorSim(p,m)})()}, 0.002, 10.0),
        ${(()=>{const s=n.motors||[],p=s[0]?.type?.toLowerCase()||"neo",m=s.length;return w.simApi.getMotorSim(p,m)})()}, 0.002, 0.01);
    private double appliedVolts = 0.0;${o}

    public ${t}IOSim() {}

    @Override
    public void updateInputs(${t}IOInputs inputs) {
        motorSim.setInputVoltage(RoboRioSim.getVInVoltage() * appliedVolts / 12.0);
        motorSim.update(0.02);
        inputs.positionRad = motorSim.getAngularPositionRad();
        inputs.velocityRadPerSec = motorSim.getAngularVelocityRadPerSec();
        inputs.appliedVolts = appliedVolts;
        inputs.currentAmps = motorSim.getCurrentDrawAmps();
${e==="elevator"?`        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;
`:""}${n.hasSensor?`        inputs.hasPiece = false;
`:""}${a}    }

    @Override
    public void setVoltage(double volts) { appliedVolts = volts; }${r}

    @Override
    public void stop() { appliedVolts = 0; }

    @Override
    public void configurePID(double kP, double kI, double kD) {}
}
`}const K=[{fwd_quasi:"a()",rev_quasi:"b()",fwd_dyn:"x()",rev_dyn:"y()"},{fwd_quasi:"povUp()",rev_quasi:"povDown()",fwd_dyn:"povRight()",rev_dyn:"povLeft()"},{fwd_quasi:"leftBumper()",rev_quasi:"rightBumper()",fwd_dyn:"leftTrigger()",rev_dyn:"rightTrigger()"},{fwd_quasi:"back()",rev_quasi:"start()",fwd_dyn:"back().and(controller.a())",rev_dyn:"start().and(controller.a())"}];function ct(e,n){const t=[];if(n&&t.push({name:"drive",varName:"drive",displayName:"Drive"}),t.push(...e),t.length===0)return"";let i=`
        // ═══════════════════════════════════════════════════════════════
`;return i+=`        // AUTO-GENERATED SYSID CHARACTERIZATION BINDINGS
`,i+=`        // Active in ALL modes. Hold the assigned buttons to run routines.
`,i+=`        // After collecting data, use WPILib SysId tool to analyze logs.
`,i+=`        // ═══════════════════════════════════════════════════════════════
`,t.length<=K.length?t.forEach((o,a)=>{const r=K[a];i+=`
        // --- ${o.displayName} SysId (${dt(a)}) ---
`,i+=`        controller.${r.fwd_quasi}.whileTrue(${o.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,i+=`        controller.${r.rev_quasi}.whileTrue(${o.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,i+=`        controller.${r.fwd_dyn}.whileTrue(${o.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,i+=`        controller.${r.rev_dyn}.whileTrue(${o.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}):(i+=`        // NOTE: More than 4 SysId-capable subsystems. Using dashboard chooser.
`,i+=`        // Select mechanism on SmartDashboard "SysId Mechanism" chooser,
`,i+=`        // then use A/B/X/Y to run quasistatic/dynamic routines.
`,i+=ut(t)),i}function dt(e){return["A/B/X/Y buttons","D-Pad","Bumpers/Triggers","Back/Start"][e]||`Pool ${e}`}function ut(e){let n="";return n+=`
        // SysId mechanism selector
`,n+=`        sysIdChooser = new edu.wpi.first.wpilibj.smartdashboard.SendableChooser<>();
`,e.forEach((t,i)=>{n+=`        sysIdChooser.${i===0?"setDefaultOption":"addOption"}("${t.displayName}", "${t.varName}");
`}),n+=`        edu.wpi.first.wpilibj.smartdashboard.SmartDashboard.putData("SysId Mechanism", sysIdChooser);
`,n+=`
`,e.forEach(t=>{n+=`        controller.a().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.b().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,n+=`        controller.x().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.y().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}),n}function mt(e){return e>K.length?`    private final edu.wpi.first.wpilibj.smartdashboard.SendableChooser<String> sysIdChooser;
`:""}function pt(e){return`import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
`}const x={FULL:"full",ADD_MECHANISM:"add",LIBRARIES_ONLY:"libs"};function J(e,n,t=x.FULL){const i=Object.entries(e.mechanisms).filter(([,o])=>o.configured).map(([o])=>o);return{schemaVersion:"1.0",generatedAt:new Date().toISOString(),generatorVersion:"2.0",mode:t,projectName:n,framework:e.framework||"advantagekit",libraries:{gradleRIO:w.gradleRIO,advantagekit:w.vendordeps.advantagekit.version,phoenix6:w.vendordeps.phoenix6.version,revlib:w.vendordeps.revlib.version,pathplanner:w.vendordeps.pathplanner.version,photonlib:w.vendordeps.photonlib.version},chassis:e.chassis.configured?{type:e.chassis.type,driveMotor:e.chassis.driveMotor,gyro:e.chassis.gyro}:null,mechanisms:i,vision:e.vision.configured?e.vision.system:null,generatedFiles:[]}}function ft(e,n,t){const i=n.mechanisms[e];if(!i)return"";const o=e.charAt(0).toUpperCase()+e.slice(1);let a=`## ➕ Merge Instructions: Add ${o}

`;return a+=`The following code was generated for the **${o}** mechanism.
`,a+=`Since you already have an existing project, manually copy the relevant sections.

`,a+=`### 1. Files to Copy
`,a+=`Copy the entire \`src/main/java/frc/robot/subsystems/${e}/\` folder to your project.

`,a+=`### 2. RobotContainer.java
`,a+="```java\n",a+=`// Add to imports:
import frc.robot.subsystems.${e}.*;

`,a+=`// Add field:
private final ${o} ${e};

`,a+=`// Add to constructor:
`,t==="advantagekit"?a+=`${e} = new ${o}(Robot.isReal() ? new ${o}IOReal() : new ${o}IOSim());
`:a+=`${e} = new ${o}();
`,a+="```\n\n",a+=`### 3. Constants.java
`,a+="```java\n",a+=`// Add inside Constants class:
public static final class ${o}Constants {
`,i.motors&&i.motors.forEach((r,s)=>{const l=s===0?"MOTOR_ID":`FOLLOWER_${s}_ID`;a+=`    public static final int ${l} = ${r.canId};
`}),i.pid&&(a+=`    public static final double kP = ${i.pid.kP||0};
`,a+=`    public static final double kI = ${i.pid.kI||0};
`,a+=`    public static final double kD = ${i.pid.kD||0};
`,a+=`    public static final double kS = ${i.pid.kS||0};
`,a+=`    public static final double kV = ${i.pid.kV||0};
`),a+=`}
`,a+="```\n\n",a+=`> **@generated marker**: Add \`// @generated:${e}\` comments around any generated blocks
`,a+=`> so future regenerations can identify and update them automatically.

`,a}function G(e,n,t,i){return t.generatedFiles=i,e.file(`${n}/.robot-generator-manifest.json`,JSON.stringify(t,null,2)),t}async function vt(e,n="FRCRobotProject",t=x.FULL){const i=new tt,o=n,a=e.framework||"advantagekit",r=[];function s(c,u){i.file(c,u),r.push(c.replace(`${o}/`,""))}if(t===x.LIBRARIES_ONLY){s(`${o}/build.gradle`,me()),pe(i,o,e);const c=J(e,n,t);G(i,o,c,r);const u=await i.generateAsync({type:"blob"}),f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=`${n}-libraries.zip`,f.click();return}if(t===x.ADD_MECHANISM){const c=Object.entries(e.mechanisms).filter(([,E])=>E.configured),u=`${o}/src/main/java/frc/robot`;let f=`# Merge Instructions

Generated: ${new Date().toISOString()}

`;c.forEach(([E,h])=>{fe(i,u,E,h,e,a),f+=ft(E,e,a)}),s(`${o}/MERGE_INSTRUCTIONS.md`,f),s(`${o}/Constants-additions.java`,gt(e));const g=J(e,n,t);G(i,o,g,r);const I=await i.generateAsync({type:"blob"}),C=document.createElement("a");C.href=URL.createObjectURL(I),C.download=`${n}-add-mechanism.zip`,C.click();return}s(`${o}/build.gradle`,me()),s(`${o}/README.md`,kt(e,n)),s(`${o}/settings.gradle`,`pluginManagement {
  repositories {
    mavenLocal()
    gradlePluginPortal()
    maven { url "https://frcmaven.wpi.edu/artifactory/release" }
  }
}
`),pe(i,o,e);const l=`${o}/src/main/java/frc/robot`;s(`${l}/Main.java`,ht()),s(`${l}/Robot.java`,bt(a)),s(`${l}/Constants.java`,yt(e)),s(`${l}/RobotContainer.java`,It(e)),e.chassis.configured&&wt(i,l,e,a),Object.entries(e.mechanisms).forEach(([c,u])=>{u.configured&&fe(i,l,c,u,e,a)}),e.vision.configured&&$t(i,l,e),e.statemachine.configured&&St(i,l),e.stateMachineIntegration&&e.statemachine.configured&&Ct(i,l),e.chassis.configured&&e.chassis.pathplannerEnabled!==!1&&(Rt(i,o),e.chassis.type==="swerve"&&Dt(i,l)),i.file(`${o}/src/main/deploy/.gitkeep`,"");const p=J(e,n,x.FULL);G(i,o,p,r);const m=await i.generateAsync({type:"blob"}),d=document.createElement("a");d.href=URL.createObjectURL(m),d.download=`${n}.zip`,d.click()}function gt(e){let n=`// === ADD THESE TO YOUR EXISTING Constants.java ===

`;return Object.entries(e.mechanisms).forEach(([t,i])=>{if(!i.configured)return;const o=t.charAt(0).toUpperCase()+t.slice(1);n+=`    // @generated:${t}
`,n+=`    public static final class ${o}Constants {
`,(i.motors||[]).forEach((a,r)=>{const s=r===0?"MOTOR_ID":`FOLLOWER_${r}_ID`;n+=`        public static final int ${s} = ${a.canId};
`}),i.motorConfig&&(n+=`        public static final int CURRENT_LIMIT = ${i.motorConfig.currentLimit||40};
`,n+=`        public static final boolean BRAKE_MODE = ${i.motorConfig.brakeMode!==!1};
`),i.pid&&(n+=`        public static final double kP = ${i.pid.kP||0};
`,n+=`        public static final double kI = ${i.pid.kI||0};
`,n+=`        public static final double kD = ${i.pid.kD||0};
`,n+=`        public static final double kS = ${i.pid.kS||0};
`,n+=`        public static final double kV = ${i.pid.kV||0};
`,n+=`        public static final double kA = ${i.pid.kA||0};
`),n+=`    }
    // @end-generated:${t}

`}),n}function me(e){return`plugins {
    id "java"
    id "edu.wpi.first.GradleRIO" version "${w.gradleRIO}"
}
sourceCompatibility = JavaVersion.${w.javaVersion}
targetCompatibility = JavaVersion.${w.javaVersion}
def ROBOT_MAIN_CLASS = "frc.robot.Main"
deploy { targets { roborio(getTargetTypeClass('RoboRIO')) { team = project.frc.getTeamNumber(); directory = '/home/lvuser/deploy'; artifacts { frcJava(getArtifactTypeClass('FRCJavaArtifact')) { } } } } }
wpi.java.debugJni = false
wpi.java.configureExecutableTasks(jar)
repositories { mavenLocal(); maven { url "https://frcmaven.wpi.edu/artifactory/release" }; maven { url "https://maven.photonvision.org/repository/internal" }; maven { url "https://maven.ctr-electronics.com/release/" }; maven { url "https://maven.revrobotics.com/release/" }; }
dependencies {
    implementation wpi.java.deps.wpilib()
    implementation wpi.java.vendor.java()
    roborioDebug wpi.java.deps.wpilibJniDebug(wpi.platforms.roborio)
    roborioDebug wpi.java.vendor.jniDebug(wpi.platforms.roborio)
    nativeDesktop wpi.java.deps.wpilibJniRelease(wpi.platforms.desktop)
    nativeDesktop wpi.java.vendor.jniRelease(wpi.platforms.desktop)
    simulationDebug wpi.sim.enableDebug()
    simulationRelease wpi.sim.enableRelease()
}
`}function pe(e,n,t){const i=`${n}/vendordeps`,o=w;if(t.framework==="advantagekit"||!t.framework){const s=o.vendordeps.advantagekit;e.file(`${i}/${s.fileName}`,JSON.stringify({fileName:s.fileName,name:s.name,version:s.version,uuid:s.uuid,frcYear:o.frcYear,mavenUrls:s.mavenUrls,jsonUrl:"",javaDependencies:s.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}const a=new Set;if(t.chassis.configured){const s=$[t.chassis.driveMotor];if(s&&a.add(s.vendor),t.chassis.turnMotor){const l=$[t.chassis.turnMotor];l&&a.add(l.vendor)}if(t.chassis.gyro){const l=Y[t.chassis.gyro];l&&a.add(l.vendor)}}Object.values(t.mechanisms).forEach(s=>{s.configured&&(s.motors||[]).forEach(l=>{const p=$[l.type];p&&a.add(p.vendor)})}),t.vision.configured&&t.vision.system==="photonvision"&&a.add("photonvision");const r={ctre:o.vendordeps.phoenix6,rev:o.vendordeps.revlib,kauai:o.vendordeps.navx,photonvision:o.vendordeps.photonlib};if(a.forEach(s=>{const l=r[s];l&&e.file(`${i}/${l.fileName}`,JSON.stringify({fileName:l.fileName,name:l.name,version:l.version,frcYear:o.frcYear,mavenUrls:l.mavenUrls,jsonUrl:l.jsonUrl||"",javaDependencies:l.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}),t.chassis.configured&&t.chassis.pathplannerEnabled!==!1){const s=o.vendordeps.pathplanner;e.file(`${i}/${s.fileName}`,JSON.stringify({fileName:s.fileName,name:s.name,version:s.version,frcYear:o.frcYear,mavenUrls:s.mavenUrls,jsonUrl:s.jsonUrl,javaDependencies:s.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}}function ht(){return`package frc.robot;
import edu.wpi.first.wpilibj.RobotBase;
public final class Main {
    private Main() {}
    public static void main(String... args) { RobotBase.startRobot(Robot::new); }
}
`}function bt(e){if(e==="commandbase")return`package frc.robot;
import edu.wpi.first.wpilibj.TimedRobot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.CommandScheduler;

public class Robot extends TimedRobot {
    private Command autonomousCommand;
    private RobotContainer robotContainer;
    @Override public void robotInit() { robotContainer = new RobotContainer(); }
    @Override public void robotPeriodic() { CommandScheduler.getInstance().run(); }
    @Override public void autonomousInit() { autonomousCommand = robotContainer.getAutonomousCommand(); if (autonomousCommand != null) autonomousCommand.schedule(); }
    @Override public void teleopInit() { if (autonomousCommand != null) autonomousCommand.cancel(); }
    @Override public void testInit() { CommandScheduler.getInstance().cancelAll(); }
}
`;const n=w.advantagekitApi;return`package frc.robot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.CommandScheduler;
import ${n.robotBaseImport};
import ${n.loggerImport};

public class Robot extends ${n.robotBaseClass} {
    private Command autonomousCommand;
    private RobotContainer robotContainer;
    @Override public void robotInit() { ${n.logStart}; robotContainer = new RobotContainer(); }
    @Override public void robotPeriodic() { CommandScheduler.getInstance().run(); }
    @Override public void autonomousInit() { autonomousCommand = robotContainer.getAutonomousCommand(); if (autonomousCommand != null) autonomousCommand.schedule(); }
    @Override public void teleopInit() { if (autonomousCommand != null) autonomousCommand.cancel(); }
    @Override public void testInit() { CommandScheduler.getInstance().cancelAll(); }
}
`}function yt(e){const n={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};let t=`package frc.robot;

public final class Constants {
    private Constants() {}

`;if(e.chassis.configured){if(t+=`    public static final class DriveConstants {
`,t+=`        public static final String DRIVE_TYPE = "${e.chassis.type}";
`,t+=`        public static final double MAX_SPEED_MPS = ${e.chassis.maxSpeed||4.5};
`,t+=`        public static final double DRIVE_GEAR_RATIO = ${e.chassis.gearRatio||8.45};
`,e.chassis.turnGearRatio&&(t+=`        public static final double TURN_GEAR_RATIO = ${e.chassis.turnGearRatio};
`),t+=`        public static final double WHEEL_DIAMETER_M = ${e.chassis.wheelDiameter||.1524};
`,e.chassis.type==="swerve"){const i=e.chassis.canIds;["fl","fr","bl","br"].forEach(o=>{const a=o.toUpperCase();t+=`        public static final int ${a}_DRIVE_ID = ${i[o+"_drive"]};
`,t+=`        public static final int ${a}_TURN_ID = ${i[o+"_turn"]};
`,t+=`        public static final int ${a}_ENCODER_ID = ${i[o+"_encoder"]};
`})}else{const i=e.chassis.tankCanIds;t+=`        public static final int LEFT_LEADER_ID = ${i.left_leader};
`,t+=`        public static final int LEFT_FOLLOWER_ID = ${i.left_follower};
`,t+=`        public static final int RIGHT_LEADER_ID = ${i.right_leader};
`,t+=`        public static final int RIGHT_FOLLOWER_ID = ${i.right_follower};
`}if(t+=`        public static final int GYRO_ID = ${e.chassis.gyroCanId};
`,t+=`        public static final double TRACK_WIDTH_M = ${e.chassis.trackWidth||.546};
`,e.chassis.type==="swerve"){t+=`        public static final boolean USE_PHOENIX6_SWERVE = ${!!e.chassis.usePhoenix6Swerve};
`,t+=`        public static final String SWERVE_ENCODER_TYPE = "${e.chassis.swerveEncoderType||"cancoder"}";
`;const o=(e.chassis.trackWidth||.546)/2;t+=`        public static final edu.wpi.first.math.geometry.Translation2d[] MODULE_TRANSLATIONS = new edu.wpi.first.math.geometry.Translation2d[] {
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(${o}, ${o}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(${o}, -${o}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(-${o}, ${o}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(-${o}, -${o}),
`,t+=`        };
`}t+=`    }

`}return Object.entries(e.mechanisms).forEach(([i,o])=>{if(!o.configured)return;const a=i.charAt(0).toUpperCase()+i.slice(1);if(t+=`    public static final class ${a}Constants {
`,i==="arm")t+=`        public static final int DOF = ${o.dof};
`,o.joints.forEach((r,s)=>{t+=`        // Joint ${s+1}
`,(r.motors||[]).forEach((l,p)=>{const m=p===0?`JOINT_${s+1}_MOTOR_ID`:`JOINT_${s+1}_FOLLOWER_${p}_ID`;t+=`        public static final int ${m} = ${l.canId};
`,t+=`        public static final boolean JOINT_${s+1}_MOTOR_${p}_INVERTED = ${l.inverted};
`}),r.encoder&&(t+=`        public static final String JOINT_${s+1}_ENCODER_TYPE = "${r.encoder}";
`),t+=`        public static final int JOINT_${s+1}_ENCODER_ID = ${r.encoderId};
`,r.gearRatio&&(t+=`        public static final double JOINT_${s+1}_GEAR_RATIO = ${r.gearRatio};
`),t+=`        public static final int JOINT_${s+1}_CURRENT_LIMIT = ${r.motorConfig.currentLimit||40};
`,r.softLimitFwd&&(t+=`        public static final double JOINT_${s+1}_SOFT_LIMIT_FWD = ${r.softLimitFwd};
`),r.softLimitRev&&(t+=`        public static final double JOINT_${s+1}_SOFT_LIMIT_REV = ${r.softLimitRev};
`),t+=`        public static final double JOINT_${s+1}_kP = ${r.pid.kP||0};
`,t+=`        public static final double JOINT_${s+1}_kI = ${r.pid.kI||0};
`,t+=`        public static final double JOINT_${s+1}_kD = ${r.pid.kD||0};
`});else{(o.motors||[]).forEach((s,l)=>{const p=l===0?"MOTOR_ID":`FOLLOWER_${l}_ID`;t+=`        public static final int ${p} = ${s.canId};
`}),o.encoderId&&(t+=`        public static final int ENCODER_ID = ${o.encoderId};
`),o.gearRatio&&(t+=`        public static final double GEAR_RATIO = ${o.gearRatio};
`);const r=o.motorConfig||{};if(t+=`        public static final int CURRENT_LIMIT = ${r.currentLimit||40};
`,t+=`        public static final boolean BRAKE_MODE = ${r.brakeMode!==!1};
`,"rampRate"in o&&o.rampRate!=null&&(t+=`        public static final double RAMP_RATE_SECS = ${o.rampRate/1e3};
`),i==="elevator"&&(t+=`        public static final double MIN_HEIGHT_M = ${o.minHeight||0};
`,o.maxHeight&&(t+=`        public static final double MAX_HEIGHT_M = ${o.maxHeight};
`),o.softLimitFwd&&(t+=`        public static final double SOFT_LIMIT_FWD = ${o.softLimitFwd};
`),o.softLimitRev&&(t+=`        public static final double SOFT_LIMIT_REV = ${o.softLimitRev};
`),o.motionMaxVel&&(t+=`        public static final double MOTION_MAX_VEL = ${o.motionMaxVel};
`),o.motionMaxAccel&&(t+=`        public static final double MOTION_MAX_ACCEL = ${o.motionMaxAccel};
`)),i==="shooter"&&(t+=`        public static final String SHOOTER_TYPE = "${o.shooterType||"flywheel_only"}";
`,o.maxRPM&&(t+=`        public static final double MAX_RPM = ${o.maxRPM};
`),(o.shooterType==="adjustable"||o.shooterType==="adjustable_turret")&&o.pivotMotor&&(t+=`        public static final int PIVOT_MOTOR_ID = ${o.pivotMotor.canId};
`,t+=`        public static final boolean PIVOT_INVERTED = ${o.pivotMotor.inverted};
`),o.shooterType==="adjustable_turret"&&o.turretMotor&&(t+=`        public static final int TURRET_MOTOR_ID = ${o.turretMotor.canId};
`,t+=`        public static final boolean TURRET_INVERTED = ${o.turretMotor.inverted};
`)),i==="launcher"&&(t+=`        public static final String LAUNCHER_TYPE = "simple";
`,o.softLimitFwd&&(t+=`        public static final double SOFT_LIMIT_FWD = ${o.softLimitFwd};
`),o.softLimitRev&&(t+=`        public static final double SOFT_LIMIT_REV = ${o.softLimitRev};
`)),o.hasSensor&&(t+=`        public static final String SENSOR_PORT_TYPE = "${o.sensorPortType}";
`,t+=`        public static final int SENSOR_PORT = ${o.sensorPort};
`),o.pid){const s=o.pid;t+=`        public static final double kP = ${s.kP||0};
`,t+=`        public static final double kI = ${s.kI||0};
`,t+=`        public static final double kD = ${s.kD||0};
`,s.kS&&(t+=`        public static final double kS = ${s.kS};
`),s.kV&&(t+=`        public static final double kV = ${s.kV};
`),s.kA&&(t+=`        public static final double kA = ${s.kA};
`)}o.physics?.massKg&&(t+=`        /** Mass used in simulation physics model */
        public static final double SIM_MASS_KG = ${o.physics.massKg};
`),o.physics?.moiKgM2&&(t+=`        /** Moment of inertia used in simulation physics model */
        public static final double SIM_MOI_KG_M2 = ${o.physics.moiKgM2};
`)}t+=`    }

`}),e.vision.configured&&(t+=`    public static final class VisionConstants {
`,t+=`        public static final String SYSTEM = "${e.vision.system}";
`,e.vision.system==="limelight"&&(t+=`        public static final String LIMELIGHT_VERSION = "${n[e.vision.limelightVersion]||"Limelight"}";
`),t+=`        public static final int CAMERA_COUNT = ${e.vision.cameraCount};
`,e.vision.cameras.forEach((i,o)=>{t+=`        // Camera ${o}: ${i.name}
`,t+=`        public static final double CAM${o}_X = ${i.x}; // forward
`,t+=`        public static final double CAM${o}_Y = ${i.y}; // left
`,t+=`        public static final double CAM${o}_Z = ${i.z}; // up
`,t+=`        public static final double CAM${o}_ROLL = Math.toRadians(${i.roll});
`,t+=`        public static final double CAM${o}_PITCH = Math.toRadians(${i.pitch});
`,t+=`        public static final double CAM${o}_YAW = Math.toRadians(${i.yaw});
`}),t+=`    }

`),t+=`}
`,t}function It(e){const n=e.framework||"advantagekit";let t=`package frc.robot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,i="",o="",a="";const r=e.chassis.configured&&e.chassis.pathplannerEnabled!==!1&&e.chassis.type==="swerve";if(e.chassis.configured&&(t+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,r&&(t+=`import frc.robot.Autos;
`),i+=`    private final Drive drive;
`,n==="advantagekit"?o+=`        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());
`:o+=`        drive = new Drive();
`,a+=`        // Default drive: left stick = translate, right stick X = rotate
`,a+=`        drive.setDefaultCommand(DriveCommands.joystickDrive(drive,
`,a+=`            () -> -controller.getLeftY(),
`,a+=`            () -> -controller.getLeftX(),
`,a+=`            () -> -controller.getRightX()));

`),Object.entries(e.mechanisms).forEach(([c,u])=>{if(!u.configured)return;const f=c.charAt(0).toUpperCase()+c.slice(1);t+=`import frc.robot.subsystems.${c}.*;
`,i+=`    private final ${f} ${c};
`,n==="advantagekit"?o+=`        ${c} = new ${f}(Robot.isReal() ? new ${f}IOReal() : new ${f}IOSim());
`:o+=`        ${c} = new ${f}();
`,c==="intake"&&(a+=`        controller.rightBumper().whileTrue(Commands.runEnd(() -> ${c}.runVoltage(8), ${c}::stop, ${c}));
`),c==="shooter"&&(a+=`        controller.rightTrigger().whileTrue(Commands.runEnd(() -> ${c}.runVoltage(12), ${c}::stop, ${c}));
`),c==="elevator"&&(a+=`        controller.y().whileTrue(Commands.runEnd(() -> ${c}.runVoltage(6), ${c}::stop, ${c}));
`),c==="arm"&&(a+=`        controller.a().whileTrue(Commands.runEnd(() -> ${c}.runJointVoltage(0, 4), ${c}::stop, ${c}));
`),c==="launcher"&&(a+=`        controller.leftBumper().whileTrue(Commands.runEnd(() -> ${c}.runVoltage(10), ${c}::stop, ${c}));
`)}),e.vision.configured)if(t+=`import frc.robot.subsystems.vision.*;
`,i+=`    private final Vision vision;
`,n==="advantagekit"){const c=e.vision.system==="limelight"?"VisionIOLimelight":"VisionIOPhotonVision";o+=`        vision = new Vision(new ${c}());
`}else o+=`        vision = new Vision();
`;const s=Object.entries(e.mechanisms).filter(([c,u])=>u.configured&&c!=="arm").map(([c])=>({name:c,varName:c,displayName:c.charAt(0).toUpperCase()+c.slice(1)})),l=(e.chassis.configured?1:0)+s.length;a+=ct(s,e.chassis.configured),l>0&&(t+=pt()),i+=mt(l);const p=r?`        return Autos.getAuto(drive);
`:`        return Commands.print("No autonomous configured");
`,m=e.stateMachineIntegration&&e.statemachine.configured?`    private final StateMachineCoordinator stateMachineCoordinator;
`:"",d=e.stateMachineIntegration&&e.statemachine.configured?`        stateMachineCoordinator = new StateMachineCoordinator(this);
`:"";return e.stateMachineIntegration&&e.statemachine.configured&&(t+=`import frc.robot.commands.StateMachineCoordinator;
import frc.robot.statemachine.StateMachine;
`),`${t}
public class RobotContainer {
    private final CommandXboxController controller = new CommandXboxController(0);
${i}${m}
    public RobotContainer() {
${o}${d}        configureBindings();
    }

    private void configureBindings() {
${a}    }

    public Command getAutonomousCommand() {
${p}    }
}
`}function wt(e,n,t,i){const o=`${n}/subsystems/drive`;$[t.chassis.driveMotor];const a=t.chassis.type==="swerve",r=a&&t.chassis.usePhoenix6Swerve,s=t.chassis.pathplannerEnabled!==!1&&a;if(i==="advantagekit")if(a){e.file(`${o}/DriveIO.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import org.littletonrobotics.junction.AutoLog;

public interface DriveIO {
    @AutoLog class DriveIOInputs {
        public Pose2d pose = new Pose2d();
        public ChassisSpeeds speeds = new ChassisSpeeds();
        public double gyroYawRad = 0.0;
    }
    default void updateInputs(DriveIOInputs inputs) {}
    default void drive(ChassisSpeeds speeds) {}
    default void stop() {}
    default Pose2d getPose() { return new Pose2d(); }
    default Rotation2d getHeading() { return new Rotation2d(); }
}
`),e.file(`${o}/DriveIOReal.java`,rt(t.chassis)),e.file(`${o}/DriveIOSim.java`,lt());const l=s?`
        // PathPlanner AutoBuilder — holonomic swerve (${r?"Phoenix 6":"WPILib"} underneath)
        com.pathplanner.lib.auto.AutoBuilder.configure(
            this::getPose, this::resetPose, this::getChassisSpeeds, this::drive,
            new com.pathplanner.lib.controllers.PPHolonomicDriveController(
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0),
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0)),
            com.pathplanner.lib.util.HolonomicPathFollowerConfig.fromRobotConfig(
                new edu.wpi.first.wpilibj2.command.Subsystem[] { this }),
            () -> io.getHeading().getDegrees() < 0,
            this);
`:"";e.file(`${o}/Drive.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.DriveConstants;
import static edu.wpi.first.units.Units.*;

public class Drive extends SubsystemBase {
    private final DriveIO io;
    private final DriveIOInputsAutoLogged inputs = new DriveIOInputsAutoLogged();
    private final SysIdRoutine sysIdRoutine;

    public Drive(DriveIO io) {
        this.io = io;${l}
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.drive(new ChassisSpeeds(volts.in(Volts), 0, 0)),
                null,
                this));
    }
    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Drive", inputs); }
    public void drive(ChassisSpeeds speeds) { io.drive(speeds); }
    public void driveFieldRelative(double vx, double vy, double omega) {
        drive(ChassisSpeeds.fromFieldRelativeSpeeds(vx, vy, omega, io.getHeading()));
    }
    public void stop() { io.stop(); }
    public Pose2d getPose() { return io.getPose(); }
    public void resetPose(Pose2d pose) { /* TODO */ }
    public ChassisSpeeds getChassisSpeeds() { return inputs.speeds; }
    public Rotation2d getHeading() { return io.getHeading(); }

    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`),e.file(`${n}/commands/DriveCommands.java`,`package frc.robot.commands;
import edu.wpi.first.math.MathUtil;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import frc.robot.Constants.DriveConstants;
import frc.robot.subsystems.drive.Drive;
import java.util.function.DoubleSupplier;

public class DriveCommands {
    private static final double DEADBAND = 0.1;
    public static Command joystickDrive(Drive drive, DoubleSupplier xSupplier, DoubleSupplier ySupplier, DoubleSupplier omegaSupplier) {
        return Commands.run(() -> {
            double x = MathUtil.applyDeadband(xSupplier.getAsDouble(), DEADBAND);
            double y = MathUtil.applyDeadband(ySupplier.getAsDouble(), DEADBAND);
            double omega = MathUtil.applyDeadband(omegaSupplier.getAsDouble(), DEADBAND);
            double max = DriveConstants.MAX_SPEED_MPS;
            drive.driveFieldRelative(x * max, y * max, omega * Math.PI);
        }, drive).withName("JoystickDrive");
    }
}
`)}else{e.file(`${o}/DriveIO.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import org.littletonrobotics.junction.AutoLog;
public interface DriveIO {
    @AutoLog class DriveIOInputs {
        public double gyroYawRad = 0.0;
        public ChassisSpeeds speeds = new ChassisSpeeds();
    }
    default void updateInputs(DriveIOInputs inputs) {}
    default void drive(ChassisSpeeds speeds) {}
    default void stop() {}
    default Rotation2d getHeading() { return Rotation2d.kZero; }
}
`);const l=st(t.chassis);l&&e.file(`${o}/DriveIOReal.java`,l),e.file(`${o}/DriveIOSim.java`,at()),e.file(`${o}/Drive.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.math.geometry.Rotation2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.DriveConstants;
import static edu.wpi.first.units.Units.*;

public class Drive extends SubsystemBase {
    private final DriveIO io;
    private final DriveIOInputsAutoLogged inputs = new DriveIOInputsAutoLogged();
    private final SysIdRoutine sysIdRoutine;

    public Drive(DriveIO io) {
        this.io = io;
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.drive(new ChassisSpeeds(volts.in(Volts), 0, 0)),
                null,
                this));
    }
    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Drive", inputs); }
    public void drive(ChassisSpeeds speeds) { io.drive(speeds); }
    public void driveArcade(double fwd, double rot) {
        drive(new ChassisSpeeds(fwd * DriveConstants.MAX_SPEED_MPS, 0, rot * Math.PI));
    }
    public void stop() { io.stop(); }
    public Rotation2d getHeading() { return io.getHeading(); }

    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`),e.file(`${n}/commands/DriveCommands.java`,`package frc.robot.commands;
import edu.wpi.first.math.MathUtil;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import frc.robot.Constants.DriveConstants;
import frc.robot.subsystems.drive.Drive;
import java.util.function.DoubleSupplier;

public class DriveCommands {
    private static final double DEADBAND = 0.1;
    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {
        return Commands.run(() -> {
            double fwd = MathUtil.applyDeadband(-x.getAsDouble(), DEADBAND);
            double rot = MathUtil.applyDeadband(-omega.getAsDouble(), DEADBAND);
            drive.driveArcade(fwd, rot);
        }, drive).withName("JoystickDrive");
    }
}
`)}else a?e.file(`${o}/Drive.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.math.geometry.Pose2d;
import edu.wpi.first.math.kinematics.ChassisSpeeds;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.DriveConstants;
import static edu.wpi.first.units.Units.*;

public class Drive extends SubsystemBase {
    private final SysIdRoutine sysIdRoutine;

    public Drive() {
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> { /* Apply voltage */ },
                null,
                this));
    }
    public void driveFieldRelative(double vx, double vy, double omega) { /* TODO */ }
    public void stop() {}
    public Pose2d getPose() { return new Pose2d(); }
    public ChassisSpeeds getChassisSpeeds() { return new ChassisSpeeds(); }

    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`):e.file(`${o}/Drive.java`,`package frc.robot.subsystems.drive;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import static edu.wpi.first.units.Units.*;

public class Drive extends SubsystemBase {
    private final SysIdRoutine sysIdRoutine;

    public Drive() {
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> { /* Apply voltage */ },
                null,
                this));
    }
    public void drive(double fwd, double rot) { /* TODO */ }
    public void stop() {}

    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`),e.file(`${n}/commands/DriveCommands.java`,a?`package frc.robot.commands;
import edu.wpi.first.math.MathUtil;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import frc.robot.Constants.DriveConstants;
import frc.robot.subsystems.drive.Drive;
import java.util.function.DoubleSupplier;
public class DriveCommands {
    private static final double DEADBAND = 0.1;
    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {
        return Commands.run(() -> {
            double vx = MathUtil.applyDeadband(x.getAsDouble(), DEADBAND) * DriveConstants.MAX_SPEED_MPS;
            double vy = MathUtil.applyDeadband(y.getAsDouble(), DEADBAND) * DriveConstants.MAX_SPEED_MPS;
            double w = MathUtil.applyDeadband(omega.getAsDouble(), DEADBAND) * Math.PI;
            drive.driveFieldRelative(vx, vy, w);
        }, drive);
    }
}
`:`package frc.robot.commands;
import edu.wpi.first.math.MathUtil;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import frc.robot.subsystems.drive.Drive;
import java.util.function.DoubleSupplier;
public class DriveCommands {
    public static Command joystickDrive(Drive drive, DoubleSupplier x, DoubleSupplier y, DoubleSupplier omega) {
        return Commands.run(() -> drive.drive(x.getAsDouble(), omega.getAsDouble()), drive);
    }
}
`)}function fe(e,n,t,i,o,a){const r=t.charAt(0).toUpperCase()+t.slice(1),s=`${n}/subsystems/${t}`;if(t==="arm"){if(a==="advantagekit"){e.file(`${s}/ArmIO.java`,`package frc.robot.subsystems.arm;
import org.littletonrobotics.junction.AutoLog;
public interface ArmIO {
    @AutoLog class ArmIOInputs {
        public double[] positionRad = new double[3];
        public double[] velocityRadPerSec = new double[3];
        public double[] appliedVolts = new double[3];
        public double[] currentAmps = new double[3];
    }
    default void updateInputs(ArmIOInputs inputs) {}
    default void setJointVolts(int jointIndex, double volts) {}
    default void stop() {}
}
`);const d=de("arm",i,"Arm");d&&e.file(`${s}/ArmIOReal.java`,d),e.file(`${s}/ArmIOSim.java`,ue("arm",i,"Arm",i.attachedTo||"chassis")),e.file(`${s}/Arm.java`,`package frc.robot.subsystems.arm;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.ArmConstants;

public class Arm extends SubsystemBase {
    private final ArmIO io;
    private final ArmIOInputsAutoLogged inputs = new ArmIOInputsAutoLogged();

    public Arm(ArmIO io) {
        this.io = io;
    }

    @Override public void periodic() {
        io.updateInputs(inputs);
        Logger.processInputs("Arm", inputs);
    }

    public void runJointVoltage(int jointIdx, double volts) { io.setJointVolts(jointIdx, volts); }
    public double getJointPositionRad(int jointIdx) { return inputs.positionRad[jointIdx]; }
    public void stop() { io.stop(); }
}
`)}else{let d="";i.joints.forEach((c,u)=>{d+=`    // Joint ${u+1}: leader CAN ID ${c.motors[0].canId} | gear ratio ${c.gearRatio||"—"}
`}),e.file(`${s}/Arm.java`,`package frc.robot.subsystems.arm;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.ArmConstants;

public class Arm extends SubsystemBase {
${d}
    public Arm() {
        // TODO: Initialize motors
    }

    public void runJointVoltage(int jointIndex, double volts) {
        // TODO
    }

    public double getJointPositionRad(int jointIndex) {
        return 0.0;
    }

    public void stop() {
        // TODO
    }
}
`)}return}const l=i.motors||[];l[0];const p=i.motorConfig||{};let m=l.map((d,c)=>{const u=$[d.type];return`    // Motor ${c} (${d.role}): ${u?.name||"?"} CAN:${d.canId} inv:${d.inverted}`}).join(`
`);if(a==="advantagekit"){let d="",c="",u="";t==="shooter"&&((i.shooterType==="adjustable"||i.shooterType==="adjustable_turret")&&(d+=`        public double pivotPositionRad = 0.0;
        public double pivotVelocityRadPerSec = 0.0;
        public double pivotAppliedVolts = 0.0;
        public double[] pivotCurrentAmps = new double[]{0.0};
`,c+=`    default void setPivotVoltage(double volts) {}
    default void setPivotPosition(double positionRad) {}
`,u+=`    public void runPivotVoltage(double v) { io.setPivotVoltage(v); }
    public double getPivotPosition() { return inputs.pivotPositionRad; }
`),i.shooterType==="adjustable_turret"&&(d+=`        public double turretPositionRad = 0.0;
        public double turretVelocityRadPerSec = 0.0;
        public double turretAppliedVolts = 0.0;
        public double[] turretCurrentAmps = new double[]{0.0};
`,c+=`    default void setTurretVoltage(double volts) {}
    default void setTurretPosition(double positionRad) {}
`,u+=`    public void runTurretVoltage(double v) { io.setTurretVoltage(v); }
    public double getTurretPosition() { return inputs.turretPositionRad; }
`)),e.file(`${s}/${r}IO.java`,`package frc.robot.subsystems.${t};
import org.littletonrobotics.junction.AutoLog;
public interface ${r}IO {
    @AutoLog class ${r}IOInputs {
        public double positionRad = 0.0;
        public double velocityRadPerSec = 0.0;
        public double appliedVolts = 0.0;
        public double[] currentAmps = new double[]{0.0};
${t==="elevator"?`        public double heightMeters = 0.0;
`:""}${i.hasSensor?`        public boolean hasPiece = false;
`:""}${d}    }
    default void updateInputs(${r}IOInputs inputs) {}
    default void setVoltage(double volts) {}
    default void setPosition(double positionRad) {}
    default void stop() {}
    default void configurePID(double kP, double kI, double kD) {}
${c}}
`);const f=de(t,i,r);f&&e.file(`${s}/${r}IOReal.java`,f),e.file(`${s}/${r}IOSim.java`,ue(t,i,r,i.attachedTo||"chassis")),e.file(`${s}/${r}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.${r}Constants;
import static edu.wpi.first.units.Units.*;

public class ${r} extends SubsystemBase {
    private final ${r}IO io;
    private final ${r}IOInputsAutoLogged inputs = new ${r}IOInputsAutoLogged();
    private final SysIdRoutine sysIdRoutine;

    public ${r}(${r}IO io) {
        this.io = io;${i.pid?`
        io.configurePID(${r}Constants.kP, ${r}Constants.kI, ${r}Constants.kD);`:""}
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.setVoltage(volts.in(Volts)),
                null,
                this));
    }

    @Override public void periodic() {
        io.updateInputs(inputs);
        Logger.processInputs("${r}", inputs);
    }

    public void runVoltage(double v) { io.setVoltage(v); }
    public void stop() { io.stop(); }
${t==="elevator"?`    public double getHeight() { return inputs.heightMeters; }
`:""}${i.hasSensor?`    public boolean hasPiece() { return inputs.hasPiece; }
`:""}${u}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`)}else{let d="";t==="shooter"&&((i.shooterType==="adjustable"||i.shooterType==="adjustable_turret")&&(d+=`    public void runPivotVoltage(double v) { /* TODO */ }
    public double getPivotPosition() { return 0.0; /* TODO */ }
`),i.shooterType==="adjustable_turret"&&(d+=`    public void runTurretVoltage(double v) { /* TODO */ }
    public double getTurretPosition() { return 0.0; /* TODO */ }
`)),e.file(`${s}/${r}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.${r}Constants;
import static edu.wpi.first.units.Units.*;

public class ${r} extends SubsystemBase {
${m}
    // Current Limit: ${p.currentLimit}A | Brake: ${p.brakeMode}
    private final SysIdRoutine sysIdRoutine;

    public ${r}() {
        // TODO: Init motor controllers
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> runVoltage(volts.in(Volts)),
                null,
                this));
    }

    @Override public void periodic() {
        // TODO: Update telemetry
    }

    public void runVoltage(double v) { /* TODO */ }
    public void stop() { runVoltage(0); }
${t==="elevator"?`    public double getHeight() { return 0; /* TODO */ }
`:""}${i.hasSensor?`    public boolean hasPiece() { return false; /* TODO */ }
`:""}${d}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`)}}function $t(e,n,t,i){const o=`${n}/subsystems/vision`,a=t.vision.system==="limelight",r={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};if(e.file(`${o}/VisionIO.java`,`package frc.robot.subsystems.vision;
import edu.wpi.first.math.geometry.Pose2d;
import org.littletonrobotics.junction.AutoLog;
public interface VisionIO {
    @AutoLog class VisionIOInputs {
        public boolean hasTarget = false;
        public Pose2d estimatedPose = new Pose2d();
        public double timestampSeconds = 0.0;
        public int tagCount = 0;
    }
    default void updateInputs(VisionIOInputs inputs) {}
}
`),a){let s="";t.vision.cameras.forEach((l,p)=>{s+=`        // ${l.name}: Translation(${l.x}, ${l.y}, ${l.z}) Rotation(${l.roll}°, ${l.pitch}°, ${l.yaw}°)
`}),e.file(`${o}/VisionIOLimelight.java`,`package frc.robot.subsystems.vision;
import frc.robot.Constants.VisionConstants;
public class VisionIOLimelight implements VisionIO {
    // Limelight version: ${r[t.vision.limelightVersion]||"Limelight"}
${s}    public VisionIOLimelight() { /* Init cameras */ }
    @Override public void updateInputs(VisionIOInputs inputs) { /* LimelightHelpers */ }
}
`)}else{let s="";t.vision.cameras.forEach((l,p)=>{s+=`        // ${l.name}: new Transform3d(${l.x},${l.y},${l.z}, new Rotation3d(${l.roll}°,${l.pitch}°,${l.yaw}°))
`}),e.file(`${o}/VisionIOPhotonVision.java`,`package frc.robot.subsystems.vision;
import org.photonvision.PhotonCamera;
import frc.robot.Constants.VisionConstants;
public class VisionIOPhotonVision implements VisionIO {
    // Platform: ${t.vision.photonPlatform}
${s}    private final PhotonCamera[] cameras;
    public VisionIOPhotonVision() {
        cameras = new PhotonCamera[VisionConstants.CAMERA_COUNT];
        for (int i = 0; i < cameras.length; i++) cameras[i] = new PhotonCamera("camera_" + i);
    }
    @Override public void updateInputs(VisionIOInputs inputs) { /* PhotonPoseEstimator */ }
}
`)}e.file(`${o}/Vision.java`,`package frc.robot.subsystems.vision;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
public class Vision extends SubsystemBase {
    private final VisionIO io;
    private final VisionIOInputsAutoLogged inputs = new VisionIOInputsAutoLogged();
    public Vision(VisionIO io) { this.io = io; }
    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Vision", inputs); }
    public boolean hasTarget() { return inputs.hasTarget; }
}
`)}function St(e,n,t){e.file(`${n}/statemachine/StateMachine.java`,`package frc.robot.statemachine;
import java.util.*;
public class StateMachine {
    private String currentState;
    private final Map<String, List<Transition>> transitions = new HashMap<>();
    private final Map<String, Runnable> stateActions = new HashMap<>();
    public StateMachine(String init) { this.currentState = init; }
    public void addTransition(String from, String to, String trigger) { transitions.computeIfAbsent(from, k -> new ArrayList<>()).add(new Transition(to, trigger)); }
    public void setStateAction(String state, Runnable action) { stateActions.put(state, action); }
    public void trigger(String event) { for (var t : transitions.getOrDefault(currentState, List.of())) { if (t.trigger.equals(event)) { currentState = t.target; var a = stateActions.get(currentState); if (a != null) a.run(); return; } } }
    public String getCurrentState() { return currentState; }
    private record Transition(String target, String trigger) {}
}
`)}function Ct(e,n,t,i){e.file(`${n}/commands/StateMachineCoordinator.java`,`package frc.robot.commands;
import frc.robot.RobotContainer;
import frc.robot.statemachine.StateMachine;

/** Wires state-machine triggers to subsystem command factories. */
public class StateMachineCoordinator {
    private final StateMachine stateMachine;

    public StateMachineCoordinator(RobotContainer container) {
        stateMachine = new StateMachine("idle");
        // TODO: Parse statemachine JSON and register transitions + command bindings
    }

    public void onTrigger(String event) { stateMachine.trigger(event); }
    public String getState() { return stateMachine.getCurrentState(); }
}
`)}function Rt(e,n,t){const i=`${n}/src/main/deploy/pathplanner`;e.file(`${i}/paths/.gitkeep`,""),e.file(`${i}/autos/.gitkeep`,""),e.file(`${i}/paths/Example Path.path`,JSON.stringify({version:w.pathplannerFormat,waypoints:[{anchor:{x:1.5,y:5.5},prevWaypoint:null,nextWaypoint:{x:2,y:5.5}},{anchor:{x:3,y:5.5},prevWaypoint:{x:2.5,y:5.5},nextWaypoint:null}],constraints:[],goalEndState:{velocity:0,rotation:0}},null,2)),e.file(`${i}/autos/Example Auto.auto`,JSON.stringify({version:w.pathplannerFormat,name:"Example Auto",folder:"autos",choreoAuto:!1,pathplannerAuto:!0,commands:[{type:"path",pathName:"Example Path"}]},null,2)),e.file(`${i}/settings.json`,JSON.stringify({robotWidth:.9,robotLength:.9,holonomicMode:!0},null,2))}function Dt(e,n,t){e.file(`${n}/Autos.java`,`package frc.robot;
import com.pathplanner.lib.auto.AutoBuilder;
import com.pathplanner.lib.auto.NamedCommands;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj.smartdashboard.SendableChooser;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
import frc.robot.subsystems.drive.Drive;

/** PathPlanner auto factory — requires AutoBuilder.configure() in Drive subsystem. */
public final class Autos {
    private static SendableChooser<Command> autoChooser;

    private Autos() {}

    public static void registerNamedCommands() {
        // NamedCommands.registerCommand("Example", Commands.print("Named command"));
    }

    public static Command getAuto(Drive drive) {
        registerNamedCommands();
        if (autoChooser == null) {
            autoChooser = AutoBuilder.buildAutoChooser();
            SmartDashboard.putData("Auto Chooser", autoChooser);
        }
        Command auto = autoChooser.getSelected();
        return auto != null ? auto : edu.wpi.first.wpilibj2.command.Commands.print("No auto selected");
    }
}
`)}function kt(e,n){const t={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"},i=e.vision.system==="limelight"?t[e.vision.limelightVersion]||"Limelight":e.vision.photonPlatform||"PhotonVision";return`# FRC Robot Project: ${n}

This deployable FRC codebase was automatically generated using the FRC Robot Code Generator.

## 🛠️ Architecture Overview
- **Code Architecture**: ${e.framework==="advantagekit"?"AdvantageKit-based (Telemetry-focused multi-IO layer)":"WPILib command-based template"}
- **Chassis**: ${e.chassis.configured?`${e.chassis.type.toUpperCase()} drive (${e.chassis.tankCanIds?"Tank":"Swerve"})`:"None"}
- **Vision**: ${e.vision.configured?`${e.vision.system} supporting ${i}`:"None"}

---

## 📈 SysId Characterization & PID/FF Tuning Tutorial

During the configuration stage, you might have left PID and feedforward constants at their default/empty values. **This is completely normal!** You should adjust these values after constructing and characterizing your physical robot.

### 1. What is SysId?
SysId is the official WPILib system identification tool used to calculate optimal feedforward (kS, kV, kA) and feedback (kP, kI, kD) gains for your robot's mechanisms.

### 2. How to Run SysId on this Codebase
Every mechanism subsystem comes pre-equipped with SysId routines, and **all button bindings are automatically generated** in \`RobotContainer.java\`.

You do NOT need to manually wire any buttons. The generated bindings are:
- **Drive**: A/B/X/Y buttons for quasistatic/dynamic forward/reverse
- **Additional mechanisms**: D-Pad, Bumpers/Triggers, or dashboard chooser

To run characterization:
1. Deploy the generated project to your RoboRIO or run in simulation.
2. The SysId bindings are already wired — just press the corresponding buttons.
3. Open the **SysId desktop application** from WPILib.
4. Record telemetry data, then analyze logs for feedforward/feedback constants.

### 3. Where to Update PID/FF Values in Code
Once you have obtained the values, open the following file:
📍 **\`src/main/java/frc/robot/Constants.java\`**

Locate the corresponding Constants class for your mechanism:
- For Drive: \`DriveConstants\`
- For Elevator: \`ElevatorConstants\`
- For Shooter: \`ShooterConstants\`
- For Arm: \`ArmConstants\`
- For Launcher: \`LauncherConstants\`

Update the constants like \`kP\`, \`kI\`, \`kD\`, \`kS\`, \`kV\`, and \`kA\` directly inside those classes.

For complete step-by-step guides, refer to the official **WPILib SysId documentation**:
🔗 https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/index.html
`}function Se(e){const n=[],t=[],i=s=>Number.isFinite(Number(s)),o=s=>i(s)&&Number(s)>=0;e.chassis.configured?(e.chassis.driveMotor||n.push({section:"Chassis",msg:"Select a drive motor"}),e.chassis.gyro||n.push({section:"Chassis",msg:"Select a gyro"}),e.chassis.type==="swerve"&&!e.chassis.turnMotor&&n.push({section:"Chassis",msg:"Select a turn motor for swerve"}),e.chassis.gearRatio||t.push({section:"Chassis",msg:"Gear ratio not set — defaults to 1.0"}),e.chassis.gearRatio!==null&&e.chassis.gearRatio!==void 0&&Number(e.chassis.gearRatio)<=0&&n.push({section:"Chassis",msg:"Drive gear ratio must be greater than 0"})):n.push({section:"Chassis",msg:"Drivetrain must be configured"});const a=new Map;function r(s,l){if(l==null||l==="")return;const p=Number(l);if(!Number.isInteger(p)||p<0||p>62){n.push({section:"CAN IDs",msg:`${s}: CAN ID must be an integer from 0 to 62`});return}a.has(p)?n.push({section:"CAN IDs",msg:`Conflict: ID ${p} used by "${a.get(p)}" and "${s}"`}):a.set(p,s)}if(e.chassis.configured){if(e.chassis.type==="swerve"&&e.chassis.canIds){const s=e.chassis.canIds;["fl","fr","bl","br"].forEach(l=>{const p=l.toUpperCase();r(`${p} Drive`,s[l+"_drive"]),r(`${p} Turn`,s[l+"_turn"]),r(`${p} Encoder`,s[l+"_encoder"])})}r("Gyro",e.chassis.gyroCanId)}return Object.entries(e.mechanisms).forEach(([s,l])=>{if(!l.enabled||!l.configured)return;const p=s.charAt(0).toUpperCase()+s.slice(1);if(s==="arm"){l.joints.forEach((m,d)=>{m.motors.forEach((c,u)=>{r(`Arm Joint ${d+1} Motor ${u}`,c.canId)}),m.encoderId&&r(`Arm Joint ${d+1} Encoder`,m.encoderId),(!m.motors?.length||!m.motors[0]?.type)&&t.push({section:`Arm Joint ${d+1}`,msg:"No motor selected"})});return}(l.motors||[]).forEach((m,d)=>{r(`${p} Motor ${d}`,m.canId)}),l.encoderId&&r(`${p} Encoder`,l.encoderId),(!l.motors?.length||!l.motors[0]?.type)&&t.push({section:p,msg:"No motor selected"}),l.gearRatio!==null&&l.gearRatio!==void 0&&Number(l.gearRatio)<=0&&n.push({section:p,msg:"Gear ratio must be greater than 0"}),l.pid&&[["kP",l.pid.kP],["kI",l.pid.kI],["kD",l.pid.kD],["kS",l.pid.kS],["kV",l.pid.kV],["kA",l.pid.kA]].forEach(([d,c])=>{c!=null&&c!==""&&!o(c)&&n.push({section:p,msg:`${d} must be a finite non-negative number`})})}),e.vision.enabled&&e.vision.configured&&(e.vision.system||n.push({section:"Vision",msg:"Select Limelight or PhotonVision"}),e.vision.cameraCount<1&&t.push({section:"Vision",msg:"No cameras configured"})),{errors:n,warnings:t,isValid:n.length===0}}function H(e){const n=document.getElementById("summary-body");if(!n)return;const{errors:t,warnings:i}=Se(e);let o="";o+=`<div class="summary-tabs">
        <button class="summary-tab active" data-tab="review">REVIEW</button>
        <button class="summary-tab" data-tab="preview">CODE PREVIEW</button>
    </div>`,o+='<div class="summary-tab-content active" id="tab-review">',t.length>0&&(o+=`<div class="summary-alert summary-alert-error">
            <strong>⚠ ${t.length} Error${t.length>1?"s":""}</strong>
            ${t.map(m=>`<div class="alert-item">• <strong>${m.section}:</strong> ${m.msg}</div>`).join("")}
        </div>`),i.length>0&&(o+=`<div class="summary-alert summary-alert-warn">
            <strong>⚡ ${i.length} Warning${i.length>1?"s":""}</strong>
            ${i.map(m=>`<div class="alert-item">• <strong>${m.section}:</strong> ${m.msg}</div>`).join("")}
        </div>`),t.length===0&&i.length===0&&(o+='<div class="summary-alert summary-alert-ok"><strong>✓ All checks passed</strong></div>');const a=e.framework==="commandbase"?"Command-Based Template":"AdvantageKit-based Architecture (IO + replay)";if(o+=`<div class="summary-section">
        <div class="summary-section-title">CODE ARCHITECTURE</div>
        <div class="summary-grid">
            <div class="summary-item"><span class="summary-key">Pattern</span><span class="summary-val">${a}</span></div>
            <div class="summary-item"><span class="summary-key">StateMachine</span><span class="summary-val">${e.stateMachineIntegration?"State-driven commands":"Standard commands"}</span></div>
        </div>
    </div>`,e.chassis.configured){const m=he[e.chassis.type],d=$[e.chassis.driveMotor],c=Y[e.chassis.gyro];if(o+=`<div class="summary-section">
            <div class="summary-section-title">DRIVETRAIN</div>
            <div class="summary-grid">
                <div class="summary-item"><span class="summary-key">Type</span><span class="summary-val">${m?.name||e.chassis.type}</span></div>
                <div class="summary-item"><span class="summary-key">Drive Motor</span><span class="summary-val">${d?.name||"—"}</span></div>
                ${e.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Turn Motor</span><span class="summary-val">${$[e.chassis.turnMotor]?.name||"—"}</span></div>`:""}
                <div class="summary-item"><span class="summary-key">Gyro</span><span class="summary-val">${c?.name||"—"} (ID: ${e.chassis.gyroCanId})</span></div>
                <div class="summary-item"><span class="summary-key">Gear Ratio</span><span class="summary-val">${e.chassis.gearRatio||"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Wheel ⌀</span><span class="summary-val">${e.chassis.wheelDiameter?e.chassis.wheelDiameter+"m":"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Max Speed</span><span class="summary-val">${e.chassis.maxSpeed?e.chassis.maxSpeed+" m/s":"—"}</span></div>
                ${e.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Drive Stack</span><span class="summary-val">${e.chassis.usePhoenix6Swerve?"Phoenix 6 SwerveDrivetrain":"WPILib swerve"}</span></div>`:""}
            </div>`,e.chassis.type==="swerve"&&e.chassis.canIds){const u=e.chassis.canIds;o+=`<div class="summary-sub-title">CAN IDs</div><div class="summary-can-grid">
                ${["fl","fr","bl","br"].map(f=>`<div class="summary-can-mod"><strong>${f.toUpperCase()}</strong> D:${u[f+"_drive"]} T:${u[f+"_turn"]} E:${u[f+"_encoder"]}</div>`).join("")}
            </div>`}o+="</div>"}else o+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ DRIVETRAIN</div><p>Not configured</p></div>';Object.entries(e.mechanisms).forEach(([m,d])=>{if(!d.enabled)return;let c="";if(m==="arm")if(d.configured){let u="";d.joints.forEach((f,g)=>{const I=f.motors.map(C=>{const E=$[C.type];return`${C.role}: ${E?.name||"—"} (CAN ${C.canId})${C.inverted?" inv":""}`}).join("<br>");u+=`<div style="margin-top: 8px;">
                        <strong>Joint ${g+1}:</strong><br>
                        - Motors: ${I}<br>
                        - Gear Ratio: ${f.gearRatio||"—"}<br>
                        - Encoder: ${f.encoder||"Integrated"} (ID: ${f.encoderId})<br>
                        - PID: kP=${f.pid.kP}, kI=${f.pid.kI}, kD=${f.pid.kD}
                    </div>`}),c=`<div class="summary-grid" style="display:block">
                    <div class="summary-item summary-item-wide"><span class="summary-key">DoF</span><span class="summary-val">${d.dof}</span></div>
                    <div style="font-size:0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 8px 12px; background: rgba(255,255,255,0.02); border-radius: 4px; margin-top: 8px;">
                        ${u}
                    </div>
                    <div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${d.attachedTo||"chassis"}</span></div>
                </div>`}else c='<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>';else{const f=(d.motors||[]).map(g=>{const I=$[g.type];return`${g.role}: ${I?.name||"—"} (CAN ${g.canId})${g.inverted?" inv":""}`}).join("<br>");c=d.configured?`<div class="summary-grid">
                <div class="summary-item summary-item-wide"><span class="summary-key">Motors</span><span class="summary-val">${f}</span></div>
                ${d.gearRatio?`<div class="summary-item"><span class="summary-key">Ratio</span><span class="summary-val">${d.gearRatio}</span></div>`:""}
                ${m==="elevator"?`<div class="summary-item"><span class="summary-key">Height</span><span class="summary-val">${d.minHeight||0}–${d.maxHeight||"?"} m</span></div>`:""}
                ${m==="shooter"&&d.maxRPM?`<div class="summary-item"><span class="summary-key">Max RPM</span><span class="summary-val">${d.maxRPM}</span></div>`:""}
                ${d.hasSensor?`<div class="summary-item"><span class="summary-key">Sensor</span><span class="summary-val">${(d.sensorPortType||"dio").toUpperCase()} port ${d.sensorPort}</span></div>`:""}
                ${e.attachmentRules?.[m]?`<div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${d.attachedTo||"chassis"}</span></div>`:""}
            </div>`:'<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>'}o+=`<div class="summary-section ${d.configured?"":"summary-missing"}">
            <div class="summary-section-title">${m.toUpperCase()} ${d.configured?"":"— Not configured"}</div>
            ${c}
        </div>`}),e.vision.enabled&&(e.vision.configured?(o+=`<div class="summary-section">
                <div class="summary-section-title">VISION</div>
                <div class="summary-grid">
                    <div class="summary-item"><span class="summary-key">System</span><span class="summary-val">${e.vision.system==="limelight"?be[e.vision.limelightVersion]?.name||"Limelight":"PhotonVision"}</span></div>
                    ${e.vision.system==="photonvision"?`<div class="summary-item"><span class="summary-key">Platform</span><span class="summary-val">${e.vision.photonPlatform}</span></div>`:""}
                    <div class="summary-item"><span class="summary-key">Cameras</span><span class="summary-val">${e.vision.cameraCount}</span></div>
                </div>`,(e.vision.cameras||[]).forEach((m,d)=>{o+=`<div class="summary-cam"><strong>${m.name}</strong> — T(${m.x}, ${m.y}, ${m.z})m  R(${m.roll}°, ${m.pitch}°, ${m.yaw}°)</div>`}),o+="</div>"):o+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ VISION — Not configured</div></div>'),e.statemachine.enabled&&(o+=`<div class="summary-section"><div class="summary-section-title">STATE MACHINE</div><p style="color:var(--text-secondary);font-size:0.8rem">${e.statemachine.configured?"✓ JSON attached":"⚠ Enabled but no JSON — will generate skeleton"}</p></div>`);let r=4;e.chassis.configured&&(r+=5),e.chassis.configured&&e.chassis.pathplannerEnabled!==!1&&e.chassis.type==="swerve"&&(r+=1),e.stateMachineIntegration&&e.statemachine.configured&&(r+=1),Object.values(e.mechanisms).forEach(m=>{m.configured&&(r+=4)}),e.vision.configured&&(r+=4),e.statemachine.configured&&(r+=1),o+=`<div class="summary-section" style="text-align:center;opacity:0.6;font-size:0.75rem">
        <strong>${r} Java files</strong> will be generated
    </div>`,o+=`<div class="summary-section" style="background: rgba(0,255,255,0.05); border: 1px solid rgba(0,255,255,0.2);">
        <div class="summary-section-title" style="color: var(--accent-cyan)">ℹ️ PID & FEEDFORWARD TUNING</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
            Don't worry if you left the PID/FF values at 0! The generated code includes full <strong>SysId Integration</strong>.
            You can use the SysId tool to characterize your robot and find the optimal values.<br><br>
            <strong>How to update later:</strong> You can directly modify the constants in <code>Constants.java</code> (e.g. <code>ShooterConstants.kP</code>).
            <br><br>
            <a href="javascript:void(0)" onclick="document.getElementById('nav-sysid').click()" style="color: var(--accent-cyan); text-decoration: underline;">Click here to view the SysId Guide</a>.
        </p>
    </div>`,o+=`<div class="summary-section" style="background: rgba(213,0,28,0.06); border: 1px solid rgba(213,0,28,0.25);">
        <div class="summary-section-title" style="color: var(--accent-red)">⚙️ GENERATION MODE</div>
        <div style="display:flex;flex-direction:column;gap:10px;padding:4px 0;">
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="full" checked style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Full Project</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate the complete project from scratch. Use for first-time generation.</div>
                </div>
            </label>
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="add" style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Add Mechanism</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate only new mechanism subsystem files + merge instructions. Use when adding to an existing project.</div>
                </div>
            </label>
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
                <input type="radio" name="gen-mode" value="libs" style="margin-top:3px;accent-color:var(--accent-red);">
                <div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--text-primary)">Update Libraries Only</div>
                    <div style="font-size:0.75rem;color:var(--text-secondary)">Generate only build.gradle + vendordeps. Use to update library versions.</div>
                </div>
            </label>
        </div>
    </div>`,o+=`<details class="summary-code-preview">
        <summary>Generated Code Preview (Constants.java)</summary>
        <pre class="preview-code summary-collapsible-preview"><code id="summary-collapsible-preview-content"></code></pre>
    </details>`,o+="</div>",o+=`<div class="summary-tab-content" id="tab-preview">
        <div class="preview-file-list">
            <div class="preview-file active" data-file="Constants">Constants.java</div>
            <div class="preview-file" data-file="RobotContainer">RobotContainer.java</div>
            <div class="preview-file" data-file="Robot">Robot.java</div>
        </div>
        <pre class="preview-code" id="preview-code"><code id="preview-code-content">Click a file to preview</code></pre>
    </div>`,n.innerHTML=o,n.querySelectorAll(".summary-tab").forEach(m=>{m.addEventListener("click",()=>{n.querySelectorAll(".summary-tab").forEach(d=>d.classList.remove("active")),n.querySelectorAll(".summary-tab-content").forEach(d=>d.classList.remove("active")),m.classList.add("active"),n.querySelector(`#tab-${m.dataset.tab}`)?.classList.add("active")})}),n.querySelectorAll(".preview-file").forEach(m=>{m.addEventListener("click",()=>{n.querySelectorAll(".preview-file").forEach(c=>c.classList.remove("active")),m.classList.add("active");const d=n.querySelector("#preview-code-content");d.textContent=q(e,m.dataset.file)})});const s=n.querySelector("#preview-code-content");s&&(s.textContent=q(e,"Constants"));const l=n.querySelector("#summary-collapsible-preview-content");l&&(l.textContent=q(e,"Constants"));const p=document.getElementById("summary-confirm");p&&t.length>0?(p.disabled=!0,p.title="Fix errors before generating"):p&&(p.disabled=!1,p.title="")}function q(e,n){return n==="Constants"?Et(e):n==="RobotContainer"?Mt(e):n==="Robot"?Ot():""}function Et(e){let n=`package frc.robot;

public final class Constants {
    private Constants() {}

`;return e.chassis.configured&&(n+=`    public static final class DriveConstants {
`,n+=`        public static final String DRIVE_TYPE = "${e.chassis.type}";
`,e.chassis.maxSpeed&&(n+=`        public static final double MAX_SPEED_MPS = ${e.chassis.maxSpeed};
`),e.chassis.gearRatio&&(n+=`        public static final double DRIVE_GEAR_RATIO = ${e.chassis.gearRatio};
`),e.chassis.type==="swerve"&&e.chassis.canIds&&["fl","fr","bl","br"].forEach(t=>{const i=t.toUpperCase();n+=`        public static final int ${i}_DRIVE_ID = ${e.chassis.canIds[t+"_drive"]};
`,n+=`        public static final int ${i}_TURN_ID = ${e.chassis.canIds[t+"_turn"]};
`,n+=`        public static final int ${i}_ENCODER_ID = ${e.chassis.canIds[t+"_encoder"]};
`}),n+=`        public static final int GYRO_ID = ${e.chassis.gyroCanId};
`,n+=`    }

`),Object.entries(e.mechanisms).forEach(([t,i])=>{if(!i.configured)return;const o=t.charAt(0).toUpperCase()+t.slice(1);n+=`    public static final class ${o}Constants {
`,(i.motors||[]).forEach((a,r)=>{const s=r===0?"MOTOR_ID":`FOLLOWER_${r}_ID`;n+=`        public static final int ${s} = ${a.canId};
`}),i.pid&&(n+=`        public static final double kP = ${i.pid.kP||0};
        public static final double kI = ${i.pid.kI||0};
        public static final double kD = ${i.pid.kD||0};
`),n+=`    }

`}),n+=`}
`,n}function Mt(e){let n=`package frc.robot;
import edu.wpi.first.wpilibj2.command.*;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,t="",i="";return e.chassis.configured&&(n+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,t+=`    private final Drive drive;
`,i+=`        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());
`),Object.entries(e.mechanisms).forEach(([o,a])=>{if(!a.configured)return;const r=o.charAt(0).toUpperCase()+o.slice(1);n+=`import frc.robot.subsystems.${o}.*;
`,t+=`    private final ${r} ${o};
`,i+=`        ${o} = new ${r}(Robot.isReal() ? new ${r}IOReal() : new ${r}IOSim());
`}),`${n}
public class RobotContainer {
    private final CommandXboxController controller = new CommandXboxController(0);
${t}
    public RobotContainer() {
${i}        configureBindings();
    }

    private void configureBindings() {
        // TODO: Add button bindings
    }

    public Command getAutonomousCommand() {
        return Commands.print("No autonomous configured");
    }
}
`}function Ot(){return`package frc.robot;

import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.CommandScheduler;
import org.littletonrobotics.junction.LoggedRobot;
import org.littletonrobotics.junction.Logger;

public class Robot extends LoggedRobot {
    private Command autonomousCommand;
    private RobotContainer robotContainer;

    @Override
    public void robotInit() {
        Logger.start();
        robotContainer = new RobotContainer();
    }

    @Override
    public void robotPeriodic() {
        CommandScheduler.getInstance().run();
    }

    @Override
    public void autonomousInit() {
        autonomousCommand = robotContainer.getAutonomousCommand();
        if (autonomousCommand != null) autonomousCommand.schedule();
    }

    @Override
    public void teleopInit() {
        if (autonomousCommand != null) autonomousCommand.cancel();
    }

    @Override
    public void testInit() {
        CommandScheduler.getInstance().cancelAll();
    }
}
`}const Z="robotConfig";let P,O=null;async function Tt(){return O||(O=await Pe(()=>import("./viewport3d-BFWckKoi.js"),__vite__mapDeps([0,1])),O)}function S(e){return!O||typeof O[e]!="function"?()=>{}:O[e]}document.addEventListener("DOMContentLoaded",()=>{const e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||window.innerWidth<768;v.state.isMobile=e,e&&document.body.classList.add("is-mobile"),Bt(),P=Qe(),P.start(),Pt(),At(),Lt(),_t(),xt(),Vt(),Ce(v.getState()),v.subscribe(n=>{Nt(n),Re(),De(n),ke(n)}),document.addEventListener("visibilitychange",()=>{if(document.hidden){P?.stop(),S("setRenderPaused")(!0);return}v.getState().currentPage==="landing"&&P?.start(),S("setRenderPaused")(!1)}),document.addEventListener("rcg:update-shooter-model",n=>{const t=n.detail?.type;t&&S("updateShooterModel")(t)})});function At(){const e=document.getElementById("landing-page");e&&(e.scrollTo({top:0,left:0,behavior:"auto"}),setTimeout(()=>{e.scrollTo({top:0,left:0,behavior:"auto"})},100));const n=t=>{const i=document.querySelector(t);!i||!e||(i.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),setTimeout(()=>{const o=Math.max(0,i.offsetTop-60);e.scrollTo({top:o,left:0,behavior:"smooth"})},30))};document.getElementById("nav-features")?.addEventListener("click",t=>{t.preventDefault(),n("#features")}),document.getElementById("nav-architecture")?.addEventListener("click",t=>{t.preventDefault(),n("#architecture")})}function Pt(){document.getElementById("nav-sysid")?.addEventListener("click",e=>{e.preventDefault(),X("sysid"),Ft()}),document.getElementById("sysid-back")?.addEventListener("click",()=>X("landing")),document.getElementById("btn-start")?.addEventListener("click",async()=>{X("configurator"),P?.stop(),setTimeout(()=>{Ut()},100)}),document.getElementById("btn-back")?.addEventListener("click",()=>X("landing"))}function X(e){if(document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),document.getElementById(`${e}-page`)?.classList.add("active"),v.setPage(e),e==="landing"){const n=document.getElementById("landing-page");n&&n.scrollTo({top:0,left:0,behavior:"auto"}),P?.start(),S("dispose")(),O=null}else e==="configurator"&&P?.stop()}function Lt(){document.querySelectorAll(".mechanism-card").forEach(e=>{e.addEventListener("click",n=>{if(n.target.closest(".card-toggle"))return;const t=e.dataset.type;if(t){if(t!=="chassis"){const i=v.getState();if(!(t==="vision"?i.vision.enabled:t==="statemachine"?i.statemachine.enabled:i.mechanisms[t]?.enabled)){M("Enable this mechanism first","info");return}}jt(t)}})}),document.getElementById("btn-reset")?.addEventListener("click",()=>{v.resetAll(),localStorage.removeItem(Z),Q(),document.querySelectorAll(".mech-toggle").forEach(e=>{e.checked=!1}),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("enabled","configured")),["elevator","shooter","intake","roller","launcher","arm","vision"].forEach(e=>S("setMechVisible")(e,!1)),M("Configuration reset","info")})}function _t(){document.querySelectorAll(".mech-toggle").forEach(e=>{e.addEventListener("change",n=>{n.stopPropagation();const t=e.dataset.mech,i=e.checked,o=e.closest(".mechanism-card");i?(o.classList.add("enabled"),o.querySelector(".card-desc").textContent="Click to configure"):(o.classList.remove("enabled","configured"),o.querySelector(".card-desc").textContent="Disabled",v.getState().selectedMechanism===t&&Q()),t==="vision"?v.updateVision({enabled:i}):t==="statemachine"?v.updateStateMachine({enabled:i}):v.getState().mechanisms[t]&&v.updateMechanism(t,{enabled:i}),S("setMechVisible")(t,i)})})}function jt(e){document.querySelectorAll(".mechanism-card").forEach(n=>n.classList.remove("selected")),document.querySelector(`.mechanism-card[data-type="${e}"]`)?.classList.add("selected"),v.selectMechanism(e),j(e),document.getElementById("detail-sidebar")?.classList.add("open"),S("zoomToMechanism")(e)}function Q(){document.getElementById("detail-sidebar")?.classList.remove("open"),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("selected")),v.closeSidebar(),S("resetZoom")()}function xt(){document.getElementById("sidebar-close")?.addEventListener("click",Q),document.getElementById("btn-apply")?.addEventListener("click",()=>{const e=v.getState().selectedMechanism;if(!e)return;ze(e);const n=v.getState();S("update3DModel")(e,n);let t=!1;e==="chassis"?t=n.chassis.configured:e==="vision"?t=n.vision.configured:e==="statemachine"?t=n.statemachine.configured:t=n.mechanisms[e]?.configured;const i=document.querySelector(`[data-type="${e}"]`);i&&(t?(i.classList.add("configured"),M(`${e} configured!`,"success")):(i.classList.remove("configured"),M("Fill required fields","error"))),Ee(n)})}function Vt(){const e=document.getElementById("summary-overlay"),n=document.getElementById("modal-overlay");document.getElementById("btn-generate")?.addEventListener("click",()=>{const t=v.getState();if(!t.chassis.configured){M("Configure chassis first","error");return}const{errors:i}=Se(t);if(i.length>0){H(t),e.style.display="flex",M("Fix validation errors before generating","error");return}H(t),e.style.display="flex";const o=document.getElementById("sm-integration-check");o&&(o.checked=t.stateMachineIntegration,o.onchange=()=>{v.setStateMachineIntegration(o.checked),H(v.getState())}),document.querySelectorAll(".fw-btn").forEach(a=>{a.classList.toggle("active",a.dataset.fw===t.framework),a.onclick=()=>{document.querySelectorAll(".fw-btn").forEach(r=>r.classList.remove("active")),a.classList.add("active"),v.setFramework(a.dataset.fw),H(v.getState())}})}),document.getElementById("summary-close")?.addEventListener("click",()=>e.style.display="none"),document.getElementById("summary-back")?.addEventListener("click",()=>e.style.display="none"),document.getElementById("summary-confirm")?.addEventListener("click",async()=>{const t=v.getState();if(t.stateMachineIntegration){if(!t.statemachine.configured){M("StateMachine must be configured for integration.","error");return}try{const r=JSON.parse(t.statemachine.jsonData);if(typeof r!="object"||Array.isArray(r)||Object.keys(r).length===0)throw new Error;for(const[s,l]of Object.entries(r)){if(!Array.isArray(l))throw new Error;for(const p of l)if(typeof p!="string")throw new Error}}catch{M("Invalid StateMachine JSON format.","error");return}}e.style.display="none",n.style.display="flex";const i=document.getElementById("gen-status-text"),a=v.getState().framework==="advantagekit"?["Initializing...","build.gradle...","IO Interfaces...","Drive subsystem...","Mechanisms...","Vision...","PathPlanner...","Packaging ZIP..."]:["Initializing...","build.gradle...","Drive subsystem...","Mechanisms...","Vision...","Packaging ZIP..."];for(const r of a)i.textContent=r,await new Promise(s=>setTimeout(s,350));try{const r=document.getElementById("project-name-input")?.value||"FRC2026_Robot",s=document.querySelector('input[name="gen-mode"]:checked'),l=s?s.value:x.FULL;await vt(v.getState(),r,l),i.textContent="✓ Download started!",setTimeout(()=>n.style.display="none",1500),M("Code generated!","success")}catch(r){i.textContent="✕ "+r.message,setTimeout(()=>n.style.display="none",3e3)}})}function Ce(e){const n=document.getElementById("project-name-input");n&&e.projectName&&(n.value=e.projectName),document.querySelectorAll(".mech-toggle").forEach(t=>{const i=t.dataset.mech;let o=!1;i==="vision"?o=e.vision.enabled:i==="statemachine"?o=e.statemachine.enabled:o=!!e.mechanisms[i]?.enabled,t.checked=o;const a=t.closest(".mechanism-card");a&&(a.classList.toggle("enabled",o),a.querySelector(".card-desc").textContent=o?"Click to configure":"Disabled",S("setMechVisible")(i,o))}),Ee(e),Re(),De(e)}function Nt(e){const n=document.getElementById("project-name-input")?.value||"FRC2026_Robot",t={...e,projectName:n};try{localStorage.setItem(Z,JSON.stringify(t));const i=document.getElementById("config-saved-indicator");i&&(i.classList.add("show"),clearTimeout(i._hideTimer),i._hideTimer=setTimeout(()=>i.classList.remove("show"),1200))}catch{}}function Bt(){try{const e=localStorage.getItem(Z);if(!e)return;const n=JSON.parse(e);v.loadState(n)}catch{}}async function Ft(){const e=document.getElementById("sysid-content-container");if(!e||e.dataset.loaded==="true")return;e.innerHTML='<p class="sysid-loading">Loading SysId guide...</p>';const t=["/RobotCodeGenerator/pages/sysid.html","./pages/sysid.html"];for(const i of t)try{const o=await fetch(i,{cache:"no-cache"});if(!o.ok)continue;e.innerHTML=await o.text(),e.dataset.loaded="true";return}catch{}e.innerHTML='<p class="sysid-error">Unable to load SysId guide. Please refresh and try again.</p>'}function Re(){const e=v.getConfiguredCount(),n=v.getExpectedCount(),t=document.getElementById("progress-fill");t&&(t.style.width=n===0?"0%":Math.round(e/n*100)+"%");const i=document.getElementById("config-status");i&&(i.textContent=`${e} / ${n} configured`)}function De(e){const n=(t,i)=>{const o=document.getElementById(t);o&&(i?o.classList.add("configured"):o.classList.remove("configured"))};n("card-chassis",e.chassis.configured),Object.entries(e.mechanisms).forEach(([t,i])=>n(`card-${t}`,i.configured)),n("card-vision",e.vision.configured),n("card-statemachine",e.statemachine.configured)}function ke(e){S("updateMechConfigured")("chassis",e.chassis.configured),Object.entries(e.mechanisms).forEach(([n,t])=>S("updateMechConfigured")(n,t.configured)),S("updateMechConfigured")("vision",e.vision.configured)}async function Ut(){const e=document.getElementById("viewport-3d-container"),n=document.getElementById("viewport-hint");if(e){n&&(n.textContent="Loading 3D preview...");try{(await Tt()).initViewport(e),Ce(v.getState()),ke(v.getState()),n&&(n.textContent="Click a mechanism · Drag to orbit · Scroll to zoom")}catch{e.innerHTML='<p class="viewport-error">3D preview unavailable. Configure mechanisms from the panel.</p>',n&&(n.textContent="3D preview unavailable")}}}const ve={talonfx_falcon:"Falcon 500",talonfx_kraken60:"Kraken X60",talonfx_kraken44:"Kraken X44",talonfxs_minion:"Minion",talonfxs:"TalonFXS",sparkmax_neo:"NEO",sparkmax_neo550:"NEO 550",sparkflex_vortex:"Vortex"},Ht={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};function Ee(e){const n=(t,i)=>{const o=document.querySelector(t);o&&(o.textContent=i)};if(e.chassis.configured&&n("#card-chassis .card-desc",`${e.chassis.type} · ${ve[e.chassis.driveMotor]||""}`),Object.entries(e.mechanisms).forEach(([t,i])=>{if(!i.configured)return;if(t==="arm"){n("#card-arm .card-desc",`${i.dof} DoF Arm`);return}const o=i.motors||[],a=o[0],r=a?.type?ve[a.type]||a.type:"Motor",s=o.length>1?` +${o.length-1}`:"";n(`#card-${t} .card-desc`,`${r}${s}`)}),e.vision.configured){const t=Ht[e.vision.limelightVersion]||"Limelight";n("#card-vision .card-desc",e.vision.system==="limelight"?t:"PhotonVision")}e.statemachine.configured&&n("#card-statemachine .card-desc","Enabled")}
