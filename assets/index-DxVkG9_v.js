(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const qt={talonfx_falcon:{name:"Falcon 500 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6380,stallTorque:4.69,canBus:!0},talonfx_kraken60:{name:"Kraken X60 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6e3,stallTorque:7.09,canBus:!0},talonfx_kraken44:{name:"Kraken X44 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:5800,stallTorque:4.69,canBus:!0},talonfxs_minion:{name:"Minion (TalonFXS)",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:1.22,canBus:!0},talonfxs:{name:"TalonFXS",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:7.09,canBus:!0},sparkmax_neo:{name:"SparkMax + NEO",vendor:"rev",class:"CANSparkMax",freeSpeed:5676,stallTorque:2.6,canBus:!0},sparkmax_neo550:{name:"SparkMax + NEO 550",vendor:"rev",class:"CANSparkMax",freeSpeed:11e3,stallTorque:.97,canBus:!0},sparkflex_vortex:{name:"SparkFlex + Vortex",vendor:"rev",class:"CANSparkFlex",freeSpeed:6784,stallTorque:3.6,canBus:!0}},Zc={integrated:{name:"Integrated Encoder",vendor:"none",needsId:!1},cancoder:{name:"CANCoder",vendor:"ctre",needsId:!0},throughbore:{name:"Through Bore Encoder",vendor:"rev",needsId:!1,port:"DIO"},dutycycle:{name:"DutyCycle Encoder",vendor:"wpilib",needsId:!1,port:"DIO"}},wa={pigeon2:{name:"Pigeon 2.0",vendor:"ctre",class:"Pigeon2",needsCanId:!0},navx:{name:"NavX2",vendor:"kauai",class:"AHRS",needsCanId:!1},adis16470:{name:"ADIS16470",vendor:"wpilib",class:"ADIS16470_IMU",needsCanId:!1},adis16448:{name:"ADIS16448",vendor:"wpilib",class:"ADIS16448_IMU",needsCanId:!1}},Jc={swerve:{name:"Swerve Drive",modules:4,desc:"Holonomic drive with independent steer+drive per module"},tank:{name:"Tank Drive",modules:2,desc:"Differential drive with left/right side motors"},mecanum:{name:"Mecanum Drive",modules:4,desc:"Holonomic drive with mecanum wheels"}},Qc={ll3:{name:"Limelight 3",desc:"Upgraded sensor, wider FOV"},ll3a:{name:"Limelight 3A",desc:"High resolution"},ll3g:{name:"Limelight 3G",desc:"Google Coral AI accelerator"},ll4:{name:"Limelight 4",desc:"Latest gen, highest performance"}},rd={raspberrypi:{name:"Raspberry Pi",desc:"Raspberry Pi 4/5 running PhotonVision"},orangepi:{name:"Orange Pi",desc:"Orange Pi 5 running PhotonVision"}},As={mk4i_l2:{name:"MK4i L2",driveRatio:6.75,turnRatio:150/7,wheelDiam:.1016},mk4i_l3:{name:"MK4i L3",driveRatio:6.12,turnRatio:150/7,wheelDiam:.1016},mk4_l2:{name:"MK4 L2",driveRatio:6.75,turnRatio:12.8,wheelDiam:.1016},mk4n_l2:{name:"MK4n L2",driveRatio:5.9,turnRatio:18.75,wheelDiam:.1016},custom:{name:"Custom",driveRatio:null,turnRatio:null,wheelDiam:null}},eu={dio:{name:"RoboRIO DIO",desc:"Digital Input/Output port (0-9)"},can:{name:"CAN Bus Sensor",desc:"CAN-connected sensor (e.g. CANifier)"},analog:{name:"RoboRIO Analog",desc:"Analog Input port (0-3)"}},hn={swerve:{fl_drive:11,fl_turn:12,fl_encoder:13,fr_drive:21,fr_turn:22,fr_encoder:23,bl_drive:31,bl_turn:32,bl_encoder:33,br_drive:41,br_turn:42,br_encoder:43},tank:{left_leader:11,left_follower:12,right_leader:21,right_follower:22},gyro:50,elevator:{motor:51,encoder:53},shooter:{motor:61},intake:{motor:71,sensor:0},roller:{motor:81},launcher:{motor:91,sensor:1}},Ta=new Map;function ai(i,e){Ta.set(i,{id:i,...e})}function tu(){return Array.from(Ta.values())}function od(){const i={};for(const[e,t]of Ta)i[e]=t.defaultState?JSON.parse(JSON.stringify(t.defaultState)):{configured:!1};return i}const rl={id:"elevator",name:"Elevator",description:"Linear lifting mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.elevator.motor,role:"leader",inverted:!1}],encoder:null,gearRatio:null,maxHeight:null,minHeight:0,encoderId:hn.elevator.encoder,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,motionMaxVel:null,motionMaxAccel:null,attachedTo:"chassis"},validAttachments:["chassis"]},ol={id:"shooter",name:"Shooter",description:"Flywheel shooter mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.shooter.motor,role:"leader",inverted:!1}],shooterType:"adjustable",turretMotor:{type:null,canId:25,role:"turret",inverted:!1},encoder:null,gearRatio:null,maxRPM:null,motorConfig:{currentLimit:60,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},al={id:"intake",name:"Intake",description:"Floor intake mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.intake.motor,role:"leader",inverted:!1}],gearRatio:null,hasSensor:!1,sensorPortType:"dio",sensorPort:hn.intake.sensor,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis"]},ll={id:"roller",name:"Roller",description:"Simple roller mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.roller.motor,role:"leader",inverted:!1}],gearRatio:null,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},cl={id:"launcher",name:"Launcher",description:"Game piece launcher",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.launcher.motor,role:"leader",inverted:!1}],hasSensor:!1,sensorPortType:"dio",sensorPort:hn.launcher.sensor,motorConfig:{currentLimit:20,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,attachedTo:"arm"},validAttachments:["elevator","arm","intake"]},ul={id:"arm",name:"Arm",description:"Multi-jointed arm mechanism",defaultState:{configured:!1,enabled:!1,dof:1,joints:[{motors:[{type:null,canId:30,role:"leader",inverted:!1}],encoder:null,encoderId:31,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null}],attachedTo:"chassis"},validAttachments:["chassis","elevator"]},dl={id:"custom",name:"Custom",description:"User-defined mechanism",defaultState:{configured:!1,enabled:!1},validAttachments:["chassis","elevator","arm"]};function ad(){ai(rl.id,rl),ai(ol.id,ol),ai(al.id,al),ai(ll.id,ll),ai(cl.id,cl),ai(ul.id,ul),ai(dl.id,dl)}ad();function ld(){return{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20}}function nu(i){return{name:`cam${i}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0}}const li={currentPage:"landing",selectedMechanism:null,sidebarOpen:!1,isMobile:!1,framework:"advantagekit",stateMachineIntegration:!1,chassis:{configured:!1,type:null,driveMotor:null,turnMotor:null,gyro:null,gyroCanId:hn.gyro,gearRatio:null,turnGearRatio:null,wheelDiameter:null,trackWidth:null,maxSpeed:null,swervePreset:null,canIds:{...hn.swerve},tankCanIds:{...hn.tank},usePhoenix6Swerve:!1,swerveEncoderType:"cancoder",pathplannerEnabled:!0,motorConfig:ld()},mechanisms:od(),attachmentRules:(()=>{const i={};return tu().forEach(e=>{i[e.id]=e.validAttachments}),i})(),vision:{configured:!1,enabled:!1,system:null,limelightVersion:null,photonPlatform:null,cameraCount:1,cameras:[nu(0)]},statemachine:{configured:!1,enabled:!1,states:[],transitions:[],jsonData:""}};class cd{constructor(){this.state=JSON.parse(JSON.stringify(li)),this.listeners=[]}getState(){return this.state}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(e){this.listeners.forEach(t=>t(this.state,e))}loadState(e){return!e||typeof e!="object"?!1:(this.state={...JSON.parse(JSON.stringify(li)),...e,chassis:{...JSON.parse(JSON.stringify(li.chassis)),...e.chassis||{}},mechanisms:{...JSON.parse(JSON.stringify(li.mechanisms)),...e.mechanisms||{}},vision:{...JSON.parse(JSON.stringify(li.vision)),...e.vision||{}},statemachine:{...JSON.parse(JSON.stringify(li.statemachine)),...e.statemachine||{}}},this.state.currentPage="landing",this.state.selectedMechanism=null,this.state.sidebarOpen=!1,this.notify("load"),!0)}setPage(e){this.state.currentPage=e,this.notify("currentPage")}setFramework(e){this.state.framework=e,this.notify("framework")}setStateMachineIntegration(e){this.state.stateMachineIntegration=!!e,this.notify("stateMachineIntegration")}selectMechanism(e){this.state.selectedMechanism=e,this.state.sidebarOpen=!!e,this.notify("selectedMechanism")}closeSidebar(){this.state.sidebarOpen=!1,this.state.selectedMechanism=null,this.notify("sidebarOpen")}updateChassis(e){Object.assign(this.state.chassis,e),this.state.chassis.configured=this._isChassisValid(),this._detectPhoenix6Swerve(),this.notify("chassis")}updateMechanism(e,t){if(this.state.mechanisms[e]){if(t.attachedTo!==void 0){const n=this.state.attachmentRules[e];n&&!n.includes(t.attachedTo)&&(t.attachedTo=this.state.mechanisms[e].attachedTo)}Object.assign(this.state.mechanisms[e],t),this.state.mechanisms[e].configured=this._isMechValid(e),this.notify(`mechanisms.${e}`)}}addMotor(e,t){this.state.mechanisms[e]&&(this.state.mechanisms[e].motors.push(t),this.notify(`mechanisms.${e}`))}removeMotor(e,t){this.state.mechanisms[e]&&t>0&&(this.state.mechanisms[e].motors.splice(t,1),this.notify(`mechanisms.${e}`))}updateMotor(e,t,n){var s;(s=this.state.mechanisms[e])!=null&&s.motors[t]&&(Object.assign(this.state.mechanisms[e].motors[t],n),this.notify(`mechanisms.${e}`))}updateVision(e){if(Object.assign(this.state.vision,e),e.cameraCount!==void 0){const t=e.cameraCount;for(;this.state.vision.cameras.length<t;)this.state.vision.cameras.push(nu(this.state.vision.cameras.length));this.state.vision.cameras.length=t}this.state.vision.configured=this._isVisionValid(),this.notify("vision")}updateCamera(e,t){this.state.vision.cameras[e]&&(Object.assign(this.state.vision.cameras[e],t),this.notify("vision.cameras"))}updateStateMachine(e){Object.assign(this.state.statemachine,e);let t=!1;if(this.state.statemachine.jsonData)try{const n=JSON.parse(this.state.statemachine.jsonData);if(typeof n=="object"&&!Array.isArray(n)&&Object.keys(n).length>0){t=!0;for(const[s,r]of Object.entries(n))if(!Array.isArray(r))t=!1;else for(const a of r)typeof a!="string"&&(t=!1)}}catch{t=!1}this.state.statemachine.configured=this.state.statemachine.enabled&&t,this.notify("statemachine")}resetAll(){this.state=JSON.parse(JSON.stringify(li)),this.state.isMobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),this.notify("reset")}getConfiguredCount(){let e=0;return this.state.chassis.configured&&e++,Object.values(this.state.mechanisms).forEach(t=>{t.configured&&t.enabled&&e++}),this.state.vision.configured&&this.state.vision.enabled&&e++,this.state.statemachine.configured&&this.state.statemachine.enabled&&e++,e}getExpectedCount(){let e=1;return Object.values(this.state.mechanisms).forEach(t=>{t.enabled&&e++}),this.state.vision.enabled&&e++,this.state.statemachine.enabled&&e++,e}_isChassisValid(){const e=this.state.chassis;return!!(e.type&&e.driveMotor)}_isMechValid(e){const t=this.state.mechanisms[e];return!!(t.enabled&&t.motors.length>0&&t.motors[0].type)}_isVisionValid(){const e=this.state.vision;return e.enabled?e.system==="limelight"?!!e.limelightVersion:e.system==="photonvision"?!!e.photonPlatform:!1:!1}_detectPhoenix6Swerve(){const e=this.state.chassis;if(e.type!=="swerve"){e.usePhoenix6Swerve=!1;return}const t=s=>s&&s.startsWith("talonfx"),n=e.swerveEncoderType==="cancoder";e.usePhoenix6Swerve=t(e.driveMotor)&&t(e.turnMotor)&&n}}const Ne=new cd;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",Wi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,hl=1,dd=2,iu=1,su=2,Ln=3,zn=0,Vt=1,_n=2,ii=0,ji=1,fl=2,pl=3,ml=4,hd=5,vi=100,fd=101,pd=102,md=103,gd=104,vd=200,_d=201,yd=202,bd=203,Lo=204,Oo=205,xd=206,Sd=207,Md=208,Ed=209,wd=210,Td=211,Ad=212,Rd=213,Cd=214,No=0,Uo=1,ko=2,Zi=3,Fo=4,Bo=5,zo=6,Vo=7,ru=0,Id=1,Dd=2,si=0,Pd=1,Ld=2,Od=3,ou=4,Nd=5,Ud=6,kd=7,gl="attached",Fd="detached",au=300,Ji=301,Qi=302,Ho=303,Go=304,Nr=306,es=1e3,ei=1001,Ir=1002,Nt=1003,lu=1004,Es=1005,Yt=1006,Sr=1007,Nn=1008,Vn=1009,cu=1010,uu=1011,Is=1012,Ra=1013,xi=1014,dn=1015,Us=1016,Ca=1017,Ia=1018,ts=1020,du=35902,hu=1021,fu=1022,nn=1023,pu=1024,mu=1025,Xi=1026,ns=1027,Da=1028,Pa=1029,gu=1030,La=1031,Oa=1033,Mr=33776,Er=33777,wr=33778,Tr=33779,$o=35840,Wo=35841,jo=35842,Xo=35843,qo=36196,Yo=37492,Ko=37496,Zo=37808,Jo=37809,Qo=37810,ea=37811,ta=37812,na=37813,ia=37814,sa=37815,ra=37816,oa=37817,aa=37818,la=37819,ca=37820,ua=37821,Ar=36492,da=36494,ha=36495,vu=36283,fa=36284,pa=36285,ma=36286,Ds=2300,Ps=2301,Hr=2302,vl=2400,_l=2401,yl=2402,Bd=2500,zd=0,_u=1,ga=2,Vd=3200,Hd=3201,yu=0,Gd=1,Qn="",At="srgb",kt="srgb-linear",Ur="linear",ot="srgb",Ai=7680,bl=519,$d=512,Wd=513,jd=514,bu=515,Xd=516,qd=517,Yd=518,Kd=519,va=35044,xl="300 es",Un=2e3,Dr=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const qi=Math.PI/180,is=180/Math.PI;function fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Na(i,e){return(i%e+e)%e}function Zd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function Qd(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function eh(i,e=1){return e-Math.abs(Na(i,e*2)-e)}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ih(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sh(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function oh(i){i!==void 0&&(Sl=i);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(i){return i*qi}function lh(i){return i*is}function ch(i){return(i&i-1)===0&&i!==0}function uh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xu={DEG2RAD:qi,RAD2DEG:is,generateUUID:fn,clamp:Rt,euclideanModulo:Na,mapLinear:Zd,inverseLerp:Jd,lerp:Rs,damp:Qd,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:oh,degToRad:ah,radToDeg:lh,isPowerOfTwo:ch,ceilPowerOfTwo:uh,floorPowerOfTwo:dh,setQuaternionFromProperEuler:hh,normalize:it,denormalize:un};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,r,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],b=s[4],S=s[7],A=s[2],I=s[5],R=s[8];return r[0]=a*v+o*y+l*A,r[3]=a*m+o*b+l*I,r[6]=a*p+o*S+l*R,r[1]=c*v+d*y+u*A,r[4]=c*m+d*b+u*I,r[7]=c*p+d*S+u*R,r[2]=h*v+f*y+g*A,r[5]=h*m+f*b+g*I,r[8]=h*p+f*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new We;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fh(){const i=Ls("canvas");return i.style.display="block",i}const Ml={};function ws(i){i in Ml||(Ml[i]=!0,console.warn(i))}function ph(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const El=[.64,.33,.3,.6,.15,.06],wl=[.2126,.7152,.0722],Tl=[.3127,.329],Al=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[kt]:{primaries:El,whitePoint:Tl,transfer:Ur,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:wl,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:El,whitePoint:Tl,transfer:ot,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:wl,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let Ri;class vh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Ls("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($r(s[a].image)):r.push($r(s[a]))}else r=$r(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class wt extends wi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=ei,s=ei,r=Yt,a=Nn,o=nn,l=Vn,c=wt.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=fn(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=au;wt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(f+1)/2,A=(p+1)/2,I=(d+h)/4,R=(u+v)/4,L=(g+m)/4;return b>S&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=I/n,r=R/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=I/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(h-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Eu extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==g){let m=1-o;const p=l*h+c*f+d*g+u*v,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),I=Math.atan2(A,p*y);m=Math.sin(m*I)/A,o=Math.sin(o*I)/A}const S=o*y;if(l=l*m+h*S,c=c*m+f*S,d=d*m+g*S,u=u*m+v*S,m===1-o){const A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new H,Cl=new bn;class Hn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Gs.subVectors(this.max,ms),Ci.subVectors(e.a,ms),Ii.subVectors(e.b,ms),Di.subVectors(e.c,ms),Wn.subVectors(Ii,Ci),jn.subVectors(Di,Ii),ci.subVectors(Ci,Di);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-ci.y,ci.x,0];return!jr(t,Ci,Ii,Di,Gs)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Ci,Ii,Di,Gs))?!1:($s.crossVectors(Wn,jn),t=[$s.x,$s.y,$s.z],jr(t,Ci,Ii,Di,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new H,new H,new H,new H,new H,new H,new H,new H],on=new H,Hs=new Hn,Ci=new H,Ii=new H,Di=new H,Wn=new H,jn=new H,ci=new H,ms=new H,Gs=new H,$s=new H,ui=new H;function jr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),d=n.dot(ui);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Sh=new Hn,gs=new H,Xr=new H;class Sn{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Xr)),this.expandByPoint(gs.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new H,qr=new H,Ws=new H,Xn=new H,Yr=new H,js=new H,Kr=new H;class ks{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qr.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=Xn.dot(this.direction),l=-Xn.dot(Ws),c=Xn.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qr).addScaledVector(Ws,h),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Yr.subVectors(t,e),js.subVectors(n,e),Kr.crossVectors(Yr,js);let a=this.direction.dot(Kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(js.crossVectors(Xn,js));if(l<0)return null;const c=o*this.direction.dot(Yr.cross(Xn));if(c<0||l+c>a)return null;const d=-o*Xn.dot(Kr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,f=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*u,g=o*d,v=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Eh)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),qn.crossVectors(n,$t),qn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),qn.crossVectors(n,$t)),qn.normalize(),Xs.crossVectors($t,qn),s[0]=qn.x,s[4]=Xs.x,s[8]=$t.x,s[1]=qn.y,s[5]=Xs.y,s[9]=$t.y,s[2]=qn.z,s[6]=Xs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],A=n[15],I=s[0],R=s[4],L=s[8],E=s[12],w=s[1],U=s[5],C=s[9],N=s[13],M=s[2],F=s[6],ee=s[10],G=s[14],Z=s[3],Q=s[7],ae=s[11],B=s[15];return r[0]=a*I+o*w+l*M+c*Z,r[4]=a*R+o*U+l*F+c*Q,r[8]=a*L+o*C+l*ee+c*ae,r[12]=a*E+o*N+l*G+c*B,r[1]=d*I+u*w+h*M+f*Z,r[5]=d*R+u*U+h*F+f*Q,r[9]=d*L+u*C+h*ee+f*ae,r[13]=d*E+u*N+h*G+f*B,r[2]=g*I+v*w+m*M+p*Z,r[6]=g*R+v*U+m*F+p*Q,r[10]=g*L+v*C+m*ee+p*ae,r[14]=g*E+v*N+m*G+p*B,r[3]=y*I+b*w+S*M+A*Z,r[7]=y*R+b*U+S*F+A*Q,r[11]=y*L+b*C+S*ee+A*ae,r[15]=y*E+b*N+S*G+A*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*h+n*c*h+s*o*f-n*l*f)+v*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*d-r*l*d)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*d-n*c*d)+p*(-s*o*d-t*l*u+t*o*h+s*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*h*c+v*l*f-o*m*f-u*l*p+o*h*p,b=g*h*c-d*m*c-g*l*f+a*m*f+d*l*p-a*h*p,S=d*v*c-g*u*c+g*o*f-a*v*f-d*o*p+a*u*p,A=g*u*l-d*v*l-g*o*h+a*v*h+d*o*m-a*u*m,I=t*y+n*b+s*S+r*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=y*R,e[1]=(v*h*r-u*m*r-v*s*f+n*m*f+u*s*p-n*h*p)*R,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*h*r-u*s*c+n*h*c+o*s*f-n*l*f)*R,e[4]=b*R,e[5]=(d*m*r-g*h*r+g*s*f-t*m*f-d*s*p+t*h*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*f+t*l*f)*R,e[8]=S*R,e[9]=(g*u*r-d*v*r-g*n*f+t*v*f+d*n*p-t*u*p)*R,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*R,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=A*R,e[13]=(d*v*s-g*u*s+g*n*h-t*v*h-d*n*m+t*u*m)*R,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,g=r*u,v=a*d,m=a*u,p=o*u,y=l*c,b=l*d,S=l*u,A=n.x,I=n.y,R=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+S)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-S)*I,s[5]=(1-(h+p))*I,s[6]=(m+y)*I,s[7]=0,s[8]=(g+b)*R,s[9]=(m-y)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,d=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Un){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let f,g;if(o===Un)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Un){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(a-r),h=(t+e)*c,f=(n+s)*d;let g,v;if(o===Un)g=(a+r)*u,v=-2*u;else if(o===Dr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new H,an=new je,Mh=new H(0,0,0),Eh=new H(1,1,1),qn=new H,Xs=new H,$t=new H,Il=new je,Dl=new bn;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const Pl=new H,Li=new bn,Cn=new je,qs=new H,vs=new H,Th=new H,Ah=new bn,Ll=new H(1,0,0),Ol=new H(0,1,0),Nl=new H(0,0,1),Ul={type:"added"},Rh={type:"removed"},Oi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class mt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new H,t=new xn,n=new bn,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new We}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Nl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(vs,qs,this.up):Cn.lookAt(qs,vs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Cn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new H(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new H,In=new H,Jr=new H,Dn=new H,Ni=new H,Ui=new H,kl=new H,Qr=new H,eo=new H,to=new H,no=new Qe,io=new Qe,so=new Qe;class tn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),In.subVectors(n,t),Jr.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(In),l=ln.dot(Jr),c=In.dot(In),d=In.dot(Jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,n),so.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(no,r.x),a.addScaledVector(io,r.y),a.addScaledVector(so,r.z),a}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),In.subVectors(e,t),ln.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,n),Ui.subVectors(r,n),Qr.subVectors(e,n);const l=Ni.dot(Qr),c=Ui.dot(Qr);if(l<=0&&c<=0)return t.copy(n);eo.subVectors(e,s);const d=Ni.dot(eo),u=Ui.dot(eo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ni,a);to.subVectors(e,r);const f=Ni.dot(to),g=Ui.dot(to);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ui,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return kl.subVectors(r,s),o=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(kl,o);const p=1/(m+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Na(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ro(a,r,e+1/3),this.g=ro(a,r,e),this.b=ro(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Rt(Dt.r*255,0,255))*65536+Math.round(Rt(Dt.g*255,0,255))*256+Math.round(Rt(Dt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=At){Ze.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Ys);const n=Rs(Yn.h,Ys.h,t),s=Rs(Yn.s,Ys.s,t),r=Rs(Yn.l,Ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Le;Le.NAMES=Tu;let Ch=0;class yn extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=fn(),this.name="",this.blending=ji,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Oo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yi extends yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,Ks=new ke;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class Au extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ru extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const Zt=new je,oo=new mt,ki=new H,Wt=new Hn,_s=new Hn,Mt=new H;class Ht extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Ru:Au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Wt.min,_s.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,_s.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(_s.min),Wt.expandByPoint(_s.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Mt.add(ki)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new H,l[L]=new H;const c=new H,d=new H,u=new H,h=new ke,f=new ke,g=new ke,v=new H,m=new H;function p(L,E,w){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(U),o[L].add(v),o[E].add(v),o[w].add(v),l[L].add(m),l[E].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,E=y.length;L<E;++L){const w=y[L],U=w.start,C=w.count;for(let N=U,M=U+C;N<M;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new H,S=new H,A=new H,I=new H;function R(L){A.fromBufferAttribute(s,L),I.copy(A);const E=o[L];b.copy(E),b.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(I,E);const U=S.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,U)}for(let L=0,E=y.length;L<E;++L){const w=y[L],U=w.start,C=w.count;for(let N=U,M=U+C;N<M;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,d=new H,u=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Ut(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new je,di=new ks,Zs=new Sn,Bl=new H,Js=new H,Qs=new H,er=new H,ao=new H,tr=new H,zl=new H,nr=new H;class He extends mt{constructor(e=new Ht,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(ao.fromBufferAttribute(u,e),a?tr.addScaledVector(ao,d):tr.addScaledVector(ao.sub(t),d))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(Zs.containsPoint(di.origin)===!1&&(di.intersectSphere(Zs,Bl)===null||di.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),di.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=b;S<A;S+=3){const I=o.getX(S),R=o.getX(S+1),L=o.getX(S+2);s=ir(this,p,e,n,c,d,u,I,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=ir(this,a,e,n,c,d,u,y,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=b;S<A;S+=3){const I=S,R=S+1,L=S+2;s=ir(this,p,e,n,c,d,u,I,R,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,b=m+1,S=m+2;s=ir(this,a,e,n,c,d,u,y,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dh(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zn,o),l===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:i}}function ir(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,Qs),i.getVertexPosition(c,er);const d=Dh(i,e,t,n,Js,Qs,er,zl);if(d){const u=new H;tn.getBarycoord(zl,Js,Qs,er,u),s&&(d.uv=tn.getInterpolatedAttribute(s,o,l,c,u,new ke)),r&&(d.uv1=tn.getInterpolatedAttribute(r,o,l,c,u,new ke)),a&&(d.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};tn.getNormal(Js,Qs,er,h.normal),d.face=h,d.barycoord=u}return d}class ht extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(u,2));function g(v,m,p,y,b,S,A,I,R,L,E){const w=S/R,U=A/L,C=S/2,N=A/2,M=I/2,F=R+1,ee=L+1;let G=0,Z=0;const Q=new H;for(let ae=0;ae<ee;ae++){const B=ae*U-N;for(let V=0;V<F;V++){const ge=V*w-C;Q[v]=ge*y,Q[m]=B*b,Q[p]=M,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=I>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(V/R),u.push(1-ae/L),G+=1}}for(let ae=0;ae<L;ae++)for(let B=0;B<R;B++){const V=h+B+F*ae,ge=h+B+F*(ae+1),$=h+(B+1)+F*(ae+1),te=h+(B+1)+F*ae;l.push(V,ge,te),l.push(ge,$,te),Z+=6}o.addGroup(f,Z,E),f+=Z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=ss(i[t]);for(const s in n)e[s]=n[s]}return e}function Ph(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Lh={clone:ss,merge:Lt};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Iu extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new H,Vl=new ke,Hl=new ke;class Ot extends Iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Hl),t.subVectors(Hl,Vl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Bi=1;class Uh extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(Fi,Bi,e,t);s.layers=this.layers,this.add(s);const r=new Ot(Fi,Bi,e,t);r.layers=this.layers,this.add(r);const a=new Ot(Fi,Bi,e,t);a.layers=this.layers,this.add(a);const o=new Ot(Fi,Bi,e,t);o.layers=this.layers,this.add(o);const l=new Ot(Fi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Fi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Du extends wt{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Du(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ht(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ii});r.uniforms.tEquirect.value=t;const a=new He(s,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Yt),new Uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const lo=new H,Fh=new H,Bh=new We;class Jn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lo.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),s=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Sn,sr=new H;class Ua{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,h-c,m-f,S-p).normalize(),n[1].setComponents(l+r,h+c,m+f,S+p).normalize(),n[2].setComponents(l+a,h+d,m+g,S+y).normalize(),n[3].setComponents(l-a,h-d,m-g,S-y).normalize(),n[4].setComponents(l-o,h-u,m-v,S-b).normalize(),t===Un)n[5].setComponents(l+o,h+u,m+v,S+b).normalize();else if(t===Dr)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(sr.x=s.normal.x>0?e.max.x:e.min.x,sr.y=s.normal.y>0?e.max.y:e.min.y,sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Fs extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const y=p*h-a;for(let b=0;b<c;b++){const S=b*u-r;g.push(S,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const b=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),I=y+1+c*p;f.push(b,S,I),f.push(S,A,I)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Vh,alphahash_pars_fragment:Hh,alphamap_fragment:Gh,alphamap_pars_fragment:$h,alphatest_fragment:Wh,alphatest_pars_fragment:jh,aomap_fragment:Xh,aomap_pars_fragment:qh,batching_pars_vertex:Yh,batching_vertex:Kh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:ef,bumpmap_pars_fragment:tf,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:df,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:vf,colorspace_fragment:_f,colorspace_pars_fragment:yf,envmap_fragment:bf,envmap_common_pars_fragment:xf,envmap_pars_fragment:Sf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Of,envmap_vertex:Ef,fog_vertex:wf,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:If,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Uf,lights_phong_fragment:kf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:Vf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:Kf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:_p,dithering_fragment:yp,dithering_pars_fragment:bp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Ep,shadowmap_vertex:wp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Ip,specularmap_fragment:Dp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Op,transmission_fragment:Np,transmission_pars_fragment:Up,uv_pars_fragment:kp,uv_pars_vertex:Fp,uv_vertex:Bp,worldpos_vertex:zp,background_vert:Vp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:$p,cube_vert:Wp,cube_frag:jp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:Kp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:vm,shadow_frag:_m,sprite_vert:ym,sprite_frag:bm},be={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mn={basic:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Lt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Lt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Lt([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Lt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Lt([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Lt([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Lt([be.common,be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Lt([be.lights,be.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mn.physical={uniforms:Lt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const rr={r:0,b:0,g:0},fi=new xn,xm=new je;function Sm(i,e,t,n,s,r,a){const o=new Le(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1;const S=g(y);S===null?p(o,l):S&&S.isColor&&(p(S,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Nr)?(d===void 0&&(d=new He(new ht(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ss(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),fi.copy(b.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(fi)),d.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,(u!==S||h!==S.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new He(new Fs(2,2),new ri({name:"BackgroundMaterial",uniforms:ss(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(rr,Cu(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:m}}function Mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(w,U,C,N,M){let F=!1;const ee=u(N,C,U);r!==ee&&(r=ee,c(r.object)),F=f(w,N,C,M),F&&g(w,N,C,M),M!==null&&e.update(M,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(w,U,C,N),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function u(w,U,C){const N=C.wireframe===!0;let M=n[w.id];M===void 0&&(M={},n[w.id]=M);let F=M[U.id];F===void 0&&(F={},M[U.id]=F);let ee=F[N];return ee===void 0&&(ee=h(l()),F[N]=ee),ee}function h(w){const U=[],C=[],N=[];for(let M=0;M<t;M++)U[M]=0,C[M]=0,N[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:C,attributeDivisors:N,object:w,attributes:{},index:null}}function f(w,U,C,N){const M=r.attributes,F=U.attributes;let ee=0;const G=C.getAttributes();for(const Z in G)if(G[Z].location>=0){const ae=M[Z];let B=F[Z];if(B===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),ae===void 0||ae.attribute!==B||B&&ae.data!==B.data)return!0;ee++}return r.attributesNum!==ee||r.index!==N}function g(w,U,C,N){const M={},F=U.attributes;let ee=0;const G=C.getAttributes();for(const Z in G)if(G[Z].location>=0){let ae=F[Z];ae===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const B={};B.attribute=ae,ae&&ae.data&&(B.data=ae.data),M[Z]=B,ee++}r.attributes=M,r.attributesNum=ee,r.index=N}function v(){const w=r.newAttributes;for(let U=0,C=w.length;U<C;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){const C=r.newAttributes,N=r.enabledAttributes,M=r.attributeDivisors;C[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),M[w]!==U&&(i.vertexAttribDivisor(w,U),M[w]=U)}function y(){const w=r.newAttributes,U=r.enabledAttributes;for(let C=0,N=U.length;C<N;C++)U[C]!==w[C]&&(i.disableVertexAttribArray(C),U[C]=0)}function b(w,U,C,N,M,F,ee){ee===!0?i.vertexAttribIPointer(w,U,C,M,F):i.vertexAttribPointer(w,U,C,N,M,F)}function S(w,U,C,N){v();const M=N.attributes,F=C.getAttributes(),ee=U.defaultAttributeValues;for(const G in F){const Z=F[G];if(Z.location>=0){let Q=M[G];if(Q===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ae=Q.normalized,B=Q.itemSize,V=e.get(Q);if(V===void 0)continue;const ge=V.buffer,$=V.type,te=V.bytesPerElement,ve=$===i.INT||$===i.UNSIGNED_INT||Q.gpuType===Ra;if(Q.isInterleavedBufferAttribute){const he=Q.data,pe=he.stride,ye=Q.offset;if(he.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Z.locationSize;Ae++)p(Z.location+Ae,he.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<Z.locationSize;Ae++)m(Z.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ae=0;Ae<Z.locationSize;Ae++)b(Z.location+Ae,B/Z.locationSize,$,ae,pe*te,(ye+B/Z.locationSize*Ae)*te,ve)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)p(Z.location+he,Q.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<Z.locationSize;he++)m(Z.location+he);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let he=0;he<Z.locationSize;he++)b(Z.location+he,B/Z.locationSize,$,ae,B*te,B/Z.locationSize*he*te,ve)}}else if(ee!==void 0){const ae=ee[G];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Z.location,ae);break;case 3:i.vertexAttrib3fv(Z.location,ae);break;case 4:i.vertexAttrib4fv(Z.location,ae);break;default:i.vertexAttrib1fv(Z.location,ae)}}}}y()}function A(){L();for(const w in n){const U=n[w];for(const C in U){const N=U[C];for(const M in N)d(N[M].object),delete N[M];delete U[C]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const U=n[w.id];for(const C in U){const N=U[C];for(const M in N)d(N[M].object),delete N[M];delete U[C]}delete n[w.id]}function R(w){for(const U in n){const C=n[U];if(C[w.id]===void 0)continue;const N=C[w.id];for(const M in N)d(N[M].object),delete N[M];delete C[w.id]}}function L(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Em(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==dn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:I}}function Tm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Jn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:n,b=y*4;let S=p.clippingState||null;l.value=S,S=d(g,h,b,f);for(let A=0;A!==b;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==v;++b,S+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Am(i){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=Ji:o===Go&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ho||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ka extends Iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Gl=[.125,.215,.35,.446,.526,.582],_i=20,co=new ka,$l=new Le;let uo=null,ho=0,fo=0,po=!1;const gi=(1+Math.sqrt(5))/2,zi=1/gi,Wl=[new H(-gi,zi,0),new H(gi,zi,0),new H(-zi,0,gi),new H(zi,0,gi),new H(0,gi,-zi),new H(0,gi,zi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,ho,fo),this._renderer.xr.enabled=po,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Us,format:nn,colorSpace:kt,depthBuffer:!1},s=Xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(r)),this._blurMaterial=Cm(r,e,t)}return s}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,s){const o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor($l),d.toneMapping=si,d.autoClear=!1;const f=new yi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new He(new ht,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy($l),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;or(s,y*b,p>2?b:0,b,b),d.setRenderTarget(s),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ji||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wl[(s-r-1)%Wl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new He(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_i-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let y=0;for(let R=0;R<_i;++R){const L=R/v,E=Math.exp(-L*L/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const S=this._sizeLods[s],A=3*S*(s>b-Gi?s-b+Gi:0),I=4*(this._cubeSize-S);or(t,A,I,3*S,2*S),l.setRenderTarget(t),l.render(u,co)}}function Rm(i){const e=[],t=[],n=[];let s=i;const r=i-Gi+1+Gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Gi?l=Gl[a-i+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let I=0;I<f;I++){const R=I%3*2/3-1,L=I>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(E,v*g*I),b.set(h,m*g*I);const w=[I,I,I,I,I,I];S.set(w,p*g*I)}const A=new Ht;A.setAttribute("position",new Ut(y,v)),A.setAttribute("uv",new Ut(b,m)),A.setAttribute("faceIndex",new Ut(S,p)),e.push(A),s>Gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xl(i,e,t){const n=new Si(i,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cm(i,e,t){const n=new Float32Array(_i),s=new H(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ql(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Im(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Go,d=l===Ji||l===Qi;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new jl(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new jl(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pm(i,e,t,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let b=0,S=y.length;b<S;b+=3){const A=y[b+0],I=y[b+1],R=y[b+2];h.push(A,I,I,R,R,A)}}else if(g!==void 0){const y=g.array;v=g.version;for(let b=0,S=y.length/3-1;b<S;b+=3){const A=b+0,I=b+1,R=b+2;h.push(A,I,I,R,R,A)}}else return;const m=new(Su(h)?Ru:Au)(h,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Lm(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Om(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,e,t){const n=new WeakMap,s=new Qe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let w=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*I*4*u),L=new Eu(R,A,I,u);L.type=dn,L.needsUpdate=!0;const E=S*4;for(let U=0;U<u;U++){const C=p[U],N=y[U],M=b[U],F=A*I*4*U;for(let ee=0;ee<C.count;ee++){const G=ee*E;g===!0&&(s.fromBufferAttribute(C,ee),R[F+G+0]=s.x,R[F+G+1]=s.y,R[F+G+2]=s.z,R[F+G+3]=0),v===!0&&(s.fromBufferAttribute(N,ee),R[F+G+4]=s.x,R[F+G+5]=s.y,R[F+G+6]=s.z,R[F+G+7]=0),m===!0&&(s.fromBufferAttribute(M,ee),R[F+G+8]=s.x,R[F+G+9]=s.y,R[F+G+10]=s.z,R[F+G+11]=M.itemSize===4?s.w:1)}}h={count:u,texture:L,size:new ke(A,I)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Um(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Lu extends wt{constructor(e,t,n,s,r,a,o,l,c,d=Xi){if(d!==Xi&&d!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Xi&&(n=xi),n===void 0&&d===ns&&(n=ts),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ou=new wt,Kl=new Lu(1,1),Nu=new Eu,Uu=new xh,ku=new Du,Zl=[],Jl=[],Ql=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kr(i,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),St(t,n)}}function Hm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),St(t,n)}}function Gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),St(t,n)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=bu,r=Kl):r=Ou,t.setTexture2D(e||r,s)}function Qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uu,s)}function eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ku,s)}function tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nu,s)}function ng(i){switch(i){case 5126:return km;case 35664:return Fm;case 35665:return Bm;case 35666:return zm;case 35674:return Vm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return $m;case 35667:case 35671:return Wm;case 35668:case 35672:return jm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}function ig(i,e){i.uniform1fv(this.addr,e)}function sg(i,e){const t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function rg(i,e){const t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function og(i,e){const t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function ag(i,e){const t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lg(i,e){const t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cg(i,e){const t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ug(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function fg(i,e){i.uniform4iv(this.addr,e)}function pg(i,e){i.uniform1uiv(this.addr,e)}function mg(i,e){i.uniform2uiv(this.addr,e)}function gg(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function _g(i,e,t){const n=this.cache,s=e.length,r=kr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ou,r[a])}function yg(i,e,t){const n=this.cache,s=e.length,r=kr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uu,r[a])}function bg(i,e,t){const n=this.cache,s=e.length,r=kr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ku,r[a])}function xg(i,e,t){const n=this.cache,s=e.length,r=kr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nu,r[a])}function Sg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return hg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ng(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}}class wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function nc(i,e){i.seq.push(e),i.map[e.id]=e}function Tg(i,e,t){const n=i.name,s=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),a=mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nc(t,c===void 0?new Mg(o,i,e):new Eg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wg(o),nc(t,u)),t=u}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Tg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ic(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ag=37297;let Rg=0;function Cg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sc=new We;function Ig(i){Ze._getMatrix(sc,Ze.workingColorSpace,i);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ur:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cg(i.getShaderSource(e),a)}else return s}function Dg(i,e){const t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,e){let t;switch(e){case Pd:t="Linear";break;case Ld:t="Reinhard";break;case Od:t="Cineon";break;case ou:t="ACESFilmic";break;case Ud:t="AgX";break;case kd:t="Neutral";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ar=new H;function Lg(){Ze.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),e=ar.y.toFixed(4),t=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Ng(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ts(i){return i!==""}function oc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(kg,Bg)}const Fg=new Map;function Bg(i,e){let t=Xe[e];if(t===void 0){const n=Fg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(zg,Vg)}function Vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Gg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $g(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Id:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function jg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hg(t),c=Gg(t),d=$g(t),u=Wg(t),h=jg(t),f=Og(t),g=Ng(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Xe.tonemapping_pars_fragment:"",t.toneMapping!==si?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=_a(a),a=oc(a,t),a=ac(a,t),o=_a(o),o=oc(o,t),o=ac(o,t),a=lc(a),o=lc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+m+a,S=y+p+o,A=ic(s,s.VERTEX_SHADER,b),I=ic(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,I),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(U){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(A).trim(),M=s.getShaderInfoLog(I).trim();let F=!0,ee=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,I);else{const G=rc(s,A,"vertex"),Z=rc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+C+`
`+G+`
`+Z)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||M==="")&&(ee=!1);ee&&(U.diagnostics={runnable:F,programLog:C,vertexShader:{log:N,prefix:m},fragmentShader:{log:M,prefix:p}})}s.deleteShader(A),s.deleteShader(I),L=new Rr(s,v),E=Ug(s,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,Ag)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=I,this}let qg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kg(e),t.set(e,n)),n}}class Kg{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}}function Zg(i,e,t,n,s,r,a){const o=new wu,l=new Yg,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,w,U,C,N){const M=C.fog,F=N.geometry,ee=E.isMeshStandardMaterial?C.environment:null,G=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),Z=G&&G.mapping===Nr?G.image.height:null,Q=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,B=ae!==void 0?ae.length:0;let V=0;F.morphAttributes.position!==void 0&&(V=1),F.morphAttributes.normal!==void 0&&(V=2),F.morphAttributes.color!==void 0&&(V=3);let ge,$,te,ve;if(Q){const nt=mn[Q];ge=nt.vertexShader,$=nt.fragmentShader}else ge=E.vertexShader,$=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const he=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,Oe=!!E.map,Ue=!!E.matcap,Ke=!!G,_=!!E.aoMap,re=!!E.lightMap,K=!!E.bumpMap,O=!!E.normalMap,P=!!E.displacementMap,z=!!E.emissiveMap,ne=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,k=E.clearcoat>0,X=E.dispersion>0,W=E.iridescence>0,J=E.sheen>0,fe=E.transmission>0,ce=x&&!!E.anisotropyMap,_e=k&&!!E.clearcoatMap,Fe=k&&!!E.clearcoatNormalMap,ue=k&&!!E.clearcoatRoughnessMap,xe=W&&!!E.iridescenceMap,de=W&&!!E.iridescenceThicknessMap,Pe=J&&!!E.sheenColorMap,Ee=J&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ve=!!E.specularColorMap,rt=!!E.specularIntensityMap,j=fe&&!!E.transmissionMap,Se=fe&&!!E.thicknessMap,oe=!!E.gradientMap,le=!!E.alphaMap,Me=E.alphaTest>0,we=!!E.alphaHash,Ge=!!E.extensions;let gt=si;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ct={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:ge,fragmentShader:$,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:kt,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:Ue,envMap:Ke,envMapMode:Ke&&G.mapping,envMapCubeUVHeight:Z,aoMap:_,lightMap:re,bumpMap:K,normalMap:O,displacementMap:h&&P,emissiveMap:z,normalMapObjectSpace:O&&E.normalMapType===Gd,normalMapTangentSpace:O&&E.normalMapType===yu,metalnessMap:ne,roughnessMap:T,anisotropy:x,anisotropyMap:ce,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ue,dispersion:X,iridescence:W,iridescenceMap:xe,iridescenceThicknessMap:de,sheen:J,sheenColorMap:Pe,sheenRoughnessMap:Ee,specularMap:Be,specularColorMap:Ve,specularIntensityMap:rt,transmission:fe,transmissionMap:j,thicknessMap:Se,gradientMap:oe,opaque:E.transparent===!1&&E.blending===ji&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:Me,alphaHash:we,combine:E.combine,mapUv:Oe&&v(E.map.channel),aoMapUv:_&&v(E.aoMap.channel),lightMapUv:re&&v(E.lightMap.channel),bumpMapUv:K&&v(E.bumpMap.channel),normalMapUv:O&&v(E.normalMap.channel),displacementMapUv:P&&v(E.displacementMap.channel),emissiveMapUv:z&&v(E.emissiveMap.channel),metalnessMapUv:ne&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ce&&v(E.anisotropyMap.channel),clearcoatMapUv:_e&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(E.sheenRoughnessMap.channel),specularMapUv:Be&&v(E.specularMap.channel),specularColorMapUv:Ve&&v(E.specularColorMap.channel),specularIntensityMapUv:rt&&v(E.specularIntensityMap.channel),transmissionMapUv:j&&v(E.transmissionMap.channel),thicknessMapUv:Se&&v(E.thicknessMap.channel),alphaMapUv:le&&v(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(O||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Oe||le),fog:!!M,useFog:E.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:z&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)w.push(U),w.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(y(w,E),b(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function y(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function b(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const w=g[E.type];let U;if(w){const C=mn[w];U=Lh.clone(C.uniforms)}else U=E.uniforms;return U}function A(E,w){let U;for(let C=0,N=d.length;C<N;C++){const M=d[C];if(M.cacheKey===w){U=M,++U.usedTimes;break}}return U===void 0&&(U=new Xg(i,w,E,r),d.push(U)),U}function I(E){if(--E.usedTimes===0){const w=d.indexOf(E);d[w]=d[d.length-1],d.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:I,releaseShaderCache:R,programs:d,dispose:L}}function Jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,h,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Qg),n.length>1&&n.sort(h||uc),s.length>1&&s.sort(h||uc)}function d(){for(let u=e,h=i.length;u<h;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function ev(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new dc,i.set(n,[a])):s>=r.length?(a=new dc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Le};break;case"SpotLight":t={position:new H,direction:new H,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function nv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iv=0;function sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rv(i){const e=new tv,t=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new je,a=new je;function o(c){let d=0,u=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,b=0,S=0,A=0,I=0,R=0;c.sort(sv);for(let E=0,w=c.length;E<w;E++){const U=c[E],C=U.color,N=U.intensity,M=U.distance,F=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=C.r*N,u+=C.g*N,h+=C.b*N;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(U.sh.coefficients[ee],N);R++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,Z=t.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=U.shadow.matrix,y++}n.directional[f]=ee,f++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(C).multiplyScalar(N),ee.distance=M,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,n.spot[v]=ee;const G=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,G.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[v]=G.matrix,U.castShadow){const Z=t.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=F,S++}v++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(C).multiplyScalar(N),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=ee,m++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const G=U.shadow,Z=t.get(U);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=U.shadow.matrix,b++}n.point[g]=ee,g++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(N),ee.groundColor.copy(U.groundColor).multiplyScalar(N),n.hemi[p]=ee,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-I,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=R,n.version=iv++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function hc(i){const e=new rv(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ov(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new hc(i),e.set(s,[o])):r>=a.length?(o=new hc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class av extends yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dv(i,e,t){let n=new Ua;const s=new ke,r=new ke,a=new Qe,o=new av({depthPacking:Hd}),l=new lv,c={},d=t.maxTextureSize,u={[zn]:Vt,[Vt]:zn,[_n]:_n},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:cv,fragmentShader:uv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ii),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const N=p!==Ln&&this.type===Ln,M=p===Ln&&this.type!==Ln;for(let F=0,ee=I.length;F<ee;F++){const G=I[F],Z=G.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const Q=Z.getFrameExtents();if(s.multiply(Q),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,Z.mapSize.y=r.y)),Z.map===null||N===!0||M===!0){const B=this.type!==Ln?{minFilter:Nt,magFilter:Nt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Si(s.x,s.y,B),Z.map.texture.name=G.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const ae=Z.getViewportCount();for(let B=0;B<ae;B++){const V=Z.getViewport(B);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),C.viewport(a),Z.updateMatrices(G,B),n=Z.getFrustum(),S(R,L,Z.camera,G,this.type)}Z.isPointLightShadow!==!0&&this.type===Ln&&y(Z,L),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,U)};function y(I,R){const L=e.update(v);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Si(s.x,s.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,L,h,v,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,L,f,v,null)}function b(I,R,L,E){let w=null;const U=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const C=w.uuid,N=R.uuid;let M=c[C];M===void 0&&(M={},c[C]=M);let F=M[N];F===void 0&&(F=w.clone(),M[N]=F,R.addEventListener("dispose",A)),w=F}if(w.visible=R.visible,w.wireframe=R.wireframe,E===Ln?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=L}return w}function S(I,R,L,E,w){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ln)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const N=e.update(I),M=I.material;if(Array.isArray(M)){const F=N.groups;for(let ee=0,G=F.length;ee<G;ee++){const Z=F[ee],Q=M[Z.materialIndex];if(Q&&Q.visible){const ae=b(I,Q,E,w);I.onBeforeShadow(i,I,R,L,N,ae,Z),i.renderBufferDirect(L,null,N,ae,I,Z),I.onAfterShadow(i,I,R,L,N,ae,Z)}}}else if(M.visible){const F=b(I,M,E,w);I.onBeforeShadow(i,I,R,L,N,F,null),i.renderBufferDirect(L,null,N,F,I,null),I.onAfterShadow(i,I,R,L,N,F,null)}}const C=I.children;for(let N=0,M=C.length;N<M;N++)S(C[N],R,L,E,w)}function A(I){I.target.removeEventListener("dispose",A);for(const L in c){const E=c[L],w=I.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const hv={[No]:Uo,[ko]:zo,[Fo]:Vo,[Zi]:Bo,[Uo]:No,[zo]:ko,[Vo]:Fo,[Bo]:Zi};function fv(i,e){function t(){let j=!1;const Se=new Qe;let oe=null;const le=new Qe(0,0,0,0);return{setMask:function(Me){oe!==Me&&!j&&(i.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){j=Me},setClear:function(Me,we,Ge,gt,Ct){Ct===!0&&(Me*=gt,we*=gt,Ge*=gt),Se.set(Me,we,Ge,gt),le.equals(Se)===!1&&(i.clearColor(Me,we,Ge,gt),le.copy(Se))},reset:function(){j=!1,oe=null,le.set(-1,0,0,0)}}}function n(){let j=!1,Se=!1,oe=null,le=null,Me=null;return{setReversed:function(we){if(Se!==we){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const gt=Me;Me=null,this.setClear(gt)}Se=we},getReversed:function(){return Se},setTest:function(we){we?he(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(we){oe!==we&&!j&&(i.depthMask(we),oe=we)},setFunc:function(we){if(Se&&(we=hv[we]),le!==we){switch(we){case No:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=we}},setLocked:function(we){j=we},setClear:function(we){Me!==we&&(Se&&(we=1-we),i.clearDepth(we),Me=we)},reset:function(){j=!1,oe=null,le=null,Me=null,Se=!1}}}function s(){let j=!1,Se=null,oe=null,le=null,Me=null,we=null,Ge=null,gt=null,Ct=null;return{setTest:function(nt){j||(nt?he(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(nt){Se!==nt&&!j&&(i.stencilMask(nt),Se=nt)},setFunc:function(nt,sn,wn){(oe!==nt||le!==sn||Me!==wn)&&(i.stencilFunc(nt,sn,wn),oe=nt,le=sn,Me=wn)},setOp:function(nt,sn,wn){(we!==nt||Ge!==sn||gt!==wn)&&(i.stencilOp(nt,sn,wn),we=nt,Ge=sn,gt=wn)},setLocked:function(nt){j=nt},setClear:function(nt){Ct!==nt&&(i.clearStencil(nt),Ct=nt)},reset:function(){j=!1,Se=null,oe=null,le=null,Me=null,we=null,Ge=null,gt=null,Ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,S=null,A=null,I=null,R=new Le(0,0,0),L=0,E=!1,w=null,U=null,C=null,N=null,M=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,G=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ee=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ee=G>=2);let Q=null,ae={};const B=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),ge=new Qe().fromArray(B),$=new Qe().fromArray(V);function te(j,Se,oe,le){const Me=new Uint8Array(4),we=i.createTexture();i.bindTexture(j,we),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<oe;Ge++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Se+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return we}const ve={};ve[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Zi),K(!1),O(hl),he(i.CULL_FACE),_(ii);function he(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function pe(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function ye(j,Se){return u[j]!==Se?(i.bindFramebuffer(j,Se),u[j]=Se,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ae(j,Se){let oe=f,le=!1;if(j){oe=h.get(Se),oe===void 0&&(oe=[],h.set(Se,oe));const Me=j.textures;if(oe.length!==Me.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ge=Me.length;we<Ge;we++)oe[we]=i.COLOR_ATTACHMENT0+we;oe.length=Me.length,le=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,le=!0);le&&i.drawBuffers(oe)}function Oe(j){return g!==j?(i.useProgram(j),g=j,!0):!1}const Ue={[vi]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};Ue[md]=i.MIN,Ue[gd]=i.MAX;const Ke={[vd]:i.ZERO,[_d]:i.ONE,[yd]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[wd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[xd]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Rd]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function _(j,Se,oe,le,Me,we,Ge,gt,Ct,nt){if(j===ii){v===!0&&(pe(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),j!==hd){if(j!==m||nt!==E){if((p!==vi||S!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,S=vi),nt)switch(j){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,b=null,A=null,I=null,R.set(0,0,0),L=0,m=j,E=nt}return}Me=Me||Se,we=we||oe,Ge=Ge||le,(Se!==p||Me!==S)&&(i.blendEquationSeparate(Ue[Se],Ue[Me]),p=Se,S=Me),(oe!==y||le!==b||we!==A||Ge!==I)&&(i.blendFuncSeparate(Ke[oe],Ke[le],Ke[we],Ke[Ge]),y=oe,b=le,A=we,I=Ge),(gt.equals(R)===!1||Ct!==L)&&(i.blendColor(gt.r,gt.g,gt.b,Ct),R.copy(gt),L=Ct),m=j,E=!1}function re(j,Se){j.side===_n?pe(i.CULL_FACE):he(i.CULL_FACE);let oe=j.side===Vt;Se&&(oe=!oe),K(oe),j.blending===ji&&j.transparent===!1?_(ii):_(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);const le=j.stencilWrite;o.setTest(le),le&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(j){w!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),w=j)}function O(j){j!==ud?(he(i.CULL_FACE),j!==U&&(j===hl?i.cullFace(i.BACK):j===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),U=j}function P(j){j!==C&&(ee&&i.lineWidth(j),C=j)}function z(j,Se,oe){j?(he(i.POLYGON_OFFSET_FILL),(N!==Se||M!==oe)&&(i.polygonOffset(Se,oe),N=Se,M=oe)):pe(i.POLYGON_OFFSET_FILL)}function ne(j){j?he(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function T(j){j===void 0&&(j=i.TEXTURE0+F-1),Q!==j&&(i.activeTexture(j),Q=j)}function x(j,Se,oe){oe===void 0&&(Q===null?oe=i.TEXTURE0+F-1:oe=Q);let le=ae[oe];le===void 0&&(le={type:void 0,texture:void 0},ae[oe]=le),(le.type!==j||le.texture!==Se)&&(Q!==oe&&(i.activeTexture(oe),Q=oe),i.bindTexture(j,Se||ve[j]),le.type=j,le.texture=Se)}function k(){const j=ae[Q];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(j){ge.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),ge.copy(j))}function Ee(j){$.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function Be(j,Se){let oe=c.get(Se);oe===void 0&&(oe=new WeakMap,c.set(Se,oe));let le=oe.get(j);le===void 0&&(le=i.getUniformBlockIndex(Se,j.name),oe.set(j,le))}function Ve(j,Se){const le=c.get(Se).get(j);l.get(Se)!==le&&(i.uniformBlockBinding(Se,le,j.__bindingPointIndex),l.set(Se,le))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ae={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,b=null,S=null,A=null,I=null,R=new Le(0,0,0),L=0,E=!1,w=null,U=null,C=null,N=null,M=null,ge.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:pe,bindFramebuffer:ye,drawBuffers:Ae,useProgram:Oe,setBlending:_,setMaterial:re,setFlipSided:K,setCullFace:O,setLineWidth:P,setPolygonOffset:z,setScissorTest:ne,activeTexture:T,bindTexture:x,unbindTexture:k,compressedTexImage2D:X,compressedTexImage3D:W,texImage2D:xe,texImage3D:de,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Fe,texStorage3D:ue,texSubImage2D:J,texSubImage3D:fe,compressedTexSubImage2D:ce,compressedTexSubImage3D:_e,scissor:Pe,viewport:Ee,reset:rt}}function fc(i,e,t,n){const s=pv(n);switch(t){case hu:return i*e;case pu:return i*e;case mu:return i*e*2;case Da:return i*e/s.components*s.byteLength;case Pa:return i*e/s.components*s.byteLength;case gu:return i*e*2/s.components*s.byteLength;case La:return i*e*2/s.components*s.byteLength;case fu:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Oa:return i*e*4/s.components*s.byteLength;case Mr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:case Xo:return Math.max(i,16)*Math.max(e,8)/4;case $o:case jo:return Math.max(i,8)*Math.max(e,8)/2;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ar:case da:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vu:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pv(i){switch(i){case Vn:case cu:return{byteLength:1,components:1};case Is:case uu:case Us:return{byteLength:2,components:1};case Ca:case Ia:return{byteLength:2,components:4};case xi:case Ra:case dn:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ls("canvas")}function v(T,x,k){let X=1;const W=ne(T);if((W.width>k||W.height>k)&&(X=k/Math.max(W.width,W.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(X*W.width),fe=Math.floor(X*W.height);u===void 0&&(u=g(J,fe));const ce=x?g(J,fe):u;return ce.width=J,ce.height=fe,ce.getContext("2d").drawImage(T,0,0,J,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+J+"x"+fe+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,k,X,W=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const fe=W?Ur:Ze.getTransfer(X);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=fe===ot?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(T,x){let k;return T?x===null||x===xi||x===ts?k=i.DEPTH24_STENCIL8:x===dn?k=i.DEPTH32F_STENCIL8:x===Is&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xi||x===ts?k=i.DEPTH_COMPONENT24:x===dn?k=i.DEPTH_COMPONENT32F:x===Is&&(k=i.DEPTH_COMPONENT16),k}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){const x=T.target;x.removeEventListener("dispose",I),L(x),x.isVideoTexture&&d.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),w(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const k=T.source,X=h.get(k);if(X){const W=X[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&E(T),Object.keys(X).length===0&&h.delete(k)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const k=T.source,X=h.get(k);delete X[x.__cacheKey],a.memory.textures--}function w(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let W=0;W<x.__webglFramebuffer[X].length;W++)i.deleteFramebuffer(x.__webglFramebuffer[X][W]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let X=0,W=k.length;X<W;X++){const J=n.get(k[X]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(T)}let U=0;function C(){U=0}function N(){const T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function M(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function F(T,x){const k=n.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function ee(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function G(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function Z(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){te(k,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const Q={[es]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ae={[Nt]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},B={[$d]:i.NEVER,[Kd]:i.ALWAYS,[Wd]:i.LESS,[bu]:i.LEQUAL,[jd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function V(T,x){if(x.type===dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===Sr||x.magFilter===Es||x.magFilter===Nn||x.minFilter===Yt||x.minFilter===Sr||x.minFilter===Es||x.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,B[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Es&&x.minFilter!==Nn||x.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ge(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const X=x.source;let W=h.get(X);W===void 0&&(W={},h.set(X,W));const J=M(x);if(J!==T.__cacheKey){W[J]===void 0&&(W[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),W[J].usedTimes++;const fe=W[T.__cacheKey];fe!==void 0&&(W[T.__cacheKey].usedTimes--,fe.usedTimes===0&&E(x)),T.__cacheKey=J,T.__webglTexture=W[J].texture}return k}function $(T,x,k){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const W=ge(T,x),J=x.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+k);const fe=n.get(J);if(J.version!==fe.__version||W===!0){t.activeTexture(i.TEXTURE0+k);const ce=Ze.getPrimaries(Ze.workingColorSpace),_e=x.colorSpace===Qn?null:Ze.getPrimaries(x.colorSpace),Fe=x.colorSpace===Qn||ce===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ue=v(x.image,!1,s.maxTextureSize);ue=z(x,ue);const xe=r.convert(x.format,x.colorSpace),de=r.convert(x.type);let Pe=b(x.internalFormat,xe,de,x.colorSpace,x.isVideoTexture);V(X,x);let Ee;const Be=x.mipmaps,Ve=x.isVideoTexture!==!0,rt=fe.__version===void 0||W===!0,j=J.dataReady,Se=A(x,ue);if(x.isDepthTexture)Pe=S(x.format===ns,x.type),rt&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Pe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,xe,de,null));else if(x.isDataTexture)if(Be.length>0){Ve&&rt&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Be[0].width,Be[0].height);for(let oe=0,le=Be.length;oe<le;oe++)Ee=Be[oe],Ve?j&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,xe,de,Ee.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ee.width,Ee.height,0,xe,de,Ee.data);x.generateMipmaps=!1}else Ve?(rt&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,ue.width,ue.height),j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,xe,de,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ue.width,ue.height,0,xe,de,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,Be[0].width,Be[0].height,ue.depth);for(let oe=0,le=Be.length;oe<le;oe++)if(Ee=Be[oe],x.format!==nn)if(xe!==null)if(Ve){if(j)if(x.layerUpdates.size>0){const Me=fc(Ee.width,Ee.height,x.format,x.type);for(const we of x.layerUpdates){const Ge=Ee.data.subarray(we*Me/Ee.data.BYTES_PER_ELEMENT,(we+1)*Me/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,we,Ee.width,Ee.height,1,xe,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ue.depth,xe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ue.depth,xe,de,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ee.width,Ee.height,ue.depth,0,xe,de,Ee.data)}else{Ve&&rt&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Be[0].width,Be[0].height);for(let oe=0,le=Be.length;oe<le;oe++)Ee=Be[oe],x.format!==nn?xe!==null?Ve?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?j&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,xe,de,Ee.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ee.width,Ee.height,0,xe,de,Ee.data)}else if(x.isDataArrayTexture)if(Ve){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,ue.width,ue.height,ue.depth),j)if(x.layerUpdates.size>0){const oe=fc(ue.width,ue.height,x.format,x.type);for(const le of x.layerUpdates){const Me=ue.data.subarray(le*oe/ue.data.BYTES_PER_ELEMENT,(le+1)*oe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,xe,de,Me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,xe,de,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,xe,de,ue.data);else if(x.isData3DTexture)Ve?(rt&&t.texStorage3D(i.TEXTURE_3D,Se,Pe,ue.width,ue.height,ue.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,xe,de,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,xe,de,ue.data);else if(x.isFramebufferTexture){if(rt)if(Ve)t.texStorage2D(i.TEXTURE_2D,Se,Pe,ue.width,ue.height);else{let oe=ue.width,le=ue.height;for(let Me=0;Me<Se;Me++)t.texImage2D(i.TEXTURE_2D,Me,Pe,oe,le,0,xe,de,null),oe>>=1,le>>=1}}else if(Be.length>0){if(Ve&&rt){const oe=ne(Be[0]);t.texStorage2D(i.TEXTURE_2D,Se,Pe,oe.width,oe.height)}for(let oe=0,le=Be.length;oe<le;oe++)Ee=Be[oe],Ve?j&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe,de,Ee):t.texImage2D(i.TEXTURE_2D,oe,Pe,xe,de,Ee);x.generateMipmaps=!1}else if(Ve){if(rt){const oe=ne(ue);t.texStorage2D(i.TEXTURE_2D,Se,Pe,oe.width,oe.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,de,ue)}else t.texImage2D(i.TEXTURE_2D,0,Pe,xe,de,ue);m(x)&&p(X),fe.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function te(T,x,k){if(x.image.length!==6)return;const X=ge(T,x),W=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const J=n.get(W);if(W.version!==J.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const fe=Ze.getPrimaries(Ze.workingColorSpace),ce=x.colorSpace===Qn?null:Ze.getPrimaries(x.colorSpace),_e=x.colorSpace===Qn||fe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Fe&&!ue?xe[le]=v(x.image[le],!0,s.maxCubemapSize):xe[le]=ue?x.image[le].image:x.image[le],xe[le]=z(x,xe[le]);const de=xe[0],Pe=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Be=b(x.internalFormat,Pe,Ee,x.colorSpace),Ve=x.isVideoTexture!==!0,rt=J.__version===void 0||X===!0,j=W.dataReady;let Se=A(x,de);V(i.TEXTURE_CUBE_MAP,x);let oe;if(Fe){Ve&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Be,de.width,de.height);for(let le=0;le<6;le++){oe=xe[le].mipmaps;for(let Me=0;Me<oe.length;Me++){const we=oe[Me];x.format!==nn?Pe!==null?Ve?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,we.width,we.height,Pe,Ee,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,Be,we.width,we.height,0,Pe,Ee,we.data)}}}else{if(oe=x.mipmaps,Ve&&rt){oe.length>0&&Se++;const le=ne(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Be,le.width,le.height)}for(let le=0;le<6;le++)if(ue){Ve?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Pe,Ee,xe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,xe[le].width,xe[le].height,0,Pe,Ee,xe[le].data);for(let Me=0;Me<oe.length;Me++){const Ge=oe[Me].image[le].image;Ve?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Ge.width,Ge.height,Pe,Ee,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Be,Ge.width,Ge.height,0,Pe,Ee,Ge.data)}}else{Ve?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,Ee,xe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Pe,Ee,xe[le]);for(let Me=0;Me<oe.length;Me++){const we=oe[Me];Ve?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Pe,Ee,we.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,Be,Pe,Ee,we.image[le])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ve(T,x,k,X,W,J){const fe=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),_e=b(k.internalFormat,fe,ce,k.colorSpace),Fe=n.get(x),ue=n.get(k);if(ue.__renderTarget=x,!Fe.__hasExternalTextures){const xe=Math.max(1,x.width>>J),de=Math.max(1,x.height>>J);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,J,_e,xe,de,x.depth,0,fe,ce,null):t.texImage2D(W,J,_e,xe,de,0,fe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),O(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,W,ue.__webglTexture,0,K(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,W,ue.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(T,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,W=X&&X.isDepthTexture?X.type:null,J=S(x.stencilBuffer,W),fe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=K(x);O(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,T)}else{const X=x.textures;for(let W=0;W<X.length;W++){const J=X[W],fe=r.convert(J.format,J.colorSpace),ce=r.convert(J.type),_e=b(J.internalFormat,fe,ce,J.colorSpace),Fe=K(x);k&&O(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,_e,x.width,x.height):O(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,_e,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_e,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const W=X.__webglTexture,J=K(x);if(x.depthTexture.format===Xi)O(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(x.depthTexture.format===ns)O(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function ye(T){const x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",W)};X.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),he(x.__webglDepthbuffer[X],T,!1);else{const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),he(x.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,W)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,x,k){const X=n.get(T);x!==void 0&&ve(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ye(T)}function Oe(T){const x=T.texture,k=n.get(T),X=n.get(x);T.addEventListener("dispose",R);const W=T.textures,J=T.isWebGLCubeRenderTarget===!0,fe=W.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let _e=0;_e<x.mipmaps.length;_e++)k.__webglFramebuffer[ce][_e]=i.createFramebuffer()}else k.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)k.__webglFramebuffer[ce]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ce=0,_e=W.length;ce<_e;ce++){const Fe=n.get(W[ce]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&O(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<W.length;ce++){const _e=W[ce];k.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Fe=r.convert(_e.format,_e.colorSpace),ue=r.convert(_e.type),xe=b(_e.internalFormat,Fe,ue,_e.colorSpace,T.isXRRenderTarget===!0),de=K(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),he(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),V(i.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ve(k.__webglFramebuffer[ce][_e],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else ve(k.__webglFramebuffer[ce],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ce=0,_e=W.length;ce<_e;ce++){const Fe=W[ce],ue=n.get(Fe);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),V(i.TEXTURE_2D,Fe),ve(k.__webglFramebuffer,T,Fe,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Fe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),V(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ve(k.__webglFramebuffer[_e],T,x,i.COLOR_ATTACHMENT0,ce,_e);else ve(k.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}T.depthBuffer&&ye(T)}function Ue(T){const x=T.textures;for(let k=0,X=x.length;k<X;k++){const W=x[k];if(m(W)){const J=y(T),fe=n.get(W).__webglTexture;t.bindTexture(J,fe),p(J),t.unbindTexture()}}}const Ke=[],_=[];function re(T){if(T.samples>0){if(O(T)===!1){const x=T.textures,k=T.width,X=T.height;let W=i.COLOR_BUFFER_BIT;const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(T),ce=x.length>1;if(ce)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Fe=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,W,i.NEAREST),l===!0&&(Ke.length=0,_.length=0,Ke.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ke.push(J),_.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Fe=n.get(x[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function K(T){return Math.min(s.maxSamples,T.samples)}function O(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function z(T,x){const k=T.colorSpace,X=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==kt&&k!==Qn&&(Ze.getTransfer(k)===ot?(X!==nn||W!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=ee,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Ae,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=O}function gv(i,e){function t(n,s=Qn){let r;const a=Ze.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===uu)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===fu)return i.RGB;if(n===nn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===Mr||n===Er||n===wr||n===Tr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Wo||n===jo||n===Xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Yo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===Jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===da||n===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===fa||n===pa||n===ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class vv extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:yv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sv extends wi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=new xv,m=t.getContextAttributes();let p=null,y=null;const b=[],S=[],A=new ke;let I=null;const R=new Ot;R.viewport=new Qe;const L=new Ot;L.viewport=new Qe;const E=[R,L],w=new vv;let U=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=b[$];return te===void 0&&(te=new go,b[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=b[$];return te===void 0&&(te=new go,b[$]=te),te.getGripSpace()},this.getHand=function($){let te=b[$];return te===void 0&&(te=new go,b[$]=te),te.getHandSpace()};function N($){const te=S.indexOf($.inputSource);if(te===-1)return;const ve=b[te];ve!==void 0&&(ve.update($.inputSource,$.frame,c||a),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function M(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",M),s.removeEventListener("inputsourceschange",F);for(let $=0;$<b.length;$++){const te=S[$];te!==null&&(S[$]=null,b[$].disconnect(te))}U=null,C=null,v.reset(),e.setRenderTarget(p),f=null,h=null,u=null,s=null,y=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",M),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Si(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ns:Xi,ve=m.stencil?ts:xi);const pe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Si(h.textureWidth,h.textureHeight,{format:nn,type:Vn,depthTexture:new Lu(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F($){for(let te=0;te<$.removed.length;te++){const ve=$.removed[te],he=S.indexOf(ve);he>=0&&(S[he]=null,b[he].disconnect(ve))}for(let te=0;te<$.added.length;te++){const ve=$.added[te];let he=S.indexOf(ve);if(he===-1){for(let ye=0;ye<b.length;ye++)if(ye>=S.length){S.push(ve),he=ye;break}else if(S[ye]===null){S[ye]=ve,he=ye;break}if(he===-1)break}const pe=b[he];pe&&pe.connect(ve)}}const ee=new H,G=new H;function Z($,te,ve){ee.setFromMatrixPosition(te.matrixWorld),G.setFromMatrixPosition(ve.matrixWorld);const he=ee.distanceTo(G),pe=te.projectionMatrix.elements,ye=ve.projectionMatrix.elements,Ae=pe[14]/(pe[10]-1),Oe=pe[14]/(pe[10]+1),Ue=(pe[9]+1)/pe[5],Ke=(pe[9]-1)/pe[5],_=(pe[8]-1)/pe[0],re=(ye[8]+1)/ye[0],K=Ae*_,O=Ae*re,P=he/(-_+re),z=P*-_;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(z),$.translateZ(P),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),pe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ne=Ae+P,T=Oe+P,x=K-z,k=O+(he-z),X=Ue*Oe/T*ne,W=Ke*Oe/T*ne;$.projectionMatrix.makePerspective(x,k,X,W,ne,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,ve=$.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),w.near=L.near=R.near=te,w.far=L.far=R.far=ve,(U!==w.near||C!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,C=w.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,w.layers.mask=R.layers.mask|L.layers.mask;const he=$.parent,pe=w.cameras;Q(w,he);for(let ye=0;ye<pe.length;ye++)Q(pe[ye],he);pe.length===2?Z(w,R,L):w.projectionMatrix.copy(R.projectionMatrix),ae($,w,he)};function ae($,te,ve){ve===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=is*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let B=null;function V($,te){if(d=te.getViewerPose(c||a),g=te,d!==null){const ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let ye=0;ye<ve.length;ye++){const Ae=ve[ye];let Oe=null;if(f!==null)Oe=f.getViewport(Ae);else{const Ke=u.getViewSubImage(h,Ae);Oe=Ke.viewport,ye===0&&(e.setRenderTargetTextures(y,Ke.colorTexture,h.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(y))}let Ue=E[ye];Ue===void 0&&(Ue=new Ot,Ue.layers.enable(ye),Ue.viewport=new Qe,E[ye]=Ue),Ue.matrix.fromArray(Ae.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ae.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ye===0&&(w.matrix.copy(Ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(Ue)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const ye=u.getDepthInformation(ve[0]);ye&&ye.isValid&&ye.texture&&v.init(e,ye,s.renderState)}}for(let ve=0;ve<b.length;ve++){const he=S[ve],pe=b[ve];he!==null&&pe!==void 0&&pe.update(he,te,c||a)}B&&B($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ge=new Pu;ge.setAnimationLoop(V),this.setAnimationLoop=function($){B=$},this.dispose=function(){}}}const pi=new xn,Mv=new je;function Ev(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,pi.copy(S),pi.x*=-1,pi.y*=-1,pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(pi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(g(y),S=d(y),s[y.id]=S,y.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(y,A);const I=e.render.frame;r[y.id]!==I&&(h(y),r[y.id]=I)}function d(y){const b=u();y.__bindingPointIndex=b;const S=i.createBuffer(),A=y.__size,I=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let I=0,R=S.length;I<R;I++){const L=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,w=L.length;E<w;E++){const U=L[E];if(f(U,I,E,A)===!0){const C=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let M=0;for(let F=0;F<N.length;F++){const ee=N[F],G=v(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,C+M,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):(ee.toArray(U.__data,M),M+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,S,A){const I=y.value,R=b+"_"+S;if(A[R]===void 0)return typeof I=="number"||typeof I=="boolean"?A[R]=I:A[R]=I.clone(),!0;{const L=A[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return A[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(y){const b=y.uniforms;let S=0;const A=16;for(let R=0,L=b.length;R<L;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,U=E.length;w<U;w++){const C=E[w],N=Array.isArray(C.value)?C.value:[C.value];for(let M=0,F=N.length;M<F;M++){const ee=N[M],G=v(ee),Z=S%A,Q=Z%G.boundary,ae=Z+Q;S+=Q,ae!==0&&A-ae<G.storage&&(S+=A-ae),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=G.storage}}}const I=S%A;return I>0&&(S+=A-I),y.__size=S,y.__cache={},this}function v(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Tv{constructor(e={}){const{canvas:t=fh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=si,this.toneMappingExposure=1;const S=this;let A=!1,I=0,R=0,L=null,E=-1,w=null;const U=new Qe,C=new Qe;let N=null;const M=new Le(0);let F=0,ee=t.width,G=t.height,Z=1,Q=null,ae=null;const B=new Qe(0,0,ee,G),V=new Qe(0,0,ee,G);let ge=!1;const $=new Ua;let te=!1,ve=!1;const he=new je,pe=new je,ye=new H,Ae=new Qe,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Ke(){return L===null?Z:1}let _=n;function re(D,q){return t.getContext(D,q)}try{const D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",we,!1),_===null){const q="webgl2";if(_=re(q,D),_===null)throw re(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let K,O,P,z,ne,T,x,k,X,W,J,fe,ce,_e,Fe,ue,xe,de,Pe,Ee,Be,Ve,rt,j;function Se(){K=new Dm(_),K.init(),Ve=new gv(_,K),O=new wm(_,K,e,Ve),P=new fv(_,K),O.reverseDepthBuffer&&h&&P.buffers.depth.setReversed(!0),z=new Om(_),ne=new Jg,T=new mv(_,K,P,ne,O,Ve,z),x=new Am(S),k=new Im(S),X=new zh(_),rt=new Mm(_,X),W=new Pm(_,X,z,rt),J=new Um(_,W,X,z),Pe=new Nm(_,O,T),ue=new Tm(ne),fe=new Zg(S,x,k,K,O,rt,ue),ce=new Ev(S,ne),_e=new ev,Fe=new ov(K),de=new Sm(S,x,k,P,J,f,l),xe=new dv(S,J,O),j=new wv(_,z,O,P),Ee=new Em(_,K,z),Be=new Lm(_,K,z),z.programs=fe.programs,S.capabilities=O,S.extensions=K,S.properties=ne,S.renderLists=_e,S.shadowMap=xe,S.state=P,S.info=z}Se();const oe=new Sv(S,_);this.xr=oe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const D=K.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=K.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(ee,G,!1))},this.getSize=function(D){return D.set(ee,G)},this.setSize=function(D,q,ie=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=D,G=q,t.width=Math.floor(D*Z),t.height=Math.floor(q*Z),ie===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(ee*Z,G*Z).floor()},this.setDrawingBufferSize=function(D,q,ie){ee=D,G=q,Z=ie,t.width=Math.floor(D*ie),t.height=Math.floor(q*ie),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(B)},this.setViewport=function(D,q,ie,se){D.isVector4?B.set(D.x,D.y,D.z,D.w):B.set(D,q,ie,se),P.viewport(U.copy(B).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(V)},this.setScissor=function(D,q,ie,se){D.isVector4?V.set(D.x,D.y,D.z,D.w):V.set(D,q,ie,se),P.scissor(C.copy(V).multiplyScalar(Z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(D){P.setScissorTest(ge=D)},this.setOpaqueSort=function(D){Q=D},this.setTransparentSort=function(D){ae=D},this.getClearColor=function(D){return D.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(D=!0,q=!0,ie=!0){let se=0;if(D){let Y=!1;if(L!==null){const me=L.texture.format;Y=me===Oa||me===La||me===Pa}if(Y){const me=L.texture.type,Te=me===Vn||me===xi||me===Is||me===ts||me===Ca||me===Ia,Re=de.getClearColor(),Ce=de.getClearAlpha(),ze=Re.r,$e=Re.g,Ie=Re.b;Te?(g[0]=ze,g[1]=$e,g[2]=Ie,g[3]=Ce,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=ze,v[1]=$e,v[2]=Ie,v[3]=Ce,_.clearBufferiv(_.COLOR,0,v))}else se|=_.COLOR_BUFFER_BIT}q&&(se|=_.DEPTH_BUFFER_BIT),ie&&(se|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",we,!1),_e.dispose(),Fe.dispose(),ne.dispose(),x.dispose(),k.dispose(),J.dispose(),rt.dispose(),j.dispose(),fe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Za),oe.removeEventListener("sessionend",Ja),oi.stop()};function le(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const D=z.autoReset,q=xe.enabled,ie=xe.autoUpdate,se=xe.needsUpdate,Y=xe.type;Se(),z.autoReset=D,xe.enabled=q,xe.autoUpdate=ie,xe.needsUpdate=se,xe.type=Y}function we(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ge(D){const q=D.target;q.removeEventListener("dispose",Ge),gt(q)}function gt(D){Ct(D),ne.remove(D)}function Ct(D){const q=ne.get(D).programs;q!==void 0&&(q.forEach(function(ie){fe.releaseProgram(ie)}),D.isShaderMaterial&&fe.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ie,se,Y,me){q===null&&(q=Oe);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Re=nd(D,q,ie,se,Y);P.setMaterial(se,Te);let Ce=ie.index,ze=1;if(se.wireframe===!0){if(Ce=W.getWireframeAttribute(ie),Ce===void 0)return;ze=2}const $e=ie.drawRange,Ie=ie.attributes.position;let Je=$e.start*ze,lt=($e.start+$e.count)*ze;me!==null&&(Je=Math.max(Je,me.start*ze),lt=Math.min(lt,(me.start+me.count)*ze)),Ce!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Ce.count)):Ie!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Ie.count));const ct=lt-Je;if(ct<0||ct===1/0)return;rt.setup(Y,se,Re,ie,Ce);let Ft,et=Ee;if(Ce!==null&&(Ft=X.get(Ce),et=Be,et.setIndex(Ft)),Y.isMesh)se.wireframe===!0?(P.setLineWidth(se.wireframeLinewidth*Ke()),et.setMode(_.LINES)):et.setMode(_.TRIANGLES);else if(Y.isLine){let De=se.linewidth;De===void 0&&(De=1),P.setLineWidth(De*Ke()),Y.isLineSegments?et.setMode(_.LINES):Y.isLineLoop?et.setMode(_.LINE_LOOP):et.setMode(_.LINE_STRIP)}else Y.isPoints?et.setMode(_.POINTS):Y.isSprite&&et.setMode(_.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)et.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const De=Y._multiDrawStarts,Tn=Y._multiDrawCounts,tt=Y._multiDrawCount,rn=Ce?X.get(Ce).bytesPerElement:1,Ti=ne.get(se).currentProgram.getUniforms();for(let Gt=0;Gt<tt;Gt++)Ti.setValue(_,"_gl_DrawID",Gt),et.render(De[Gt]/rn,Tn[Gt])}else if(Y.isInstancedMesh)et.renderInstances(Je,ct,Y.count);else if(ie.isInstancedBufferGeometry){const De=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Tn=Math.min(ie.instanceCount,De);et.renderInstances(Je,ct,Tn)}else et.render(Je,ct)};function nt(D,q,ie){D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Vt,D.needsUpdate=!0,Vs(D,q,ie),D.side=zn,D.needsUpdate=!0,Vs(D,q,ie),D.side=_n):Vs(D,q,ie)}this.compile=function(D,q,ie=null){ie===null&&(ie=D),p=Fe.get(ie),p.init(q),b.push(p),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),D!==ie&&D.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const se=new Set;return D.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const me=Y.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Re=me[Te];nt(Re,ie,Y),se.add(Re)}else nt(me,ie,Y),se.add(me)}),b.pop(),p=null,se},this.compileAsync=function(D,q,ie=null){const se=this.compile(D,q,ie);return new Promise(Y=>{function me(){if(se.forEach(function(Te){ne.get(Te).currentProgram.isReady()&&se.delete(Te)}),se.size===0){Y(D);return}setTimeout(me,10)}K.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let sn=null;function wn(D){sn&&sn(D)}function Za(){oi.stop()}function Ja(){oi.start()}const oi=new Pu;oi.setAnimationLoop(wn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(D){sn=D,oe.setAnimationLoop(D),D===null?oi.stop():oi.start()},oe.addEventListener("sessionstart",Za),oe.addEventListener("sessionend",Ja),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,q,L),p=Fe.get(D,b.length),p.init(q),b.push(p),pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(pe),ve=this.localClippingEnabled,te=ue.init(this.clippingPlanes,ve),m=_e.get(D,y.length),m.init(),y.push(m),oe.enabled===!0&&oe.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&Vr(me,q,-1/0,S.sortObjects)}Vr(D,q,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Q,ae),Ue=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ue&&de.addToRenderList(m,D),this.info.render.frame++,te===!0&&ue.beginShadows();const ie=p.state.shadowsArray;xe.render(ie,D,q),te===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){const me=q.cameras;if(Y.length>0)for(let Te=0,Re=me.length;Te<Re;Te++){const Ce=me[Te];el(se,Y,D,Ce)}Ue&&de.render(D);for(let Te=0,Re=me.length;Te<Re;Te++){const Ce=me[Te];Qa(m,D,Ce,Ce.viewport)}}else Y.length>0&&el(se,Y,D,q),Ue&&de.render(D),Qa(m,D,q);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),D.isScene===!0&&D.onAfterRender(S,D,q),rt.resetDefaultState(),E=-1,w=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&ue.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Vr(D,q,ie,se){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ie=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||$.intersectsSprite(D)){se&&Ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pe);const Te=J.update(D),Re=D.material;Re.visible&&m.push(D,Te,Re,ie,Ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||$.intersectsObject(D))){const Te=J.update(D),Re=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ae.copy(D.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ae.copy(Te.boundingSphere.center)),Ae.applyMatrix4(D.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){const Ce=Te.groups;for(let ze=0,$e=Ce.length;ze<$e;ze++){const Ie=Ce[ze],Je=Re[Ie.materialIndex];Je&&Je.visible&&m.push(D,Te,Je,ie,Ae.z,Ie)}}else Re.visible&&m.push(D,Te,Re,ie,Ae.z,null)}}const me=D.children;for(let Te=0,Re=me.length;Te<Re;Te++)Vr(me[Te],q,ie,se)}function Qa(D,q,ie,se){const Y=D.opaque,me=D.transmissive,Te=D.transparent;p.setupLightsView(ie),te===!0&&ue.setGlobalState(S.clippingPlanes,ie),se&&P.viewport(U.copy(se)),Y.length>0&&zs(Y,q,ie),me.length>0&&zs(me,q,ie),Te.length>0&&zs(Te,q,ie),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function el(D,q,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new Si(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Us:Vn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const me=p.state.transmissionRenderTarget[se.id],Te=se.viewport||U;me.setSize(Te.z,Te.w);const Re=S.getRenderTarget();S.setRenderTarget(me),S.getClearColor(M),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear(),Ue&&de.render(ie);const Ce=S.toneMapping;S.toneMapping=si;const ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),te===!0&&ue.setGlobalState(S.clippingPlanes,se),zs(D,ie,se),T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me),K.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ie=0,Je=q.length;Ie<Je;Ie++){const lt=q[Ie],ct=lt.object,Ft=lt.geometry,et=lt.material,De=lt.group;if(et.side===_n&&ct.layers.test(se.layers)){const Tn=et.side;et.side=Vt,et.needsUpdate=!0,tl(ct,ie,se,Ft,et,De),et.side=Tn,et.needsUpdate=!0,$e=!0}}$e===!0&&(T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me))}S.setRenderTarget(Re),S.setClearColor(M,F),ze!==void 0&&(se.viewport=ze),S.toneMapping=Ce}function zs(D,q,ie){const se=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,me=D.length;Y<me;Y++){const Te=D[Y],Re=Te.object,Ce=Te.geometry,ze=se===null?Te.material:se,$e=Te.group;Re.layers.test(ie.layers)&&tl(Re,q,ie,Ce,ze,$e)}}function tl(D,q,ie,se,Y,me){D.onBeforeRender(S,q,ie,se,Y,me),D.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Y.onBeforeRender(S,q,ie,se,D,me),Y.transparent===!0&&Y.side===_n&&Y.forceSinglePass===!1?(Y.side=Vt,Y.needsUpdate=!0,S.renderBufferDirect(ie,q,se,Y,D,me),Y.side=zn,Y.needsUpdate=!0,S.renderBufferDirect(ie,q,se,Y,D,me),Y.side=_n):S.renderBufferDirect(ie,q,se,Y,D,me),D.onAfterRender(S,q,ie,se,Y,me)}function Vs(D,q,ie){q.isScene!==!0&&(q=Oe);const se=ne.get(D),Y=p.state.lights,me=p.state.shadowsArray,Te=Y.state.version,Re=fe.getParameters(D,Y.state,me,q,ie),Ce=fe.getProgramCacheKey(Re);let ze=se.programs;se.environment=D.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(D.isMeshStandardMaterial?k:x).get(D.envMap||se.environment),se.envMapRotation=se.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,ze===void 0&&(D.addEventListener("dispose",Ge),ze=new Map,se.programs=ze);let $e=ze.get(Ce);if($e!==void 0){if(se.currentProgram===$e&&se.lightsStateVersion===Te)return il(D,Re),$e}else Re.uniforms=fe.getUniforms(D),D.onBeforeCompile(Re,S),$e=fe.acquireProgram(Re,Ce),ze.set(Ce,$e),se.uniforms=Re.uniforms;const Ie=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ie.clippingPlanes=ue.uniform),il(D,Re),se.needsLights=sd(D),se.lightsStateVersion=Te,se.needsLights&&(Ie.ambientLightColor.value=Y.state.ambient,Ie.lightProbe.value=Y.state.probe,Ie.directionalLights.value=Y.state.directional,Ie.directionalLightShadows.value=Y.state.directionalShadow,Ie.spotLights.value=Y.state.spot,Ie.spotLightShadows.value=Y.state.spotShadow,Ie.rectAreaLights.value=Y.state.rectArea,Ie.ltc_1.value=Y.state.rectAreaLTC1,Ie.ltc_2.value=Y.state.rectAreaLTC2,Ie.pointLights.value=Y.state.point,Ie.pointLightShadows.value=Y.state.pointShadow,Ie.hemisphereLights.value=Y.state.hemi,Ie.directionalShadowMap.value=Y.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ie.spotShadowMap.value=Y.state.spotShadowMap,Ie.spotLightMatrix.value=Y.state.spotLightMatrix,Ie.spotLightMap.value=Y.state.spotLightMap,Ie.pointShadowMap.value=Y.state.pointShadowMap,Ie.pointShadowMatrix.value=Y.state.pointShadowMatrix),se.currentProgram=$e,se.uniformsList=null,$e}function nl(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=Rr.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function il(D,q){const ie=ne.get(D);ie.outputColorSpace=q.outputColorSpace,ie.batching=q.batching,ie.batchingColor=q.batchingColor,ie.instancing=q.instancing,ie.instancingColor=q.instancingColor,ie.instancingMorph=q.instancingMorph,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function nd(D,q,ie,se,Y){q.isScene!==!0&&(q=Oe),T.resetTextureUnits();const me=q.fog,Te=se.isMeshStandardMaterial?q.environment:null,Re=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:kt,Ce=(se.isMeshStandardMaterial?k:x).get(se.envMap||Te),ze=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,$e=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ie=!!ie.morphAttributes.position,Je=!!ie.morphAttributes.normal,lt=!!ie.morphAttributes.color;let ct=si;se.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ct=S.toneMapping);const Ft=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,et=Ft!==void 0?Ft.length:0,De=ne.get(se),Tn=p.state.lights;if(te===!0&&(ve===!0||D!==w)){const Kt=D===w&&se.id===E;ue.setState(se,D,Kt)}let tt=!1;se.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Tn.state.version||De.outputColorSpace!==Re||Y.isBatchedMesh&&De.batching===!1||!Y.isBatchedMesh&&De.batching===!0||Y.isBatchedMesh&&De.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&De.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||Y.isInstancedMesh&&De.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&De.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&De.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&De.instancingMorph===!1&&Y.morphTexture!==null||De.envMap!==Ce||se.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==$e||De.morphTargets!==Ie||De.morphNormals!==Je||De.morphColors!==lt||De.toneMapping!==ct||De.morphTargetsCount!==et)&&(tt=!0):(tt=!0,De.__version=se.version);let rn=De.currentProgram;tt===!0&&(rn=Vs(se,q,Y));let Ti=!1,Gt=!1,fs=!1;const ut=rn.getUniforms(),pn=De.uniforms;if(P.useProgram(rn.program)&&(Ti=!0,Gt=!0,fs=!0),se.id!==E&&(E=se.id,Gt=!0),Ti||w!==D){P.buffers.depth.getReversed()?(he.copy(D.projectionMatrix),mh(he),gh(he),ut.setValue(_,"projectionMatrix",he)):ut.setValue(_,"projectionMatrix",D.projectionMatrix),ut.setValue(_,"viewMatrix",D.matrixWorldInverse);const Gn=ut.map.cameraPosition;Gn!==void 0&&Gn.setValue(_,ye.setFromMatrixPosition(D.matrixWorld)),O.logarithmicDepthBuffer&&ut.setValue(_,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&ut.setValue(_,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Gt=!0,fs=!0)}if(Y.isSkinnedMesh){ut.setOptional(_,Y,"bindMatrix"),ut.setOptional(_,Y,"bindMatrixInverse");const Kt=Y.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ut.setValue(_,"boneTexture",Kt.boneTexture,T))}Y.isBatchedMesh&&(ut.setOptional(_,Y,"batchingTexture"),ut.setValue(_,"batchingTexture",Y._matricesTexture,T),ut.setOptional(_,Y,"batchingIdTexture"),ut.setValue(_,"batchingIdTexture",Y._indirectTexture,T),ut.setOptional(_,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ut.setValue(_,"batchingColorTexture",Y._colorsTexture,T));const ps=ie.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Pe.update(Y,ie,rn),(Gt||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,ut.setValue(_,"receiveShadow",Y.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(pn.envMap.value=Ce,pn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(pn.envMapIntensity.value=q.environmentIntensity),Gt&&(ut.setValue(_,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&id(pn,fs),me&&se.fog===!0&&ce.refreshFogUniforms(pn,me),ce.refreshMaterialUniforms(pn,se,Z,G,p.state.transmissionRenderTarget[D.id]),Rr.upload(_,nl(De),pn,T)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Rr.upload(_,nl(De),pn,T),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&ut.setValue(_,"center",Y.center),ut.setValue(_,"modelViewMatrix",Y.modelViewMatrix),ut.setValue(_,"normalMatrix",Y.normalMatrix),ut.setValue(_,"modelMatrix",Y.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Kt=se.uniformsGroups;for(let Gn=0,$n=Kt.length;Gn<$n;Gn++){const sl=Kt[Gn];j.update(sl,rn),j.bind(sl,rn)}}return rn}function id(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function sd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(D,q,ie){ne.get(D.texture).__webglTexture=q,ne.get(D.depthTexture).__webglTexture=ie;const se=ne.get(D);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,q){const ie=ne.get(D);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ie=0){L=D,I=q,R=ie;let se=!0,Y=null,me=!1,Te=!1;if(D){const Ce=ne.get(D);if(Ce.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(_.FRAMEBUFFER,null),se=!1;else if(Ce.__webglFramebuffer===void 0)T.setupRenderTarget(D);else if(Ce.__hasExternalTextures)T.rebindTextures(D,ne.get(D.texture).__webglTexture,ne.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ie=D.depthTexture;if(Ce.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(D.width!==Ie.image.width||D.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(D)}}const ze=D.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Te=!0);const $e=ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[q])?Y=$e[q][ie]:Y=$e[q],me=!0):D.samples>0&&T.useMultisampledRTT(D)===!1?Y=ne.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[ie]:Y=$e,U.copy(D.viewport),C.copy(D.scissor),N=D.scissorTest}else U.copy(B).multiplyScalar(Z).floor(),C.copy(V).multiplyScalar(Z).floor(),N=ge;if(P.bindFramebuffer(_.FRAMEBUFFER,Y)&&se&&P.drawBuffers(D,Y),P.viewport(U),P.scissor(C),P.setScissorTest(N),me){const Ce=ne.get(D.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,ie)}else if(Te){const Ce=ne.get(D.texture),ze=q||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ce.__webglTexture,ie||0,ze)}E=-1},this.readRenderTargetPixels=function(D,q,ie,se,Y,me,Te){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){P.bindFramebuffer(_.FRAMEBUFFER,Re);try{const Ce=D.texture,ze=Ce.format,$e=Ce.type;if(!O.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-se&&ie>=0&&ie<=D.height-Y&&_.readPixels(q,ie,se,Y,Ve.convert(ze),Ve.convert($e),me)}finally{const Ce=L!==null?ne.get(L).__webglFramebuffer:null;P.bindFramebuffer(_.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(D,q,ie,se,Y,me,Te){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){const Ce=D.texture,ze=Ce.format,$e=Ce.type;if(!O.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=D.width-se&&ie>=0&&ie<=D.height-Y){P.bindFramebuffer(_.FRAMEBUFFER,Re);const Ie=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Ie),_.bufferData(_.PIXEL_PACK_BUFFER,me.byteLength,_.STREAM_READ),_.readPixels(q,ie,se,Y,Ve.convert(ze),Ve.convert($e),0);const Je=L!==null?ne.get(L).__webglFramebuffer:null;P.bindFramebuffer(_.FRAMEBUFFER,Je);const lt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await ph(_,lt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Ie),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,me),_.deleteBuffer(Ie),_.deleteSync(lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,q=null,ie=0){D.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,D=arguments[1]);const se=Math.pow(2,-ie),Y=Math.floor(D.image.width*se),me=Math.floor(D.image.height*se),Te=q!==null?q.x:0,Re=q!==null?q.y:0;T.setTexture2D(D,0),_.copyTexSubImage2D(_.TEXTURE_2D,ie,0,0,Te,Re,Y,me),P.unbindTexture()},this.copyTextureToTexture=function(D,q,ie=null,se=null,Y=0){D.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,D=arguments[1],q=arguments[2],Y=arguments[3]||0,ie=null);let me,Te,Re,Ce,ze,$e,Ie,Je,lt;const ct=D.isCompressedTexture?D.mipmaps[Y]:D.image;ie!==null?(me=ie.max.x-ie.min.x,Te=ie.max.y-ie.min.y,Re=ie.isBox3?ie.max.z-ie.min.z:1,Ce=ie.min.x,ze=ie.min.y,$e=ie.isBox3?ie.min.z:0):(me=ct.width,Te=ct.height,Re=ct.depth||1,Ce=0,ze=0,$e=0),se!==null?(Ie=se.x,Je=se.y,lt=se.z):(Ie=0,Je=0,lt=0);const Ft=Ve.convert(q.format),et=Ve.convert(q.type);let De;q.isData3DTexture?(T.setTexture3D(q,0),De=_.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(T.setTexture2DArray(q,0),De=_.TEXTURE_2D_ARRAY):(T.setTexture2D(q,0),De=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,q.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,q.unpackAlignment);const Tn=_.getParameter(_.UNPACK_ROW_LENGTH),tt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),rn=_.getParameter(_.UNPACK_SKIP_PIXELS),Ti=_.getParameter(_.UNPACK_SKIP_ROWS),Gt=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,ct.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ce),_.pixelStorei(_.UNPACK_SKIP_ROWS,ze),_.pixelStorei(_.UNPACK_SKIP_IMAGES,$e);const fs=D.isDataArrayTexture||D.isData3DTexture,ut=q.isDataArrayTexture||q.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const pn=ne.get(D),ps=ne.get(q),Kt=ne.get(pn.__renderTarget),Gn=ne.get(ps.__renderTarget);P.bindFramebuffer(_.READ_FRAMEBUFFER,Kt.__webglFramebuffer),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let $n=0;$n<Re;$n++)fs&&_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ne.get(D).__webglTexture,Y,$e+$n),D.isDepthTexture?(ut&&_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ne.get(q).__webglTexture,Y,lt+$n),_.blitFramebuffer(Ce,ze,me,Te,Ie,Je,me,Te,_.DEPTH_BUFFER_BIT,_.NEAREST)):ut?_.copyTexSubImage3D(De,Y,Ie,Je,lt+$n,Ce,ze,me,Te):_.copyTexSubImage2D(De,Y,Ie,Je,lt+$n,Ce,ze,me,Te);P.bindFramebuffer(_.READ_FRAMEBUFFER,null),P.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else ut?D.isDataTexture||D.isData3DTexture?_.texSubImage3D(De,Y,Ie,Je,lt,me,Te,Re,Ft,et,ct.data):q.isCompressedArrayTexture?_.compressedTexSubImage3D(De,Y,Ie,Je,lt,me,Te,Re,Ft,ct.data):_.texSubImage3D(De,Y,Ie,Je,lt,me,Te,Re,Ft,et,ct):D.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,Ie,Je,me,Te,Ft,et,ct.data):D.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,Ie,Je,ct.width,ct.height,Ft,ct.data):_.texSubImage2D(_.TEXTURE_2D,Y,Ie,Je,me,Te,Ft,et,ct);_.pixelStorei(_.UNPACK_ROW_LENGTH,Tn),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,rn),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ti),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Gt),Y===0&&q.generateMipmaps&&_.generateMipmap(De),P.unbindTexture()},this.copyTextureToTexture3D=function(D,q,ie=null,se=null,Y=0){return D.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,D=arguments[2],q=arguments[3],Y=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,q,ie,se,Y)},this.initRenderTarget=function(D){ne.get(D).__webglFramebuffer===void 0&&T.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?T.setTextureCube(D,0):D.isData3DTexture?T.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?T.setTexture2DArray(D,0):T.setTexture2D(D,0),P.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,P.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Av extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new H;class za{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pc=new H,mc=new Qe,gc=new Qe,Cv=new H,vc=new je,lr=new H,vo=new Sn,_c=new je,_o=new ks;class Iv extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gl,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingBox.expandByPoint(lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingSphere.expandByPoint(lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(s),e.ray.intersectsSphere(vo)!==!1&&(_c.copy(s).invert(),_o.copy(e.ray).applyMatrix4(_c),!(this.boundingBox!==null&&_o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;mc.fromBufferAttribute(s.attributes.skinIndex,e),gc.fromBufferAttribute(s.attributes.skinWeight,e),pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=gc.getComponent(r);if(a!==0){const o=mc.getComponent(r);vc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cv.copy(pc).applyMatrix4(vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fu extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bu extends wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,d=Nt,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=new je,Dv=new je;class Va{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dv;yc.multiplyMatrices(o,t[r]),yc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Va(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bu(t,e,e,nn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Fu),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class ya extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new je,bc=new je,cr=[],xc=new Hn,Pv=new je,ys=new He,bs=new Sn;class Lv extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),xc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),bs.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),bc.multiplyMatrices(n,Vi),ys.matrixWorld=bc,ys.raycast(e,cr);for(let a=0,o=cr.length;a<o;a++){const l=cr[a];l.instanceId=r,l.object=this,t.push(l)}cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(s*this.count),s,this.count,Da,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fr extends yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new H,Lr=new H,Sc=new je,xs=new ks,ur=new Sn,yo=new H,Mc=new H;class Ha extends mt{constructor(e=new Ht,t=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pr.fromBufferAttribute(t,s-1),Lr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pr.distanceTo(Lr);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;Sc.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),y=d.getX(v+1),b=dr(this,e,xs,l,p,y);b&&t.push(b)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=dr(this,e,xs,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=dr(this,e,xs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=dr(this,e,xs,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Pr.fromBufferAttribute(a,s),Lr.fromBufferAttribute(a,r),t.distanceSqToSegment(Pr,Lr,yo,Mc)>n)return;yo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(yo);if(!(l<e.near||l>e.far))return{distance:l,point:Mc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ec=new H,wc=new H;class Ga extends Ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ec.fromBufferAttribute(t,s),wc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ec.distanceTo(wc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends Ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zu extends yn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tc=new je,ba=new ks,hr=new Sn,fr=new H;class Nv extends mt{constructor(e=new Ht,t=new zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;Tc.copy(s).invert(),ba.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){const m=c.getX(g);fr.fromBufferAttribute(u,m),Ac(fr,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,v=f;g<v;g++)fr.fromBufferAttribute(u,g),Ac(fr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ac(i,e,t,n,s,r,a){const o=ba.distanceSqToPoint(i);if(o<t){const l=new H;ba.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bn extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function y(){const S=new H,A=new H;let I=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const E=[],w=L/r,U=w*(t-e)+e;for(let C=0;C<=s;C++){const N=C/s,M=N*l+o,F=Math.sin(M),ee=Math.cos(M);A.x=U*F,A.y=-w*n+m,A.z=U*ee,u.push(A.x,A.y,A.z),S.set(F,R,ee).normalize(),h.push(S.x,S.y,S.z),f.push(N,1-w),E.push(g++)}v.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const w=v[E][L],U=v[E+1][L],C=v[E+1][L+1],N=v[E][L+1];(e>0||E!==0)&&(d.push(w,U,N),I+=3),(t>0||E!==r-1)&&(d.push(U,C,N),I+=3)}c.addGroup(p,I,0),p+=I}function b(S){const A=g,I=new ke,R=new H;let L=0;const E=S===!0?e:t,w=S===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*w,0),h.push(0,w,0),f.push(.5,.5),g++;const U=g;for(let C=0;C<=s;C++){const M=C/s*l+o,F=Math.cos(M),ee=Math.sin(M);R.x=E*ee,R.y=m*w,R.z=E*F,u.push(R.x,R.y,R.z),h.push(0,w,0),I.x=F*.5+.5,I.y=ee*.5*w+.5,f.push(I.x,I.y),g++}for(let C=0;C<s;C++){const N=A+C,M=U+C;S===!0?d.push(M,M+1,N):d.push(M+1,M,N),L+=3}c.addGroup(p,L,S===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const pr=new H,mr=new H,bo=new H,gr=new tn;class Uv extends Ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(qi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=gr;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),gr.getNormal(bo),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const b=(y+1)%3,S=u[y],A=u[b],I=gr[d[y]],R=gr[d[b]],L=`${S}_${A}`,E=`${A}_${S}`;E in h&&h[E]?(bo.dot(h[E].normal)<=r&&(f.push(I.x,I.y,I.z),f.push(R.x,R.y,R.z)),h[E]=null):L in h||(h[L]={index0:c[y],index1:c[b],normal:bo.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];pr.fromBufferAttribute(o,v),mr.fromBufferAttribute(o,m),f.push(pr.x,pr.y,pr.z),f.push(mr.x,mr.y,mr.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $a extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new H,h=new H,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],b=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const I=A/t;u.x=-e*Math.cos(s+I*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+I*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(I+S,1-b),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const b=d[p][y+1],S=d[p][y],A=d[p+1][y],I=d[p+1][y+1];(p!==0||a>0)&&f.push(b,S,I),(p!==n-1||l<Math.PI)&&f.push(S,A,I)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends kn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fv(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Vu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Bs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bv extends Bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _l:r=e,o=2*t-n;break;case yl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:a=e,l=2*n-t;break;case yl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,y=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,S=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*a[d+A]+y*a[c+A]+b*a[l+A]+S*a[u+A];return r}}class zv extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}}class Vv extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Hr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Hr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kv(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ps;class cs extends En{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ds;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends En{}Hu.prototype.ValueTypeName="color";class rs extends En{}rs.prototype.ValueTypeName="number";class Hv extends Bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let d=c+o;c!==d;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class os extends En{InterpolantFactoryMethodLinear(e){return new Hv(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends En{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ds;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends En{}as.prototype.ValueTypeName="vector";class Gv{constructor(e="",t=-1,n=[],s=Bd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wv(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=Fv(l);l=Rc(l,1,d),c=Rc(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,g,v){if(f.length!==0){const m=[],p=[];Vu(f,m,p,g),m.length!==0&&v.push(new u(h,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)f[h[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==h[g].morphTargets.length;++y){const b=h[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new rs(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(as,f+".position",h,"pos",s),n(os,f+".quaternion",h,"rot",s),n(as,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $v(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Hu;case"quaternion":return os;case"bool":case"boolean":return cs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$v(i.type);if(i.times===void 0){const t=[],n=[];Vu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jv{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const Xv=new jv;class ds{constructor(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class qv extends Error{constructor(e,t){super(e),this.response=t}}class Gu extends ds{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:s});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Pn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:S})=>{if(b)p.close();else{v+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let I=0,R=d.length;I<R;I++){const L=d[I];L.onProgress&&L.onProgress(A)}p.enqueue(S),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new qv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ti.add(e,c);const d=Pn[e];delete Pn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Pn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yv extends ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ls("img");function l(){d(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Kv extends ds{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new Yv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Br extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xo=new je,Cc=new H,Ic=new H;class Wa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cc),Ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ic),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zv extends Wa{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $u extends Br{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dc=new je,Ss=new H,So=new H;class Jv extends Wa{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ss),So.copy(n.position),So.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(So),n.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class Qv extends Br{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e_ extends Wa{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends Br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new e_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t_ extends Br{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class n_ extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,l),r.manager.itemStart(e)}}const ja="\\[\\]\\.:\\/",i_=new RegExp("["+ja+"]","g"),Xa="[^"+ja+"]",s_="[^"+ja.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Xa),o_=/(WCOD+)?/.source.replace("WCOD",s_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),c_=new RegExp("^"+r_+o_+a_+l_+"$"),u_=["material","materials","bones","map"];class d_{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){const t=c_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=d_;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class h_ extends Ga{constructor(e=10,t=10,n=4473924,s=8947848){n=new Le(n),s=new Le(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const d=new Ht;d.setAttribute("position",new Tt(l,3)),d.setAttribute("color",new Tt(c,3));const u=new Fr({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class f_ extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const Lc={type:"change"},qa={type:"start"},Wu={type:"end"},_r=new ks,Oc=new Jn,p_=Math.cos(70*xu.DEG2RAD),yt=new H,Bt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mo=1e-6;class m_ extends f_{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new bn,this._lastTargetPosition=new H,this._quat=new bn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pc,this._sphericalDelta=new Pc,this._scale=1,this._panOffset=new H,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new H,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v_.bind(this),this._onPointerDown=g_.bind(this),this._onPointerUp=__.bind(this),this._onContextMenu=w_.bind(this),this._onMouseWheel=x_.bind(this),this._onKeyDown=S_.bind(this),this._onTouchStart=M_.bind(this),this._onTouchMove=E_.bind(this),this._onMouseDown=y_.bind(this),this._onMouseMove=b_.bind(this),this._interceptControlDown=T_.bind(this),this._interceptControlUp=A_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lc),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<p_?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mo||this._lastTargetPosition.distanceToSquared(this.target)>Mo?(this.dispatchEvent(Lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function g_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function v_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function __(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(qa)}function b_(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function x_(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(qa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function S_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function M_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(qa)}function E_(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function w_(i){this.enabled!==!1&&i.preventDefault()}function T_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nc(i,e){if(e===zd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ga||e===_u){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ga)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class R_ extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new L_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new X_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Cs.extractUrlBase(e);a=Cs.resolveURL(c,this.path)}else a=Cs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Gu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ju){try{a[Ye.KHR_BINARY_GLTF]=new q_(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new a0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new D_;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new Y_(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new K_;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new Z_;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function C_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I_{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new Le(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qv(d),c.distance=u;break;case"spot":c=new $u(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class D_{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}}class P_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class L_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(o,o)}return Promise.all(r)}}class O_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class N_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class U_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class k_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class F_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}}class B_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class z_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}}class V_{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class H_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class G_{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class W_{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class j_{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}}class X_{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,f=[];for(const g of u){const v=new je,m=new H,p=new bn,y=new H(1,1,1),b=new Lv(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),b.setMatrixAt(S,v.compose(m,p,y));for(const S in l)if(S==="_COLOR_0"){const A=l[S];b.instanceColor=new ya(A.array,A.itemSize,A.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const ju="glTF",Ms=12,Uc={JSON:1313821514,BIN:5130562};class q_{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ju)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ms,r=new DataView(e,Ms);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Uc.JSON){const c=new Uint8Array(e,Ms+a,o);this.content=n.decode(c)}else if(l===Uc.BIN){const c=Ms+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Y_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const d in a){const u=xa[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=xa[d]||d.toLowerCase();if(a[d]!==void 0){const h=n.accessors[e.attributes[d]],f=Ki[h.componentType];c[u]=f.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,kt,h)})})}}class K_{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Z_{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Xu extends Bs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(n-t)/d,h=u*u,f=h*u,g=e*c,v=g-c,m=-2*f+3*h,p=f-h,y=1-m,b=p-h+u;for(let S=0;S!==o;S++){const A=a[v+S+o],I=a[v+S+l]*d,R=a[g+S+o],L=a[g+S]*d;r[S]=y*A+b*I+m*R+p*L}return r}}const J_=new bn;class Q_ extends Xu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return J_.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kc={9728:Nt,9729:Yt,9984:lu,9985:Sr,9986:Es,9987:Nn},Fc={33071:ei,33648:Ir,10497:es},Eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e0={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Ds},wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),i.DefaultMaterial}function mi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n0(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function i0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s0(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+To(t.attributes):e=i.indices+":"+To(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+To(i.targets[n]);return e}function To(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const o0=new je;class a0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new C_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Kv(this.options.manager):this.textureLoader=new n_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return mi(r,o,s),On(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,d]of a.children.entries())r(d,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Cs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Eo[s.type],o=Ki[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ut(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Eo[s.type],c=Ki[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(h/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(y);b||(v=new c(o,p*f,s.count*f/d),b=new Rv(v,f/d),t.cache.add(y,b)),m=new za(b,l,h%f/d,g)}else o===null?v=new c(s.count*l):v=new c(o,h,s.count*l),m=new Ut(v,l,g);if(s.sparse!==void 0){const p=Eo.SCALAR,y=Ki[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,A=new y(a[1],b,s.sparse.count*p),I=new c(a[2],S,s.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=A.length;R<L;R++){const E=A[R];if(m.setX(E,I[R*l]),l>=2&&m.setY(E,I[R*l+1]),l>=3&&m.setZ(E,I[R*l+2]),l>=4&&m.setW(E,I[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return d.magFilter=kc[h.magFilter]||Yt,d.minFilter=kc[h.minFilter]||Nn,d.wrapS=Fc[h.wrapS]||es,d.wrapT=Fc[h.wrapT]||es,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Nt&&d.minFilter!==Yt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const m=new wt(v);m.needsUpdate=!0,h(m)}),t.load(Cs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),On(u,a),u.userData.mimeType=a.mimeType||r0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new zu,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fr,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const u=s[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],kt),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,At)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const d=r.alphaMode||wo.OPAQUE;if(d===wo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===wo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==yi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==yi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==yi){const u=r.emissiveFactor;o.emissive=new Le().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&a!==yi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&mi(s,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=s0(c),u=s[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Bc(new Ht,c,t),s[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?t0(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=a[f];let p;const y=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Iv(v,y):new He(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=Nc(p.geometry,_u):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=Nc(p.geometry,ga));else if(m.mode===Jt.LINES)p=new Ga(v,y);else if(m.mode===Jt.LINE_STRIP)p=new Ha(v,y);else if(m.mode===Jt.LINE_LOOP)p=new Ov(v,y);else if(m.mode===Jt.POINTS)p=new Nv(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&i0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),On(p,r),m.extensions&&mi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&mi(s,u[0],r),u[0];const h=new bt;r.extensions&&mi(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(xu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ka(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){const u=a[c];if(u){o.push(u);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Va(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),d.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,b=h.length;y<b;y++){const S=h[y],A=f[y],I=g[y],R=v[y],L=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const E=n._createAnimationTracks(S,A,I,R,L);if(E)for(let w=0;w<E.length;w++)p.push(E[w])}return new Gv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,o0)});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new Fu:c.length>1?d=new bt:c.length===1?d=c[0]:d=new mt,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=a),On(d,r),r.extensions&&mi(n,d,r),r.matrix!==void 0){const u=new je;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new bt;n.name&&(r.name=s.createUniqueName(n.name)),On(r,n),n.extensions&&mi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);const c=d=>{const u=new Map;for(const[h,f]of s.associations)(h instanceof yn||h instanceof wt)&&u.set(h,f);return d.traverse(h=>{const f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Zn[r.path]===Zn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Zn[r.path]){case Zn.weights:c=rs;break;case Zn.rotation:c=os;break;case Zn.position:case Zn.scale:c=as;break;default:switch(n.itemSize){case 1:c=rs;break;case 2:case 3:default:c=as;break}break}const d=s.interpolation!==void 0?e0[s.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Zn[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sa(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof os?Q_:Xu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function l0(i,e,t){const n=e.attributes,s=new Hn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),o.normalized){const d=Sa(Ki[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new H,l=new H;for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const v=Sa(Ki[h.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Bc(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=xa[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),On(i,e),l0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?n0(i,e.targets,t):i})}const dt={chassis:{y:.15,x:0,z:0},elevator:{y:1.1,x:0,z:0},shooter:{y:1.8,x:.5,z:0},intake:{y:.15,x:-1.2,z:0},roller:{y:.7,x:0,z:.6},launcher:{y:2.2,x:0,z:0},vision:{y:.5,x:.8,z:.7}},vt={chassis:5921386,wheel:3355456,elevator:7833770,shooter:13959196,intake:5614165,roller:7829435,launcher:13404228,vision:4508808,accent:13959196};let jt,gn,cn,Xt,Qt,zt={},Ya=null,zc=!1,Vc=!0;function c0(i){if(zc)return;zc=!0,jt=new Av,jt.background=new Le(1447966),jt.fog=new Ba(1447966,.06),gn=new Ot(45,i.clientWidth/i.clientHeight,.1,100),gn.position.set(2.24,1.92,3.2),cn=new Tv({antialias:!0}),cn.setSize(i.clientWidth,i.clientHeight),cn.setPixelRatio(Math.min(window.devicePixelRatio,2)),cn.shadowMap.enabled=!0,cn.shadowMap.type=su,cn.toneMapping=ou,cn.toneMappingExposure=1.6,i.appendChild(cn.domElement),Xt=new m_(gn,cn.domElement),Xt.enableDamping=!0,Xt.dampingFactor=.08,Xt.target.set(0,.6,0),Xt.minDistance=2,Xt.maxDistance=12,Xt.maxPolarAngle=Math.PI*.85,jt.add(new t_(8952251,.8));const e=new Cr(16777215,2);e.position.set(4,8,4),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),jt.add(e);const t=new Cr(6719692,.7);t.position.set(-5,4,6),jt.add(t);const n=new Cr(13959196,.3);n.position.set(-3,2,-4),jt.add(n);const s=new $u(16777215,1.5,15,Math.PI/6,.5);s.position.set(0,8,0),s.target.position.set(0,.5,0),jt.add(s),jt.add(s.target);const r=new He(new Fs(20,20),new kn({color:1711140,roughness:.7,metalness:.3}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,jt.add(r);const a=new h_(10,20,2763828,1974312);a.position.y=.001,jt.add(a),Qt=new bt,jt.add(Qt),u0(),Object.keys(zt).forEach(d=>{d!=="chassis"&&zr(d,!1)});const o=()=>{gn.aspect=i.clientWidth/i.clientHeight,gn.updateProjectionMatrix(),cn.setSize(i.clientWidth,i.clientHeight)};window.addEventListener("resize",o);function l(){if(!Vc){requestAnimationFrame(l);return}requestAnimationFrame(l),Xt.update(),Ya||(Qt.rotation.y+=.0015),cn.render(jt,gn)}l(),new IntersectionObserver(([d])=>{Vc=d.isIntersecting},{threshold:.05}).observe(i)}function pt(i,e=1){return new kn({color:i,roughness:.35,metalness:.5,transparent:e<1,opacity:e})}function u0(){const i=new bt,e=new He(new ht(.85,.1,.75),pt(vt.chassis));e.position.y=dt.chassis.y,e.castShadow=!0,i.add(e);const t=new Bn(.06,.06,.04,16),n=pt(vt.wheel);[[-.38,-.33],[-.38,.33],[.38,-.33],[.38,.33]].forEach(([R,L])=>{const E=new He(t,n);E.rotation.x=Math.PI/2,E.position.set(R,.06,L),E.castShadow=!0,i.add(E);const w=new He(new ht(.1,.08,.1),pt(vt.chassis,.7));w.position.set(R,.14,L),i.add(w)}),zt.chassis=i,Qt.add(i);const s=new bt,r=dt.elevator,a=new He(new ht(.08,.9,.08),pt(vt.elevator));a.position.set(r.x-.08,r.y,r.z),a.castShadow=!0,s.add(a);const o=a.clone();o.position.x=r.x+.08,s.add(o);const l=new He(new ht(.22,.06,.1),pt(vt.elevator,.8));l.position.set(r.x,r.y+.2,r.z),s.add(l),d0(s,a),zt.elevator=s,Qt.add(s);const c=new bt;Ku("adjustable",c),zt.shooter=c,Qt.add(c);const d=new bt,u=dt.intake,h=new He(new ht(.3,.12,.5),pt(vt.intake));h.position.set(u.x,u.y,u.z),h.rotation.z=-.25,h.castShadow=!0,d.add(h);const f=new He(new Bn(.03,.03,.45,12),pt(3381555));f.rotation.x=Math.PI/2,f.position.set(u.x-.12,u.y-.02,u.z),d.add(f),zt.intake=d,Qt.add(d);const g=new bt;zt.roller=g,Qt.add(g),Or("roller",{mechanisms:{roller:{configured:!0}}});const v=new bt,m=dt.launcher;[-.09,.09].forEach(R=>{const L=new He(new ht(.03,.18,.04),pt(vt.launcher));L.position.set(m.x,m.y,m.z+R),L.castShadow=!0,v.add(L)});const p=new He(new ht(.08,.04,.22),pt(vt.launcher));p.position.set(m.x,m.y-.1,m.z),v.add(p),zt.launcher=v,Qt.add(v);const y=new bt;zt.arm=y,Qt.add(y),Or("arm",{mechanisms:{arm:{configured:!0,dof:2}}});const b=new bt,S=dt.vision,A=new He(new ht(.08,.06,.06),pt(vt.vision));A.position.set(S.x,S.y,S.z),A.castShadow=!0,b.add(A);const I=new He(new Bn(.015,.02,.03,8),pt(2236962));I.rotation.z=Math.PI/2,I.position.set(S.x+.05,S.y,S.z),b.add(I),zt.vision=b,Qt.add(b)}function d0(i,e){const t=new Ga(new Uv(e.geometry),new Fr({color:10070715,transparent:!0,opacity:.3}));t.position.copy(e.position),i.add(t)}function zr(i,e){const t=zt[i];t&&(t.visible=e)}const Hc={chassis:{pos:[2.5,1.2,2.5],target:[0,.15,0]},elevator:{pos:[1.5,2,1.5],target:[0,1.1,0]},shooter:{pos:[1.5,2.2,.8],target:[.5,1.8,0]},intake:{pos:[-2,.8,1.8],target:[-1.2,.15,0]},roller:{pos:[1.2,1.2,1.8],target:[0,.7,.6]},launcher:{pos:[1,2.8,1],target:[0,2.2,0]},vision:{pos:[1.8,1,1.8],target:[.8,.5,.7]},statemachine:{pos:[3.5,3,5],target:[0,.6,0]}};function h0(i){var r;if(!gn||!Xt)return;Ya=i,Qt.rotation.y=0;const e=Hc[i]||Hc.chassis,t=(r=document.getElementById("detail-sidebar"))==null?void 0:r.classList.contains("open");let n=e.pos,s=e.target;if(t){const a=new H(...e.pos),o=new H(...e.target),l=new H().subVectors(o,a).normalize(),c=new H().crossVectors(l,new H(0,1,0)).normalize();a.addScaledVector(c,.5),o.addScaledVector(c,.5),n=a.toArray(),s=o.toArray()}qu(n,s),Object.entries(zt).forEach(([a,o])=>{o.visible&&o.traverse(l=>{l.isMesh&&l.material&&(l.material.opacity=a===i?1:.2,l.material.transparent=!0,a===i?(l.material.emissive=new Le(vt.accent),l.material.emissiveIntensity=.12):(l.material.emissive=new Le(0),l.material.emissiveIntensity=0),l.material.needsUpdate=!0)})})}function f0(){!gn||!Xt||(Ya=null,qu([3.5,3,5],[0,.6,0]),Object.entries(zt).forEach(([i,e])=>{e.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.emissive=new Le(0),t.material.emissiveIntensity=0,t.material.needsUpdate=!0)})}))}function qu(i,e){const t=gn.position.clone(),n=Xt.target.clone(),s=new H(...i),r=new H(...e),a=800,o=performance.now();function l(c){const d=Math.min((c-o)/a,1),u=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2;gn.position.lerpVectors(t,s,u),Xt.target.lerpVectors(n,r,u),Xt.update(),d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}function Ao(i,e){const t=zt[i];!t||!t.visible||t.traverse(n=>{n.isMesh&&n.material&&(e?(n.material.emissive=new Le(2271812),n.material.emissiveIntensity=.08):(n.material.emissive=new Le(0),n.material.emissiveIntensity=0),n.material.needsUpdate=!0)})}function Yu(i){const e=[];for(i.traverse(t=>{t.geometry&&e.push(t.geometry),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{Object.values(s).forEach(r=>{r&&r.isTexture&&r.dispose()}),s.dispose()})}),e.forEach(t=>t.dispose());i.children.length>0;)i.remove(i.children[0])}function Ku(i,e){Yu(e);const t=dt.shooter,n=new kn({color:vt.shooter,roughness:.6});if(i==="adjustable_turret"){const s=new He(new Bn(.15,.15,.05,32),new kn({color:4473941}));s.position.set(t.x,t.y-.05,t.z),s.castShadow=!0,e.add(s);const r=new He(new ht(.1,.15,.25),new kn({color:vt.shooter,transparent:!0,opacity:.6}));r.position.set(t.x,t.y+.05,t.z),e.add(r);const a=new He(new Bn(.08,.08,.06,20),n);a.position.set(t.x+.05,t.y+.1,t.z+.06),a.rotation.x=Math.PI/2,e.add(a);const o=a.clone();o.position.z-=.12,e.add(o)}else{const s=new He(new Bn(.12,.12,.06,20),n);s.position.set(t.x,t.y,t.z),s.castShadow=!0,e.add(s);const r=s.clone();r.position.z+=.12,e.add(r);const a=new He(new ht(.08,.15,.25),new kn({color:vt.shooter,transparent:!0,opacity:.6}));a.position.set(t.x,t.y,t.z+.06),e.add(a)}}function p0(i){Or("shooter",{mechanisms:{shooter:{shooterType:i}}})}function Or(i,e){var s,r;const t=zt[i];if(!t)return;Yu(t);const n=new R_;if(i==="chassis")n.load("assets/models/Swerve_MK5i.glb",o=>{const l=o.scene;l.scale.set(.015,.015,.015),l.position.set(dt.chassis.x,dt.chassis.y,dt.chassis.z),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),t.add(l)},void 0,()=>{const o=new He(new ht(.85,.1,.75),pt(vt.chassis));o.position.y=dt.chassis.y,o.castShadow=!0,t.add(o)});else if(i==="elevator")n.load("assets/models/Elevator.glb",o=>{const l=o.scene;l.scale.set(.012,.012,.012),l.position.set(dt.elevator.x,dt.elevator.y-.5,dt.elevator.z),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),t.add(l)},void 0,()=>{const o=dt.elevator,l=new He(new ht(.08,.9,.08),pt(vt.elevator));l.position.set(o.x-.08,o.y,o.z),l.castShadow=!0,t.add(l);const c=l.clone();c.position.x=o.x+.08,t.add(c)});else if(i==="shooter"){const a=((s=e.mechanisms)==null?void 0:s.shooter)||{},c=`assets/models/${a.shooterType==="adjustable_turret"?"Shooter_on_Turret.glb":"AdjustableShooter.glb"}`;n.load(c,d=>{const u=d.scene;u.scale.set(.015,.015,.015),u.position.set(dt.shooter.x,dt.shooter.y,dt.shooter.z),u.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),t.add(u)},void 0,()=>{Ku(a.shooterType||"adjustable",t)})}else if(i==="vision"){const a=e.vision||{};let o="ArduCam_M12Lens.glb";if(a.system==="limelight"){const c=a.limelightVersion||"ll3";c==="ll3"?o="LIMELIGHT3CAD_STEP.glb":c==="ll3a"?o="LIMELIGHT3ACAD_STEP.glb":c==="ll3g"?o="LIMELIGHT3GCAD_STEP.glb":c==="ll4"&&(o="LIMELIGHT4CAD_STEP.glb")}const l=`assets/models/${o}`;n.load(l,c=>{const d=c.scene;d.scale.set(.02,.02,.02),d.position.set(dt.vision.x,dt.vision.y,dt.vision.z),d.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),t.add(d)},void 0,()=>{const c=dt.vision,d=new He(new ht(.08,.06,.06),pt(vt.vision));d.position.set(c.x,c.y,c.z),d.castShadow=!0,t.add(d)})}else if(i==="roller"){const a=dt.roller,o=new He(new ht(.82,.06,.72),pt(vt.roller));o.position.set(a.x,a.y,a.z),o.castShadow=!0,t.add(o);const l=new He(new ht(.84,.02,.74),pt(5131896,.7));l.position.set(a.x,a.y+.04,a.z),t.add(l)}else if(i==="arm"){const o=(((r=e.mechanisms)==null?void 0:r.arm)||{dof:2}).dof||2,l=dt.chassis,c=new He(new Bn(.09,.11,.08,20),pt(3355443));c.position.set(l.x,l.y+.08,l.z),c.castShadow=!0,t.add(c);let d=new bt;d.position.set(l.x,l.y+.12,l.z),t.add(d);for(let u=0;u<o;u++){const h=Math.max(.18,.34-u*.04),f=Math.max(.04,.075-u*.01),g=new bt;d.add(g);const v=new He(new $a(f*.75,16,16),pt(2500134));g.add(v);const m=new He(new ht(f,h,f),pt(vt.accent));m.position.set(0,h/2,0),m.castShadow=!0,g.add(m);const p=new He(new ht(f*1.8,.02,f*.9),pt(8930389,.7));p.position.set(0,h*.68,0),g.add(p),g.rotation.z=-.35+u*.22;const y=new bt;y.position.set(0,h,0),g.add(y),d=y}}else if(i==="intake"){const a=dt.intake,o=new He(new ht(.3,.12,.5),pt(vt.intake));o.position.set(a.x,a.y,a.z),o.rotation.z=-.25,o.castShadow=!0,t.add(o)}else if(i==="launcher"){const a=dt.launcher;[-.09,.09].forEach(l=>{const c=new He(new ht(.03,.18,.04),pt(vt.launcher));c.position.set(a.x,a.y,a.z+l),c.castShadow=!0,t.add(c)});const o=new He(new ht(.08,.04,.22),pt(vt.launcher));o.position.set(a.x,a.y-.1,a.z),t.add(o)}}function bi(i,e){return'<option value="">— Select —</option>'+Object.entries(i).map(([t,n])=>`<option value="${t}" ${t===e?"selected":""}>${n.name}</option>`).join("")}function qe(i,e,t,n,s="1"){return`<div class="config-group"><label class="config-label">${e}</label><input type="number" class="config-input" id="${i}" placeholder="${n}" step="${s}" value="${t||""}"></div>`}function ft(i,e,t){return`<div class="config-group config-group-sm"><label class="config-label">${e}</label><input type="number" class="config-input" id="${i}" min="0" max="62" value="${t}" style="width:70px"></div>`}function Os(i,e,t){return`<div class="radio-cards">${i.map(([n,s])=>`<div class="radio-card ${n===e?"active":""}" data-name="${t}" data-value="${n}"><div class="radio-dot"></div><div class="radio-card-info"><div class="radio-card-name">${s.name}</div>${s.desc?`<div class="radio-card-desc">${s.desc}</div>`:""}</div></div>`).join("")}</div>`}function Mi(i,e){return`<select class="config-select" id="${i}">${bi(qt,e)}</select>`}const m0={chassis:"Chassis",elevator:"Elevator",intake:"Intake"};function Zu(i,e,t){const s=(t[i]||["chassis"]).map(r=>`<option value="${r}" ${e.attachedTo===r?"selected":""}>${m0[r]||r}</option>`).join("");return`<div class="config-divider"></div>
        <div class="config-section-title">SIMULATION</div>
        <div class="config-group">
            <label class="config-label">Attached To</label>
            <select class="config-select" id="cfg-${i}-attached">${s}</select>
            <p class="config-hint">Parent mechanism for physics sim (not shown in 3D view)</p>
        </div>`}function Ei(i){const e=Ne.getState(),t=document.getElementById("sidebar-title"),n=document.getElementById("sidebar-content");if(i==="chassis")return g0(e,t,n);if(i==="vision")return E0(e,t,n);if(i==="statemachine")return T0(e,t,n);const r={elevator:_0,shooter:y0,intake:b0,roller:x0,launcher:S0,arm:M0}[i];if(r)return r(e,t,n);const a=tu().find(o=>o.id===i);if(a)return v0(e,t,n,i,a.name)}function g0(i,e,t){var o;e.textContent="DRIVETRAIN";const n=i.chassis,s=n.type==="swerve",r=n.type==="tank"||n.type==="mecanum";t.innerHTML=`
        <div class="config-group"><label class="config-label">Drivetrain Type</label>
        ${Os(Object.entries(Jc),n.type,"chassisType")}</div>
        <div id="chassis-details" style="${n.type?"":"display:none"}">
        <div class="config-divider"></div>
        <div class="config-group"><label class="config-label">Drive Motor</label>${Mi("cfg-drive-motor",n.driveMotor)}</div>
        ${s?`
        <div class="config-group"><label class="config-label">Turn Motor</label>${Mi("cfg-turn-motor",n.turnMotor)}</div>
        <div class="config-group"><label class="config-label">Swerve Preset</label><select class="config-select" id="cfg-swerve-preset">${bi(As,n.swervePreset)}</select></div>
        <div class="config-group"><label class="config-label">Module Encoder</label><select class="config-select" id="cfg-swerve-encoder">${bi(Zc,n.swerveEncoderType)}</select></div>
        ${n.usePhoenix6Swerve?'<div class="config-hint phoenix-badge">✓ Phoenix 6 SwerveDrivetrain (TalonFX + CANCoder)</div>':""}
        `:""}
        <div class="config-group"><label class="config-label">Gyro</label><select class="config-select" id="cfg-gyro">${bi(wa,n.gyro)}</select></div>
        <div class="config-row">
            ${qe("cfg-gear-ratio","Drive Gear Ratio",n.gearRatio,"6.75","0.01")}
            ${qe("cfg-wheel-diam","Wheel Diameter (m)",n.wheelDiameter,"0.1016","0.001")}
        </div>
        ${s?qe("cfg-turn-ratio","Turn Gear Ratio",n.turnGearRatio,"21.43","0.01"):""}
        ${qe("cfg-max-speed","Max Speed (m/s)",n.maxSpeed,"4.5","0.1")}

        <div class="config-divider"></div>
        <div class="config-section-title">CAN IDs</div>
        ${s?`
        <div class="can-id-grid">
            <div class="can-id-module"><div class="can-id-module-title">FL Module</div><div class="config-row">
                ${ft("can-fl-drive","Drive",n.canIds.fl_drive)}
                ${ft("can-fl-turn","Turn",n.canIds.fl_turn)}
                ${ft("can-fl-enc","Encoder",n.canIds.fl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">FR Module</div><div class="config-row">
                ${ft("can-fr-drive","Drive",n.canIds.fr_drive)}
                ${ft("can-fr-turn","Turn",n.canIds.fr_turn)}
                ${ft("can-fr-enc","Encoder",n.canIds.fr_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BL Module</div><div class="config-row">
                ${ft("can-bl-drive","Drive",n.canIds.bl_drive)}
                ${ft("can-bl-turn","Turn",n.canIds.bl_turn)}
                ${ft("can-bl-enc","Encoder",n.canIds.bl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BR Module</div><div class="config-row">
                ${ft("can-br-drive","Drive",n.canIds.br_drive)}
                ${ft("can-br-turn","Turn",n.canIds.br_turn)}
                ${ft("can-br-enc","Encoder",n.canIds.br_encoder)}
            </div></div>
        </div>
        `:r?`
        <div class="config-row">${ft("can-ll","Left Leader",n.tankCanIds.left_leader)}${ft("can-lf","Left Follower",n.tankCanIds.left_follower)}</div>
        <div class="config-row">${ft("can-rl","Right Leader",n.tankCanIds.right_leader)}${ft("can-rf","Right Follower",n.tankCanIds.right_follower)}</div>
        `:""}
        ${ft("can-gyro","Gyro CAN ID",n.gyroCanId)}
        </div>
    `,Ns("chassisType",l=>{Ne.updateChassis({type:l,configured:!1}),Ei("chassis")});const a=document.getElementById("cfg-swerve-preset");a&&a.addEventListener("change",l=>{const c=l.target.value;if(c&&As[c]&&c!=="custom"){const d=As[c],u=document.getElementById("cfg-gear-ratio"),h=document.getElementById("cfg-wheel-diam"),f=document.getElementById("cfg-turn-ratio");u&&(u.value=d.driveRatio),h&&(h.value=d.wheelDiam),f&&(f.value=d.turnRatio)}}),(o=document.getElementById("cfg-swerve-encoder"))==null||o.addEventListener("change",l=>{Ne.updateChassis({swerveEncoderType:l.target.value}),Ei("chassis")})}function hs(i,e,t,n,s,r="",a=""){var v;const o=i.mechanisms[n];e.textContent=s.toUpperCase();let l=`<div class="config-section-title">MOTORS</div><div id="${n}-motors-list">`;o.motors.forEach((m,p)=>{l+=`<div class="motor-entry" data-idx="${p}">
            <div class="motor-entry-header">
                <div class="config-group config-group-sm" style="flex:1">
                    <label class="config-label">Role</label>
                    <select class="config-select motor-role-select" id="cfg-${n}-role-${p}">
                        <option value="leader" ${m.role==="leader"?"selected":""}>Leader</option>
                        <option value="follower" ${m.role==="follower"?"selected":""}>Follower</option>
                    </select>
                </div>
                ${p>0?`<button class="motor-remove-btn" data-type="${n}" data-idx="${p}" title="Remove">✕</button>`:""}
            </div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor</label>${Mi(`cfg-${n}-motor-${p}`,m.type)}</div>
                ${ft(`cfg-${n}-canid-${p}`,"CAN ID",m.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-${n}-inv-${p}" ${m.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        </div>`}),l+=`</div><button class="btn-add-motor" id="btn-add-motor-${n}">+ Add Motor</button>`;const c=o.motorConfig||{};let d=`<div class="config-divider"></div>
        <div class="config-section-title">MOTOR CONFIG</div>
        <div class="config-row">
            ${qe(`cfg-${n}-curlimit`,"Current Limit (A)",c.currentLimit,"40","1")}
        </div>
        <div class="config-group"><label class="config-label">Idle Mode</label>
            <div class="config-row config-row-inline">
                <label class="config-radio"><input type="radio" name="cfg-${n}-brakemode" value="brake" ${c.brakeMode!==!1?"checked":""}> Brake</label>
                <label class="config-radio"><input type="radio" name="cfg-${n}-brakemode" value="coast" ${c.brakeMode===!1?"checked":""}> Coast</label>
            </div>
        </div>`;if("rampRate"in o&&(d+=qe(`cfg-${n}-ramp`,"Ramp Rate (ms)",o.rampRate,"0","1")),o.pid){const m=o.pid;d+=`<div class="config-divider"></div>
            <div class="config-section-title">PID / FEEDFORWARD</div>
            <div class="config-row">
                ${qe(`cfg-${n}-kp`,"kP",m.kP,"0","0.001")}
                ${qe(`cfg-${n}-ki`,"kI",m.kI,"0","0.001")}
                ${qe(`cfg-${n}-kd`,"kD",m.kD,"0","0.001")}
            </div>
            <div class="config-row">
                ${qe(`cfg-${n}-ks`,"kS",m.kS,"0","0.001")}
                ${qe(`cfg-${n}-kv`,"kV",m.kV,"0","0.001")}
                ${qe(`cfg-${n}-ka`,"kA",m.kA,"0","0.001")}
            </div>`}let u=`<div class="config-divider"></div>
        <div class="config-row">${qe(`cfg-${n}-ratio`,"Gear Ratio",o.gearRatio,"1.0","0.01")}</div>`;const h=o.physics||{},f=`<div class="config-divider"></div>
        <details class="config-details">
            <summary class="config-section-title" style="cursor:pointer;user-select:none;">
                ⚙ PHYSICS (Simulation) <span style="font-size:0.7rem;color:var(--text-secondary);font-weight:400;">— optional, improves sim accuracy</span>
            </summary>
            <div class="config-row" style="margin-top:8px;">
                ${qe(`cfg-${n}-mass`,"Mass (kg)",h.massKg,"e.g. 5.0","0.1")}
                ${qe(`cfg-${n}-moi`,"MOI (kg·m²)",h.moiKgM2,"e.g. 0.1","0.001")}
            </div>
            <p class="config-hint" style="margin-top:4px;">Used in simulation physics model. Leave blank to use defaults.</p>
        </details>`,g=i.attachmentRules[n]?Zu(n,o,i.attachmentRules):"";t.innerHTML=a+l+d+g+u+f+r,(v=document.getElementById(`btn-add-motor-${n}`))==null||v.addEventListener("click",()=>{var p;const m=(((p=o.motors[o.motors.length-1])==null?void 0:p.canId)||50)+1;Ne.addMotor(n,{type:null,canId:m,role:"follower",inverted:!1}),Ei(n)}),t.querySelectorAll(".motor-remove-btn").forEach(m=>{m.addEventListener("click",p=>{p.stopPropagation(),Ne.removeMotor(n,parseInt(m.dataset.idx)),Ei(n)})})}function v0(i,e,t,n,s){hs(i,e,t,n,s.toUpperCase())}function _0(i,e,t){const n=i.mechanisms.elevator;hs(i,e,t,"elevator","Elevator",`
        <div class="config-group"><label class="config-label">Encoder</label><select class="config-select" id="cfg-elevator-encoder">${bi(Zc,n.encoder)}</select></div>
        ${ft("cfg-elevator-enc-id","Encoder CAN ID",n.encoderId)}
        <div class="config-row">
            ${qe("cfg-elevator-min","Min Height (m)",n.minHeight,"0","0.01")}
            ${qe("cfg-elevator-max","Max Height (m)",n.maxHeight,"1.5","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${qe("cfg-elevator-softfwd","Forward Limit",n.softLimitFwd,"","0.01")}
            ${qe("cfg-elevator-softrev","Reverse Limit",n.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">MOTION PROFILE</div>
        <div class="config-row">
            ${qe("cfg-elevator-mmvel","Max Velocity (m/s)",n.motionMaxVel,"","0.01")}
            ${qe("cfg-elevator-mmacc","Max Accel (m/s²)",n.motionMaxAccel,"","0.01")}
        </div>
    `)}function y0(i,e,t){const n=i.mechanisms.shooter,s=`
        <div class="config-section-title" style="margin-top:0">SHOOTER TYPE</div>
        <div class="config-group">
            ${Os([["flywheel_only",{name:"Flywheel Only",desc:"Static Angle Flywheels"}],["adjustable",{name:"Adjustable Hood",desc:"Pivot + Flywheels"}],["adjustable_turret",{name:"Adjustable + Turret",desc:"Pivot + Flywheels + Turret"}]],n.shooterType,"shooterType")}
        </div>
        <div class="config-divider"></div>
        <div class="config-row">${qe("cfg-shooter-rpm","Max Flywheel RPM",n.maxRPM,"5000","100")}</div>
        <div class="config-divider"></div>
        <div class="config-section-title" style="margin-bottom:-10px">FLYWHEEL MOTORS</div>
    `;let r="";if(n.shooterType==="adjustable"||n.shooterType==="adjustable_turret"){const o=n.pivotMotor||{type:null,canId:24,inverted:!1};r=`
            <div class="config-divider"></div>
            <div class="config-section-title">PIVOT MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${Mi("cfg-shooter-pivot-motor",o.type)}</div>
                ${ft("cfg-shooter-pivot-canid","CAN ID",o.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-pivot-inv" ${o.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}let a="";if(n.shooterType==="adjustable_turret"){const o=n.turretMotor||{type:null,canId:25,inverted:!1};a=`
            <div class="config-divider"></div>
            <div class="config-section-title">TURRET MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${Mi("cfg-shooter-turret-motor",o.type)}</div>
                ${ft("cfg-shooter-turret-canid","CAN ID",o.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-turret-inv" ${o.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}hs(i,e,t,"shooter","Shooter",r+a,s),Ns("shooterType",o=>{Ne.updateMechanism("shooter",{shooterType:o}),p0(o),Ei("shooter")})}function b0(i,e,t){var s;const n=i.mechanisms.intake;hs(i,e,t,"intake","Intake",`
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-intake-sensor" ${n.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="intake-sensor-cfg" style="${n.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-intake-sensor-type">${bi(eu,n.sensorPortType)}</select></div>
            ${qe("cfg-intake-sensor-port","Port Number",n.sensorPort,"0")}
        </div>
    `),(s=document.getElementById("cfg-intake-sensor"))==null||s.addEventListener("change",r=>{document.getElementById("intake-sensor-cfg").style.display=r.target.checked?"":"none"})}function x0(i,e,t){hs(i,e,t,"roller","Roller")}function S0(i,e,t){var s;const n=i.mechanisms.launcher;hs(i,e,t,"launcher","Launcher",`
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${qe("cfg-launcher-softfwd","Forward Limit",n.softLimitFwd,"","0.01")}
            ${qe("cfg-launcher-softrev","Reverse Limit",n.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-launcher-sensor" ${n.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="launcher-sensor-cfg" style="${n.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-launcher-sensor-type">${bi(eu,n.sensorPortType)}</select></div>
            ${qe("cfg-launcher-sensor-port","Port Number",n.sensorPort,"1")}
        </div>
    `),(s=document.getElementById("cfg-launcher-sensor"))==null||s.addEventListener("change",r=>{document.getElementById("launcher-sensor-cfg").style.display=r.target.checked?"":"none"})}function M0(i,e,t){var r,a;const n=i.mechanisms.arm;e.textContent="ARM";let s=`
        <div class="config-section-title" style="margin-top:0">DEGREES OF FREEDOM</div>
        <div class="config-group">
            <select class="config-select" id="cfg-arm-dof">
                <option value="1" ${n.dof===1?"selected":""}>1 DoF (Single Joint)</option>
                <option value="2" ${n.dof===2?"selected":""}>2 DoF (Double Jointed)</option>
                <option value="3" ${n.dof===3?"selected":""}>3 DoF (Triple Jointed)</option>
            </select>
        </div>
    `;for(let o=0;o<n.dof;o++){const l=n.joints[o]||{motors:[{type:null,canId:30+o*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+o*2,gearRatio:null,motorConfig:{currentLimit:40},pid:{kP:0,kI:0,kD:0},softLimitFwd:null,softLimitRev:null},c=l.motors[0]||{type:null,canId:30+o*2,inverted:!1},d=l.motors.length>1,u=l.motors[1]||{type:null,canId:31+o*2,inverted:!1};s+=`
            <div class="config-divider"></div>
            <div class="config-section-title" style="color: var(--accent-red); font-size: 0.95rem;">JOINT ${o+1}</div>
            
            <div class="config-group"><label class="config-label">Leader Motor Type</label>${Mi(`cfg-arm-joint-${o}-leader-motor`,c.type)}</div>
            <div class="config-row">
                ${ft(`cfg-arm-joint-${o}-leader-canid`,"Leader CAN ID",c.canId)}
                <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                    <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${o}-leader-inv" ${c.inverted?"checked":""}> Inverted</label>
                </div>
            </div>

            <div class="config-group">
                <div class="config-toggle-wrap">
                    <span class="config-toggle-label">Has Follower Motor</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cfg-arm-joint-${o}-hasfollower" ${d?"checked":""}>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div id="cfg-arm-joint-${o}-follower-cfg" style="${d?"":"display:none"}">
                <div class="config-group"><label class="config-label">Follower Motor Type</label>${Mi(`cfg-arm-joint-${o}-follower-motor`,u.type)}</div>
                <div class="config-row">
                    ${ft(`cfg-arm-joint-${o}-follower-canid`,"Follower CAN ID",u.canId)}
                    <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                        <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${o}-follower-inv" ${u.inverted?"checked":""}> Inverted</label>
                    </div>
                </div>
            </div>

            <div class="config-row">
                ${qe(`cfg-arm-joint-${o}-ratio`,"Gear Ratio",l.gearRatio,"e.g. 80")}
                ${qe(`cfg-arm-joint-${o}-curlimit`,"Current Limit (A)",l.motorConfig.currentLimit,"40")}
            </div>

            <!-- Encoder -->
            <div class="config-row">
                <div class="config-group">
                    <label class="config-label">Encoder Type</label>
                    <select class="config-select" id="cfg-arm-joint-${o}-encoder">
                        <option value="">Integrated</option>
                        <option value="cancoder" ${l.encoder==="cancoder"?"selected":""}>CANCoder</option>
                        <option value="throughbore" ${l.encoder==="throughbore"?"selected":""}>ThroughBore</option>
                    </select>
                </div>
                ${ft(`cfg-arm-joint-${o}-encoder-id`,"Encoder ID/Port",l.encoderId)}
            </div>

            <!-- Soft Limits -->
            <div class="config-row">
                ${qe(`cfg-arm-joint-${o}-softfwd`,"Soft Limit Fwd (rad)",l.softLimitFwd,"None","0.01")}
                ${qe(`cfg-arm-joint-${o}-softrev`,"Soft Limit Rev (rad)",l.softLimitRev,"None","0.01")}
            </div>

            <!-- PID -->
            <div class="config-row">
                ${qe(`cfg-arm-joint-${o}-kp`,"kP",l.pid.kP,"0")}
                ${qe(`cfg-arm-joint-${o}-ki`,"kI",l.pid.kI,"0")}
                ${qe(`cfg-arm-joint-${o}-kd`,"kD",l.pid.kD,"0")}
            </div>
        `}s+=Zu("arm",n,i.attachmentRules),t.innerHTML=s,(r=document.getElementById("cfg-arm-dof"))==null||r.addEventListener("change",o=>{const l=parseInt(o.target.value),c=[];for(let d=0;d<l;d++)c.push(n.joints[d]||{motors:[{type:null,canId:30+d*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+d*2,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null});Ne.updateMechanism("arm",{dof:l,joints:c}),Ei("arm")});for(let o=0;o<n.dof;o++)(a=document.getElementById(`cfg-arm-joint-${o}-hasfollower`))==null||a.addEventListener("change",l=>{document.getElementById(`cfg-arm-joint-${o}-follower-cfg`).style.display=l.target.checked?"":"none"})}function E0(i,e,t){const n=i.vision;e.textContent="VISION SYSTEM",t.innerHTML=`
        <div class="config-group"><label class="config-label">Vision System</label>
        ${Os([["limelight",{name:"Limelight",desc:"Smart camera using NetworkTables"}],["photonvision",{name:"PhotonVision",desc:"Open-source with PhotonLib"}]],n.system,"visionSystem")}</div>
        <div id="vision-sub"></div>
    `,Ns("visionSystem",s=>{Ne.updateVision({system:s}),Ma(s)}),n.system&&Ma(n.system)}function Ma(i){const e=document.getElementById("vision-sub");if(!e)return;const t=Ne.getState().vision;i==="limelight"?(e.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">LIMELIGHT</div>
            <div class="config-group"><label class="config-label">Limelight Version</label>
            ${Os(Object.entries(Qc),t.limelightVersion,"llVersion")}</div>
            ${Gc(t)}
        `,Ns("llVersion",n=>Ne.updateVision({limelightVersion:n}))):i==="photonvision"&&(e.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">PHOTONVISION</div>
            <div class="config-group"><label class="config-label">Coprocessor</label>
            ${Os(Object.entries(rd),t.photonPlatform,"photonPlat")}</div>
            ${Gc(t)}
        `,Ns("photonPlat",n=>Ne.updateVision({photonPlatform:n}))),w0()}function Gc(i){let e=`<div class="config-group"><label class="config-label">Number of Cameras</label>
        <select class="config-select" id="cfg-cam-count">${[1,2,3,4].map(t=>`<option value="${t}" ${i.cameraCount===t?"selected":""}>${t}</option>`).join("")}</select></div>
        <div id="camera-transforms">`;for(let t=0;t<i.cameraCount;t++){const n=i.cameras[t]||{name:`cam${t}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0};e+=`
        <div class="config-divider"></div>
        <div class="config-section-title">Camera ${t+1}</div>
        <div class="config-group"><label class="config-label">Name</label>
        <input class="config-input" id="cam-${t}-name" value="${n.name}" placeholder="camera_${t}"></div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Translation (meters from robot center)</div>
        <div class="config-row">
            ${qe(`cam-${t}-x`,"X (forward)",n.x,"0","0.001")}
            ${qe(`cam-${t}-y`,"Y (left)",n.y,"0","0.001")}
            ${qe(`cam-${t}-z`,"Z (up)",n.z,"0","0.001")}
        </div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Rotation (degrees)</div>
        <div class="config-row">
            ${qe(`cam-${t}-roll`,"Roll",n.roll,"0","0.1")}
            ${qe(`cam-${t}-pitch`,"Pitch",n.pitch,"0","0.1")}
            ${qe(`cam-${t}-yaw`,"Yaw",n.yaw,"0","0.1")}
        </div>`}return e+="</div>",e}function w0(){var i;(i=document.getElementById("cfg-cam-count"))==null||i.addEventListener("change",e=>{Ne.updateVision({cameraCount:parseInt(e.target.value)}),Ma(Ne.getState().vision.system)})}function T0(i,e,t){const n=i.statemachine;e.textContent="STATE MACHINE",t.innerHTML=`
        <a href="https://ray260508.github.io/StateGraphGenerator/" target="_blank" class="btn-primary" style="display:inline-flex;text-decoration:none;justify-content:center;">OPEN STATE GRAPH GENERATOR</a>
        <div class="config-hint">Design your state graph externally, then paste JSON below.</div>
        <div class="config-group"><label class="config-label">State Graph JSON</label>
        <textarea class="config-input" id="cfg-sm-json" rows="8" placeholder='{"nodes":[],"edges":[]}' style="resize:vertical;font-family:var(--font-mono);font-size:0.75rem;">${n.jsonData||""}</textarea></div>
    `}function A0(i){var t,n,s,r,a,o,l,c,d,u,h,f,g,v,m,p,y,b,S,A,I,R,L,E,w,U,C,N,M,F,ee,G,Z,Q,ae;const e=Ne.getState();if(i==="chassis"){const B={driveMotor:((t=document.getElementById("cfg-drive-motor"))==null?void 0:t.value)||null,turnMotor:((n=document.getElementById("cfg-turn-motor"))==null?void 0:n.value)||null,gyro:((s=document.getElementById("cfg-gyro"))==null?void 0:s.value)||null,gyroCanId:parseInt((r=document.getElementById("can-gyro"))==null?void 0:r.value)||50,gearRatio:parseFloat((a=document.getElementById("cfg-gear-ratio"))==null?void 0:a.value)||null,turnGearRatio:parseFloat((o=document.getElementById("cfg-turn-ratio"))==null?void 0:o.value)||null,wheelDiameter:parseFloat((l=document.getElementById("cfg-wheel-diam"))==null?void 0:l.value)||null,maxSpeed:parseFloat((c=document.getElementById("cfg-max-speed"))==null?void 0:c.value)||null,trackWidth:parseFloat((d=document.getElementById("cfg-track-width"))==null?void 0:d.value)||null},V=(u=document.getElementById("cfg-swerve-preset"))==null?void 0:u.value;if(V&&As[V]&&V!=="custom"){const $=As[V];B.gearRatio=B.gearRatio||$.driveRatio,B.turnGearRatio=B.turnGearRatio||$.turnRatio,B.wheelDiameter=B.wheelDiameter||$.wheelDiam,B.swervePreset=V}const ge=(h=document.getElementById("cfg-swerve-encoder"))==null?void 0:h.value;ge&&(B.swerveEncoderType=ge),e.chassis.type==="swerve"?B.canIds={fl_drive:parseInt((f=document.getElementById("can-fl-drive"))==null?void 0:f.value)||11,fl_turn:parseInt((g=document.getElementById("can-fl-turn"))==null?void 0:g.value)||12,fl_encoder:parseInt((v=document.getElementById("can-fl-enc"))==null?void 0:v.value)||13,fr_drive:parseInt((m=document.getElementById("can-fr-drive"))==null?void 0:m.value)||21,fr_turn:parseInt((p=document.getElementById("can-fr-turn"))==null?void 0:p.value)||22,fr_encoder:parseInt((y=document.getElementById("can-fr-enc"))==null?void 0:y.value)||23,bl_drive:parseInt((b=document.getElementById("can-bl-drive"))==null?void 0:b.value)||31,bl_turn:parseInt((S=document.getElementById("can-bl-turn"))==null?void 0:S.value)||32,bl_encoder:parseInt((A=document.getElementById("can-bl-enc"))==null?void 0:A.value)||33,br_drive:parseInt((I=document.getElementById("can-br-drive"))==null?void 0:I.value)||41,br_turn:parseInt((R=document.getElementById("can-br-turn"))==null?void 0:R.value)||42,br_encoder:parseInt((L=document.getElementById("can-br-enc"))==null?void 0:L.value)||43}:B.tankCanIds={left_leader:parseInt((E=document.getElementById("can-ll"))==null?void 0:E.value)||11,left_follower:parseInt((w=document.getElementById("can-lf"))==null?void 0:w.value)||12,right_leader:parseInt((U=document.getElementById("can-rl"))==null?void 0:U.value)||21,right_follower:parseInt((C=document.getElementById("can-rf"))==null?void 0:C.value)||22},Ne.updateChassis(B)}else if(e.mechanisms.hasOwnProperty(i))R0(i,e);else if(i==="vision"){const B=Ne.getState().vision;for(let V=0;V<B.cameraCount;V++)Ne.updateCamera(V,{name:((N=document.getElementById(`cam-${V}-name`))==null?void 0:N.value)||`cam${V}`,x:parseFloat((M=document.getElementById(`cam-${V}-x`))==null?void 0:M.value)||0,y:parseFloat((F=document.getElementById(`cam-${V}-y`))==null?void 0:F.value)||0,z:parseFloat((ee=document.getElementById(`cam-${V}-z`))==null?void 0:ee.value)||0,roll:parseFloat((G=document.getElementById(`cam-${V}-roll`))==null?void 0:G.value)||0,pitch:parseFloat((Z=document.getElementById(`cam-${V}-pitch`))==null?void 0:Z.value)||0,yaw:parseFloat((Q=document.getElementById(`cam-${V}-yaw`))==null?void 0:Q.value)||0});Ne.updateVision({configured:B.enabled&&B.system})}else i==="statemachine"&&Ne.updateStateMachine({jsonData:((ae=document.getElementById("cfg-sm-json"))==null?void 0:ae.value)||""})}function R0(i,e){var d,u,h,f,g,v,m,p,y,b,S,A,I,R,L,E,w,U,C,N,M,F,ee,G,Z,Q,ae,B,V,ge,$,te,ve,he,pe,ye,Ae,Oe,Ue,Ke,_,re,K,O,P,z,ne,T,x,k,X,W,J,fe,ce,_e;const t=e.mechanisms[i];if(!t)return;if(i==="arm"){const Fe=parseInt((d=document.getElementById("cfg-arm-dof"))==null?void 0:d.value)||t.dof,ue=[];for(let de=0;de<Fe;de++){const Pe=((u=document.getElementById(`cfg-arm-joint-${de}-hasfollower`))==null?void 0:u.checked)||!1,Ee=[{type:((h=document.getElementById(`cfg-arm-joint-${de}-leader-motor`))==null?void 0:h.value)||null,canId:parseInt((f=document.getElementById(`cfg-arm-joint-${de}-leader-canid`))==null?void 0:f.value)||30+de*2,inverted:((g=document.getElementById(`cfg-arm-joint-${de}-leader-inv`))==null?void 0:g.checked)||!1,role:"leader"}];Pe&&Ee.push({type:((v=document.getElementById(`cfg-arm-joint-${de}-follower-motor`))==null?void 0:v.value)||null,canId:parseInt((m=document.getElementById(`cfg-arm-joint-${de}-follower-canid`))==null?void 0:m.value)||31+de*2,inverted:((p=document.getElementById(`cfg-arm-joint-${de}-follower-inv`))==null?void 0:p.checked)||!1,role:"follower"}),ue.push({motors:Ee,gearRatio:parseFloat((y=document.getElementById(`cfg-arm-joint-${de}-ratio`))==null?void 0:y.value)||null,encoder:((b=document.getElementById(`cfg-arm-joint-${de}-encoder`))==null?void 0:b.value)||null,encoderId:parseInt((S=document.getElementById(`cfg-arm-joint-${de}-encoder-id`))==null?void 0:S.value)||31+de*2,motorConfig:{currentLimit:parseInt((A=document.getElementById(`cfg-arm-joint-${de}-curlimit`))==null?void 0:A.value)||40,brakeMode:!0},softLimitFwd:parseFloat((I=document.getElementById(`cfg-arm-joint-${de}-softfwd`))==null?void 0:I.value)||null,softLimitRev:parseFloat((R=document.getElementById(`cfg-arm-joint-${de}-softrev`))==null?void 0:R.value)||null,pid:{kP:parseFloat((L=document.getElementById(`cfg-arm-joint-${de}-kp`))==null?void 0:L.value)||0,kI:parseFloat((E=document.getElementById(`cfg-arm-joint-${de}-ki`))==null?void 0:E.value)||0,kD:parseFloat((w=document.getElementById(`cfg-arm-joint-${de}-kd`))==null?void 0:w.value)||0,kS:0,kV:0,kA:0}})}const xe=(U=document.getElementById(`cfg-${i}-attached`))==null?void 0:U.value;Ne.updateMechanism("arm",{dof:Fe,joints:ue,attachedTo:xe||t.attachedTo});return}t.motors.forEach((Fe,ue)=>{var xe,de,Pe,Ee;Ne.updateMotor(i,ue,{type:((xe=document.getElementById(`cfg-${i}-motor-${ue}`))==null?void 0:xe.value)||null,canId:parseInt((de=document.getElementById(`cfg-${i}-canid-${ue}`))==null?void 0:de.value)||Fe.canId,inverted:((Pe=document.getElementById(`cfg-${i}-inv-${ue}`))==null?void 0:Pe.checked)||!1,role:((Ee=document.getElementById(`cfg-${i}-role-${ue}`))==null?void 0:Ee.value)||Fe.role})});const n=(C=document.querySelector(`input[name="cfg-${i}-brakemode"]:checked`))==null?void 0:C.value,s={currentLimit:parseInt((N=document.getElementById(`cfg-${i}-curlimit`))==null?void 0:N.value)||40,brakeMode:n!=="coast"},r=t.pid?{kP:parseFloat((M=document.getElementById(`cfg-${i}-kp`))==null?void 0:M.value)||0,kI:parseFloat((F=document.getElementById(`cfg-${i}-ki`))==null?void 0:F.value)||0,kD:parseFloat((ee=document.getElementById(`cfg-${i}-kd`))==null?void 0:ee.value)||0,kS:parseFloat((G=document.getElementById(`cfg-${i}-ks`))==null?void 0:G.value)||0,kV:parseFloat((Z=document.getElementById(`cfg-${i}-kv`))==null?void 0:Z.value)||0,kA:parseFloat((Q=document.getElementById(`cfg-${i}-ka`))==null?void 0:Q.value)||0}:void 0,a=(ae=document.getElementById(`cfg-${i}-attached`))==null?void 0:ae.value,o={gearRatio:parseFloat((B=document.getElementById(`cfg-${i}-ratio`))==null?void 0:B.value)||null,motorConfig:s,attachedTo:a||t.attachedTo};r&&(o.pid=r),"rampRate"in t&&(o.rampRate=parseFloat((V=document.getElementById(`cfg-${i}-ramp`))==null?void 0:V.value)||0),i==="elevator"&&(o.encoder=((ge=document.getElementById("cfg-elevator-encoder"))==null?void 0:ge.value)||null,o.encoderId=parseInt(($=document.getElementById("cfg-elevator-enc-id"))==null?void 0:$.value)||53,o.minHeight=parseFloat((te=document.getElementById("cfg-elevator-min"))==null?void 0:te.value)||0,o.maxHeight=parseFloat((ve=document.getElementById("cfg-elevator-max"))==null?void 0:ve.value)||null,o.softLimitFwd=parseFloat((he=document.getElementById("cfg-elevator-softfwd"))==null?void 0:he.value)||null,o.softLimitRev=parseFloat((pe=document.getElementById("cfg-elevator-softrev"))==null?void 0:pe.value)||null,o.motionMaxVel=parseFloat((ye=document.getElementById("cfg-elevator-mmvel"))==null?void 0:ye.value)||null,o.motionMaxAccel=parseFloat((Ae=document.getElementById("cfg-elevator-mmacc"))==null?void 0:Ae.value)||null),i==="shooter"&&(o.maxRPM=parseInt((Oe=document.getElementById("cfg-shooter-rpm"))==null?void 0:Oe.value)||null,(t.shooterType==="adjustable"||t.shooterType==="adjustable_turret")&&(o.pivotMotor={type:((Ue=document.getElementById("cfg-shooter-pivot-motor"))==null?void 0:Ue.value)||null,canId:parseInt((Ke=document.getElementById("cfg-shooter-pivot-canid"))==null?void 0:Ke.value)||24,inverted:((_=document.getElementById("cfg-shooter-pivot-inv"))==null?void 0:_.checked)||!1}),t.shooterType==="adjustable_turret"&&(o.turretMotor={type:((re=document.getElementById("cfg-shooter-turret-motor"))==null?void 0:re.value)||null,canId:parseInt((K=document.getElementById("cfg-shooter-turret-canid"))==null?void 0:K.value)||25,inverted:((O=document.getElementById("cfg-shooter-turret-inv"))==null?void 0:O.checked)||!1})),i==="intake"&&(o.hasSensor=((P=document.getElementById("cfg-intake-sensor"))==null?void 0:P.checked)||!1,o.sensorPortType=((z=document.getElementById("cfg-intake-sensor-type"))==null?void 0:z.value)||"dio",o.sensorPort=parseInt((ne=document.getElementById("cfg-intake-sensor-port"))==null?void 0:ne.value)||0),i==="launcher"&&(o.softLimitFwd=parseFloat((T=document.getElementById("cfg-launcher-softfwd"))==null?void 0:T.value)||null,o.softLimitRev=parseFloat((x=document.getElementById("cfg-launcher-softrev"))==null?void 0:x.value)||null,o.hasSensor=((k=document.getElementById("cfg-launcher-sensor"))==null?void 0:k.checked)||!1,o.sensorPortType=((X=document.getElementById("cfg-launcher-sensor-type"))==null?void 0:X.value)||"dio",o.sensorPort=parseInt((W=document.getElementById("cfg-launcher-sensor-port"))==null?void 0:W.value)||1);const l=parseFloat((J=document.getElementById(`cfg-${i}-mass`))==null?void 0:J.value),c=parseFloat((fe=document.getElementById(`cfg-${i}-moi`))==null?void 0:fe.value);(!isNaN(l)||!isNaN(c))&&(o.physics={massKg:isNaN(l)?((ce=t.physics)==null?void 0:ce.massKg)||null:l,moiKgM2:isNaN(c)?((_e=t.physics)==null?void 0:_e.moiKgM2)||null:c}),Ne.updateMechanism(i,o)}function Ns(i,e){document.querySelectorAll(`[data-name="${i}"]`).forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(`[data-name="${i}"]`).forEach(n=>n.classList.remove("active")),t.classList.add("active"),e(t.dataset.value)})})}function C0(){const i=document.getElementById("particle-canvas");if(!i)return;const e=i.getContext("2d");let t=[],n;function s(){i.width=window.innerWidth,i.height=window.innerHeight}function r(){t=[];const o=Math.floor(i.width*i.height/15e3);for(let l=0;l<o;l++)t.push({x:Math.random()*i.width,y:Math.random()*i.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,alpha:Math.random()*.4+.1})}function a(){e.clearRect(0,0,i.width,i.height);for(let o=0;o<t.length;o++)for(let l=o+1;l<t.length;l++){const c=t[o].x-t[l].x,d=t[o].y-t[l].y,u=Math.sqrt(c*c+d*d);u<120&&(e.beginPath(),e.moveTo(t[o].x,t[o].y),e.lineTo(t[l].x,t[l].y),e.strokeStyle=`rgba(213,0,28,${.08*(1-u/120)})`,e.lineWidth=.5,e.stroke())}t.forEach(o=>{o.x+=o.vx,o.y+=o.vy,(o.x<0||o.x>i.width)&&(o.vx*=-1),(o.y<0||o.y>i.height)&&(o.vy*=-1),e.beginPath(),e.arc(o.x,o.y,o.r,0,Math.PI*2),e.fillStyle=`rgba(213,0,28,${o.alpha})`,e.fill()}),n=requestAnimationFrame(a)}return s(),r(),a(),window.addEventListener("resize",()=>{s(),r()}),()=>cancelAnimationFrame(n)}function ni(i,e="info"){const t=document.querySelector(".toast");t&&t.remove();const n=document.createElement("div");n.className=`toast ${e} toast-auto-hide`,n.innerHTML=`${e==="success"?"✓":e==="error"?"✕":"ℹ"} ${i}`,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function br(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ro={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var $c;function D0(){return $c||($c=1,(function(i,e){(function(t){i.exports=t()})(function(){return(function t(n,s,r){function a(c,d){if(!s[c]){if(!n[c]){var u=typeof br=="function"&&br;if(!d&&u)return u(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var f=s[c]={exports:{}};n[c][0].call(f.exports,function(g){var v=n[c][1][g];return a(v||g)},f,f.exports,t,n,s,r)}return s[c].exports}for(var o=typeof br=="function"&&br,l=0;l<r.length;l++)a(r[l]);return a})({1:[function(t,n,s){var r=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(l){for(var c,d,u,h,f,g,v,m=[],p=0,y=l.length,b=y,S=r.getTypeOf(l)!=="string";p<l.length;)b=y-p,u=S?(c=l[p++],d=p<y?l[p++]:0,p<y?l[p++]:0):(c=l.charCodeAt(p++),d=p<y?l.charCodeAt(p++):0,p<y?l.charCodeAt(p++):0),h=c>>2,f=(3&c)<<4|d>>4,g=1<b?(15&d)<<2|u>>6:64,v=2<b?63&u:64,m.push(o.charAt(h)+o.charAt(f)+o.charAt(g)+o.charAt(v));return m.join("")},s.decode=function(l){var c,d,u,h,f,g,v=0,m=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var y,b=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&b--,l.charAt(l.length-2)===o.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=a.uint8array?new Uint8Array(0|b):new Array(0|b);v<l.length;)c=o.indexOf(l.charAt(v++))<<2|(h=o.indexOf(l.charAt(v++)))>>4,d=(15&h)<<4|(f=o.indexOf(l.charAt(v++)))>>2,u=(3&f)<<6|(g=o.indexOf(l.charAt(v++))),y[m++]=c,f!==64&&(y[m++]=d),g!==64&&(y[m++]=u);return y}},{"./support":30,"./utils":32}],2:[function(t,n,s){var r=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(d,u,h,f,g){this.compressedSize=d,this.uncompressedSize=u,this.crc32=h,this.compression=f,this.compressedContent=g}c.prototype={getContentWorker:function(){var d=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,u,h){return d.pipe(new o).pipe(new l("uncompressedSize")).pipe(u.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,s){var r=t("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},s.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,s){var r=t("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();n.exports=function(o,l){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?(function(c,d,u,h){var f=a,g=h+u;c^=-1;for(var v=h;v<g;v++)c=c>>>8^f[255&(c^d[v])];return-1^c})(0|l,o,o.length,0):(function(c,d,u,h){var f=a,g=h+u;c^=-1;for(var v=h;v<g;v++)c=c>>>8^f[255&(c^d.charCodeAt(v))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(t,n,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(t,n,s){var r=null;r=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:r}},{lie:37}],7:[function(t,n,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),l=t("./stream/GenericWorker"),c=r?"uint8array":"array";function d(u,h){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=h,this.meta={}}s.magic="\b\0",o.inherits(d,l),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,u.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(h){u.push({data:h,meta:u.meta})}},s.compressWorker=function(u){return new d("Deflate",u)},s.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,s){function r(f,g){var v,m="";for(v=0;v<g;v++)m+=String.fromCharCode(255&f),f>>>=8;return m}function a(f,g,v,m,p,y){var b,S,A=f.file,I=f.compression,R=y!==c.utf8encode,L=o.transformTo("string",y(A.name)),E=o.transformTo("string",c.utf8encode(A.name)),w=A.comment,U=o.transformTo("string",y(w)),C=o.transformTo("string",c.utf8encode(w)),N=E.length!==A.name.length,M=C.length!==w.length,F="",ee="",G="",Z=A.dir,Q=A.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!v||(ae.crc32=f.crc32,ae.compressedSize=f.compressedSize,ae.uncompressedSize=f.uncompressedSize);var B=0;g&&(B|=8),R||!N&&!M||(B|=2048);var V=0,ge=0;Z&&(V|=16),p==="UNIX"?(ge=798,V|=(function(te,ve){var he=te;return te||(he=ve?16893:33204),(65535&he)<<16})(A.unixPermissions,Z)):(ge=20,V|=(function(te){return 63&(te||0)})(A.dosPermissions)),b=Q.getUTCHours(),b<<=6,b|=Q.getUTCMinutes(),b<<=5,b|=Q.getUTCSeconds()/2,S=Q.getUTCFullYear()-1980,S<<=4,S|=Q.getUTCMonth()+1,S<<=5,S|=Q.getUTCDate(),N&&(ee=r(1,1)+r(d(L),4)+E,F+="up"+r(ee.length,2)+ee),M&&(G=r(1,1)+r(d(U),4)+C,F+="uc"+r(G.length,2)+G);var $="";return $+=`
\0`,$+=r(B,2),$+=I.magic,$+=r(b,2),$+=r(S,2),$+=r(ae.crc32,4),$+=r(ae.compressedSize,4),$+=r(ae.uncompressedSize,4),$+=r(L.length,2),$+=r(F.length,2),{fileRecord:u.LOCAL_FILE_HEADER+$+L+F,dirRecord:u.CENTRAL_FILE_HEADER+r(ge,2)+$+r(U.length,2)+"\0\0\0\0"+r(V,4)+r(m,4)+L+F+U}}var o=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),d=t("../crc32"),u=t("../signature");function h(f,g,v,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=v,this.encodeFileName=m,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(f){var g=f.meta.percent||0,v=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:v?(g+100*(v-m-1))/v:100}}))},h.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var v=a(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,v=a(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),g)this.push({data:(function(m){return u.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)})(f),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var v=this.bytesWritten-f,m=(function(p,y,b,S,A){var I=o.transformTo("string",A(S));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(p,2)+r(p,2)+r(y,4)+r(b,4)+r(I.length,2)+I})(this.dirRecords.length,v,f,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(v){g.processChunk(v)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(v){g.error(v)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(f){var g=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var v=0;v<g.length;v++)try{g[v].error(f)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},n.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,s){var r=t("../compressions"),a=t("./ZipFileWorker");s.generateWorker=function(o,l,c){var d=new a(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{o.forEach(function(h,f){u++;var g=(function(y,b){var S=y||b,A=r[S];if(!A)throw new Error(S+" is not a valid compression method !");return A})(f.options.compression,l.compression),v=f.options.compressionOptions||l.compressionOptions||{},m=f.dir,p=f.date;f._compressWorker(g,v).withStreamInfo("file",{name:h,dir:m,date:p,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,s){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,o){return new r().loadAsync(a,o)},r.external=t("./external"),n.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,s){var r=t("./utils"),a=t("./external"),o=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),d=t("./nodejsUtils");function u(h){return new a.Promise(function(f,g){var v=h.decompressed.getContentWorker().pipe(new c);v.on("error",function(m){g(m)}).on("end",function(){v.streamInfo.crc32!==h.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(h,f){var g=this;return f=r.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",h,!0,f.optimizedBinaryString,f.base64).then(function(v){var m=new l(f);return m.load(v),m}).then(function(v){var m=[a.Promise.resolve(v)],p=v.files;if(f.checkCRC32)for(var y=0;y<p.length;y++)m.push(u(p[y]));return a.Promise.all(m)}).then(function(v){for(var m=v.shift(),p=m.files,y=0;y<p.length;y++){var b=p[y],S=b.fileNameStr,A=r.resolve(b.fileNameStr);g.file(A,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:f.createFolders}),b.dir||(g.file(A).unsafeOriginalName=S)}return m.zipComment.length&&(g.comment=m.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,s){var r=t("../utils"),a=t("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}r.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,s){var r=t("readable-stream").Readable;function a(o,l,c){r.call(this,l),this._helper=o;var d=this;o.on("data",function(u,h){d.push(u)||d._helper.pause(),c&&c(h)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,s){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,n,s){function r(A,I,R){var L,E=o.getTypeOf(I),w=o.extend(R||{},d);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(A=p(A)),w.createFolders&&(L=m(A))&&y.call(this,L,!0);var U=E==="string"&&w.binary===!1&&w.base64===!1;R&&R.binary!==void 0||(w.binary=!U),(I instanceof u&&I.uncompressedSize===0||w.dir||!I||I.length===0)&&(w.base64=!1,w.binary=!0,I="",w.compression="STORE",E="string");var C=null;C=I instanceof u||I instanceof l?I:g.isNode&&g.isStream(I)?new v(A,I):o.prepareContent(A,I,w.binary,w.optimizedBinaryString,w.base64);var N=new h(A,C,w);this.files[A]=N}var a=t("./utf8"),o=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),d=t("./defaults"),u=t("./compressedObject"),h=t("./zipObject"),f=t("./generate"),g=t("./nodejsUtils"),v=t("./nodejs/NodejsStreamInputAdapter"),m=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var I=A.lastIndexOf("/");return 0<I?A.substring(0,I):""},p=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},y=function(A,I){return I=I!==void 0?I:d.createFolders,A=p(A),this.files[A]||r.call(this,A,null,{dir:!0,createFolders:I}),this.files[A]};function b(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var I,R,L;for(I in this.files)L=this.files[I],(R=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&A(R,L)},filter:function(A){var I=[];return this.forEach(function(R,L){A(R,L)&&I.push(L)}),I},file:function(A,I,R){if(arguments.length!==1)return A=this.root+A,r.call(this,A,I,R),this;if(b(A)){var L=A;return this.filter(function(w,U){return!U.dir&&L.test(w)})}var E=this.files[this.root+A];return E&&!E.dir?E:null},folder:function(A){if(!A)return this;if(b(A))return this.filter(function(E,w){return w.dir&&A.test(E)});var I=this.root+A,R=y.call(this,I),L=this.clone();return L.root=R.name,L},remove:function(A){A=this.root+A;var I=this.files[A];if(I||(A.slice(-1)!=="/"&&(A+="/"),I=this.files[A]),I&&!I.dir)delete this.files[A];else for(var R=this.filter(function(E,w){return w.name.slice(0,A.length)===A}),L=0;L<R.length;L++)delete this.files[R[L].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var I,R={};try{if((R=o.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=R.type.toLowerCase(),R.compression=R.compression.toUpperCase(),R.type==="binarystring"&&(R.type="string"),!R.type)throw new Error("No output type specified.");o.checkSupport(R.type),R.platform!=="darwin"&&R.platform!=="freebsd"&&R.platform!=="linux"&&R.platform!=="sunos"||(R.platform="UNIX"),R.platform==="win32"&&(R.platform="DOS");var L=R.comment||this.comment||"";I=f.generateWorker(this,R,L)}catch(E){(I=new l("error")).error(E)}return new c(I,R.type||"string",R.mimeType)},generateAsync:function(A,I){return this.generateInternalStream(A).accumulate(I)},generateNodeStream:function(A,I){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(I)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,s){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,s){var r=t("./DataReader");function a(o){r.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===d&&this.data[h+3]===u)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&d===h[2]&&u===h[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,s){var r=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(t,n,s){var r=t("./Uint8ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,s){var r=t("./DataReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,s){var r=t("./ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,s){var r=t("../utils"),a=t("../support"),o=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),d=t("./Uint8ArrayReader");n.exports=function(u){var h=r.getTypeOf(u);return r.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new c(u):a.uint8array?new d(r.transformTo("uint8array",u)):new o(r.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,s){var r=t("./GenericWorker"),a=t("../utils");function o(l){r.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,r),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,s){var r=t("./GenericWorker"),a=t("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,r),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,s){var r=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}r.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,s){var r=t("../utils"),a=t("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=r.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}r.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,s){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=r},{}],29:[function(t,n,s){var r=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),l=t("../base64"),c=t("../support"),d=t("../external"),u=null;if(c.nodestream)try{u=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(g,v){return new d.Promise(function(m,p){var y=[],b=g._internalType,S=g._outputType,A=g._mimeType;g.on("data",function(I,R){y.push(I),v&&v(R)}).on("error",function(I){y=[],p(I)}).on("end",function(){try{var I=(function(R,L,E){switch(R){case"blob":return r.newBlob(r.transformTo("arraybuffer",L),E);case"base64":return l.encode(L);default:return r.transformTo(R,L)}})(S,(function(R,L){var E,w=0,U=null,C=0;for(E=0;E<L.length;E++)C+=L[E].length;switch(R){case"string":return L.join("");case"array":return Array.prototype.concat.apply([],L);case"uint8array":for(U=new Uint8Array(C),E=0;E<L.length;E++)U.set(L[E],w),w+=L[E].length;return U;case"nodebuffer":return Buffer.concat(L);default:throw new Error("concat : unsupported type '"+R+"'")}})(b,y),A);m(I)}catch(R){p(R)}y=[]}).resume()})}function f(g,v,m){var p=v;switch(v){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=v,this._mimeType=m,r.checkSupport(p),this._worker=g.pipe(new a(p)),g.lock()}catch(y){this._worker=new o("error"),this._worker.error(y)}}f.prototype={accumulate:function(g){return h(this,g)},on:function(g,v){var m=this;return g==="data"?this._worker.on(g,function(p){v.call(m,p.data,p.meta)}):this._worker.on(g,function(){r.delay(v,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var r=new ArrayBuffer(0);try{s.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),s.blob=a.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!t("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,s){for(var r=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}s.utf8encode=function(f){return a.nodebuffer?o.newBufferFrom(f,"utf-8"):(function(g){var v,m,p,y,b,S=g.length,A=0;for(y=0;y<S;y++)(64512&(m=g.charCodeAt(y)))==55296&&y+1<S&&(64512&(p=g.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),y++),A+=m<128?1:m<2048?2:m<65536?3:4;for(v=a.uint8array?new Uint8Array(A):new Array(A),y=b=0;b<A;y++)(64512&(m=g.charCodeAt(y)))==55296&&y+1<S&&(64512&(p=g.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),y++),m<128?v[b++]=m:(m<2048?v[b++]=192|m>>>6:(m<65536?v[b++]=224|m>>>12:(v[b++]=240|m>>>18,v[b++]=128|m>>>12&63),v[b++]=128|m>>>6&63),v[b++]=128|63&m);return v})(f)},s.utf8decode=function(f){return a.nodebuffer?r.transformTo("nodebuffer",f).toString("utf-8"):(function(g){var v,m,p,y,b=g.length,S=new Array(2*b);for(v=m=0;v<b;)if((p=g[v++])<128)S[m++]=p;else if(4<(y=c[p]))S[m++]=65533,v+=y-1;else{for(p&=y===2?31:y===3?15:7;1<y&&v<b;)p=p<<6|63&g[v++],y--;1<y?S[m++]=65533:p<65536?S[m++]=p:(p-=65536,S[m++]=55296|p>>10&1023,S[m++]=56320|1023&p)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),r.applyFromCharCode(S)})(f=r.transformTo(a.uint8array?"uint8array":"array",f))},r.inherits(u,l),u.prototype.processChunk=function(f){var g=r.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var v=g;(g=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),g.set(v,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var m=(function(y,b){var S;for((b=b||y.length)>y.length&&(b=y.length),S=b-1;0<=S&&(192&y[S])==128;)S--;return S<0||S===0?b:S+c[y[S]]>b?S:b})(g),p=g;m!==g.length&&(a.uint8array?(p=g.subarray(0,m),this.leftOver=g.subarray(m,g.length)):(p=g.slice(0,m),this.leftOver=g.slice(m,g.length))),this.push({data:s.utf8decode(p),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=u,r.inherits(h,l),h.prototype.processChunk=function(f){this.push({data:s.utf8encode(f.data),meta:f.meta})},s.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,s){var r=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),l=t("./external");function c(v){return v}function d(v,m){for(var p=0;p<v.length;++p)m[p]=255&v.charCodeAt(p);return m}t("setimmediate"),s.newBlob=function(v,m){s.checkSupport("blob");try{return new Blob([v],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(v),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(v,m,p){var y=[],b=0,S=v.length;if(S<=p)return String.fromCharCode.apply(null,v);for(;b<S;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,v.slice(b,Math.min(b+p,S)))):y.push(String.fromCharCode.apply(null,v.subarray(b,Math.min(b+p,S)))),b+=p;return y.join("")},stringifyByChar:function(v){for(var m="",p=0;p<v.length;p++)m+=String.fromCharCode(v[p]);return m},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function h(v){var m=65536,p=s.getTypeOf(v),y=!0;if(p==="uint8array"?y=u.applyCanBeUsed.uint8array:p==="nodebuffer"&&(y=u.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return u.stringifyByChunk(v,p,m)}catch{m=Math.floor(m/2)}return u.stringifyByChar(v)}function f(v,m){for(var p=0;p<v.length;p++)m[p]=v[p];return m}s.applyFromCharCode=h;var g={};g.string={string:c,array:function(v){return d(v,new Array(v.length))},arraybuffer:function(v){return g.string.uint8array(v).buffer},uint8array:function(v){return d(v,new Uint8Array(v.length))},nodebuffer:function(v){return d(v,o.allocBuffer(v.length))}},g.array={string:h,array:c,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return o.newBufferFrom(v)}},g.arraybuffer={string:function(v){return h(new Uint8Array(v))},array:function(v){return f(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:c,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return o.newBufferFrom(new Uint8Array(v))}},g.uint8array={string:h,array:function(v){return f(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:c,nodebuffer:function(v){return o.newBufferFrom(v)}},g.nodebuffer={string:h,array:function(v){return f(v,new Array(v.length))},arraybuffer:function(v){return g.nodebuffer.uint8array(v).buffer},uint8array:function(v){return f(v,new Uint8Array(v.length))},nodebuffer:c},s.transformTo=function(v,m){if(m=m||"",!v)return m;s.checkSupport(v);var p=s.getTypeOf(m);return g[p][v](m)},s.resolve=function(v){for(var m=v.split("/"),p=[],y=0;y<m.length;y++){var b=m[y];b==="."||b===""&&y!==0&&y!==m.length-1||(b===".."?p.pop():p.push(b))}return p.join("/")},s.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(v)?"nodebuffer":r.uint8array&&v instanceof Uint8Array?"uint8array":r.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(v){if(!r[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(v){var m,p,y="";for(p=0;p<(v||"").length;p++)y+="\\x"+((m=v.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return y},s.delay=function(v,m,p){setImmediate(function(){v.apply(p||null,m||[])})},s.inherits=function(v,m){function p(){}p.prototype=m.prototype,v.prototype=new p},s.extend=function(){var v,m,p={};for(v=0;v<arguments.length;v++)for(m in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],m)&&p[m]===void 0&&(p[m]=arguments[v][m]);return p},s.prepareContent=function(v,m,p,y,b){return l.Promise.resolve(m).then(function(S){return r.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,I){var R=new FileReader;R.onload=function(L){A(L.target.result)},R.onerror=function(L){I(L.target.error)},R.readAsArrayBuffer(S)}):S}).then(function(S){var A=s.getTypeOf(S);return A?(A==="arraybuffer"?S=s.transformTo("uint8array",S):A==="string"&&(b?S=a.decode(S):p&&y!==!0&&(S=(function(I){return d(I,r.uint8array?new Uint8Array(I.length):new Array(I.length))})(S))),S):l.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,s){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),l=t("./zipEntry"),c=t("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(u)+")")}},isSignature:function(u,h){var f=this.reader.index;this.reader.setIndex(u);var g=this.reader.readString(4)===h;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",f=a.transformTo(h,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,h,f,g=this.zip64EndOfCentralSize-44;0<g;)u=this.reader.readInt(2),h=this.reader.readInt(4),f=this.reader.readData(h),this.zip64ExtensibleData[u]={id:u,length:h,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,h;for(u=0;u<this.files.length;u++)h=this.files[u],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var h=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=h-f;if(0<g)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=r(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,s){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),d=t("./compressions"),u=t("./support");function h(f,g){this.options=f,this.loadOptions=g}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,v;if(f.skip(22),this.fileNameLength=f.readInt(2),v=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(m){for(var p in d)if(Object.prototype.hasOwnProperty.call(d,p)&&d[p].magic===m)return d[p];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,v,m,p=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<p;)g=f.readInt(2),v=f.readInt(2),m=f.readData(v),this.extraFields[g]={id:g,length:v,value:m};f.setIndex(p)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var v=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=r(f.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=r(f.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null}},n.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,s){function r(g,v,m){this.name=g,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=v,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),d=t("./stream/GenericWorker");r.prototype={internalStream:function(g){var v=null,m="string";try{if(!g)throw new Error("No output type specified.");var p=(m=g.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),v=this._decompressWorker();var y=!this._dataBinary;y&&!p&&(v=v.pipe(new l.Utf8EncodeWorker)),!y&&p&&(v=v.pipe(new l.Utf8DecodeWorker))}catch(b){(v=new d("error")).error(b)}return new a(v,m,"")},async:function(g,v){return this.internalStream(g).accumulate(v)},nodeStream:function(g,v){return this.internalStream(g||"nodebuffer").toNodejsStream(v)},_compressWorker:function(g,v){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,g,v)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)r.prototype[u[f]]=h;n.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,s){(function(r){var a,o,l=r.MutationObserver||r.WebKitMutationObserver;if(l){var c=0,d=new l(g),u=r.document.createTextNode("");d.observe(u,{characterData:!0}),a=function(){u.data=c=++c%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var v=r.document.createElement("script");v.onreadystatechange=function(){g(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},r.document.documentElement.appendChild(v)}:function(){setTimeout(g,0)};else{var h=new r.MessageChannel;h.port1.onmessage=g,a=function(){h.port2.postMessage(0)}}var f=[];function g(){var v,m;o=!0;for(var p=f.length;p;){for(m=f,f=[],v=-1;++v<p;)m[v]();p=f.length}o=!1}n.exports=function(v){f.push(v)!==1||o||a()}}).call(this,typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,s){var r=t("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function u(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,p!==a&&v(this,p)}function h(p,y,b){this.promise=p,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function f(p,y,b){r(function(){var S;try{S=y(b)}catch(A){return o.reject(p,A)}S===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,S)})}function g(p){var y=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof y=="function")return function(){y.apply(p,arguments)}}function v(p,y){var b=!1;function S(R){b||(b=!0,o.reject(p,R))}function A(R){b||(b=!0,o.resolve(p,R))}var I=m(function(){y(A,S)});I.status==="error"&&S(I.value)}function m(p,y){var b={};try{b.value=p(y),b.status="success"}catch(S){b.status="error",b.value=S}return b}(n.exports=u).prototype.finally=function(p){if(typeof p!="function")return this;var y=this.constructor;return this.then(function(b){return y.resolve(p()).then(function(){return b})},function(b){return y.resolve(p()).then(function(){throw b})})},u.prototype.catch=function(p){return this.then(null,p)},u.prototype.then=function(p,y){if(typeof p!="function"&&this.state===c||typeof y!="function"&&this.state===l)return this;var b=new this.constructor(a);return this.state!==d?f(b,this.state===c?p:y,this.outcome):this.queue.push(new h(b,p,y)),b},h.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},h.prototype.otherCallFulfilled=function(p){f(this.promise,this.onFulfilled,p)},h.prototype.callRejected=function(p){o.reject(this.promise,p)},h.prototype.otherCallRejected=function(p){f(this.promise,this.onRejected,p)},o.resolve=function(p,y){var b=m(g,y);if(b.status==="error")return o.reject(p,b.value);var S=b.value;if(S)v(p,S);else{p.state=c,p.outcome=y;for(var A=-1,I=p.queue.length;++A<I;)p.queue[A].callFulfilled(y)}return p},o.reject=function(p,y){p.state=l,p.outcome=y;for(var b=-1,S=p.queue.length;++b<S;)p.queue[b].callRejected(y);return p},u.resolve=function(p){return p instanceof this?p:o.resolve(new this(a),p)},u.reject=function(p){var y=new this(a);return o.reject(y,p)},u.all=function(p){var y=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=p.length,S=!1;if(!b)return this.resolve([]);for(var A=new Array(b),I=0,R=-1,L=new this(a);++R<b;)E(p[R],R);return L;function E(w,U){y.resolve(w).then(function(C){A[U]=C,++I!==b||S||(S=!0,o.resolve(L,A))},function(C){S||(S=!0,o.reject(L,C))})}},u.race=function(p){var y=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=p.length,S=!1;if(!b)return this.resolve([]);for(var A=-1,I=new this(a);++A<b;)R=p[A],y.resolve(R).then(function(L){S||(S=!0,o.resolve(I,L))},function(L){S||(S=!0,o.reject(I,L))});var R;return I}},{immediate:36}],38:[function(t,n,s){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,s){var r=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),d=Object.prototype.toString,u=0,h=-1,f=0,g=8;function v(p){if(!(this instanceof v))return new v(p);this.options=a.assign({level:h,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},p||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var b=r.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(b!==u)throw new Error(l[b]);if(y.header&&r.deflateSetHeader(this.strm,y.header),y.dictionary){var S;if(S=typeof y.dictionary=="string"?o.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(b=r.deflateSetDictionary(this.strm,S))!==u)throw new Error(l[b]);this._dict_set=!0}}function m(p,y){var b=new v(y);if(b.push(p,!0),b.err)throw b.msg||l[b.err];return b.result}v.prototype.push=function(p,y){var b,S,A=this.strm,I=this.options.chunkSize;if(this.ended)return!1;S=y===~~y?y:y===!0?4:0,typeof p=="string"?A.input=o.string2buf(p):d.call(p)==="[object ArrayBuffer]"?A.input=new Uint8Array(p):A.input=p,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(I),A.next_out=0,A.avail_out=I),(b=r.deflate(A,S))!==1&&b!==u)return this.onEnd(b),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(A.output,A.next_out))):this.onData(a.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&b!==1);return S===4?(b=r.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===u):S!==2||(this.onEnd(u),!(A.avail_out=0))},v.prototype.onData=function(p){this.chunks.push(p)},v.prototype.onEnd=function(p){p===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},s.Deflate=v,s.deflate=m,s.deflateRaw=function(p,y){return(y=y||{}).raw=!0,m(p,y)},s.gzip=function(p,y){return(y=y||{}).gzip=!0,m(p,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,s){var r=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),d=t("./zlib/zstream"),u=t("./zlib/gzheader"),h=Object.prototype.toString;function f(v){if(!(this instanceof f))return new f(v);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},v||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||v&&v.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var p=r.inflateInit2(this.strm,m.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new u,r.inflateGetHeader(this.strm,this.header)}function g(v,m){var p=new f(m);if(p.push(v,!0),p.err)throw p.msg||c[p.err];return p.result}f.prototype.push=function(v,m){var p,y,b,S,A,I,R=this.strm,L=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof v=="string"?R.input=o.binstring2buf(v):h.call(v)==="[object ArrayBuffer]"?R.input=new Uint8Array(v):R.input=v,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(L),R.next_out=0,R.avail_out=L),(p=r.inflate(R,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&E&&(I=typeof E=="string"?o.string2buf(E):h.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,p=r.inflateSetDictionary(this.strm,I)),p===l.Z_BUF_ERROR&&w===!0&&(p=l.Z_OK,w=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);R.next_out&&(R.avail_out!==0&&p!==l.Z_STREAM_END&&(R.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=o.utf8border(R.output,R.next_out),S=R.next_out-b,A=o.buf2string(R.output,b),R.next_out=S,R.avail_out=L-S,S&&a.arraySet(R.output,R.output,b,S,0),this.onData(A)):this.onData(a.shrinkBuf(R.output,R.next_out)))),R.avail_in===0&&R.avail_out===0&&(w=!0)}while((0<R.avail_in||R.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(p=r.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(R.avail_out=0))},f.prototype.onData=function(v){this.chunks.push(v)},f.prototype.onEnd=function(v){v===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},s.Inflate=f,s.inflate=g,s.inflateRaw=function(v,m){return(m=m||{}).raw=!0,g(v,m)},s.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,s){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(l[u]=d[u])}}return l},s.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,d,u,h){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+u),h);else for(var f=0;f<u;f++)l[h+f]=c[d+f]},flattenChunks:function(l){var c,d,u,h,f,g;for(c=u=0,d=l.length;c<d;c++)u+=l[c].length;for(g=new Uint8Array(u),c=h=0,d=l.length;c<d;c++)f=l[c],g.set(f,h),h+=f.length;return g}},o={arraySet:function(l,c,d,u,h){for(var f=0;f<u;f++)l[h+f]=c[d+f]},flattenChunks:function(l){return[].concat.apply([],l)}};s.setTyped=function(l){l?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,a)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,o))},s.setTyped(r)},{}],42:[function(t,n,s){var r=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new r.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(u,h){if(h<65537&&(u.subarray&&o||!u.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(u,h));for(var f="",g=0;g<h;g++)f+=String.fromCharCode(u[g]);return f}l[254]=l[254]=1,s.string2buf=function(u){var h,f,g,v,m,p=u.length,y=0;for(v=0;v<p;v++)(64512&(f=u.charCodeAt(v)))==55296&&v+1<p&&(64512&(g=u.charCodeAt(v+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),v++),y+=f<128?1:f<2048?2:f<65536?3:4;for(h=new r.Buf8(y),v=m=0;m<y;v++)(64512&(f=u.charCodeAt(v)))==55296&&v+1<p&&(64512&(g=u.charCodeAt(v+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),v++),f<128?h[m++]=f:(f<2048?h[m++]=192|f>>>6:(f<65536?h[m++]=224|f>>>12:(h[m++]=240|f>>>18,h[m++]=128|f>>>12&63),h[m++]=128|f>>>6&63),h[m++]=128|63&f);return h},s.buf2binstring=function(u){return d(u,u.length)},s.binstring2buf=function(u){for(var h=new r.Buf8(u.length),f=0,g=h.length;f<g;f++)h[f]=u.charCodeAt(f);return h},s.buf2string=function(u,h){var f,g,v,m,p=h||u.length,y=new Array(2*p);for(f=g=0;f<p;)if((v=u[f++])<128)y[g++]=v;else if(4<(m=l[v]))y[g++]=65533,f+=m-1;else{for(v&=m===2?31:m===3?15:7;1<m&&f<p;)v=v<<6|63&u[f++],m--;1<m?y[g++]=65533:v<65536?y[g++]=v:(v-=65536,y[g++]=55296|v>>10&1023,y[g++]=56320|1023&v)}return d(y,g)},s.utf8border=function(u,h){var f;for((h=h||u.length)>u.length&&(h=u.length),f=h-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?h:f+l[u[f]]>h?f:h}},{"./common":41}],43:[function(t,n,s){n.exports=function(r,a,o,l){for(var c=65535&r|0,d=r>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;d=d+(c=c+a[l++]|0)|0,--u;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(t,n,s){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,s){var r=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();n.exports=function(a,o,l,c){var d=r,u=c+l;a^=-1;for(var h=c;h<u;h++)a=a>>>8^d[255&(a^o[h])];return-1^a}},{}],46:[function(t,n,s){var r,a=t("../utils/common"),o=t("./trees"),l=t("./adler32"),c=t("./crc32"),d=t("./messages"),u=0,h=4,f=0,g=-2,v=-1,m=4,p=2,y=8,b=9,S=286,A=30,I=19,R=2*S+1,L=15,E=3,w=258,U=w+E+1,C=42,N=113,M=1,F=2,ee=3,G=4;function Z(_,re){return _.msg=d[re],re}function Q(_){return(_<<1)-(4<_?9:0)}function ae(_){for(var re=_.length;0<=--re;)_[re]=0}function B(_){var re=_.state,K=re.pending;K>_.avail_out&&(K=_.avail_out),K!==0&&(a.arraySet(_.output,re.pending_buf,re.pending_out,K,_.next_out),_.next_out+=K,re.pending_out+=K,_.total_out+=K,_.avail_out-=K,re.pending-=K,re.pending===0&&(re.pending_out=0))}function V(_,re){o._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,re),_.block_start=_.strstart,B(_.strm)}function ge(_,re){_.pending_buf[_.pending++]=re}function $(_,re){_.pending_buf[_.pending++]=re>>>8&255,_.pending_buf[_.pending++]=255&re}function te(_,re){var K,O,P=_.max_chain_length,z=_.strstart,ne=_.prev_length,T=_.nice_match,x=_.strstart>_.w_size-U?_.strstart-(_.w_size-U):0,k=_.window,X=_.w_mask,W=_.prev,J=_.strstart+w,fe=k[z+ne-1],ce=k[z+ne];_.prev_length>=_.good_match&&(P>>=2),T>_.lookahead&&(T=_.lookahead);do if(k[(K=re)+ne]===ce&&k[K+ne-1]===fe&&k[K]===k[z]&&k[++K]===k[z+1]){z+=2,K++;do;while(k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&k[++z]===k[++K]&&z<J);if(O=w-(J-z),z=J-w,ne<O){if(_.match_start=re,T<=(ne=O))break;fe=k[z+ne-1],ce=k[z+ne]}}while((re=W[re&X])>x&&--P!=0);return ne<=_.lookahead?ne:_.lookahead}function ve(_){var re,K,O,P,z,ne,T,x,k,X,W=_.w_size;do{if(P=_.window_size-_.lookahead-_.strstart,_.strstart>=W+(W-U)){for(a.arraySet(_.window,_.window,W,W,0),_.match_start-=W,_.strstart-=W,_.block_start-=W,re=K=_.hash_size;O=_.head[--re],_.head[re]=W<=O?O-W:0,--K;);for(re=K=W;O=_.prev[--re],_.prev[re]=W<=O?O-W:0,--K;);P+=W}if(_.strm.avail_in===0)break;if(ne=_.strm,T=_.window,x=_.strstart+_.lookahead,k=P,X=void 0,X=ne.avail_in,k<X&&(X=k),K=X===0?0:(ne.avail_in-=X,a.arraySet(T,ne.input,ne.next_in,X,x),ne.state.wrap===1?ne.adler=l(ne.adler,T,X,x):ne.state.wrap===2&&(ne.adler=c(ne.adler,T,X,x)),ne.next_in+=X,ne.total_in+=X,X),_.lookahead+=K,_.lookahead+_.insert>=E)for(z=_.strstart-_.insert,_.ins_h=_.window[z],_.ins_h=(_.ins_h<<_.hash_shift^_.window[z+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[z+E-1])&_.hash_mask,_.prev[z&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=z,z++,_.insert--,!(_.lookahead+_.insert<E)););}while(_.lookahead<U&&_.strm.avail_in!==0)}function he(_,re){for(var K,O;;){if(_.lookahead<U){if(ve(_),_.lookahead<U&&re===u)return M;if(_.lookahead===0)break}if(K=0,_.lookahead>=E&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+E-1])&_.hash_mask,K=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),K!==0&&_.strstart-K<=_.w_size-U&&(_.match_length=te(_,K)),_.match_length>=E)if(O=o._tr_tally(_,_.strstart-_.match_start,_.match_length-E),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=E){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+E-1])&_.hash_mask,K=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else O=o._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(O&&(V(_,!1),_.strm.avail_out===0))return M}return _.insert=_.strstart<E-1?_.strstart:E-1,re===h?(V(_,!0),_.strm.avail_out===0?ee:G):_.last_lit&&(V(_,!1),_.strm.avail_out===0)?M:F}function pe(_,re){for(var K,O,P;;){if(_.lookahead<U){if(ve(_),_.lookahead<U&&re===u)return M;if(_.lookahead===0)break}if(K=0,_.lookahead>=E&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+E-1])&_.hash_mask,K=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=E-1,K!==0&&_.prev_length<_.max_lazy_match&&_.strstart-K<=_.w_size-U&&(_.match_length=te(_,K),_.match_length<=5&&(_.strategy===1||_.match_length===E&&4096<_.strstart-_.match_start)&&(_.match_length=E-1)),_.prev_length>=E&&_.match_length<=_.prev_length){for(P=_.strstart+_.lookahead-E,O=o._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-E),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=P&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+E-1])&_.hash_mask,K=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=E-1,_.strstart++,O&&(V(_,!1),_.strm.avail_out===0))return M}else if(_.match_available){if((O=o._tr_tally(_,0,_.window[_.strstart-1]))&&V(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return M}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(O=o._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<E-1?_.strstart:E-1,re===h?(V(_,!0),_.strm.avail_out===0?ee:G):_.last_lit&&(V(_,!1),_.strm.avail_out===0)?M:F}function ye(_,re,K,O,P){this.good_length=_,this.max_lazy=re,this.nice_length=K,this.max_chain=O,this.func=P}function Ae(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*R),this.dyn_dtree=new a.Buf16(2*(2*A+1)),this.bl_tree=new a.Buf16(2*(2*I+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(L+1),this.heap=new a.Buf16(2*S+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Oe(_){var re;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=p,(re=_.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?C:N,_.adler=re.wrap===2?0:1,re.last_flush=u,o._tr_init(re),f):Z(_,g)}function Ue(_){var re=Oe(_);return re===f&&(function(K){K.window_size=2*K.w_size,ae(K.head),K.max_lazy_match=r[K.level].max_lazy,K.good_match=r[K.level].good_length,K.nice_match=r[K.level].nice_length,K.max_chain_length=r[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=E-1,K.match_available=0,K.ins_h=0})(_.state),re}function Ke(_,re,K,O,P,z){if(!_)return g;var ne=1;if(re===v&&(re=6),O<0?(ne=0,O=-O):15<O&&(ne=2,O-=16),P<1||b<P||K!==y||O<8||15<O||re<0||9<re||z<0||m<z)return Z(_,g);O===8&&(O=9);var T=new Ae;return(_.state=T).strm=_,T.wrap=ne,T.gzhead=null,T.w_bits=O,T.w_size=1<<T.w_bits,T.w_mask=T.w_size-1,T.hash_bits=P+7,T.hash_size=1<<T.hash_bits,T.hash_mask=T.hash_size-1,T.hash_shift=~~((T.hash_bits+E-1)/E),T.window=new a.Buf8(2*T.w_size),T.head=new a.Buf16(T.hash_size),T.prev=new a.Buf16(T.w_size),T.lit_bufsize=1<<P+6,T.pending_buf_size=4*T.lit_bufsize,T.pending_buf=new a.Buf8(T.pending_buf_size),T.d_buf=1*T.lit_bufsize,T.l_buf=3*T.lit_bufsize,T.level=re,T.strategy=z,T.method=K,Ue(_)}r=[new ye(0,0,0,0,function(_,re){var K=65535;for(K>_.pending_buf_size-5&&(K=_.pending_buf_size-5);;){if(_.lookahead<=1){if(ve(_),_.lookahead===0&&re===u)return M;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var O=_.block_start+K;if((_.strstart===0||_.strstart>=O)&&(_.lookahead=_.strstart-O,_.strstart=O,V(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-U&&(V(_,!1),_.strm.avail_out===0))return M}return _.insert=0,re===h?(V(_,!0),_.strm.avail_out===0?ee:G):(_.strstart>_.block_start&&(V(_,!1),_.strm.avail_out),M)}),new ye(4,4,8,4,he),new ye(4,5,16,8,he),new ye(4,6,32,32,he),new ye(4,4,16,16,pe),new ye(8,16,32,32,pe),new ye(8,16,128,128,pe),new ye(8,32,128,256,pe),new ye(32,128,258,1024,pe),new ye(32,258,258,4096,pe)],s.deflateInit=function(_,re){return Ke(_,re,y,15,8,0)},s.deflateInit2=Ke,s.deflateReset=Ue,s.deflateResetKeep=Oe,s.deflateSetHeader=function(_,re){return _&&_.state?_.state.wrap!==2?g:(_.state.gzhead=re,f):g},s.deflate=function(_,re){var K,O,P,z;if(!_||!_.state||5<re||re<0)return _?Z(_,g):g;if(O=_.state,!_.output||!_.input&&_.avail_in!==0||O.status===666&&re!==h)return Z(_,_.avail_out===0?-5:g);if(O.strm=_,K=O.last_flush,O.last_flush=re,O.status===C)if(O.wrap===2)_.adler=0,ge(O,31),ge(O,139),ge(O,8),O.gzhead?(ge(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),ge(O,255&O.gzhead.time),ge(O,O.gzhead.time>>8&255),ge(O,O.gzhead.time>>16&255),ge(O,O.gzhead.time>>24&255),ge(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ge(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(ge(O,255&O.gzhead.extra.length),ge(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(_.adler=c(_.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(ge(O,0),ge(O,0),ge(O,0),ge(O,0),ge(O,0),ge(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ge(O,3),O.status=N);else{var ne=y+(O.w_bits-8<<4)<<8;ne|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ne|=32),ne+=31-ne%31,O.status=N,$(O,ne),O.strstart!==0&&($(O,_.adler>>>16),$(O,65535&_.adler)),_.adler=1}if(O.status===69)if(O.gzhead.extra){for(P=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),B(_),P=O.pending,O.pending!==O.pending_buf_size));)ge(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){P=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),B(_),P=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,ge(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),z===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){P=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),B(_),P=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,ge(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>P&&(_.adler=c(_.adler,O.pending_buf,O.pending-P,P)),z===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&B(_),O.pending+2<=O.pending_buf_size&&(ge(O,255&_.adler),ge(O,_.adler>>8&255),_.adler=0,O.status=N)):O.status=N),O.pending!==0){if(B(_),_.avail_out===0)return O.last_flush=-1,f}else if(_.avail_in===0&&Q(re)<=Q(K)&&re!==h)return Z(_,-5);if(O.status===666&&_.avail_in!==0)return Z(_,-5);if(_.avail_in!==0||O.lookahead!==0||re!==u&&O.status!==666){var T=O.strategy===2?(function(x,k){for(var X;;){if(x.lookahead===0&&(ve(x),x.lookahead===0)){if(k===u)return M;break}if(x.match_length=0,X=o._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++,X&&(V(x,!1),x.strm.avail_out===0))return M}return x.insert=0,k===h?(V(x,!0),x.strm.avail_out===0?ee:G):x.last_lit&&(V(x,!1),x.strm.avail_out===0)?M:F})(O,re):O.strategy===3?(function(x,k){for(var X,W,J,fe,ce=x.window;;){if(x.lookahead<=w){if(ve(x),x.lookahead<=w&&k===u)return M;if(x.lookahead===0)break}if(x.match_length=0,x.lookahead>=E&&0<x.strstart&&(W=ce[J=x.strstart-1])===ce[++J]&&W===ce[++J]&&W===ce[++J]){fe=x.strstart+w;do;while(W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&W===ce[++J]&&J<fe);x.match_length=w-(fe-J),x.match_length>x.lookahead&&(x.match_length=x.lookahead)}if(x.match_length>=E?(X=o._tr_tally(x,1,x.match_length-E),x.lookahead-=x.match_length,x.strstart+=x.match_length,x.match_length=0):(X=o._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++),X&&(V(x,!1),x.strm.avail_out===0))return M}return x.insert=0,k===h?(V(x,!0),x.strm.avail_out===0?ee:G):x.last_lit&&(V(x,!1),x.strm.avail_out===0)?M:F})(O,re):r[O.level].func(O,re);if(T!==ee&&T!==G||(O.status=666),T===M||T===ee)return _.avail_out===0&&(O.last_flush=-1),f;if(T===F&&(re===1?o._tr_align(O):re!==5&&(o._tr_stored_block(O,0,0,!1),re===3&&(ae(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),B(_),_.avail_out===0))return O.last_flush=-1,f}return re!==h?f:O.wrap<=0?1:(O.wrap===2?(ge(O,255&_.adler),ge(O,_.adler>>8&255),ge(O,_.adler>>16&255),ge(O,_.adler>>24&255),ge(O,255&_.total_in),ge(O,_.total_in>>8&255),ge(O,_.total_in>>16&255),ge(O,_.total_in>>24&255)):($(O,_.adler>>>16),$(O,65535&_.adler)),B(_),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?f:1)},s.deflateEnd=function(_){var re;return _&&_.state?(re=_.state.status)!==C&&re!==69&&re!==73&&re!==91&&re!==103&&re!==N&&re!==666?Z(_,g):(_.state=null,re===N?Z(_,-3):f):g},s.deflateSetDictionary=function(_,re){var K,O,P,z,ne,T,x,k,X=re.length;if(!_||!_.state||(z=(K=_.state).wrap)===2||z===1&&K.status!==C||K.lookahead)return g;for(z===1&&(_.adler=l(_.adler,re,X,0)),K.wrap=0,X>=K.w_size&&(z===0&&(ae(K.head),K.strstart=0,K.block_start=0,K.insert=0),k=new a.Buf8(K.w_size),a.arraySet(k,re,X-K.w_size,K.w_size,0),re=k,X=K.w_size),ne=_.avail_in,T=_.next_in,x=_.input,_.avail_in=X,_.next_in=0,_.input=re,ve(K);K.lookahead>=E;){for(O=K.strstart,P=K.lookahead-(E-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[O+E-1])&K.hash_mask,K.prev[O&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=O,O++,--P;);K.strstart=O,K.lookahead=E-1,ve(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=E-1,K.match_available=0,_.next_in=T,_.input=x,_.avail_in=ne,K.wrap=z,f},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,s){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,s){n.exports=function(r,a){var o,l,c,d,u,h,f,g,v,m,p,y,b,S,A,I,R,L,E,w,U,C,N,M,F;o=r.state,l=r.next_in,M=r.input,c=l+(r.avail_in-5),d=r.next_out,F=r.output,u=d-(a-r.avail_out),h=d+(r.avail_out-257),f=o.dmax,g=o.wsize,v=o.whave,m=o.wnext,p=o.window,y=o.hold,b=o.bits,S=o.lencode,A=o.distcode,I=(1<<o.lenbits)-1,R=(1<<o.distbits)-1;e:do{b<15&&(y+=M[l++]<<b,b+=8,y+=M[l++]<<b,b+=8),L=S[y&I];t:for(;;){if(y>>>=E=L>>>24,b-=E,(E=L>>>16&255)===0)F[d++]=65535&L;else{if(!(16&E)){if((64&E)==0){L=S[(65535&L)+(y&(1<<E)-1)];continue t}if(32&E){o.mode=12;break e}r.msg="invalid literal/length code",o.mode=30;break e}w=65535&L,(E&=15)&&(b<E&&(y+=M[l++]<<b,b+=8),w+=y&(1<<E)-1,y>>>=E,b-=E),b<15&&(y+=M[l++]<<b,b+=8,y+=M[l++]<<b,b+=8),L=A[y&R];n:for(;;){if(y>>>=E=L>>>24,b-=E,!(16&(E=L>>>16&255))){if((64&E)==0){L=A[(65535&L)+(y&(1<<E)-1)];continue n}r.msg="invalid distance code",o.mode=30;break e}if(U=65535&L,b<(E&=15)&&(y+=M[l++]<<b,(b+=8)<E&&(y+=M[l++]<<b,b+=8)),f<(U+=y&(1<<E)-1)){r.msg="invalid distance too far back",o.mode=30;break e}if(y>>>=E,b-=E,(E=d-u)<U){if(v<(E=U-E)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break e}if(N=p,(C=0)===m){if(C+=g-E,E<w){for(w-=E;F[d++]=p[C++],--E;);C=d-U,N=F}}else if(m<E){if(C+=g+m-E,(E-=m)<w){for(w-=E;F[d++]=p[C++],--E;);if(C=0,m<w){for(w-=E=m;F[d++]=p[C++],--E;);C=d-U,N=F}}}else if(C+=m-E,E<w){for(w-=E;F[d++]=p[C++],--E;);C=d-U,N=F}for(;2<w;)F[d++]=N[C++],F[d++]=N[C++],F[d++]=N[C++],w-=3;w&&(F[d++]=N[C++],1<w&&(F[d++]=N[C++]))}else{for(C=d-U;F[d++]=F[C++],F[d++]=F[C++],F[d++]=F[C++],2<(w-=3););w&&(F[d++]=F[C++],1<w&&(F[d++]=F[C++]))}break}}break}}while(l<c&&d<h);l-=w=b>>3,y&=(1<<(b-=w<<3))-1,r.next_in=l,r.next_out=d,r.avail_in=l<c?c-l+5:5-(l-c),r.avail_out=d<h?h-d+257:257-(d-h),o.hold=y,o.bits=b}},{}],49:[function(t,n,s){var r=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),d=1,u=2,h=0,f=-2,g=1,v=852,m=592;function p(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(C){var N;return C&&C.state?(N=C.state,C.total_in=C.total_out=N.total=0,C.msg="",N.wrap&&(C.adler=1&N.wrap),N.mode=g,N.last=0,N.havedict=0,N.dmax=32768,N.head=null,N.hold=0,N.bits=0,N.lencode=N.lendyn=new r.Buf32(v),N.distcode=N.distdyn=new r.Buf32(m),N.sane=1,N.back=-1,h):f}function S(C){var N;return C&&C.state?((N=C.state).wsize=0,N.whave=0,N.wnext=0,b(C)):f}function A(C,N){var M,F;return C&&C.state?(F=C.state,N<0?(M=0,N=-N):(M=1+(N>>4),N<48&&(N&=15)),N&&(N<8||15<N)?f:(F.window!==null&&F.wbits!==N&&(F.window=null),F.wrap=M,F.wbits=N,S(C))):f}function I(C,N){var M,F;return C?(F=new y,(C.state=F).window=null,(M=A(C,N))!==h&&(C.state=null),M):f}var R,L,E=!0;function w(C){if(E){var N;for(R=new r.Buf32(512),L=new r.Buf32(32),N=0;N<144;)C.lens[N++]=8;for(;N<256;)C.lens[N++]=9;for(;N<280;)C.lens[N++]=7;for(;N<288;)C.lens[N++]=8;for(c(d,C.lens,0,288,R,0,C.work,{bits:9}),N=0;N<32;)C.lens[N++]=5;c(u,C.lens,0,32,L,0,C.work,{bits:5}),E=!1}C.lencode=R,C.lenbits=9,C.distcode=L,C.distbits=5}function U(C,N,M,F){var ee,G=C.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new r.Buf8(G.wsize)),F>=G.wsize?(r.arraySet(G.window,N,M-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(F<(ee=G.wsize-G.wnext)&&(ee=F),r.arraySet(G.window,N,M-F,ee,G.wnext),(F-=ee)?(r.arraySet(G.window,N,M-F,F,0),G.wnext=F,G.whave=G.wsize):(G.wnext+=ee,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=ee))),0}s.inflateReset=S,s.inflateReset2=A,s.inflateResetKeep=b,s.inflateInit=function(C){return I(C,15)},s.inflateInit2=I,s.inflate=function(C,N){var M,F,ee,G,Z,Q,ae,B,V,ge,$,te,ve,he,pe,ye,Ae,Oe,Ue,Ke,_,re,K,O,P=0,z=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(M=C.state).mode===12&&(M.mode=13),Z=C.next_out,ee=C.output,ae=C.avail_out,G=C.next_in,F=C.input,Q=C.avail_in,B=M.hold,V=M.bits,ge=Q,$=ae,re=h;e:for(;;)switch(M.mode){case g:if(M.wrap===0){M.mode=13;break}for(;V<16;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(2&M.wrap&&B===35615){z[M.check=0]=255&B,z[1]=B>>>8&255,M.check=o(M.check,z,2,0),V=B=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&B)<<8)+(B>>8))%31){C.msg="incorrect header check",M.mode=30;break}if((15&B)!=8){C.msg="unknown compression method",M.mode=30;break}if(V-=4,_=8+(15&(B>>>=4)),M.wbits===0)M.wbits=_;else if(_>M.wbits){C.msg="invalid window size",M.mode=30;break}M.dmax=1<<_,C.adler=M.check=1,M.mode=512&B?10:12,V=B=0;break;case 2:for(;V<16;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(M.flags=B,(255&M.flags)!=8){C.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){C.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=B>>8&1),512&M.flags&&(z[0]=255&B,z[1]=B>>>8&255,M.check=o(M.check,z,2,0)),V=B=0,M.mode=3;case 3:for(;V<32;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.head&&(M.head.time=B),512&M.flags&&(z[0]=255&B,z[1]=B>>>8&255,z[2]=B>>>16&255,z[3]=B>>>24&255,M.check=o(M.check,z,4,0)),V=B=0,M.mode=4;case 4:for(;V<16;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.head&&(M.head.xflags=255&B,M.head.os=B>>8),512&M.flags&&(z[0]=255&B,z[1]=B>>>8&255,M.check=o(M.check,z,2,0)),V=B=0,M.mode=5;case 5:if(1024&M.flags){for(;V<16;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.length=B,M.head&&(M.head.extra_len=B),512&M.flags&&(z[0]=255&B,z[1]=B>>>8&255,M.check=o(M.check,z,2,0)),V=B=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(Q<(te=M.length)&&(te=Q),te&&(M.head&&(_=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),r.arraySet(M.head.extra,F,G,te,_)),512&M.flags&&(M.check=o(M.check,F,te,G)),Q-=te,G+=te,M.length-=te),M.length))break e;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(Q===0)break e;for(te=0;_=F[G+te++],M.head&&_&&M.length<65536&&(M.head.name+=String.fromCharCode(_)),_&&te<Q;);if(512&M.flags&&(M.check=o(M.check,F,te,G)),Q-=te,G+=te,_)break e}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(Q===0)break e;for(te=0;_=F[G+te++],M.head&&_&&M.length<65536&&(M.head.comment+=String.fromCharCode(_)),_&&te<Q;);if(512&M.flags&&(M.check=o(M.check,F,te,G)),Q-=te,G+=te,_)break e}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;V<16;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(B!==(65535&M.check)){C.msg="header crc mismatch",M.mode=30;break}V=B=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),C.adler=M.check=0,M.mode=12;break;case 10:for(;V<32;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}C.adler=M.check=p(B),V=B=0,M.mode=11;case 11:if(M.havedict===0)return C.next_out=Z,C.avail_out=ae,C.next_in=G,C.avail_in=Q,M.hold=B,M.bits=V,2;C.adler=M.check=1,M.mode=12;case 12:if(N===5||N===6)break e;case 13:if(M.last){B>>>=7&V,V-=7&V,M.mode=27;break}for(;V<3;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}switch(M.last=1&B,V-=1,3&(B>>>=1)){case 0:M.mode=14;break;case 1:if(w(M),M.mode=20,N!==6)break;B>>>=2,V-=2;break e;case 2:M.mode=17;break;case 3:C.msg="invalid block type",M.mode=30}B>>>=2,V-=2;break;case 14:for(B>>>=7&V,V-=7&V;V<32;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if((65535&B)!=(B>>>16^65535)){C.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&B,V=B=0,M.mode=15,N===6)break e;case 15:M.mode=16;case 16:if(te=M.length){if(Q<te&&(te=Q),ae<te&&(te=ae),te===0)break e;r.arraySet(ee,F,G,te,Z),Q-=te,G+=te,ae-=te,Z+=te,M.length-=te;break}M.mode=12;break;case 17:for(;V<14;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(M.nlen=257+(31&B),B>>>=5,V-=5,M.ndist=1+(31&B),B>>>=5,V-=5,M.ncode=4+(15&B),B>>>=4,V-=4,286<M.nlen||30<M.ndist){C.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;V<3;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.lens[ne[M.have++]]=7&B,B>>>=3,V-=3}for(;M.have<19;)M.lens[ne[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,K={bits:M.lenbits},re=c(0,M.lens,0,19,M.lencode,0,M.work,K),M.lenbits=K.bits,re){C.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;ye=(P=M.lencode[B&(1<<M.lenbits)-1])>>>16&255,Ae=65535&P,!((pe=P>>>24)<=V);){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(Ae<16)B>>>=pe,V-=pe,M.lens[M.have++]=Ae;else{if(Ae===16){for(O=pe+2;V<O;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(B>>>=pe,V-=pe,M.have===0){C.msg="invalid bit length repeat",M.mode=30;break}_=M.lens[M.have-1],te=3+(3&B),B>>>=2,V-=2}else if(Ae===17){for(O=pe+3;V<O;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}V-=pe,_=0,te=3+(7&(B>>>=pe)),B>>>=3,V-=3}else{for(O=pe+7;V<O;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}V-=pe,_=0,te=11+(127&(B>>>=pe)),B>>>=7,V-=7}if(M.have+te>M.nlen+M.ndist){C.msg="invalid bit length repeat",M.mode=30;break}for(;te--;)M.lens[M.have++]=_}}if(M.mode===30)break;if(M.lens[256]===0){C.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,K={bits:M.lenbits},re=c(d,M.lens,0,M.nlen,M.lencode,0,M.work,K),M.lenbits=K.bits,re){C.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,K={bits:M.distbits},re=c(u,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,K),M.distbits=K.bits,re){C.msg="invalid distances set",M.mode=30;break}if(M.mode=20,N===6)break e;case 20:M.mode=21;case 21:if(6<=Q&&258<=ae){C.next_out=Z,C.avail_out=ae,C.next_in=G,C.avail_in=Q,M.hold=B,M.bits=V,l(C,$),Z=C.next_out,ee=C.output,ae=C.avail_out,G=C.next_in,F=C.input,Q=C.avail_in,B=M.hold,V=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;ye=(P=M.lencode[B&(1<<M.lenbits)-1])>>>16&255,Ae=65535&P,!((pe=P>>>24)<=V);){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(ye&&(240&ye)==0){for(Oe=pe,Ue=ye,Ke=Ae;ye=(P=M.lencode[Ke+((B&(1<<Oe+Ue)-1)>>Oe)])>>>16&255,Ae=65535&P,!(Oe+(pe=P>>>24)<=V);){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}B>>>=Oe,V-=Oe,M.back+=Oe}if(B>>>=pe,V-=pe,M.back+=pe,M.length=Ae,ye===0){M.mode=26;break}if(32&ye){M.back=-1,M.mode=12;break}if(64&ye){C.msg="invalid literal/length code",M.mode=30;break}M.extra=15&ye,M.mode=22;case 22:if(M.extra){for(O=M.extra;V<O;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.length+=B&(1<<M.extra)-1,B>>>=M.extra,V-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;ye=(P=M.distcode[B&(1<<M.distbits)-1])>>>16&255,Ae=65535&P,!((pe=P>>>24)<=V);){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if((240&ye)==0){for(Oe=pe,Ue=ye,Ke=Ae;ye=(P=M.distcode[Ke+((B&(1<<Oe+Ue)-1)>>Oe)])>>>16&255,Ae=65535&P,!(Oe+(pe=P>>>24)<=V);){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}B>>>=Oe,V-=Oe,M.back+=Oe}if(B>>>=pe,V-=pe,M.back+=pe,64&ye){C.msg="invalid distance code",M.mode=30;break}M.offset=Ae,M.extra=15&ye,M.mode=24;case 24:if(M.extra){for(O=M.extra;V<O;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}M.offset+=B&(1<<M.extra)-1,B>>>=M.extra,V-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){C.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(ae===0)break e;if(te=$-ae,M.offset>te){if((te=M.offset-te)>M.whave&&M.sane){C.msg="invalid distance too far back",M.mode=30;break}ve=te>M.wnext?(te-=M.wnext,M.wsize-te):M.wnext-te,te>M.length&&(te=M.length),he=M.window}else he=ee,ve=Z-M.offset,te=M.length;for(ae<te&&(te=ae),ae-=te,M.length-=te;ee[Z++]=he[ve++],--te;);M.length===0&&(M.mode=21);break;case 26:if(ae===0)break e;ee[Z++]=M.length,ae--,M.mode=21;break;case 27:if(M.wrap){for(;V<32;){if(Q===0)break e;Q--,B|=F[G++]<<V,V+=8}if($-=ae,C.total_out+=$,M.total+=$,$&&(C.adler=M.check=M.flags?o(M.check,ee,$,Z-$):a(M.check,ee,$,Z-$)),$=ae,(M.flags?B:p(B))!==M.check){C.msg="incorrect data check",M.mode=30;break}V=B=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;V<32;){if(Q===0)break e;Q--,B+=F[G++]<<V,V+=8}if(B!==(4294967295&M.total)){C.msg="incorrect length check",M.mode=30;break}V=B=0}M.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;case 32:default:return f}return C.next_out=Z,C.avail_out=ae,C.next_in=G,C.avail_in=Q,M.hold=B,M.bits=V,(M.wsize||$!==C.avail_out&&M.mode<30&&(M.mode<27||N!==4))&&U(C,C.output,C.next_out,$-C.avail_out)?(M.mode=31,-4):(ge-=C.avail_in,$-=C.avail_out,C.total_in+=ge,C.total_out+=$,M.total+=$,M.wrap&&$&&(C.adler=M.check=M.flags?o(M.check,ee,$,C.next_out-$):a(M.check,ee,$,C.next_out-$)),C.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(ge==0&&$===0||N===4)&&re===h&&(re=-5),re)},s.inflateEnd=function(C){if(!C||!C.state)return f;var N=C.state;return N.window&&(N.window=null),C.state=null,h},s.inflateGetHeader=function(C,N){var M;return C&&C.state?(2&(M=C.state).wrap)==0?f:((M.head=N).done=!1,h):f},s.inflateSetDictionary=function(C,N){var M,F=N.length;return C&&C.state?(M=C.state).wrap!==0&&M.mode!==11?f:M.mode===11&&a(1,N,F,0)!==M.check?-3:U(C,N,F,F)?(M.mode=31,-4):(M.havedict=1,h):f},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,s){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,u,h,f,g,v,m,p){var y,b,S,A,I,R,L,E,w,U=p.bits,C=0,N=0,M=0,F=0,ee=0,G=0,Z=0,Q=0,ae=0,B=0,V=null,ge=0,$=new r.Buf16(16),te=new r.Buf16(16),ve=null,he=0;for(C=0;C<=15;C++)$[C]=0;for(N=0;N<f;N++)$[u[h+N]]++;for(ee=U,F=15;1<=F&&$[F]===0;F--);if(F<ee&&(ee=F),F===0)return g[v++]=20971520,g[v++]=20971520,p.bits=1,0;for(M=1;M<F&&$[M]===0;M++);for(ee<M&&(ee=M),C=Q=1;C<=15;C++)if(Q<<=1,(Q-=$[C])<0)return-1;if(0<Q&&(d===0||F!==1))return-1;for(te[1]=0,C=1;C<15;C++)te[C+1]=te[C]+$[C];for(N=0;N<f;N++)u[h+N]!==0&&(m[te[u[h+N]]++]=N);if(R=d===0?(V=ve=m,19):d===1?(V=a,ge-=257,ve=o,he-=257,256):(V=l,ve=c,-1),C=M,I=v,Z=N=B=0,S=-1,A=(ae=1<<(G=ee))-1,d===1&&852<ae||d===2&&592<ae)return 1;for(;;){for(L=C-Z,w=m[N]<R?(E=0,m[N]):m[N]>R?(E=ve[he+m[N]],V[ge+m[N]]):(E=96,0),y=1<<C-Z,M=b=1<<G;g[I+(B>>Z)+(b-=y)]=L<<24|E<<16|w|0,b!==0;);for(y=1<<C-1;B&y;)y>>=1;if(y!==0?(B&=y-1,B+=y):B=0,N++,--$[C]==0){if(C===F)break;C=u[h+m[N]]}if(ee<C&&(B&A)!==S){for(Z===0&&(Z=ee),I+=M,Q=1<<(G=C-Z);G+Z<F&&!((Q-=$[G+Z])<=0);)G++,Q<<=1;if(ae+=1<<G,d===1&&852<ae||d===2&&592<ae)return 1;g[S=B&A]=ee<<24|G<<16|I-v|0}}return B!==0&&(g[I+B]=C-Z<<24|64<<16|0),p.bits=ee,0}},{"../utils/common":41}],51:[function(t,n,s){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,s){var r=t("../utils/common"),a=0,o=1;function l(P){for(var z=P.length;0<=--z;)P[z]=0}var c=0,d=29,u=256,h=u+1+d,f=30,g=19,v=2*h+1,m=15,p=16,y=7,b=256,S=16,A=17,I=18,R=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],U=new Array(2*(h+2));l(U);var C=new Array(2*f);l(C);var N=new Array(512);l(N);var M=new Array(256);l(M);var F=new Array(d);l(F);var ee,G,Z,Q=new Array(f);function ae(P,z,ne,T,x){this.static_tree=P,this.extra_bits=z,this.extra_base=ne,this.elems=T,this.max_length=x,this.has_stree=P&&P.length}function B(P,z){this.dyn_tree=P,this.max_code=0,this.stat_desc=z}function V(P){return P<256?N[P]:N[256+(P>>>7)]}function ge(P,z){P.pending_buf[P.pending++]=255&z,P.pending_buf[P.pending++]=z>>>8&255}function $(P,z,ne){P.bi_valid>p-ne?(P.bi_buf|=z<<P.bi_valid&65535,ge(P,P.bi_buf),P.bi_buf=z>>p-P.bi_valid,P.bi_valid+=ne-p):(P.bi_buf|=z<<P.bi_valid&65535,P.bi_valid+=ne)}function te(P,z,ne){$(P,ne[2*z],ne[2*z+1])}function ve(P,z){for(var ne=0;ne|=1&P,P>>>=1,ne<<=1,0<--z;);return ne>>>1}function he(P,z,ne){var T,x,k=new Array(m+1),X=0;for(T=1;T<=m;T++)k[T]=X=X+ne[T-1]<<1;for(x=0;x<=z;x++){var W=P[2*x+1];W!==0&&(P[2*x]=ve(k[W]++,W))}}function pe(P){var z;for(z=0;z<h;z++)P.dyn_ltree[2*z]=0;for(z=0;z<f;z++)P.dyn_dtree[2*z]=0;for(z=0;z<g;z++)P.bl_tree[2*z]=0;P.dyn_ltree[2*b]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function ye(P){8<P.bi_valid?ge(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function Ae(P,z,ne,T){var x=2*z,k=2*ne;return P[x]<P[k]||P[x]===P[k]&&T[z]<=T[ne]}function Oe(P,z,ne){for(var T=P.heap[ne],x=ne<<1;x<=P.heap_len&&(x<P.heap_len&&Ae(z,P.heap[x+1],P.heap[x],P.depth)&&x++,!Ae(z,T,P.heap[x],P.depth));)P.heap[ne]=P.heap[x],ne=x,x<<=1;P.heap[ne]=T}function Ue(P,z,ne){var T,x,k,X,W=0;if(P.last_lit!==0)for(;T=P.pending_buf[P.d_buf+2*W]<<8|P.pending_buf[P.d_buf+2*W+1],x=P.pending_buf[P.l_buf+W],W++,T===0?te(P,x,z):(te(P,(k=M[x])+u+1,z),(X=R[k])!==0&&$(P,x-=F[k],X),te(P,k=V(--T),ne),(X=L[k])!==0&&$(P,T-=Q[k],X)),W<P.last_lit;);te(P,b,z)}function Ke(P,z){var ne,T,x,k=z.dyn_tree,X=z.stat_desc.static_tree,W=z.stat_desc.has_stree,J=z.stat_desc.elems,fe=-1;for(P.heap_len=0,P.heap_max=v,ne=0;ne<J;ne++)k[2*ne]!==0?(P.heap[++P.heap_len]=fe=ne,P.depth[ne]=0):k[2*ne+1]=0;for(;P.heap_len<2;)k[2*(x=P.heap[++P.heap_len]=fe<2?++fe:0)]=1,P.depth[x]=0,P.opt_len--,W&&(P.static_len-=X[2*x+1]);for(z.max_code=fe,ne=P.heap_len>>1;1<=ne;ne--)Oe(P,k,ne);for(x=J;ne=P.heap[1],P.heap[1]=P.heap[P.heap_len--],Oe(P,k,1),T=P.heap[1],P.heap[--P.heap_max]=ne,P.heap[--P.heap_max]=T,k[2*x]=k[2*ne]+k[2*T],P.depth[x]=(P.depth[ne]>=P.depth[T]?P.depth[ne]:P.depth[T])+1,k[2*ne+1]=k[2*T+1]=x,P.heap[1]=x++,Oe(P,k,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],(function(ce,_e){var Fe,ue,xe,de,Pe,Ee,Be=_e.dyn_tree,Ve=_e.max_code,rt=_e.stat_desc.static_tree,j=_e.stat_desc.has_stree,Se=_e.stat_desc.extra_bits,oe=_e.stat_desc.extra_base,le=_e.stat_desc.max_length,Me=0;for(de=0;de<=m;de++)ce.bl_count[de]=0;for(Be[2*ce.heap[ce.heap_max]+1]=0,Fe=ce.heap_max+1;Fe<v;Fe++)le<(de=Be[2*Be[2*(ue=ce.heap[Fe])+1]+1]+1)&&(de=le,Me++),Be[2*ue+1]=de,Ve<ue||(ce.bl_count[de]++,Pe=0,oe<=ue&&(Pe=Se[ue-oe]),Ee=Be[2*ue],ce.opt_len+=Ee*(de+Pe),j&&(ce.static_len+=Ee*(rt[2*ue+1]+Pe)));if(Me!==0){do{for(de=le-1;ce.bl_count[de]===0;)de--;ce.bl_count[de]--,ce.bl_count[de+1]+=2,ce.bl_count[le]--,Me-=2}while(0<Me);for(de=le;de!==0;de--)for(ue=ce.bl_count[de];ue!==0;)Ve<(xe=ce.heap[--Fe])||(Be[2*xe+1]!==de&&(ce.opt_len+=(de-Be[2*xe+1])*Be[2*xe],Be[2*xe+1]=de),ue--)}})(P,z),he(k,fe,P.bl_count)}function _(P,z,ne){var T,x,k=-1,X=z[1],W=0,J=7,fe=4;for(X===0&&(J=138,fe=3),z[2*(ne+1)+1]=65535,T=0;T<=ne;T++)x=X,X=z[2*(T+1)+1],++W<J&&x===X||(W<fe?P.bl_tree[2*x]+=W:x!==0?(x!==k&&P.bl_tree[2*x]++,P.bl_tree[2*S]++):W<=10?P.bl_tree[2*A]++:P.bl_tree[2*I]++,k=x,fe=(W=0)===X?(J=138,3):x===X?(J=6,3):(J=7,4))}function re(P,z,ne){var T,x,k=-1,X=z[1],W=0,J=7,fe=4;for(X===0&&(J=138,fe=3),T=0;T<=ne;T++)if(x=X,X=z[2*(T+1)+1],!(++W<J&&x===X)){if(W<fe)for(;te(P,x,P.bl_tree),--W!=0;);else x!==0?(x!==k&&(te(P,x,P.bl_tree),W--),te(P,S,P.bl_tree),$(P,W-3,2)):W<=10?(te(P,A,P.bl_tree),$(P,W-3,3)):(te(P,I,P.bl_tree),$(P,W-11,7));k=x,fe=(W=0)===X?(J=138,3):x===X?(J=6,3):(J=7,4)}}l(Q);var K=!1;function O(P,z,ne,T){$(P,(c<<1)+(T?1:0),3),(function(x,k,X,W){ye(x),ge(x,X),ge(x,~X),r.arraySet(x.pending_buf,x.window,k,X,x.pending),x.pending+=X})(P,z,ne)}s._tr_init=function(P){K||((function(){var z,ne,T,x,k,X=new Array(m+1);for(x=T=0;x<d-1;x++)for(F[x]=T,z=0;z<1<<R[x];z++)M[T++]=x;for(M[T-1]=x,x=k=0;x<16;x++)for(Q[x]=k,z=0;z<1<<L[x];z++)N[k++]=x;for(k>>=7;x<f;x++)for(Q[x]=k<<7,z=0;z<1<<L[x]-7;z++)N[256+k++]=x;for(ne=0;ne<=m;ne++)X[ne]=0;for(z=0;z<=143;)U[2*z+1]=8,z++,X[8]++;for(;z<=255;)U[2*z+1]=9,z++,X[9]++;for(;z<=279;)U[2*z+1]=7,z++,X[7]++;for(;z<=287;)U[2*z+1]=8,z++,X[8]++;for(he(U,h+1,X),z=0;z<f;z++)C[2*z+1]=5,C[2*z]=ve(z,5);ee=new ae(U,R,u+1,h,m),G=new ae(C,L,0,f,m),Z=new ae(new Array(0),E,0,g,y)})(),K=!0),P.l_desc=new B(P.dyn_ltree,ee),P.d_desc=new B(P.dyn_dtree,G),P.bl_desc=new B(P.bl_tree,Z),P.bi_buf=0,P.bi_valid=0,pe(P)},s._tr_stored_block=O,s._tr_flush_block=function(P,z,ne,T){var x,k,X=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=(function(W){var J,fe=4093624447;for(J=0;J<=31;J++,fe>>>=1)if(1&fe&&W.dyn_ltree[2*J]!==0)return a;if(W.dyn_ltree[18]!==0||W.dyn_ltree[20]!==0||W.dyn_ltree[26]!==0)return o;for(J=32;J<u;J++)if(W.dyn_ltree[2*J]!==0)return o;return a})(P)),Ke(P,P.l_desc),Ke(P,P.d_desc),X=(function(W){var J;for(_(W,W.dyn_ltree,W.l_desc.max_code),_(W,W.dyn_dtree,W.d_desc.max_code),Ke(W,W.bl_desc),J=g-1;3<=J&&W.bl_tree[2*w[J]+1]===0;J--);return W.opt_len+=3*(J+1)+5+5+4,J})(P),x=P.opt_len+3+7>>>3,(k=P.static_len+3+7>>>3)<=x&&(x=k)):x=k=ne+5,ne+4<=x&&z!==-1?O(P,z,ne,T):P.strategy===4||k===x?($(P,2+(T?1:0),3),Ue(P,U,C)):($(P,4+(T?1:0),3),(function(W,J,fe,ce){var _e;for($(W,J-257,5),$(W,fe-1,5),$(W,ce-4,4),_e=0;_e<ce;_e++)$(W,W.bl_tree[2*w[_e]+1],3);re(W,W.dyn_ltree,J-1),re(W,W.dyn_dtree,fe-1)})(P,P.l_desc.max_code+1,P.d_desc.max_code+1,X+1),Ue(P,P.dyn_ltree,P.dyn_dtree)),pe(P),T&&ye(P)},s._tr_tally=function(P,z,ne){return P.pending_buf[P.d_buf+2*P.last_lit]=z>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&z,P.pending_buf[P.l_buf+P.last_lit]=255&ne,P.last_lit++,z===0?P.dyn_ltree[2*ne]++:(P.matches++,z--,P.dyn_ltree[2*(M[ne]+u+1)]++,P.dyn_dtree[2*V(z)]++),P.last_lit===P.lit_bufsize-1},s._tr_align=function(P){$(P,2,3),te(P,b,U),(function(z){z.bi_valid===16?(ge(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(P)}},{"../utils/common":41}],53:[function(t,n,s){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,s){(function(r){(function(a,o){if(!a.setImmediate){var l,c,d,u,h=1,f={},g=!1,v=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){y(S)})}:(function(){if(a.postMessage&&!a.importScripts){var S=!0,A=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=A,S}})()?(u="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",b,!1):a.attachEvent("onmessage",b),function(S){a.postMessage(u+S,"*")}):a.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){y(S.data)},function(S){d.port2.postMessage(S)}):v&&"onreadystatechange"in v.createElement("script")?(c=v.documentElement,function(S){var A=v.createElement("script");A.onreadystatechange=function(){y(S),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(S){setTimeout(y,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var A=new Array(arguments.length-1),I=0;I<A.length;I++)A[I]=arguments[I+1];var R={callback:S,args:A};return f[h]=R,l(h),h++},m.clearImmediate=p}function p(S){delete f[S]}function y(S){if(g)setTimeout(y,0,S);else{var A=f[S];if(A){g=!0;try{(function(I){var R=I.callback,L=I.args;switch(L.length){case 0:R();break;case 1:R(L[0]);break;case 2:R(L[0],L[1]);break;case 3:R(L[0],L[1],L[2]);break;default:R.apply(o,L)}})(A)}finally{p(S),g=!1}}}}function b(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(u)===0&&y(+S.data.slice(u.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ro)),Ro.exports}var P0=D0();const L0=I0(P0),Et={frcYear:"2026",gradleRIO:"2026.2.1",javaVersion:"VERSION_17",vendordeps:{advantagekit:{fileName:"AdvantageKit.json",name:"AdvantageKit",version:"2026.1.0",uuid:"d94427e6-503d-4de9-b18b-474d5fd2a645",mavenUrls:["https://github.com/Mechanical-Advantage/AdvantageKit/releases/download/v2026.1.0/"],javaDependencies:[{groupId:"org.littletonrobotics.akit",artifactId:"akit-java",version:"2026.1.0"}]},phoenix6:{fileName:"Phoenix6.json",name:"CTRE-Phoenix (v6)",version:"26.0.0",vendorKey:"ctre",mavenUrls:["https://maven.ctr-electronics.com/release/"],jsonUrl:"https://maven.ctr-electronics.com/release/com/ctre/phoenix6/latest/Phoenix6-frc2026-latest.json",javaDependencies:[{groupId:"com.ctre.phoenix6",artifactId:"wpiapi-java",version:"26.0.0"}]},revlib:{fileName:"REVLib.json",name:"REVLib",version:"2026.1.1",vendorKey:"rev",mavenUrls:["https://maven.revrobotics.com/release/"],jsonUrl:"https://software-metadata.revrobotics.com/REVLib-2026.json",javaDependencies:[{groupId:"com.revrobotics.frc",artifactId:"REVLib-java",version:"2026.1.1"}]},navx:{fileName:"NavX.json",name:"NavX",version:"2026.2.0",vendorKey:"kauai",mavenUrls:["https://dev.studica.com/maven/release/2026/"],jsonUrl:"https://dev.studica.com/releases/2026/NavX.json",javaDependencies:[{groupId:"com.kauailabs.navx.frc",artifactId:"navx-frc-java",version:"2026.2.0"}]},photonlib:{fileName:"photonlib.json",name:"photonlib",version:"2026.2.1",vendorKey:"photonvision",mavenUrls:["https://maven.photonvision.org/repository/internal","https://maven.photonvision.org/repository/snapshots"],jsonUrl:"https://maven.photonvision.org/repository/internal/org/photonvision/photonlib-json/1.0/photonlib-json-1.0.json",javaDependencies:[{groupId:"org.photonvision",artifactId:"photonlib-java",version:"2026.2.1"}]},pathplanner:{fileName:"PathplannerLib.json",name:"PathplannerLib",version:"2026.3.0",mavenUrls:["https://3015rangerrobotics.github.io/pathplannerlib/repo"],jsonUrl:"https://3015rangerrobotics.github.io/pathplannerlib/PathplannerLib.json",javaDependencies:[{groupId:"com.pathplanner.lib",artifactId:"PathplannerLib-java",version:"2026.3.0"}]}},pathplannerFormat:"2026.0",motorApi:{ctre:{imports:["com.ctre.phoenix6.hardware.TalonFX","com.ctre.phoenix6.controls.VoltageOut","com.ctre.phoenix6.controls.PositionVoltage","com.ctre.phoenix6.configs.TalonFXConfiguration","com.ctre.phoenix6.signals.NeutralModeValue","com.ctre.phoenix6.signals.InvertedValue"]},rev:{imports:["com.revrobotics.spark.SparkMax","com.revrobotics.spark.SparkLowLevel.MotorType","com.revrobotics.spark.config.SparkMaxConfig","com.revrobotics.spark.config.SparkBaseConfig.IdleMode","com.revrobotics.RelativeEncoder","com.revrobotics.spark.SparkBase.ControlType"]}},advantagekitApi:{robotBaseClass:"LoggedRobot",robotBaseImport:"org.littletonrobotics.junction.LoggedRobot",loggerImport:"org.littletonrobotics.junction.Logger",logStart:"Logger.start()"},simApi:{getMotorSim:(i,e)=>({falcon500:`DCMotor.getFalcon500(${e})`,krakenx60:`DCMotor.getKrakenX60(${e})`,krakenx44:`DCMotor.getKrakenX60(${e})`,minion:`DCMotor.getFalcon500(${e})`,talonfxs:`DCMotor.getFalcon500(${e})`,neo:`DCMotor.getNEO(${e})`,neo550:`DCMotor.getNeo550(${e})`,vortex:`DCMotor.getNeoVortex(${e})`})[i]||`DCMotor.getNEO(${e})`}};function en(i){var e;return i&&((e=qt[i])==null?void 0:e.vendor)==="ctre"}function vn(i){var e;return i&&((e=qt[i])==null?void 0:e.vendor)==="rev"}function O0(i){return en(i)?Et.motorApi.ctre.imports.map(e=>`import ${e};`).join(`
`)+`
`:vn(i)?Et.motorApi.rev.imports.map(e=>`import ${e};`).join(`
`)+`
`:""}function N0(i,e){let t="";return i.forEach((n,s)=>{const r=s===0?"leader":`follower${s}`,a=n.inverted?"InvertedValue.Clockwise_Positive":"InvertedValue.CounterClockwise_Positive";en(n.type)?t+=`
        {
            var cfg = new TalonFXConfiguration();
            cfg.CurrentLimits.StatorCurrentLimit = ${e}.CURRENT_LIMIT;
            cfg.CurrentLimits.StatorCurrentLimitEnable = true;
            cfg.MotorOutput.NeutralMode = ${e}.BRAKE_MODE ? NeutralModeValue.Brake : NeutralModeValue.Coast;
            cfg.MotorOutput.Inverted = ${a};
            ${r}.getConfigurator().apply(cfg);
            ${r}.setPosition(0);
        }`:vn(n.type)&&(t+=`
        {
            var cfg = new SparkMaxConfig();
            cfg.idleMode(${e}.BRAKE_MODE ? IdleMode.kBrake : IdleMode.kCoast);
            cfg.smartCurrentLimit(${e}.CURRENT_LIMIT);
            ${r}.configure(cfg, null, null);
            ${r}.getEncoder().setPosition(0);
        }`)}),t}function U0(i){const e=i[0];return en(e==null?void 0:e.type)?"leader.getPosition().getValueAsDouble()":vn(e==null?void 0:e.type)?"encoder.getPosition()":"0.0"}function k0(i){return qt[i.driveMotor],i.tankCanIds,en(i.driveMotor)?`package frc.robot.subsystems.drive;

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
`:vn(i.driveMotor)?`package frc.robot.subsystems.drive;

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
`:null}function F0(){return`package frc.robot.subsystems.drive;

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
`}function B0(i){return`package frc.robot.subsystems.drive;

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
        // TODO: Initialize ${i.usePhoenix6Swerve?"Phoenix 6 SwerveDrivetrain":"four SwerveModule instances"}
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
`}function z0(){return`package frc.robot.subsystems.drive;

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
`}function Wc(i,e,t){if(i==="arm"){let h=`import frc.robot.Constants.ArmConstants;
`,f="",g=`        // Initialize each joint
`,v="",m="";return e.joints.forEach((y,b)=>{const S=y.motors[0],A=y.motors.length>1;S&&S.type&&(en(S.type)?(h+=`import com.ctre.phoenix6.hardware.TalonFX;
import com.ctre.phoenix6.controls.VoltageOut;
`,f+=`    private final TalonFX joint${b}Motor = new TalonFX(ArmConstants.JOINT_${b+1}_MOTOR_ID);
`,g+=`        var joint${b}Cfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
`,g+=`        joint${b}Cfg.MotorOutput.Inverted = ArmConstants.JOINT_${b+1}_MOTOR_0_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
`,g+=`        joint${b}Motor.getConfigurator().apply(joint${b}Cfg);
`,A&&(f+=`    private final TalonFX joint${b}Follower = new TalonFX(ArmConstants.JOINT_${b+1}_FOLLOWER_1_ID);
`,g+=`        joint${b}Follower.setControl(new com.ctre.phoenix6.controls.Follower(joint${b}Motor.getDeviceID()));
`),v+=`        inputs.positionRad[${b}] = joint${b}Motor.getPosition().getValueAsDouble() * 2 * Math.PI;
`,v+=`        inputs.velocityRadPerSec[${b}] = joint${b}Motor.getVelocity().getValueAsDouble() * 2 * Math.PI;
`,v+=`        inputs.appliedVolts[${b}] = joint${b}Motor.getMotorVoltage().getValueAsDouble();
`,v+=`        inputs.currentAmps[${b}] = joint${b}Motor.getStatorCurrent().getValueAsDouble();
`):vn(S.type)&&(h+=`import com.revrobotics.spark.SparkMax;
import com.revrobotics.spark.SparkLowLevel.MotorType;
`,f+=`    private final SparkMax joint${b}Motor = new SparkMax(ArmConstants.JOINT_${b+1}_MOTOR_ID, MotorType.kBrushless);
`,g+=`        var joint${b}Cfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,g+=`        joint${b}Cfg.inverted(ArmConstants.JOINT_${b+1}_MOTOR_0_INVERTED);
`,g+=`        joint${b}Motor.configure(joint${b}Cfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,A&&(f+=`    private final SparkMax joint${b}Follower = new SparkMax(ArmConstants.JOINT_${b+1}_FOLLOWER_1_ID, MotorType.kBrushless);
`,g+=`        var joint${b}FollowerCfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,g+=`        joint${b}FollowerCfg.follow(joint${b}Motor);
`,g+=`        joint${b}Follower.configure(joint${b}FollowerCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`),v+=`        inputs.positionRad[${b}] = joint${b}Motor.getEncoder().getPosition();
`,v+=`        inputs.velocityRadPerSec[${b}] = joint${b}Motor.getEncoder().getVelocity();
`,v+=`        inputs.appliedVolts[${b}] = joint${b}Motor.getAppliedOutput() * joint${b}Motor.getBusVoltage();
`,v+=`        inputs.currentAmps[${b}] = joint${b}Motor.getOutputCurrent();
`),m+=`
    @Override
    public void setJointVolts(int jointIndex, double volts) {
        if (jointIndex == ${b}) {
            ${en(S.type)?`joint${b}Motor.setControl(new VoltageOut(volts));`:`joint${b}Motor.setVoltage(volts);`}
        }
    }
`)}),`package frc.robot.subsystems.arm;
${[...new Set(h.split(`
`).filter(Boolean))].join(`
`)}

public class ArmIOReal implements ArmIO {
${f}
    public ArmIOReal() {
${g}    }

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${v}    }

${m}
    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`}const n=e.motors||[],s=n[0];if(!(s!=null&&s.type))return null;const r=`${t}Constants`;let a="",o="",l="";n.forEach((h,f)=>{const g=f===0?"leader":`follower${f}`,v=f===0?"MOTOR_ID":`FOLLOWER_${f}_ID`;en(h.type)?(a+=`    private final TalonFX ${g} = new TalonFX(${r}.${v});
`,f===0&&(a+=`    private final VoltageOut voltageReq = new VoltageOut(0);
`)):vn(h.type)&&(a+=`    private final SparkMax ${g} = new SparkMax(${r}.${v}, MotorType.kBrushless);
`,f===0&&(a+=`    private final RelativeEncoder encoder = leader.getEncoder();
`)),f>0&&(en(h.type)?l+=`        ${g}.setControl(new com.ctre.phoenix6.controls.Follower(leader.getDeviceID()));
`:vn(h.type)&&(l+=`        ${g}.follow(leader);
`))}),o=N0(n,r);const c=en(s.type)?"        leader.setControl(voltageReq.withOutput(volts));":"        leader.setVoltage(volts);";let d="",u="";if(i==="shooter"&&(e.shooterType==="adjustable"||e.shooterType==="adjustable_turret")){const h=e.pivotMotor;h&&h.type&&(en(h.type)?(a+=`    private final TalonFX pivot = new TalonFX(${r}.PIVOT_MOTOR_ID);
`,o+=`
        // Pivot init
        var pivotCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        pivotCfg.MotorOutput.Inverted = ${r}.PIVOT_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        pivot.getConfigurator().apply(pivotCfg);
`,d+=`        inputs.pivotPositionRad = pivot.getPosition().getValueAsDouble();
`,u+=`
    @Override
    public void setPivotVoltage(double volts) {
        pivot.setControl(voltageReq.withOutput(volts));
    }
`):vn(h.type)&&(a+=`    private final SparkMax pivot = new SparkMax(${r}.PIVOT_MOTOR_ID, MotorType.kBrushless);
`,o+=`
        // Pivot init
        var pivotCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        pivotCfg.inverted(${r}.PIVOT_INVERTED);
        pivot.configure(pivotCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,d+=`        inputs.pivotPositionRad = pivot.getEncoder().getPosition();
`,u+=`
    @Override
    public void setPivotVoltage(double volts) {
        pivot.setVoltage(volts);
    }
`))}if(i==="shooter"&&e.shooterType==="adjustable_turret"){const h=e.turretMotor;h&&h.type&&(en(h.type)?(a+=`    private final TalonFX turret = new TalonFX(${r}.TURRET_MOTOR_ID);
`,o+=`
        // Turret init
        var turretCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        turretCfg.MotorOutput.Inverted = ${r}.TURRET_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        turret.getConfigurator().apply(turretCfg);
`,d+=`        inputs.turretPositionRad = turret.getPosition().getValueAsDouble();
`,u+=`
    @Override
    public void setTurretVoltage(double volts) {
        turret.setControl(voltageReq.withOutput(volts));
    }
`):vn(h.type)&&(a+=`    private final SparkMax turret = new SparkMax(${r}.TURRET_MOTOR_ID, MotorType.kBrushless);
`,o+=`
        // Turret init
        var turretCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        turretCfg.inverted(${r}.TURRET_INVERTED);
        turret.configure(turretCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,d+=`        inputs.turretPositionRad = turret.getEncoder().getPosition();
`,u+=`
    @Override
    public void setTurretVoltage(double volts) {
        turret.setVoltage(volts);
    }
`))}if(i==="launcher"&&e.launcherType==="arm_claw"){const h=e.clawMotor;h&&h.type&&(en(h.type)?(a+=`    private final TalonFX claw = new TalonFX(${r}.CLAW_MOTOR_ID);
`,o+=`
        // Claw init
        var clawCfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
        clawCfg.MotorOutput.Inverted = ${r}.CLAW_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
        claw.getConfigurator().apply(clawCfg);
`,d+=`        inputs.clawPositionRad = claw.getPosition().getValueAsDouble();
`,u+=`
    @Override
    public void setClawVoltage(double volts) {
        claw.setControl(voltageReq.withOutput(volts));
    }
`):vn(h.type)&&(a+=`    private final SparkMax claw = new SparkMax(${r}.CLAW_MOTOR_ID, MotorType.kBrushless);
`,o+=`
        // Claw init
        var clawCfg = new com.revrobotics.spark.config.SparkMaxConfig();
        clawCfg.inverted(${r}.CLAW_INVERTED);
        claw.configure(clawCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,d+=`        inputs.clawPositionRad = claw.getEncoder().getPosition();
`,u+=`
    @Override
    public void setClawVoltage(double volts) {
        claw.setVoltage(volts);
    }
`))}return`package frc.robot.subsystems.${i};

${O0(s.type)}
import frc.robot.Constants.${t}Constants;

public class ${t}IOReal implements ${t}IO {
${a}
    public ${t}IOReal() {${o}
${l}    }

    @Override
    public void updateInputs(${t}IOInputs inputs) {
        inputs.positionRad = ${U0(n)};
        inputs.velocityRadPerSec = 0.0;
        inputs.appliedVolts = 0.0;
${i==="elevator"?`        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;
`:""}${e.hasSensor?`        inputs.hasPiece = false; // TODO: sensor on Constants
`:""}${d}    }

    @Override
    public void setVoltage(double volts) {
${c}    }${u}

    @Override
    public void stop() { setVoltage(0); }

    @Override
    public void configurePID(double kP, double kI, double kD) {
        // TODO: Slot0 gains on motor controllers
    }
}
`}function jc(i,e,t,n){if(i==="arm"){let o="",l="",c="";return e.joints.forEach((d,u)=>{var m;const h=d.motors[0],f=((m=h==null?void 0:h.type)==null?void 0:m.toLowerCase())||"neo",g=d.motors.length,v=Et.simApi.getMotorSim(f,g);o+=`    private final DCMotorSim joint${u}Sim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.${v.replace("DCMotor.","")}, 0.002, ${(10-u*2).toFixed(1)}),
        DCMotor.${v.replace("DCMotor.","")}, 0.002, 0.01);
    private double joint${u}AppliedVolts = 0.0;
`,l+=`
        joint${u}Sim.setInputVoltage(RoboRioSim.getVInVoltage() * joint${u}AppliedVolts / 12.0);
        joint${u}Sim.update(0.02);
        inputs.positionRad[${u}] = joint${u}Sim.getAngularPositionRad();
        inputs.velocityRadPerSec[${u}] = joint${u}Sim.getAngularVelocityRadPerSec();
        inputs.appliedVolts[${u}] = joint${u}AppliedVolts;
        inputs.currentAmps[${u}] = joint${u}Sim.getCurrentDrawAmps();
`,c+=`        if (jointIndex == ${u}) joint${u}AppliedVolts = volts;
`}),`package frc.robot.subsystems.arm;

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.ArmConstants;

public class ArmIOSim implements ArmIO {
    /** Simulation parent: ${n||"chassis"} */
${o}
    public ArmIOSim() {}

    @Override
    public void updateInputs(ArmIOInputs inputs) {
${l}    }

    @Override
    public void setJointVolts(int jointIndex, double volts) {
${c}    }

    @Override
    public void stop() {
        for (int i = 0; i < ArmConstants.DOF; i++) {
            setJointVolts(i, 0.0);
        }
    }
}
`}let s="",r="",a="";return i==="shooter"&&(e.shooterType==="adjustable"||e.shooterType==="adjustable_turret")&&(s+=`
    private final DCMotorSim pivotSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim pivotEncoderSim = new EncoderSim(pivotSim);
    private double pivotAppliedVolts = 0.0;
`,r+=`
        pivotSim.setInputVoltage(RoboRioSim.getVInVoltage() * pivotAppliedVolts / 12.0);
        pivotSim.update(0.02);
        inputs.pivotPositionRad = pivotEncoderSim.getDistance();
        inputs.pivotVelocityRadPerSec = pivotEncoderSim.getRate();
        inputs.pivotAppliedVolts = pivotAppliedVolts;
`,a+=`
    @Override
    public void setPivotVoltage(double volts) { pivotAppliedVolts = volts; }
`),i==="shooter"&&e.shooterType==="adjustable_turret"&&(s+=`
    private final DCMotorSim turretSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(DCMotor.getNEO(1), 0.002, 10.0),
        DCMotor.getNEO(1), 0.002, 0.01);
    private final EncoderSim turretEncoderSim = new EncoderSim(turretSim);
    private double turretAppliedVolts = 0.0;
`,r+=`
        turretSim.setInputVoltage(RoboRioSim.getVInVoltage() * turretAppliedVolts / 12.0);
        turretSim.update(0.02);
        inputs.turretPositionRad = turretEncoderSim.getDistance();
        inputs.turretVelocityRadPerSec = turretEncoderSim.getRate();
        inputs.turretAppliedVolts = turretAppliedVolts;
`,a+=`
    @Override
    public void setTurretVoltage(double volts) { turretAppliedVolts = volts; }
`),`package frc.robot.subsystems.${i};

import edu.wpi.first.math.system.plant.DCMotor;
import edu.wpi.first.math.system.plant.LinearSystemId;
import edu.wpi.first.wpilibj.simulation.DCMotorSim;
import edu.wpi.first.wpilibj.simulation.RoboRioSim;
import frc.robot.Constants.${t}Constants;

public class ${t}IOSim implements ${t}IO {
    /** Simulation parent: ${n||"chassis"} */
    private final DCMotorSim motorSim = new DCMotorSim(
        LinearSystemId.createDCMotorSystem(${(()=>{var u;const o=e.motors||[],l=o[0],c=((u=l==null?void 0:l.type)==null?void 0:u.toLowerCase())||"neo",d=o.length;return Et.simApi.getMotorSim(c,d)})()}, 0.002, 10.0),
        ${(()=>{var u;const o=e.motors||[],l=o[0],c=((u=l==null?void 0:l.type)==null?void 0:u.toLowerCase())||"neo",d=o.length;return Et.simApi.getMotorSim(c,d)})()}, 0.002, 0.01);
    private double appliedVolts = 0.0;${s}

    public ${t}IOSim() {}

    @Override
    public void updateInputs(${t}IOInputs inputs) {
        motorSim.setInputVoltage(RoboRioSim.getVInVoltage() * appliedVolts / 12.0);
        motorSim.update(0.02);
        inputs.positionRad = motorSim.getAngularPositionRad();
        inputs.velocityRadPerSec = motorSim.getAngularVelocityRadPerSec();
        inputs.appliedVolts = appliedVolts;
        inputs.currentAmps = motorSim.getCurrentDrawAmps();
${i==="elevator"?`        inputs.heightMeters = inputs.positionRad / (2 * Math.PI) * ElevatorConstants.GEAR_RATIO;
`:""}${e.hasSensor?`        inputs.hasPiece = false;
`:""}${r}    }

    @Override
    public void setVoltage(double volts) { appliedVolts = volts; }${a}

    @Override
    public void stop() { appliedVolts = 0; }

    @Override
    public void configurePID(double kP, double kI, double kD) {}
}
`}const Ea=[{fwd_quasi:"a()",rev_quasi:"b()",fwd_dyn:"x()",rev_dyn:"y()"},{fwd_quasi:"povUp()",rev_quasi:"povDown()",fwd_dyn:"povRight()",rev_dyn:"povLeft()"},{fwd_quasi:"leftBumper()",rev_quasi:"rightBumper()",fwd_dyn:"leftTrigger()",rev_dyn:"rightTrigger()"},{fwd_quasi:"back()",rev_quasi:"start()",fwd_dyn:"back().and(controller.a())",rev_dyn:"start().and(controller.a())"}];function V0(i,e){const t=[];if(e&&t.push({name:"drive",varName:"drive",displayName:"Drive"}),t.push(...i),t.length===0)return"";let n=`
        // ═══════════════════════════════════════════════════════════════
`;return n+=`        // AUTO-GENERATED SYSID CHARACTERIZATION BINDINGS
`,n+=`        // Active in ALL modes. Hold the assigned buttons to run routines.
`,n+=`        // After collecting data, use WPILib SysId tool to analyze logs.
`,n+=`        // ═══════════════════════════════════════════════════════════════
`,t.length<=Ea.length?t.forEach((s,r)=>{const a=Ea[r];n+=`
        // --- ${s.displayName} SysId (${H0(r)}) ---
`,n+=`        controller.${a.fwd_quasi}.whileTrue(${s.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.${a.rev_quasi}.whileTrue(${s.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,n+=`        controller.${a.fwd_dyn}.whileTrue(${s.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.${a.rev_dyn}.whileTrue(${s.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}):(n+=`        // NOTE: More than 4 SysId-capable subsystems. Using dashboard chooser.
`,n+=`        // Select mechanism on SmartDashboard "SysId Mechanism" chooser,
`,n+=`        // then use A/B/X/Y to run quasistatic/dynamic routines.
`,n+=G0(t)),n}function H0(i){return["A/B/X/Y buttons","D-Pad","Bumpers/Triggers","Back/Start"][i]||`Pool ${i}`}function G0(i){let e="";return e+=`
        // SysId mechanism selector
`,e+=`        sysIdChooser = new edu.wpi.first.wpilibj.smartdashboard.SendableChooser<>();
`,i.forEach((t,n)=>{e+=`        sysIdChooser.${n===0?"setDefaultOption":"addOption"}("${t.displayName}", "${t.varName}");
`}),e+=`        edu.wpi.first.wpilibj.smartdashboard.SmartDashboard.putData("SysId Mechanism", sysIdChooser);
`,e+=`
`,i.forEach(t=>{e+=`        controller.a().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,e+=`        controller.b().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,e+=`        controller.x().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,e+=`        controller.y().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}),e}function $0(i){return i>Ea.length?`    private final edu.wpi.first.wpilibj.smartdashboard.SendableChooser<String> sysIdChooser;
`:""}function W0(i){return`import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
`}const $i={FULL:"full",ADD_MECHANISM:"add",LIBRARIES_ONLY:"libs"};function Co(i,e,t=$i.FULL){const n=Object.entries(i.mechanisms).filter(([,s])=>s.configured).map(([s])=>s);return{schemaVersion:"1.0",generatedAt:new Date().toISOString(),generatorVersion:"2.0",mode:t,projectName:e,framework:i.framework||"advantagekit",libraries:{gradleRIO:Et.gradleRIO,advantagekit:Et.vendordeps.advantagekit.version,phoenix6:Et.vendordeps.phoenix6.version,revlib:Et.vendordeps.revlib.version,pathplanner:Et.vendordeps.pathplanner.version,photonlib:Et.vendordeps.photonlib.version},chassis:i.chassis.configured?{type:i.chassis.type,driveMotor:i.chassis.driveMotor,gyro:i.chassis.gyro}:null,mechanisms:n,vision:i.vision.configured?i.vision.system:null,generatedFiles:[]}}function j0(i,e,t){const n=e.mechanisms[i];if(!n)return"";const s=i.charAt(0).toUpperCase()+i.slice(1);let r=`## ➕ Merge Instructions: Add ${s}

`;return r+=`The following code was generated for the **${s}** mechanism.
`,r+=`Since you already have an existing project, manually copy the relevant sections.

`,r+=`### 1. Files to Copy
`,r+=`Copy the entire \`src/main/java/frc/robot/subsystems/${i}/\` folder to your project.

`,r+=`### 2. RobotContainer.java
`,r+="```java\n",r+=`// Add to imports:
import frc.robot.subsystems.${i}.*;

`,r+=`// Add field:
private final ${s} ${i};

`,r+=`// Add to constructor:
`,t==="advantagekit"?r+=`${i} = new ${s}(Robot.isReal() ? new ${s}IOReal() : new ${s}IOSim());
`:r+=`${i} = new ${s}();
`,r+="```\n\n",r+=`### 3. Constants.java
`,r+="```java\n",r+=`// Add inside Constants class:
public static final class ${s}Constants {
`,n.motors&&n.motors.forEach((a,o)=>{const l=o===0?"MOTOR_ID":`FOLLOWER_${o}_ID`;r+=`    public static final int ${l} = ${a.canId};
`}),n.pid&&(r+=`    public static final double kP = ${n.pid.kP||0};
`,r+=`    public static final double kI = ${n.pid.kI||0};
`,r+=`    public static final double kD = ${n.pid.kD||0};
`,r+=`    public static final double kS = ${n.pid.kS||0};
`,r+=`    public static final double kV = ${n.pid.kV||0};
`),r+=`}
`,r+="```\n\n",r+=`> **@generated marker**: Add \`// @generated:${i}\` comments around any generated blocks
`,r+=`> so future regenerations can identify and update them automatically.

`,r}function Io(i,e,t,n){return t.generatedFiles=n,i.file(`${e}/.robot-generator-manifest.json`,JSON.stringify(t,null,2)),t}async function X0(i,e="FRCRobotProject",t=$i.FULL){const n=new L0,s=e,r=i.framework||"advantagekit",a=[];function o(h,f){n.file(h,f),a.push(h.replace(`${s}/`,""))}if(t===$i.LIBRARIES_ONLY){o(`${s}/build.gradle`,Xc()),qc(n,s,i);const h=Co(i,e,t);Io(n,s,h,a);const f=await n.generateAsync({type:"blob"}),g=document.createElement("a");g.href=URL.createObjectURL(f),g.download=`${e}-libraries.zip`,g.click();return}if(t===$i.ADD_MECHANISM){const h=Object.entries(i.mechanisms).filter(([,y])=>y.configured),f=`${s}/src/main/java/frc/robot`;let g=`# Merge Instructions

Generated: ${new Date().toISOString()}

`;h.forEach(([y,b])=>{Yc(n,f,y,b,i,r),g+=j0(y,i,r)}),o(`${s}/MERGE_INSTRUCTIONS.md`,g),o(`${s}/Constants-additions.java`,q0(i));const v=Co(i,e,t);Io(n,s,v,a);const m=await n.generateAsync({type:"blob"}),p=document.createElement("a");p.href=URL.createObjectURL(m),p.download=`${e}-add-mechanism.zip`,p.click();return}o(`${s}/build.gradle`,Xc()),o(`${s}/README.md`,ry(i,e)),o(`${s}/settings.gradle`,`pluginManagement {
  repositories {
    mavenLocal()
    gradlePluginPortal()
    maven { url "https://frcmaven.wpi.edu/artifactory/release" }
  }
}
`),qc(n,s,i);const l=`${s}/src/main/java/frc/robot`;o(`${l}/Main.java`,Y0()),o(`${l}/Robot.java`,K0(r)),o(`${l}/Constants.java`,Z0(i)),o(`${l}/RobotContainer.java`,J0(i)),i.chassis.configured&&Q0(n,l,i,r),Object.entries(i.mechanisms).forEach(([h,f])=>{f.configured&&Yc(n,l,h,f,i,r)}),i.vision.configured&&ey(n,l,i),i.statemachine.configured&&ty(n,l),i.stateMachineIntegration&&i.statemachine.configured&&ny(n,l),i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&(iy(n,s),i.chassis.type==="swerve"&&sy(n,l)),n.file(`${s}/src/main/deploy/.gitkeep`,"");const c=Co(i,e,$i.FULL);Io(n,s,c,a);const d=await n.generateAsync({type:"blob"}),u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`${e}.zip`,u.click()}function q0(i){let e=`// === ADD THESE TO YOUR EXISTING Constants.java ===

`;return Object.entries(i.mechanisms).forEach(([t,n])=>{if(!n.configured)return;const s=t.charAt(0).toUpperCase()+t.slice(1);e+=`    // @generated:${t}
`,e+=`    public static final class ${s}Constants {
`,(n.motors||[]).forEach((r,a)=>{const o=a===0?"MOTOR_ID":`FOLLOWER_${a}_ID`;e+=`        public static final int ${o} = ${r.canId};
`}),n.motorConfig&&(e+=`        public static final int CURRENT_LIMIT = ${n.motorConfig.currentLimit||40};
`,e+=`        public static final boolean BRAKE_MODE = ${n.motorConfig.brakeMode!==!1};
`),n.pid&&(e+=`        public static final double kP = ${n.pid.kP||0};
`,e+=`        public static final double kI = ${n.pid.kI||0};
`,e+=`        public static final double kD = ${n.pid.kD||0};
`,e+=`        public static final double kS = ${n.pid.kS||0};
`,e+=`        public static final double kV = ${n.pid.kV||0};
`,e+=`        public static final double kA = ${n.pid.kA||0};
`),e+=`    }
    // @end-generated:${t}

`}),e}function Xc(i){return`plugins {
    id "java"
    id "edu.wpi.first.GradleRIO" version "${Et.gradleRIO}"
}
sourceCompatibility = JavaVersion.${Et.javaVersion}
targetCompatibility = JavaVersion.${Et.javaVersion}
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
`}function qc(i,e,t){const n=`${e}/vendordeps`,s=Et;if(t.framework==="advantagekit"||!t.framework){const o=s.vendordeps.advantagekit;i.file(`${n}/${o.fileName}`,JSON.stringify({fileName:o.fileName,name:o.name,version:o.version,uuid:o.uuid,frcYear:s.frcYear,mavenUrls:o.mavenUrls,jsonUrl:"",javaDependencies:o.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}const r=new Set;if(t.chassis.configured){const o=qt[t.chassis.driveMotor];if(o&&r.add(o.vendor),t.chassis.turnMotor){const l=qt[t.chassis.turnMotor];l&&r.add(l.vendor)}if(t.chassis.gyro){const l=wa[t.chassis.gyro];l&&r.add(l.vendor)}}Object.values(t.mechanisms).forEach(o=>{o.configured&&(o.motors||[]).forEach(l=>{const c=qt[l.type];c&&r.add(c.vendor)})}),t.vision.configured&&t.vision.system==="photonvision"&&r.add("photonvision");const a={ctre:s.vendordeps.phoenix6,rev:s.vendordeps.revlib,kauai:s.vendordeps.navx,photonvision:s.vendordeps.photonlib};if(r.forEach(o=>{const l=a[o];l&&i.file(`${n}/${l.fileName}`,JSON.stringify({fileName:l.fileName,name:l.name,version:l.version,frcYear:s.frcYear,mavenUrls:l.mavenUrls,jsonUrl:l.jsonUrl||"",javaDependencies:l.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}),t.chassis.configured&&t.chassis.pathplannerEnabled!==!1){const o=s.vendordeps.pathplanner;i.file(`${n}/${o.fileName}`,JSON.stringify({fileName:o.fileName,name:o.name,version:o.version,frcYear:s.frcYear,mavenUrls:o.mavenUrls,jsonUrl:o.jsonUrl,javaDependencies:o.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}}function Y0(){return`package frc.robot;
import edu.wpi.first.wpilibj.RobotBase;
public final class Main {
    private Main() {}
    public static void main(String... args) { RobotBase.startRobot(Robot::new); }
}
`}function K0(i){if(i==="commandbase")return`package frc.robot;
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
`;const e=Et.advantagekitApi;return`package frc.robot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.CommandScheduler;
import ${e.robotBaseImport};
import ${e.loggerImport};

public class Robot extends ${e.robotBaseClass} {
    private Command autonomousCommand;
    private RobotContainer robotContainer;
    @Override public void robotInit() { ${e.logStart}; robotContainer = new RobotContainer(); }
    @Override public void robotPeriodic() { CommandScheduler.getInstance().run(); }
    @Override public void autonomousInit() { autonomousCommand = robotContainer.getAutonomousCommand(); if (autonomousCommand != null) autonomousCommand.schedule(); }
    @Override public void teleopInit() { if (autonomousCommand != null) autonomousCommand.cancel(); }
    @Override public void testInit() { CommandScheduler.getInstance().cancelAll(); }
}
`}function Z0(i){const e={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};let t=`package frc.robot;

public final class Constants {
    private Constants() {}

`;if(i.chassis.configured){if(t+=`    public static final class DriveConstants {
`,t+=`        public static final String DRIVE_TYPE = "${i.chassis.type}";
`,t+=`        public static final double MAX_SPEED_MPS = ${i.chassis.maxSpeed||4.5};
`,t+=`        public static final double DRIVE_GEAR_RATIO = ${i.chassis.gearRatio||8.45};
`,i.chassis.turnGearRatio&&(t+=`        public static final double TURN_GEAR_RATIO = ${i.chassis.turnGearRatio};
`),t+=`        public static final double WHEEL_DIAMETER_M = ${i.chassis.wheelDiameter||.1524};
`,i.chassis.type==="swerve"){const n=i.chassis.canIds;["fl","fr","bl","br"].forEach(s=>{const r=s.toUpperCase();t+=`        public static final int ${r}_DRIVE_ID = ${n[s+"_drive"]};
`,t+=`        public static final int ${r}_TURN_ID = ${n[s+"_turn"]};
`,t+=`        public static final int ${r}_ENCODER_ID = ${n[s+"_encoder"]};
`})}else{const n=i.chassis.tankCanIds;t+=`        public static final int LEFT_LEADER_ID = ${n.left_leader};
`,t+=`        public static final int LEFT_FOLLOWER_ID = ${n.left_follower};
`,t+=`        public static final int RIGHT_LEADER_ID = ${n.right_leader};
`,t+=`        public static final int RIGHT_FOLLOWER_ID = ${n.right_follower};
`}if(t+=`        public static final int GYRO_ID = ${i.chassis.gyroCanId};
`,t+=`        public static final double TRACK_WIDTH_M = ${i.chassis.trackWidth||.546};
`,i.chassis.type==="swerve"){t+=`        public static final boolean USE_PHOENIX6_SWERVE = ${!!i.chassis.usePhoenix6Swerve};
`,t+=`        public static final String SWERVE_ENCODER_TYPE = "${i.chassis.swerveEncoderType||"cancoder"}";
`;const s=(i.chassis.trackWidth||.546)/2;t+=`        public static final edu.wpi.first.math.geometry.Translation2d[] MODULE_TRANSLATIONS = new edu.wpi.first.math.geometry.Translation2d[] {
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(${s}, ${s}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(${s}, -${s}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(-${s}, ${s}),
`,t+=`            new edu.wpi.first.math.geometry.Translation2d(-${s}, -${s}),
`,t+=`        };
`}t+=`    }

`}return Object.entries(i.mechanisms).forEach(([n,s])=>{var a,o;if(!s.configured)return;const r=n.charAt(0).toUpperCase()+n.slice(1);if(t+=`    public static final class ${r}Constants {
`,n==="arm")t+=`        public static final int DOF = ${s.dof};
`,s.joints.forEach((l,c)=>{t+=`        // Joint ${c+1}
`,(l.motors||[]).forEach((d,u)=>{const h=u===0?`JOINT_${c+1}_MOTOR_ID`:`JOINT_${c+1}_FOLLOWER_${u}_ID`;t+=`        public static final int ${h} = ${d.canId};
`,t+=`        public static final boolean JOINT_${c+1}_MOTOR_${u}_INVERTED = ${d.inverted};
`}),l.encoder&&(t+=`        public static final String JOINT_${c+1}_ENCODER_TYPE = "${l.encoder}";
`),t+=`        public static final int JOINT_${c+1}_ENCODER_ID = ${l.encoderId};
`,l.gearRatio&&(t+=`        public static final double JOINT_${c+1}_GEAR_RATIO = ${l.gearRatio};
`),t+=`        public static final int JOINT_${c+1}_CURRENT_LIMIT = ${l.motorConfig.currentLimit||40};
`,l.softLimitFwd&&(t+=`        public static final double JOINT_${c+1}_SOFT_LIMIT_FWD = ${l.softLimitFwd};
`),l.softLimitRev&&(t+=`        public static final double JOINT_${c+1}_SOFT_LIMIT_REV = ${l.softLimitRev};
`),t+=`        public static final double JOINT_${c+1}_kP = ${l.pid.kP||0};
`,t+=`        public static final double JOINT_${c+1}_kI = ${l.pid.kI||0};
`,t+=`        public static final double JOINT_${c+1}_kD = ${l.pid.kD||0};
`});else{(s.motors||[]).forEach((c,d)=>{const u=d===0?"MOTOR_ID":`FOLLOWER_${d}_ID`;t+=`        public static final int ${u} = ${c.canId};
`}),s.encoderId&&(t+=`        public static final int ENCODER_ID = ${s.encoderId};
`),s.gearRatio&&(t+=`        public static final double GEAR_RATIO = ${s.gearRatio};
`);const l=s.motorConfig||{};if(t+=`        public static final int CURRENT_LIMIT = ${l.currentLimit||40};
`,t+=`        public static final boolean BRAKE_MODE = ${l.brakeMode!==!1};
`,"rampRate"in s&&s.rampRate!=null&&(t+=`        public static final double RAMP_RATE_SECS = ${s.rampRate/1e3};
`),n==="elevator"&&(t+=`        public static final double MIN_HEIGHT_M = ${s.minHeight||0};
`,s.maxHeight&&(t+=`        public static final double MAX_HEIGHT_M = ${s.maxHeight};
`),s.softLimitFwd&&(t+=`        public static final double SOFT_LIMIT_FWD = ${s.softLimitFwd};
`),s.softLimitRev&&(t+=`        public static final double SOFT_LIMIT_REV = ${s.softLimitRev};
`),s.motionMaxVel&&(t+=`        public static final double MOTION_MAX_VEL = ${s.motionMaxVel};
`),s.motionMaxAccel&&(t+=`        public static final double MOTION_MAX_ACCEL = ${s.motionMaxAccel};
`)),n==="shooter"&&(t+=`        public static final String SHOOTER_TYPE = "${s.shooterType||"flywheel_only"}";
`,s.maxRPM&&(t+=`        public static final double MAX_RPM = ${s.maxRPM};
`),(s.shooterType==="adjustable"||s.shooterType==="adjustable_turret")&&s.pivotMotor&&(t+=`        public static final int PIVOT_MOTOR_ID = ${s.pivotMotor.canId};
`,t+=`        public static final boolean PIVOT_INVERTED = ${s.pivotMotor.inverted};
`),s.shooterType==="adjustable_turret"&&s.turretMotor&&(t+=`        public static final int TURRET_MOTOR_ID = ${s.turretMotor.canId};
`,t+=`        public static final boolean TURRET_INVERTED = ${s.turretMotor.inverted};
`)),n==="launcher"&&(t+=`        public static final String LAUNCHER_TYPE = "simple";
`,s.softLimitFwd&&(t+=`        public static final double SOFT_LIMIT_FWD = ${s.softLimitFwd};
`),s.softLimitRev&&(t+=`        public static final double SOFT_LIMIT_REV = ${s.softLimitRev};
`)),s.hasSensor&&(t+=`        public static final String SENSOR_PORT_TYPE = "${s.sensorPortType}";
`,t+=`        public static final int SENSOR_PORT = ${s.sensorPort};
`),s.pid){const c=s.pid;t+=`        public static final double kP = ${c.kP||0};
`,t+=`        public static final double kI = ${c.kI||0};
`,t+=`        public static final double kD = ${c.kD||0};
`,c.kS&&(t+=`        public static final double kS = ${c.kS};
`),c.kV&&(t+=`        public static final double kV = ${c.kV};
`),c.kA&&(t+=`        public static final double kA = ${c.kA};
`)}(a=s.physics)!=null&&a.massKg&&(t+=`        /** Mass used in simulation physics model */
        public static final double SIM_MASS_KG = ${s.physics.massKg};
`),(o=s.physics)!=null&&o.moiKgM2&&(t+=`        /** Moment of inertia used in simulation physics model */
        public static final double SIM_MOI_KG_M2 = ${s.physics.moiKgM2};
`)}t+=`    }

`}),i.vision.configured&&(t+=`    public static final class VisionConstants {
`,t+=`        public static final String SYSTEM = "${i.vision.system}";
`,i.vision.system==="limelight"&&(t+=`        public static final String LIMELIGHT_VERSION = "${e[i.vision.limelightVersion]||"Limelight"}";
`),t+=`        public static final int CAMERA_COUNT = ${i.vision.cameraCount};
`,i.vision.cameras.forEach((n,s)=>{t+=`        // Camera ${s}: ${n.name}
`,t+=`        public static final double CAM${s}_X = ${n.x}; // forward
`,t+=`        public static final double CAM${s}_Y = ${n.y}; // left
`,t+=`        public static final double CAM${s}_Z = ${n.z}; // up
`,t+=`        public static final double CAM${s}_ROLL = Math.toRadians(${n.roll});
`,t+=`        public static final double CAM${s}_PITCH = Math.toRadians(${n.pitch});
`,t+=`        public static final double CAM${s}_YAW = Math.toRadians(${n.yaw});
`}),t+=`    }

`),t+=`}
`,t}function J0(i){const e=i.framework||"advantagekit";let t=`package frc.robot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,n="",s="",r="";const a=i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&i.chassis.type==="swerve";if(i.chassis.configured&&(t+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,a&&(t+=`import frc.robot.Autos;
`),n+=`    private final Drive drive;
`,e==="advantagekit"?s+=`        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());
`:s+=`        drive = new Drive();
`,r+=`        // Default drive: left stick = translate, right stick X = rotate
`,r+=`        drive.setDefaultCommand(DriveCommands.joystickDrive(drive,
`,r+=`            () -> -controller.getLeftY(),
`,r+=`            () -> -controller.getLeftX(),
`,r+=`            () -> -controller.getRightX()));

`),Object.entries(i.mechanisms).forEach(([h,f])=>{if(!f.configured)return;const g=h.charAt(0).toUpperCase()+h.slice(1);t+=`import frc.robot.subsystems.${h}.*;
`,n+=`    private final ${g} ${h};
`,e==="advantagekit"?s+=`        ${h} = new ${g}(Robot.isReal() ? new ${g}IOReal() : new ${g}IOSim());
`:s+=`        ${h} = new ${g}();
`,h==="intake"&&(r+=`        controller.rightBumper().whileTrue(Commands.runEnd(() -> ${h}.runVoltage(8), ${h}::stop, ${h}));
`),h==="shooter"&&(r+=`        controller.rightTrigger().whileTrue(Commands.runEnd(() -> ${h}.runVoltage(12), ${h}::stop, ${h}));
`),h==="elevator"&&(r+=`        controller.y().whileTrue(Commands.runEnd(() -> ${h}.runVoltage(6), ${h}::stop, ${h}));
`),h==="arm"&&(r+=`        controller.a().whileTrue(Commands.runEnd(() -> ${h}.runJointVoltage(0, 4), ${h}::stop, ${h}));
`),h==="launcher"&&(r+=`        controller.leftBumper().whileTrue(Commands.runEnd(() -> ${h}.runVoltage(10), ${h}::stop, ${h}));
`)}),i.vision.configured)if(t+=`import frc.robot.subsystems.vision.*;
`,n+=`    private final Vision vision;
`,e==="advantagekit"){const h=i.vision.system==="limelight"?"VisionIOLimelight":"VisionIOPhotonVision";s+=`        vision = new Vision(new ${h}());
`}else s+=`        vision = new Vision();
`;const o=Object.entries(i.mechanisms).filter(([h,f])=>f.configured&&h!=="arm").map(([h])=>({name:h,varName:h,displayName:h.charAt(0).toUpperCase()+h.slice(1)})),l=(i.chassis.configured?1:0)+o.length;r+=V0(o,i.chassis.configured),l>0&&(t+=W0()),n+=$0(l);const c=a?`        return Autos.getAuto(drive);
`:`        return Commands.print("No autonomous configured");
`,d=i.stateMachineIntegration&&i.statemachine.configured?`    private final StateMachineCoordinator stateMachineCoordinator;
`:"",u=i.stateMachineIntegration&&i.statemachine.configured?`        stateMachineCoordinator = new StateMachineCoordinator(this);
`:"";return i.stateMachineIntegration&&i.statemachine.configured&&(t+=`import frc.robot.commands.StateMachineCoordinator;
import frc.robot.statemachine.StateMachine;
`),`${t}
public class RobotContainer {
    private final CommandXboxController controller = new CommandXboxController(0);
${n}${d}
    public RobotContainer() {
${s}${u}        configureBindings();
    }

    private void configureBindings() {
${r}    }

    public Command getAutonomousCommand() {
${c}    }
}
`}function Q0(i,e,t,n){const s=`${e}/subsystems/drive`;qt[t.chassis.driveMotor];const r=t.chassis.type==="swerve",a=r&&t.chassis.usePhoenix6Swerve,o=t.chassis.pathplannerEnabled!==!1&&r;if(n==="advantagekit")if(r){i.file(`${s}/DriveIO.java`,`package frc.robot.subsystems.drive;
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
`),i.file(`${s}/DriveIOReal.java`,B0(t.chassis)),i.file(`${s}/DriveIOSim.java`,z0());const l=o?`
        // PathPlanner AutoBuilder — holonomic swerve (${a?"Phoenix 6":"WPILib"} underneath)
        com.pathplanner.lib.auto.AutoBuilder.configure(
            this::getPose, this::resetPose, this::getChassisSpeeds, this::drive,
            new com.pathplanner.lib.controllers.PPHolonomicDriveController(
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0),
                new edu.wpi.first.math.controller.PIDConstants(5.0, 0.0, 0.0)),
            com.pathplanner.lib.util.HolonomicPathFollowerConfig.fromRobotConfig(
                new edu.wpi.first.wpilibj2.command.Subsystem[] { this }),
            () -> io.getHeading().getDegrees() < 0,
            this);
`:"";i.file(`${s}/Drive.java`,`package frc.robot.subsystems.drive;
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
`),i.file(`${e}/commands/DriveCommands.java`,`package frc.robot.commands;
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
`)}else{i.file(`${s}/DriveIO.java`,`package frc.robot.subsystems.drive;
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
`);const l=k0(t.chassis);l&&i.file(`${s}/DriveIOReal.java`,l),i.file(`${s}/DriveIOSim.java`,F0()),i.file(`${s}/Drive.java`,`package frc.robot.subsystems.drive;
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
`),i.file(`${e}/commands/DriveCommands.java`,`package frc.robot.commands;
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
`)}else r?i.file(`${s}/Drive.java`,`package frc.robot.subsystems.drive;
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
`):i.file(`${s}/Drive.java`,`package frc.robot.subsystems.drive;
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
`),i.file(`${e}/commands/DriveCommands.java`,r?`package frc.robot.commands;
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
`)}function Yc(i,e,t,n,s,r){const a=t.charAt(0).toUpperCase()+t.slice(1),o=`${e}/subsystems/${t}`;if(t==="arm"){if(r==="advantagekit"){i.file(`${o}/ArmIO.java`,`package frc.robot.subsystems.arm;
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
`);const u=Wc("arm",n,"Arm");u&&i.file(`${o}/ArmIOReal.java`,u),i.file(`${o}/ArmIOSim.java`,jc("arm",n,"Arm",n.attachedTo||"chassis")),i.file(`${o}/Arm.java`,`package frc.robot.subsystems.arm;
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
`)}else{let u="";n.joints.forEach((h,f)=>{u+=`    // Joint ${f+1}: leader CAN ID ${h.motors[0].canId} | gear ratio ${h.gearRatio||"—"}
`}),i.file(`${o}/Arm.java`,`package frc.robot.subsystems.arm;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.ArmConstants;

public class Arm extends SubsystemBase {
${u}
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
`)}return}const l=n.motors||[];l[0];const c=n.motorConfig||{};let d=l.map((u,h)=>{const f=qt[u.type];return`    // Motor ${h} (${u.role}): ${(f==null?void 0:f.name)||"?"} CAN:${u.canId} inv:${u.inverted}`}).join(`
`);if(r==="advantagekit"){let u="",h="",f="";t==="shooter"&&((n.shooterType==="adjustable"||n.shooterType==="adjustable_turret")&&(u+=`        public double pivotPositionRad = 0.0;
        public double pivotVelocityRadPerSec = 0.0;
        public double pivotAppliedVolts = 0.0;
        public double[] pivotCurrentAmps = new double[]{0.0};
`,h+=`    default void setPivotVoltage(double volts) {}
    default void setPivotPosition(double positionRad) {}
`,f+=`    public void runPivotVoltage(double v) { io.setPivotVoltage(v); }
    public double getPivotPosition() { return inputs.pivotPositionRad; }
`),n.shooterType==="adjustable_turret"&&(u+=`        public double turretPositionRad = 0.0;
        public double turretVelocityRadPerSec = 0.0;
        public double turretAppliedVolts = 0.0;
        public double[] turretCurrentAmps = new double[]{0.0};
`,h+=`    default void setTurretVoltage(double volts) {}
    default void setTurretPosition(double positionRad) {}
`,f+=`    public void runTurretVoltage(double v) { io.setTurretVoltage(v); }
    public double getTurretPosition() { return inputs.turretPositionRad; }
`)),i.file(`${o}/${a}IO.java`,`package frc.robot.subsystems.${t};
import org.littletonrobotics.junction.AutoLog;
public interface ${a}IO {
    @AutoLog class ${a}IOInputs {
        public double positionRad = 0.0;
        public double velocityRadPerSec = 0.0;
        public double appliedVolts = 0.0;
        public double[] currentAmps = new double[]{0.0};
${t==="elevator"?`        public double heightMeters = 0.0;
`:""}${n.hasSensor?`        public boolean hasPiece = false;
`:""}${u}    }
    default void updateInputs(${a}IOInputs inputs) {}
    default void setVoltage(double volts) {}
    default void setPosition(double positionRad) {}
    default void stop() {}
    default void configurePID(double kP, double kI, double kD) {}
${h}}
`);const g=Wc(t,n,a);g&&i.file(`${o}/${a}IOReal.java`,g),i.file(`${o}/${a}IOSim.java`,jc(t,n,a,n.attachedTo||"chassis")),i.file(`${o}/${a}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.${a}Constants;
import static edu.wpi.first.units.Units.*;

public class ${a} extends SubsystemBase {
    private final ${a}IO io;
    private final ${a}IOInputsAutoLogged inputs = new ${a}IOInputsAutoLogged();
    private final SysIdRoutine sysIdRoutine;

    public ${a}(${a}IO io) {
        this.io = io;${n.pid?`
        io.configurePID(${a}Constants.kP, ${a}Constants.kI, ${a}Constants.kD);`:""}
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.setVoltage(volts.in(Volts)),
                null,
                this));
    }

    @Override public void periodic() {
        io.updateInputs(inputs);
        Logger.processInputs("${a}", inputs);
    }

    public void runVoltage(double v) { io.setVoltage(v); }
    public void stop() { io.stop(); }
${t==="elevator"?`    public double getHeight() { return inputs.heightMeters; }
`:""}${n.hasSensor?`    public boolean hasPiece() { return inputs.hasPiece; }
`:""}${f}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`)}else{let u="";t==="shooter"&&((n.shooterType==="adjustable"||n.shooterType==="adjustable_turret")&&(u+=`    public void runPivotVoltage(double v) { /* TODO */ }
    public double getPivotPosition() { return 0.0; /* TODO */ }
`),n.shooterType==="adjustable_turret"&&(u+=`    public void runTurretVoltage(double v) { /* TODO */ }
    public double getTurretPosition() { return 0.0; /* TODO */ }
`)),i.file(`${o}/${a}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.${a}Constants;
import static edu.wpi.first.units.Units.*;

public class ${a} extends SubsystemBase {
${d}
    // Current Limit: ${c.currentLimit}A | Brake: ${c.brakeMode}
    private final SysIdRoutine sysIdRoutine;

    public ${a}() {
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
`:""}${n.hasSensor?`    public boolean hasPiece() { return false; /* TODO */ }
`:""}${u}    public Command sysIdQuasistatic(SysIdRoutine.Direction direction) { return sysIdRoutine.quasistatic(direction); }
    public Command sysIdDynamic(SysIdRoutine.Direction direction) { return sysIdRoutine.dynamic(direction); }
}
`)}}function ey(i,e,t,n){const s=`${e}/subsystems/vision`,r=t.vision.system==="limelight",a={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};if(i.file(`${s}/VisionIO.java`,`package frc.robot.subsystems.vision;
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
`),r){let o="";t.vision.cameras.forEach((l,c)=>{o+=`        // ${l.name}: Translation(${l.x}, ${l.y}, ${l.z}) Rotation(${l.roll}°, ${l.pitch}°, ${l.yaw}°)
`}),i.file(`${s}/VisionIOLimelight.java`,`package frc.robot.subsystems.vision;
import frc.robot.Constants.VisionConstants;
public class VisionIOLimelight implements VisionIO {
    // Limelight version: ${a[t.vision.limelightVersion]||"Limelight"}
${o}    public VisionIOLimelight() { /* Init cameras */ }
    @Override public void updateInputs(VisionIOInputs inputs) { /* LimelightHelpers */ }
}
`)}else{let o="";t.vision.cameras.forEach((l,c)=>{o+=`        // ${l.name}: new Transform3d(${l.x},${l.y},${l.z}, new Rotation3d(${l.roll}°,${l.pitch}°,${l.yaw}°))
`}),i.file(`${s}/VisionIOPhotonVision.java`,`package frc.robot.subsystems.vision;
import org.photonvision.PhotonCamera;
import frc.robot.Constants.VisionConstants;
public class VisionIOPhotonVision implements VisionIO {
    // Platform: ${t.vision.photonPlatform}
${o}    private final PhotonCamera[] cameras;
    public VisionIOPhotonVision() {
        cameras = new PhotonCamera[VisionConstants.CAMERA_COUNT];
        for (int i = 0; i < cameras.length; i++) cameras[i] = new PhotonCamera("camera_" + i);
    }
    @Override public void updateInputs(VisionIOInputs inputs) { /* PhotonPoseEstimator */ }
}
`)}i.file(`${s}/Vision.java`,`package frc.robot.subsystems.vision;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
public class Vision extends SubsystemBase {
    private final VisionIO io;
    private final VisionIOInputsAutoLogged inputs = new VisionIOInputsAutoLogged();
    public Vision(VisionIO io) { this.io = io; }
    @Override public void periodic() { io.updateInputs(inputs); Logger.processInputs("Vision", inputs); }
    public boolean hasTarget() { return inputs.hasTarget; }
}
`)}function ty(i,e,t){i.file(`${e}/statemachine/StateMachine.java`,`package frc.robot.statemachine;
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
`)}function ny(i,e,t,n){i.file(`${e}/commands/StateMachineCoordinator.java`,`package frc.robot.commands;
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
`)}function iy(i,e,t){const n=`${e}/src/main/deploy/pathplanner`;i.file(`${n}/paths/.gitkeep`,""),i.file(`${n}/autos/.gitkeep`,""),i.file(`${n}/paths/Example Path.path`,JSON.stringify({version:Et.pathplannerFormat,waypoints:[{anchor:{x:1.5,y:5.5},prevWaypoint:null,nextWaypoint:{x:2,y:5.5}},{anchor:{x:3,y:5.5},prevWaypoint:{x:2.5,y:5.5},nextWaypoint:null}],constraints:[],goalEndState:{velocity:0,rotation:0}},null,2)),i.file(`${n}/autos/Example Auto.auto`,JSON.stringify({version:Et.pathplannerFormat,name:"Example Auto",folder:"autos",choreoAuto:!1,pathplannerAuto:!0,commands:[{type:"path",pathName:"Example Path"}]},null,2)),i.file(`${n}/settings.json`,JSON.stringify({robotWidth:.9,robotLength:.9,holonomicMode:!0},null,2))}function sy(i,e,t){i.file(`${e}/Autos.java`,`package frc.robot;
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
`)}function ry(i,e){const t={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"},n=i.vision.system==="limelight"?t[i.vision.limelightVersion]||"Limelight":i.vision.photonPlatform||"PhotonVision";return`# FRC Robot Project: ${e}

This deployable FRC codebase was automatically generated using the FRC Robot Code Generator.

## 🛠️ Architecture Overview
- **Code Architecture**: ${i.framework==="advantagekit"?"AdvantageKit-based (Telemetry-focused multi-IO layer)":"WPILib command-based template"}
- **Chassis**: ${i.chassis.configured?`${i.chassis.type.toUpperCase()} drive (${i.chassis.tankCanIds?"Tank":"Swerve"})`:"None"}
- **Vision**: ${i.vision.configured?`${i.vision.system} supporting ${n}`:"None"}

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
`}function oy(i){const e=[],t=[];i.chassis.configured?(i.chassis.driveMotor||e.push({section:"Chassis",msg:"Select a drive motor"}),i.chassis.gyro||e.push({section:"Chassis",msg:"Select a gyro"}),i.chassis.type==="swerve"&&!i.chassis.turnMotor&&e.push({section:"Chassis",msg:"Select a turn motor for swerve"}),i.chassis.gearRatio||t.push({section:"Chassis",msg:"Gear ratio not set — defaults to 1.0"})):e.push({section:"Chassis",msg:"Drivetrain must be configured"});const n=new Map;function s(r,a){if(a==null||a==="")return;const o=Number(a);n.has(o)?e.push({section:"CAN IDs",msg:`Conflict: ID ${o} used by "${n.get(o)}" and "${r}"`}):n.set(o,r)}if(i.chassis.configured){if(i.chassis.type==="swerve"&&i.chassis.canIds){const r=i.chassis.canIds;["fl","fr","bl","br"].forEach(a=>{const o=a.toUpperCase();s(`${o} Drive`,r[a+"_drive"]),s(`${o} Turn`,r[a+"_turn"]),s(`${o} Encoder`,r[a+"_encoder"])})}s("Gyro",i.chassis.gyroCanId)}return Object.entries(i.mechanisms).forEach(([r,a])=>{var l,c;if(!a.enabled||!a.configured)return;const o=r.charAt(0).toUpperCase()+r.slice(1);if(r==="arm"){a.joints.forEach((d,u)=>{var h,f;d.motors.forEach((g,v)=>{s(`Arm Joint ${u+1} Motor ${v}`,g.canId)}),d.encoderId&&s(`Arm Joint ${u+1} Encoder`,d.encoderId),(!((h=d.motors)!=null&&h.length)||!((f=d.motors[0])!=null&&f.type))&&t.push({section:`Arm Joint ${u+1}`,msg:"No motor selected"})});return}(a.motors||[]).forEach((d,u)=>{s(`${o} Motor ${u}`,d.canId)}),a.encoderId&&s(`${o} Encoder`,a.encoderId),(!((l=a.motors)!=null&&l.length)||!((c=a.motors[0])!=null&&c.type))&&t.push({section:o,msg:"No motor selected"})}),i.vision.enabled&&i.vision.configured&&(i.vision.system||e.push({section:"Vision",msg:"Select Limelight or PhotonVision"}),i.vision.cameraCount<1&&t.push({section:"Vision",msg:"No cameras configured"})),{errors:e,warnings:t,isValid:e.length===0}}function Do(i){var d,u;const e=document.getElementById("summary-body");if(!e)return;const{errors:t,warnings:n}=oy(i);let s="";s+=`<div class="summary-tabs">
        <button class="summary-tab active" data-tab="review">REVIEW</button>
        <button class="summary-tab" data-tab="preview">CODE PREVIEW</button>
    </div>`,s+='<div class="summary-tab-content active" id="tab-review">',t.length>0&&(s+=`<div class="summary-alert summary-alert-error">
            <strong>⚠ ${t.length} Error${t.length>1?"s":""}</strong>
            ${t.map(h=>`<div class="alert-item">• <strong>${h.section}:</strong> ${h.msg}</div>`).join("")}
        </div>`),n.length>0&&(s+=`<div class="summary-alert summary-alert-warn">
            <strong>⚡ ${n.length} Warning${n.length>1?"s":""}</strong>
            ${n.map(h=>`<div class="alert-item">• <strong>${h.section}:</strong> ${h.msg}</div>`).join("")}
        </div>`),t.length===0&&n.length===0&&(s+='<div class="summary-alert summary-alert-ok"><strong>✓ All checks passed</strong></div>');const r=i.framework==="commandbase"?"Command-Based Template":"AdvantageKit-based Architecture (IO + replay)";if(s+=`<div class="summary-section">
        <div class="summary-section-title">CODE ARCHITECTURE</div>
        <div class="summary-grid">
            <div class="summary-item"><span class="summary-key">Pattern</span><span class="summary-val">${r}</span></div>
            <div class="summary-item"><span class="summary-key">StateMachine</span><span class="summary-val">${i.stateMachineIntegration?"State-driven commands":"Standard commands"}</span></div>
        </div>
    </div>`,i.chassis.configured){const h=Jc[i.chassis.type],f=qt[i.chassis.driveMotor],g=wa[i.chassis.gyro];if(s+=`<div class="summary-section">
            <div class="summary-section-title">DRIVETRAIN</div>
            <div class="summary-grid">
                <div class="summary-item"><span class="summary-key">Type</span><span class="summary-val">${(h==null?void 0:h.name)||i.chassis.type}</span></div>
                <div class="summary-item"><span class="summary-key">Drive Motor</span><span class="summary-val">${(f==null?void 0:f.name)||"—"}</span></div>
                ${i.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Turn Motor</span><span class="summary-val">${((d=qt[i.chassis.turnMotor])==null?void 0:d.name)||"—"}</span></div>`:""}
                <div class="summary-item"><span class="summary-key">Gyro</span><span class="summary-val">${(g==null?void 0:g.name)||"—"} (ID: ${i.chassis.gyroCanId})</span></div>
                <div class="summary-item"><span class="summary-key">Gear Ratio</span><span class="summary-val">${i.chassis.gearRatio||"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Wheel ⌀</span><span class="summary-val">${i.chassis.wheelDiameter?i.chassis.wheelDiameter+"m":"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Max Speed</span><span class="summary-val">${i.chassis.maxSpeed?i.chassis.maxSpeed+" m/s":"—"}</span></div>
                ${i.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Drive Stack</span><span class="summary-val">${i.chassis.usePhoenix6Swerve?"Phoenix 6 SwerveDrivetrain":"WPILib swerve"}</span></div>`:""}
            </div>`,i.chassis.type==="swerve"&&i.chassis.canIds){const v=i.chassis.canIds;s+=`<div class="summary-sub-title">CAN IDs</div><div class="summary-can-grid">
                ${["fl","fr","bl","br"].map(m=>`<div class="summary-can-mod"><strong>${m.toUpperCase()}</strong> D:${v[m+"_drive"]} T:${v[m+"_turn"]} E:${v[m+"_encoder"]}</div>`).join("")}
            </div>`}s+="</div>"}else s+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ DRIVETRAIN</div><p>Not configured</p></div>';Object.entries(i.mechanisms).forEach(([h,f])=>{var v;if(!f.enabled)return;let g="";if(h==="arm")if(f.configured){let m="";f.joints.forEach((p,y)=>{const b=p.motors.map(S=>{const A=qt[S.type];return`${S.role}: ${(A==null?void 0:A.name)||"—"} (CAN ${S.canId})${S.inverted?" inv":""}`}).join("<br>");m+=`<div style="margin-top: 8px;">
                        <strong>Joint ${y+1}:</strong><br>
                        - Motors: ${b}<br>
                        - Gear Ratio: ${p.gearRatio||"—"}<br>
                        - Encoder: ${p.encoder||"Integrated"} (ID: ${p.encoderId})<br>
                        - PID: kP=${p.pid.kP}, kI=${p.pid.kI}, kD=${p.pid.kD}
                    </div>`}),g=`<div class="summary-grid" style="display:block">
                    <div class="summary-item summary-item-wide"><span class="summary-key">DoF</span><span class="summary-val">${f.dof}</span></div>
                    <div style="font-size:0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 8px 12px; background: rgba(255,255,255,0.02); border-radius: 4px; margin-top: 8px;">
                        ${m}
                    </div>
                    <div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${f.attachedTo||"chassis"}</span></div>
                </div>`}else g='<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>';else{const p=(f.motors||[]).map(y=>{const b=qt[y.type];return`${y.role}: ${(b==null?void 0:b.name)||"—"} (CAN ${y.canId})${y.inverted?" inv":""}`}).join("<br>");g=f.configured?`<div class="summary-grid">
                <div class="summary-item summary-item-wide"><span class="summary-key">Motors</span><span class="summary-val">${p}</span></div>
                ${f.gearRatio?`<div class="summary-item"><span class="summary-key">Ratio</span><span class="summary-val">${f.gearRatio}</span></div>`:""}
                ${h==="elevator"?`<div class="summary-item"><span class="summary-key">Height</span><span class="summary-val">${f.minHeight||0}–${f.maxHeight||"?"} m</span></div>`:""}
                ${h==="shooter"&&f.maxRPM?`<div class="summary-item"><span class="summary-key">Max RPM</span><span class="summary-val">${f.maxRPM}</span></div>`:""}
                ${f.hasSensor?`<div class="summary-item"><span class="summary-key">Sensor</span><span class="summary-val">${(f.sensorPortType||"dio").toUpperCase()} port ${f.sensorPort}</span></div>`:""}
                ${(v=i.attachmentRules)!=null&&v[h]?`<div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${f.attachedTo||"chassis"}</span></div>`:""}
            </div>`:'<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>'}s+=`<div class="summary-section ${f.configured?"":"summary-missing"}">
            <div class="summary-section-title">${h.toUpperCase()} ${f.configured?"":"— Not configured"}</div>
            ${g}
        </div>`}),i.vision.enabled&&(i.vision.configured?(s+=`<div class="summary-section">
                <div class="summary-section-title">VISION</div>
                <div class="summary-grid">
                    <div class="summary-item"><span class="summary-key">System</span><span class="summary-val">${i.vision.system==="limelight"?((u=Qc[i.vision.limelightVersion])==null?void 0:u.name)||"Limelight":"PhotonVision"}</span></div>
                    ${i.vision.system==="photonvision"?`<div class="summary-item"><span class="summary-key">Platform</span><span class="summary-val">${i.vision.photonPlatform}</span></div>`:""}
                    <div class="summary-item"><span class="summary-key">Cameras</span><span class="summary-val">${i.vision.cameraCount}</span></div>
                </div>`,(i.vision.cameras||[]).forEach((h,f)=>{s+=`<div class="summary-cam"><strong>${h.name}</strong> — T(${h.x}, ${h.y}, ${h.z})m  R(${h.roll}°, ${h.pitch}°, ${h.yaw}°)</div>`}),s+="</div>"):s+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ VISION — Not configured</div></div>'),i.statemachine.enabled&&(s+=`<div class="summary-section"><div class="summary-section-title">STATE MACHINE</div><p style="color:var(--text-secondary);font-size:0.8rem">${i.statemachine.configured?"✓ JSON attached":"⚠ Enabled but no JSON — will generate skeleton"}</p></div>`);let a=4;i.chassis.configured&&(a+=5),i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&i.chassis.type==="swerve"&&(a+=1),i.stateMachineIntegration&&i.statemachine.configured&&(a+=1),Object.values(i.mechanisms).forEach(h=>{h.configured&&(a+=4)}),i.vision.configured&&(a+=4),i.statemachine.configured&&(a+=1),s+=`<div class="summary-section" style="text-align:center;opacity:0.6;font-size:0.75rem">
        <strong>${a} Java files</strong> will be generated
    </div>`,s+=`<div class="summary-section" style="background: rgba(0,255,255,0.05); border: 1px solid rgba(0,255,255,0.2);">
        <div class="summary-section-title" style="color: var(--accent-cyan)">ℹ️ PID & FEEDFORWARD TUNING</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
            Don't worry if you left the PID/FF values at 0! The generated code includes full <strong>SysId Integration</strong>.
            You can use the SysId tool to characterize your robot and find the optimal values.<br><br>
            <strong>How to update later:</strong> You can directly modify the constants in <code>Constants.java</code> (e.g. <code>ShooterConstants.kP</code>).
            <br><br>
            <a href="javascript:void(0)" onclick="document.getElementById('nav-sysid').click()" style="color: var(--accent-cyan); text-decoration: underline;">Click here to view the SysId Guide</a>.
        </p>
    </div>`,s+=`<div class="summary-section" style="background: rgba(213,0,28,0.06); border: 1px solid rgba(213,0,28,0.25);">
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
    </div>`,s+=`<details class="summary-code-preview">
        <summary>Generated Code Preview (Constants.java)</summary>
        <pre class="preview-code summary-collapsible-preview"><code id="summary-collapsible-preview-content"></code></pre>
    </details>`,s+="</div>",s+=`<div class="summary-tab-content" id="tab-preview">
        <div class="preview-file-list">
            <div class="preview-file active" data-file="Constants">Constants.java</div>
            <div class="preview-file" data-file="RobotContainer">RobotContainer.java</div>
            <div class="preview-file" data-file="Robot">Robot.java</div>
        </div>
        <pre class="preview-code" id="preview-code"><code id="preview-code-content">Click a file to preview</code></pre>
    </div>`,e.innerHTML=s,e.querySelectorAll(".summary-tab").forEach(h=>{h.addEventListener("click",()=>{var f;e.querySelectorAll(".summary-tab").forEach(g=>g.classList.remove("active")),e.querySelectorAll(".summary-tab-content").forEach(g=>g.classList.remove("active")),h.classList.add("active"),(f=e.querySelector(`#tab-${h.dataset.tab}`))==null||f.classList.add("active")})}),e.querySelectorAll(".preview-file").forEach(h=>{h.addEventListener("click",()=>{e.querySelectorAll(".preview-file").forEach(g=>g.classList.remove("active")),h.classList.add("active");const f=e.querySelector("#preview-code-content");f.textContent=Po(i,h.dataset.file)})});const o=e.querySelector("#preview-code-content");o&&(o.textContent=Po(i,"Constants"));const l=e.querySelector("#summary-collapsible-preview-content");l&&(l.textContent=Po(i,"Constants"));const c=document.getElementById("summary-confirm");c&&t.length>0?(c.disabled=!0,c.title="Fix errors before generating"):c&&(c.disabled=!1,c.title="")}function Po(i,e){return e==="Constants"?ay(i):e==="RobotContainer"?ly(i):e==="Robot"?cy():""}function ay(i){let e=`package frc.robot;

public final class Constants {
    private Constants() {}

`;return i.chassis.configured&&(e+=`    public static final class DriveConstants {
`,e+=`        public static final String DRIVE_TYPE = "${i.chassis.type}";
`,i.chassis.maxSpeed&&(e+=`        public static final double MAX_SPEED_MPS = ${i.chassis.maxSpeed};
`),i.chassis.gearRatio&&(e+=`        public static final double DRIVE_GEAR_RATIO = ${i.chassis.gearRatio};
`),i.chassis.type==="swerve"&&i.chassis.canIds&&["fl","fr","bl","br"].forEach(t=>{const n=t.toUpperCase();e+=`        public static final int ${n}_DRIVE_ID = ${i.chassis.canIds[t+"_drive"]};
`,e+=`        public static final int ${n}_TURN_ID = ${i.chassis.canIds[t+"_turn"]};
`,e+=`        public static final int ${n}_ENCODER_ID = ${i.chassis.canIds[t+"_encoder"]};
`}),e+=`        public static final int GYRO_ID = ${i.chassis.gyroCanId};
`,e+=`    }

`),Object.entries(i.mechanisms).forEach(([t,n])=>{if(!n.configured)return;const s=t.charAt(0).toUpperCase()+t.slice(1);e+=`    public static final class ${s}Constants {
`,(n.motors||[]).forEach((r,a)=>{const o=a===0?"MOTOR_ID":`FOLLOWER_${a}_ID`;e+=`        public static final int ${o} = ${r.canId};
`}),n.pid&&(e+=`        public static final double kP = ${n.pid.kP||0};
        public static final double kI = ${n.pid.kI||0};
        public static final double kD = ${n.pid.kD||0};
`),e+=`    }

`}),e+=`}
`,e}function ly(i){let e=`package frc.robot;
import edu.wpi.first.wpilibj2.command.*;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,t="",n="";return i.chassis.configured&&(e+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,t+=`    private final Drive drive;
`,n+=`        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());
`),Object.entries(i.mechanisms).forEach(([s,r])=>{if(!r.configured)return;const a=s.charAt(0).toUpperCase()+s.slice(1);e+=`import frc.robot.subsystems.${s}.*;
`,t+=`    private final ${a} ${s};
`,n+=`        ${s} = new ${a}(Robot.isReal() ? new ${a}IOReal() : new ${a}IOSim());
`}),`${e}
public class RobotContainer {
    private final CommandXboxController controller = new CommandXboxController(0);
${t}
    public RobotContainer() {
${n}        configureBindings();
    }

    private void configureBindings() {
        // TODO: Add button bindings
    }

    public Command getAutonomousCommand() {
        return Commands.print("No autonomous configured");
    }
}
`}function cy(){return`package frc.robot;

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
`}const Ju="robotConfig";document.addEventListener("DOMContentLoaded",()=>{const i=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||window.innerWidth<768;Ne.state.isMobile=i,i&&document.body.classList.add("is-mobile"),yy(),C0(),dy(),uy(),hy(),fy(),my(),gy(),vy(Ne.getState()),Ne.subscribe(e=>{_y(e),Qu(),ed(e),xy(e)})});function uy(){const i=document.getElementById("landing-page");i&&(i.scrollTo({top:0,left:0,behavior:"auto"}),setTimeout(()=>{i.scrollTo({top:0,left:0,behavior:"auto"})},100)),document.querySelectorAll('.landing-nav .nav-link[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const n=e.getAttribute("href");if(!n||n==="#")return;const s=document.querySelector(n);if(!s||!i)return;t.preventDefault();const r=Math.max(0,s.getBoundingClientRect().top-i.getBoundingClientRect().top+i.scrollTop-60);i.scrollTo({top:r,left:0,behavior:"smooth"})})})}function dy(){var i,e,t,n;(i=document.getElementById("nav-sysid"))==null||i.addEventListener("click",s=>{s.preventDefault(),xr("sysid"),by()}),(e=document.getElementById("sysid-back"))==null||e.addEventListener("click",()=>xr("landing")),(t=document.getElementById("btn-start"))==null||t.addEventListener("click",()=>{xr("configurator"),setTimeout(()=>{const s=document.getElementById("viewport-3d-container");s&&c0(s)},100)}),(n=document.getElementById("btn-back"))==null||n.addEventListener("click",()=>xr("landing"))}function xr(i){var e;if(document.querySelectorAll(".page").forEach(t=>t.classList.remove("active")),(e=document.getElementById(`${i}-page`))==null||e.classList.add("active"),Ne.setPage(i),i==="landing"){const t=document.getElementById("landing-page");t&&t.scrollTo({top:0,left:0,behavior:"auto"})}}function hy(){var i;document.querySelectorAll(".mechanism-card").forEach(e=>{e.addEventListener("click",t=>{var s;if(t.target.closest(".card-toggle"))return;const n=e.dataset.type;if(n){if(n!=="chassis"){const r=Ne.getState();if(!(n==="vision"?r.vision.enabled:n==="statemachine"?r.statemachine.enabled:(s=r.mechanisms[n])==null?void 0:s.enabled)){ni("Enable this mechanism first","info");return}}py(n)}})}),(i=document.getElementById("btn-reset"))==null||i.addEventListener("click",()=>{Ne.resetAll(),Ka(),document.querySelectorAll(".mech-toggle").forEach(e=>{e.checked=!1}),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("enabled","configured")),["elevator","shooter","intake","roller","launcher","arm","vision"].forEach(e=>zr(e,!1)),ni("Configuration reset","info")})}function fy(){document.querySelectorAll(".mech-toggle").forEach(i=>{i.addEventListener("change",e=>{e.stopPropagation();const t=i.dataset.mech,n=i.checked,s=i.closest(".mechanism-card");n?(s.classList.add("enabled"),s.querySelector(".card-desc").textContent="Click to configure"):(s.classList.remove("enabled","configured"),s.querySelector(".card-desc").textContent="Disabled",Ne.getState().selectedMechanism===t&&Ka()),t==="vision"?Ne.updateVision({enabled:n}):t==="statemachine"?Ne.updateStateMachine({enabled:n}):Ne.getState().mechanisms[t]&&Ne.updateMechanism(t,{enabled:n}),zr(t,n)})})}function py(i){var e,t;document.querySelectorAll(".mechanism-card").forEach(n=>n.classList.remove("selected")),(e=document.querySelector(`.mechanism-card[data-type="${i}"]`))==null||e.classList.add("selected"),Ne.selectMechanism(i),Ei(i),(t=document.getElementById("detail-sidebar"))==null||t.classList.add("open"),h0(i)}function Ka(){var i;(i=document.getElementById("detail-sidebar"))==null||i.classList.remove("open"),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("selected")),Ne.closeSidebar(),f0()}function my(){var i,e;(i=document.getElementById("sidebar-close"))==null||i.addEventListener("click",Ka),(e=document.getElementById("btn-apply"))==null||e.addEventListener("click",()=>{var a;const t=Ne.getState().selectedMechanism;if(!t)return;A0(t);const n=Ne.getState();Or(t,n);let s=!1;t==="chassis"?s=n.chassis.configured:t==="vision"?s=n.vision.configured:t==="statemachine"?s=n.statemachine.configured:s=(a=n.mechanisms[t])==null?void 0:a.configured;const r=document.querySelector(`[data-type="${t}"]`);r&&(s?(r.classList.add("configured"),ni(`${t} configured!`,"success")):(r.classList.remove("configured"),ni("Fill required fields","error"))),td(n)})}function gy(){var t,n,s,r;const i=document.getElementById("summary-overlay"),e=document.getElementById("modal-overlay");(t=document.getElementById("btn-generate"))==null||t.addEventListener("click",()=>{const a=Ne.getState();if(!a.chassis.configured){ni("Configure chassis first","error");return}Do(a),i.style.display="flex";const o=document.getElementById("sm-integration-check");o&&(o.checked=a.stateMachineIntegration,o.onchange=()=>{Ne.setStateMachineIntegration(o.checked),Do(Ne.getState())}),document.querySelectorAll(".fw-btn").forEach(l=>{l.classList.toggle("active",l.dataset.fw===a.framework),l.onclick=()=>{document.querySelectorAll(".fw-btn").forEach(c=>c.classList.remove("active")),l.classList.add("active"),Ne.setFramework(l.dataset.fw),Do(Ne.getState())}})}),(n=document.getElementById("summary-close"))==null||n.addEventListener("click",()=>i.style.display="none"),(s=document.getElementById("summary-back"))==null||s.addEventListener("click",()=>i.style.display="none"),(r=document.getElementById("summary-confirm"))==null||r.addEventListener("click",async()=>{var d;const a=Ne.getState();if(a.stateMachineIntegration){if(!a.statemachine.configured){ni("StateMachine must be configured for integration.","error");return}try{const u=JSON.parse(a.statemachine.jsonData);if(typeof u!="object"||Array.isArray(u)||Object.keys(u).length===0)throw new Error;for(const[h,f]of Object.entries(u)){if(!Array.isArray(f))throw new Error;for(const g of f)if(typeof g!="string")throw new Error}}catch{ni("Invalid StateMachine JSON format.","error");return}}i.style.display="none",e.style.display="flex";const o=document.getElementById("gen-status-text"),c=Ne.getState().framework==="advantagekit"?["Initializing...","build.gradle...","IO Interfaces...","Drive subsystem...","Mechanisms...","Vision...","PathPlanner...","Packaging ZIP..."]:["Initializing...","build.gradle...","Drive subsystem...","Mechanisms...","Vision...","Packaging ZIP..."];for(const u of c)o.textContent=u,await new Promise(h=>setTimeout(h,350));try{const u=((d=document.getElementById("project-name-input"))==null?void 0:d.value)||"FRC2026_Robot",h=document.querySelector('input[name="gen-mode"]:checked'),f=h?h.value:$i.FULL;await X0(Ne.getState(),u,f),o.textContent="✓ Download started!",setTimeout(()=>e.style.display="none",1500),ni("Code generated!","success")}catch(u){o.textContent="✕ "+u.message,setTimeout(()=>e.style.display="none",3e3)}})}function vy(i){const e=document.getElementById("project-name-input");e&&i.projectName&&(e.value=i.projectName),document.querySelectorAll(".mech-toggle").forEach(t=>{var a;const n=t.dataset.mech;let s=!1;n==="vision"?s=i.vision.enabled:n==="statemachine"?s=i.statemachine.enabled:s=!!((a=i.mechanisms[n])!=null&&a.enabled),t.checked=s;const r=t.closest(".mechanism-card");r&&(r.classList.toggle("enabled",s),s||(r.querySelector(".card-desc").textContent="Disabled"),zr(n,s))}),td(i),Qu(),ed(i)}function _y(i){var n;const e=((n=document.getElementById("project-name-input"))==null?void 0:n.value)||"FRC2026_Robot",t={...i,projectName:e};try{localStorage.setItem(Ju,JSON.stringify(t));const s=document.getElementById("config-saved-indicator");s&&(s.classList.add("show"),clearTimeout(s._hideTimer),s._hideTimer=setTimeout(()=>s.classList.remove("show"),1200))}catch{}}function yy(){try{const i=localStorage.getItem(Ju);if(!i)return;const e=JSON.parse(i);Ne.loadState(e)}catch{}}async function by(){const i=document.getElementById("sysid-content-container");if(!i||i.dataset.loaded==="true")return;i.innerHTML='<p class="sysid-loading">Loading SysId guide...</p>';const t=["./pages/sysid.html","./pages/sysid.html"];for(const n of t)try{const s=await fetch(n,{cache:"no-cache"});if(!s.ok)continue;i.innerHTML=await s.text(),i.dataset.loaded="true";return}catch{}i.innerHTML='<p class="sysid-error">Unable to load SysId guide. Please refresh and try again.</p>'}function Qu(){const i=Ne.getConfiguredCount(),e=Ne.getExpectedCount(),t=document.getElementById("progress-fill");t&&(t.style.width=e===0?"0%":Math.round(i/e*100)+"%");const n=document.getElementById("config-status");n&&(n.textContent=`${i} / ${e} configured`)}function ed(i){const e=(t,n)=>{const s=document.getElementById(t);s&&(n?s.classList.add("configured"):s.classList.remove("configured"))};e("card-chassis",i.chassis.configured),Object.entries(i.mechanisms).forEach(([t,n])=>e(`card-${t}`,n.configured)),e("card-vision",i.vision.configured),e("card-statemachine",i.statemachine.configured)}function xy(i){Ao("chassis",i.chassis.configured),Object.entries(i.mechanisms).forEach(([e,t])=>Ao(e,t.configured)),Ao("vision",i.vision.configured)}const Kc={talonfx_falcon:"Falcon 500",talonfx_kraken60:"Kraken X60",talonfx_kraken44:"Kraken X44",talonfxs_minion:"Minion",talonfxs:"TalonFXS",sparkmax_neo:"NEO",sparkmax_neo550:"NEO 550",sparkflex_vortex:"Vortex"},Sy={ll3:"Limelight 3",ll3a:"Limelight 3A",ll3g:"Limelight 3G",ll4:"Limelight 4"};function td(i){const e=(t,n)=>{const s=document.querySelector(t);s&&(s.textContent=n)};if(i.chassis.configured&&e("#card-chassis .card-desc",`${i.chassis.type} · ${Kc[i.chassis.driveMotor]||""}`),Object.entries(i.mechanisms).forEach(([t,n])=>{if(!n.configured)return;if(t==="arm"){e("#card-arm .card-desc",`${n.dof} DoF Arm`);return}const s=n.motors||[],r=s[0],a=r!=null&&r.type?Kc[r.type]||r.type:"Motor",o=s.length>1?` +${s.length-1}`:"";e(`#card-${t} .card-desc`,`${a}${o}`)}),i.vision.configured){const t=Sy[i.vision.limelightVersion]||"Limelight";e("#card-vision .card-desc",i.vision.system==="limelight"?t:"PhotonVision")}i.statemachine.configured&&e("#card-statemachine .card-desc","Enabled")}
