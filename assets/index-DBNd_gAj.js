(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const qt={talonfx_falcon:{name:"Falcon 500 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6380,stallTorque:4.69,canBus:!0},talonfx_kraken60:{name:"Kraken X60 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:6e3,stallTorque:7.09,canBus:!0},talonfx_kraken44:{name:"Kraken X44 (TalonFX)",vendor:"ctre",class:"TalonFX",freeSpeed:5800,stallTorque:4.69,canBus:!0},talonfxs_minion:{name:"Minion (TalonFXS)",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:1.22,canBus:!0},talonfxs:{name:"TalonFXS",vendor:"ctre",class:"TalonFXS",freeSpeed:6e3,stallTorque:7.09,canBus:!0},sparkmax_neo:{name:"SparkMax + NEO",vendor:"rev",class:"CANSparkMax",freeSpeed:5676,stallTorque:2.6,canBus:!0},sparkmax_neo550:{name:"SparkMax + NEO 550",vendor:"rev",class:"CANSparkMax",freeSpeed:11e3,stallTorque:.97,canBus:!0},sparkflex_vortex:{name:"SparkFlex + Vortex",vendor:"rev",class:"CANSparkFlex",freeSpeed:6784,stallTorque:3.6,canBus:!0}},Xc={integrated:{name:"Integrated Encoder",vendor:"none",needsId:!1},cancoder:{name:"CANCoder",vendor:"ctre",needsId:!0},throughbore:{name:"Through Bore Encoder",vendor:"rev",needsId:!1,port:"DIO"},dutycycle:{name:"DutyCycle Encoder",vendor:"wpilib",needsId:!1,port:"DIO"}},ya={pigeon2:{name:"Pigeon 2.0",vendor:"ctre",class:"Pigeon2",needsCanId:!0},navx:{name:"NavX2",vendor:"kauai",class:"AHRS",needsCanId:!1},adis16470:{name:"ADIS16470",vendor:"wpilib",class:"ADIS16470_IMU",needsCanId:!1},adis16448:{name:"ADIS16448",vendor:"wpilib",class:"ADIS16448_IMU",needsCanId:!1}},qc={swerve:{name:"Swerve Drive",modules:4,desc:"Holonomic drive with independent steer+drive per module"},tank:{name:"Tank Drive",modules:2,desc:"Differential drive with left/right side motors"},mecanum:{name:"Mecanum Drive",modules:4,desc:"Holonomic drive with mecanum wheels"}},Kd={ll3:{name:"Limelight 3",desc:"Upgraded sensor, wider FOV"},ll3a:{name:"Limelight 3A",desc:"High resolution"},ll3g:{name:"Limelight 3G",desc:"Google Coral AI accelerator"},ll4:{name:"Limelight 4",desc:"Latest gen, highest performance"}},Zd={raspberrypi:{name:"Raspberry Pi",desc:"Raspberry Pi 4/5 running PhotonVision"},orangepi:{name:"Orange Pi",desc:"Orange Pi 5 running PhotonVision"}},ws={mk4i_l2:{name:"MK4i L2",driveRatio:6.75,turnRatio:150/7,wheelDiam:.1016},mk4i_l3:{name:"MK4i L3",driveRatio:6.12,turnRatio:150/7,wheelDiam:.1016},mk4_l2:{name:"MK4 L2",driveRatio:6.75,turnRatio:12.8,wheelDiam:.1016},mk4n_l2:{name:"MK4n L2",driveRatio:5.9,turnRatio:18.75,wheelDiam:.1016},custom:{name:"Custom",driveRatio:null,turnRatio:null,wheelDiam:null}},Yc={dio:{name:"RoboRIO DIO",desc:"Digital Input/Output port (0-9)"},can:{name:"CAN Bus Sensor",desc:"CAN-connected sensor (e.g. CANifier)"},analog:{name:"RoboRIO Analog",desc:"Analog Input port (0-3)"}},hn={swerve:{fl_drive:11,fl_turn:12,fl_encoder:13,fr_drive:21,fr_turn:22,fr_encoder:23,bl_drive:31,bl_turn:32,bl_encoder:33,br_drive:41,br_turn:42,br_encoder:43},tank:{left_leader:11,left_follower:12,right_leader:21,right_follower:22},gyro:50,elevator:{motor:51,encoder:53},shooter:{motor:61},intake:{motor:71,sensor:0},roller:{motor:81},launcher:{motor:91,sensor:1}},xa=new Map;function ai(i,e){xa.set(i,{id:i,...e})}function Kc(){return Array.from(xa.values())}function Jd(){const i={};for(const[e,t]of xa)i[e]=t.defaultState?JSON.parse(JSON.stringify(t.defaultState)):{configured:!1};return i}const el={id:"elevator",name:"Elevator",description:"Linear lifting mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.elevator.motor,role:"leader",inverted:!1}],encoder:null,gearRatio:null,maxHeight:null,minHeight:0,encoderId:hn.elevator.encoder,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,motionMaxVel:null,motionMaxAccel:null,attachedTo:"chassis"},validAttachments:["chassis"]},tl={id:"shooter",name:"Shooter",description:"Flywheel shooter mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.shooter.motor,role:"leader",inverted:!1}],shooterType:"adjustable",turretMotor:{type:null,canId:25,role:"turret",inverted:!1},encoder:null,gearRatio:null,maxRPM:null,motorConfig:{currentLimit:60,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},nl={id:"intake",name:"Intake",description:"Floor intake mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.intake.motor,role:"leader",inverted:!1}],gearRatio:null,hasSensor:!1,sensorPortType:"dio",sensorPort:hn.intake.sensor,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis"]},il={id:"roller",name:"Roller",description:"Simple roller mechanism",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.roller.motor,role:"leader",inverted:!1}],gearRatio:null,motorConfig:{currentLimit:30,brakeMode:!0,inverted:!1,rampRate:20},rampRate:20,pid:null,attachedTo:"chassis"},validAttachments:["chassis","elevator","arm"]},sl={id:"launcher",name:"Launcher",description:"Game piece launcher",defaultState:{configured:!1,enabled:!1,motors:[{type:null,canId:hn.launcher.motor,role:"leader",inverted:!1}],hasSensor:!1,sensorPortType:"dio",sensorPort:hn.launcher.sensor,motorConfig:{currentLimit:20,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},rampRate:20,softLimitFwd:null,softLimitRev:null,attachedTo:"arm"},validAttachments:["elevator","arm","intake"]},rl={id:"arm",name:"Arm",description:"Multi-jointed arm mechanism",defaultState:{configured:!1,enabled:!1,dof:1,joints:[{motors:[{type:null,canId:30,role:"leader",inverted:!1}],encoder:null,encoderId:31,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null}],attachedTo:"chassis"},validAttachments:["chassis","elevator"]},ol={id:"custom",name:"Custom",description:"User-defined mechanism",defaultState:{configured:!1,enabled:!1},validAttachments:["chassis","elevator","arm"]};function Qd(){ai(el.id,el),ai(tl.id,tl),ai(nl.id,nl),ai(il.id,il),ai(sl.id,sl),ai(rl.id,rl),ai(ol.id,ol)}Qd();function eu(){return{currentLimit:40,brakeMode:!0,inverted:!1,rampRate:20}}function Zc(i){return{name:`cam${i}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0}}const al={currentPage:"landing",selectedMechanism:null,sidebarOpen:!1,isMobile:!1,framework:"advantagekit",stateMachineIntegration:!1,chassis:{configured:!1,type:null,driveMotor:null,turnMotor:null,gyro:null,gyroCanId:hn.gyro,gearRatio:null,turnGearRatio:null,wheelDiameter:null,trackWidth:null,maxSpeed:null,swervePreset:null,canIds:{...hn.swerve},tankCanIds:{...hn.tank},usePhoenix6Swerve:!1,swerveEncoderType:"cancoder",pathplannerEnabled:!0,motorConfig:eu()},mechanisms:Jd(),attachmentRules:(()=>{const i={};return Kc().forEach(e=>{i[e.id]=e.validAttachments}),i})(),vision:{configured:!1,enabled:!1,system:null,limelightVersion:null,photonPlatform:null,cameraCount:1,cameras:[Zc(0)]},statemachine:{configured:!1,enabled:!1,states:[],transitions:[],jsonData:""}};class tu{constructor(){this.state=JSON.parse(JSON.stringify(al)),this.listeners=[]}getState(){return this.state}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(e){this.listeners.forEach(t=>t(this.state,e))}setPage(e){this.state.currentPage=e,this.notify("currentPage")}setFramework(e){this.state.framework=e,this.notify("framework")}setStateMachineIntegration(e){this.state.stateMachineIntegration=!!e,this.notify("stateMachineIntegration")}selectMechanism(e){this.state.selectedMechanism=e,this.state.sidebarOpen=!!e,this.notify("selectedMechanism")}closeSidebar(){this.state.sidebarOpen=!1,this.state.selectedMechanism=null,this.notify("sidebarOpen")}updateChassis(e){Object.assign(this.state.chassis,e),this.state.chassis.configured=this._isChassisValid(),this._detectPhoenix6Swerve(),this.notify("chassis")}updateMechanism(e,t){if(this.state.mechanisms[e]){if(t.attachedTo!==void 0){const n=this.state.attachmentRules[e];n&&!n.includes(t.attachedTo)&&(t.attachedTo=this.state.mechanisms[e].attachedTo)}Object.assign(this.state.mechanisms[e],t),this.state.mechanisms[e].configured=this._isMechValid(e),this.notify(`mechanisms.${e}`)}}addMotor(e,t){this.state.mechanisms[e]&&(this.state.mechanisms[e].motors.push(t),this.notify(`mechanisms.${e}`))}removeMotor(e,t){this.state.mechanisms[e]&&t>0&&(this.state.mechanisms[e].motors.splice(t,1),this.notify(`mechanisms.${e}`))}updateMotor(e,t,n){var s;(s=this.state.mechanisms[e])!=null&&s.motors[t]&&(Object.assign(this.state.mechanisms[e].motors[t],n),this.notify(`mechanisms.${e}`))}updateVision(e){if(Object.assign(this.state.vision,e),e.cameraCount!==void 0){const t=e.cameraCount;for(;this.state.vision.cameras.length<t;)this.state.vision.cameras.push(Zc(this.state.vision.cameras.length));this.state.vision.cameras.length=t}this.state.vision.configured=this._isVisionValid(),this.notify("vision")}updateCamera(e,t){this.state.vision.cameras[e]&&(Object.assign(this.state.vision.cameras[e],t),this.notify("vision.cameras"))}updateStateMachine(e){Object.assign(this.state.statemachine,e);let t=!1;if(this.state.statemachine.jsonData)try{const n=JSON.parse(this.state.statemachine.jsonData);if(typeof n=="object"&&!Array.isArray(n)&&Object.keys(n).length>0){t=!0;for(const[s,r]of Object.entries(n))if(!Array.isArray(r))t=!1;else for(const o of r)typeof o!="string"&&(t=!1)}}catch{t=!1}this.state.statemachine.configured=this.state.statemachine.enabled&&t,this.notify("statemachine")}resetAll(){this.state=JSON.parse(JSON.stringify(al)),this.state.isMobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent),this.notify("reset")}getConfiguredCount(){let e=0;return this.state.chassis.configured&&e++,Object.values(this.state.mechanisms).forEach(t=>{t.configured&&t.enabled&&e++}),this.state.vision.configured&&this.state.vision.enabled&&e++,this.state.statemachine.configured&&this.state.statemachine.enabled&&e++,e}getExpectedCount(){let e=1;return Object.values(this.state.mechanisms).forEach(t=>{t.enabled&&e++}),this.state.vision.enabled&&e++,this.state.statemachine.enabled&&e++,e}_isChassisValid(){const e=this.state.chassis;return!!(e.type&&e.driveMotor)}_isMechValid(e){const t=this.state.mechanisms[e];return!!(t.enabled&&t.motors.length>0&&t.motors[0].type)}_isVisionValid(){const e=this.state.vision;return e.enabled?e.system==="limelight"?!!e.limelightVersion:e.system==="photonvision"?!!e.photonPlatform:!1:!1}_detectPhoenix6Swerve(){const e=this.state.chassis;if(e.type!=="swerve"){e.usePhoenix6Swerve=!1;return}const t=s=>s&&s.startsWith("talonfx"),n=e.swerveEncoderType==="cancoder";e.usePhoenix6Swerve=t(e.driveMotor)&&t(e.turnMotor)&&n}}const Re=new tu;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="170",$i={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nu=0,ll=1,iu=2,Jc=1,Qc=2,Ln=3,Hn=0,Ht=1,_n=2,ii=0,Wi=1,cl=2,dl=3,ul=4,su=5,gi=100,ru=101,ou=102,au=103,lu=104,cu=200,du=201,uu=202,hu=203,Ao=204,Ro=205,fu=206,pu=207,mu=208,gu=209,vu=210,_u=211,yu=212,xu=213,bu=214,Co=0,Io=1,Do=2,Ki=3,Po=4,Lo=5,Oo=6,No=7,ed=0,Mu=1,Su=2,si=0,Eu=1,Tu=2,wu=3,td=4,Au=5,Ru=6,Cu=7,hl="attached",Iu="detached",nd=300,Zi=301,Ji=302,Uo=303,Fo=304,Pr=306,Qi=1e3,ti=1001,Ar=1002,Nt=1003,id=1004,Ss=1005,Yt=1006,yr=1007,Un=1008,zn=1009,sd=1010,rd=1011,Cs=1012,Ma=1013,xi=1014,un=1015,Ns=1016,Sa=1017,Ea=1018,es=1020,od=35902,ad=1021,ld=1022,nn=1023,cd=1024,dd=1025,ji=1026,ts=1027,Ta=1028,wa=1029,ud=1030,Aa=1031,Ra=1033,xr=33776,br=33777,Mr=33778,Sr=33779,ko=35840,Bo=35841,Vo=35842,Ho=35843,zo=36196,Go=37492,$o=37496,Wo=37808,jo=37809,Xo=37810,qo=37811,Yo=37812,Ko=37813,Zo=37814,Jo=37815,Qo=37816,ea=37817,ta=37818,na=37819,ia=37820,sa=37821,Er=36492,ra=36494,oa=36495,hd=36283,aa=36284,la=36285,ca=36286,Is=2300,Ds=2301,kr=2302,fl=2400,pl=2401,ml=2402,Du=2500,Pu=0,fd=1,da=2,Lu=3200,Ou=3201,pd=0,Nu=1,ei="",wt="srgb",Ft="srgb-linear",Lr="linear",nt="srgb",wi=7680,gl=519,Uu=512,Fu=513,ku=514,md=515,Bu=516,Vu=517,Hu=518,zu=519,ua=35044,vl="300 es",Fn=2e3,Rr=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const Xi=Math.PI/180,ns=180/Math.PI;function fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Ca(i,e){return(i%e+e)%e}function Gu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $u(i,e,t){return i!==e?(t-i)/(e-i):0}function As(i,e,t){return(1-t)*i+t*e}function Wu(i,e,t,n){return As(i,e,1-Math.exp(-t*n))}function ju(i,e=1){return e-Math.abs(Ca(i,e*2)-e)}function Xu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ku(i,e){return i+Math.random()*(e-i)}function Zu(i){return i*(.5-Math.random())}function Ju(i){i!==void 0&&(_l=i);let e=_l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(i){return i*Xi}function eh(i){return i*ns}function th(i){return(i&i-1)===0&&i!==0}function nh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ih(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sh(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gd={DEG2RAD:Xi,RAD2DEG:ns,generateUUID:fn,clamp:At,euclideanModulo:Ca,mapLinear:Gu,inverseLerp:$u,lerp:As,damp:Wu,pingpong:ju,smoothstep:Xu,smootherstep:qu,randInt:Yu,randFloat:Ku,randFloatSpread:Zu,seededRandom:Ju,degToRad:Qu,radToDeg:eh,isPowerOfTwo:th,ceilPowerOfTwo:nh,floorPowerOfTwo:ih,setQuaternionFromProperEuler:sh,normalize:Qe,denormalize:dn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,s,r,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],E=s[1],x=s[4],y=s[7],D=s[2],A=s[5],w=s[8];return r[0]=o*v+a*E+l*D,r[3]=o*m+a*x+l*A,r[6]=o*p+a*y+l*w,r[1]=c*v+d*E+u*D,r[4]=c*m+d*x+u*A,r[7]=c*p+d*y+u*w,r[2]=h*v+f*E+g*D,r[5]=h*m+f*x+g*A,r[8]=h*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Br.makeScale(e,t)),this}rotate(e){return this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Le;function vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){const i=Ps("canvas");return i.style.display="block",i}const yl={};function Es(i){i in yl||(yl[i]=!0,console.warn(i))}function oh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ah(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Ft,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],Ml=[.3127,.329],Sl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Ft]:{primaries:xl,whitePoint:Ml,transfer:Lr,toXYZ:Sl,fromXYZ:El,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:xl,whitePoint:Ml,transfer:nt,toXYZ:Sl,fromXYZ:El,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});let Ai;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ps("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uh=0;class St extends Ei{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=ti,s=ti,r=Yt,o=Un,a=nn,l=zn,c=St.DEFAULT_ANISOTROPY,d=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=fn(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=nd;St.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,s=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,D=(p+1)/2,A=(d+h)/4,w=(u+v)/4,I=(g+m)/4;return x>y&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=w/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=I/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(h-d)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hh extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yd extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==g){let m=1-a;const p=l*h+c*f+d*g+u*v,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),A=Math.atan2(D,p*E);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const y=a*E;if(l=l*m+h*y,c=c*m+f*y,d=d*m+g*y,u=u*m+v*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=D,c*=D,d*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new C,Tl=new xn;class Gn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),zs.subVectors(this.max,ps),Ri.subVectors(e.a,ps),Ci.subVectors(e.b,ps),Ii.subVectors(e.c,ps),jn.subVectors(Ci,Ri),Xn.subVectors(Ii,Ci),li.subVectors(Ri,Ii);let t=[0,-jn.z,jn.y,0,-Xn.z,Xn.y,0,-li.z,li.y,jn.z,0,-jn.x,Xn.z,0,-Xn.x,li.z,0,-li.x,-jn.y,jn.x,0,-Xn.y,Xn.x,0,-li.y,li.x,0];return!zr(t,Ri,Ci,Ii,zs)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,Ri,Ci,Ii,zs))?!1:(Gs.crossVectors(jn,Xn),t=[Gs.x,Gs.y,Gs.z],zr(t,Ri,Ci,Ii,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new C,new C,new C,new C,new C,new C,new C,new C],on=new C,Hs=new Gn,Ri=new C,Ci=new C,Ii=new C,jn=new C,Xn=new C,li=new C,ps=new C,zs=new C,Gs=new C,ci=new C;function zr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),d=n.dot(ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ph=new Gn,ms=new C,Gr=new C;class Mn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ph.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Gr)),this.expandByPoint(ms.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new C,$r=new C,$s=new C,qn=new C,Wr=new C,Ws=new C,jr=new C;class Us{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$r.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),qn.copy(this.origin).sub($r);const r=e.distanceTo(t)*.5,o=-this.direction.dot($s),a=qn.dot(this.direction),l=-qn.dot($s),c=qn.lengthSq(),d=Math.abs(1-o*o);let u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector($s,h),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Wr.subVectors(t,e),Ws.subVectors(n,e),jr.crossVectors(Wr,Ws);let o=this.direction.dot(jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(qn,Ws));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(qn));if(c<0||l+c>o)return null;const d=-a*qn.dot(jr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,s,r,o,a,l,c,d,u,h,f,g,v,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,h,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Yn.crossVectors(n,$t),Yn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Yn.crossVectors(n,$t)),Yn.normalize(),js.crossVectors($t,Yn),s[0]=Yn.x,s[4]=js.x,s[8]=$t.x,s[1]=Yn.y,s[5]=js.y,s[9]=$t.y,s[2]=Yn.z,s[6]=js.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],x=n[7],y=n[11],D=n[15],A=s[0],w=s[4],I=s[8],S=s[12],M=s[1],R=s[5],V=s[9],F=s[13],$=s[2],X=s[6],G=s[10],K=s[14],H=s[3],te=s[7],le=s[11],oe=s[15];return r[0]=o*A+a*M+l*$+c*H,r[4]=o*w+a*R+l*X+c*te,r[8]=o*I+a*V+l*G+c*le,r[12]=o*S+a*F+l*K+c*oe,r[1]=d*A+u*M+h*$+f*H,r[5]=d*w+u*R+h*X+f*te,r[9]=d*I+u*V+h*G+f*le,r[13]=d*S+u*F+h*K+f*oe,r[2]=g*A+v*M+m*$+p*H,r[6]=g*w+v*R+m*X+p*te,r[10]=g*I+v*V+m*G+p*le,r[14]=g*S+v*F+m*K+p*oe,r[3]=E*A+x*M+y*$+D*H,r[7]=E*w+x*R+y*X+D*te,r[11]=E*I+x*V+y*G+D*le,r[15]=E*S+x*F+y*K+D*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*h+n*c*h+s*a*f-n*l*f)+v*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*d-r*l*d)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+p*(-s*a*d-t*l*u+t*a*h+s*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=u*m*c-v*h*c+v*l*f-a*m*f-u*l*p+a*h*p,x=g*h*c-d*m*c-g*l*f+o*m*f+d*l*p-o*h*p,y=d*v*c-g*u*c+g*a*f-o*v*f-d*a*p+o*u*p,D=g*u*l-d*v*l-g*a*h+o*v*h+d*a*m-o*u*m,A=t*E+n*x+s*y+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(v*h*r-u*m*r-v*s*f+n*m*f+u*s*p-n*h*p)*w,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*h*r-u*s*c+n*h*c+a*s*f-n*l*f)*w,e[4]=x*w,e[5]=(d*m*r-g*h*r+g*s*f-t*m*f-d*s*p+t*h*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*h*r-d*l*r+d*s*c-t*h*c-o*s*f+t*l*f)*w,e[8]=y*w,e[9]=(g*u*r-d*v*r-g*n*f+t*v*f+d*n*p-t*u*p)*w,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*w,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=D*w,e[13]=(d*v*s-g*u*s+g*n*h-t*v*h-d*n*m+t*u*m)*w,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*w,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,g=r*u,v=o*d,m=o*u,p=a*u,E=l*c,x=l*d,y=l*u,D=n.x,A=n.y,w=n.z;return s[0]=(1-(v+p))*D,s[1]=(f+y)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(h+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(m-E)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,d=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Fn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let f,g;if(a===Fn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Fn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(o-r),h=(t+e)*c,f=(n+s)*d;let g,v;if(a===Fn)g=(o+r)*u,v=-2*u;else if(a===Rr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new C,an=new Oe,mh=new C(0,0,0),gh=new C(1,1,1),Yn=new C,js=new C,$t=new C,wl=new Oe,Al=new xn;class bn{constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vh=0;const Rl=new C,Pi=new xn,Cn=new Oe,Xs=new C,gs=new C,_h=new C,yh=new xn,Cl=new C(1,0,0),Il=new C(0,1,0),Dl=new C(0,0,1),Pl={type:"added"},xh={type:"removed"},Li={type:"childadded",child:null},Xr={type:"childremoved",child:null};class ht extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new C,t=new bn,n=new xn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Le}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,Xs,this.up):Cn.lookAt(Xs,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ht.DEFAULT_UP=new C(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,In=new C,qr=new C,Dn=new C,Oi=new C,Ni=new C,Ll=new C,Yr=new C,Kr=new C,Zr=new C,Jr=new Ye,Qr=new Ye,eo=new Ye;class tn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),In.subVectors(n,t),qr.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(In),l=ln.dot(qr),c=In.dot(In),d=In.dot(qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jr.setScalar(0),Qr.setScalar(0),eo.setScalar(0),Jr.fromBufferAttribute(e,t),Qr.fromBufferAttribute(e,n),eo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jr,r.x),o.addScaledVector(Qr,r.y),o.addScaledVector(eo,r.z),o}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),In.subVectors(e,t),ln.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),Ni.subVectors(r,n),Yr.subVectors(e,n);const l=Oi.dot(Yr),c=Ni.dot(Yr);if(l<=0&&c<=0)return t.copy(n);Kr.subVectors(e,s);const d=Oi.dot(Kr),u=Ni.dot(Kr);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Oi,o);Zr.subVectors(e,r);const f=Oi.dot(Zr),g=Ni.dot(Zr);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ni,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Ll.subVectors(r,s),a=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Ll,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(Oi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function to(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Ca(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=to(o,r,e+1/3),this.g=to(o,r,e),this.b=to(o,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return We.fromWorkingColorSpace(It.copy(this),e),Math.round(At(It.r*255,0,255))*65536+Math.round(At(It.g*255,0,255))*256+Math.round(At(It.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=wt){We.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(qs);const n=As(Kn.h,qs.h,t),s=As(Kn.s,qs.s,t),r=As(Kn.l,qs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ee;Ee.NAMES=bd;let bh=0;class yn extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=fn(),this.name="",this.blending=Wi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _i extends yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new C,Ys=new Ae;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class Md extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mh=0;const Zt=new Oe,no=new ht,Ui=new C,Wt=new Gn,vs=new Gn,bt=new C;class zt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Sd:Md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Wt.min,vs.min),Wt.expandByPoint(bt),bt.addVectors(Wt.max,vs.max),Wt.expandByPoint(bt)):(Wt.expandByPoint(vs.min),Wt.expandByPoint(vs.max))}Wt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)bt.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),bt.add(Ui)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;const c=new C,d=new C,u=new C,h=new Ae,f=new Ae,g=new Ae,v=new C,m=new C;function p(I,S,M){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),h.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),a[I].add(v),a[S].add(v),a[M].add(v),l[I].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,S=E.length;I<S;++I){const M=E[I],R=M.start,V=M.count;for(let F=R,$=R+V;F<$;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new C,y=new C,D=new C,A=new C;function w(I){D.fromBufferAttribute(s,I),A.copy(D);const S=a[I];x.copy(S),x.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(A,S);const R=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,R)}for(let I=0,S=E.length;I<S;++I){const M=E[I],R=M.start,V=M.count;for(let F=R,$=R+V;F<$;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,d=new C,u=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Ut(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new Oe,di=new Us,Ks=new Mn,Nl=new C,Zs=new C,Js=new C,Qs=new C,io=new C,er=new C,Ul=new C,tr=new C;class Be extends ht{constructor(e=new zt,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(io.fromBufferAttribute(u,e),o?er.addScaledVector(io,d):er.addScaledVector(io.sub(t),d))}t.add(er)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(Ks.containsPoint(di.origin)===!1&&(di.intersectSphere(Ks,Nl)===null||di.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),di.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,D=x;y<D;y+=3){const A=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);s=nr(this,p,e,n,c,d,u,A,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=nr(this,o,e,n,c,d,u,E,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,D=x;y<D;y+=3){const A=y,w=y+1,I=y+2;s=nr(this,p,e,n,c,d,u,A,w,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=m,x=m+1,y=m+2;s=nr(this,o,e,n,c,d,u,E,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Sh(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:i}}function nr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Zs),i.getVertexPosition(l,Js),i.getVertexPosition(c,Qs);const d=Sh(i,e,t,n,Zs,Js,Qs,Ul);if(d){const u=new C;tn.getBarycoord(Ul,Zs,Js,Qs,u),s&&(d.uv=tn.getInterpolatedAttribute(s,a,l,c,u,new Ae)),r&&(d.uv1=tn.getInterpolatedAttribute(r,a,l,c,u,new Ae)),o&&(d.normal=tn.getInterpolatedAttribute(o,a,l,c,u,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};tn.getNormal(Zs,Js,Qs,h.normal),d.face=h,d.barycoord=u}return d}class pt extends zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(u,2));function g(v,m,p,E,x,y,D,A,w,I,S){const M=y/w,R=D/I,V=y/2,F=D/2,$=A/2,X=w+1,G=I+1;let K=0,H=0;const te=new C;for(let le=0;le<G;le++){const oe=le*R-F;for(let ve=0;ve<X;ve++){const Xe=ve*M-V;te[v]=Xe*E,te[m]=oe*x,te[p]=$,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[p]=A>0?1:-1,d.push(te.x,te.y,te.z),u.push(ve/w),u.push(1-le/I),K+=1}}for(let le=0;le<I;le++)for(let oe=0;oe<w;oe++){const ve=h+oe+X*le,Xe=h+oe+X*(le+1),W=h+(oe+1)+X*(le+1),Q=h+(oe+1)+X*le;l.push(ve,Xe,Q),l.push(Xe,W,Q),H+=6}a.addGroup(f,H,S),f+=H,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=is(i[t]);for(const s in n)e[s]=n[s]}return e}function Eh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ed(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Th={clone:is,merge:Lt};var wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wh,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Td extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new C,Fl=new Ae,kl=new Ae;class Ot extends Td{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,kl),t.subVectors(kl,Fl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,ki=1;class Rh extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(Fi,ki,e,t);s.layers=this.layers,this.add(s);const r=new Ot(Fi,ki,e,t);r.layers=this.layers,this.add(r);const o=new Ot(Fi,ki,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Fi,ki,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Fi,ki,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Fi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wd extends St{constructor(e,t,n,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ch extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:ii});r.uniforms.tEquirect.value=t;const o=new Be(s,r),a=t.minFilter;return t.minFilter===Un&&(t.minFilter=Yt),new Rh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const so=new C,Ih=new C,Dh=new Le;class Qn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=so.subVectors(n,t).cross(Ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dh.getNormalMatrix(e),s=this.coplanarPoint(so).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Mn,ir=new C;class Ia{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],E=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,h-c,m-f,y-p).normalize(),n[1].setComponents(l+r,h+c,m+f,y+p).normalize(),n[2].setComponents(l+o,h+d,m+g,y+E).normalize(),n[3].setComponents(l-o,h-d,m-g,y-E).normalize(),n[4].setComponents(l-a,h-u,m-v,y-x).normalize(),t===Fn)n[5].setComponents(l+a,h+u,m+v,y+x).normalize();else if(t===Rr)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ph(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Fs extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const E=p*h-o;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-E,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,y=E+c*(p+1),D=E+1+c*(p+1),A=E+1+c*p;f.push(x,y,A),f.push(y,D,A)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hh=`#ifdef USE_BATCHING
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
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Xh=`#ifdef USE_BUMPMAP
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Kp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,dm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Lh,alphahash_pars_fragment:Oh,alphamap_fragment:Nh,alphamap_pars_fragment:Uh,alphatest_fragment:Fh,alphatest_pars_fragment:kh,aomap_fragment:Bh,aomap_pars_fragment:Vh,batching_pars_vertex:Hh,batching_vertex:zh,begin_vertex:Gh,beginnormal_vertex:$h,bsdfs:Wh,iridescence_fragment:jh,bumpmap_pars_fragment:Xh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Yh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:Zh,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:df,colorspace_pars_fragment:uf,envmap_fragment:hf,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:wf,envmap_vertex:gf,fog_vertex:vf,fog_pars_vertex:_f,fog_fragment:yf,fog_pars_fragment:xf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:Af,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Of,lights_fragment_end:Nf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Bf,map_fragment:Vf,map_pars_fragment:Hf,map_particle_fragment:zf,map_particle_pars_fragment:Gf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Wf,morphinstance_vertex:jf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Kf,normal_fragment_begin:Zf,normal_fragment_maps:Jf,normal_pars_fragment:Qf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:dp,dithering_fragment:up,dithering_pars_fragment:hp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:vp,shadowmask_pars_fragment:_p,skinbase_vertex:yp,skinning_pars_vertex:xp,skinning_vertex:bp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:Tp,tonemapping_pars_fragment:wp,transmission_fragment:Ap,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Ip,uv_vertex:Dp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Op,backgroundCube_vert:Np,backgroundCube_frag:Up,cube_vert:Fp,cube_frag:kp,depth_vert:Bp,depth_frag:Vp,distanceRGBA_vert:Hp,distanceRGBA_frag:zp,equirect_vert:Gp,equirect_frag:$p,linedashed_vert:Wp,linedashed_frag:jp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Kp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:lm,shadow_vert:cm,shadow_frag:dm,sprite_vert:um,sprite_frag:hm},ne={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},mn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};mn.physical={uniforms:Lt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const sr={r:0,b:0,g:0},hi=new bn,fm=new Oe;function pm(i,e,t,n,s,r,o){const a=new Ee(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const y=g(E);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===Pr)?(d===void 0&&(d=new Be(new pt(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:is(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(hi)),d.material.toneMapped=We.getTransfer(y.colorSpace)!==nt,(u!==y||h!==y.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Be(new Fs(2,2),new ri({name:"BackgroundMaterial",uniforms:is(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=We.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(sr,Ed(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:m}}function mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,R,V,F,$){let X=!1;const G=u(F,V,R);r!==G&&(r=G,c(r.object)),X=f(M,F,V,$),X&&g(M,F,V,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(M,R,V,F),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,R,V){const F=V.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let X=$[R.id];X===void 0&&(X={},$[R.id]=X);let G=X[F];return G===void 0&&(G=h(l()),X[F]=G),G}function h(M){const R=[],V=[],F=[];for(let $=0;$<t;$++)R[$]=0,V[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,R,V,F){const $=r.attributes,X=R.attributes;let G=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){const le=$[H];let oe=X[H];if(oe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(M,R,V,F){const $={},X=R.attributes;let G=0;const K=V.getAttributes();for(const H in K)if(K[H].location>=0){let le=X[H];le===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),$[H]=oe,G++}r.attributes=$,r.attributesNum=G,r.index=F}function v(){const M=r.newAttributes;for(let R=0,V=M.length;R<V;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const V=r.newAttributes,F=r.enabledAttributes,$=r.attributeDivisors;V[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),$[M]!==R&&(i.vertexAttribDivisor(M,R),$[M]=R)}function E(){const M=r.newAttributes,R=r.enabledAttributes;for(let V=0,F=R.length;V<F;V++)R[V]!==M[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function x(M,R,V,F,$,X,G){G===!0?i.vertexAttribIPointer(M,R,V,$,X):i.vertexAttribPointer(M,R,V,F,$,X)}function y(M,R,V,F){v();const $=F.attributes,X=V.getAttributes(),G=R.defaultAttributeValues;for(const K in X){const H=X[K];if(H.location>=0){let te=$[K];if(te===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const le=te.normalized,oe=te.itemSize,ve=e.get(te);if(ve===void 0)continue;const Xe=ve.buffer,W=ve.type,Q=ve.bytesPerElement,me=W===i.INT||W===i.UNSIGNED_INT||te.gpuType===Ma;if(te.isInterleavedBufferAttribute){const ie=te.data,Te=ie.stride,Ce=te.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)p(H.location+Ne,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<H.locationSize;Ne++)x(H.location+Ne,oe/H.locationSize,W,le,Te*Q,(Ce+oe/H.locationSize*Ne)*Q,me)}else{if(te.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)p(H.location+ie,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<H.locationSize;ie++)m(H.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ie=0;ie<H.locationSize;ie++)x(H.location+ie,oe/H.locationSize,W,le,oe*Q,oe/H.locationSize*ie*Q,me)}}else if(G!==void 0){const le=G[K];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}E()}function D(){I();for(const M in n){const R=n[M];for(const V in R){const F=R[V];for(const $ in F)d(F[$].object),delete F[$];delete R[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const V in R){const F=R[V];for(const $ in F)d(F[$].object),delete F[$];delete R[V]}delete n[M.id]}function w(M){for(const R in n){const V=n[R];if(V[M.id]===void 0)continue;const F=V[M.id];for(const $ in F)d(F[$].object),delete F[$];delete V[M.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function gm(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==nn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==un&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:D,maxSamples:A}}function _m(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Qn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const E=r?0:n,x=E*4;let y=p.clippingState||null;l.value=y,y=d(g,h,x,f);for(let D=0;D!==x;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ym(i){let e=new WeakMap;function t(o,a){return a===Uo?o.mapping=Zi:a===Fo&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===Fo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ch(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Da extends Td{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,Bl=[.125,.215,.35,.446,.526,.582],vi=20,ro=new Da,Vl=new Ee;let oo=null,ao=0,lo=0,co=!1;const mi=(1+Math.sqrt(5))/2,Bi=1/mi,Hl=[new C(-mi,Bi,0),new C(mi,Bi,0),new C(-Bi,0,mi),new C(Bi,0,mi),new C(0,mi,-Bi),new C(0,mi,Bi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,ao,lo),this._renderer.xr.enabled=co,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ns,format:nn,colorSpace:Ft,depthBuffer:!1},s=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=bm(r,e,t)}return s}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,s){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Vl),d.toneMapping=si,d.autoClear=!1;const f=new _i({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Be(new pt,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Vl),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;rr(s,E*x,p>2?x:0,x,x),d.setRenderTarget(s),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zi||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hl[(s-r-1)%Hl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Be(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let E=0;for(let w=0;w<vi;++w){const I=w/v,S=Math.exp(-I*I/2);p.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[s],D=3*y*(s>x-zi?s-x+zi:0),A=4*(this._cubeSize-y);rr(t,D,A,3*y,2*y),l.setRenderTarget(t),l.render(u,ro)}}function xm(i){const e=[],t=[],n=[];let s=i;const r=i-zi+1+Bl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zi?l=Bl[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,I=A>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];E.set(S,v*g*A),x.set(h,m*g*A);const M=[A,A,A,A,A,A];y.set(M,p*g*A)}const D=new zt;D.setAttribute("position",new Ut(E,v)),D.setAttribute("uv",new Ut(x,m)),D.setAttribute("faceIndex",new Ut(y,p)),e.push(D),s>zi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bm(i,e,t){const n=new Float32Array(vi),s=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function $l(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Wl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Mm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uo||l===Fo,d=l===Zi||l===Ji;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new zl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new zl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Em(i,e,t,n){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let x=0,y=E.length;x<y;x+=3){const D=E[x+0],A=E[x+1],w=E[x+2];h.push(D,A,A,w,w,D)}}else if(g!==void 0){const E=g.array;v=g.version;for(let x=0,y=E.length/3-1;x<y;x+=3){const D=x+0,A=x+1,w=x+2;h.push(D,A,A,w,w,D)}}else return;const m=new(vd(h)?Sd:Md)(h,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Tm(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*v[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function wm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Am(i,e,t){const n=new WeakMap,s=new Ye;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let D=a.attributes.position.count*y,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*A*4*u),I=new yd(w,D,A,u);I.type=un,I.needsUpdate=!0;const S=y*4;for(let R=0;R<u;R++){const V=p[R],F=E[R],$=x[R],X=D*A*4*R;for(let G=0;G<V.count;G++){const K=G*S;g===!0&&(s.fromBufferAttribute(V,G),w[X+K+0]=s.x,w[X+K+1]=s.y,w[X+K+2]=s.z,w[X+K+3]=0),v===!0&&(s.fromBufferAttribute(F,G),w[X+K+4]=s.x,w[X+K+5]=s.y,w[X+K+6]=s.z,w[X+K+7]=0),m===!0&&(s.fromBufferAttribute($,G),w[X+K+8]=s.x,w[X+K+9]=s.y,w[X+K+10]=s.z,w[X+K+11]=$.itemSize===4?s.w:1)}}h={count:u,texture:I,size:new Ae(D,A)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Rm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Rd extends St{constructor(e,t,n,s,r,o,a,l,c,d=ji){if(d!==ji&&d!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ji&&(n=xi),n===void 0&&d===ts&&(n=es),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cd=new St,jl=new Rd(1,1),Id=new yd,Dd=new fh,Pd=new wd,Xl=[],ql=[],Yl=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function as(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),xt(t,n)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),xt(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),xt(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=md,r=jl):r=Cd,t.setTexture2D(e||r,s)}function Wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dd,s)}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pd,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Id,s)}function qm(i){switch(i){case 5126:return Cm;case 35664:return Im;case 35665:return Dm;case 35666:return Pm;case 35674:return Lm;case 35675:return Om;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return km;case 35669:case 35673:return Bm;case 5125:return Vm;case 36294:return Hm;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function Qm(i,e){const t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){const t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){const t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function sg(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function og(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function dg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cd,r[o])}function ug(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dd,r[o])}function hg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pd,r[o])}function fg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Id,r[o])}function pg(i){switch(i){case 5126:return Ym;case 35664:return Km;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return fg}}class mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pg(t.type)}}class vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Jl(i,e){i.seq.push(e),i.map[e.id]=e}function _g(i,e,t){const n=i.name,s=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),o=uo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jl(t,c===void 0?new mg(a,i,e):new gg(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new vg(a),Jl(t,u)),t=u}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_g(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yg=37297;let xg=0;function bg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ec=new Le;function Mg(i){We._getMatrix(ec,We.workingColorSpace,i);const e=`mat3( ${ec.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bg(i.getShaderSource(e),o)}else return s}function Sg(i,e){const t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Eg(i,e){let t;switch(e){case Eu:t="Linear";break;case Tu:t="Reinhard";break;case wu:t="Cineon";break;case td:t="ACESFilmic";break;case Ru:t="AgX";break;case Cu:t="Neutral";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const or=new C;function Tg(){We.getLuminanceCoefficients(or);const i=or.x.toFixed(4),e=or.y.toFixed(4),t=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Ag(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ts(i){return i!==""}function nc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ic(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(Cg,Dg)}const Ig=new Map;function Dg(i,e){let t=Fe[e];if(t===void 0){const n=Ig.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(i){return i.replace(Pg,Lg)}function Lg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Og(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ug(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Fg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ed:e="ENVMAP_BLENDING_MULTIPLY";break;case Mu:e="ENVMAP_BLENDING_MIX";break;case Su:e="ENVMAP_BLENDING_ADD";break}return e}function kg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Og(t),c=Ng(t),d=Ug(t),u=Fg(t),h=kg(t),f=wg(t),g=Ag(r),v=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Fe.tonemapping_pars_fragment:"",t.toneMapping!==si?Eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),Tg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=ha(o),o=nc(o,t),o=ic(o,t),a=ha(a),a=nc(a,t),a=ic(a,t),o=sc(o),a=sc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,y=E+p+a,D=Ql(s,s.VERTEX_SHADER,x),A=Ql(s,s.FRAGMENT_SHADER,y);s.attachShader(v,D),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(D).trim(),$=s.getShaderInfoLog(A).trim();let X=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,A);else{const K=tc(s,D,"vertex"),H=tc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+K+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||$==="")&&(G=!1);G&&(R.diagnostics={runnable:X,programLog:V,vertexShader:{log:F,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(D),s.deleteShader(A),I=new Tr(s,v),S=Rg(s,v)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,yg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let Vg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zg(e),t.set(e,n)),n}}class zg{constructor(e){this.id=Vg++,this.code=e,this.usedTimes=0}}function Gg(i,e,t,n,s,r,o){const a=new xd,l=new Hg,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,V,F){const $=V.fog,X=F.geometry,G=S.isMeshStandardMaterial?V.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),H=K&&K.mapping===Pr?K.image.height:null,te=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=le!==void 0?le.length:0;let ve=0;X.morphAttributes.position!==void 0&&(ve=1),X.morphAttributes.normal!==void 0&&(ve=2),X.morphAttributes.color!==void 0&&(ve=3);let Xe,W,Q,me;if(te){const Je=mn[te];Xe=Je.vertexShader,W=Je.fragmentShader}else Xe=S.vertexShader,W=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const ie=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,st=!!S.map,$e=!!S.matcap,dt=!!K,O=!!S.aoMap,Dt=!!S.lightMap,He=!!S.bumpMap,ze=!!S.normalMap,Se=!!S.displacementMap,tt=!!S.emissiveMap,Me=!!S.metalnessMap,T=!!S.roughnessMap,_=S.anisotropy>0,U=S.clearcoat>0,q=S.dispersion>0,Z=S.iridescence>0,j=S.sheen>0,ge=S.transmission>0,se=_&&!!S.anisotropyMap,pe=U&&!!S.clearcoatMap,ke=U&&!!S.clearcoatNormalMap,J=U&&!!S.clearcoatRoughnessMap,fe=Z&&!!S.iridescenceMap,re=Z&&!!S.iridescenceThicknessMap,we=j&&!!S.sheenColorMap,ue=j&&!!S.sheenRoughnessMap,je=!!S.specularMap,Ue=!!S.specularColorMap,rt=!!S.specularIntensityMap,P=ge&&!!S.transmissionMap,ae=ge&&!!S.thicknessMap,z=!!S.gradientMap,Y=!!S.alphaMap,he=S.alphaTest>0,ce=!!S.alphaHash,De=!!S.extensions;let ft=si;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Rt={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:W,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ft,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:$e,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Dt,bumpMap:He,normalMap:ze,displacementMap:h&&Se,emissiveMap:tt,normalMapObjectSpace:ze&&S.normalMapType===Nu,normalMapTangentSpace:ze&&S.normalMapType===pd,metalnessMap:Me,roughnessMap:T,anisotropy:_,anisotropyMap:se,clearcoat:U,clearcoatMap:pe,clearcoatNormalMap:ke,clearcoatRoughnessMap:J,dispersion:q,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:re,sheen:j,sheenColorMap:we,sheenRoughnessMap:ue,specularMap:je,specularColorMap:Ue,specularIntensityMap:rt,transmission:ge,transmissionMap:P,thicknessMap:ae,gradientMap:z,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:he,alphaHash:ce,combine:S.combine,mapUv:st&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:Dt&&v(S.lightMap.channel),bumpMapUv:He&&v(S.bumpMap.channel),normalMapUv:ze&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:tt&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:se&&v(S.anisotropyMap.channel),clearcoatMapUv:pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(S.sheenRoughnessMap.channel),specularMapUv:je&&v(S.specularMap.channel),specularColorMapUv:Ue&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:ae&&v(S.thicknessMap.channel),alphaMapUv:Y&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ze||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(st||Y),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let R;if(M){const V=mn[M];R=Th.clone(V.uniforms)}else R=S.uniforms;return R}function D(S,M){let R;for(let V=0,F=d.length;V<F;V++){const $=d[V];if($.cacheKey===M){R=$,++R.usedTimes;break}}return R===void 0&&(R=new Bg(i,M,S,r),d.push(R)),R}function A(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:I}}function $g(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ac(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,h,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,h,f,g,v,m){const p=o(u,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,h,f,g,v,m){const p=o(u,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Wg),n.length>1&&n.sort(h||oc),s.length>1&&s.sort(h||oc)}function d(){for(let u=e,h=i.length;u<h;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function jg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ac,i.set(n,[o])):s>=r.length?(o=new ac,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yg=0;function Kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zg(i){const e=new Xg,t=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Oe,o=new Oe;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,E=0,x=0,y=0,D=0,A=0,w=0;c.sort(Kg);for(let S=0,M=c.length;S<M;S++){const R=c[S],V=R.color,F=R.intensity,$=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=V.r*F,u+=V.g*F,h+=V.b*F;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],F);w++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=R.shadow.matrix,E++}n.directional[f]=G,f++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(V).multiplyScalar(F),G.distance=$,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[v]=G;const K=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=K.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,y++}v++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(V).multiplyScalar(F),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(F),G.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==D||I.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=D,I.numLightProbes=w,n.version=Yg++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function lc(i){const e=new Zg(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Jg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lc(i),e.set(s,[a])):r>=o.length?(a=new lc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qg extends yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ev extends yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
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
}`;function iv(i,e,t){let n=new Ia;const s=new Ae,r=new Ae,o=new Ye,a=new Qg({depthPacking:Ou}),l=new ev,c={},d=t.maxTextureSize,u={[Hn]:Ht,[Ht]:Hn,[_n]:_n},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Be(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let p=this.type;this.render=function(A,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ii),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=p!==Ln&&this.type===Ln,$=p===Ln&&this.type!==Ln;for(let X=0,G=A.length;X<G;X++){const K=A[X],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const te=H.getFrameExtents();if(s.multiply(te),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/te.y),s.y=r.y*te.y,H.mapSize.y=r.y)),H.map===null||F===!0||$===!0){const oe=this.type!==Ln?{minFilter:Nt,magFilter:Nt}:{};H.map!==null&&H.map.dispose(),H.map=new bi(s.x,s.y,oe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const le=H.getViewportCount();for(let oe=0;oe<le;oe++){const ve=H.getViewport(oe);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),V.viewport(o),H.updateMatrices(K,oe),n=H.getFrustum(),y(w,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&E(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function E(A,w){const I=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,I,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,I,f,v,null)}function x(A,w,I,S){let M=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,F=w.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let X=$[F];X===void 0&&(X=M.clone(),$[F]=X,w.addEventListener("dispose",D)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Ln?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=I}return M}function y(A,w,I,S,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const F=e.update(A),$=A.material;if(Array.isArray($)){const X=F.groups;for(let G=0,K=X.length;G<K;G++){const H=X[G],te=$[H.materialIndex];if(te&&te.visible){const le=x(A,te,S,M);A.onBeforeShadow(i,A,w,I,F,le,H),i.renderBufferDirect(I,null,F,le,A,H),A.onAfterShadow(i,A,w,I,F,le,H)}}}else if($.visible){const X=x(A,$,S,M);A.onBeforeShadow(i,A,w,I,F,X,null),i.renderBufferDirect(I,null,F,X,A,null),A.onAfterShadow(i,A,w,I,F,X,null)}}const V=A.children;for(let F=0,$=V.length;F<$;F++)y(V[F],w,I,S,M)}function D(A){A.target.removeEventListener("dispose",D);for(const I in c){const S=c[I],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const sv={[Co]:Io,[Do]:Oo,[Po]:No,[Ki]:Lo,[Io]:Co,[Oo]:Do,[No]:Po,[Lo]:Ki};function rv(i,e){function t(){let P=!1;const ae=new Ye;let z=null;const Y=new Ye(0,0,0,0);return{setMask:function(he){z!==he&&!P&&(i.colorMask(he,he,he,he),z=he)},setLocked:function(he){P=he},setClear:function(he,ce,De,ft,Rt){Rt===!0&&(he*=ft,ce*=ft,De*=ft),ae.set(he,ce,De,ft),Y.equals(ae)===!1&&(i.clearColor(he,ce,De,ft),Y.copy(ae))},reset:function(){P=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,z=null,Y=null,he=null;return{setReversed:function(ce){if(ae!==ce){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ft=he;he=null,this.setClear(ft)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?ie(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ce){z!==ce&&!P&&(i.depthMask(ce),z=ce)},setFunc:function(ce){if(ae&&(ce=sv[ce]),Y!==ce){switch(ce){case Co:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Oo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ce}},setLocked:function(ce){P=ce},setClear:function(ce){he!==ce&&(ae&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){P=!1,z=null,Y=null,he=null,ae=!1}}}function s(){let P=!1,ae=null,z=null,Y=null,he=null,ce=null,De=null,ft=null,Rt=null;return{setTest:function(Je){P||(Je?ie(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!P&&(i.stencilMask(Je),ae=Je)},setFunc:function(Je,sn,Tn){(z!==Je||Y!==sn||he!==Tn)&&(i.stencilFunc(Je,sn,Tn),z=Je,Y=sn,he=Tn)},setOp:function(Je,sn,Tn){(ce!==Je||De!==sn||ft!==Tn)&&(i.stencilOp(Je,sn,Tn),ce=Je,De=sn,ft=Tn)},setLocked:function(Je){P=Je},setClear:function(Je){Rt!==Je&&(i.clearStencil(Je),Rt=Je)},reset:function(){P=!1,ae=null,z=null,Y=null,he=null,ce=null,De=null,ft=null,Rt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,x=null,y=null,D=null,A=null,w=new Ee(0,0,0),I=0,S=!1,M=null,R=null,V=null,F=null,$=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=K>=2);let te=null,le={};const oe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Xe=new Ye().fromArray(oe),W=new Ye().fromArray(ve);function Q(P,ae,z,Y){const he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(P,ce),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<z;De++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ae+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}const me={};me[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Ki),He(!1),ze(ll),ie(i.CULL_FACE),O(ii);function ie(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Te(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Ce(P,ae){return u[P]!==ae?(i.bindFramebuffer(P,ae),u[P]=ae,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ne(P,ae){let z=f,Y=!1;if(P){z=h.get(ae),z===void 0&&(z=[],h.set(ae,z));const he=P.textures;if(z.length!==he.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,De=he.length;ce<De;ce++)z[ce]=i.COLOR_ATTACHMENT0+ce;z.length=he.length,Y=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Y=!0);Y&&i.drawBuffers(z)}function st(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const $e={[gi]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};$e[au]=i.MIN,$e[lu]=i.MAX;const dt={[cu]:i.ZERO,[du]:i.ONE,[uu]:i.SRC_COLOR,[Ao]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Ro]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[bu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(P,ae,z,Y,he,ce,De,ft,Rt,Je){if(P===ii){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),P!==su){if(P!==m||Je!==S){if((p!==gi||y!==gi)&&(i.blendEquation(i.FUNC_ADD),p=gi,y=gi),Je)switch(P){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,x=null,D=null,A=null,w.set(0,0,0),I=0,m=P,S=Je}return}he=he||ae,ce=ce||z,De=De||Y,(ae!==p||he!==y)&&(i.blendEquationSeparate($e[ae],$e[he]),p=ae,y=he),(z!==E||Y!==x||ce!==D||De!==A)&&(i.blendFuncSeparate(dt[z],dt[Y],dt[ce],dt[De]),E=z,x=Y,D=ce,A=De),(ft.equals(w)===!1||Rt!==I)&&(i.blendColor(ft.r,ft.g,ft.b,Rt),w.copy(ft),I=Rt),m=P,S=!1}function Dt(P,ae){P.side===_n?Te(i.CULL_FACE):ie(i.CULL_FACE);let z=P.side===Ht;ae&&(z=!z),He(z),P.blending===Wi&&P.transparent===!1?O(ii):O(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const Y=P.stencilWrite;a.setTest(Y),Y&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function ze(P){P!==nu?(ie(i.CULL_FACE),P!==R&&(P===ll?i.cullFace(i.BACK):P===iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),R=P}function Se(P){P!==V&&(G&&i.lineWidth(P),V=P)}function tt(P,ae,z){P?(ie(i.POLYGON_OFFSET_FILL),(F!==ae||$!==z)&&(i.polygonOffset(ae,z),F=ae,$=z)):Te(i.POLYGON_OFFSET_FILL)}function Me(P){P?ie(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+X-1),te!==P&&(i.activeTexture(P),te=P)}function _(P,ae,z){z===void 0&&(te===null?z=i.TEXTURE0+X-1:z=te);let Y=le[z];Y===void 0&&(Y={type:void 0,texture:void 0},le[z]=Y),(Y.type!==P||Y.texture!==ae)&&(te!==z&&(i.activeTexture(z),te=z),i.bindTexture(P,ae||me[P]),Y.type=P,Y.texture=ae)}function U(){const P=le[te];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){Xe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Xe.copy(P))}function ue(P){W.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function je(P,ae){let z=c.get(ae);z===void 0&&(z=new WeakMap,c.set(ae,z));let Y=z.get(P);Y===void 0&&(Y=i.getUniformBlockIndex(ae,P.name),z.set(P,Y))}function Ue(P,ae){const Y=c.get(ae).get(P);l.get(ae)!==Y&&(i.uniformBlockBinding(ae,Y,P.__bindingPointIndex),l.set(ae,Y))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,le={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,E=null,x=null,y=null,D=null,A=null,w=new Ee(0,0,0),I=0,S=!1,M=null,R=null,V=null,F=null,$=null,Xe.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Te,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:st,setBlending:O,setMaterial:Dt,setFlipSided:He,setCullFace:ze,setLineWidth:Se,setPolygonOffset:tt,setScissorTest:Me,activeTexture:T,bindTexture:_,unbindTexture:U,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:fe,texImage3D:re,updateUBOMapping:je,uniformBlockBinding:Ue,texStorage2D:ke,texStorage3D:J,texSubImage2D:j,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:we,viewport:ue,reset:rt}}function cc(i,e,t,n){const s=ov(n);switch(t){case ad:return i*e;case cd:return i*e;case dd:return i*e*2;case Ta:return i*e/s.components*s.byteLength;case wa:return i*e/s.components*s.byteLength;case ud:return i*e*2/s.components*s.byteLength;case Aa:return i*e*2/s.components*s.byteLength;case ld:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ra:return i*e*4/s.components*s.byteLength;case xr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:case Ho:return Math.max(i,16)*Math.max(e,8)/4;case ko:case Vo:return Math.max(i,8)*Math.max(e,8)/2;case zo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case ra:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hd:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ov(i){switch(i){case zn:case sd:return{byteLength:1,components:1};case Cs:case rd:case Ns:return{byteLength:2,components:1};case Sa:case Ea:return{byteLength:2,components:4};case xi:case Ma:case un:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function av(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Ps("canvas")}function v(T,_,U){let q=1;const Z=Me(T);if((Z.width>U||Z.height>U)&&(q=U/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(q*Z.width),ge=Math.floor(q*Z.height);u===void 0&&(u=g(j,ge));const se=_?g(j,ge):u;return se.width=j,se.height=ge,se.getContext("2d").drawImage(T,0,0,j,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+ge+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,_,U,q,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=_;if(_===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),_===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),_===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),_===i.RGBA){const ge=Z?Lr:We.getTransfer(q);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=ge===nt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(T,_){let U;return T?_===null||_===xi||_===es?U=i.DEPTH24_STENCIL8:_===un?U=i.DEPTH32F_STENCIL8:_===Cs&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===xi||_===es?U=i.DEPTH_COMPONENT24:_===un?U=i.DEPTH_COMPONENT32F:_===Cs&&(U=i.DEPTH_COMPONENT16),U}function D(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),I(_),_.isVideoTexture&&d.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),M(_)}function I(T){const _=n.get(T);if(_.__webglInit===void 0)return;const U=T.source,q=h.get(U);if(q){const Z=q[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(q).length===0&&h.delete(U)}n.remove(T)}function S(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const U=T.source,q=h.get(U);delete q[_.__cacheKey],o.memory.textures--}function M(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Z=0;Z<_.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=T.textures;for(let q=0,Z=U.length;q<Z;q++){const j=n.get(U[q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(U[q])}n.remove(T)}let R=0;function V(){R=0}function F(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function $(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){const U=n.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,T,_);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function G(T,_){const U=n.get(T);if(T.version>0&&U.__version!==T.version){W(U,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function K(T,_){const U=n.get(T);if(T.version>0&&U.__version!==T.version){W(U,T,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function H(T,_){const U=n.get(T);if(T.version>0&&U.__version!==T.version){Q(U,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const te={[Qi]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},le={[Nt]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},oe={[Uu]:i.NEVER,[zu]:i.ALWAYS,[Fu]:i.LESS,[md]:i.LEQUAL,[ku]:i.EQUAL,[Hu]:i.GEQUAL,[Bu]:i.GREATER,[Vu]:i.NOTEQUAL};function ve(T,_){if(_.type===un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===yr||_.magFilter===Ss||_.magFilter===Un||_.minFilter===Yt||_.minFilter===yr||_.minFilter===Ss||_.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,te[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==Ss&&_.minFilter!==Un||_.type===un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let Z=h.get(q);Z===void 0&&(Z={},h.set(q,Z));const j=$(_);if(j!==T.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[j].usedTimes++;const ge=Z[T.__cacheKey];ge!==void 0&&(Z[T.__cacheKey].usedTimes--,ge.usedTimes===0&&S(_)),T.__cacheKey=j,T.__webglTexture=Z[j].texture}return U}function W(T,_,U){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const Z=Xe(T,_),j=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+U);const ge=n.get(j);if(j.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+U);const se=We.getPrimaries(We.workingColorSpace),pe=_.colorSpace===ei?null:We.getPrimaries(_.colorSpace),ke=_.colorSpace===ei||se===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let J=v(_.image,!1,s.maxTextureSize);J=tt(_,J);const fe=r.convert(_.format,_.colorSpace),re=r.convert(_.type);let we=x(_.internalFormat,fe,re,_.colorSpace,_.isVideoTexture);ve(q,_);let ue;const je=_.mipmaps,Ue=_.isVideoTexture!==!0,rt=ge.__version===void 0||Z===!0,P=j.dataReady,ae=D(_,J);if(_.isDepthTexture)we=y(_.format===ts,_.type),rt&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,fe,re,null));else if(_.isDataTexture)if(je.length>0){Ue&&rt&&t.texStorage2D(i.TEXTURE_2D,ae,we,je[0].width,je[0].height);for(let z=0,Y=je.length;z<Y;z++)ue=je[z],Ue?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,re,ue.data):t.texImage2D(i.TEXTURE_2D,z,we,ue.width,ue.height,0,fe,re,ue.data);_.generateMipmaps=!1}else Ue?(rt&&t.texStorage2D(i.TEXTURE_2D,ae,we,J.width,J.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,fe,re,J.data)):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,fe,re,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,we,je[0].width,je[0].height,J.depth);for(let z=0,Y=je.length;z<Y;z++)if(ue=je[z],_.format!==nn)if(fe!==null)if(Ue){if(P)if(_.layerUpdates.size>0){const he=cc(ue.width,ue.height,_.format,_.type);for(const ce of _.layerUpdates){const De=ue.data.subarray(ce*he/ue.data.BYTES_PER_ELEMENT,(ce+1)*he/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ce,ue.width,ue.height,1,fe,De)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,J.depth,fe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,we,ue.width,ue.height,J.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ue.width,ue.height,J.depth,fe,re,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,we,ue.width,ue.height,J.depth,0,fe,re,ue.data)}else{Ue&&rt&&t.texStorage2D(i.TEXTURE_2D,ae,we,je[0].width,je[0].height);for(let z=0,Y=je.length;z<Y;z++)ue=je[z],_.format!==nn?fe!==null?Ue?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,z,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,ue.width,ue.height,fe,re,ue.data):t.texImage2D(i.TEXTURE_2D,z,we,ue.width,ue.height,0,fe,re,ue.data)}else if(_.isDataArrayTexture)if(Ue){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,we,J.width,J.height,J.depth),P)if(_.layerUpdates.size>0){const z=cc(J.width,J.height,_.format,_.type);for(const Y of _.layerUpdates){const he=J.data.subarray(Y*z/J.data.BYTES_PER_ELEMENT,(Y+1)*z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,fe,re,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,re,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,fe,re,J.data);else if(_.isData3DTexture)Ue?(rt&&t.texStorage3D(i.TEXTURE_3D,ae,we,J.width,J.height,J.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,re,J.data)):t.texImage3D(i.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,fe,re,J.data);else if(_.isFramebufferTexture){if(rt)if(Ue)t.texStorage2D(i.TEXTURE_2D,ae,we,J.width,J.height);else{let z=J.width,Y=J.height;for(let he=0;he<ae;he++)t.texImage2D(i.TEXTURE_2D,he,we,z,Y,0,fe,re,null),z>>=1,Y>>=1}}else if(je.length>0){if(Ue&&rt){const z=Me(je[0]);t.texStorage2D(i.TEXTURE_2D,ae,we,z.width,z.height)}for(let z=0,Y=je.length;z<Y;z++)ue=je[z],Ue?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,fe,re,ue):t.texImage2D(i.TEXTURE_2D,z,we,fe,re,ue);_.generateMipmaps=!1}else if(Ue){if(rt){const z=Me(J);t.texStorage2D(i.TEXTURE_2D,ae,we,z.width,z.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,re,J)}else t.texImage2D(i.TEXTURE_2D,0,we,fe,re,J);m(_)&&p(q),ge.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,U){if(_.image.length!==6)return;const q=Xe(T,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);const j=n.get(Z);if(Z.version!==j.__version||q===!0){t.activeTexture(i.TEXTURE0+U);const ge=We.getPrimaries(We.workingColorSpace),se=_.colorSpace===ei?null:We.getPrimaries(_.colorSpace),pe=_.colorSpace===ei||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!ke&&!J?fe[Y]=v(_.image[Y],!0,s.maxCubemapSize):fe[Y]=J?_.image[Y].image:_.image[Y],fe[Y]=tt(_,fe[Y]);const re=fe[0],we=r.convert(_.format,_.colorSpace),ue=r.convert(_.type),je=x(_.internalFormat,we,ue,_.colorSpace),Ue=_.isVideoTexture!==!0,rt=j.__version===void 0||q===!0,P=Z.dataReady;let ae=D(_,re);ve(i.TEXTURE_CUBE_MAP,_);let z;if(ke){Ue&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,je,re.width,re.height);for(let Y=0;Y<6;Y++){z=fe[Y].mipmaps;for(let he=0;he<z.length;he++){const ce=z[he];_.format!==nn?we!==null?Ue?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,ce.width,ce.height,we,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,je,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,ce.width,ce.height,we,ue,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,je,ce.width,ce.height,0,we,ue,ce.data)}}}else{if(z=_.mipmaps,Ue&&rt){z.length>0&&ae++;const Y=Me(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,je,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,we,ue,fe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,fe[Y].width,fe[Y].height,0,we,ue,fe[Y].data);for(let he=0;he<z.length;he++){const De=z[he].image[Y].image;Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,De.width,De.height,we,ue,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,je,De.width,De.height,0,we,ue,De.data)}}else{Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we,ue,fe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,we,ue,fe[Y]);for(let he=0;he<z.length;he++){const ce=z[he];Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,we,ue,ce.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,je,we,ue,ce.image[Y])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),j.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,U,q,Z,j){const ge=r.convert(U.format,U.colorSpace),se=r.convert(U.type),pe=x(U.internalFormat,ge,se,U.colorSpace),ke=n.get(_),J=n.get(U);if(J.__renderTarget=_,!ke.__hasExternalTextures){const fe=Math.max(1,_.width>>j),re=Math.max(1,_.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,pe,fe,re,_.depth,0,ge,se,null):t.texImage2D(Z,j,pe,fe,re,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,J.__webglTexture,0,He(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,J.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,Z=q&&q.isDepthTexture?q.type:null,j=y(_.stencilBuffer,Z),ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=He(_);ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,j,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,T)}else{const q=_.textures;for(let Z=0;Z<q.length;Z++){const j=q[Z],ge=r.convert(j.format,j.colorSpace),se=r.convert(j.type),pe=x(j.internalFormat,ge,se,j.colorSpace),ke=He(_);U&&ze(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,pe,_.width,_.height):ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Z=q.__webglTexture,j=He(_);if(_.depthTexture.format===ji)ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===ts)ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const _=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,T)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),ie(_.__webglDepthbuffer[q],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ie(_.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,_,U){const q=n.get(T);_!==void 0&&me(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ce(T)}function st(T){const _=T.texture,U=n.get(T),q=n.get(_);T.addEventListener("dispose",w);const Z=T.textures,j=T.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let pe=0;pe<_.mipmaps.length;pe++)U.__webglFramebuffer[se][pe]=i.createFramebuffer()}else U.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)U.__webglFramebuffer[se]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,pe=Z.length;se<pe;se++){const ke=n.get(Z[se]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ze(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const pe=Z[se];U.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[se]);const ke=r.convert(pe.format,pe.colorSpace),J=r.convert(pe.type),fe=x(pe.internalFormat,ke,J,pe.colorSpace,T.isXRRenderTarget===!0),re=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,fe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,U.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)me(U.__webglFramebuffer[se][pe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else me(U.__webglFramebuffer[se],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,pe=Z.length;se<pe;se++){const ke=Z[se],J=n.get(ke);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),ve(i.TEXTURE_2D,ke),me(U.__webglFramebuffer,T,ke,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),m(ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),ve(se,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)me(U.__webglFramebuffer[pe],T,_,i.COLOR_ATTACHMENT0,se,pe);else me(U.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,se,0);m(_)&&p(se),t.unbindTexture()}T.depthBuffer&&Ce(T)}function $e(T){const _=T.textures;for(let U=0,q=_.length;U<q;U++){const Z=_[U];if(m(Z)){const j=E(T),ge=n.get(Z).__webglTexture;t.bindTexture(j,ge),p(j),t.unbindTexture()}}}const dt=[],O=[];function Dt(T){if(T.samples>0){if(ze(T)===!1){const _=T.textures,U=T.width,q=T.height;let Z=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(T),se=_.length>1;if(se)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[pe]);const ke=n.get(_[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,Z,i.NEAREST),l===!0&&(dt.length=0,O.length=0,dt.push(i.COLOR_ATTACHMENT0+pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(j),O.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[pe]);const ke=n.get(_[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function ze(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(T){const _=o.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function tt(T,_){const U=T.colorSpace,q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Ft&&U!==ei&&(We.getTransfer(U)===nt?(q!==nn||Z!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=st,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ze}function lv(i,e){function t(n,s=ei){let r;const o=We.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.BYTE;if(n===rd)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===ld)return i.RGB;if(n===nn)return i.RGBA;if(n===cd)return i.LUMINANCE;if(n===dd)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Ta)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===ud)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===xr||n===br||n===Mr||n===Sr)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Bo||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Go||n===$o)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Go)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===jo||n===Xo||n===qo||n===Yo||n===Ko||n===Zo||n===Jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===ra||n===oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hd||n===aa||n===la||n===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cv extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dv={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new St,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:uv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Ei{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=new fv,m=t.getContextAttributes();let p=null,E=null;const x=[],y=[],D=new Ae;let A=null;const w=new Ot;w.viewport=new Ye;const I=new Ot;I.viewport=new Ye;const S=[w,I],M=new cv;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=x[W];return Q===void 0&&(Q=new ho,x[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=x[W];return Q===void 0&&(Q=new ho,x[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=x[W];return Q===void 0&&(Q=new ho,x[W]=Q),Q.getHandSpace()};function F(W){const Q=y.indexOf(W.inputSource);if(Q===-1)return;const me=x[Q];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",X);for(let W=0;W<x.length;W++){const Q=y[W];Q!==null&&(y[W]=null,x[W].disconnect(Q))}R=null,V=null,v.reset(),e.setRenderTarget(p),f=null,h=null,u=null,s=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",$),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new bi(f.framebufferWidth,f.framebufferHeight,{format:nn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,me=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ts:ji,me=m.stencil?es:xi);const Te={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(Te),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new bi(h.textureWidth,h.textureHeight,{format:nn,type:zn,depthTexture:new Rd(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(W){for(let Q=0;Q<W.removed.length;Q++){const me=W.removed[Q],ie=y.indexOf(me);ie>=0&&(y[ie]=null,x[ie].disconnect(me))}for(let Q=0;Q<W.added.length;Q++){const me=W.added[Q];let ie=y.indexOf(me);if(ie===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=y.length){y.push(me),ie=Ce;break}else if(y[Ce]===null){y[Ce]=me,ie=Ce;break}if(ie===-1)break}const Te=x[ie];Te&&Te.connect(me)}}const G=new C,K=new C;function H(W,Q,me){G.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const ie=G.distanceTo(K),Te=Q.projectionMatrix.elements,Ce=me.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),st=Te[14]/(Te[10]+1),$e=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],Dt=(Ce[8]+1)/Ce[0],He=Ne*O,ze=Ne*Dt,Se=ie/(-O+Dt),tt=Se*-O;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(Se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=Ne+Se,T=st+Se,_=He-tt,U=ze+(ie-tt),q=$e*st/T*Me,Z=dt*st/T*Me;W.projectionMatrix.makePerspective(_,U,q,Z,Me,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,me=W.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(me=v.depthFar)),M.near=I.near=w.near=Q,M.far=I.far=w.far=me,(R!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,V=M.far),w.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const ie=W.parent,Te=M.cameras;te(M,ie);for(let Ce=0;Ce<Te.length;Ce++)te(Te[Ce],ie);Te.length===2?H(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),le(W,M,ie)};function le(W,Q,me){me===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ns*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let oe=null;function ve(W,Q){if(d=Q.getViewerPose(c||o),g=Q,d!==null){const me=d.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let ie=!1;me.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let Ce=0;Ce<me.length;Ce++){const Ne=me[Ce];let st=null;if(f!==null)st=f.getViewport(Ne);else{const dt=u.getViewSubImage(h,Ne);st=dt.viewport,Ce===0&&(e.setRenderTargetTextures(E,dt.colorTexture,h.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(E))}let $e=S[Ce];$e===void 0&&($e=new Ot,$e.layers.enable(Ce),$e.viewport=new Ye,S[Ce]=$e),$e.matrix.fromArray(Ne.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ne.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(st.x,st.y,st.width,st.height),Ce===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push($e)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ce=u.getDepthInformation(me[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,s.renderState)}}for(let me=0;me<x.length;me++){const ie=y[me],Te=x[me];ie!==null&&Te!==void 0&&Te.update(ie,Q,c||o)}oe&&oe(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Xe=new Ad;Xe.setAnimationLoop(ve),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const fi=new bn,mv=new Oe;function gv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ed(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,y=E.envMapRotation;x&&(m.envMap.value=x,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const y=x.program;n.uniformBlockBinding(E,y)}function c(E,x){let y=s[E.id];y===void 0&&(g(E),y=d(E),s[E.id]=y,E.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(E,D);const A=e.render.frame;r[E.id]!==A&&(h(E),r[E.id]=A)}function d(E){const x=u();E.__bindingPointIndex=x;const y=i.createBuffer(),D=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=s[E.id],y=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=I.length;S<M;S++){const R=I[S];if(f(R,A,S,D)===!0){const V=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let X=0;X<F.length;X++){const G=F[X],K=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+$,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,x,y,D){const A=E.value,w=x+"_"+y;if(D[w]===void 0)return typeof A=="number"||typeof A=="boolean"?D[w]=A:D[w]=A.clone(),!0;{const I=D[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){const x=E.uniforms;let y=0;const D=16;for(let w=0,I=x.length;w<I;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,R=S.length;M<R;M++){const V=S[M],F=Array.isArray(V.value)?V.value:[V.value];for(let $=0,X=F.length;$<X;$++){const G=F[$],K=v(G),H=y%D,te=H%K.boundary,le=H+te;y+=te,le!==0&&D-le<K.storage&&(y+=D-le),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=K.storage}}}const A=y%D;return A>0&&(y+=D-A),E.__size=y,E.__cache={},this}function v(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class _v{constructor(e={}){const{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=si,this.toneMappingExposure=1;const y=this;let D=!1,A=0,w=0,I=null,S=-1,M=null;const R=new Ye,V=new Ye;let F=null;const $=new Ee(0);let X=0,G=t.width,K=t.height,H=1,te=null,le=null;const oe=new Ye(0,0,G,K),ve=new Ye(0,0,G,K);let Xe=!1;const W=new Ia;let Q=!1,me=!1;const ie=new Oe,Te=new Oe,Ce=new C,Ne=new Ye,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function dt(){return I===null?H:1}let O=n;function Dt(b,L){return t.getContext(b,L)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){const L="webgl2";if(O=Dt(L,b),O===null)throw Dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,ze,Se,tt,Me,T,_,U,q,Z,j,ge,se,pe,ke,J,fe,re,we,ue,je,Ue,rt,P;function ae(){He=new Sm(O),He.init(),Ue=new lv(O,He),ze=new vm(O,He,e,Ue),Se=new rv(O,He),ze.reverseDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),tt=new wm(O),Me=new $g,T=new av(O,He,Se,Me,ze,Ue,tt),_=new ym(y),U=new Mm(y),q=new Ph(O),rt=new mm(O,q),Z=new Em(O,q,tt,rt),j=new Rm(O,Z,q,tt),we=new Am(O,ze,T),J=new _m(Me),ge=new Gg(y,_,U,He,ze,rt,J),se=new gv(y,Me),pe=new jg,ke=new Jg(He),re=new pm(y,_,U,Se,j,f,l),fe=new iv(y,j,ze),P=new vv(O,tt,ze,Se),ue=new gm(O,He,tt),je=new Tm(O,He,tt),tt.programs=ge.programs,y.capabilities=ze,y.extensions=He,y.properties=Me,y.renderLists=pe,y.shadowMap=fe,y.state=Se,y.info=tt}ae();const z=new pv(y,O);this.xr=z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(G,K,!1))},this.getSize=function(b){return b.set(G,K)},this.setSize=function(b,L,k=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,K=L,t.width=Math.floor(b*H),t.height=Math.floor(L*H),k===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(G*H,K*H).floor()},this.setDrawingBufferSize=function(b,L,k){G=b,K=L,H=k,t.width=Math.floor(b*k),t.height=Math.floor(L*k),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,L,k,B){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,L,k,B),Se.viewport(R.copy(oe).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,L,k,B){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,L,k,B),Se.scissor(V.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){Se.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(b=!0,L=!0,k=!0){let B=0;if(b){let N=!1;if(I!==null){const ee=I.texture.format;N=ee===Ra||ee===Aa||ee===wa}if(N){const ee=I.texture.type,de=ee===zn||ee===xi||ee===Cs||ee===es||ee===Sa||ee===Ea,_e=re.getClearColor(),ye=re.getClearAlpha(),Ie=_e.r,Pe=_e.g,xe=_e.b;de?(g[0]=Ie,g[1]=Pe,g[2]=xe,g[3]=ye,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Ie,v[1]=Pe,v[2]=xe,v[3]=ye,O.clearBufferiv(O.COLOR,0,v))}else B|=O.COLOR_BUFFER_BIT}L&&(B|=O.DEPTH_BUFFER_BIT),k&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),ke.dispose(),Me.dispose(),_.dispose(),U.dispose(),j.dispose(),rt.dispose(),P.dispose(),ge.dispose(),z.dispose(),z.removeEventListener("sessionstart",ja),z.removeEventListener("sessionend",Xa),oi.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=tt.autoReset,L=fe.enabled,k=fe.autoUpdate,B=fe.needsUpdate,N=fe.type;ae(),tt.autoReset=b,fe.enabled=L,fe.autoUpdate=k,fe.needsUpdate=B,fe.type=N}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function De(b){const L=b.target;L.removeEventListener("dispose",De),ft(L)}function ft(b){Rt(b),Me.remove(b)}function Rt(b){const L=Me.get(b).programs;L!==void 0&&(L.forEach(function(k){ge.releaseProgram(k)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,k,B,N,ee){L===null&&(L=st);const de=N.isMesh&&N.matrixWorld.determinant()<0,_e=Xd(b,L,k,B,N);Se.setMaterial(B,de);let ye=k.index,Ie=1;if(B.wireframe===!0){if(ye=Z.getWireframeAttribute(k),ye===void 0)return;Ie=2}const Pe=k.drawRange,xe=k.attributes.position;let qe=Pe.start*Ie,ot=(Pe.start+Pe.count)*Ie;ee!==null&&(qe=Math.max(qe,ee.start*Ie),ot=Math.min(ot,(ee.start+ee.count)*Ie)),ye!==null?(qe=Math.max(qe,0),ot=Math.min(ot,ye.count)):xe!=null&&(qe=Math.max(qe,0),ot=Math.min(ot,xe.count));const at=ot-qe;if(at<0||at===1/0)return;rt.setup(N,B,_e,k,ye);let kt,Ke=ue;if(ye!==null&&(kt=q.get(ye),Ke=je,Ke.setIndex(kt)),N.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*dt()),Ke.setMode(O.LINES)):Ke.setMode(O.TRIANGLES);else if(N.isLine){let be=B.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*dt()),N.isLineSegments?Ke.setMode(O.LINES):N.isLineLoop?Ke.setMode(O.LINE_LOOP):Ke.setMode(O.LINE_STRIP)}else N.isPoints?Ke.setMode(O.POINTS):N.isSprite&&Ke.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,wn=N._multiDrawCounts,Ze=N._multiDrawCount,rn=ye?q.get(ye).bytesPerElement:1,Ti=Me.get(B).currentProgram.getUniforms();for(let Gt=0;Gt<Ze;Gt++)Ti.setValue(O,"_gl_DrawID",Gt),Ke.render(be[Gt]/rn,wn[Gt])}else if(N.isInstancedMesh)Ke.renderInstances(qe,at,N.count);else if(k.isInstancedBufferGeometry){const be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,wn=Math.min(k.instanceCount,be);Ke.renderInstances(qe,at,wn)}else Ke.render(qe,at)};function Je(b,L,k){b.transparent===!0&&b.side===_n&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,Vs(b,L,k),b.side=Hn,b.needsUpdate=!0,Vs(b,L,k),b.side=_n):Vs(b,L,k)}this.compile=function(b,L,k=null){k===null&&(k=b),p=ke.get(k),p.init(L),x.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){const _e=ee[de];Je(_e,k,N),B.add(_e)}else Je(ee,k,N),B.add(ee)}),x.pop(),p=null,B},this.compileAsync=function(b,L,k=null){const B=this.compile(b,L,k);return new Promise(N=>{function ee(){if(B.forEach(function(de){Me.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){N(b);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let sn=null;function Tn(b){sn&&sn(b)}function ja(){oi.stop()}function Xa(){oi.start()}const oi=new Ad;oi.setAnimationLoop(Tn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(b){sn=b,z.setAnimationLoop(b),b===null?oi.stop():oi.start()},z.addEventListener("sessionstart",ja),z.addEventListener("sessionend",Xa),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,L,I),p=ke.get(b,x.length),p.init(L),x.push(p),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),W.setFromProjectionMatrix(Te),me=this.localClippingEnabled,Q=J.init(this.clippingPlanes,me),m=pe.get(b,E.length),m.init(),E.push(m),z.enabled===!0&&z.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&Fr(ee,L,-1/0,y.sortObjects)}Fr(b,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(te,le),$e=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,$e&&re.addToRenderList(m,b),this.info.render.frame++,Q===!0&&J.beginShadows();const k=p.state.shadowsArray;fe.render(k,b,L),Q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const ee=L.cameras;if(N.length>0)for(let de=0,_e=ee.length;de<_e;de++){const ye=ee[de];Ya(B,N,b,ye)}$e&&re.render(b);for(let de=0,_e=ee.length;de<_e;de++){const ye=ee[de];qa(m,b,ye,ye.viewport)}}else N.length>0&&Ya(B,N,b,L),$e&&re.render(b),qa(m,b,L);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(y,b,L),rt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Q===!0&&J.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Fr(b,L,k,B){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){B&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const de=j.update(b),_e=b.material;_e.visible&&m.push(b,de,_e,k,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const de=j.update(b),_e=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ne.copy(de.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(_e)){const ye=de.groups;for(let Ie=0,Pe=ye.length;Ie<Pe;Ie++){const xe=ye[Ie],qe=_e[xe.materialIndex];qe&&qe.visible&&m.push(b,de,qe,k,Ne.z,xe)}}else _e.visible&&m.push(b,de,_e,k,Ne.z,null)}}const ee=b.children;for(let de=0,_e=ee.length;de<_e;de++)Fr(ee[de],L,k,B)}function qa(b,L,k,B){const N=b.opaque,ee=b.transmissive,de=b.transparent;p.setupLightsView(k),Q===!0&&J.setGlobalState(y.clippingPlanes,k),B&&Se.viewport(R.copy(B)),N.length>0&&Bs(N,L,k),ee.length>0&&Bs(ee,L,k),de.length>0&&Bs(de,L,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ya(b,L,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new bi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ns:zn,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ee=p.state.transmissionRenderTarget[B.id],de=B.viewport||R;ee.setSize(de.z,de.w);const _e=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor($),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),$e&&re.render(k);const ye=y.toneMapping;y.toneMapping=si;const Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Q===!0&&J.setGlobalState(y.clippingPlanes,B),Bs(b,k,B),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let xe=0,qe=L.length;xe<qe;xe++){const ot=L[xe],at=ot.object,kt=ot.geometry,Ke=ot.material,be=ot.group;if(Ke.side===_n&&at.layers.test(B.layers)){const wn=Ke.side;Ke.side=Ht,Ke.needsUpdate=!0,Ka(at,k,B,kt,Ke,be),Ke.side=wn,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e),y.setClearColor($,X),Ie!==void 0&&(B.viewport=Ie),y.toneMapping=ye}function Bs(b,L,k){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ee=b.length;N<ee;N++){const de=b[N],_e=de.object,ye=de.geometry,Ie=B===null?de.material:B,Pe=de.group;_e.layers.test(k.layers)&&Ka(_e,L,k,ye,Ie,Pe)}}function Ka(b,L,k,B,N,ee){b.onBeforeRender(y,L,k,B,N,ee),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,L,k,B,b,ee),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,y.renderBufferDirect(k,L,B,N,b,ee),N.side=Hn,N.needsUpdate=!0,y.renderBufferDirect(k,L,B,N,b,ee),N.side=_n):y.renderBufferDirect(k,L,B,N,b,ee),b.onAfterRender(y,L,k,B,N,ee)}function Vs(b,L,k){L.isScene!==!0&&(L=st);const B=Me.get(b),N=p.state.lights,ee=p.state.shadowsArray,de=N.state.version,_e=ge.getParameters(b,N.state,ee,L,k),ye=ge.getProgramCacheKey(_e);let Ie=B.programs;B.environment=b.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(b.isMeshStandardMaterial?U:_).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",De),Ie=new Map,B.programs=Ie);let Pe=Ie.get(ye);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===de)return Ja(b,_e),Pe}else _e.uniforms=ge.getUniforms(b),b.onBeforeCompile(_e,y),Pe=ge.acquireProgram(_e,ye),Ie.set(ye,Pe),B.uniforms=_e.uniforms;const xe=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xe.clippingPlanes=J.uniform),Ja(b,_e),B.needsLights=Yd(b),B.lightsStateVersion=de,B.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function Za(b){if(b.uniformsList===null){const L=b.currentProgram.getUniforms();b.uniformsList=Tr.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Ja(b,L){const k=Me.get(b);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Xd(b,L,k,B,N){L.isScene!==!0&&(L=st),T.resetTextureUnits();const ee=L.fog,de=B.isMeshStandardMaterial?L.environment:null,_e=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ft,ye=(B.isMeshStandardMaterial?U:_).get(B.envMap||de),Ie=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Pe=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,ot=!!k.morphAttributes.color;let at=si;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(at=y.toneMapping);const kt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ke=kt!==void 0?kt.length:0,be=Me.get(B),wn=p.state.lights;if(Q===!0&&(me===!0||b!==M)){const Kt=b===M&&B.id===S;J.setState(B,b,Kt)}let Ze=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==wn.state.version||be.outputColorSpace!==_e||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==ye||B.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Pe||be.morphTargets!==xe||be.morphNormals!==qe||be.morphColors!==ot||be.toneMapping!==at||be.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,be.__version=B.version);let rn=be.currentProgram;Ze===!0&&(rn=Vs(B,L,N));let Ti=!1,Gt=!1,hs=!1;const lt=rn.getUniforms(),pn=be.uniforms;if(Se.useProgram(rn.program)&&(Ti=!0,Gt=!0,hs=!0),B.id!==S&&(S=B.id,Gt=!0),Ti||M!==b){Se.buffers.depth.getReversed()?(ie.copy(b.projectionMatrix),ah(ie),lh(ie),lt.setValue(O,"projectionMatrix",ie)):lt.setValue(O,"projectionMatrix",b.projectionMatrix),lt.setValue(O,"viewMatrix",b.matrixWorldInverse);const $n=lt.map.cameraPosition;$n!==void 0&&$n.setValue(O,Ce.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Gt=!0,hs=!0)}if(N.isSkinnedMesh){lt.setOptional(O,N,"bindMatrix"),lt.setOptional(O,N,"bindMatrixInverse");const Kt=N.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),lt.setValue(O,"boneTexture",Kt.boneTexture,T))}N.isBatchedMesh&&(lt.setOptional(O,N,"batchingTexture"),lt.setValue(O,"batchingTexture",N._matricesTexture,T),lt.setOptional(O,N,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",N._indirectTexture,T),lt.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",N._colorsTexture,T));const fs=k.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&we.update(N,k,rn),(Gt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,lt.setValue(O,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(pn.envMap.value=ye,pn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(pn.envMapIntensity.value=L.environmentIntensity),Gt&&(lt.setValue(O,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&qd(pn,hs),ee&&B.fog===!0&&se.refreshFogUniforms(pn,ee),se.refreshMaterialUniforms(pn,B,H,K,p.state.transmissionRenderTarget[b.id]),Tr.upload(O,Za(be),pn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Tr.upload(O,Za(be),pn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(O,"center",N.center),lt.setValue(O,"modelViewMatrix",N.modelViewMatrix),lt.setValue(O,"normalMatrix",N.normalMatrix),lt.setValue(O,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let $n=0,Wn=Kt.length;$n<Wn;$n++){const Qa=Kt[$n];P.update(Qa,rn),P.bind(Qa,rn)}}return rn}function qd(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,L,k){Me.get(b.texture).__webglTexture=L,Me.get(b.depthTexture).__webglTexture=k;const B=Me.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){const k=Me.get(b);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,k=0){I=b,A=L,w=k;let B=!0,N=null,ee=!1,de=!1;if(b){const ye=Me.get(b);if(ye.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(O.FRAMEBUFFER,null),B=!1;else if(ye.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(ye.__hasExternalTextures)T.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const xe=b.depthTexture;if(ye.__boundDepthTexture!==xe){if(xe!==null&&Me.has(xe)&&(b.width!==xe.image.width||b.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Pe=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?N=Pe[L][k]:N=Pe[L],ee=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[k]:N=Pe,R.copy(b.viewport),V.copy(b.scissor),F=b.scissorTest}else R.copy(oe).multiplyScalar(H).floor(),V.copy(ve).multiplyScalar(H).floor(),F=Xe;if(Se.bindFramebuffer(O.FRAMEBUFFER,N)&&B&&Se.drawBuffers(b,N),Se.viewport(R),Se.scissor(V),Se.setScissorTest(F),ee){const ye=Me.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,k)}else if(de){const ye=Me.get(b.texture),Ie=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,k||0,Ie)}S=-1},this.readRenderTargetPixels=function(b,L,k,B,N,ee,de){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Se.bindFramebuffer(O.FRAMEBUFFER,_e);try{const ye=b.texture,Ie=ye.format,Pe=ye.type;if(!ze.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-B&&k>=0&&k<=b.height-N&&O.readPixels(L,k,B,N,Ue.convert(Ie),Ue.convert(Pe),ee)}finally{const ye=I!==null?Me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,L,k,B,N,ee,de){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const ye=b.texture,Ie=ye.format,Pe=ye.type;if(!ze.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-B&&k>=0&&k<=b.height-N){Se.bindFramebuffer(O.FRAMEBUFFER,_e);const xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xe),O.bufferData(O.PIXEL_PACK_BUFFER,ee.byteLength,O.STREAM_READ),O.readPixels(L,k,B,N,Ue.convert(Ie),Ue.convert(Pe),0);const qe=I!==null?Me.get(I).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,qe);const ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await oh(O,ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ee),O.deleteBuffer(xe),O.deleteSync(ot),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,k=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);const B=Math.pow(2,-k),N=Math.floor(b.image.width*B),ee=Math.floor(b.image.height*B),de=L!==null?L.x:0,_e=L!==null?L.y:0;T.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,de,_e,N,ee),Se.unbindTexture()},this.copyTextureToTexture=function(b,L,k=null,B=null,N=0){b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],L=arguments[2],N=arguments[3]||0,k=null);let ee,de,_e,ye,Ie,Pe,xe,qe,ot;const at=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(ee=k.max.x-k.min.x,de=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,ye=k.min.x,Ie=k.min.y,Pe=k.isBox3?k.min.z:0):(ee=at.width,de=at.height,_e=at.depth||1,ye=0,Ie=0,Pe=0),B!==null?(xe=B.x,qe=B.y,ot=B.z):(xe=0,qe=0,ot=0);const kt=Ue.convert(L.format),Ke=Ue.convert(L.type);let be;L.isData3DTexture?(T.setTexture3D(L,0),be=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),be=O.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);const wn=O.getParameter(O.UNPACK_ROW_LENGTH),Ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ti=O.getParameter(O.UNPACK_SKIP_ROWS),Gt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pe);const hs=b.isDataArrayTexture||b.isData3DTexture,lt=L.isDataArrayTexture||L.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const pn=Me.get(b),fs=Me.get(L),Kt=Me.get(pn.__renderTarget),$n=Me.get(fs.__renderTarget);Se.bindFramebuffer(O.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Wn=0;Wn<_e;Wn++)hs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,N,Pe+Wn),b.isDepthTexture?(lt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,N,ot+Wn),O.blitFramebuffer(ye,Ie,ee,de,xe,qe,ee,de,O.DEPTH_BUFFER_BIT,O.NEAREST)):lt?O.copyTexSubImage3D(be,N,xe,qe,ot+Wn,ye,Ie,ee,de):O.copyTexSubImage2D(be,N,xe,qe,ot+Wn,ye,Ie,ee,de);Se.bindFramebuffer(O.READ_FRAMEBUFFER,null),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else lt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(be,N,xe,qe,ot,ee,de,_e,kt,Ke,at.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(be,N,xe,qe,ot,ee,de,_e,kt,at.data):O.texSubImage3D(be,N,xe,qe,ot,ee,de,_e,kt,Ke,at):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,xe,qe,ee,de,kt,Ke,at.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,xe,qe,at.width,at.height,kt,at.data):O.texSubImage2D(O.TEXTURE_2D,N,xe,qe,ee,de,kt,Ke,at);O.pixelStorei(O.UNPACK_ROW_LENGTH,wn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ti),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gt),N===0&&L.generateMipmaps&&O.generateMipmap(be),Se.unbindTexture()},this.copyTextureToTexture3D=function(b,L,k=null,B=null,N=0){return b.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,b=arguments[2],L=arguments[3],N=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,k,B,N)},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){A=0,w=0,I=null,Se.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class La{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new La(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yv extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new C;class Oa{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dc=new C,uc=new Ye,hc=new Ye,bv=new C,fc=new Oe,ar=new C,fo=new Mn,pc=new Oe,po=new Us;class Mv extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hl,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingBox.expandByPoint(ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ar),this.boundingSphere.expandByPoint(ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(s),e.ray.intersectsSphere(fo)!==!1&&(pc.copy(s).invert(),po.copy(e.ray).applyMatrix4(pc),!(this.boundingBox!==null&&po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Iu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;uc.fromBufferAttribute(s.attributes.skinIndex,e),hc.fromBufferAttribute(s.attributes.skinWeight,e),dc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hc.getComponent(r);if(o!==0){const a=uc.getComponent(r);fc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bv.copy(dc).applyMatrix4(fc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ld extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Od extends St{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Nt,d=Nt,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=new Oe,Sv=new Oe;class Na{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Sv;mc.multiplyMatrices(a,t[r]),mc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Na(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Od(t,e,e,nn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ld),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class fa extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new Oe,gc=new Oe,lr=[],vc=new Gn,Ev=new Oe,_s=new Be,ys=new Mn;class Tv extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ev)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),vc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),ys.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),gc.multiplyMatrices(n,Vi),_s.matrixWorld=gc,_s.raycast(e,lr);for(let o=0,a=lr.length;o<a;o++){const l=lr[o];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Od(new Float32Array(s*this.count),s,this.count,Ta,un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nr extends yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cr=new C,Ir=new C,_c=new Oe,xs=new Us,cr=new Mn,mo=new C,yc=new C;class Ua extends ht{constructor(e=new zt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cr.fromBufferAttribute(t,s-1),Ir.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cr.distanceTo(Ir);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;_c.copy(s).invert(),xs.copy(e.ray).applyMatrix4(_c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),E=d.getX(v+1),x=dr(this,e,xs,l,p,E);x&&t.push(x)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=dr(this,e,xs,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=dr(this,e,xs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=dr(this,e,xs,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Cr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),t.distanceSqToSegment(Cr,Ir,mo,yc)>n)return;mo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mo);if(!(l<e.near||l>e.far))return{distance:l,point:yc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xc=new C,bc=new C;class Fa extends Ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xc.fromBufferAttribute(t,s),bc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xc.distanceTo(bc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wv extends Ua{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nd extends yn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mc=new Oe,pa=new Us,ur=new Mn,hr=new C;class Av extends ht{constructor(e=new zt,t=new Nd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;Mc.copy(s).invert(),pa.copy(e.ray).applyMatrix4(Mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,v=f;g<v;g++){const m=c.getX(g);hr.fromBufferAttribute(u,m),Sc(hr,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=h,v=f;g<v;g++)hr.fromBufferAttribute(u,g),Sc(hr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sc(i,e,t,n,s,r,o){const a=pa.distanceSqToPoint(i);if(a<t){const l=new C;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vn extends zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function E(){const y=new C,D=new C;let A=0;const w=(t-e)/n;for(let I=0;I<=r;I++){const S=[],M=I/r,R=M*(t-e)+e;for(let V=0;V<=s;V++){const F=V/s,$=F*l+a,X=Math.sin($),G=Math.cos($);D.x=R*X,D.y=-M*n+m,D.z=R*G,u.push(D.x,D.y,D.z),y.set(X,w,G).normalize(),h.push(y.x,y.y,y.z),f.push(F,1-M),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const M=v[S][I],R=v[S+1][I],V=v[S+1][I+1],F=v[S][I+1];(e>0||S!==0)&&(d.push(M,R,F),A+=3),(t>0||S!==r-1)&&(d.push(R,V,F),A+=3)}c.addGroup(p,A,0),p+=A}function x(y){const D=g,A=new Ae,w=new C;let I=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let V=0;V<=s;V++){const $=V/s*l+a,X=Math.cos($),G=Math.sin($);w.x=S*G,w.y=m*M,w.z=S*X,u.push(w.x,w.y,w.z),h.push(0,M,0),A.x=X*.5+.5,A.y=G*.5*M+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){const F=D+V,$=R+V;y===!0?d.push($,$+1,F):d.push($+1,$,F),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const fr=new C,pr=new C,go=new C,mr=new tn;class Rv extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Xi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=mr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),mr.getNormal(go),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const x=(E+1)%3,y=u[E],D=u[x],A=mr[d[E]],w=mr[d[x]],I=`${y}_${D}`,S=`${D}_${y}`;S in h&&h[S]?(go.dot(h[S].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(w.x,w.y,w.z)),h[S]=null):I in h||(h[I]={index0:c[E],index1:c[x],normal:go.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];fr.fromBufferAttribute(a,v),pr.fromBufferAttribute(a,m),f.push(fr.x,fr.y,fr.z),f.push(pr.x,pr.y,pr.z)}this.setAttribute("position",new Et(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ka extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new C,h=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){const A=D/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(A+y,1-x),E.push(c++)}d.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const x=d[p][E+1],y=d[p][E],D=d[p+1][E],A=d[p+1][E+1];(p!==0||o>0)&&f.push(x,y,A),(p!==n-1||l<Math.PI)&&f.push(y,D,A)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kn extends yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sn extends kn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Iv(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ec(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ud(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ks{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dv extends ks{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fl,endingEnd:fl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pl:r=e,a=2*t-n;break;case ml:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pl:o=e,l=2*n-t;break;case ml:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,E=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let D=0;D!==a;++D)r[D]=p*o[d+D]+E*o[c+D]+x*o[l+D]+y*o[u+D];return r}}class Pv extends ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}}class Lv extends ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Cv(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ds;class ls extends En{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Is;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends En{}Fd.prototype.ValueTypeName="color";class ss extends En{}ss.prototype.ValueTypeName="number";class Ov extends ks{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let d=c+a;c!==d;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class rs extends En{InterpolantFactoryMethodLinear(e){return new Ov(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends En{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Is;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends En{}os.prototype.ValueTypeName="vector";class Nv{constructor(e="",t=-1,n=[],s=Du){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Fv(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=Iv(l);l=Ec(l,1,d),c=Ec(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,g,v){if(f.length!==0){const m=[],p=[];Ud(f,m,p,g),m.length!==0&&v.push(new u(h,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)f[h[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let E=0;E!==h[g].morphTargets.length;++E){const x=h[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new ss(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(os,f+".position",h,"pos",s),n(rs,f+".quaternion",h,"rot",s),n(os,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Uv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return Fd;case"quaternion":return rs;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Uv(i.type);if(i.times===void 0){const t=[],n=[];Ud(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kv{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const Bv=new kv;class ds{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Vv extends Error{constructor(e,t){super(e),this.response=t}}class kd extends ds{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:s});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Pn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){E();function E(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{v+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,w=d.length;A<w;A++){const I=d[A];I.onProgress&&I.onProgress(D)}p.enqueue(y),E()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ni.add(e,c);const d=Pn[e];delete Pn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Pn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hv extends ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ps("img");function l(){d(),ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class zv extends ds{constructor(e){super(e)}load(e,t,n,s){const r=new St,o=new Hv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ur extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vo=new Oe,Tc=new C,wc=new C;class Ba{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gv extends Ba{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bd extends Ur{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ac=new Oe,bs=new C,_o=new C;class $v extends Ba{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),_o.copy(n.position),_o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_o),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}}class Wv extends Ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jv extends Ba{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wr extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new jv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xv extends Ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qv extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(e,l),r.manager.itemStart(e)}}const Va="\\[\\]\\.:\\/",Yv=new RegExp("["+Va+"]","g"),Ha="[^"+Va+"]",Kv="[^"+Va.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",Ha),Jv=/(WCOD+)?/.source.replace("WCOD",Kv),Qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ha),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ha),t_=new RegExp("^"+Zv+Jv+Qv+e_+"$"),n_=["material","materials","bones","map"];class i_{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){const t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=i_;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class s_ extends Fa{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ee(n),s=new Ee(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const d=new zt;d.setAttribute("position",new Et(l,3)),d.setAttribute("color",new Et(c,3));const u=new Nr({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class r_ extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Cc={type:"change"},za={type:"start"},Vd={type:"end"},vr=new Us,Ic=new Qn,o_=Math.cos(70*gd.DEG2RAD),_t=new C,Bt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yo=1e-6;class a_ extends r_{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new xn,this._lastTargetPosition=new C,this._quat=new xn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new C,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new C,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=d_.bind(this),this._onContextMenu=v_.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=u_.bind(this),this._onMouseMove=h_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=y_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<o_?this.object.lookAt(this.target):(Ic.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(Ic,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yo||this._lastTargetPosition.distanceToSquared(this.target)>yo?(this.dispatchEvent(Cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_t.copy(s).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Bt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function d_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function u_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(za)}function h_(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(za),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vd))}function p_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function m_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(za)}function g_(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function v_(i){this.enabled!==!1&&i.preventDefault()}function __(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dc(i,e){if(e===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===da||e===fd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===da)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class x_ extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new T_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new B_(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Rs.extractUrlBase(e);o=Rs.resolveURL(c,this.path)}else o=Rs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hd){try{o[Ge.KHR_BINARY_GLTF]=new V_(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Q_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new S_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new H_(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new z_;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new G_;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function b_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class M_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new Ee(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ft);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wv(d),c.distance=u;break;case"spot":c=new Bd(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class S_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return _i}extendParams(e,t,n){const s=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}}class E_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class T_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(r)}}class w_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class A_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class R_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class C_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class I_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],Ft),Promise.all(r)}}class D_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class P_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}}class L_{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class O_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class N_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class U_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class F_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class k_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(f),d,u,h,s.mode,s.filter),f})})}else return null}}class B_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,f=[];for(const g of u){const v=new Oe,m=new C,p=new xn,E=new C(1,1,1),x=new Tv(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&E.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(m,p,E));for(const y in l)if(y==="_COLOR_0"){const D=l[y];x.instanceColor=new fa(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ht.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const Hd="glTF",Ms=12,Pc={JSON:1313821514,BIN:5130562};class V_{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ms,r=new DataView(e,Ms);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Pc.JSON){const c=new Uint8Array(e,Ms+o,a);this.content=n.decode(c)}else if(l===Pc.BIN){const c=Ms+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class H_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const u=ma[d]||d.toLowerCase();a[u]=o[d]}for(const d in e.attributes){const u=ma[d]||d.toLowerCase();if(o[d]!==void 0){const h=n.accessors[e.attributes[d]],f=Yi[h.componentType];c[u]=f.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},a,c,Ft,h)})})}}class z_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class G_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class zd extends ks{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=s-t,u=(n-t)/d,h=u*u,f=h*u,g=e*c,v=g-c,m=-2*f+3*h,p=f-h,E=1-m,x=p-h+u;for(let y=0;y!==a;y++){const D=o[v+y+a],A=o[v+y+l]*d,w=o[g+y+a],I=o[g+y]*d;r[y]=E*D+x*A+m*w+p*I}return r}}const $_=new xn;class W_ extends zd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return $_.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lc={9728:Nt,9729:Yt,9984:id,9985:yr,9986:Ss,9987:Un},Oc={33071:ti,33648:Ar,10497:Qi},xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ma={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j_={CUBICSPLINE:void 0,LINEAR:Ds,STEP:Is},bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),i.DefaultMaterial}function pi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function On(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function q_(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(h)}if(s){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],h=c[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Y_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function K_(i){let e;const t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mo(t.attributes):e=i.indices+":"+Mo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mo(i.targets[n]);return e}function Mo(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ga(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const J_=new Oe;class Q_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new b_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new zv(this.options.manager):this.textureLoader=new qv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return pi(r,a,s),On(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=xo[s.type],a=Yi[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ut(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=xo[s.type],c=Yi[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(h/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(E);x||(v=new c(a,p*f,s.count*f/d),x=new xv(v,f/d),t.cache.add(E,x)),m=new Oa(x,l,h%f/d,g)}else a===null?v=new c(s.count*l):v=new c(a,h,s.count*l),m=new Ut(v,l,g);if(s.sparse!==void 0){const p=xo.SCALAR,E=Yi[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new E(o[1],x,s.sparse.count*p),A=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=D.length;w<I;w++){const S=D[w];if(m.setX(S,A[w*l]),l>=2&&m.setY(S,A[w*l+1]),l>=3&&m.setZ(S,A[w*l+2]),l>=4&&m.setW(S,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return d.magFilter=Lc[h.magFilter]||Yt,d.minFilter=Lc[h.minFilter]||Un,d.wrapS=Oc[h.wrapS]||Qi,d.wrapT=Oc[h.wrapT]||Qi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Nt&&d.minFilter!==Yt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){const m=new St(v);m.needsUpdate=!0,h(m)}),t.load(Rs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),On(u,o),u.userData.mimeType=o.mimeType||Z_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nd,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nr,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const u=s[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ft),a.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_n);const d=r.alphaMode||bo.OPAQUE;if(d===bo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===bo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_i&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==_i&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_i){const u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],Ft)}return r.emissiveTexture!==void 0&&o!==_i&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&pi(s,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=K_(c),u=s[d];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Nc(new zt,c,t),s[d]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?X_(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=o[f];let p;const E=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Mv(v,E):new Be(v,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=Dc(p.geometry,fd):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=Dc(p.geometry,da));else if(m.mode===Jt.LINES)p=new Fa(v,E);else if(m.mode===Jt.LINE_STRIP)p=new Ua(v,E);else if(m.mode===Jt.LINE_LOOP)p=new wv(v,E);else if(m.mode===Jt.POINTS)p=new Av(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Y_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),On(p,r),m.extensions&&pi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&pi(s,u[0],r),u[0];const h=new Tt;r.extensions&&pi(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(gd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Da(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),On(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){a.push(u);const h=new Oe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Na(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",E)),c.push(g),d.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const h=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let E=0,x=h.length;E<x;E++){const y=h[E],D=f[E],A=g[E],w=v[E],I=m[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,D,A,w,I);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Nv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(h,J_)});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new Ld:c.length>1?d=new Tt:c.length===1?d=c[0]:d=new ht,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=o),On(d,r),r.extensions&&pi(n,d,r),r.matrix!==void 0){const u=new Oe;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Tt;n.name&&(r.name=s.createUniqueName(n.name)),On(r,n),n.extensions&&pi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);const c=d=>{const u=new Map;for(const[h,f]of s.associations)(h instanceof yn||h instanceof St)&&u.set(h,f);return d.traverse(h=>{const f=s.associations.get(h);f!=null&&u.set(h,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Jn[r.path]===Jn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Jn[r.path]){case Jn.weights:c=ss;break;case Jn.rotation:c=rs;break;case Jn.position:case Jn.scale:c=os;break;default:switch(n.itemSize){case 1:c=ss;break;case 2:case 3:default:c=os;break}break}const d=s.interpolation!==void 0?j_[s.interpolation]:Ds,u=this._getArrayFromAccessor(n);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Jn[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ga(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof rs?W_:zd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function e0(i,e,t){const n=e.attributes,s=new Gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const d=ga(Yi[a.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,d=r.length;c<d;c++){const u=r[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const v=ga(Yi[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Nc(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ma[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return We.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),On(i,e),e0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?q_(i,e.targets,t):i})}const ct={chassis:{y:.15,x:0,z:0},elevator:{y:1.1,x:0,z:0},shooter:{y:1.8,x:.5,z:0},intake:{y:.15,x:-1.2,z:0},roller:{y:.7,x:0,z:.6},launcher:{y:2.2,x:0,z:0},vision:{y:.5,x:.8,z:.7}},mt={chassis:5921386,wheel:3355456,elevator:7833770,shooter:13959196,intake:5614165,roller:7829435,launcher:13404228,vision:4508808,accent:13959196};let jt,gn,cn,Xt,Qt,Vt={},Ga=null,Uc=!1,Fc=!0;function t0(i){if(Uc)return;Uc=!0,jt=new yv,jt.background=new Ee(1447966),jt.fog=new La(1447966,.06),gn=new Ot(45,i.clientWidth/i.clientHeight,.1,100),gn.position.set(2.24,1.92,3.2),cn=new _v({antialias:!0}),cn.setSize(i.clientWidth,i.clientHeight),cn.setPixelRatio(Math.min(window.devicePixelRatio,2)),cn.shadowMap.enabled=!0,cn.shadowMap.type=Qc,cn.toneMapping=td,cn.toneMappingExposure=1.6,i.appendChild(cn.domElement),Xt=new a_(gn,cn.domElement),Xt.enableDamping=!0,Xt.dampingFactor=.08,Xt.target.set(0,.6,0),Xt.minDistance=2,Xt.maxDistance=12,Xt.maxPolarAngle=Math.PI*.85,jt.add(new Xv(8952251,.8));const e=new wr(16777215,2);e.position.set(4,8,4),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),jt.add(e);const t=new wr(6719692,.7);t.position.set(-5,4,6),jt.add(t);const n=new wr(13959196,.3);n.position.set(-3,2,-4),jt.add(n);const s=new Bd(16777215,1.5,15,Math.PI/6,.5);s.position.set(0,8,0),s.target.position.set(0,.5,0),jt.add(s),jt.add(s.target);const r=new Be(new Fs(20,20),new kn({color:1711140,roughness:.7,metalness:.3}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,jt.add(r);const o=new s_(10,20,2763828,1974312);o.position.y=.001,jt.add(o),Qt=new Tt,jt.add(Qt),n0(),Object.keys(Vt).forEach(d=>{d!=="chassis"&&$a(d,!1)});const a=()=>{gn.aspect=i.clientWidth/i.clientHeight,gn.updateProjectionMatrix(),cn.setSize(i.clientWidth,i.clientHeight)};window.addEventListener("resize",a);function l(){if(!Fc){requestAnimationFrame(l);return}requestAnimationFrame(l),Xt.update(),Ga||(Qt.rotation.y+=.0015),cn.render(jt,gn)}l(),new IntersectionObserver(([d])=>{Fc=d.isIntersecting},{threshold:.05}).observe(i)}function vt(i,e=1){return new kn({color:i,roughness:.35,metalness:.5,transparent:e<1,opacity:e})}function n0(){const i=new Tt,e=new Be(new pt(.85,.1,.75),vt(mt.chassis));e.position.y=ct.chassis.y,e.castShadow=!0,i.add(e);const t=new Vn(.06,.06,.04,16),n=vt(mt.wheel);[[-.38,-.33],[-.38,.33],[.38,-.33],[.38,.33]].forEach(([w,I])=>{const S=new Be(t,n);S.rotation.x=Math.PI/2,S.position.set(w,.06,I),S.castShadow=!0,i.add(S);const M=new Be(new pt(.1,.08,.1),vt(mt.chassis,.7));M.position.set(w,.14,I),i.add(M)}),Vt.chassis=i,Qt.add(i);const s=new Tt,r=ct.elevator,o=new Be(new pt(.08,.9,.08),vt(mt.elevator));o.position.set(r.x-.08,r.y,r.z),o.castShadow=!0,s.add(o);const a=o.clone();a.position.x=r.x+.08,s.add(a);const l=new Be(new pt(.22,.06,.1),vt(mt.elevator,.8));l.position.set(r.x,r.y+.2,r.z),s.add(l),i0(s,o),Vt.elevator=s,Qt.add(s);const c=new Tt;Wd("adjustable",c),Vt.shooter=c,Qt.add(c);const d=new Tt,u=ct.intake,h=new Be(new pt(.3,.12,.5),vt(mt.intake));h.position.set(u.x,u.y,u.z),h.rotation.z=-.25,h.castShadow=!0,d.add(h);const f=new Be(new Vn(.03,.03,.45,12),vt(3381555));f.rotation.x=Math.PI/2,f.position.set(u.x-.12,u.y-.02,u.z),d.add(f),Vt.intake=d,Qt.add(d);const g=new Tt;Vt.roller=g,Qt.add(g),Dr("roller",{mechanisms:{roller:{configured:!0}}});const v=new Tt,m=ct.launcher;[-.09,.09].forEach(w=>{const I=new Be(new pt(.03,.18,.04),vt(mt.launcher));I.position.set(m.x,m.y,m.z+w),I.castShadow=!0,v.add(I)});const p=new Be(new pt(.08,.04,.22),vt(mt.launcher));p.position.set(m.x,m.y-.1,m.z),v.add(p),Vt.launcher=v,Qt.add(v);const E=new Tt;Vt.arm=E,Qt.add(E),Dr("arm",{mechanisms:{arm:{configured:!0,dof:2}}});const x=new Tt,y=ct.vision,D=new Be(new pt(.08,.06,.06),vt(mt.vision));D.position.set(y.x,y.y,y.z),D.castShadow=!0,x.add(D);const A=new Be(new Vn(.015,.02,.03,8),vt(2236962));A.rotation.z=Math.PI/2,A.position.set(y.x+.05,y.y,y.z),x.add(A),Vt.vision=x,Qt.add(x)}function i0(i,e){const t=new Fa(new Rv(e.geometry),new Nr({color:10070715,transparent:!0,opacity:.3}));t.position.copy(e.position),i.add(t)}function $a(i,e){const t=Vt[i];t&&(t.visible=e)}const kc={chassis:{pos:[2.5,1.2,2.5],target:[0,.15,0]},elevator:{pos:[1.5,2,1.5],target:[0,1.1,0]},shooter:{pos:[1.5,2.2,.8],target:[.5,1.8,0]},intake:{pos:[-2,.8,1.8],target:[-1.2,.15,0]},roller:{pos:[1.2,1.2,1.8],target:[0,.7,.6]},launcher:{pos:[1,2.8,1],target:[0,2.2,0]},vision:{pos:[1.8,1,1.8],target:[.8,.5,.7]},statemachine:{pos:[3.5,3,5],target:[0,.6,0]}};function s0(i){var r;if(!gn||!Xt)return;Ga=i,Qt.rotation.y=0;const e=kc[i]||kc.chassis,t=(r=document.getElementById("detail-sidebar"))==null?void 0:r.classList.contains("open");let n=e.pos,s=e.target;if(t){const o=new C(...e.pos),a=new C(...e.target),l=new C().subVectors(a,o).normalize(),c=new C().crossVectors(l,new C(0,1,0)).normalize();o.addScaledVector(c,.5),a.addScaledVector(c,.5),n=o.toArray(),s=a.toArray()}Gd(n,s),Object.entries(Vt).forEach(([o,a])=>{a.visible&&a.traverse(l=>{l.isMesh&&l.material&&(l.material.opacity=o===i?1:.2,l.material.transparent=!0,o===i?(l.material.emissive=new Ee(mt.accent),l.material.emissiveIntensity=.12):(l.material.emissive=new Ee(0),l.material.emissiveIntensity=0),l.material.needsUpdate=!0)})})}function r0(){!gn||!Xt||(Ga=null,Gd([3.5,3,5],[0,.6,0]),Object.entries(Vt).forEach(([i,e])=>{e.traverse(t=>{t.isMesh&&t.material&&(t.material.opacity=1,t.material.emissive=new Ee(0),t.material.emissiveIntensity=0,t.material.needsUpdate=!0)})}))}function Gd(i,e){const t=gn.position.clone(),n=Xt.target.clone(),s=new C(...i),r=new C(...e),o=800,a=performance.now();function l(c){const d=Math.min((c-a)/o,1),u=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2;gn.position.lerpVectors(t,s,u),Xt.target.lerpVectors(n,r,u),Xt.update(),d<1&&requestAnimationFrame(l)}requestAnimationFrame(l)}function So(i,e){const t=Vt[i];!t||!t.visible||t.traverse(n=>{n.isMesh&&n.material&&(e?(n.material.emissive=new Ee(2271812),n.material.emissiveIntensity=.08):(n.material.emissive=new Ee(0),n.material.emissiveIntensity=0),n.material.needsUpdate=!0)})}function $d(i){const e=[];for(i.traverse(t=>{t.geometry&&e.push(t.geometry),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{Object.values(s).forEach(r=>{r&&r.isTexture&&r.dispose()}),s.dispose()})}),e.forEach(t=>t.dispose());i.children.length>0;)i.remove(i.children[0])}function Wd(i,e){$d(e);const t=ct.shooter,n=new kn({color:mt.shooter,roughness:.6});if(i==="adjustable_turret"){const s=new Be(new Vn(.15,.15,.05,32),new kn({color:4473941}));s.position.set(t.x,t.y-.05,t.z),s.castShadow=!0,e.add(s);const r=new Be(new pt(.1,.15,.25),new kn({color:mt.shooter,transparent:!0,opacity:.6}));r.position.set(t.x,t.y+.05,t.z),e.add(r);const o=new Be(new Vn(.08,.08,.06,20),n);o.position.set(t.x+.05,t.y+.1,t.z+.06),o.rotation.x=Math.PI/2,e.add(o);const a=o.clone();a.position.z-=.12,e.add(a)}else{const s=new Be(new Vn(.12,.12,.06,20),n);s.position.set(t.x,t.y,t.z),s.castShadow=!0,e.add(s);const r=s.clone();r.position.z+=.12,e.add(r);const o=new Be(new pt(.08,.15,.25),new kn({color:mt.shooter,transparent:!0,opacity:.6}));o.position.set(t.x,t.y,t.z+.06),e.add(o)}}function o0(i){Dr("shooter",{mechanisms:{shooter:{shooterType:i}}})}function Dr(i,e){var s,r;const t=Vt[i];if(!t)return;$d(t);const n=new x_;if(i==="chassis")n.load("assets/models/Swerve_MK5i.glb",a=>{const l=a.scene;l.scale.set(.015,.015,.015),l.position.set(ct.chassis.x,ct.chassis.y,ct.chassis.z),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),t.add(l)},void 0,()=>{const a=new Be(new pt(.85,.1,.75),vt(mt.chassis));a.position.y=ct.chassis.y,a.castShadow=!0,t.add(a)});else if(i==="elevator")n.load("assets/models/Elevator.glb",a=>{const l=a.scene;l.scale.set(.012,.012,.012),l.position.set(ct.elevator.x,ct.elevator.y-.5,ct.elevator.z),l.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),t.add(l)},void 0,()=>{const a=ct.elevator,l=new Be(new pt(.08,.9,.08),vt(mt.elevator));l.position.set(a.x-.08,a.y,a.z),l.castShadow=!0,t.add(l);const c=l.clone();c.position.x=a.x+.08,t.add(c)});else if(i==="shooter"){const o=((s=e.mechanisms)==null?void 0:s.shooter)||{},c=`assets/models/${o.shooterType==="adjustable_turret"?"Shooter_on_Turret.glb":"AdjustableShooter.glb"}`;n.load(c,d=>{const u=d.scene;u.scale.set(.015,.015,.015),u.position.set(ct.shooter.x,ct.shooter.y,ct.shooter.z),u.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),t.add(u)},void 0,()=>{Wd(o.shooterType||"adjustable",t)})}else if(i==="vision"){const o=e.vision||{};let a="ArduCam_M12Lens.glb";if(o.system==="limelight"){const c=o.limelightVersion||"limelight3";c==="limelight3"?a="LIMELIGHT3CAD_STEP.glb":c==="limelight3a"?a="LIMELIGHT3ACAD_STEP.glb":c==="limelight3g"?a="LIMELIGHT3GCAD_STEP.glb":c==="limelight4"&&(a="LIMELIGHT4CAD_STEP.glb")}const l=`assets/models/${a}`;n.load(l,c=>{const d=c.scene;d.scale.set(.02,.02,.02),d.position.set(ct.vision.x,ct.vision.y,ct.vision.z),d.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),t.add(d)},void 0,()=>{const c=ct.vision,d=new Be(new pt(.08,.06,.06),vt(mt.vision));d.position.set(c.x,c.y,c.z),d.castShadow=!0,t.add(d)})}else if(i==="roller"){const o=ct.roller,a=.015,l=.45,c=.035;for(let d=0;d<8;d++){const u=new Be(new Vn(a,a,l,12),vt(mt.roller));u.rotation.x=Math.PI/2,u.position.set(o.x,o.y,o.z+(d-3.5)*c),u.castShadow=!0,t.add(u)}}else if(i==="arm"){const a=(((r=e.mechanisms)==null?void 0:r.arm)||{dof:2}).dof||2,l=ct.chassis;let c=new C(l.x,l.y+.15,l.z),d=t;for(let u=0;u<a;u++){const h=.35-u*.05,f=.08-u*.02,g=new Tt;g.position.copy(c),d.add(g);const v=new Be(new ka(f*.7,16,16),vt(2236962));g.add(v);const m=new Be(new pt(f,h,f),vt(mt.accent));m.position.set(0,h/2,0),m.castShadow=!0,g.add(m);const p=-.5+u*.3;g.rotation.z=p,c=new C(0,h,0),d=g}}else if(i==="intake"){const o=ct.intake,a=new Be(new pt(.3,.12,.5),vt(mt.intake));a.position.set(o.x,o.y,o.z),a.rotation.z=-.25,a.castShadow=!0,t.add(a)}else if(i==="launcher"){const o=ct.launcher;[-.09,.09].forEach(l=>{const c=new Be(new pt(.03,.18,.04),vt(mt.launcher));c.position.set(o.x,o.y,o.z+l),c.castShadow=!0,t.add(c)});const a=new Be(new pt(.08,.04,.22),vt(mt.launcher));a.position.set(o.x,o.y-.1,o.z),t.add(a)}}function yi(i,e){return'<option value="">— Select —</option>'+Object.entries(i).map(([t,n])=>`<option value="${t}" ${t===e?"selected":""}>${n.name}</option>`).join("")}function Ve(i,e,t,n,s="1"){return`<div class="config-group"><label class="config-label">${e}</label><input type="number" class="config-input" id="${i}" placeholder="${n}" step="${s}" value="${t||""}"></div>`}function ut(i,e,t){return`<div class="config-group config-group-sm"><label class="config-label">${e}</label><input type="number" class="config-input" id="${i}" min="0" max="62" value="${t}" style="width:70px"></div>`}function Ls(i,e,t){return`<div class="radio-cards">${i.map(([n,s])=>`<div class="radio-card ${n===e?"active":""}" data-name="${t}" data-value="${n}"><div class="radio-dot"></div><div class="radio-card-info"><div class="radio-card-name">${s.name}</div>${s.desc?`<div class="radio-card-desc">${s.desc}</div>`:""}</div></div>`).join("")}</div>`}function Mi(i,e){return`<select class="config-select" id="${i}">${yi(qt,e)}</select>`}const a0={chassis:"Chassis",elevator:"Elevator",intake:"Intake"};function jd(i,e,t){const s=(t[i]||["chassis"]).map(r=>`<option value="${r}" ${e.attachedTo===r?"selected":""}>${a0[r]||r}</option>`).join("");return`<div class="config-divider"></div>
        <div class="config-section-title">SIMULATION</div>
        <div class="config-group">
            <label class="config-label">Attached To</label>
            <select class="config-select" id="cfg-${i}-attached">${s}</select>
            <p class="config-hint">Parent mechanism for physics sim (not shown in 3D view)</p>
        </div>`}function Si(i){const e=Re.getState(),t=document.getElementById("sidebar-title"),n=document.getElementById("sidebar-content");if(i==="chassis")return l0(e,t,n);if(i==="vision")return g0(e,t,n);if(i==="statemachine")return _0(e,t,n);const r={elevator:d0,shooter:u0,intake:h0,roller:f0,launcher:p0,arm:m0}[i];if(r)return r(e,t,n);const o=Kc().find(a=>a.id===i);if(o)return c0(e,t,n,i,o.name)}function l0(i,e,t){var a;e.textContent="DRIVETRAIN";const n=i.chassis,s=n.type==="swerve",r=n.type==="tank"||n.type==="mecanum";t.innerHTML=`
        <div class="config-group"><label class="config-label">Drivetrain Type</label>
        ${Ls(Object.entries(qc),n.type,"chassisType")}</div>
        <div id="chassis-details" style="${n.type?"":"display:none"}">
        <div class="config-divider"></div>
        <div class="config-group"><label class="config-label">Drive Motor</label>${Mi("cfg-drive-motor",n.driveMotor)}</div>
        ${s?`
        <div class="config-group"><label class="config-label">Turn Motor</label>${Mi("cfg-turn-motor",n.turnMotor)}</div>
        <div class="config-group"><label class="config-label">Swerve Preset</label><select class="config-select" id="cfg-swerve-preset">${yi(ws,n.swervePreset)}</select></div>
        <div class="config-group"><label class="config-label">Module Encoder</label><select class="config-select" id="cfg-swerve-encoder">${yi(Xc,n.swerveEncoderType)}</select></div>
        ${n.usePhoenix6Swerve?'<div class="config-hint phoenix-badge">✓ Phoenix 6 SwerveDrivetrain (TalonFX + CANCoder)</div>':""}
        `:""}
        <div class="config-group"><label class="config-label">Gyro</label><select class="config-select" id="cfg-gyro">${yi(ya,n.gyro)}</select></div>
        <div class="config-row">
            ${Ve("cfg-gear-ratio","Drive Gear Ratio",n.gearRatio,"6.75","0.01")}
            ${Ve("cfg-wheel-diam","Wheel Diameter (m)",n.wheelDiameter,"0.1016","0.001")}
        </div>
        ${s?Ve("cfg-turn-ratio","Turn Gear Ratio",n.turnGearRatio,"21.43","0.01"):""}
        ${Ve("cfg-max-speed","Max Speed (m/s)",n.maxSpeed,"4.5","0.1")}

        <div class="config-divider"></div>
        <div class="config-section-title">CAN IDs</div>
        ${s?`
        <div class="can-id-grid">
            <div class="can-id-module"><div class="can-id-module-title">FL Module</div><div class="config-row">
                ${ut("can-fl-drive","Drive",n.canIds.fl_drive)}
                ${ut("can-fl-turn","Turn",n.canIds.fl_turn)}
                ${ut("can-fl-enc","Encoder",n.canIds.fl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">FR Module</div><div class="config-row">
                ${ut("can-fr-drive","Drive",n.canIds.fr_drive)}
                ${ut("can-fr-turn","Turn",n.canIds.fr_turn)}
                ${ut("can-fr-enc","Encoder",n.canIds.fr_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BL Module</div><div class="config-row">
                ${ut("can-bl-drive","Drive",n.canIds.bl_drive)}
                ${ut("can-bl-turn","Turn",n.canIds.bl_turn)}
                ${ut("can-bl-enc","Encoder",n.canIds.bl_encoder)}
            </div></div>
            <div class="can-id-module"><div class="can-id-module-title">BR Module</div><div class="config-row">
                ${ut("can-br-drive","Drive",n.canIds.br_drive)}
                ${ut("can-br-turn","Turn",n.canIds.br_turn)}
                ${ut("can-br-enc","Encoder",n.canIds.br_encoder)}
            </div></div>
        </div>
        `:r?`
        <div class="config-row">${ut("can-ll","Left Leader",n.tankCanIds.left_leader)}${ut("can-lf","Left Follower",n.tankCanIds.left_follower)}</div>
        <div class="config-row">${ut("can-rl","Right Leader",n.tankCanIds.right_leader)}${ut("can-rf","Right Follower",n.tankCanIds.right_follower)}</div>
        `:""}
        ${ut("can-gyro","Gyro CAN ID",n.gyroCanId)}
        </div>
    `,Os("chassisType",l=>{Re.updateChassis({type:l,configured:!1}),Si("chassis")});const o=document.getElementById("cfg-swerve-preset");o&&o.addEventListener("change",l=>{const c=l.target.value;if(c&&ws[c]&&c!=="custom"){const d=ws[c],u=document.getElementById("cfg-gear-ratio"),h=document.getElementById("cfg-wheel-diam"),f=document.getElementById("cfg-turn-ratio");u&&(u.value=d.driveRatio),h&&(h.value=d.wheelDiam),f&&(f.value=d.turnRatio)}}),(a=document.getElementById("cfg-swerve-encoder"))==null||a.addEventListener("change",l=>{Re.updateChassis({swerveEncoderType:l.target.value}),Si("chassis")})}function us(i,e,t,n,s,r="",o=""){var v;const a=i.mechanisms[n];e.textContent=s.toUpperCase();let l=`<div class="config-section-title">MOTORS</div><div id="${n}-motors-list">`;a.motors.forEach((m,p)=>{l+=`<div class="motor-entry" data-idx="${p}">
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
                ${ut(`cfg-${n}-canid-${p}`,"CAN ID",m.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-${n}-inv-${p}" ${m.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        </div>`}),l+=`</div><button class="btn-add-motor" id="btn-add-motor-${n}">+ Add Motor</button>`;const c=a.motorConfig||{};let d=`<div class="config-divider"></div>
        <div class="config-section-title">MOTOR CONFIG</div>
        <div class="config-row">
            ${Ve(`cfg-${n}-curlimit`,"Current Limit (A)",c.currentLimit,"40","1")}
        </div>
        <div class="config-group"><label class="config-label">Idle Mode</label>
            <div class="config-row config-row-inline">
                <label class="config-radio"><input type="radio" name="cfg-${n}-brakemode" value="brake" ${c.brakeMode!==!1?"checked":""}> Brake</label>
                <label class="config-radio"><input type="radio" name="cfg-${n}-brakemode" value="coast" ${c.brakeMode===!1?"checked":""}> Coast</label>
            </div>
        </div>`;if("rampRate"in a&&(d+=Ve(`cfg-${n}-ramp`,"Ramp Rate (ms)",a.rampRate,"0","1")),a.pid){const m=a.pid;d+=`<div class="config-divider"></div>
            <div class="config-section-title">PID / FEEDFORWARD</div>
            <div class="config-row">
                ${Ve(`cfg-${n}-kp`,"kP",m.kP,"0","0.001")}
                ${Ve(`cfg-${n}-ki`,"kI",m.kI,"0","0.001")}
                ${Ve(`cfg-${n}-kd`,"kD",m.kD,"0","0.001")}
            </div>
            <div class="config-row">
                ${Ve(`cfg-${n}-ks`,"kS",m.kS,"0","0.001")}
                ${Ve(`cfg-${n}-kv`,"kV",m.kV,"0","0.001")}
                ${Ve(`cfg-${n}-ka`,"kA",m.kA,"0","0.001")}
            </div>`}let u=`<div class="config-divider"></div>
        <div class="config-row">${Ve(`cfg-${n}-ratio`,"Gear Ratio",a.gearRatio,"1.0","0.01")}</div>`;const h=a.physics||{},f=`<div class="config-divider"></div>
        <details class="config-details">
            <summary class="config-section-title" style="cursor:pointer;user-select:none;">
                ⚙ PHYSICS (Simulation) <span style="font-size:0.7rem;color:var(--text-secondary);font-weight:400;">— optional, improves sim accuracy</span>
            </summary>
            <div class="config-row" style="margin-top:8px;">
                ${Ve(`cfg-${n}-mass`,"Mass (kg)",h.massKg,"e.g. 5.0","0.1")}
                ${Ve(`cfg-${n}-moi`,"MOI (kg·m²)",h.moiKgM2,"e.g. 0.1","0.001")}
            </div>
            <p class="config-hint" style="margin-top:4px;">Used in simulation physics model. Leave blank to use defaults.</p>
        </details>`,g=i.attachmentRules[n]?jd(n,a,i.attachmentRules):"";t.innerHTML=o+l+d+g+u+f+r,(v=document.getElementById(`btn-add-motor-${n}`))==null||v.addEventListener("click",()=>{var p;const m=(((p=a.motors[a.motors.length-1])==null?void 0:p.canId)||50)+1;Re.addMotor(n,{type:null,canId:m,role:"follower",inverted:!1}),Si(n)}),t.querySelectorAll(".motor-remove-btn").forEach(m=>{m.addEventListener("click",p=>{p.stopPropagation(),Re.removeMotor(n,parseInt(m.dataset.idx)),Si(n)})})}function c0(i,e,t,n,s){us(i,e,t,n,s.toUpperCase())}function d0(i,e,t){const n=i.mechanisms.elevator;us(i,e,t,"elevator","Elevator",`
        <div class="config-group"><label class="config-label">Encoder</label><select class="config-select" id="cfg-elevator-encoder">${yi(Xc,n.encoder)}</select></div>
        ${ut("cfg-elevator-enc-id","Encoder CAN ID",n.encoderId)}
        <div class="config-row">
            ${Ve("cfg-elevator-min","Min Height (m)",n.minHeight,"0","0.01")}
            ${Ve("cfg-elevator-max","Max Height (m)",n.maxHeight,"1.5","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${Ve("cfg-elevator-softfwd","Forward Limit",n.softLimitFwd,"","0.01")}
            ${Ve("cfg-elevator-softrev","Reverse Limit",n.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">MOTION PROFILE</div>
        <div class="config-row">
            ${Ve("cfg-elevator-mmvel","Max Velocity (m/s)",n.motionMaxVel,"","0.01")}
            ${Ve("cfg-elevator-mmacc","Max Accel (m/s²)",n.motionMaxAccel,"","0.01")}
        </div>
    `)}function u0(i,e,t){const n=i.mechanisms.shooter,s=`
        <div class="config-section-title" style="margin-top:0">SHOOTER TYPE</div>
        <div class="config-group">
            ${Ls([["flywheel_only",{name:"Flywheel Only",desc:"Static Angle Flywheels"}],["adjustable",{name:"Adjustable Hood",desc:"Pivot + Flywheels"}],["adjustable_turret",{name:"Adjustable + Turret",desc:"Pivot + Flywheels + Turret"}]],n.shooterType,"shooterType")}
        </div>
        <div class="config-divider"></div>
        <div class="config-row">${Ve("cfg-shooter-rpm","Max Flywheel RPM",n.maxRPM,"5000","100")}</div>
        <div class="config-divider"></div>
        <div class="config-section-title" style="margin-bottom:-10px">FLYWHEEL MOTORS</div>
    `;let r="";if(n.shooterType==="adjustable"||n.shooterType==="adjustable_turret"){const a=n.pivotMotor||{type:null,canId:24,inverted:!1};r=`
            <div class="config-divider"></div>
            <div class="config-section-title">PIVOT MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${Mi("cfg-shooter-pivot-motor",a.type)}</div>
                ${ut("cfg-shooter-pivot-canid","CAN ID",a.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-pivot-inv" ${a.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}let o="";if(n.shooterType==="adjustable_turret"){const a=n.turretMotor||{type:null,canId:25,inverted:!1};o=`
            <div class="config-divider"></div>
            <div class="config-section-title">TURRET MOTOR</div>
            <div class="config-row">
                <div class="config-group"><label class="config-label">Motor Type</label>${Mi("cfg-shooter-turret-motor",a.type)}</div>
                ${ut("cfg-shooter-turret-canid","CAN ID",a.canId)}
            </div>
            <div class="config-row">
                <div class="config-group config-group-sm"><label class="config-label">
                    <input type="checkbox" class="config-check" id="cfg-shooter-turret-inv" ${a.inverted?"checked":""}>
                    Inverted</label></div>
            </div>
        `}us(i,e,t,"shooter","Shooter",r+o,s),Os("shooterType",a=>{Re.updateMechanism("shooter",{shooterType:a}),o0(a),Si("shooter")})}function h0(i,e,t){var s;const n=i.mechanisms.intake;us(i,e,t,"intake","Intake",`
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-intake-sensor" ${n.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="intake-sensor-cfg" style="${n.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-intake-sensor-type">${yi(Yc,n.sensorPortType)}</select></div>
            ${Ve("cfg-intake-sensor-port","Port Number",n.sensorPort,"0")}
        </div>
    `),(s=document.getElementById("cfg-intake-sensor"))==null||s.addEventListener("change",r=>{document.getElementById("intake-sensor-cfg").style.display=r.target.checked?"":"none"})}function f0(i,e,t){us(i,e,t,"roller","Roller")}function p0(i,e,t){var s;const n=i.mechanisms.launcher;us(i,e,t,"launcher","Launcher",`
        <div class="config-divider"></div>
        <div class="config-section-title">SOFT LIMITS</div>
        <div class="config-row">
            ${Ve("cfg-launcher-softfwd","Forward Limit",n.softLimitFwd,"","0.01")}
            ${Ve("cfg-launcher-softrev","Reverse Limit",n.softLimitRev,"","0.01")}
        </div>
        <div class="config-divider"></div>
        <div class="config-section-title">Game Piece Sensor</div>
        <div class="config-group"><div class="config-toggle-wrap"><span class="config-toggle-label">Has Sensor</span>
        <label class="toggle-switch"><input type="checkbox" id="cfg-launcher-sensor" ${n.hasSensor?"checked":""}><span class="toggle-slider"></span></label></div></div>
        <div id="launcher-sensor-cfg" style="${n.hasSensor?"":"display:none"}">
            <div class="config-group"><label class="config-label">Port Type</label>
            <select class="config-select" id="cfg-launcher-sensor-type">${yi(Yc,n.sensorPortType)}</select></div>
            ${Ve("cfg-launcher-sensor-port","Port Number",n.sensorPort,"1")}
        </div>
    `),(s=document.getElementById("cfg-launcher-sensor"))==null||s.addEventListener("change",r=>{document.getElementById("launcher-sensor-cfg").style.display=r.target.checked?"":"none"})}function m0(i,e,t){var r,o;const n=i.mechanisms.arm;e.textContent="ARM";let s=`
        <div class="config-section-title" style="margin-top:0">DEGREES OF FREEDOM</div>
        <div class="config-group">
            <select class="config-select" id="cfg-arm-dof">
                <option value="1" ${n.dof===1?"selected":""}>1 DoF (Single Joint)</option>
                <option value="2" ${n.dof===2?"selected":""}>2 DoF (Double Jointed)</option>
                <option value="3" ${n.dof===3?"selected":""}>3 DoF (Triple Jointed)</option>
            </select>
        </div>
    `;for(let a=0;a<n.dof;a++){const l=n.joints[a]||{motors:[{type:null,canId:30+a*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+a*2,gearRatio:null,motorConfig:{currentLimit:40},pid:{kP:0,kI:0,kD:0},softLimitFwd:null,softLimitRev:null},c=l.motors[0]||{type:null,canId:30+a*2,inverted:!1},d=l.motors.length>1,u=l.motors[1]||{type:null,canId:31+a*2,inverted:!1};s+=`
            <div class="config-divider"></div>
            <div class="config-section-title" style="color: var(--accent-red); font-size: 0.95rem;">JOINT ${a+1}</div>
            
            <div class="config-group"><label class="config-label">Leader Motor Type</label>${Mi(`cfg-arm-joint-${a}-leader-motor`,c.type)}</div>
            <div class="config-row">
                ${ut(`cfg-arm-joint-${a}-leader-canid`,"Leader CAN ID",c.canId)}
                <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                    <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${a}-leader-inv" ${c.inverted?"checked":""}> Inverted</label>
                </div>
            </div>

            <div class="config-group">
                <div class="config-toggle-wrap">
                    <span class="config-toggle-label">Has Follower Motor</span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="cfg-arm-joint-${a}-hasfollower" ${d?"checked":""}>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div id="cfg-arm-joint-${a}-follower-cfg" style="${d?"":"display:none"}">
                <div class="config-group"><label class="config-label">Follower Motor Type</label>${Mi(`cfg-arm-joint-${a}-follower-motor`,u.type)}</div>
                <div class="config-row">
                    ${ut(`cfg-arm-joint-${a}-follower-canid`,"Follower CAN ID",u.canId)}
                    <div class="config-group config-group-sm" style="align-items: center; justify-content: center; height: 38px;">
                        <label class="config-label"><input type="checkbox" id="cfg-arm-joint-${a}-follower-inv" ${u.inverted?"checked":""}> Inverted</label>
                    </div>
                </div>
            </div>

            <div class="config-row">
                ${Ve(`cfg-arm-joint-${a}-ratio`,"Gear Ratio",l.gearRatio,"e.g. 80")}
                ${Ve(`cfg-arm-joint-${a}-curlimit`,"Current Limit (A)",l.motorConfig.currentLimit,"40")}
            </div>

            <!-- Encoder -->
            <div class="config-row">
                <div class="config-group">
                    <label class="config-label">Encoder Type</label>
                    <select class="config-select" id="cfg-arm-joint-${a}-encoder">
                        <option value="">Integrated</option>
                        <option value="cancoder" ${l.encoder==="cancoder"?"selected":""}>CANCoder</option>
                        <option value="throughbore" ${l.encoder==="throughbore"?"selected":""}>ThroughBore</option>
                    </select>
                </div>
                ${ut(`cfg-arm-joint-${a}-encoder-id`,"Encoder ID/Port",l.encoderId)}
            </div>

            <!-- Soft Limits -->
            <div class="config-row">
                ${Ve(`cfg-arm-joint-${a}-softfwd`,"Soft Limit Fwd (rad)",l.softLimitFwd,"None","0.01")}
                ${Ve(`cfg-arm-joint-${a}-softrev`,"Soft Limit Rev (rad)",l.softLimitRev,"None","0.01")}
            </div>

            <!-- PID -->
            <div class="config-row">
                ${Ve(`cfg-arm-joint-${a}-kp`,"kP",l.pid.kP,"0")}
                ${Ve(`cfg-arm-joint-${a}-ki`,"kI",l.pid.kI,"0")}
                ${Ve(`cfg-arm-joint-${a}-kd`,"kD",l.pid.kD,"0")}
            </div>
        `}s+=jd("arm",n,i.attachmentRules),t.innerHTML=s,(r=document.getElementById("cfg-arm-dof"))==null||r.addEventListener("change",a=>{const l=parseInt(a.target.value),c=[];for(let d=0;d<l;d++)c.push(n.joints[d]||{motors:[{type:null,canId:30+d*2,inverted:!1,role:"leader"}],encoder:null,encoderId:31+d*2,gearRatio:null,motorConfig:{currentLimit:40,brakeMode:!0},pid:{kP:0,kI:0,kD:0,kS:0,kV:0,kA:0},softLimitFwd:null,softLimitRev:null});Re.updateMechanism("arm",{dof:l,joints:c}),Si("arm")});for(let a=0;a<n.dof;a++)(o=document.getElementById(`cfg-arm-joint-${a}-hasfollower`))==null||o.addEventListener("change",l=>{document.getElementById(`cfg-arm-joint-${a}-follower-cfg`).style.display=l.target.checked?"":"none"})}function g0(i,e,t){const n=i.vision;e.textContent="VISION SYSTEM",t.innerHTML=`
        <div class="config-group"><label class="config-label">Vision System</label>
        ${Ls([["limelight",{name:"Limelight",desc:"Smart camera using NetworkTables"}],["photonvision",{name:"PhotonVision",desc:"Open-source with PhotonLib"}]],n.system,"visionSystem")}</div>
        <div id="vision-sub"></div>
    `,Os("visionSystem",s=>{Re.updateVision({system:s}),va(s)}),n.system&&va(n.system)}function va(i){const e=document.getElementById("vision-sub");if(!e)return;const t=Re.getState().vision;i==="limelight"?(e.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">LIMELIGHT</div>
            <div class="config-group"><label class="config-label">Limelight Version</label>
            ${Ls(Object.entries(Kd),t.limelightVersion,"llVersion")}</div>
            ${Bc(t)}
        `,Os("llVersion",n=>Re.updateVision({limelightVersion:n}))):i==="photonvision"&&(e.innerHTML=`
            <div class="config-divider"></div>
            <div class="config-section-title">PHOTONVISION</div>
            <div class="config-group"><label class="config-label">Coprocessor</label>
            ${Ls(Object.entries(Zd),t.photonPlatform,"photonPlat")}</div>
            ${Bc(t)}
        `,Os("photonPlat",n=>Re.updateVision({photonPlatform:n}))),v0()}function Bc(i){let e=`<div class="config-group"><label class="config-label">Number of Cameras</label>
        <select class="config-select" id="cfg-cam-count">${[1,2,3,4].map(t=>`<option value="${t}" ${i.cameraCount===t?"selected":""}>${t}</option>`).join("")}</select></div>
        <div id="camera-transforms">`;for(let t=0;t<i.cameraCount;t++){const n=i.cameras[t]||{name:`cam${t}`,x:0,y:0,z:0,roll:0,pitch:0,yaw:0};e+=`
        <div class="config-divider"></div>
        <div class="config-section-title">Camera ${t+1}</div>
        <div class="config-group"><label class="config-label">Name</label>
        <input class="config-input" id="cam-${t}-name" value="${n.name}" placeholder="camera_${t}"></div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Translation (meters from robot center)</div>
        <div class="config-row">
            ${Ve(`cam-${t}-x`,"X (forward)",n.x,"0","0.001")}
            ${Ve(`cam-${t}-y`,"Y (left)",n.y,"0","0.001")}
            ${Ve(`cam-${t}-z`,"Z (up)",n.z,"0","0.001")}
        </div>
        <div class="config-section-title" style="font-size:0.6rem;margin-top:8px">Rotation (degrees)</div>
        <div class="config-row">
            ${Ve(`cam-${t}-roll`,"Roll",n.roll,"0","0.1")}
            ${Ve(`cam-${t}-pitch`,"Pitch",n.pitch,"0","0.1")}
            ${Ve(`cam-${t}-yaw`,"Yaw",n.yaw,"0","0.1")}
        </div>`}return e+="</div>",e}function v0(){var i;(i=document.getElementById("cfg-cam-count"))==null||i.addEventListener("change",e=>{Re.updateVision({cameraCount:parseInt(e.target.value)}),va(Re.getState().vision.system)})}function _0(i,e,t){const n=i.statemachine;e.textContent="STATE MACHINE",t.innerHTML=`
        <a href="https://ray260508.github.io/StateGraphGenerator/" target="_blank" class="btn-primary" style="display:inline-flex;text-decoration:none;justify-content:center;">OPEN STATE GRAPH GENERATOR</a>
        <div class="config-hint">Design your state graph externally, then paste JSON below.</div>
        <div class="config-group"><label class="config-label">State Graph JSON</label>
        <textarea class="config-input" id="cfg-sm-json" rows="8" placeholder='{"nodes":[],"edges":[]}' style="resize:vertical;font-family:var(--font-mono);font-size:0.75rem;">${n.jsonData||""}</textarea></div>
    `}function y0(i){var t,n,s,r,o,a,l,c,d,u,h,f,g,v,m,p,E,x,y,D,A,w,I,S,M,R,V,F,$,X,G,K,H,te,le;const e=Re.getState();if(i==="chassis"){const oe={driveMotor:((t=document.getElementById("cfg-drive-motor"))==null?void 0:t.value)||null,turnMotor:((n=document.getElementById("cfg-turn-motor"))==null?void 0:n.value)||null,gyro:((s=document.getElementById("cfg-gyro"))==null?void 0:s.value)||null,gyroCanId:parseInt((r=document.getElementById("can-gyro"))==null?void 0:r.value)||50,gearRatio:parseFloat((o=document.getElementById("cfg-gear-ratio"))==null?void 0:o.value)||null,turnGearRatio:parseFloat((a=document.getElementById("cfg-turn-ratio"))==null?void 0:a.value)||null,wheelDiameter:parseFloat((l=document.getElementById("cfg-wheel-diam"))==null?void 0:l.value)||null,maxSpeed:parseFloat((c=document.getElementById("cfg-max-speed"))==null?void 0:c.value)||null,trackWidth:parseFloat((d=document.getElementById("cfg-track-width"))==null?void 0:d.value)||null},ve=(u=document.getElementById("cfg-swerve-preset"))==null?void 0:u.value;if(ve&&ws[ve]&&ve!=="custom"){const W=ws[ve];oe.gearRatio=oe.gearRatio||W.driveRatio,oe.turnGearRatio=oe.turnGearRatio||W.turnRatio,oe.wheelDiameter=oe.wheelDiameter||W.wheelDiam,oe.swervePreset=ve}const Xe=(h=document.getElementById("cfg-swerve-encoder"))==null?void 0:h.value;Xe&&(oe.swerveEncoderType=Xe),e.chassis.type==="swerve"?oe.canIds={fl_drive:parseInt((f=document.getElementById("can-fl-drive"))==null?void 0:f.value)||11,fl_turn:parseInt((g=document.getElementById("can-fl-turn"))==null?void 0:g.value)||12,fl_encoder:parseInt((v=document.getElementById("can-fl-enc"))==null?void 0:v.value)||13,fr_drive:parseInt((m=document.getElementById("can-fr-drive"))==null?void 0:m.value)||21,fr_turn:parseInt((p=document.getElementById("can-fr-turn"))==null?void 0:p.value)||22,fr_encoder:parseInt((E=document.getElementById("can-fr-enc"))==null?void 0:E.value)||23,bl_drive:parseInt((x=document.getElementById("can-bl-drive"))==null?void 0:x.value)||31,bl_turn:parseInt((y=document.getElementById("can-bl-turn"))==null?void 0:y.value)||32,bl_encoder:parseInt((D=document.getElementById("can-bl-enc"))==null?void 0:D.value)||33,br_drive:parseInt((A=document.getElementById("can-br-drive"))==null?void 0:A.value)||41,br_turn:parseInt((w=document.getElementById("can-br-turn"))==null?void 0:w.value)||42,br_encoder:parseInt((I=document.getElementById("can-br-enc"))==null?void 0:I.value)||43}:oe.tankCanIds={left_leader:parseInt((S=document.getElementById("can-ll"))==null?void 0:S.value)||11,left_follower:parseInt((M=document.getElementById("can-lf"))==null?void 0:M.value)||12,right_leader:parseInt((R=document.getElementById("can-rl"))==null?void 0:R.value)||21,right_follower:parseInt((V=document.getElementById("can-rf"))==null?void 0:V.value)||22},Re.updateChassis(oe)}else if(e.mechanisms.hasOwnProperty(i))x0(i,e);else if(i==="vision"){const oe=Re.getState().vision;for(let ve=0;ve<oe.cameraCount;ve++)Re.updateCamera(ve,{name:((F=document.getElementById(`cam-${ve}-name`))==null?void 0:F.value)||`cam${ve}`,x:parseFloat(($=document.getElementById(`cam-${ve}-x`))==null?void 0:$.value)||0,y:parseFloat((X=document.getElementById(`cam-${ve}-y`))==null?void 0:X.value)||0,z:parseFloat((G=document.getElementById(`cam-${ve}-z`))==null?void 0:G.value)||0,roll:parseFloat((K=document.getElementById(`cam-${ve}-roll`))==null?void 0:K.value)||0,pitch:parseFloat((H=document.getElementById(`cam-${ve}-pitch`))==null?void 0:H.value)||0,yaw:parseFloat((te=document.getElementById(`cam-${ve}-yaw`))==null?void 0:te.value)||0});Re.updateVision({configured:oe.enabled&&oe.system})}else i==="statemachine"&&Re.updateStateMachine({jsonData:((le=document.getElementById("cfg-sm-json"))==null?void 0:le.value)||""})}function x0(i,e){var d,u,h,f,g,v,m,p,E,x,y,D,A,w,I,S,M,R,V,F,$,X,G,K,H,te,le,oe,ve,Xe,W,Q,me,ie,Te,Ce,Ne,st,$e,dt,O,Dt,He,ze,Se,tt,Me,T,_,U,q,Z,j,ge,se,pe;const t=e.mechanisms[i];if(!t)return;if(i==="arm"){const ke=parseInt((d=document.getElementById("cfg-arm-dof"))==null?void 0:d.value)||t.dof,J=[];for(let re=0;re<ke;re++){const we=((u=document.getElementById(`cfg-arm-joint-${re}-hasfollower`))==null?void 0:u.checked)||!1,ue=[{type:((h=document.getElementById(`cfg-arm-joint-${re}-leader-motor`))==null?void 0:h.value)||null,canId:parseInt((f=document.getElementById(`cfg-arm-joint-${re}-leader-canid`))==null?void 0:f.value)||30+re*2,inverted:((g=document.getElementById(`cfg-arm-joint-${re}-leader-inv`))==null?void 0:g.checked)||!1,role:"leader"}];we&&ue.push({type:((v=document.getElementById(`cfg-arm-joint-${re}-follower-motor`))==null?void 0:v.value)||null,canId:parseInt((m=document.getElementById(`cfg-arm-joint-${re}-follower-canid`))==null?void 0:m.value)||31+re*2,inverted:((p=document.getElementById(`cfg-arm-joint-${re}-follower-inv`))==null?void 0:p.checked)||!1,role:"follower"}),J.push({motors:ue,gearRatio:parseFloat((E=document.getElementById(`cfg-arm-joint-${re}-ratio`))==null?void 0:E.value)||null,encoder:((x=document.getElementById(`cfg-arm-joint-${re}-encoder`))==null?void 0:x.value)||null,encoderId:parseInt((y=document.getElementById(`cfg-arm-joint-${re}-encoder-id`))==null?void 0:y.value)||31+re*2,motorConfig:{currentLimit:parseInt((D=document.getElementById(`cfg-arm-joint-${re}-curlimit`))==null?void 0:D.value)||40,brakeMode:!0},softLimitFwd:parseFloat((A=document.getElementById(`cfg-arm-joint-${re}-softfwd`))==null?void 0:A.value)||null,softLimitRev:parseFloat((w=document.getElementById(`cfg-arm-joint-${re}-softrev`))==null?void 0:w.value)||null,pid:{kP:parseFloat((I=document.getElementById(`cfg-arm-joint-${re}-kp`))==null?void 0:I.value)||0,kI:parseFloat((S=document.getElementById(`cfg-arm-joint-${re}-ki`))==null?void 0:S.value)||0,kD:parseFloat((M=document.getElementById(`cfg-arm-joint-${re}-kd`))==null?void 0:M.value)||0,kS:0,kV:0,kA:0}})}const fe=(R=document.getElementById(`cfg-${i}-attached`))==null?void 0:R.value;Re.updateMechanism("arm",{dof:ke,joints:J,attachedTo:fe||t.attachedTo});return}t.motors.forEach((ke,J)=>{var fe,re,we,ue;Re.updateMotor(i,J,{type:((fe=document.getElementById(`cfg-${i}-motor-${J}`))==null?void 0:fe.value)||null,canId:parseInt((re=document.getElementById(`cfg-${i}-canid-${J}`))==null?void 0:re.value)||ke.canId,inverted:((we=document.getElementById(`cfg-${i}-inv-${J}`))==null?void 0:we.checked)||!1,role:((ue=document.getElementById(`cfg-${i}-role-${J}`))==null?void 0:ue.value)||ke.role})});const n=(V=document.querySelector(`input[name="cfg-${i}-brakemode"]:checked`))==null?void 0:V.value,s={currentLimit:parseInt((F=document.getElementById(`cfg-${i}-curlimit`))==null?void 0:F.value)||40,brakeMode:n!=="coast"},r=t.pid?{kP:parseFloat(($=document.getElementById(`cfg-${i}-kp`))==null?void 0:$.value)||0,kI:parseFloat((X=document.getElementById(`cfg-${i}-ki`))==null?void 0:X.value)||0,kD:parseFloat((G=document.getElementById(`cfg-${i}-kd`))==null?void 0:G.value)||0,kS:parseFloat((K=document.getElementById(`cfg-${i}-ks`))==null?void 0:K.value)||0,kV:parseFloat((H=document.getElementById(`cfg-${i}-kv`))==null?void 0:H.value)||0,kA:parseFloat((te=document.getElementById(`cfg-${i}-ka`))==null?void 0:te.value)||0}:void 0,o=(le=document.getElementById(`cfg-${i}-attached`))==null?void 0:le.value,a={gearRatio:parseFloat((oe=document.getElementById(`cfg-${i}-ratio`))==null?void 0:oe.value)||null,motorConfig:s,attachedTo:o||t.attachedTo};r&&(a.pid=r),"rampRate"in t&&(a.rampRate=parseFloat((ve=document.getElementById(`cfg-${i}-ramp`))==null?void 0:ve.value)||0),i==="elevator"&&(a.encoder=((Xe=document.getElementById("cfg-elevator-encoder"))==null?void 0:Xe.value)||null,a.encoderId=parseInt((W=document.getElementById("cfg-elevator-enc-id"))==null?void 0:W.value)||53,a.minHeight=parseFloat((Q=document.getElementById("cfg-elevator-min"))==null?void 0:Q.value)||0,a.maxHeight=parseFloat((me=document.getElementById("cfg-elevator-max"))==null?void 0:me.value)||null,a.softLimitFwd=parseFloat((ie=document.getElementById("cfg-elevator-softfwd"))==null?void 0:ie.value)||null,a.softLimitRev=parseFloat((Te=document.getElementById("cfg-elevator-softrev"))==null?void 0:Te.value)||null,a.motionMaxVel=parseFloat((Ce=document.getElementById("cfg-elevator-mmvel"))==null?void 0:Ce.value)||null,a.motionMaxAccel=parseFloat((Ne=document.getElementById("cfg-elevator-mmacc"))==null?void 0:Ne.value)||null),i==="shooter"&&(a.maxRPM=parseInt((st=document.getElementById("cfg-shooter-rpm"))==null?void 0:st.value)||null,(t.shooterType==="adjustable"||t.shooterType==="adjustable_turret")&&(a.pivotMotor={type:(($e=document.getElementById("cfg-shooter-pivot-motor"))==null?void 0:$e.value)||null,canId:parseInt((dt=document.getElementById("cfg-shooter-pivot-canid"))==null?void 0:dt.value)||24,inverted:((O=document.getElementById("cfg-shooter-pivot-inv"))==null?void 0:O.checked)||!1}),t.shooterType==="adjustable_turret"&&(a.turretMotor={type:((Dt=document.getElementById("cfg-shooter-turret-motor"))==null?void 0:Dt.value)||null,canId:parseInt((He=document.getElementById("cfg-shooter-turret-canid"))==null?void 0:He.value)||25,inverted:((ze=document.getElementById("cfg-shooter-turret-inv"))==null?void 0:ze.checked)||!1})),i==="intake"&&(a.hasSensor=((Se=document.getElementById("cfg-intake-sensor"))==null?void 0:Se.checked)||!1,a.sensorPortType=((tt=document.getElementById("cfg-intake-sensor-type"))==null?void 0:tt.value)||"dio",a.sensorPort=parseInt((Me=document.getElementById("cfg-intake-sensor-port"))==null?void 0:Me.value)||0),i==="launcher"&&(a.softLimitFwd=parseFloat((T=document.getElementById("cfg-launcher-softfwd"))==null?void 0:T.value)||null,a.softLimitRev=parseFloat((_=document.getElementById("cfg-launcher-softrev"))==null?void 0:_.value)||null,a.hasSensor=((U=document.getElementById("cfg-launcher-sensor"))==null?void 0:U.checked)||!1,a.sensorPortType=((q=document.getElementById("cfg-launcher-sensor-type"))==null?void 0:q.value)||"dio",a.sensorPort=parseInt((Z=document.getElementById("cfg-launcher-sensor-port"))==null?void 0:Z.value)||1);const l=parseFloat((j=document.getElementById(`cfg-${i}-mass`))==null?void 0:j.value),c=parseFloat((ge=document.getElementById(`cfg-${i}-moi`))==null?void 0:ge.value);(!isNaN(l)||!isNaN(c))&&(a.physics={massKg:isNaN(l)?((se=t.physics)==null?void 0:se.massKg)||null:l,moiKgM2:isNaN(c)?((pe=t.physics)==null?void 0:pe.moiKgM2)||null:c}),Re.updateMechanism(i,a)}function Os(i,e){document.querySelectorAll(`[data-name="${i}"]`).forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(`[data-name="${i}"]`).forEach(n=>n.classList.remove("active")),t.classList.add("active"),e(t.dataset.value)})})}function b0(){const i=document.getElementById("particle-canvas");if(!i)return;const e=i.getContext("2d");let t=[],n;function s(){i.width=window.innerWidth,i.height=window.innerHeight}function r(){t=[];const a=Math.floor(i.width*i.height/15e3);for(let l=0;l<a;l++)t.push({x:Math.random()*i.width,y:Math.random()*i.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,alpha:Math.random()*.4+.1})}function o(){e.clearRect(0,0,i.width,i.height);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){const c=t[a].x-t[l].x,d=t[a].y-t[l].y,u=Math.sqrt(c*c+d*d);u<120&&(e.beginPath(),e.moveTo(t[a].x,t[a].y),e.lineTo(t[l].x,t[l].y),e.strokeStyle=`rgba(213,0,28,${.08*(1-u/120)})`,e.lineWidth=.5,e.stroke())}t.forEach(a=>{a.x+=a.vx,a.y+=a.vy,(a.x<0||a.x>i.width)&&(a.vx*=-1),(a.y<0||a.y>i.height)&&(a.vy*=-1),e.beginPath(),e.arc(a.x,a.y,a.r,0,Math.PI*2),e.fillStyle=`rgba(213,0,28,${a.alpha})`,e.fill()}),n=requestAnimationFrame(o)}return s(),r(),o(),window.addEventListener("resize",()=>{s(),r()}),()=>cancelAnimationFrame(n)}function Nn(i,e="info"){const t=document.querySelector(".toast");t&&t.remove();const n=document.createElement("div");n.className=`toast ${e} toast-auto-hide`,n.innerHTML=`${e==="success"?"✓":e==="error"?"✕":"ℹ"} ${i}`,document.body.appendChild(n),setTimeout(()=>n.remove(),3e3)}const Mt={frcYear:"2026",gradleRIO:"2026.2.1",javaVersion:"VERSION_17",vendordeps:{advantagekit:{fileName:"AdvantageKit.json",name:"AdvantageKit",version:"2026.1.0",uuid:"d94427e6-503d-4de9-b18b-474d5fd2a645",mavenUrls:["https://github.com/Mechanical-Advantage/AdvantageKit/releases/download/v2026.1.0/"],javaDependencies:[{groupId:"org.littletonrobotics.akit",artifactId:"akit-java",version:"2026.1.0"}]},phoenix6:{fileName:"Phoenix6.json",name:"CTRE-Phoenix (v6)",version:"26.0.0",vendorKey:"ctre",mavenUrls:["https://maven.ctr-electronics.com/release/"],jsonUrl:"https://maven.ctr-electronics.com/release/com/ctre/phoenix6/latest/Phoenix6-frc2026-latest.json",javaDependencies:[{groupId:"com.ctre.phoenix6",artifactId:"wpiapi-java",version:"26.0.0"}]},revlib:{fileName:"REVLib.json",name:"REVLib",version:"2026.1.1",vendorKey:"rev",mavenUrls:["https://maven.revrobotics.com/release/"],jsonUrl:"https://software-metadata.revrobotics.com/REVLib-2026.json",javaDependencies:[{groupId:"com.revrobotics.frc",artifactId:"REVLib-java",version:"2026.1.1"}]},navx:{fileName:"NavX.json",name:"NavX",version:"2026.2.0",vendorKey:"kauai",mavenUrls:["https://dev.studica.com/maven/release/2026/"],jsonUrl:"https://dev.studica.com/releases/2026/NavX.json",javaDependencies:[{groupId:"com.kauailabs.navx.frc",artifactId:"navx-frc-java",version:"2026.2.0"}]},photonlib:{fileName:"photonlib.json",name:"photonlib",version:"2026.2.1",vendorKey:"photonvision",mavenUrls:["https://maven.photonvision.org/repository/internal","https://maven.photonvision.org/repository/snapshots"],jsonUrl:"https://maven.photonvision.org/repository/internal/org/photonvision/photonlib-json/1.0/photonlib-json-1.0.json",javaDependencies:[{groupId:"org.photonvision",artifactId:"photonlib-java",version:"2026.2.1"}]},pathplanner:{fileName:"PathplannerLib.json",name:"PathplannerLib",version:"2026.3.0",mavenUrls:["https://3015rangerrobotics.github.io/pathplannerlib/repo"],jsonUrl:"https://3015rangerrobotics.github.io/pathplannerlib/PathplannerLib.json",javaDependencies:[{groupId:"com.pathplanner.lib",artifactId:"PathplannerLib-java",version:"2026.3.0"}]}},pathplannerFormat:"2026.0",motorApi:{ctre:{imports:["com.ctre.phoenix6.hardware.TalonFX","com.ctre.phoenix6.controls.VoltageOut","com.ctre.phoenix6.controls.PositionVoltage","com.ctre.phoenix6.configs.TalonFXConfiguration","com.ctre.phoenix6.signals.NeutralModeValue","com.ctre.phoenix6.signals.InvertedValue"]},rev:{imports:["com.revrobotics.spark.SparkMax","com.revrobotics.spark.SparkLowLevel.MotorType","com.revrobotics.spark.config.SparkMaxConfig","com.revrobotics.spark.config.SparkBaseConfig.IdleMode","com.revrobotics.RelativeEncoder","com.revrobotics.spark.SparkBase.ControlType"]}},advantagekitApi:{robotBaseClass:"LoggedRobot",robotBaseImport:"org.littletonrobotics.junction.LoggedRobot",loggerImport:"org.littletonrobotics.junction.Logger",logStart:"Logger.start()"},simApi:{getMotorSim:(i,e)=>({falcon500:`DCMotor.getFalcon500(${e})`,krakenx60:`DCMotor.getKrakenX60(${e})`,krakenx44:`DCMotor.getKrakenX60(${e})`,minion:`DCMotor.getFalcon500(${e})`,talonfxs:`DCMotor.getFalcon500(${e})`,neo:`DCMotor.getNEO(${e})`,neo550:`DCMotor.getNeo550(${e})`,vortex:`DCMotor.getNeoVortex(${e})`})[i]||`DCMotor.getNEO(${e})`}};function en(i){var e;return i&&((e=qt[i])==null?void 0:e.vendor)==="ctre"}function vn(i){var e;return i&&((e=qt[i])==null?void 0:e.vendor)==="rev"}function M0(i){return en(i)?Mt.motorApi.ctre.imports.map(e=>`import ${e};`).join(`
`)+`
`:vn(i)?Mt.motorApi.rev.imports.map(e=>`import ${e};`).join(`
`)+`
`:""}function S0(i,e){let t="";return i.forEach((n,s)=>{const r=s===0?"leader":`follower${s}`,o=n.inverted?"InvertedValue.Clockwise_Positive":"InvertedValue.CounterClockwise_Positive";en(n.type)?t+=`
        {
            var cfg = new TalonFXConfiguration();
            cfg.CurrentLimits.StatorCurrentLimit = ${e}.CURRENT_LIMIT;
            cfg.CurrentLimits.StatorCurrentLimitEnable = true;
            cfg.MotorOutput.NeutralMode = ${e}.BRAKE_MODE ? NeutralModeValue.Brake : NeutralModeValue.Coast;
            cfg.MotorOutput.Inverted = ${o};
            ${r}.getConfigurator().apply(cfg);
            ${r}.setPosition(0);
        }`:vn(n.type)&&(t+=`
        {
            var cfg = new SparkMaxConfig();
            cfg.idleMode(${e}.BRAKE_MODE ? IdleMode.kBrake : IdleMode.kCoast);
            cfg.smartCurrentLimit(${e}.CURRENT_LIMIT);
            ${r}.configure(cfg, null, null);
            ${r}.getEncoder().setPosition(0);
        }`)}),t}function E0(i){const e=i[0];return en(e==null?void 0:e.type)?"leader.getPosition().getValueAsDouble()":vn(e==null?void 0:e.type)?"encoder.getPosition()":"0.0"}function T0(i){return qt[i.driveMotor],i.tankCanIds,en(i.driveMotor)?`package frc.robot.subsystems.drive;

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
`:null}function w0(){return`package frc.robot.subsystems.drive;

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
`}function A0(i){return`package frc.robot.subsystems.drive;

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
`}function R0(){return`package frc.robot.subsystems.drive;

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
`}function Vc(i,e,t){if(i==="arm"){let h=`import frc.robot.Constants.ArmConstants;
`,f="",g=`        // Initialize each joint
`,v="",m="";return e.joints.forEach((E,x)=>{const y=E.motors[0],D=E.motors.length>1;y&&y.type&&(en(y.type)?(h+=`import com.ctre.phoenix6.hardware.TalonFX;
import com.ctre.phoenix6.controls.VoltageOut;
`,f+=`    private final TalonFX joint${x}Motor = new TalonFX(ArmConstants.JOINT_${x+1}_MOTOR_ID);
`,g+=`        var joint${x}Cfg = new com.ctre.phoenix6.configs.TalonFXConfiguration();
`,g+=`        joint${x}Cfg.MotorOutput.Inverted = ArmConstants.JOINT_${x+1}_MOTOR_0_INVERTED ? com.ctre.phoenix6.signals.InvertedValue.Clockwise_Positive : com.ctre.phoenix6.signals.InvertedValue.CounterClockwise_Positive;
`,g+=`        joint${x}Motor.getConfigurator().apply(joint${x}Cfg);
`,D&&(f+=`    private final TalonFX joint${x}Follower = new TalonFX(ArmConstants.JOINT_${x+1}_FOLLOWER_1_ID);
`,g+=`        joint${x}Follower.setControl(new com.ctre.phoenix6.controls.Follower(joint${x}Motor.getDeviceID()));
`),v+=`        inputs.positionRad[${x}] = joint${x}Motor.getPosition().getValueAsDouble() * 2 * Math.PI;
`,v+=`        inputs.velocityRadPerSec[${x}] = joint${x}Motor.getVelocity().getValueAsDouble() * 2 * Math.PI;
`,v+=`        inputs.appliedVolts[${x}] = joint${x}Motor.getMotorVoltage().getValueAsDouble();
`,v+=`        inputs.currentAmps[${x}] = joint${x}Motor.getStatorCurrent().getValueAsDouble();
`):vn(y.type)&&(h+=`import com.revrobotics.spark.SparkMax;
import com.revrobotics.spark.SparkLowLevel.MotorType;
`,f+=`    private final SparkMax joint${x}Motor = new SparkMax(ArmConstants.JOINT_${x+1}_MOTOR_ID, MotorType.kBrushless);
`,g+=`        var joint${x}Cfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,g+=`        joint${x}Cfg.inverted(ArmConstants.JOINT_${x+1}_MOTOR_0_INVERTED);
`,g+=`        joint${x}Motor.configure(joint${x}Cfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`,D&&(f+=`    private final SparkMax joint${x}Follower = new SparkMax(ArmConstants.JOINT_${x+1}_FOLLOWER_1_ID, MotorType.kBrushless);
`,g+=`        var joint${x}FollowerCfg = new com.revrobotics.spark.config.SparkMaxConfig();
`,g+=`        joint${x}FollowerCfg.follow(joint${x}Motor);
`,g+=`        joint${x}Follower.configure(joint${x}FollowerCfg, com.revrobotics.spark.SparkBase.ResetMode.kResetSafeParameters, com.revrobotics.spark.SparkBase.PersistMode.kPersistParameters);
`),v+=`        inputs.positionRad[${x}] = joint${x}Motor.getEncoder().getPosition();
`,v+=`        inputs.velocityRadPerSec[${x}] = joint${x}Motor.getEncoder().getVelocity();
`,v+=`        inputs.appliedVolts[${x}] = joint${x}Motor.getAppliedOutput() * joint${x}Motor.getBusVoltage();
`,v+=`        inputs.currentAmps[${x}] = joint${x}Motor.getOutputCurrent();
`),m+=`
    @Override
    public void setJointVolts(int jointIndex, double volts) {
        if (jointIndex == ${x}) {
            ${en(y.type)?`joint${x}Motor.setControl(new VoltageOut(volts));`:`joint${x}Motor.setVoltage(volts);`}
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
`}const n=e.motors||[],s=n[0];if(!(s!=null&&s.type))return null;const r=`${t}Constants`;let o="",a="",l="";n.forEach((h,f)=>{const g=f===0?"leader":`follower${f}`,v=f===0?"MOTOR_ID":`FOLLOWER_${f}_ID`;en(h.type)?(o+=`    private final TalonFX ${g} = new TalonFX(${r}.${v});
`,f===0&&(o+=`    private final VoltageOut voltageReq = new VoltageOut(0);
`)):vn(h.type)&&(o+=`    private final SparkMax ${g} = new SparkMax(${r}.${v}, MotorType.kBrushless);
`,f===0&&(o+=`    private final RelativeEncoder encoder = leader.getEncoder();
`)),f>0&&(en(h.type)?l+=`        ${g}.setControl(new com.ctre.phoenix6.controls.Follower(leader.getDeviceID()));
`:vn(h.type)&&(l+=`        ${g}.follow(leader);
`))}),a=S0(n,r);const c=en(s.type)?"        leader.setControl(voltageReq.withOutput(volts));":"        leader.setVoltage(volts);";let d="",u="";if(i==="shooter"&&(e.shooterType==="adjustable"||e.shooterType==="adjustable_turret")){const h=e.pivotMotor;h&&h.type&&(en(h.type)?(o+=`    private final TalonFX pivot = new TalonFX(${r}.PIVOT_MOTOR_ID);
`,a+=`
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
`):vn(h.type)&&(o+=`    private final SparkMax pivot = new SparkMax(${r}.PIVOT_MOTOR_ID, MotorType.kBrushless);
`,a+=`
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
`))}if(i==="shooter"&&e.shooterType==="adjustable_turret"){const h=e.turretMotor;h&&h.type&&(en(h.type)?(o+=`    private final TalonFX turret = new TalonFX(${r}.TURRET_MOTOR_ID);
`,a+=`
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
`):vn(h.type)&&(o+=`    private final SparkMax turret = new SparkMax(${r}.TURRET_MOTOR_ID, MotorType.kBrushless);
`,a+=`
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
`))}if(i==="launcher"&&e.launcherType==="arm_claw"){const h=e.clawMotor;h&&h.type&&(en(h.type)?(o+=`    private final TalonFX claw = new TalonFX(${r}.CLAW_MOTOR_ID);
`,a+=`
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
`):vn(h.type)&&(o+=`    private final SparkMax claw = new SparkMax(${r}.CLAW_MOTOR_ID, MotorType.kBrushless);
`,a+=`
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

${M0(s.type)}
import frc.robot.Constants.${t}Constants;

public class ${t}IOReal implements ${t}IO {
${o}
    public ${t}IOReal() {${a}
${l}    }

    @Override
    public void updateInputs(${t}IOInputs inputs) {
        inputs.positionRad = ${E0(n)};
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
`}function Hc(i,e,t,n){if(i==="arm"){let a="",l="",c="";return e.joints.forEach((d,u)=>{var m;const h=d.motors[0],f=((m=h==null?void 0:h.type)==null?void 0:m.toLowerCase())||"neo",g=d.motors.length,v=Mt.simApi.getMotorSim(f,g);a+=`    private final DCMotorSim joint${u}Sim = new DCMotorSim(
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
${a}
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
`}let s="",r="",o="";return i==="shooter"&&(e.shooterType==="adjustable"||e.shooterType==="adjustable_turret")&&(s+=`
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
`,o+=`
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
`,o+=`
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
        LinearSystemId.createDCMotorSystem(${(()=>{var u;const a=e.motors||[],l=a[0],c=((u=l==null?void 0:l.type)==null?void 0:u.toLowerCase())||"neo",d=a.length;return Mt.simApi.getMotorSim(c,d)})()}, 0.002, 10.0),
        ${(()=>{var u;const a=e.motors||[],l=a[0],c=((u=l==null?void 0:l.type)==null?void 0:u.toLowerCase())||"neo",d=a.length;return Mt.simApi.getMotorSim(c,d)})()}, 0.002, 0.01);
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
    public void setVoltage(double volts) { appliedVolts = volts; }${o}

    @Override
    public void stop() { appliedVolts = 0; }

    @Override
    public void configurePID(double kP, double kI, double kD) {}
}
`}const _a=[{fwd_quasi:"a()",rev_quasi:"b()",fwd_dyn:"x()",rev_dyn:"y()"},{fwd_quasi:"povUp()",rev_quasi:"povDown()",fwd_dyn:"povRight()",rev_dyn:"povLeft()"},{fwd_quasi:"leftBumper()",rev_quasi:"rightBumper()",fwd_dyn:"leftTrigger()",rev_dyn:"rightTrigger()"},{fwd_quasi:"back()",rev_quasi:"start()",fwd_dyn:"back().and(controller.a())",rev_dyn:"start().and(controller.a())"}];function C0(i,e){const t=[];if(e&&t.push({name:"drive",varName:"drive",displayName:"Drive"}),t.push(...i),t.length===0)return"";let n=`
        // ═══════════════════════════════════════════════════════════════
`;return n+=`        // AUTO-GENERATED SYSID CHARACTERIZATION BINDINGS
`,n+=`        // Active in ALL modes. Hold the assigned buttons to run routines.
`,n+=`        // After collecting data, use WPILib SysId tool to analyze logs.
`,n+=`        // ═══════════════════════════════════════════════════════════════
`,t.length<=_a.length?t.forEach((s,r)=>{const o=_a[r];n+=`
        // --- ${s.displayName} SysId (${I0(r)}) ---
`,n+=`        controller.${o.fwd_quasi}.whileTrue(${s.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.${o.rev_quasi}.whileTrue(${s.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,n+=`        controller.${o.fwd_dyn}.whileTrue(${s.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,n+=`        controller.${o.rev_dyn}.whileTrue(${s.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}):(n+=`        // NOTE: More than 4 SysId-capable subsystems. Using dashboard chooser.
`,n+=`        // Select mechanism on SmartDashboard "SysId Mechanism" chooser,
`,n+=`        // then use A/B/X/Y to run quasistatic/dynamic routines.
`,n+=D0(t)),n}function I0(i){return["A/B/X/Y buttons","D-Pad","Bumpers/Triggers","Back/Start"][i]||`Pool ${i}`}function D0(i){let e="";return e+=`
        // SysId mechanism selector
`,e+=`        sysIdChooser = new edu.wpi.first.wpilibj.smartdashboard.SendableChooser<>();
`,i.forEach((t,n)=>{e+=`        sysIdChooser.${n===0?"setDefaultOption":"addOption"}("${t.displayName}", "${t.varName}");
`}),e+=`        edu.wpi.first.wpilibj.smartdashboard.SmartDashboard.putData("SysId Mechanism", sysIdChooser);
`,e+=`
`,i.forEach(t=>{e+=`        controller.a().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kForward));
`,e+=`        controller.b().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdQuasistatic(SysIdRoutine.Direction.kReverse));
`,e+=`        controller.x().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kForward));
`,e+=`        controller.y().and(() -> "${t.varName}".equals(sysIdChooser.getSelected())).whileTrue(${t.varName}.sysIdDynamic(SysIdRoutine.Direction.kReverse));
`}),e}function P0(i){return i>_a.length?`    private final edu.wpi.first.wpilibj.smartdashboard.SendableChooser<String> sysIdChooser;
`:""}function L0(i){return`import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
`}const Gi={FULL:"full",ADD_MECHANISM:"add",LIBRARIES_ONLY:"libs"};function Eo(i,e,t=Gi.FULL){const n=Object.entries(i.mechanisms).filter(([,s])=>s.configured).map(([s])=>s);return{schemaVersion:"1.0",generatedAt:new Date().toISOString(),generatorVersion:"2.0",mode:t,projectName:e,framework:i.framework||"advantagekit",libraries:{gradleRIO:Mt.gradleRIO,advantagekit:Mt.vendordeps.advantagekit.version,phoenix6:Mt.vendordeps.phoenix6.version,revlib:Mt.vendordeps.revlib.version,pathplanner:Mt.vendordeps.pathplanner.version,photonlib:Mt.vendordeps.photonlib.version},chassis:i.chassis.configured?{type:i.chassis.type,driveMotor:i.chassis.driveMotor,gyro:i.chassis.gyro}:null,mechanisms:n,vision:i.vision.configured?i.vision.system:null,generatedFiles:[]}}function O0(i,e,t){const n=e.mechanisms[i];if(!n)return"";const s=i.charAt(0).toUpperCase()+i.slice(1);let r=`## ➕ Merge Instructions: Add ${s}

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
`,n.motors&&n.motors.forEach((o,a)=>{const l=a===0?"MOTOR_ID":`FOLLOWER_${a}_ID`;r+=`    public static final int ${l} = ${o.canId};
`}),n.pid&&(r+=`    public static final double kP = ${n.pid.kP||0};
`,r+=`    public static final double kI = ${n.pid.kI||0};
`,r+=`    public static final double kD = ${n.pid.kD||0};
`,r+=`    public static final double kS = ${n.pid.kS||0};
`,r+=`    public static final double kV = ${n.pid.kV||0};
`),r+=`}
`,r+="```\n\n",r+=`> **@generated marker**: Add \`// @generated:${i}\` comments around any generated blocks
`,r+=`> so future regenerations can identify and update them automatically.

`,r}function To(i,e,t,n){return t.generatedFiles=n,i.file(`${e}/.robot-generator-manifest.json`,JSON.stringify(t,null,2)),t}async function N0(i,e="FRCRobotProject",t=Gi.FULL){const n=new JSZip,s=e,r=i.framework||"advantagekit",o=[];function a(h,f){n.file(h,f),o.push(h.replace(`${s}/`,""))}if(t===Gi.LIBRARIES_ONLY){a(`${s}/build.gradle`,zc()),Gc(n,s,i);const h=Eo(i,e,t);To(n,s,h,o);const f=await n.generateAsync({type:"blob"}),g=document.createElement("a");g.href=URL.createObjectURL(f),g.download=`${e}-libraries.zip`,g.click();return}if(t===Gi.ADD_MECHANISM){const h=Object.entries(i.mechanisms).filter(([,E])=>E.configured),f=`${s}/src/main/java/frc/robot`;let g=`# Merge Instructions

Generated: ${new Date().toISOString()}

`;h.forEach(([E,x])=>{$c(n,f,E,x,i,r),g+=O0(E,i,r)}),a(`${s}/MERGE_INSTRUCTIONS.md`,g),a(`${s}/Constants-additions.java`,U0(i));const v=Eo(i,e,t);To(n,s,v,o);const m=await n.generateAsync({type:"blob"}),p=document.createElement("a");p.href=URL.createObjectURL(m),p.download=`${e}-add-mechanism.zip`,p.click();return}a(`${s}/build.gradle`,zc()),a(`${s}/README.md`,X0(i,e)),a(`${s}/settings.gradle`,`pluginManagement {
  repositories {
    mavenLocal()
    gradlePluginPortal()
    maven { url "https://frcmaven.wpi.edu/artifactory/release" }
  }
}
`),Gc(n,s,i);const l=`${s}/src/main/java/frc/robot`;a(`${l}/Main.java`,F0()),a(`${l}/Robot.java`,k0(r)),a(`${l}/Constants.java`,B0(i)),a(`${l}/RobotContainer.java`,V0(i)),i.chassis.configured&&H0(n,l,i,r),Object.entries(i.mechanisms).forEach(([h,f])=>{f.configured&&$c(n,l,h,f,i,r)}),i.vision.configured&&z0(n,l,i),i.statemachine.configured&&G0(n,l),i.stateMachineIntegration&&i.statemachine.configured&&$0(n,l),i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&(W0(n,s),i.chassis.type==="swerve"&&j0(n,l)),n.file(`${s}/src/main/deploy/.gitkeep`,"");const c=Eo(i,e,Gi.FULL);To(n,s,c,o);const d=await n.generateAsync({type:"blob"}),u=document.createElement("a");u.href=URL.createObjectURL(d),u.download=`${e}.zip`,u.click()}function U0(i){let e=`// === ADD THESE TO YOUR EXISTING Constants.java ===

`;return Object.entries(i.mechanisms).forEach(([t,n])=>{if(!n.configured)return;const s=t.charAt(0).toUpperCase()+t.slice(1);e+=`    // @generated:${t}
`,e+=`    public static final class ${s}Constants {
`,(n.motors||[]).forEach((r,o)=>{const a=o===0?"MOTOR_ID":`FOLLOWER_${o}_ID`;e+=`        public static final int ${a} = ${r.canId};
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

`}),e}function zc(i){return`plugins {
    id "java"
    id "edu.wpi.first.GradleRIO" version "${Mt.gradleRIO}"
}
sourceCompatibility = JavaVersion.${Mt.javaVersion}
targetCompatibility = JavaVersion.${Mt.javaVersion}
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
`}function Gc(i,e,t){const n=`${e}/vendordeps`,s=Mt;if(t.framework==="advantagekit"||!t.framework){const a=s.vendordeps.advantagekit;i.file(`${n}/${a.fileName}`,JSON.stringify({fileName:a.fileName,name:a.name,version:a.version,uuid:a.uuid,frcYear:s.frcYear,mavenUrls:a.mavenUrls,jsonUrl:"",javaDependencies:a.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}const r=new Set;if(t.chassis.configured){const a=qt[t.chassis.driveMotor];if(a&&r.add(a.vendor),t.chassis.turnMotor){const l=qt[t.chassis.turnMotor];l&&r.add(l.vendor)}if(t.chassis.gyro){const l=ya[t.chassis.gyro];l&&r.add(l.vendor)}}Object.values(t.mechanisms).forEach(a=>{a.configured&&(a.motors||[]).forEach(l=>{const c=qt[l.type];c&&r.add(c.vendor)})}),t.vision.configured&&t.vision.system==="photonvision"&&r.add("photonvision");const o={ctre:s.vendordeps.phoenix6,rev:s.vendordeps.revlib,kauai:s.vendordeps.navx,photonvision:s.vendordeps.photonlib};if(r.forEach(a=>{const l=o[a];l&&i.file(`${n}/${l.fileName}`,JSON.stringify({fileName:l.fileName,name:l.name,version:l.version,frcYear:s.frcYear,mavenUrls:l.mavenUrls,jsonUrl:l.jsonUrl||"",javaDependencies:l.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}),t.chassis.configured&&t.chassis.pathplannerEnabled!==!1){const a=s.vendordeps.pathplanner;i.file(`${n}/${a.fileName}`,JSON.stringify({fileName:a.fileName,name:a.name,version:a.version,frcYear:s.frcYear,mavenUrls:a.mavenUrls,jsonUrl:a.jsonUrl,javaDependencies:a.javaDependencies,jniDependencies:[],cppDependencies:[]},null,2))}}function F0(){return`package frc.robot;
import edu.wpi.first.wpilibj.RobotBase;
public final class Main {
    private Main() {}
    public static void main(String... args) { RobotBase.startRobot(Robot::new); }
}
`}function k0(i){if(i==="commandbase")return`package frc.robot;
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
`;const e=Mt.advantagekitApi;return`package frc.robot;
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
`}function B0(i){let e=`package frc.robot;

public final class Constants {
    private Constants() {}

`;if(i.chassis.configured){if(e+=`    public static final class DriveConstants {
`,e+=`        public static final String DRIVE_TYPE = "${i.chassis.type}";
`,e+=`        public static final double MAX_SPEED_MPS = ${i.chassis.maxSpeed||4.5};
`,e+=`        public static final double DRIVE_GEAR_RATIO = ${i.chassis.gearRatio||8.45};
`,i.chassis.turnGearRatio&&(e+=`        public static final double TURN_GEAR_RATIO = ${i.chassis.turnGearRatio};
`),e+=`        public static final double WHEEL_DIAMETER_M = ${i.chassis.wheelDiameter||.1524};
`,i.chassis.type==="swerve"){const t=i.chassis.canIds;["fl","fr","bl","br"].forEach(n=>{const s=n.toUpperCase();e+=`        public static final int ${s}_DRIVE_ID = ${t[n+"_drive"]};
`,e+=`        public static final int ${s}_TURN_ID = ${t[n+"_turn"]};
`,e+=`        public static final int ${s}_ENCODER_ID = ${t[n+"_encoder"]};
`})}else{const t=i.chassis.tankCanIds;e+=`        public static final int LEFT_LEADER_ID = ${t.left_leader};
`,e+=`        public static final int LEFT_FOLLOWER_ID = ${t.left_follower};
`,e+=`        public static final int RIGHT_LEADER_ID = ${t.right_leader};
`,e+=`        public static final int RIGHT_FOLLOWER_ID = ${t.right_follower};
`}if(e+=`        public static final int GYRO_ID = ${i.chassis.gyroCanId};
`,e+=`        public static final double TRACK_WIDTH_M = ${i.chassis.trackWidth||.546};
`,i.chassis.type==="swerve"){e+=`        public static final boolean USE_PHOENIX6_SWERVE = ${!!i.chassis.usePhoenix6Swerve};
`,e+=`        public static final String SWERVE_ENCODER_TYPE = "${i.chassis.swerveEncoderType||"cancoder"}";
`;const n=(i.chassis.trackWidth||.546)/2;e+=`        public static final edu.wpi.first.math.geometry.Translation2d[] MODULE_TRANSLATIONS = new edu.wpi.first.math.geometry.Translation2d[] {
`,e+=`            new edu.wpi.first.math.geometry.Translation2d(${n}, ${n}),
`,e+=`            new edu.wpi.first.math.geometry.Translation2d(${n}, -${n}),
`,e+=`            new edu.wpi.first.math.geometry.Translation2d(-${n}, ${n}),
`,e+=`            new edu.wpi.first.math.geometry.Translation2d(-${n}, -${n}),
`,e+=`        };
`}e+=`    }

`}return Object.entries(i.mechanisms).forEach(([t,n])=>{var r,o;if(!n.configured)return;const s=t.charAt(0).toUpperCase()+t.slice(1);if(e+=`    public static final class ${s}Constants {
`,t==="arm")e+=`        public static final int DOF = ${n.dof};
`,n.joints.forEach((a,l)=>{e+=`        // Joint ${l+1}
`,(a.motors||[]).forEach((c,d)=>{const u=d===0?`JOINT_${l+1}_MOTOR_ID`:`JOINT_${l+1}_FOLLOWER_${d}_ID`;e+=`        public static final int ${u} = ${c.canId};
`,e+=`        public static final boolean JOINT_${l+1}_MOTOR_${d}_INVERTED = ${c.inverted};
`}),a.encoder&&(e+=`        public static final String JOINT_${l+1}_ENCODER_TYPE = "${a.encoder}";
`),e+=`        public static final int JOINT_${l+1}_ENCODER_ID = ${a.encoderId};
`,a.gearRatio&&(e+=`        public static final double JOINT_${l+1}_GEAR_RATIO = ${a.gearRatio};
`),e+=`        public static final int JOINT_${l+1}_CURRENT_LIMIT = ${a.motorConfig.currentLimit||40};
`,a.softLimitFwd&&(e+=`        public static final double JOINT_${l+1}_SOFT_LIMIT_FWD = ${a.softLimitFwd};
`),a.softLimitRev&&(e+=`        public static final double JOINT_${l+1}_SOFT_LIMIT_REV = ${a.softLimitRev};
`),e+=`        public static final double JOINT_${l+1}_kP = ${a.pid.kP||0};
`,e+=`        public static final double JOINT_${l+1}_kI = ${a.pid.kI||0};
`,e+=`        public static final double JOINT_${l+1}_kD = ${a.pid.kD||0};
`});else{(n.motors||[]).forEach((l,c)=>{const d=c===0?"MOTOR_ID":`FOLLOWER_${c}_ID`;e+=`        public static final int ${d} = ${l.canId};
`}),n.encoderId&&(e+=`        public static final int ENCODER_ID = ${n.encoderId};
`),n.gearRatio&&(e+=`        public static final double GEAR_RATIO = ${n.gearRatio};
`);const a=n.motorConfig||{};if(e+=`        public static final int CURRENT_LIMIT = ${a.currentLimit||40};
`,e+=`        public static final boolean BRAKE_MODE = ${a.brakeMode!==!1};
`,"rampRate"in n&&n.rampRate!=null&&(e+=`        public static final double RAMP_RATE_SECS = ${n.rampRate/1e3};
`),t==="elevator"&&(e+=`        public static final double MIN_HEIGHT_M = ${n.minHeight||0};
`,n.maxHeight&&(e+=`        public static final double MAX_HEIGHT_M = ${n.maxHeight};
`),n.softLimitFwd&&(e+=`        public static final double SOFT_LIMIT_FWD = ${n.softLimitFwd};
`),n.softLimitRev&&(e+=`        public static final double SOFT_LIMIT_REV = ${n.softLimitRev};
`),n.motionMaxVel&&(e+=`        public static final double MOTION_MAX_VEL = ${n.motionMaxVel};
`),n.motionMaxAccel&&(e+=`        public static final double MOTION_MAX_ACCEL = ${n.motionMaxAccel};
`)),t==="shooter"&&(e+=`        public static final String SHOOTER_TYPE = "${n.shooterType||"flywheel_only"}";
`,n.maxRPM&&(e+=`        public static final double MAX_RPM = ${n.maxRPM};
`),(n.shooterType==="adjustable"||n.shooterType==="adjustable_turret")&&n.pivotMotor&&(e+=`        public static final int PIVOT_MOTOR_ID = ${n.pivotMotor.canId};
`,e+=`        public static final boolean PIVOT_INVERTED = ${n.pivotMotor.inverted};
`),n.shooterType==="adjustable_turret"&&n.turretMotor&&(e+=`        public static final int TURRET_MOTOR_ID = ${n.turretMotor.canId};
`,e+=`        public static final boolean TURRET_INVERTED = ${n.turretMotor.inverted};
`)),t==="launcher"&&(e+=`        public static final String LAUNCHER_TYPE = "simple";
`,n.softLimitFwd&&(e+=`        public static final double SOFT_LIMIT_FWD = ${n.softLimitFwd};
`),n.softLimitRev&&(e+=`        public static final double SOFT_LIMIT_REV = ${n.softLimitRev};
`)),n.hasSensor&&(e+=`        public static final String SENSOR_PORT_TYPE = "${n.sensorPortType}";
`,e+=`        public static final int SENSOR_PORT = ${n.sensorPort};
`),n.pid){const l=n.pid;e+=`        public static final double kP = ${l.kP||0};
`,e+=`        public static final double kI = ${l.kI||0};
`,e+=`        public static final double kD = ${l.kD||0};
`,l.kS&&(e+=`        public static final double kS = ${l.kS};
`),l.kV&&(e+=`        public static final double kV = ${l.kV};
`),l.kA&&(e+=`        public static final double kA = ${l.kA};
`)}(r=n.physics)!=null&&r.massKg&&(e+=`        /** Mass used in simulation physics model */
        public static final double SIM_MASS_KG = ${n.physics.massKg};
`),(o=n.physics)!=null&&o.moiKgM2&&(e+=`        /** Moment of inertia used in simulation physics model */
        public static final double SIM_MOI_KG_M2 = ${n.physics.moiKgM2};
`)}e+=`    }

`}),i.vision.configured&&(e+=`    public static final class VisionConstants {
`,e+=`        public static final String SYSTEM = "${i.vision.system}";
`,i.vision.system==="limelight"&&(e+=`        public static final String LIMELIGHT_VERSION = "${i.vision.limelightVersion}";
`),e+=`        public static final int CAMERA_COUNT = ${i.vision.cameraCount};
`,i.vision.cameras.forEach((t,n)=>{e+=`        // Camera ${n}: ${t.name}
`,e+=`        public static final double CAM${n}_X = ${t.x}; // forward
`,e+=`        public static final double CAM${n}_Y = ${t.y}; // left
`,e+=`        public static final double CAM${n}_Z = ${t.z}; // up
`,e+=`        public static final double CAM${n}_ROLL = Math.toRadians(${t.roll});
`,e+=`        public static final double CAM${n}_PITCH = Math.toRadians(${t.pitch});
`,e+=`        public static final double CAM${n}_YAW = Math.toRadians(${t.yaw});
`}),e+=`    }

`),e+=`}
`,e}function V0(i){const e=i.framework||"advantagekit";let t=`package frc.robot;
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.Commands;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,n="",s="",r="";const o=i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&i.chassis.type==="swerve";if(i.chassis.configured&&(t+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,o&&(t+=`import frc.robot.Autos;
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
`;const a=Object.entries(i.mechanisms).filter(([h,f])=>f.configured&&h!=="arm").map(([h])=>({name:h,varName:h,displayName:h.charAt(0).toUpperCase()+h.slice(1)})),l=(i.chassis.configured?1:0)+a.length;r+=C0(a,i.chassis.configured),l>0&&(t+=L0()),n+=P0(l);const c=o?`        return Autos.getAuto(drive);
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
`}function H0(i,e,t,n){const s=`${e}/subsystems/drive`;qt[t.chassis.driveMotor];const r=t.chassis.type==="swerve",o=r&&t.chassis.usePhoenix6Swerve,a=t.chassis.pathplannerEnabled!==!1&&r;if(n==="advantagekit")if(r){i.file(`${s}/DriveIO.java`,`package frc.robot.subsystems.drive;
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
`),i.file(`${s}/DriveIOReal.java`,A0(t.chassis)),i.file(`${s}/DriveIOSim.java`,R0());const l=a?`
        // PathPlanner AutoBuilder — holonomic swerve (${o?"Phoenix 6":"WPILib"} underneath)
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
`);const l=T0(t.chassis);l&&i.file(`${s}/DriveIOReal.java`,l),i.file(`${s}/DriveIOSim.java`,w0()),i.file(`${s}/Drive.java`,`package frc.robot.subsystems.drive;
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
`)}function $c(i,e,t,n,s,r){const o=t.charAt(0).toUpperCase()+t.slice(1),a=`${e}/subsystems/${t}`;if(t==="arm"){if(r==="advantagekit"){i.file(`${a}/ArmIO.java`,`package frc.robot.subsystems.arm;
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
`);const u=Vc("arm",n,"Arm");u&&i.file(`${a}/ArmIOReal.java`,u),i.file(`${a}/ArmIOSim.java`,Hc("arm",n,"Arm",n.attachedTo||"chassis")),i.file(`${a}/Arm.java`,`package frc.robot.subsystems.arm;
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
`}),i.file(`${a}/Arm.java`,`package frc.robot.subsystems.arm;
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
`)),i.file(`${a}/${o}IO.java`,`package frc.robot.subsystems.${t};
import org.littletonrobotics.junction.AutoLog;
public interface ${o}IO {
    @AutoLog class ${o}IOInputs {
        public double positionRad = 0.0;
        public double velocityRadPerSec = 0.0;
        public double appliedVolts = 0.0;
        public double[] currentAmps = new double[]{0.0};
${t==="elevator"?`        public double heightMeters = 0.0;
`:""}${n.hasSensor?`        public boolean hasPiece = false;
`:""}${u}    }
    default void updateInputs(${o}IOInputs inputs) {}
    default void setVoltage(double volts) {}
    default void setPosition(double positionRad) {}
    default void stop() {}
    default void configurePID(double kP, double kI, double kD) {}
${h}}
`);const g=Vc(t,n,o);g&&i.file(`${a}/${o}IOReal.java`,g),i.file(`${a}/${o}IOSim.java`,Hc(t,n,o,n.attachedTo||"chassis")),i.file(`${a}/${o}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import org.littletonrobotics.junction.Logger;
import frc.robot.Constants.${o}Constants;
import static edu.wpi.first.units.Units.*;

public class ${o} extends SubsystemBase {
    private final ${o}IO io;
    private final ${o}IOInputsAutoLogged inputs = new ${o}IOInputsAutoLogged();
    private final SysIdRoutine sysIdRoutine;

    public ${o}(${o}IO io) {
        this.io = io;${n.pid?`
        io.configurePID(${o}Constants.kP, ${o}Constants.kI, ${o}Constants.kD);`:""}
        sysIdRoutine = new SysIdRoutine(
            new SysIdRoutine.Config(),
            new SysIdRoutine.Mechanism(
                (edu.wpi.first.units.Measure<edu.wpi.first.units.Voltage> volts) -> io.setVoltage(volts.in(Volts)),
                null,
                this));
    }

    @Override public void periodic() {
        io.updateInputs(inputs);
        Logger.processInputs("${o}", inputs);
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
`)),i.file(`${a}/${o}.java`,`package frc.robot.subsystems.${t};
import edu.wpi.first.wpilibj2.command.Command;
import edu.wpi.first.wpilibj2.command.sysid.SysIdRoutine;
import edu.wpi.first.wpilibj2.command.SubsystemBase;
import frc.robot.Constants.${o}Constants;
import static edu.wpi.first.units.Units.*;

public class ${o} extends SubsystemBase {
${d}
    // Current Limit: ${c.currentLimit}A | Brake: ${c.brakeMode}
    private final SysIdRoutine sysIdRoutine;

    public ${o}() {
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
`)}}function z0(i,e,t,n){const s=`${e}/subsystems/vision`,r=t.vision.system==="limelight";if(i.file(`${s}/VisionIO.java`,`package frc.robot.subsystems.vision;
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
`),r){let o="";t.vision.cameras.forEach((a,l)=>{o+=`        // ${a.name}: Translation(${a.x}, ${a.y}, ${a.z}) Rotation(${a.roll}°, ${a.pitch}°, ${a.yaw}°)
`}),i.file(`${s}/VisionIOLimelight.java`,`package frc.robot.subsystems.vision;
import frc.robot.Constants.VisionConstants;
public class VisionIOLimelight implements VisionIO {
    // Limelight version: ${t.vision.limelightVersion}
${o}    public VisionIOLimelight() { /* Init cameras */ }
    @Override public void updateInputs(VisionIOInputs inputs) { /* LimelightHelpers */ }
}
`)}else{let o="";t.vision.cameras.forEach((a,l)=>{o+=`        // ${a.name}: new Transform3d(${a.x},${a.y},${a.z}, new Rotation3d(${a.roll}°,${a.pitch}°,${a.yaw}°))
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
`)}function G0(i,e,t){i.file(`${e}/statemachine/StateMachine.java`,`package frc.robot.statemachine;
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
`)}function $0(i,e,t,n){i.file(`${e}/commands/StateMachineCoordinator.java`,`package frc.robot.commands;
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
`)}function W0(i,e,t){const n=`${e}/src/main/deploy/pathplanner`;i.file(`${n}/paths/.gitkeep`,""),i.file(`${n}/autos/.gitkeep`,""),i.file(`${n}/paths/Example Path.path`,JSON.stringify({version:Mt.pathplannerFormat,waypoints:[{anchor:{x:1.5,y:5.5},prevWaypoint:null,nextWaypoint:{x:2,y:5.5}},{anchor:{x:3,y:5.5},prevWaypoint:{x:2.5,y:5.5},nextWaypoint:null}],constraints:[],goalEndState:{velocity:0,rotation:0}},null,2)),i.file(`${n}/autos/Example Auto.auto`,JSON.stringify({version:Mt.pathplannerFormat,name:"Example Auto",folder:"autos",choreoAuto:!1,pathplannerAuto:!0,commands:[{type:"path",pathName:"Example Path"}]},null,2)),i.file(`${n}/settings.json`,JSON.stringify({robotWidth:.9,robotLength:.9,holonomicMode:!0},null,2))}function j0(i,e,t){i.file(`${e}/Autos.java`,`package frc.robot;
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
`)}function X0(i,e){return`# FRC Robot Project: ${e}

This deployable FRC codebase was automatically generated using the FRC Robot Code Generator.

## 🛠️ Framework Overview
- **Architecture**: ${i.framework==="advantagekit"?"AdvantageKit (Telemetry-focused Multi-IO Layer)":"Command-Based Subsystem Template"}
- **Chassis**: ${i.chassis.configured?`${i.chassis.type.toUpperCase()} drive (${i.chassis.tankCanIds?"Tank":"Swerve"})`:"None"}
- **Vision**: ${i.vision.configured?`${i.vision.system} supporting ${i.vision.limelightVersion||i.vision.photonPlatform}`:"None"}

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
`}function q0(i){const e=[],t=[];i.chassis.configured?(i.chassis.driveMotor||e.push({section:"Chassis",msg:"Select a drive motor"}),i.chassis.gyro||e.push({section:"Chassis",msg:"Select a gyro"}),i.chassis.type==="swerve"&&!i.chassis.turnMotor&&e.push({section:"Chassis",msg:"Select a turn motor for swerve"}),i.chassis.gearRatio||t.push({section:"Chassis",msg:"Gear ratio not set — defaults to 1.0"})):e.push({section:"Chassis",msg:"Drivetrain must be configured"});const n=new Map;function s(r,o){if(o==null||o==="")return;const a=Number(o);n.has(a)?e.push({section:"CAN IDs",msg:`Conflict: ID ${a} used by "${n.get(a)}" and "${r}"`}):n.set(a,r)}if(i.chassis.configured){if(i.chassis.type==="swerve"&&i.chassis.canIds){const r=i.chassis.canIds;["fl","fr","bl","br"].forEach(o=>{const a=o.toUpperCase();s(`${a} Drive`,r[o+"_drive"]),s(`${a} Turn`,r[o+"_turn"]),s(`${a} Encoder`,r[o+"_encoder"])})}s("Gyro",i.chassis.gyroCanId)}return Object.entries(i.mechanisms).forEach(([r,o])=>{var l,c;if(!o.enabled||!o.configured)return;const a=r.charAt(0).toUpperCase()+r.slice(1);if(r==="arm"){o.joints.forEach((d,u)=>{var h,f;d.motors.forEach((g,v)=>{s(`Arm Joint ${u+1} Motor ${v}`,g.canId)}),d.encoderId&&s(`Arm Joint ${u+1} Encoder`,d.encoderId),(!((h=d.motors)!=null&&h.length)||!((f=d.motors[0])!=null&&f.type))&&t.push({section:`Arm Joint ${u+1}`,msg:"No motor selected"})});return}(o.motors||[]).forEach((d,u)=>{s(`${a} Motor ${u}`,d.canId)}),o.encoderId&&s(`${a} Encoder`,o.encoderId),(!((l=o.motors)!=null&&l.length)||!((c=o.motors[0])!=null&&c.type))&&t.push({section:a,msg:"No motor selected"})}),i.vision.enabled&&i.vision.configured&&(i.vision.system||e.push({section:"Vision",msg:"Select Limelight or PhotonVision"}),i.vision.cameraCount<1&&t.push({section:"Vision",msg:"No cameras configured"})),{errors:e,warnings:t,isValid:e.length===0}}function wo(i){var c;const e=document.getElementById("summary-body");if(!e)return;const{errors:t,warnings:n}=q0(i);let s="";s+=`<div class="summary-tabs">
        <button class="summary-tab active" data-tab="review">REVIEW</button>
        <button class="summary-tab" data-tab="preview">CODE PREVIEW</button>
    </div>`,s+='<div class="summary-tab-content active" id="tab-review">',t.length>0&&(s+=`<div class="summary-alert summary-alert-error">
            <strong>⚠ ${t.length} Error${t.length>1?"s":""}</strong>
            ${t.map(d=>`<div class="alert-item">• <strong>${d.section}:</strong> ${d.msg}</div>`).join("")}
        </div>`),n.length>0&&(s+=`<div class="summary-alert summary-alert-warn">
            <strong>⚡ ${n.length} Warning${n.length>1?"s":""}</strong>
            ${n.map(d=>`<div class="alert-item">• <strong>${d.section}:</strong> ${d.msg}</div>`).join("")}
        </div>`),t.length===0&&n.length===0&&(s+='<div class="summary-alert summary-alert-ok"><strong>✓ All checks passed</strong></div>');const r=i.framework==="commandbase"?"CommandBase (simple)":"AdvantageKit (IO + replay)";if(s+=`<div class="summary-section">
        <div class="summary-section-title">CODE FRAMEWORK</div>
        <div class="summary-grid">
            <div class="summary-item"><span class="summary-key">Pattern</span><span class="summary-val">${r}</span></div>
            <div class="summary-item"><span class="summary-key">StateMachine</span><span class="summary-val">${i.stateMachineIntegration?"State-driven commands":"Standard commands"}</span></div>
        </div>
    </div>`,i.chassis.configured){const d=qc[i.chassis.type],u=qt[i.chassis.driveMotor],h=ya[i.chassis.gyro];if(s+=`<div class="summary-section">
            <div class="summary-section-title">DRIVETRAIN</div>
            <div class="summary-grid">
                <div class="summary-item"><span class="summary-key">Type</span><span class="summary-val">${(d==null?void 0:d.name)||i.chassis.type}</span></div>
                <div class="summary-item"><span class="summary-key">Drive Motor</span><span class="summary-val">${(u==null?void 0:u.name)||"—"}</span></div>
                ${i.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Turn Motor</span><span class="summary-val">${((c=qt[i.chassis.turnMotor])==null?void 0:c.name)||"—"}</span></div>`:""}
                <div class="summary-item"><span class="summary-key">Gyro</span><span class="summary-val">${(h==null?void 0:h.name)||"—"} (ID: ${i.chassis.gyroCanId})</span></div>
                <div class="summary-item"><span class="summary-key">Gear Ratio</span><span class="summary-val">${i.chassis.gearRatio||"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Wheel ⌀</span><span class="summary-val">${i.chassis.wheelDiameter?i.chassis.wheelDiameter+"m":"—"}</span></div>
                <div class="summary-item"><span class="summary-key">Max Speed</span><span class="summary-val">${i.chassis.maxSpeed?i.chassis.maxSpeed+" m/s":"—"}</span></div>
                ${i.chassis.type==="swerve"?`<div class="summary-item"><span class="summary-key">Drive Stack</span><span class="summary-val">${i.chassis.usePhoenix6Swerve?"Phoenix 6 SwerveDrivetrain":"WPILib swerve"}</span></div>`:""}
            </div>`,i.chassis.type==="swerve"&&i.chassis.canIds){const f=i.chassis.canIds;s+=`<div class="summary-sub-title">CAN IDs</div><div class="summary-can-grid">
                ${["fl","fr","bl","br"].map(g=>`<div class="summary-can-mod"><strong>${g.toUpperCase()}</strong> D:${f[g+"_drive"]} T:${f[g+"_turn"]} E:${f[g+"_encoder"]}</div>`).join("")}
            </div>`}s+="</div>"}else s+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ DRIVETRAIN</div><p>Not configured</p></div>';Object.entries(i.mechanisms).forEach(([d,u])=>{var f;if(!u.enabled)return;let h="";if(d==="arm")if(u.configured){let g="";u.joints.forEach((v,m)=>{const p=v.motors.map(E=>{const x=qt[E.type];return`${E.role}: ${(x==null?void 0:x.name)||"—"} (CAN ${E.canId})${E.inverted?" inv":""}`}).join("<br>");g+=`<div style="margin-top: 8px;">
                        <strong>Joint ${m+1}:</strong><br>
                        - Motors: ${p}<br>
                        - Gear Ratio: ${v.gearRatio||"—"}<br>
                        - Encoder: ${v.encoder||"Integrated"} (ID: ${v.encoderId})<br>
                        - PID: kP=${v.pid.kP}, kI=${v.pid.kI}, kD=${v.pid.kD}
                    </div>`}),h=`<div class="summary-grid" style="display:block">
                    <div class="summary-item summary-item-wide"><span class="summary-key">DoF</span><span class="summary-val">${u.dof}</span></div>
                    <div style="font-size:0.8rem; line-height: 1.4; color: var(--text-secondary); padding: 8px 12px; background: rgba(255,255,255,0.02); border-radius: 4px; margin-top: 8px;">
                        ${g}
                    </div>
                    <div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${u.attachedTo||"chassis"}</span></div>
                </div>`}else h='<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>';else{const v=(u.motors||[]).map(m=>{const p=qt[m.type];return`${m.role}: ${(p==null?void 0:p.name)||"—"} (CAN ${m.canId})${m.inverted?" inv":""}`}).join("<br>");h=u.configured?`<div class="summary-grid">
                <div class="summary-item summary-item-wide"><span class="summary-key">Motors</span><span class="summary-val">${v}</span></div>
                ${u.gearRatio?`<div class="summary-item"><span class="summary-key">Ratio</span><span class="summary-val">${u.gearRatio}</span></div>`:""}
                ${d==="elevator"?`<div class="summary-item"><span class="summary-key">Height</span><span class="summary-val">${u.minHeight||0}–${u.maxHeight||"?"} m</span></div>`:""}
                ${d==="shooter"&&u.maxRPM?`<div class="summary-item"><span class="summary-key">Max RPM</span><span class="summary-val">${u.maxRPM}</span></div>`:""}
                ${u.hasSensor?`<div class="summary-item"><span class="summary-key">Sensor</span><span class="summary-val">${(u.sensorPortType||"dio").toUpperCase()} port ${u.sensorPort}</span></div>`:""}
                ${(f=i.attachmentRules)!=null&&f[d]?`<div class="summary-item"><span class="summary-key">Sim attach</span><span class="summary-val">${u.attachedTo||"chassis"}</span></div>`:""}
            </div>`:'<p style="color:var(--text-secondary);font-size:0.78rem">Enabled but not yet configured — click card to set up</p>'}s+=`<div class="summary-section ${u.configured?"":"summary-missing"}">
            <div class="summary-section-title">${d.toUpperCase()} ${u.configured?"":"— Not configured"}</div>
            ${h}
        </div>`}),i.vision.enabled&&(i.vision.configured?(s+=`<div class="summary-section">
                <div class="summary-section-title">VISION</div>
                <div class="summary-grid">
                    <div class="summary-item"><span class="summary-key">System</span><span class="summary-val">${i.vision.system==="limelight"?"Limelight "+i.vision.limelightVersion:"PhotonVision"}</span></div>
                    ${i.vision.system==="photonvision"?`<div class="summary-item"><span class="summary-key">Platform</span><span class="summary-val">${i.vision.photonPlatform}</span></div>`:""}
                    <div class="summary-item"><span class="summary-key">Cameras</span><span class="summary-val">${i.vision.cameraCount}</span></div>
                </div>`,(i.vision.cameras||[]).forEach((d,u)=>{s+=`<div class="summary-cam"><strong>${d.name}</strong> — T(${d.x}, ${d.y}, ${d.z})m  R(${d.roll}°, ${d.pitch}°, ${d.yaw}°)</div>`}),s+="</div>"):s+='<div class="summary-section summary-missing"><div class="summary-section-title">⚠ VISION — Not configured</div></div>'),i.statemachine.enabled&&(s+=`<div class="summary-section"><div class="summary-section-title">STATE MACHINE</div><p style="color:var(--text-secondary);font-size:0.8rem">${i.statemachine.configured?"✓ JSON attached":"⚠ Enabled but no JSON — will generate skeleton"}</p></div>`);let o=4;i.chassis.configured&&(o+=5),i.chassis.configured&&i.chassis.pathplannerEnabled!==!1&&i.chassis.type==="swerve"&&(o+=1),i.stateMachineIntegration&&i.statemachine.configured&&(o+=1),Object.values(i.mechanisms).forEach(d=>{d.configured&&(o+=4)}),i.vision.configured&&(o+=4),i.statemachine.configured&&(o+=1),s+=`<div class="summary-section" style="text-align:center;opacity:0.6;font-size:0.75rem">
        <strong>${o} Java files</strong> will be generated
    </div>`,s+=`<div class="summary-section" style="background: rgba(0,255,255,0.05); border: 1px solid rgba(0,255,255,0.2);">
        <div class="summary-section-title" style="color: var(--accent-cyan)">ℹ️ PID & FEEDFORWARD TUNING</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">
            Don't worry if you left the PID/FF values at 0! The generated code includes full <strong>SysId Integration</strong>.
            You can use the SysId tool to characterize your robot and find the optimal values.<br><br>
            <strong>How to update later:</strong> You can directly modify the constants in <code>Constants.java</code> (e.g. <code>ShooterConstants.kP</code>).
            <br><br>
            <a href="javascript:void(0)" onclick="document.getElementById('sysid-btn').click()" style="color: var(--accent-cyan); text-decoration: underline;">Click here to view the SysId Guide</a>.
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
    </div>`,s+="</div>",s+=`<div class="summary-tab-content" id="tab-preview">
        <div class="preview-file-list">
            <div class="preview-file active" data-file="Constants">Constants.java</div>
            <div class="preview-file" data-file="RobotContainer">RobotContainer.java</div>
            <div class="preview-file" data-file="Robot">Robot.java</div>
        </div>
        <pre class="preview-code" id="preview-code"><code id="preview-code-content">Click a file to preview</code></pre>
    </div>`,e.innerHTML=s,e.querySelectorAll(".summary-tab").forEach(d=>{d.addEventListener("click",()=>{var u;e.querySelectorAll(".summary-tab").forEach(h=>h.classList.remove("active")),e.querySelectorAll(".summary-tab-content").forEach(h=>h.classList.remove("active")),d.classList.add("active"),(u=e.querySelector(`#tab-${d.dataset.tab}`))==null||u.classList.add("active")})}),e.querySelectorAll(".preview-file").forEach(d=>{d.addEventListener("click",()=>{e.querySelectorAll(".preview-file").forEach(h=>h.classList.remove("active")),d.classList.add("active");const u=e.querySelector("#preview-code-content");u.textContent=Wc(i,d.dataset.file)})});const a=e.querySelector("#preview-code-content");a&&(a.textContent=Wc(i,"Constants"));const l=document.getElementById("summary-confirm");l&&t.length>0?(l.disabled=!0,l.title="Fix errors before generating"):l&&(l.disabled=!1,l.title="")}function Wc(i,e){return e==="Constants"?Y0(i):e==="RobotContainer"?K0(i):e==="Robot"?Z0():""}function Y0(i){let e=`package frc.robot;

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
`,(n.motors||[]).forEach((r,o)=>{const a=o===0?"MOTOR_ID":`FOLLOWER_${o}_ID`;e+=`        public static final int ${a} = ${r.canId};
`}),n.pid&&(e+=`        public static final double kP = ${n.pid.kP||0};
        public static final double kI = ${n.pid.kI||0};
        public static final double kD = ${n.pid.kD||0};
`),e+=`    }

`}),e+=`}
`,e}function K0(i){let e=`package frc.robot;
import edu.wpi.first.wpilibj2.command.*;
import edu.wpi.first.wpilibj2.command.button.CommandXboxController;
`,t="",n="";return i.chassis.configured&&(e+=`import frc.robot.subsystems.drive.*;
import frc.robot.commands.DriveCommands;
`,t+=`    private final Drive drive;
`,n+=`        drive = new Drive(Robot.isReal() ? new DriveIOReal() : new DriveIOSim());
`),Object.entries(i.mechanisms).forEach(([s,r])=>{if(!r.configured)return;const o=s.charAt(0).toUpperCase()+s.slice(1);e+=`import frc.robot.subsystems.${s}.*;
`,t+=`    private final ${o} ${s};
`,n+=`        ${s} = new ${o}(Robot.isReal() ? new ${o}IOReal() : new ${o}IOSim());
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
`}function Z0(){return`package frc.robot;

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
`}document.addEventListener("DOMContentLoaded",()=>{const i=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||window.innerWidth<768;Re.state.isMobile=i,i&&(document.body.classList.add("is-mobile"),document.getElementById("mobile-banner").style.display="block"),b0(),Q0(),J0(),ey(),ty(),iy(),sy(),Re.subscribe(e=>{ry(),oy(e),ay(e)})});function J0(){const i=document.getElementById("landing-page");i&&(i.scrollTo({top:0,left:0,behavior:"instant"}),setTimeout(()=>{i.scrollTo({top:0,left:0,behavior:"instant"})},100));const e=t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1;document.querySelectorAll('.landing-nav .nav-link[href^="#"]').forEach(t=>{t.addEventListener("click",n=>{const s=t.getAttribute("href");if(!s||s==="#")return;const r=document.querySelector(s);if(!r||!i)return;n.preventDefault();const o=i.scrollTop,a=r.getBoundingClientRect().top+i.scrollTop-60,l=2500,c=performance.now();function d(u){const h=u-c,f=Math.min(h/l,1);i.scrollTo(0,o+(a-o)*e(f)),f<1&&requestAnimationFrame(d)}requestAnimationFrame(d)})})}function Q0(){var i,e,t,n;(i=document.getElementById("nav-sysid"))==null||i.addEventListener("click",s=>{s.preventDefault(),_r("sysid")}),(e=document.getElementById("sysid-back"))==null||e.addEventListener("click",()=>_r("landing")),(t=document.getElementById("btn-start"))==null||t.addEventListener("click",()=>{_r("configurator"),setTimeout(()=>{const s=document.getElementById("viewport-3d-container");s&&t0(s)},100)}),(n=document.getElementById("btn-back"))==null||n.addEventListener("click",()=>_r("landing"))}function _r(i){var e;if(document.querySelectorAll(".page").forEach(t=>t.classList.remove("active")),(e=document.getElementById(`${i}-page`))==null||e.classList.add("active"),Re.setPage(i),i==="landing"){const t=document.getElementById("landing-page");t&&t.scrollTo({top:0,left:0,behavior:"instant"})}}function ey(){var i;document.querySelectorAll(".mechanism-card").forEach(e=>{e.addEventListener("click",t=>{var s;if(t.target.closest(".card-toggle"))return;const n=e.dataset.type;if(n){if(n!=="chassis"){const r=Re.getState();if(!(n==="vision"?r.vision.enabled:n==="statemachine"?r.statemachine.enabled:(s=r.mechanisms[n])==null?void 0:s.enabled)){Nn("Enable this mechanism first","info");return}}ny(n)}})}),(i=document.getElementById("btn-reset"))==null||i.addEventListener("click",()=>{Re.resetAll(),Wa(),document.querySelectorAll(".mech-toggle").forEach(e=>{e.checked=!1}),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("enabled","configured")),["elevator","shooter","intake","roller","launcher","arm","vision"].forEach(e=>$a(e,!1)),Nn("Configuration reset","info")})}function ty(){document.querySelectorAll(".mech-toggle").forEach(i=>{i.addEventListener("change",e=>{e.stopPropagation();const t=i.dataset.mech,n=i.checked,s=i.closest(".mechanism-card");n?(s.classList.add("enabled"),s.querySelector(".card-desc").textContent="Click to configure"):(s.classList.remove("enabled","configured"),s.querySelector(".card-desc").textContent="Disabled",Re.getState().selectedMechanism===t&&Wa()),t==="vision"?Re.updateVision({enabled:n}):t==="statemachine"?Re.updateStateMachine({enabled:n}):Re.getState().mechanisms[t]&&Re.updateMechanism(t,{enabled:n}),$a(t,n)})})}function ny(i){var e,t;document.querySelectorAll(".mechanism-card").forEach(n=>n.classList.remove("selected")),(e=document.querySelector(`.mechanism-card[data-type="${i}"]`))==null||e.classList.add("selected"),Re.selectMechanism(i),Si(i),(t=document.getElementById("detail-sidebar"))==null||t.classList.add("open"),s0(i)}function Wa(){var i;(i=document.getElementById("detail-sidebar"))==null||i.classList.remove("open"),document.querySelectorAll(".mechanism-card").forEach(e=>e.classList.remove("selected")),Re.closeSidebar(),r0()}function iy(){var i,e;(i=document.getElementById("sidebar-close"))==null||i.addEventListener("click",Wa),(e=document.getElementById("btn-apply"))==null||e.addEventListener("click",()=>{var o;const t=Re.getState().selectedMechanism;if(!t)return;y0(t);const n=Re.getState();Dr(t,n);let s=!1;t==="chassis"?s=n.chassis.configured:t==="vision"?s=n.vision.configured:t==="statemachine"?s=n.statemachine.configured:s=(o=n.mechanisms[t])==null?void 0:o.configured;const r=document.querySelector(`[data-type="${t}"]`);r&&(s?(r.classList.add("configured"),Nn(`${t} configured!`,"success")):(r.classList.remove("configured"),Nn("Fill required fields","error"))),ly(n)})}function sy(){var t,n,s,r;const i=document.getElementById("summary-overlay"),e=document.getElementById("modal-overlay");(t=document.getElementById("btn-generate"))==null||t.addEventListener("click",()=>{const o=Re.getState();if(o.isMobile){Nn("Desktop required","error");return}if(!o.chassis.configured){Nn("Configure chassis first","error");return}wo(o),i.style.display="flex";const a=document.getElementById("sm-integration-check");a&&(a.checked=o.stateMachineIntegration,a.onchange=()=>{Re.setStateMachineIntegration(a.checked),wo(Re.getState())}),document.querySelectorAll(".fw-btn").forEach(l=>{l.classList.toggle("active",l.dataset.fw===o.framework),l.onclick=()=>{document.querySelectorAll(".fw-btn").forEach(c=>c.classList.remove("active")),l.classList.add("active"),Re.setFramework(l.dataset.fw),wo(Re.getState())}})}),(n=document.getElementById("summary-close"))==null||n.addEventListener("click",()=>i.style.display="none"),(s=document.getElementById("summary-back"))==null||s.addEventListener("click",()=>i.style.display="none"),(r=document.getElementById("summary-confirm"))==null||r.addEventListener("click",async()=>{var d;const o=Re.getState();if(o.stateMachineIntegration){if(!o.statemachine.configured){Nn("StateMachine must be configured for integration.","error");return}try{const u=JSON.parse(o.statemachine.jsonData);if(typeof u!="object"||Array.isArray(u)||Object.keys(u).length===0)throw new Error;for(const[h,f]of Object.entries(u)){if(!Array.isArray(f))throw new Error;for(const g of f)if(typeof g!="string")throw new Error}}catch{Nn("Invalid StateMachine JSON format.","error");return}}i.style.display="none",e.style.display="flex";const a=document.getElementById("gen-status-text"),c=Re.getState().framework==="advantagekit"?["Initializing...","build.gradle...","IO Interfaces...","Drive subsystem...","Mechanisms...","Vision...","PathPlanner...","Packaging ZIP..."]:["Initializing...","build.gradle...","Drive subsystem...","Mechanisms...","Vision...","Packaging ZIP..."];for(const u of c)a.textContent=u,await new Promise(h=>setTimeout(h,350));try{const u=((d=document.getElementById("project-name-input"))==null?void 0:d.value)||"FRC2026_Robot",h=document.querySelector('input[name="gen-mode"]:checked'),f=h?h.value:Gi.FULL;await N0(Re.getState(),u,f),a.textContent="✓ Download started!",setTimeout(()=>e.style.display="none",1500),Nn("Code generated!","success")}catch(u){a.textContent="✕ "+u.message,setTimeout(()=>e.style.display="none",3e3)}})}function ry(){const i=Re.getConfiguredCount(),e=Re.getExpectedCount(),t=document.getElementById("progress-fill");t&&(t.style.width=e===0?"0%":Math.round(i/e*100)+"%");const n=document.getElementById("config-status");n&&(n.textContent=`${i} / ${e} configured`)}function oy(i){const e=(t,n)=>{const s=document.getElementById(t);s&&(n?s.classList.add("configured"):s.classList.remove("configured"))};e("card-chassis",i.chassis.configured),Object.entries(i.mechanisms).forEach(([t,n])=>e(`card-${t}`,n.configured)),e("card-vision",i.vision.configured),e("card-statemachine",i.statemachine.configured)}function ay(i){So("chassis",i.chassis.configured),Object.entries(i.mechanisms).forEach(([e,t])=>So(e,t.configured)),So("vision",i.vision.configured)}const jc={talonfx_falcon:"Falcon 500",talonfx_kraken60:"Kraken X60",talonfx_kraken44:"Kraken X44",talonfxs_minion:"Minion",talonfxs:"TalonFXS",sparkmax_neo:"NEO",sparkmax_neo550:"NEO 550",sparkflex_vortex:"Vortex"};function ly(i){const e=(t,n)=>{const s=document.querySelector(t);s&&(s.textContent=n)};i.chassis.configured&&e("#card-chassis .card-desc",`${i.chassis.type} · ${jc[i.chassis.driveMotor]||""}`),Object.entries(i.mechanisms).forEach(([t,n])=>{if(!n.configured)return;if(t==="arm"){e("#card-arm .card-desc",`${n.dof} DoF Arm`);return}const s=n.motors||[],r=s[0],o=r!=null&&r.type?jc[r.type]||r.type:"Motor",a=s.length>1?` +${s.length-1}`:"";e(`#card-${t} .card-desc`,`${o}${a}`)}),i.vision.configured&&e("#card-vision .card-desc",i.vision.system==="limelight"?`Limelight ${i.vision.limelightVersion}`:"PhotonVision"),i.statemachine.configured&&e("#card-statemachine .card-desc","Enabled")}
