function random(){
	var nowtime = new Date();
	var nowhour = ("0"+nowtime.getHours()).slice(-2);
	var nowmin = ("0"+nowtime.getMinutes()).slice(-2);
	var plusmin = 1
	if(nowhour>=21){
	var plusmax = 6
	} else if (nowhour>=9){
	var plusmax = 4
	} else if (nowhour>=7){
	var plusmax = 2
	} else if (nowhour>=6){
	var plusmax = 4
	} else if (nowhour>=5){
	var plusmax = 6
	} else {
	var plusmax = 10
	}
//時間帯別列車間隔調整
//１列目時刻分
	var min01 = ("0"+(nowtime.getMinutes() + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min01>=120){
	var min01re = ("0"+ (min01 - 120)).slice(-2);
	} else if(min01>=60){
	var min01re = ("0"+ (min01 - 60)).slice(-2);
	} else {
	var min01re = ("0"+ min01).slice(-2);
	}
	var minLED01 = document.getElementsByName("changeLED_stundby")[1];
	minLED01.src = "parts/time/m" + min01re + ".png";
	var num01m = Number(min01re);
	var channel12 = document.getElementsByName("timeM1")[0];
	channel12.value = channel12[num01m].value;
//１列目時刻時
	var hour01 = ("0"+nowtime.getHours()).slice(-2);
	if(min01>=120){
	var hour01re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min01>=60){
	var hour01re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour01re = ("0"+ hour01).slice(-2);
	}
	if(hour01re>=24){
	var hour01th = ("0"+ (hour01re - 24)).slice(-2);
	} else {
	var hour01th = ("0"+ hour01re).slice(-2);
	}
	var hourLED01 = document.getElementsByName("changeLED_stundby")[0];
	hourLED01.src = "parts/time/h" + hour01th + ".png";
	var num01h = Number(hour01th);
	var channel11 = document.getElementsByName("timeH1")[0];
	channel11.value = channel11[num01h].value;
//１列目のりば
	var channel14 = document.getElementsByName("tra1")[0];
	var pars1 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num14 = Math.floor( Math.random() * pars1.length );
	result14 = pars1[rand_num14];
	channel14.value = channel14[result14].value;
	var targetR14 = document.getElementsByName("changeLED")[1];
	targetR14.src = "parts/" + channel14.value + "_" + targetR14.src.slice(-7);
	
	if(result14=="0"){
		var colorgroup1= "none";
	}else if(result14=="1"){
		var colorgroup1= "none";
	}else if(result14=="2"){
		var colorgroup1= "toka";
	}else if(result14=="3"){
		var colorgroup1= "toka";
	}else if(result14=="4"){
		var colorgroup1= "leex";
	}else if(result14=="5"){
		var colorgroup1= "leex";
	}else if(result14=="6"){
		var colorgroup1= "leex";
	}else if(result14=="7"){
		var colorgroup1= "sysh";
	}else if(result14=="8"){
		var colorgroup1= "sysh";
	}else if(result14=="9"){
		var colorgroup1= "sysh";
	}else if(result14=="10"){
		var colorgroup1= "sysh";
	}else if(result14=="11"){
		var colorgroup1= "sysh";
	}else if(result14=="12"){
		var colorgroup1= "suka";
	}else if(result14=="13"){
		var colorgroup1= "suka";
	}else if(result14=="14"){
		var colorgroup1= "suka";
	}
//１列目行先
	var channel13 = document.getElementsByName("des1")[0];
	var judge1 = channel14[result14].value;
	if(judge1=="track/b01"){
	var pickup13 = new Array(2,2,2,2,23);
	}else if(judge1=="track/b02"){
	var pickup13 = new Array(2,2,2,2,23);
	}else if(judge1=="track/o01"){
	var pickup13 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge1=="track/o02"){
	var pickup13 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge1=="track/r02"){
	var pickup13 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge1=="track/r05"){
	var pickup13 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge1=="track/r06"){
	var pickup13 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge1=="track/g01"){
	var pickup13 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge1=="track/g02"){
	var pickup13 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge1=="track/g05"){
	var pickup13 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge1=="track/g06"){
	var pickup13 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge1=="track/g07"){
	var pickup13 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge1=="track/b05"){
	var pickup13 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge1=="track/b06"){
	var pickup13 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge1=="track/b07"){
	var pickup13 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup13 = new Array(23,23);
	}
	rand_num13 = Math.floor( Math.random() * pickup13.length );
	result13 = pickup13[rand_num13];
	channel13.value = channel13[result13].value;
	var targetR13 = document.getElementsByName("changeLED")[0];
	targetR13.src = "parts/" + channel13.value + "_" + targetR13.src.slice(-7);
//１列目路線
	var channel16 = document.getElementsByName("other1")[0];
	var route1 = result14 + "-" + result13;
	if(route1=="0-2"){
	var pickup16 = new Array(18,19);
	}else if(route1=="0-23"){
	var pickup16 = new Array(18,19);
	}else if(route1=="1-2"){
	var pickup16 = new Array(18,19);
	}else if(route1=="1-23"){
	var pickup16 = new Array(18,19);
	}else if(route1=="2-0"){
	var pickup16 = new Array(0,0);
	}else if(route1=="2-1"){
	var pickup16 = new Array(0,0);
	}else if(route1=="2-2"){
	var pickup16 = new Array(0,0);
	}else if(route1=="2-3"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-4"){
	var pickup16 = new Array(0,0);
	}else if(route1=="2-6"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-7"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-8"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-9"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-10"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-11"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-12"){
	var pickup16 = new Array(1,1);
	}else if(route1=="2-23"){
	var pickup16 = new Array(0,0,1,1,1);
	}else if(route1=="3-0"){
	var pickup16 = new Array(0,0);
	}else if(route1=="3-1"){
	var pickup16 = new Array(0,0);
	}else if(route1=="3-2"){
	var pickup16 = new Array(0,0);
	}else if(route1=="3-3"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-4"){
	var pickup16 = new Array(0,0);
	}else if(route1=="3-6"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-7"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-8"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-9"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-10"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-11"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-12"){
	var pickup16 = new Array(1,1);
	}else if(route1=="3-23"){
	var pickup16 = new Array(0,0,1,1,1);
	}else if(route1=="4-2"){
	var pickup16 = new Array(16,17);
	}else if(route1=="4-23"){
	var pickup16 = new Array(16,17);
	}else if(route1=="5-19"){
	var pickup16 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route1=="5-23"){
	var pickup16 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route1=="6-19"){
	var pickup16 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route1=="6-23"){
	var pickup16 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route1=="7-5"){
	var pickup16 = new Array(2,2);
	}else if(route1=="7-6"){
	var pickup16 = new Array(2,2);
	}else if(route1=="7-7"){
	var pickup16 = new Array(2,2);
	}else if(route1=="7-8"){
	var pickup16 = new Array(2,2);
	}else if(route1=="7-23"){
	var pickup16 = new Array(2,2);
	}else if(route1=="8-5"){
	var pickup16 = new Array(2,2);
	}else if(route1=="8-6"){
	var pickup16 = new Array(2,2);
	}else if(route1=="8-7"){
	var pickup16 = new Array(2,2);
	}else if(route1=="8-8"){
	var pickup16 = new Array(2,2);
	}else if(route1=="8-23"){
	var pickup16 = new Array(2,2);
	}else if(route1=="9-9"){
	var pickup16 = new Array(2,2);
	}else if(route1=="9-10"){
	var pickup16 = new Array(2,2);
	}else if(route1=="9-11"){
	var pickup16 = new Array(2,2);
	}else if(route1=="9-12"){
	var pickup16 = new Array(2,2);
	}else if(route1=="9-23"){
	var pickup16 = new Array(2,2);
	}else if(route1=="10-9"){
	var pickup16 = new Array(2,2);
	}else if(route1=="10-10"){
	var pickup16 = new Array(2,2);
	}else if(route1=="10-11"){
	var pickup16 = new Array(2,2);
	}else if(route1=="10-12"){
	var pickup16 = new Array(2,2);
	}else if(route1=="10-23"){
	var pickup16 = new Array(2,2);
	}else if(route1=="11-9"){
	var pickup16 = new Array(2,2);
	}else if(route1=="11-10"){
	var pickup16 = new Array(2,2);
	}else if(route1=="11-11"){
	var pickup16 = new Array(2,2);
	}else if(route1=="11-12"){
	var pickup16 = new Array(2,2);
	}else if(route1=="11-23"){
	var pickup16 = new Array(2,2);
	}else if(route1=="12-0"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-1"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-4"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-13"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-14"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-15"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-16"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-17"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-18"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-19"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-20"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-21"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-22"){
	var pickup16 = new Array(3,3);
	}else if(route1=="12-23"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-0"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-1"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-4"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-13"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-14"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-15"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-16"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-17"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-18"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-19"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-20"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-21"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-22"){
	var pickup16 = new Array(3,3);
	}else if(route1=="13-23"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-0"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-1"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-4"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-13"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-14"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-15"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-16"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-17"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-18"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-19"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-20"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-21"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-22"){
	var pickup16 = new Array(3,3);
	}else if(route1=="14-23"){
	var pickup16 = new Array(3,3);
	}else{
	var pickup16 = new Array(20,20);
	}
	rand_num16 = Math.floor( Math.random() * pickup16.length );
	result16 = pickup16[rand_num16];
	channel16.value = channel16[result16].value;
	var targetR16 = document.getElementsByName("changeLED")[3];
	targetR16.src = "parts/" + channel16.value + "_" + targetR16.src.slice(-7);
//１列目偏差値
	var channel17 = document.getElementsByName("hensachi1")[0];
	if(route1=="0-2"){
	var pickup17 = new Array(16,16);
	}else if(route1=="0-23"){
	var pickup17 = new Array(16,16);
	}else if(route1=="1-2"){
	var pickup17 = new Array(16,16);
	}else if(route1=="1-23"){
	var pickup17 = new Array(16,16);
	}else if(route1=="2-0"){
	var pickup17 = new Array(0,0);
	}else if(route1=="2-1"){
	var pickup17 = new Array(1,1);
	}else if(route1=="2-2"){
	var pickup17 = new Array(2,2);
	}else if(route1=="2-3"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-4"){
	var pickup17 = new Array(4,4);
	}else if(route1=="2-6"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-7"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-8"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-9"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-10"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-11"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-12"){
	var pickup17 = new Array(3,3);
	}else if(route1=="2-23"){
		if(result16=="0"){
		var pickup17 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup17 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route1=="3-0"){
	var pickup17 = new Array(0,0);
	}else if(route1=="3-1"){
	var pickup17 = new Array(1,1);
	}else if(route1=="3-2"){
	var pickup17 = new Array(2,2);
	}else if(route1=="3-3"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-4"){
	var pickup17 = new Array(4,4);
	}else if(route1=="3-6"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-7"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-8"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-9"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-10"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-11"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-12"){
	var pickup17 = new Array(3,3);
	}else if(route1=="3-23"){
		if(result16=="0"){
		var pickup17 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup17 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route1=="3-2"){
	var pickup17 = new Array(16,17);
	}else if(route1=="3-23"){
	var pickup17 = new Array(16,17);
	}else if(route1=="4-2"){
	var pickup17 = new Array(12,12);
	}else if(route1=="4-23"){
	var pickup17 = new Array(13,13);
	}else if(route1=="5-19"){
	var pickup17 = new Array(14,14);
	}else if(route1=="5-23"){
	var pickup17 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route1=="6-19"){
	var pickup17 = new Array(14,14);
	}else if(route1=="6-23"){
	var pickup17 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route1=="7-5"){
	var pickup17 = new Array(6,6);
	}else if(route1=="7-6"){
	var pickup17 = new Array(6,6);
	}else if(route1=="7-7"){
	var pickup17 = new Array(6,6);
	}else if(route1=="7-8"){
	var pickup17 = new Array(6,6);
	}else if(route1=="7-23"){
	var pickup17 = new Array(6,6);
	}else if(route1=="8-5"){
	var pickup17 = new Array(6,6);
	}else if(route1=="8-6"){
	var pickup17 = new Array(6,6);
	}else if(route1=="8-7"){
	var pickup17 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route1=="8-8"){
	var pickup17 = new Array(6,6);
	}else if(route1=="8-23"){
	var pickup17 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route1=="9-9"){
	var pickup17 = new Array(5,5);
	}else if(route1=="9-10"){
	var pickup17 = new Array(5,5);
	}else if(route1=="9-11"){
	var pickup17 = new Array(5,5);
	}else if(route1=="9-12"){
	var pickup17 = new Array(5,5);
	}else if(route1=="9-23"){
	var pickup17 = new Array(5,5);
	}else if(route1=="10-9"){
	var pickup17 = new Array(5,5);
	}else if(route1=="10-10"){
	var pickup17 = new Array(5,5);
	}else if(route1=="10-11"){
	var pickup17 = new Array(5,5);
	}else if(route1=="10-12"){
	var pickup17 = new Array(5,5);
	}else if(route1=="10-23"){
	var pickup17 = new Array(5,5);
	}else if(route1=="11-9"){
	var pickup17 = new Array(5,5);
	}else if(route1=="11-10"){
	var pickup17 = new Array(5,5);
	}else if(route1=="11-11"){
	var pickup17 = new Array(5,5);
	}else if(route1=="11-12"){
	var pickup17 = new Array(5,5);
	}else if(route1=="11-23"){
	var pickup17 = new Array(5,5);
	}else if(route1=="12-0"){
	var pickup17 = new Array(8,8);
	}else if(route1=="12-1"){
	var pickup17 = new Array(9,9);
	}else if(route1=="12-4"){
	var pickup17 = new Array(11,11);
	}else if(route1=="12-13"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-14"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-15"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-16"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-17"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-18"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-19"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-20"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-21"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-22"){
	var pickup17 = new Array(10,10);
	}else if(route1=="12-23"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-0"){
	var pickup17 = new Array(8,8);
	}else if(route1=="13-1"){
	var pickup17 = new Array(9,9);
	}else if(route1=="13-4"){
	var pickup17 = new Array(11,11);
	}else if(route1=="13-13"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-14"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-15"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-16"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-17"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-18"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-19"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-20"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-21"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-22"){
	var pickup17 = new Array(10,10);
	}else if(route1=="13-23"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-0"){
	var pickup17 = new Array(8,8);
	}else if(route1=="14-1"){
	var pickup17 = new Array(9,9);
	}else if(route1=="14-4"){
	var pickup17 = new Array(11,11);
	}else if(route1=="14-13"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-14"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-15"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-16"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-17"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-18"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-19"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-20"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-21"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-22"){
	var pickup17 = new Array(10,10);
	}else if(route1=="14-23"){
	var pickup17 = new Array(10,10);
	}else{
	var pickup17 = new Array(18,18);
	}
	rand_num17 = Math.floor( Math.random() * pickup17.length );
	result17 = pickup17[rand_num17];
	channel17.value = channel17[result17].value;
	var targetR17 = document.getElementsByName("changeLED_stundby")[2];
	targetR17.src = "parts/" + channel17.value + ".png";
//１列目始発
	var channel15 = document.getElementsByName("type1")[0];
	if(route1=="3-4"){
	var pickup15 = new Array(3,3);
	}else if(route1=="4-2"){
	var pickup15 = new Array(4,4);
	}else if(route1=="4-23"){
	var pickup15 = new Array(4,4);
	}else if(route1=="5-19"){
	var pickup15 = new Array(5,5);
	}else if(route1=="5-23"){
	var pickup15 = new Array(5,5);
	}else if(route1=="6-19"){
	var pickup15 = new Array(5,5);
	}else if(route1=="6-23"){
	var pickup15 = new Array(5,5);
	}else if(route1=="8-7"){
		if(result17=="7"){
		var pickup15 = new Array(2,2);
		}else{
		var pickup15 = new Array(0,0);
		}
	}else if(result14=="0"){
	var pickup15 = new Array(0,0);
	}else if(result14=="1"){
	var pickup15 = new Array(0,0);
	}else if(result14=="2"){
	var pickup15 = new Array(0,0);
	}else if(result14=="3"){
	var pickup15 = new Array(0,0);
	}else if(result14=="7"){
	var pickup15 = new Array(0,0);
	}else if(result14=="8"){
	var pickup15 = new Array(0,0);
	}else{
	var pickup15 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num15 = Math.floor( Math.random() * pickup15.length );
	result15 = pickup15[rand_num15];
	channel15.value = channel15[result15].value;
	var targetR15 = document.getElementsByName("changeLED")[2];
	targetR15.src = "parts/" + channel15.value + "_" + targetR15.src.slice(-7);
//================================================================================
//２列目時刻分
	var min02 = ("0"+(nowtime.getMinutes() + plusmax - 1 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min02>=120){
	var min02re = ("0"+ (min02 - 120)).slice(-2);
	} else if(min02>=60){
	var min02re = ("0"+ (min02 - 60)).slice(-2);
	} else {
	var min02re = ("0"+ min02).slice(-2);
	}
	var minLED02 = document.getElementsByName("changeLED_stundby")[4];
	minLED02.src = "parts/time/m" + min02re + ".png";
	var num02m = Number(min02re);
	var channel22 = document.getElementsByName("timeM2")[0];
	channel22.value = channel22[num02m].value;
//２列目時刻時
	var hour02 = ("0"+nowtime.getHours()).slice(-2);
	if(min02>=120){
	var hour02re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min02>=60){
	var hour02re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour02re = ("0"+hour02).slice(-2);
	}
	if(hour02re>=24){
	var hour02th = ("0"+ (hour02re - 24)).slice(-2);
	} else {
	var hour02th = ("0"+ hour02re).slice(-2);
	}
	var hourLED02 = document.getElementsByName("changeLED_stundby")[3];
	hourLED02.src = "parts/time/h" + hour02th + ".png";
	var num02h = Number(hour02th);
	var channel21 = document.getElementsByName("timeH2")[0];
	channel21.value = channel21[num02h].value;
//２列目のりば
	var channel24 = document.getElementsByName("tra2")[0];
	var pars2 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num24 = Math.floor( Math.random() * pars2.length );
	result24 = pars2[rand_num24];
	channel24.value = channel24[result24].value;
	var targetR24 = document.getElementsByName("changeLED")[5];
	targetR24.src = "parts/" + channel24.value + "_" + targetR24.src.slice(-7);
	
	if(result24=="0"){
		var colorgroup2= "none";
	}else if(result24=="1"){
		var colorgroup2= "none";
	}else if(result24=="2"){
		var colorgroup2= "toka";
	}else if(result24=="3"){
		var colorgroup2= "toka";
	}else if(result24=="4"){
		var colorgroup2= "leex";
	}else if(result24=="5"){
		var colorgroup2= "leex";
	}else if(result24=="6"){
		var colorgroup2= "leex";
	}else if(result24=="7"){
		var colorgroup2= "sysh";
	}else if(result24=="8"){
		var colorgroup2= "sysh";
	}else if(result24=="9"){
		var colorgroup2= "sysh";
	}else if(result24=="10"){
		var colorgroup2= "sysh";
	}else if(result24=="11"){
		var colorgroup2= "sysh";
	}else if(result24=="12"){
		var colorgroup2= "suka";
	}else if(result24=="13"){
		var colorgroup2= "suka";
	}else if(result24=="14"){
		var colorgroup2= "suka";
	}
//２列目行先
	var channel23 = document.getElementsByName("des2")[0];
	var judge2 = channel24[result24].value;
	if(judge2=="track/b01"){
	var pickup23 = new Array(2,2,2,2,23);
	}else if(judge2=="track/b02"){
	var pickup23 = new Array(2,2,2,2,23);
	}else if(judge2=="track/o01"){
	var pickup23 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge2=="track/o02"){
	var pickup23 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge2=="track/r02"){
	var pickup23 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge2=="track/r05"){
	var pickup23 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge2=="track/r06"){
	var pickup23 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge2=="track/g01"){
	var pickup23 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge2=="track/g02"){
	var pickup23 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge2=="track/g05"){
	var pickup23 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge2=="track/g06"){
	var pickup23 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge2=="track/g07"){
	var pickup23 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge2=="track/b05"){
	var pickup23 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge2=="track/b06"){
	var pickup23 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge2=="track/b07"){
	var pickup23 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup23 = new Array(23,23);
	}
	rand_num23 = Math.floor( Math.random() * pickup23.length );
	result23 = pickup23[rand_num23];
	channel23.value = channel23[result23].value;
	var targetR23 = document.getElementsByName("changeLED")[4];
	targetR23.src = "parts/" + channel23.value + "_" + targetR23.src.slice(-7);
//２列目路線
	var channel26 = document.getElementsByName("other2")[0];
	var route2 = result24 + "-" + result23;
	if(route2=="0-2"){
	var pickup26 = new Array(18,19);
	}else if(route2=="0-23"){
	var pickup26 = new Array(18,19);
	}else if(route2=="1-2"){
	var pickup26 = new Array(18,19);
	}else if(route2=="1-23"){
	var pickup26 = new Array(18,19);
	}else if(route2=="2-0"){
	var pickup26 = new Array(0,0);
	}else if(route2=="2-1"){
	var pickup26 = new Array(0,0);
	}else if(route2=="2-2"){
	var pickup26 = new Array(0,0);
	}else if(route2=="2-3"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-4"){
	var pickup26 = new Array(0,0);
	}else if(route2=="2-6"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-7"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-8"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-9"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-10"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-11"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-12"){
	var pickup26 = new Array(1,1);
	}else if(route2=="2-23"){
	var pickup26 = new Array(0,0,1,1,1);
	}else if(route2=="3-0"){
	var pickup26 = new Array(0,0);
	}else if(route2=="3-1"){
	var pickup26 = new Array(0,0);
	}else if(route2=="3-2"){
	var pickup26 = new Array(0,0);
	}else if(route2=="3-3"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-4"){
	var pickup26 = new Array(0,0);
	}else if(route2=="3-6"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-7"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-8"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-9"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-10"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-11"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-12"){
	var pickup26 = new Array(1,1);
	}else if(route2=="3-23"){
	var pickup26 = new Array(0,0,1,1,1);
	}else if(route2=="4-2"){
	var pickup26 = new Array(16,17);
	}else if(route2=="4-23"){
	var pickup26 = new Array(16,17);
	}else if(route2=="5-19"){
	var pickup26 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route2=="5-23"){
	var pickup26 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route2=="6-19"){
	var pickup26 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route2=="6-23"){
	var pickup26 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route2=="7-5"){
	var pickup26 = new Array(2,2);
	}else if(route2=="7-6"){
	var pickup26 = new Array(2,2);
	}else if(route2=="7-7"){
	var pickup26 = new Array(2,2);
	}else if(route2=="7-8"){
	var pickup26 = new Array(2,2);
	}else if(route2=="7-23"){
	var pickup26 = new Array(2,2);
	}else if(route2=="8-5"){
	var pickup26 = new Array(2,2);
	}else if(route2=="8-6"){
	var pickup26 = new Array(2,2);
	}else if(route2=="8-7"){
	var pickup26 = new Array(2,2);
	}else if(route2=="8-8"){
	var pickup26 = new Array(2,2);
	}else if(route2=="8-23"){
	var pickup26 = new Array(2,2);
	}else if(route2=="9-9"){
	var pickup26 = new Array(2,2);
	}else if(route2=="9-10"){
	var pickup26 = new Array(2,2);
	}else if(route2=="9-11"){
	var pickup26 = new Array(2,2);
	}else if(route2=="9-12"){
	var pickup26 = new Array(2,2);
	}else if(route2=="9-23"){
	var pickup26 = new Array(2,2);
	}else if(route2=="10-9"){
	var pickup26 = new Array(2,2);
	}else if(route2=="10-10"){
	var pickup26 = new Array(2,2);
	}else if(route2=="10-11"){
	var pickup26 = new Array(2,2);
	}else if(route2=="10-12"){
	var pickup26 = new Array(2,2);
	}else if(route2=="10-23"){
	var pickup26 = new Array(2,2);
	}else if(route2=="11-9"){
	var pickup26 = new Array(2,2);
	}else if(route2=="11-10"){
	var pickup26 = new Array(2,2);
	}else if(route2=="11-11"){
	var pickup26 = new Array(2,2);
	}else if(route2=="11-12"){
	var pickup26 = new Array(2,2);
	}else if(route2=="11-23"){
	var pickup26 = new Array(2,2);
	}else if(route2=="12-0"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-1"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-4"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-13"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-14"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-15"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-16"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-17"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-18"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-19"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-20"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-21"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-22"){
	var pickup26 = new Array(3,3);
	}else if(route2=="12-23"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-0"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-1"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-4"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-13"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-14"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-15"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-16"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-17"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-18"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-19"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-20"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-21"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-22"){
	var pickup26 = new Array(3,3);
	}else if(route2=="13-23"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-0"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-1"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-4"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-13"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-14"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-15"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-16"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-17"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-18"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-19"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-20"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-21"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-22"){
	var pickup26 = new Array(3,3);
	}else if(route2=="14-23"){
	var pickup26 = new Array(3,3);
	}else{
	var pickup26 = new Array(20,20);
	}
	rand_num26 = Math.floor( Math.random() * pickup26.length );
	result26 = pickup26[rand_num26];
	channel26.value = channel26[result26].value;
	var targetR26 = document.getElementsByName("changeLED")[7];
	targetR26.src = "parts/" + channel26.value + "_" + targetR26.src.slice(-7);
//２列目偏差値
	var channel27 = document.getElementsByName("hensachi2")[0];
	if(route2=="0-2"){
	var pickup27 = new Array(16,16);
	}else if(route2=="0-23"){
	var pickup27 = new Array(16,16);
	}else if(route2=="1-2"){
	var pickup27 = new Array(16,16);
	}else if(route2=="1-23"){
	var pickup27 = new Array(16,16);
	}else if(route2=="2-0"){
	var pickup27 = new Array(0,0);
	}else if(route2=="2-1"){
	var pickup27 = new Array(1,1);
	}else if(route2=="2-2"){
	var pickup27 = new Array(2,2);
	}else if(route2=="2-3"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-4"){
	var pickup27 = new Array(4,4);
	}else if(route2=="2-6"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-7"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-8"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-9"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-10"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-11"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-12"){
	var pickup27 = new Array(3,3);
	}else if(route2=="2-23"){
		if(result26=="0"){
		var pickup27 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup27 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route2=="3-0"){
	var pickup27 = new Array(0,0);
	}else if(route2=="3-1"){
	var pickup27 = new Array(1,1);
	}else if(route2=="3-2"){
	var pickup27 = new Array(2,2);
	}else if(route2=="3-3"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-4"){
	var pickup27 = new Array(4,4);
	}else if(route2=="3-6"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-7"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-8"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-9"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-10"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-11"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-12"){
	var pickup27 = new Array(3,3);
	}else if(route2=="3-23"){
		if(result26=="0"){
		var pickup27 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup27 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route2=="3-2"){
	var pickup27 = new Array(16,17);
	}else if(route2=="3-23"){
	var pickup27 = new Array(16,17);
	}else if(route2=="4-2"){
	var pickup27 = new Array(12,12);
	}else if(route2=="4-23"){
	var pickup27 = new Array(13,13);
	}else if(route2=="5-19"){
	var pickup27 = new Array(14,14);
	}else if(route2=="5-23"){
	var pickup27 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route2=="6-19"){
	var pickup27 = new Array(14,14);
	}else if(route2=="6-23"){
	var pickup27 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route2=="7-5"){
	var pickup27 = new Array(6,6);
	}else if(route2=="7-6"){
	var pickup27 = new Array(6,6);
	}else if(route2=="7-7"){
	var pickup27 = new Array(6,6);
	}else if(route2=="7-8"){
	var pickup27 = new Array(6,6);
	}else if(route2=="7-23"){
	var pickup27 = new Array(6,6);
	}else if(route2=="8-5"){
	var pickup27 = new Array(6,6);
	}else if(route2=="8-6"){
	var pickup27 = new Array(6,6);
	}else if(route2=="8-7"){
	var pickup27 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route2=="8-8"){
	var pickup27 = new Array(6,6);
	}else if(route2=="8-23"){
	var pickup27 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route2=="9-9"){
	var pickup27 = new Array(5,5);
	}else if(route2=="9-10"){
	var pickup27 = new Array(5,5);
	}else if(route2=="9-11"){
	var pickup27 = new Array(5,5);
	}else if(route2=="9-12"){
	var pickup27 = new Array(5,5);
	}else if(route2=="9-23"){
	var pickup27 = new Array(5,5);
	}else if(route2=="10-9"){
	var pickup27 = new Array(5,5);
	}else if(route2=="10-10"){
	var pickup27 = new Array(5,5);
	}else if(route2=="10-11"){
	var pickup27 = new Array(5,5);
	}else if(route2=="10-12"){
	var pickup27 = new Array(5,5);
	}else if(route2=="10-23"){
	var pickup27 = new Array(5,5);
	}else if(route2=="11-9"){
	var pickup27 = new Array(5,5);
	}else if(route2=="11-10"){
	var pickup27 = new Array(5,5);
	}else if(route2=="11-11"){
	var pickup27 = new Array(5,5);
	}else if(route2=="11-12"){
	var pickup27 = new Array(5,5);
	}else if(route2=="11-23"){
	var pickup27 = new Array(5,5);
	}else if(route2=="12-0"){
	var pickup27 = new Array(8,8);
	}else if(route2=="12-1"){
	var pickup27 = new Array(9,9);
	}else if(route2=="12-4"){
	var pickup27 = new Array(11,11);
	}else if(route2=="12-13"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-14"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-15"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-16"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-17"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-18"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-19"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-20"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-21"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-22"){
	var pickup27 = new Array(10,10);
	}else if(route2=="12-23"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-0"){
	var pickup27 = new Array(8,8);
	}else if(route2=="13-1"){
	var pickup27 = new Array(9,9);
	}else if(route2=="13-4"){
	var pickup27 = new Array(11,11);
	}else if(route2=="13-13"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-14"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-15"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-16"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-17"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-18"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-19"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-20"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-21"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-22"){
	var pickup27 = new Array(10,10);
	}else if(route2=="13-23"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-0"){
	var pickup27 = new Array(8,8);
	}else if(route2=="14-1"){
	var pickup27 = new Array(9,9);
	}else if(route2=="14-4"){
	var pickup27 = new Array(11,11);
	}else if(route2=="14-13"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-14"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-15"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-16"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-17"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-18"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-19"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-20"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-21"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-22"){
	var pickup27 = new Array(10,10);
	}else if(route2=="14-23"){
	var pickup27 = new Array(10,10);
	}else{
	var pickup27 = new Array(18,18);
	}
	rand_num27 = Math.floor( Math.random() * pickup27.length );
	result27 = pickup27[rand_num27];
	channel27.value = channel27[result27].value;
	var targetR27 = document.getElementsByName("changeLED_stundby")[5];
	targetR27.src = "parts/" + channel27.value + ".png";
//２列目始発
	var channel25 = document.getElementsByName("type2")[0];
	if(route2=="3-4"){
	var pickup25 = new Array(3,3);
	}else if(route2=="4-2"){
	var pickup25 = new Array(4,4);
	}else if(route2=="4-23"){
	var pickup25 = new Array(4,4);
	}else if(route2=="5-19"){
	var pickup25 = new Array(5,5);
	}else if(route2=="5-23"){
	var pickup25 = new Array(5,5);
	}else if(route2=="6-19"){
	var pickup25 = new Array(5,5);
	}else if(route2=="6-23"){
	var pickup25 = new Array(5,5);
	}else if(route2=="8-7"){
		if(result27=="7"){
		var pickup25 = new Array(2,2);
		}else{
		var pickup25 = new Array(0,0);
		}
	}else if(result24=="0"){
	var pickup25 = new Array(0,0);
	}else if(result24=="1"){
	var pickup25 = new Array(0,0);
	}else if(result24=="2"){
	var pickup25 = new Array(0,0);
	}else if(result24=="3"){
	var pickup25 = new Array(0,0);
	}else if(result24=="7"){
	var pickup25 = new Array(0,0);
	}else if(result24=="8"){
	var pickup25 = new Array(0,0);
	}else{
	var pickup25 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num25 = Math.floor( Math.random() * pickup25.length );
	result25 = pickup25[rand_num25];
	channel25.value = channel25[result25].value;
	var targetR25 = document.getElementsByName("changeLED")[6];
	targetR25.src = "parts/" + channel25.value + "_" + targetR25.src.slice(-7);
//================================================================================
//３列目時刻分
	var min03 = ("0"+(nowtime.getMinutes() + (plusmax * 2) - 2 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min03>=120){
	var min03re = ("0"+ (min03 - 120)).slice(-2);
	} else if(min03>=60){
	var min03re = ("0"+ (min03 - 60)).slice(-2);
	} else {
	var min03re = ("0"+ min03).slice(-2);
	}
	var minLED03 = document.getElementsByName("changeLED_stundby")[7];
	minLED03.src = "parts/time/m" + min03re + ".png";
	var num03m = Number(min03re);
	var channel32 = document.getElementsByName("timeM3")[0];
	channel32.value = channel32[num03m].value;
//３列目時刻時
	var hour03 = ("0"+nowtime.getHours()).slice(-2);
	if(min03>=120){
	var hour03re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min03>=60){
	var hour03re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour03re = ("0"+hour03).slice(-2);
	}
	if(hour03re>=24){
	var hour03th = ("0"+ (hour03re - 24)).slice(-2);
	} else {
	var hour03th = ("0"+ hour03re).slice(-2);
	}
	var hourLED03 = document.getElementsByName("changeLED_stundby")[6];
	hourLED03.src = "parts/time/h" + hour03th + ".png";
	var num03h = Number(hour03th);
	var channel31 = document.getElementsByName("timeH3")[0];
	channel31.value = channel31[num03h].value;
//３列目のりば
	var channel34 = document.getElementsByName("tra3")[0];
	var pars3 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num34 = Math.floor( Math.random() * pars3.length );
	result34 = pars3[rand_num34];
	if(result34=="0"){
		var colorgroup3= "none";
	}else if(result34=="1"){
		var colorgroup3= "none";
	}else if(result34=="2"){
		var colorgroup3= "toka";
	}else if(result34=="3"){
		var colorgroup3= "toka";
	}else if(result34=="4"){
		var colorgroup3= "leex";
	}else if(result34=="5"){
		var colorgroup3= "leex";
	}else if(result34=="6"){
		var colorgroup3= "leex";
	}else if(result34=="7"){
		var colorgroup3= "sysh";
	}else if(result34=="8"){
		var colorgroup3= "sysh";
	}else if(result34=="9"){
		var colorgroup3= "sysh";
	}else if(result34=="10"){
		var colorgroup3= "sysh";
	}else if(result34=="11"){
		var colorgroup3= "sysh";
	}else if(result34=="12"){
		var colorgroup3= "suka";
	}else if(result34=="13"){
		var colorgroup3= "suka";
	}else if(result34=="14"){
		var colorgroup3= "suka";
	}
	if(colorgroup3==colorgroup2){
		if(colorgroup3==colorgroup1){
			while(colorgroup3==colorgroup1){
			var pars3 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num34 = Math.floor( Math.random() * pars3.length );
			result34 = pars3[rand_num34];
			if(result34=="0"){
				var colorgroup3= "none";
			}else if(result34=="1"){
				var colorgroup3= "none";
			}else if(result34=="2"){
				var colorgroup3= "toka";
			}else if(result34=="3"){
				var colorgroup3= "toka";
			}else if(result34=="4"){
				var colorgroup3= "leex";
			}else if(result34=="5"){
				var colorgroup3= "leex";
			}else if(result34=="6"){
				var colorgroup3= "leex";
			}else if(result34=="7"){
				var colorgroup3= "sysh";
			}else if(result34=="8"){
				var colorgroup3= "sysh";
			}else if(result34=="9"){
				var colorgroup3= "sysh";
			}else if(result34=="10"){
				var colorgroup3= "sysh";
			}else if(result34=="11"){
				var colorgroup3= "sysh";
			}else if(result34=="12"){
				var colorgroup3= "suka";
			}else if(result34=="13"){
				var colorgroup3= "suka";
			}else if(result34=="14"){
				var colorgroup3= "suka";
	}
			}
		}
	}
	channel34.value = channel34[result34].value;
	var targetR34 = document.getElementsByName("changeLED")[9];
	targetR34.src = "parts/" + channel34.value + "_" + targetR34.src.slice(-7);
//３列目行先
	var channel33 = document.getElementsByName("des3")[0];
	var judge3 = channel34[result34].value;
	if(judge3=="track/b01"){
	var pickup33 = new Array(2,2,2,2,23);
	}else if(judge3=="track/b02"){
	var pickup33 = new Array(2,2,2,2,23);
	}else if(judge3=="track/o01"){
	var pickup33 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge3=="track/o02"){
	var pickup33 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge3=="track/r02"){
	var pickup33 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge3=="track/r05"){
	var pickup33 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge3=="track/r06"){
	var pickup33 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge3=="track/g01"){
	var pickup33 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge3=="track/g02"){
	var pickup33 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge3=="track/g05"){
	var pickup33 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge3=="track/g06"){
	var pickup33 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge3=="track/g07"){
	var pickup33 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge3=="track/b05"){
	var pickup33 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge3=="track/b06"){
	var pickup33 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge3=="track/b07"){
	var pickup33 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup33 = new Array(23,23);
	}
	rand_num33 = Math.floor( Math.random() * pickup33.length );
	result33 = pickup33[rand_num33];
	channel33.value = channel33[result33].value;
	var targetR33 = document.getElementsByName("changeLED")[8];
	targetR33.src = "parts/" + channel33.value + "_" + targetR33.src.slice(-7);
//３列目路線
	var channel36 = document.getElementsByName("other3")[0];
	var route3 = result34 + "-" + result33;
	if(route3=="0-2"){
	var pickup36 = new Array(18,19);
	}else if(route3=="0-23"){
	var pickup36 = new Array(18,19);
	}else if(route3=="1-2"){
	var pickup36 = new Array(18,19);
	}else if(route3=="1-23"){
	var pickup36 = new Array(18,19);
	}else if(route3=="2-0"){
	var pickup36 = new Array(0,0);
	}else if(route3=="2-1"){
	var pickup36 = new Array(0,0);
	}else if(route3=="2-2"){
	var pickup36 = new Array(0,0);
	}else if(route3=="2-3"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-4"){
	var pickup36 = new Array(0,0);
	}else if(route3=="2-6"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-7"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-8"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-9"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-10"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-11"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-12"){
	var pickup36 = new Array(1,1);
	}else if(route3=="2-23"){
	var pickup36 = new Array(0,0,1,1,1);
	}else if(route3=="3-0"){
	var pickup36 = new Array(0,0);
	}else if(route3=="3-1"){
	var pickup36 = new Array(0,0);
	}else if(route3=="3-2"){
	var pickup36 = new Array(0,0);
	}else if(route3=="3-3"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-4"){
	var pickup36 = new Array(0,0);
	}else if(route3=="3-6"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-7"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-8"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-9"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-10"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-11"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-12"){
	var pickup36 = new Array(1,1);
	}else if(route3=="3-23"){
	var pickup36 = new Array(0,0,1,1,1);
	}else if(route3=="4-2"){
	var pickup36 = new Array(16,17);
	}else if(route3=="4-23"){
	var pickup36 = new Array(16,17);
	}else if(route3=="5-19"){
	var pickup36 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route3=="5-23"){
	var pickup36 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route3=="6-19"){
	var pickup36 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route3=="6-23"){
	var pickup36 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route3=="7-5"){
	var pickup36 = new Array(2,2);
	}else if(route3=="7-6"){
	var pickup36 = new Array(2,2);
	}else if(route3=="7-7"){
	var pickup36 = new Array(2,2);
	}else if(route3=="7-8"){
	var pickup36 = new Array(2,2);
	}else if(route3=="7-23"){
	var pickup36 = new Array(2,2);
	}else if(route3=="8-5"){
	var pickup36 = new Array(2,2);
	}else if(route3=="8-6"){
	var pickup36 = new Array(2,2);
	}else if(route3=="8-7"){
	var pickup36 = new Array(2,2);
	}else if(route3=="8-8"){
	var pickup36 = new Array(2,2);
	}else if(route3=="8-23"){
	var pickup36 = new Array(2,2);
	}else if(route3=="9-9"){
	var pickup36 = new Array(2,2);
	}else if(route3=="9-10"){
	var pickup36 = new Array(2,2);
	}else if(route3=="9-11"){
	var pickup36 = new Array(2,2);
	}else if(route3=="9-12"){
	var pickup36 = new Array(2,2);
	}else if(route3=="9-23"){
	var pickup36 = new Array(2,2);
	}else if(route3=="10-9"){
	var pickup36 = new Array(2,2);
	}else if(route3=="10-10"){
	var pickup36 = new Array(2,2);
	}else if(route3=="10-11"){
	var pickup36 = new Array(2,2);
	}else if(route3=="10-12"){
	var pickup36 = new Array(2,2);
	}else if(route3=="10-23"){
	var pickup36 = new Array(2,2);
	}else if(route3=="11-9"){
	var pickup36 = new Array(2,2);
	}else if(route3=="11-10"){
	var pickup36 = new Array(2,2);
	}else if(route3=="11-11"){
	var pickup36 = new Array(2,2);
	}else if(route3=="11-12"){
	var pickup36 = new Array(2,2);
	}else if(route3=="11-23"){
	var pickup36 = new Array(2,2);
	}else if(route3=="12-0"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-1"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-4"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-13"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-14"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-15"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-16"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-17"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-18"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-19"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-20"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-21"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-22"){
	var pickup36 = new Array(3,3);
	}else if(route3=="12-23"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-0"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-1"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-4"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-13"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-14"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-15"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-16"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-17"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-18"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-19"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-20"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-21"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-22"){
	var pickup36 = new Array(3,3);
	}else if(route3=="13-23"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-0"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-1"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-4"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-13"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-14"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-15"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-16"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-17"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-18"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-19"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-20"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-21"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-22"){
	var pickup36 = new Array(3,3);
	}else if(route3=="14-23"){
	var pickup36 = new Array(3,3);
	}else{
	var pickup36 = new Array(20,20);
	}
	rand_num36 = Math.floor( Math.random() * pickup36.length );
	result36 = pickup36[rand_num36];
	channel36.value = channel36[result36].value;
	var targetR36 = document.getElementsByName("changeLED")[11];
	targetR36.src = "parts/" + channel36.value + "_" + targetR36.src.slice(-7);
//３列目偏差値
	var channel37 = document.getElementsByName("hensachi3")[0];
	if(route3=="0-2"){
	var pickup37 = new Array(16,16);
	}else if(route3=="0-23"){
	var pickup37 = new Array(16,16);
	}else if(route3=="1-2"){
	var pickup37 = new Array(16,16);
	}else if(route3=="1-23"){
	var pickup37 = new Array(16,16);
	}else if(route3=="2-0"){
	var pickup37 = new Array(0,0);
	}else if(route3=="2-1"){
	var pickup37 = new Array(1,1);
	}else if(route3=="2-2"){
	var pickup37 = new Array(2,2);
	}else if(route3=="2-3"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-4"){
	var pickup37 = new Array(4,4);
	}else if(route3=="2-6"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-7"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-8"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-9"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-10"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-11"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-12"){
	var pickup37 = new Array(3,3);
	}else if(route3=="2-23"){
		if(result36=="0"){
		var pickup37 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup37 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route3=="3-0"){
	var pickup37 = new Array(0,0);
	}else if(route3=="3-1"){
	var pickup37 = new Array(1,1);
	}else if(route3=="3-2"){
	var pickup37 = new Array(2,2);
	}else if(route3=="3-3"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-4"){
	var pickup37 = new Array(4,4);
	}else if(route3=="3-6"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-7"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-8"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-9"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-10"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-11"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-12"){
	var pickup37 = new Array(3,3);
	}else if(route3=="3-23"){
		if(result36=="0"){
		var pickup37 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup37 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route3=="3-2"){
	var pickup37 = new Array(16,17);
	}else if(route3=="3-23"){
	var pickup37 = new Array(16,17);
	}else if(route3=="4-2"){
	var pickup37 = new Array(12,12);
	}else if(route3=="4-23"){
	var pickup37 = new Array(13,13);
	}else if(route3=="5-19"){
	var pickup37 = new Array(14,14);
	}else if(route3=="5-23"){
	var pickup37 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route3=="6-19"){
	var pickup37 = new Array(14,14);
	}else if(route3=="6-23"){
	var pickup37 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route3=="7-5"){
	var pickup37 = new Array(6,6);
	}else if(route3=="7-6"){
	var pickup37 = new Array(6,6);
	}else if(route3=="7-7"){
	var pickup37 = new Array(6,6);
	}else if(route3=="7-8"){
	var pickup37 = new Array(6,6);
	}else if(route3=="7-23"){
	var pickup37 = new Array(6,6);
	}else if(route3=="8-5"){
	var pickup37 = new Array(6,6);
	}else if(route3=="8-6"){
	var pickup37 = new Array(6,6);
	}else if(route3=="8-7"){
	var pickup37 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route3=="8-8"){
	var pickup37 = new Array(6,6);
	}else if(route3=="8-23"){
	var pickup37 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route3=="9-9"){
	var pickup37 = new Array(5,5);
	}else if(route3=="9-10"){
	var pickup37 = new Array(5,5);
	}else if(route3=="9-11"){
	var pickup37 = new Array(5,5);
	}else if(route3=="9-12"){
	var pickup37 = new Array(5,5);
	}else if(route3=="9-23"){
	var pickup37 = new Array(5,5);
	}else if(route3=="10-9"){
	var pickup37 = new Array(5,5);
	}else if(route3=="10-10"){
	var pickup37 = new Array(5,5);
	}else if(route3=="10-11"){
	var pickup37 = new Array(5,5);
	}else if(route3=="10-12"){
	var pickup37 = new Array(5,5);
	}else if(route3=="10-23"){
	var pickup37 = new Array(5,5);
	}else if(route3=="11-9"){
	var pickup37 = new Array(5,5);
	}else if(route3=="11-10"){
	var pickup37 = new Array(5,5);
	}else if(route3=="11-11"){
	var pickup37 = new Array(5,5);
	}else if(route3=="11-12"){
	var pickup37 = new Array(5,5);
	}else if(route3=="11-23"){
	var pickup37 = new Array(5,5);
	}else if(route3=="12-0"){
	var pickup37 = new Array(8,8);
	}else if(route3=="12-1"){
	var pickup37 = new Array(9,9);
	}else if(route3=="12-4"){
	var pickup37 = new Array(11,11);
	}else if(route3=="12-13"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-14"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-15"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-16"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-17"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-18"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-19"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-20"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-21"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-22"){
	var pickup37 = new Array(10,10);
	}else if(route3=="12-23"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-0"){
	var pickup37 = new Array(8,8);
	}else if(route3=="13-1"){
	var pickup37 = new Array(9,9);
	}else if(route3=="13-4"){
	var pickup37 = new Array(11,11);
	}else if(route3=="13-13"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-14"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-15"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-16"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-17"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-18"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-19"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-20"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-21"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-22"){
	var pickup37 = new Array(10,10);
	}else if(route3=="13-23"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-0"){
	var pickup37 = new Array(8,8);
	}else if(route3=="14-1"){
	var pickup37 = new Array(9,9);
	}else if(route3=="14-4"){
	var pickup37 = new Array(11,11);
	}else if(route3=="14-13"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-14"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-15"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-16"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-17"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-18"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-19"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-20"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-21"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-22"){
	var pickup37 = new Array(10,10);
	}else if(route3=="14-23"){
	var pickup37 = new Array(10,10);
	}else{
	var pickup37 = new Array(18,18);
	}
	rand_num37 = Math.floor( Math.random() * pickup37.length );
	result37 = pickup37[rand_num37];
	channel37.value = channel37[result37].value;
	var targetR37 = document.getElementsByName("changeLED_stundby")[8];
	targetR37.src = "parts/" + channel37.value + ".png";
//３列目始発
	var channel35 = document.getElementsByName("type3")[0];
	if(route3=="3-4"){
	var pickup35 = new Array(3,3);
	}else if(route3=="4-2"){
	var pickup35 = new Array(4,4);
	}else if(route3=="4-23"){
	var pickup35 = new Array(4,4);
	}else if(route3=="5-19"){
	var pickup35 = new Array(5,5);
	}else if(route3=="5-23"){
	var pickup35 = new Array(5,5);
	}else if(route3=="6-19"){
	var pickup35 = new Array(5,5);
	}else if(route3=="6-23"){
	var pickup35 = new Array(5,5);
	}else if(route3=="8-7"){
		if(result37=="7"){
		var pickup35 = new Array(2,2);
		}else{
		var pickup35 = new Array(0,0);
		}
	}else if(result34=="0"){
	var pickup35 = new Array(0,0);
	}else if(result34=="1"){
	var pickup35 = new Array(0,0);
	}else if(result34=="2"){
	var pickup35 = new Array(0,0);
	}else if(result34=="3"){
	var pickup35 = new Array(0,0);
	}else if(result34=="7"){
	var pickup35 = new Array(0,0);
	}else if(result34=="8"){
	var pickup35 = new Array(0,0);
	}else{
	var pickup35 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num35 = Math.floor( Math.random() * pickup35.length );
	result35 = pickup35[rand_num35];
	channel35.value = channel35[result35].value;
	var targetR35 = document.getElementsByName("changeLED")[10];
	targetR35.src = "parts/" + channel35.value + "_" + targetR35.src.slice(-7);
//================================================================================
//４列目時刻分
	var min04 = ("0"+(nowtime.getMinutes() + (plusmax * 3) - 3 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min04>=120){
	var min04re = ("0"+ (min04 - 120)).slice(-2);
	} else if(min04>=60){
	var min04re = ("0"+ (min04 - 60)).slice(-2);
	} else {
	var min04re = ("0"+ min04).slice(-2);
	}
	var minLED04 = document.getElementsByName("changeLED_stundby")[10];
	minLED04.src = "parts/time/m" + min04re + ".png";
	var num04m = Number(min04re);
	var channel42 = document.getElementsByName("timeM4")[0];
	channel42.value = channel42[num04m].value;
//４列目時刻時
	var hour04 = ("0"+nowtime.getHours()).slice(-2);
	if(min04>=120){
	var hour04re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min04>=60){
	var hour04re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour04re = ("0"+hour04).slice(-2);
	}
	if(hour04re>=24){
	var hour04th = ("0"+ (hour04re - 24)).slice(-2);
	} else {
	var hour04th = ("0"+ hour04re).slice(-2);
	}
	var hourLED04 = document.getElementsByName("changeLED_stundby")[9];
	hourLED04.src = "parts/time/h" + hour04th + ".png";
	var num04h = Number(hour04th);
	var channel41 = document.getElementsByName("timeH4")[0];
	channel41.value = channel41[num04h].value;
//４列目のりば
	var channel44 = document.getElementsByName("tra4")[0];
	var pars4 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num44 = Math.floor( Math.random() * pars3.length );
	result44 = pars4[rand_num44];
	
	if(result44=="0"){
		var colorgroup4= "none";
	}else if(result44=="1"){
		var colorgroup4= "none";
	}else if(result44=="2"){
		var colorgroup4= "toka";
	}else if(result44=="3"){
		var colorgroup4= "toka";
	}else if(result44=="4"){
		var colorgroup4= "leex";
	}else if(result44=="5"){
		var colorgroup4= "leex";
	}else if(result44=="6"){
		var colorgroup4= "leex";
	}else if(result44=="7"){
		var colorgroup4= "sysh";
	}else if(result44=="8"){
		var colorgroup4= "sysh";
	}else if(result44=="9"){
		var colorgroup4= "sysh";
	}else if(result44=="10"){
		var colorgroup4= "sysh";
	}else if(result44=="11"){
		var colorgroup4= "sysh";
	}else if(result44=="12"){
		var colorgroup4= "suka";
	}else if(result44=="13"){
		var colorgroup4= "suka";
	}else if(result44=="14"){
		var colorgroup4= "suka";
	}
	if(colorgroup4==colorgroup3){
		if(colorgroup4==colorgroup2){
			while(colorgroup4==colorgroup2){
			var pars4 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num44 = Math.floor( Math.random() * pars4.length );
			result44 = pars4[rand_num44];
			if(result44=="0"){
				var colorgroup4= "none";
			}else if(result44=="1"){
				var colorgroup4= "none";
			}else if(result44=="2"){
				var colorgroup4= "toka";
			}else if(result44=="3"){
				var colorgroup4= "toka";
			}else if(result44=="4"){
				var colorgroup4= "leex";
			}else if(result44=="5"){
				var colorgroup4= "leex";
			}else if(result44=="6"){
				var colorgroup4= "leex";
			}else if(result44=="7"){
				var colorgroup4= "sysh";
			}else if(result44=="8"){
				var colorgroup4= "sysh";
			}else if(result44=="9"){
				var colorgroup4= "sysh";
			}else if(result44=="10"){
				var colorgroup4= "sysh";
			}else if(result44=="11"){
				var colorgroup4= "sysh";
			}else if(result44=="12"){
				var colorgroup4= "suka";
			}else if(result44=="13"){
				var colorgroup4= "suka";
			}else if(result44=="14"){
				var colorgroup4= "suka";
	}
			}
		}
	}
	channel44.value = channel44[result44].value;
	var targetR44 = document.getElementsByName("changeLED")[13];
	targetR44.src = "parts/" + channel44.value + "_" + targetR44.src.slice(-7);
//４列目行先
	var channel43 = document.getElementsByName("des4")[0];
	var judge4 = channel44[result44].value;
	if(judge4=="track/b01"){
	var pickup43 = new Array(2,2,2,2,23);
	}else if(judge4=="track/b02"){
	var pickup43 = new Array(2,2,2,2,23);
	}else if(judge4=="track/o01"){
	var pickup43 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge4=="track/o02"){
	var pickup43 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge4=="track/r02"){
	var pickup43 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge4=="track/r05"){
	var pickup43 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge4=="track/r06"){
	var pickup43 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge4=="track/g01"){
	var pickup43 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge4=="track/g02"){
	var pickup43 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge4=="track/g05"){
	var pickup43 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge4=="track/g06"){
	var pickup43 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge4=="track/g07"){
	var pickup43 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge4=="track/b05"){
	var pickup43 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge4=="track/b06"){
	var pickup43 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge4=="track/b07"){
	var pickup43 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup43 = new Array(23,23);
	}
	rand_num43 = Math.floor( Math.random() * pickup43.length );
	result43 = pickup43[rand_num43];
	channel43.value = channel43[result43].value;
	var targetR43 = document.getElementsByName("changeLED")[12];
	targetR43.src = "parts/" + channel43.value + "_" + targetR43.src.slice(-7);
//４列目路線
	var channel46 = document.getElementsByName("other4")[0];
	var route4 = result44 + "-" + result43;
	if(route4=="0-2"){
	var pickup46 = new Array(18,19);
	}else if(route4=="0-23"){
	var pickup46 = new Array(18,19);
	}else if(route4=="1-2"){
	var pickup46 = new Array(18,19);
	}else if(route4=="1-23"){
	var pickup46 = new Array(18,19);
	}else if(route4=="2-0"){
	var pickup46 = new Array(0,0);
	}else if(route4=="2-1"){
	var pickup46 = new Array(0,0);
	}else if(route4=="2-2"){
	var pickup46 = new Array(0,0);
	}else if(route4=="2-3"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-4"){
	var pickup46 = new Array(0,0);
	}else if(route4=="2-6"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-7"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-8"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-9"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-10"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-11"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-12"){
	var pickup46 = new Array(1,1);
	}else if(route4=="2-23"){
	var pickup46 = new Array(0,0,1,1,1);
	}else if(route4=="3-0"){
	var pickup46 = new Array(0,0);
	}else if(route4=="3-1"){
	var pickup46 = new Array(0,0);
	}else if(route4=="3-2"){
	var pickup46 = new Array(0,0);
	}else if(route4=="3-3"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-4"){
	var pickup46 = new Array(0,0);
	}else if(route4=="3-6"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-7"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-8"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-9"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-10"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-11"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-12"){
	var pickup46 = new Array(1,1);
	}else if(route4=="3-23"){
	var pickup46 = new Array(0,0,1,1,1);
	}else if(route4=="4-2"){
	var pickup46 = new Array(16,17);
	}else if(route4=="4-23"){
	var pickup46 = new Array(16,17);
	}else if(route4=="5-19"){
	var pickup46 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route4=="5-23"){
	var pickup46 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route4=="6-19"){
	var pickup46 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route4=="6-23"){
	var pickup46 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route4=="7-5"){
	var pickup46 = new Array(2,2);
	}else if(route4=="7-6"){
	var pickup46 = new Array(2,2);
	}else if(route4=="7-7"){
	var pickup46 = new Array(2,2);
	}else if(route4=="7-8"){
	var pickup46 = new Array(2,2);
	}else if(route4=="7-23"){
	var pickup46 = new Array(2,2);
	}else if(route4=="8-5"){
	var pickup46 = new Array(2,2);
	}else if(route4=="8-6"){
	var pickup46 = new Array(2,2);
	}else if(route4=="8-7"){
	var pickup46 = new Array(2,2);
	}else if(route4=="8-8"){
	var pickup46 = new Array(2,2);
	}else if(route4=="8-23"){
	var pickup46 = new Array(2,2);
	}else if(route4=="9-9"){
	var pickup46 = new Array(2,2);
	}else if(route4=="9-10"){
	var pickup46 = new Array(2,2);
	}else if(route4=="9-11"){
	var pickup46 = new Array(2,2);
	}else if(route4=="9-12"){
	var pickup46 = new Array(2,2);
	}else if(route4=="9-23"){
	var pickup46 = new Array(2,2);
	}else if(route4=="10-9"){
	var pickup46 = new Array(2,2);
	}else if(route4=="10-10"){
	var pickup46 = new Array(2,2);
	}else if(route4=="10-11"){
	var pickup46 = new Array(2,2);
	}else if(route4=="10-12"){
	var pickup46 = new Array(2,2);
	}else if(route4=="10-23"){
	var pickup46 = new Array(2,2);
	}else if(route4=="11-9"){
	var pickup46 = new Array(2,2);
	}else if(route4=="11-10"){
	var pickup46 = new Array(2,2);
	}else if(route4=="11-11"){
	var pickup46 = new Array(2,2);
	}else if(route4=="11-12"){
	var pickup46 = new Array(2,2);
	}else if(route4=="11-23"){
	var pickup46 = new Array(2,2);
	}else if(route4=="12-0"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-1"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-4"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-13"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-14"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-15"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-16"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-17"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-18"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-19"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-20"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-21"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-22"){
	var pickup46 = new Array(3,3);
	}else if(route4=="12-23"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-0"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-1"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-4"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-13"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-14"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-15"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-16"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-17"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-18"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-19"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-20"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-21"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-22"){
	var pickup46 = new Array(3,3);
	}else if(route4=="13-23"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-0"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-1"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-4"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-13"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-14"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-15"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-16"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-17"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-18"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-19"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-20"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-21"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-22"){
	var pickup46 = new Array(3,3);
	}else if(route4=="14-23"){
	var pickup46 = new Array(3,3);
	}else{
	var pickup46 = new Array(20,20);
	}
	rand_num46 = Math.floor( Math.random() * pickup46.length );
	result46 = pickup46[rand_num46];
	channel46.value = channel46[result46].value;
	var targetR46 = document.getElementsByName("changeLED")[15];
	targetR46.src = "parts/" + channel46.value + "_" + targetR46.src.slice(-7);
//４列目偏差値
	var channel47 = document.getElementsByName("hensachi4")[0];
	if(route4=="0-2"){
	var pickup47 = new Array(16,16);
	}else if(route4=="0-23"){
	var pickup47 = new Array(16,16);
	}else if(route4=="1-2"){
	var pickup47 = new Array(16,16);
	}else if(route4=="1-23"){
	var pickup47 = new Array(16,16);
	}else if(route4=="2-0"){
	var pickup47 = new Array(0,0);
	}else if(route4=="2-1"){
	var pickup47 = new Array(1,1);
	}else if(route4=="2-2"){
	var pickup47 = new Array(2,2);
	}else if(route4=="2-3"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-4"){
	var pickup47 = new Array(4,4);
	}else if(route4=="2-6"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-7"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-8"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-9"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-10"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-11"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-12"){
	var pickup47 = new Array(3,3);
	}else if(route4=="2-23"){
		if(result46=="0"){
		var pickup47 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup47 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route4=="3-0"){
	var pickup47 = new Array(0,0);
	}else if(route4=="3-1"){
	var pickup47 = new Array(1,1);
	}else if(route4=="3-2"){
	var pickup47 = new Array(2,2);
	}else if(route4=="3-3"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-4"){
	var pickup47 = new Array(4,4);
	}else if(route4=="3-6"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-7"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-8"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-9"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-10"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-11"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-12"){
	var pickup47 = new Array(3,3);
	}else if(route4=="3-23"){
		if(result46=="0"){
		var pickup47 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup47 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route4=="3-2"){
	var pickup47 = new Array(16,17);
	}else if(route4=="3-23"){
	var pickup47 = new Array(16,17);
	}else if(route4=="4-2"){
	var pickup47 = new Array(12,12);
	}else if(route4=="4-23"){
	var pickup47 = new Array(13,13);
	}else if(route4=="5-19"){
	var pickup47 = new Array(14,14);
	}else if(route4=="5-23"){
	var pickup47 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route4=="6-19"){
	var pickup47 = new Array(14,14);
	}else if(route4=="6-23"){
	var pickup47 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route4=="7-5"){
	var pickup47 = new Array(6,6);
	}else if(route4=="7-6"){
	var pickup47 = new Array(6,6);
	}else if(route4=="7-7"){
	var pickup47 = new Array(6,6);
	}else if(route4=="7-8"){
	var pickup47 = new Array(6,6);
	}else if(route4=="7-23"){
	var pickup47 = new Array(6,6);
	}else if(route4=="8-5"){
	var pickup47 = new Array(6,6);
	}else if(route4=="8-6"){
	var pickup47 = new Array(6,6);
	}else if(route4=="8-7"){
	var pickup47 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route4=="8-8"){
	var pickup47 = new Array(6,6);
	}else if(route4=="8-23"){
	var pickup47 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route4=="9-9"){
	var pickup47 = new Array(5,5);
	}else if(route4=="9-10"){
	var pickup47 = new Array(5,5);
	}else if(route4=="9-11"){
	var pickup47 = new Array(5,5);
	}else if(route4=="9-12"){
	var pickup47 = new Array(5,5);
	}else if(route4=="9-23"){
	var pickup47 = new Array(5,5);
	}else if(route4=="10-9"){
	var pickup47 = new Array(5,5);
	}else if(route4=="10-10"){
	var pickup47 = new Array(5,5);
	}else if(route4=="10-11"){
	var pickup47 = new Array(5,5);
	}else if(route4=="10-12"){
	var pickup47 = new Array(5,5);
	}else if(route4=="10-23"){
	var pickup47 = new Array(5,5);
	}else if(route4=="11-9"){
	var pickup47 = new Array(5,5);
	}else if(route4=="11-10"){
	var pickup47 = new Array(5,5);
	}else if(route4=="11-11"){
	var pickup47 = new Array(5,5);
	}else if(route4=="11-12"){
	var pickup47 = new Array(5,5);
	}else if(route4=="11-23"){
	var pickup47 = new Array(5,5);
	}else if(route4=="12-0"){
	var pickup47 = new Array(8,8);
	}else if(route4=="12-1"){
	var pickup47 = new Array(9,9);
	}else if(route4=="12-4"){
	var pickup47 = new Array(11,11);
	}else if(route4=="12-13"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-14"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-15"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-16"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-17"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-18"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-19"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-20"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-21"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-22"){
	var pickup47 = new Array(10,10);
	}else if(route4=="12-23"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-0"){
	var pickup47 = new Array(8,8);
	}else if(route4=="13-1"){
	var pickup47 = new Array(9,9);
	}else if(route4=="13-4"){
	var pickup47 = new Array(11,11);
	}else if(route4=="13-13"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-14"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-15"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-16"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-17"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-18"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-19"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-20"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-21"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-22"){
	var pickup47 = new Array(10,10);
	}else if(route4=="13-23"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-0"){
	var pickup47 = new Array(8,8);
	}else if(route4=="14-1"){
	var pickup47 = new Array(9,9);
	}else if(route4=="14-4"){
	var pickup47 = new Array(11,11);
	}else if(route4=="14-13"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-14"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-15"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-16"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-17"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-18"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-19"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-20"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-21"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-22"){
	var pickup47 = new Array(10,10);
	}else if(route4=="14-23"){
	var pickup47 = new Array(10,10);
	}else{
	var pickup47 = new Array(18,18);
	}
	rand_num47 = Math.floor( Math.random() * pickup47.length );
	result47 = pickup47[rand_num47];
	channel47.value = channel47[result47].value;
	var targetR47 = document.getElementsByName("changeLED_stundby")[11];
	targetR47.src = "parts/" + channel47.value + ".png";
//４列目始発
	var channel45 = document.getElementsByName("type4")[0];
	if(route4=="3-4"){
	var pickup45 = new Array(3,3);
	}else if(route4=="4-2"){
	var pickup45 = new Array(4,4);
	}else if(route4=="4-23"){
	var pickup45 = new Array(4,4);
	}else if(route4=="5-19"){
	var pickup45 = new Array(5,5);
	}else if(route4=="5-23"){
	var pickup45 = new Array(5,5);
	}else if(route4=="6-19"){
	var pickup45 = new Array(5,5);
	}else if(route4=="6-23"){
	var pickup45 = new Array(5,5);
	}else if(route4=="8-7"){
		if(result47=="7"){
		var pickup45 = new Array(2,2);
		}else{
		var pickup45 = new Array(0,0);
		}
	}else if(result44=="0"){
	var pickup45 = new Array(0,0);
	}else if(result44=="1"){
	var pickup45 = new Array(0,0);
	}else if(result44=="2"){
	var pickup45 = new Array(0,0);
	}else if(result44=="3"){
	var pickup45 = new Array(0,0);
	}else if(result44=="7"){
	var pickup45 = new Array(0,0);
	}else if(result44=="8"){
	var pickup45 = new Array(0,0);
	}else{
	var pickup45 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num45 = Math.floor( Math.random() * pickup45.length );
	result45 = pickup45[rand_num45];
	channel45.value = channel45[result45].value;
	var targetR45 = document.getElementsByName("changeLED")[14];
	targetR45.src = "parts/" + channel45.value + "_" + targetR45.src.slice(-7);
//================================================================================
//５列目時刻分
	var min05 = ("0"+(nowtime.getMinutes() + (plusmax * 4) - 4 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min05>=120){
	var min05re = ("0"+ (min05 - 120)).slice(-2);
	} else if(min05>=60){
	var min05re = ("0"+ (min05 - 60)).slice(-2);
	} else {
	var min05re = ("0"+ min05).slice(-2);
	}
	var minLED05 = document.getElementsByName("changeLED_stundby")[13];
	minLED05.src = "parts/time/m" + min05re + ".png";
	var num05m = Number(min05re);
	var channel52 = document.getElementsByName("timeM5")[0];
	channel52.value = channel52[num05m].value;
//５列目時刻時
	var hour05 = ("0"+nowtime.getHours()).slice(-2);
	if(min05>=120){
	var hour05re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min05>=60){
	var hour05re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour05re = ("0"+hour05).slice(-2);
	}
	if(hour05re>=24){
	var hour05th = ("0"+ (hour05re - 24)).slice(-2);
	} else {
	var hour05th = ("0"+ hour05re).slice(-2);
	}
	var hourLED05 = document.getElementsByName("changeLED_stundby")[12];
	hourLED05.src = "parts/time/h" + hour05th + ".png";
	var num05h = Number(hour05th);
	var channel51 = document.getElementsByName("timeH5")[0];
	channel51.value = channel51[num05h].value;
//５列目のりば
	var channel54 = document.getElementsByName("tra5")[0];
	var pars5 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num54 = Math.floor( Math.random() * pars3.length );
	result54 = pars5[rand_num54];
	
	if(result54=="0"){
		var colorgroup5= "none";
	}else if(result54=="1"){
		var colorgroup5= "none";
	}else if(result54=="2"){
		var colorgroup5= "toka";
	}else if(result54=="3"){
		var colorgroup5= "toka";
	}else if(result54=="4"){
		var colorgroup5= "leex";
	}else if(result54=="5"){
		var colorgroup5= "leex";
	}else if(result54=="6"){
		var colorgroup5= "leex";
	}else if(result54=="7"){
		var colorgroup5= "sysh";
	}else if(result54=="8"){
		var colorgroup5= "sysh";
	}else if(result54=="9"){
		var colorgroup5= "sysh";
	}else if(result54=="10"){
		var colorgroup5= "sysh";
	}else if(result54=="11"){
		var colorgroup5= "sysh";
	}else if(result54=="12"){
		var colorgroup5= "suka";
	}else if(result54=="13"){
		var colorgroup5= "suka";
	}else if(result54=="14"){
		var colorgroup5= "suka";
	}
	if(colorgroup5==colorgroup4){
		if(colorgroup5==colorgroup3){
			while(colorgroup5==colorgroup3){
			var pars5 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num54 = Math.floor( Math.random() * pars5.length );
			result54 = pars5[rand_num54];
			if(result54=="0"){
				var colorgroup5= "none";
			}else if(result54=="1"){
				var colorgroup5= "none";
			}else if(result54=="2"){
				var colorgroup5= "toka";
			}else if(result54=="3"){
				var colorgroup5= "toka";
			}else if(result54=="4"){
				var colorgroup5= "leex";
			}else if(result54=="5"){
				var colorgroup5= "leex";
			}else if(result54=="6"){
				var colorgroup5= "leex";
			}else if(result54=="7"){
				var colorgroup5= "sysh";
			}else if(result54=="8"){
				var colorgroup5= "sysh";
			}else if(result54=="9"){
				var colorgroup5= "sysh";
			}else if(result54=="10"){
				var colorgroup5= "sysh";
			}else if(result54=="11"){
				var colorgroup5= "sysh";
			}else if(result54=="12"){
				var colorgroup5= "suka";
			}else if(result54=="13"){
				var colorgroup5= "suka";
			}else if(result54=="14"){
				var colorgroup5= "suka";
	}
			}
		}
	}
	channel54.value = channel54[result54].value;
	var targetR54 = document.getElementsByName("changeLED")[17];
	targetR54.src = "parts/" + channel54.value + "_" + targetR54.src.slice(-7);
//５列目行先
	var channel53 = document.getElementsByName("des5")[0];
	var judge5 = channel54[result54].value;
	if(judge5=="track/b01"){
	var pickup53 = new Array(2,2,2,2,23);
	}else if(judge5=="track/b02"){
	var pickup53 = new Array(2,2,2,2,23);
	}else if(judge5=="track/o01"){
	var pickup53 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge5=="track/o02"){
	var pickup53 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge5=="track/r02"){
	var pickup53 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge5=="track/r05"){
	var pickup53 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge5=="track/r06"){
	var pickup53 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge5=="track/g01"){
	var pickup53 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge5=="track/g02"){
	var pickup53 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge5=="track/g05"){
	var pickup53 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge5=="track/g06"){
	var pickup53 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge5=="track/g07"){
	var pickup53 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge5=="track/b05"){
	var pickup53 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge5=="track/b06"){
	var pickup53 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge5=="track/b07"){
	var pickup53 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup53 = new Array(23,23);
	}
	rand_num53 = Math.floor( Math.random() * pickup53.length );
	result53 = pickup53[rand_num53];
	channel53.value = channel53[result53].value;
	var targetR53 = document.getElementsByName("changeLED")[16];
	targetR53.src = "parts/" + channel53.value + "_" + targetR53.src.slice(-7);
//５列目路線
	var channel56 = document.getElementsByName("other5")[0];
	var route5 = result54 + "-" + result53;
	if(route5=="0-2"){
	var pickup56 = new Array(18,19);
	}else if(route5=="0-23"){
	var pickup56 = new Array(18,19);
	}else if(route5=="1-2"){
	var pickup56 = new Array(18,19);
	}else if(route5=="1-23"){
	var pickup56 = new Array(18,19);
	}else if(route5=="2-0"){
	var pickup56 = new Array(0,0);
	}else if(route5=="2-1"){
	var pickup56 = new Array(0,0);
	}else if(route5=="2-2"){
	var pickup56 = new Array(0,0);
	}else if(route5=="2-3"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-4"){
	var pickup56 = new Array(0,0);
	}else if(route5=="2-6"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-7"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-8"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-9"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-10"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-11"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-12"){
	var pickup56 = new Array(1,1);
	}else if(route5=="2-23"){
	var pickup56 = new Array(0,0,1,1,1);
	}else if(route5=="3-0"){
	var pickup56 = new Array(0,0);
	}else if(route5=="3-1"){
	var pickup56 = new Array(0,0);
	}else if(route5=="3-2"){
	var pickup56 = new Array(0,0);
	}else if(route5=="3-3"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-4"){
	var pickup56 = new Array(0,0);
	}else if(route5=="3-6"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-7"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-8"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-9"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-10"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-11"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-12"){
	var pickup56 = new Array(1,1);
	}else if(route5=="3-23"){
	var pickup56 = new Array(0,0,1,1,1);
	}else if(route5=="4-2"){
	var pickup56 = new Array(16,17);
	}else if(route5=="4-23"){
	var pickup56 = new Array(16,17);
	}else if(route5=="5-19"){
	var pickup56 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route5=="5-23"){
	var pickup56 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route5=="6-19"){
	var pickup56 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route5=="6-23"){
	var pickup56 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route5=="7-5"){
	var pickup56 = new Array(2,2);
	}else if(route5=="7-6"){
	var pickup56 = new Array(2,2);
	}else if(route5=="7-7"){
	var pickup56 = new Array(2,2);
	}else if(route5=="7-8"){
	var pickup56 = new Array(2,2);
	}else if(route5=="7-23"){
	var pickup56 = new Array(2,2);
	}else if(route5=="8-5"){
	var pickup56 = new Array(2,2);
	}else if(route5=="8-6"){
	var pickup56 = new Array(2,2);
	}else if(route5=="8-7"){
	var pickup56 = new Array(2,2);
	}else if(route5=="8-8"){
	var pickup56 = new Array(2,2);
	}else if(route5=="8-23"){
	var pickup56 = new Array(2,2);
	}else if(route5=="9-9"){
	var pickup56 = new Array(2,2);
	}else if(route5=="9-10"){
	var pickup56 = new Array(2,2);
	}else if(route5=="9-11"){
	var pickup56 = new Array(2,2);
	}else if(route5=="9-12"){
	var pickup56 = new Array(2,2);
	}else if(route5=="9-23"){
	var pickup56 = new Array(2,2);
	}else if(route5=="10-9"){
	var pickup56 = new Array(2,2);
	}else if(route5=="10-10"){
	var pickup56 = new Array(2,2);
	}else if(route5=="10-11"){
	var pickup56 = new Array(2,2);
	}else if(route5=="10-12"){
	var pickup56 = new Array(2,2);
	}else if(route5=="10-23"){
	var pickup56 = new Array(2,2);
	}else if(route5=="11-9"){
	var pickup56 = new Array(2,2);
	}else if(route5=="11-10"){
	var pickup56 = new Array(2,2);
	}else if(route5=="11-11"){
	var pickup56 = new Array(2,2);
	}else if(route5=="11-12"){
	var pickup56 = new Array(2,2);
	}else if(route5=="11-23"){
	var pickup56 = new Array(2,2);
	}else if(route5=="12-0"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-1"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-4"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-13"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-14"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-15"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-16"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-17"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-18"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-19"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-20"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-21"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-22"){
	var pickup56 = new Array(3,3);
	}else if(route5=="12-23"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-0"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-1"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-4"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-13"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-14"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-15"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-16"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-17"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-18"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-19"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-20"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-21"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-22"){
	var pickup56 = new Array(3,3);
	}else if(route5=="13-23"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-0"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-1"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-4"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-13"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-14"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-15"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-16"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-17"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-18"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-19"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-20"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-21"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-22"){
	var pickup56 = new Array(3,3);
	}else if(route5=="14-23"){
	var pickup56 = new Array(3,3);
	}else{
	var pickup56 = new Array(20,20);
	}
	rand_num56 = Math.floor( Math.random() * pickup56.length );
	result56 = pickup56[rand_num56];
	channel56.value = channel56[result56].value;
	var targetR56 = document.getElementsByName("changeLED")[19];
	targetR56.src = "parts/" + channel56.value + "_" + targetR56.src.slice(-7);
//５列目偏差値
	var channel57 = document.getElementsByName("hensachi5")[0];
	if(route5=="0-2"){
	var pickup57 = new Array(16,16);
	}else if(route5=="0-23"){
	var pickup57 = new Array(16,16);
	}else if(route5=="1-2"){
	var pickup57 = new Array(16,16);
	}else if(route5=="1-23"){
	var pickup57 = new Array(16,16);
	}else if(route5=="2-0"){
	var pickup57 = new Array(0,0);
	}else if(route5=="2-1"){
	var pickup57 = new Array(1,1);
	}else if(route5=="2-2"){
	var pickup57 = new Array(2,2);
	}else if(route5=="2-3"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-4"){
	var pickup57 = new Array(4,4);
	}else if(route5=="2-6"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-7"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-8"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-9"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-10"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-11"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-12"){
	var pickup57 = new Array(3,3);
	}else if(route5=="2-23"){
		if(result56=="0"){
		var pickup57 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup57 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route5=="3-0"){
	var pickup57 = new Array(0,0);
	}else if(route5=="3-1"){
	var pickup57 = new Array(1,1);
	}else if(route5=="3-2"){
	var pickup57 = new Array(2,2);
	}else if(route5=="3-3"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-4"){
	var pickup57 = new Array(4,4);
	}else if(route5=="3-6"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-7"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-8"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-9"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-10"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-11"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-12"){
	var pickup57 = new Array(3,3);
	}else if(route5=="3-23"){
		if(result56=="0"){
		var pickup57 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup57 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route5=="3-2"){
	var pickup57 = new Array(16,17);
	}else if(route5=="3-23"){
	var pickup57 = new Array(16,17);
	}else if(route5=="4-2"){
	var pickup57 = new Array(12,12);
	}else if(route5=="4-23"){
	var pickup57 = new Array(13,13);
	}else if(route5=="5-19"){
	var pickup57 = new Array(14,14);
	}else if(route5=="5-23"){
	var pickup57 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route5=="6-19"){
	var pickup57 = new Array(14,14);
	}else if(route5=="6-23"){
	var pickup57 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route5=="7-5"){
	var pickup57 = new Array(6,6);
	}else if(route5=="7-6"){
	var pickup57 = new Array(6,6);
	}else if(route5=="7-7"){
	var pickup57 = new Array(6,6);
	}else if(route5=="7-8"){
	var pickup57 = new Array(6,6);
	}else if(route5=="7-23"){
	var pickup57 = new Array(6,6);
	}else if(route5=="8-5"){
	var pickup57 = new Array(6,6);
	}else if(route5=="8-6"){
	var pickup57 = new Array(6,6);
	}else if(route5=="8-7"){
	var pickup57 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route5=="8-8"){
	var pickup57 = new Array(6,6);
	}else if(route5=="8-23"){
	var pickup57 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route5=="9-9"){
	var pickup57 = new Array(5,5);
	}else if(route5=="9-10"){
	var pickup57 = new Array(5,5);
	}else if(route5=="9-11"){
	var pickup57 = new Array(5,5);
	}else if(route5=="9-12"){
	var pickup57 = new Array(5,5);
	}else if(route5=="9-23"){
	var pickup57 = new Array(5,5);
	}else if(route5=="10-9"){
	var pickup57 = new Array(5,5);
	}else if(route5=="10-10"){
	var pickup57 = new Array(5,5);
	}else if(route5=="10-11"){
	var pickup57 = new Array(5,5);
	}else if(route5=="10-12"){
	var pickup57 = new Array(5,5);
	}else if(route5=="10-23"){
	var pickup57 = new Array(5,5);
	}else if(route5=="11-9"){
	var pickup57 = new Array(5,5);
	}else if(route5=="11-10"){
	var pickup57 = new Array(5,5);
	}else if(route5=="11-11"){
	var pickup57 = new Array(5,5);
	}else if(route5=="11-12"){
	var pickup57 = new Array(5,5);
	}else if(route5=="11-23"){
	var pickup57 = new Array(5,5);
	}else if(route5=="12-0"){
	var pickup57 = new Array(8,8);
	}else if(route5=="12-1"){
	var pickup57 = new Array(9,9);
	}else if(route5=="12-4"){
	var pickup57 = new Array(11,11);
	}else if(route5=="12-13"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-14"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-15"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-16"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-17"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-18"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-19"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-20"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-21"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-22"){
	var pickup57 = new Array(10,10);
	}else if(route5=="12-23"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-0"){
	var pickup57 = new Array(8,8);
	}else if(route5=="13-1"){
	var pickup57 = new Array(9,9);
	}else if(route5=="13-4"){
	var pickup57 = new Array(11,11);
	}else if(route5=="13-13"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-14"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-15"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-16"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-17"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-18"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-19"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-20"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-21"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-22"){
	var pickup57 = new Array(10,10);
	}else if(route5=="13-23"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-0"){
	var pickup57 = new Array(8,8);
	}else if(route5=="14-1"){
	var pickup57 = new Array(9,9);
	}else if(route5=="14-4"){
	var pickup57 = new Array(11,11);
	}else if(route5=="14-13"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-14"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-15"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-16"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-17"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-18"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-19"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-20"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-21"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-22"){
	var pickup57 = new Array(10,10);
	}else if(route5=="14-23"){
	var pickup57 = new Array(10,10);
	}else{
	var pickup57 = new Array(18,18);
	}
	rand_num57 = Math.floor( Math.random() * pickup57.length );
	result57 = pickup57[rand_num57];
	channel57.value = channel57[result57].value;
	var targetR57 = document.getElementsByName("changeLED_stundby")[14];
	targetR57.src = "parts/" + channel57.value + ".png";
//５列目始発
	var channel55 = document.getElementsByName("type5")[0];
	if(route5=="3-4"){
	var pickup55 = new Array(3,3);
	}else if(route5=="4-2"){
	var pickup55 = new Array(4,4);
	}else if(route5=="4-23"){
	var pickup55 = new Array(4,4);
	}else if(route5=="5-19"){
	var pickup55 = new Array(5,5);
	}else if(route5=="5-23"){
	var pickup55 = new Array(5,5);
	}else if(route5=="6-19"){
	var pickup55 = new Array(5,5);
	}else if(route5=="6-23"){
	var pickup55 = new Array(5,5);
	}else if(route5=="8-7"){
		if(result57=="7"){
		var pickup55 = new Array(2,2);
		}else{
		var pickup55 = new Array(0,0);
		}
	}else if(result54=="0"){
	var pickup55 = new Array(0,0);
	}else if(result54=="1"){
	var pickup55 = new Array(0,0);
	}else if(result54=="2"){
	var pickup55 = new Array(0,0);
	}else if(result54=="3"){
	var pickup55 = new Array(0,0);
	}else if(result54=="7"){
	var pickup55 = new Array(0,0);
	}else if(result54=="8"){
	var pickup55 = new Array(0,0);
	}else{
	var pickup55 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num55 = Math.floor( Math.random() * pickup55.length );
	result55 = pickup55[rand_num55];
	channel55.value = channel55[result55].value;
	var targetR55 = document.getElementsByName("changeLED")[18];
	targetR55.src = "parts/" + channel55.value + "_" + targetR55.src.slice(-7);
//================================================================================
//６列目時刻分
	var min06 = ("0"+(nowtime.getMinutes() + (plusmax * 5) - 5 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min06>=120){
	var min06re = ("0"+ (min06 - 120)).slice(-2);
	} else if(min06>=60){
	var min06re = ("0"+ (min06 - 60)).slice(-2);
	} else {
	var min06re = ("0"+ min06).slice(-2);
	}
	var minLED06 = document.getElementsByName("changeLED_stundby")[16];
	minLED06.src = "parts/time/m" + min06re + ".png";
	var num06m = Number(min06re);
	var channel62 = document.getElementsByName("timeM6")[0];
	channel62.value = channel62[num06m].value;
//６列目時刻時
	var hour06 = ("0"+nowtime.getHours()).slice(-2);
	if(min06>=120){
	var hour06re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min06>=60){
	var hour06re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour06re = ("0"+hour06).slice(-2);
	}
	if(hour06re>=24){
	var hour06th = ("0"+ (hour06re - 24)).slice(-2);
	} else {
	var hour06th = ("0"+ hour06re).slice(-2);
	}
	var hourLED06 = document.getElementsByName("changeLED_stundby")[15];
	hourLED06.src = "parts/time/h" + hour06th + ".png";
	var num06h = Number(hour06th);
	var channel61 = document.getElementsByName("timeH6")[0];
	channel61.value = channel61[num06h].value;
//６列目のりば
	var channel64 = document.getElementsByName("tra6")[0];
	var pars6 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num64 = Math.floor( Math.random() * pars6.length );
	result64 = pars6[rand_num64];
	
	if(result64=="0"){
		var colorgroup6= "none";
	}else if(result64=="1"){
		var colorgroup6= "none";
	}else if(result64=="2"){
		var colorgroup6= "toka";
	}else if(result64=="3"){
		var colorgroup6= "toka";
	}else if(result64=="4"){
		var colorgroup6= "leex";
	}else if(result64=="5"){
		var colorgroup6= "leex";
	}else if(result64=="6"){
		var colorgroup6= "leex";
	}else if(result64=="7"){
		var colorgroup6= "sysh";
	}else if(result64=="8"){
		var colorgroup6= "sysh";
	}else if(result64=="9"){
		var colorgroup6= "sysh";
	}else if(result64=="10"){
		var colorgroup6= "sysh";
	}else if(result64=="11"){
		var colorgroup6= "sysh";
	}else if(result64=="12"){
		var colorgroup6= "suka";
	}else if(result64=="13"){
		var colorgroup6= "suka";
	}else if(result64=="14"){
		var colorgroup6= "suka";
	}
	if(colorgroup6==colorgroup5){
		if(colorgroup6==colorgroup4){
			while(colorgroup6==colorgroup4){
			var pars6 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num64 = Math.floor( Math.random() * pars6.length );
			result64 = pars6[rand_num64];
			if(result64=="0"){
				var colorgroup6= "none";
			}else if(result64=="1"){
				var colorgroup6= "none";
			}else if(result64=="2"){
				var colorgroup6= "toka";
			}else if(result64=="3"){
				var colorgroup6= "toka";
			}else if(result64=="4"){
				var colorgroup6= "leex";
			}else if(result64=="5"){
				var colorgroup6= "leex";
			}else if(result64=="6"){
				var colorgroup6= "leex";
			}else if(result64=="7"){
				var colorgroup6= "sysh";
			}else if(result64=="8"){
				var colorgroup6= "sysh";
			}else if(result64=="9"){
				var colorgroup6= "sysh";
			}else if(result64=="10"){
				var colorgroup6= "sysh";
			}else if(result64=="11"){
				var colorgroup6= "sysh";
			}else if(result64=="12"){
				var colorgroup6= "suka";
			}else if(result64=="13"){
				var colorgroup6= "suka";
			}else if(result64=="14"){
				var colorgroup6= "suka";
	}
			}
		}
	}
	channel64.value = channel64[result64].value;
	var targetR64 = document.getElementsByName("changeLED")[21];
	targetR64.src = "parts/" + channel64.value + "_" + targetR64.src.slice(-7);
//６列目行先
	var channel63 = document.getElementsByName("des6")[0];
	var judge6 = channel64[result64].value;
	if(judge6=="track/b01"){
	var pickup63 = new Array(2,2,2,2,23);
	}else if(judge6=="track/b02"){
	var pickup63 = new Array(2,2,2,2,23);
	}else if(judge6=="track/o01"){
	var pickup63 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge6=="track/o02"){
	var pickup63 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge6=="track/r02"){
	var pickup63 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge6=="track/r05"){
	var pickup63 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge6=="track/r06"){
	var pickup63 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge6=="track/g01"){
	var pickup63 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge6=="track/g02"){
	var pickup63 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge6=="track/g05"){
	var pickup63 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge6=="track/g06"){
	var pickup63 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge6=="track/g07"){
	var pickup63 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge6=="track/b05"){
	var pickup63 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge6=="track/b06"){
	var pickup63 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge6=="track/b07"){
	var pickup63 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup63 = new Array(23,23);
	}
	rand_num63 = Math.floor( Math.random() * pickup63.length );
	result63 = pickup63[rand_num63];
	channel63.value = channel63[result63].value;
	var targetR63 = document.getElementsByName("changeLED")[20];
	targetR63.src = "parts/" + channel63.value + "_" + targetR63.src.slice(-7);
//６列目路線
	var channel66 = document.getElementsByName("other6")[0];
	var route6 = result64 + "-" + result63;
	if(route6=="0-2"){
	var pickup66 = new Array(18,19);
	}else if(route6=="0-23"){
	var pickup66 = new Array(18,19);
	}else if(route6=="1-2"){
	var pickup66 = new Array(18,19);
	}else if(route6=="1-23"){
	var pickup66 = new Array(18,19);
	}else if(route6=="2-0"){
	var pickup66 = new Array(0,0);
	}else if(route6=="2-1"){
	var pickup66 = new Array(0,0);
	}else if(route6=="2-2"){
	var pickup66 = new Array(0,0);
	}else if(route6=="2-3"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-4"){
	var pickup66 = new Array(0,0);
	}else if(route6=="2-6"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-7"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-8"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-9"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-10"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-11"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-12"){
	var pickup66 = new Array(1,1);
	}else if(route6=="2-23"){
	var pickup66 = new Array(0,0,1,1,1);
	}else if(route6=="3-0"){
	var pickup66 = new Array(0,0);
	}else if(route6=="3-1"){
	var pickup66 = new Array(0,0);
	}else if(route6=="3-2"){
	var pickup66 = new Array(0,0);
	}else if(route6=="3-3"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-4"){
	var pickup66 = new Array(0,0);
	}else if(route6=="3-6"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-7"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-8"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-9"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-10"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-11"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-12"){
	var pickup66 = new Array(1,1);
	}else if(route6=="3-23"){
	var pickup66 = new Array(0,0,1,1,1);
	}else if(route6=="4-2"){
	var pickup66 = new Array(16,17);
	}else if(route6=="4-23"){
	var pickup66 = new Array(16,17);
	}else if(route6=="5-19"){
	var pickup66 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route6=="5-23"){
	var pickup66 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route6=="6-19"){
	var pickup66 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route6=="6-23"){
	var pickup66 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route6=="7-5"){
	var pickup66 = new Array(2,2);
	}else if(route6=="7-6"){
	var pickup66 = new Array(2,2);
	}else if(route6=="7-7"){
	var pickup66 = new Array(2,2);
	}else if(route6=="7-8"){
	var pickup66 = new Array(2,2);
	}else if(route6=="7-23"){
	var pickup66 = new Array(2,2);
	}else if(route6=="8-5"){
	var pickup66 = new Array(2,2);
	}else if(route6=="8-6"){
	var pickup66 = new Array(2,2);
	}else if(route6=="8-7"){
	var pickup66 = new Array(2,2);
	}else if(route6=="8-8"){
	var pickup66 = new Array(2,2);
	}else if(route6=="8-23"){
	var pickup66 = new Array(2,2);
	}else if(route6=="9-9"){
	var pickup66 = new Array(2,2);
	}else if(route6=="9-10"){
	var pickup66 = new Array(2,2);
	}else if(route6=="9-11"){
	var pickup66 = new Array(2,2);
	}else if(route6=="9-12"){
	var pickup66 = new Array(2,2);
	}else if(route6=="9-23"){
	var pickup66 = new Array(2,2);
	}else if(route6=="10-9"){
	var pickup66 = new Array(2,2);
	}else if(route6=="10-10"){
	var pickup66 = new Array(2,2);
	}else if(route6=="10-11"){
	var pickup66 = new Array(2,2);
	}else if(route6=="10-12"){
	var pickup66 = new Array(2,2);
	}else if(route6=="10-23"){
	var pickup66 = new Array(2,2);
	}else if(route6=="11-9"){
	var pickup66 = new Array(2,2);
	}else if(route6=="11-10"){
	var pickup66 = new Array(2,2);
	}else if(route6=="11-11"){
	var pickup66 = new Array(2,2);
	}else if(route6=="11-12"){
	var pickup66 = new Array(2,2);
	}else if(route6=="11-23"){
	var pickup66 = new Array(2,2);
	}else if(route6=="12-0"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-1"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-4"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-13"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-14"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-15"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-16"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-17"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-18"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-19"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-20"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-21"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-22"){
	var pickup66 = new Array(3,3);
	}else if(route6=="12-23"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-0"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-1"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-4"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-13"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-14"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-15"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-16"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-17"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-18"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-19"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-20"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-21"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-22"){
	var pickup66 = new Array(3,3);
	}else if(route6=="13-23"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-0"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-1"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-4"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-13"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-14"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-15"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-16"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-17"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-18"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-19"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-20"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-21"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-22"){
	var pickup66 = new Array(3,3);
	}else if(route6=="14-23"){
	var pickup66 = new Array(3,3);
	}else{
	var pickup66 = new Array(20,20);
	}
	rand_num66 = Math.floor( Math.random() * pickup66.length );
	result66 = pickup66[rand_num66];
	channel66.value = channel66[result66].value;
	var targetR66 = document.getElementsByName("changeLED")[23];
	targetR66.src = "parts/" + channel66.value + "_" + targetR66.src.slice(-7);
//６列目偏差値
	var channel67 = document.getElementsByName("hensachi6")[0];
	if(route6=="0-2"){
	var pickup67 = new Array(16,16);
	}else if(route6=="0-23"){
	var pickup67 = new Array(16,16);
	}else if(route6=="1-2"){
	var pickup67 = new Array(16,16);
	}else if(route6=="1-23"){
	var pickup67 = new Array(16,16);
	}else if(route6=="2-0"){
	var pickup67 = new Array(0,0);
	}else if(route6=="2-1"){
	var pickup67 = new Array(1,1);
	}else if(route6=="2-2"){
	var pickup67 = new Array(2,2);
	}else if(route6=="2-3"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-4"){
	var pickup67 = new Array(4,4);
	}else if(route6=="2-6"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-7"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-8"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-9"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-10"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-11"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-12"){
	var pickup67 = new Array(3,3);
	}else if(route6=="2-23"){
		if(result66=="0"){
		var pickup67 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup67 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route6=="3-0"){
	var pickup67 = new Array(0,0);
	}else if(route6=="3-1"){
	var pickup67 = new Array(1,1);
	}else if(route6=="3-2"){
	var pickup67 = new Array(2,2);
	}else if(route6=="3-3"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-4"){
	var pickup67 = new Array(4,4);
	}else if(route6=="3-6"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-7"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-8"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-9"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-10"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-11"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-12"){
	var pickup67 = new Array(3,3);
	}else if(route6=="3-23"){
		if(result66=="0"){
		var pickup67 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup67 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route6=="3-2"){
	var pickup67 = new Array(16,17);
	}else if(route6=="3-23"){
	var pickup67 = new Array(16,17);
	}else if(route6=="4-2"){
	var pickup67 = new Array(12,12);
	}else if(route6=="4-23"){
	var pickup67 = new Array(13,13);
	}else if(route6=="5-19"){
	var pickup67 = new Array(14,14);
	}else if(route6=="5-23"){
	var pickup67 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route6=="6-19"){
	var pickup67 = new Array(14,14);
	}else if(route6=="6-23"){
	var pickup67 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route6=="7-5"){
	var pickup67 = new Array(6,6);
	}else if(route6=="7-6"){
	var pickup67 = new Array(6,6);
	}else if(route6=="7-7"){
	var pickup67 = new Array(6,6);
	}else if(route6=="7-8"){
	var pickup67 = new Array(6,6);
	}else if(route6=="7-23"){
	var pickup67 = new Array(6,6);
	}else if(route6=="8-5"){
	var pickup67 = new Array(6,6);
	}else if(route6=="8-6"){
	var pickup67 = new Array(6,6);
	}else if(route6=="8-7"){
	var pickup67 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route6=="8-8"){
	var pickup67 = new Array(6,6);
	}else if(route6=="8-23"){
	var pickup67 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route6=="9-9"){
	var pickup67 = new Array(5,5);
	}else if(route6=="9-10"){
	var pickup67 = new Array(5,5);
	}else if(route6=="9-11"){
	var pickup67 = new Array(5,5);
	}else if(route6=="9-12"){
	var pickup67 = new Array(5,5);
	}else if(route6=="9-23"){
	var pickup67 = new Array(5,5);
	}else if(route6=="10-9"){
	var pickup67 = new Array(5,5);
	}else if(route6=="10-10"){
	var pickup67 = new Array(5,5);
	}else if(route6=="10-11"){
	var pickup67 = new Array(5,5);
	}else if(route6=="10-12"){
	var pickup67 = new Array(5,5);
	}else if(route6=="10-23"){
	var pickup67 = new Array(5,5);
	}else if(route6=="11-9"){
	var pickup67 = new Array(5,5);
	}else if(route6=="11-10"){
	var pickup67 = new Array(5,5);
	}else if(route6=="11-11"){
	var pickup67 = new Array(5,5);
	}else if(route6=="11-12"){
	var pickup67 = new Array(5,5);
	}else if(route6=="11-23"){
	var pickup67 = new Array(5,5);
	}else if(route6=="12-0"){
	var pickup67 = new Array(8,8);
	}else if(route6=="12-1"){
	var pickup67 = new Array(9,9);
	}else if(route6=="12-4"){
	var pickup67 = new Array(11,11);
	}else if(route6=="12-13"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-14"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-15"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-16"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-17"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-18"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-19"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-20"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-21"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-22"){
	var pickup67 = new Array(10,10);
	}else if(route6=="12-23"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-0"){
	var pickup67 = new Array(8,8);
	}else if(route6=="13-1"){
	var pickup67 = new Array(9,9);
	}else if(route6=="13-4"){
	var pickup67 = new Array(11,11);
	}else if(route6=="13-13"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-14"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-15"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-16"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-17"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-18"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-19"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-20"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-21"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-22"){
	var pickup67 = new Array(10,10);
	}else if(route6=="13-23"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-0"){
	var pickup67 = new Array(8,8);
	}else if(route6=="14-1"){
	var pickup67 = new Array(9,9);
	}else if(route6=="14-4"){
	var pickup67 = new Array(11,11);
	}else if(route6=="14-13"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-14"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-15"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-16"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-17"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-18"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-19"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-20"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-21"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-22"){
	var pickup67 = new Array(10,10);
	}else if(route6=="14-23"){
	var pickup67 = new Array(10,10);
	}else{
	var pickup67 = new Array(18,18);
	}
	rand_num67 = Math.floor( Math.random() * pickup67.length );
	result67 = pickup67[rand_num67];
	channel67.value = channel67[result67].value;
	var targetR67 = document.getElementsByName("changeLED_stundby")[17];
	targetR67.src = "parts/" + channel67.value + ".png";
//６列目始発
	var channel65 = document.getElementsByName("type6")[0];
	if(route6=="3-4"){
	var pickup65 = new Array(3,3);
	}else if(route6=="4-2"){
	var pickup65 = new Array(4,4);
	}else if(route6=="4-23"){
	var pickup65 = new Array(4,4);
	}else if(route6=="5-19"){
	var pickup65 = new Array(5,5);
	}else if(route6=="5-23"){
	var pickup65 = new Array(5,5);
	}else if(route6=="6-19"){
	var pickup65 = new Array(5,5);
	}else if(route6=="6-23"){
	var pickup65 = new Array(5,5);
	}else if(route6=="8-7"){
		if(result67=="7"){
		var pickup65 = new Array(2,2);
		}else{
		var pickup65 = new Array(0,0);
		}
	}else if(result64=="0"){
	var pickup65 = new Array(0,0);
	}else if(result64=="1"){
	var pickup65 = new Array(0,0);
	}else if(result64=="2"){
	var pickup65 = new Array(0,0);
	}else if(result64=="3"){
	var pickup65 = new Array(0,0);
	}else if(result64=="7"){
	var pickup65 = new Array(0,0);
	}else if(result64=="8"){
	var pickup65 = new Array(0,0);
	}else{
	var pickup65 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num65 = Math.floor( Math.random() * pickup65.length );
	result65 = pickup65[rand_num65];
	channel65.value = channel65[result65].value;
	var targetR65 = document.getElementsByName("changeLED")[22];
	targetR65.src = "parts/" + channel65.value + "_" + targetR65.src.slice(-7);
//================================================================================
//７列目時刻分
	var min07 = ("0"+(nowtime.getMinutes() + (plusmax * 6) - 6 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min07>=120){
	var min07re = ("0"+ (min07 - 120)).slice(-2);
	} else if(min07>=60){
	var min07re = ("0"+ (min07 - 60)).slice(-2);
	} else {
	var min07re = ("0"+ min07).slice(-2);
	}
	var minLED07 = document.getElementsByName("changeLED_stundby")[19];
	minLED07.src = "parts/time/m" + min07re + ".png";
	var num07m = Number(min07re);
	var channel72 = document.getElementsByName("timeM7")[0];
	channel72.value = channel72[num07m].value;
//７列目時刻時
	var hour07 = ("0"+nowtime.getHours()).slice(-2);
	if(min07>=120){
	var hour07re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min07>=60){
	var hour07re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour07re = ("0"+hour07).slice(-2);
	}
	if(hour07re>=24){
	var hour07th = ("0"+ (hour07re - 24)).slice(-2);
	} else {
	var hour07th = ("0"+ hour07re).slice(-2);
	}
	var hourLED07 = document.getElementsByName("changeLED_stundby")[18];
	hourLED07.src = "parts/time/h" + hour07th + ".png";
	var num07h = Number(hour07th);
	var channel71 = document.getElementsByName("timeH7")[0];
	channel71.value = channel71[num07h].value;
//７列目のりば
	var channel74 = document.getElementsByName("tra7")[0];
	var pars7 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num74 = Math.floor( Math.random() * pars7.length );
	result74 = pars7[rand_num74];
	
	if(result74=="0"){
		var colorgroup7= "none";
	}else if(result74=="1"){
		var colorgroup7= "none";
	}else if(result74=="2"){
		var colorgroup7= "toka";
	}else if(result74=="3"){
		var colorgroup7= "toka";
	}else if(result74=="4"){
		var colorgroup7= "leex";
	}else if(result74=="5"){
		var colorgroup7= "leex";
	}else if(result74=="6"){
		var colorgroup7= "leex";
	}else if(result74=="7"){
		var colorgroup7= "sysh";
	}else if(result74=="8"){
		var colorgroup7= "sysh";
	}else if(result74=="9"){
		var colorgroup7= "sysh";
	}else if(result74=="10"){
		var colorgroup7= "sysh";
	}else if(result74=="11"){
		var colorgroup7= "sysh";
	}else if(result74=="12"){
		var colorgroup7= "suka";
	}else if(result74=="13"){
		var colorgroup7= "suka";
	}else if(result74=="14"){
		var colorgroup7= "suka";
	}
	if(colorgroup7==colorgroup6){
		if(colorgroup7==colorgroup5){
			while(colorgroup7==colorgroup5){
			var pars7 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num74 = Math.floor( Math.random() * pars7.length );
			result74 = pars7[rand_num74];
			if(result74=="0"){
				var colorgroup7= "none";
			}else if(result74=="1"){
				var colorgroup7= "none";
			}else if(result74=="2"){
				var colorgroup7= "toka";
			}else if(result74=="3"){
				var colorgroup7= "toka";
			}else if(result74=="4"){
				var colorgroup7= "leex";
			}else if(result74=="5"){
				var colorgroup7= "leex";
			}else if(result74=="6"){
				var colorgroup7= "leex";
			}else if(result74=="7"){
				var colorgroup7= "sysh";
			}else if(result74=="8"){
				var colorgroup7= "sysh";
			}else if(result74=="9"){
				var colorgroup7= "sysh";
			}else if(result74=="10"){
				var colorgroup7= "sysh";
			}else if(result74=="11"){
				var colorgroup7= "sysh";
			}else if(result74=="12"){
				var colorgroup7= "suka";
			}else if(result74=="13"){
				var colorgroup7= "suka";
			}else if(result74=="14"){
				var colorgroup7= "suka";
	}
			}
		}
	}
	channel74.value = channel74[result74].value;
	var targetR74 = document.getElementsByName("changeLED")[25];
	targetR74.src = "parts/" + channel74.value + "_" + targetR74.src.slice(-7);
//７列目行先
	var channel73 = document.getElementsByName("des7")[0];
	var judge7 = channel74[result74].value;
	if(judge7=="track/b01"){
	var pickup73 = new Array(2,2,2,2,23);
	}else if(judge7=="track/b02"){
	var pickup73 = new Array(2,2,2,2,23);
	}else if(judge7=="track/o01"){
	var pickup73 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge7=="track/o02"){
	var pickup73 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge7=="track/r02"){
	var pickup73 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge7=="track/r05"){
	var pickup73 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge7=="track/r06"){
	var pickup73 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge7=="track/g01"){
	var pickup73 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge7=="track/g02"){
	var pickup73 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge7=="track/g05"){
	var pickup73 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge7=="track/g06"){
	var pickup73 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge7=="track/g07"){
	var pickup73 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge7=="track/b05"){
	var pickup73 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge7=="track/b06"){
	var pickup73 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge7=="track/b07"){
	var pickup73 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup73 = new Array(23,23);
	}
	rand_num73 = Math.floor( Math.random() * pickup73.length );
	result73 = pickup73[rand_num73];
	channel73.value = channel73[result73].value;
	var targetR73 = document.getElementsByName("changeLED")[24];
	targetR73.src = "parts/" + channel73.value + "_" + targetR73.src.slice(-7);
//７列目路線
	var channel76 = document.getElementsByName("other7")[0];
	var route7 = result74 + "-" + result73;
	if(route7=="0-2"){
	var pickup76 = new Array(18,19);
	}else if(route7=="0-23"){
	var pickup76 = new Array(18,19);
	}else if(route7=="1-2"){
	var pickup76 = new Array(18,19);
	}else if(route7=="1-23"){
	var pickup76 = new Array(18,19);
	}else if(route7=="2-0"){
	var pickup76 = new Array(0,0);
	}else if(route7=="2-1"){
	var pickup76 = new Array(0,0);
	}else if(route7=="2-2"){
	var pickup76 = new Array(0,0);
	}else if(route7=="2-3"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-4"){
	var pickup76 = new Array(0,0);
	}else if(route7=="2-6"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-7"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-8"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-9"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-10"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-11"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-12"){
	var pickup76 = new Array(1,1);
	}else if(route7=="2-23"){
	var pickup76 = new Array(0,0,1,1,1);
	}else if(route7=="3-0"){
	var pickup76 = new Array(0,0);
	}else if(route7=="3-1"){
	var pickup76 = new Array(0,0);
	}else if(route7=="3-2"){
	var pickup76 = new Array(0,0);
	}else if(route7=="3-3"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-4"){
	var pickup76 = new Array(0,0);
	}else if(route7=="3-6"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-7"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-8"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-9"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-10"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-11"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-12"){
	var pickup76 = new Array(1,1);
	}else if(route7=="3-23"){
	var pickup76 = new Array(0,0,1,1,1);
	}else if(route7=="4-2"){
	var pickup76 = new Array(16,17);
	}else if(route7=="4-23"){
	var pickup76 = new Array(16,17);
	}else if(route7=="5-19"){
	var pickup76 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route7=="5-23"){
	var pickup76 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route7=="6-19"){
	var pickup76 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route7=="6-23"){
	var pickup76 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route7=="7-5"){
	var pickup76 = new Array(2,2);
	}else if(route7=="7-6"){
	var pickup76 = new Array(2,2);
	}else if(route7=="7-7"){
	var pickup76 = new Array(2,2);
	}else if(route7=="7-8"){
	var pickup76 = new Array(2,2);
	}else if(route7=="7-23"){
	var pickup76 = new Array(2,2);
	}else if(route7=="8-5"){
	var pickup76 = new Array(2,2);
	}else if(route7=="8-6"){
	var pickup76 = new Array(2,2);
	}else if(route7=="8-7"){
	var pickup76 = new Array(2,2);
	}else if(route7=="8-8"){
	var pickup76 = new Array(2,2);
	}else if(route7=="8-23"){
	var pickup76 = new Array(2,2);
	}else if(route7=="9-9"){
	var pickup76 = new Array(2,2);
	}else if(route7=="9-10"){
	var pickup76 = new Array(2,2);
	}else if(route7=="9-11"){
	var pickup76 = new Array(2,2);
	}else if(route7=="9-12"){
	var pickup76 = new Array(2,2);
	}else if(route7=="9-23"){
	var pickup76 = new Array(2,2);
	}else if(route7=="10-9"){
	var pickup76 = new Array(2,2);
	}else if(route7=="10-10"){
	var pickup76 = new Array(2,2);
	}else if(route7=="10-11"){
	var pickup76 = new Array(2,2);
	}else if(route7=="10-12"){
	var pickup76 = new Array(2,2);
	}else if(route7=="10-23"){
	var pickup76 = new Array(2,2);
	}else if(route7=="11-9"){
	var pickup76 = new Array(2,2);
	}else if(route7=="11-10"){
	var pickup76 = new Array(2,2);
	}else if(route7=="11-11"){
	var pickup76 = new Array(2,2);
	}else if(route7=="11-12"){
	var pickup76 = new Array(2,2);
	}else if(route7=="11-23"){
	var pickup76 = new Array(2,2);
	}else if(route7=="12-0"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-1"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-4"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-13"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-14"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-15"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-16"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-17"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-18"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-19"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-20"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-21"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-22"){
	var pickup76 = new Array(3,3);
	}else if(route7=="12-23"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-0"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-1"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-4"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-13"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-14"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-15"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-16"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-17"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-18"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-19"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-20"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-21"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-22"){
	var pickup76 = new Array(3,3);
	}else if(route7=="13-23"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-0"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-1"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-4"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-13"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-14"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-15"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-16"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-17"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-18"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-19"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-20"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-21"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-22"){
	var pickup76 = new Array(3,3);
	}else if(route7=="14-23"){
	var pickup76 = new Array(3,3);
	}else{
	var pickup76 = new Array(20,20);
	}
	rand_num76 = Math.floor( Math.random() * pickup76.length );
	result76 = pickup76[rand_num76];
	channel76.value = channel76[result76].value;
	var targetR76 = document.getElementsByName("changeLED")[27];
	targetR76.src = "parts/" + channel76.value + "_" + targetR76.src.slice(-7);
//７列目偏差値
	var channel77 = document.getElementsByName("hensachi7")[0];
	if(route7=="0-2"){
	var pickup77 = new Array(16,16);
	}else if(route7=="0-23"){
	var pickup77 = new Array(16,16);
	}else if(route7=="1-2"){
	var pickup77 = new Array(16,16);
	}else if(route7=="1-23"){
	var pickup77 = new Array(16,16);
	}else if(route7=="2-0"){
	var pickup77 = new Array(0,0);
	}else if(route7=="2-1"){
	var pickup77 = new Array(1,1);
	}else if(route7=="2-2"){
	var pickup77 = new Array(2,2);
	}else if(route7=="2-3"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-4"){
	var pickup77 = new Array(4,4);
	}else if(route7=="2-6"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-7"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-8"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-9"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-10"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-11"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-12"){
	var pickup77 = new Array(3,3);
	}else if(route7=="2-23"){
		if(result76=="0"){
		var pickup77 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup77 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route7=="3-0"){
	var pickup77 = new Array(0,0);
	}else if(route7=="3-1"){
	var pickup77 = new Array(1,1);
	}else if(route7=="3-2"){
	var pickup77 = new Array(2,2);
	}else if(route7=="3-3"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-4"){
	var pickup77 = new Array(4,4);
	}else if(route7=="3-6"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-7"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-8"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-9"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-10"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-11"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-12"){
	var pickup77 = new Array(3,3);
	}else if(route7=="3-23"){
		if(result76=="0"){
		var pickup77 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup77 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route7=="3-2"){
	var pickup77 = new Array(16,17);
	}else if(route7=="3-23"){
	var pickup77 = new Array(16,17);
	}else if(route7=="4-2"){
	var pickup77 = new Array(12,12);
	}else if(route7=="4-23"){
	var pickup77 = new Array(13,13);
	}else if(route7=="5-19"){
	var pickup77 = new Array(14,14);
	}else if(route7=="5-23"){
	var pickup77 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route7=="6-19"){
	var pickup77 = new Array(14,14);
	}else if(route7=="6-23"){
	var pickup77 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route7=="7-5"){
	var pickup77 = new Array(6,6);
	}else if(route7=="7-6"){
	var pickup77 = new Array(6,6);
	}else if(route7=="7-7"){
	var pickup77 = new Array(6,6);
	}else if(route7=="7-8"){
	var pickup77 = new Array(6,6);
	}else if(route7=="7-23"){
	var pickup77 = new Array(6,6);
	}else if(route7=="8-5"){
	var pickup77 = new Array(6,6);
	}else if(route7=="8-6"){
	var pickup77 = new Array(6,6);
	}else if(route7=="8-7"){
	var pickup77 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route7=="8-8"){
	var pickup77 = new Array(6,6);
	}else if(route7=="8-23"){
	var pickup77 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route7=="9-9"){
	var pickup77 = new Array(5,5);
	}else if(route7=="9-10"){
	var pickup77 = new Array(5,5);
	}else if(route7=="9-11"){
	var pickup77 = new Array(5,5);
	}else if(route7=="9-12"){
	var pickup77 = new Array(5,5);
	}else if(route7=="9-23"){
	var pickup77 = new Array(5,5);
	}else if(route7=="10-9"){
	var pickup77 = new Array(5,5);
	}else if(route7=="10-10"){
	var pickup77 = new Array(5,5);
	}else if(route7=="10-11"){
	var pickup77 = new Array(5,5);
	}else if(route7=="10-12"){
	var pickup77 = new Array(5,5);
	}else if(route7=="10-23"){
	var pickup77 = new Array(5,5);
	}else if(route7=="11-9"){
	var pickup77 = new Array(5,5);
	}else if(route7=="11-10"){
	var pickup77 = new Array(5,5);
	}else if(route7=="11-11"){
	var pickup77 = new Array(5,5);
	}else if(route7=="11-12"){
	var pickup77 = new Array(5,5);
	}else if(route7=="11-23"){
	var pickup77 = new Array(5,5);
	}else if(route7=="12-0"){
	var pickup77 = new Array(8,8);
	}else if(route7=="12-1"){
	var pickup77 = new Array(9,9);
	}else if(route7=="12-4"){
	var pickup77 = new Array(11,11);
	}else if(route7=="12-13"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-14"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-15"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-16"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-17"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-18"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-19"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-20"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-21"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-22"){
	var pickup77 = new Array(10,10);
	}else if(route7=="12-23"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-0"){
	var pickup77 = new Array(8,8);
	}else if(route7=="13-1"){
	var pickup77 = new Array(9,9);
	}else if(route7=="13-4"){
	var pickup77 = new Array(11,11);
	}else if(route7=="13-13"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-14"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-15"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-16"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-17"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-18"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-19"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-20"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-21"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-22"){
	var pickup77 = new Array(10,10);
	}else if(route7=="13-23"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-0"){
	var pickup77 = new Array(8,8);
	}else if(route7=="14-1"){
	var pickup77 = new Array(9,9);
	}else if(route7=="14-4"){
	var pickup77 = new Array(11,11);
	}else if(route7=="14-13"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-14"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-15"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-16"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-17"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-18"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-19"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-20"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-21"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-22"){
	var pickup77 = new Array(10,10);
	}else if(route7=="14-23"){
	var pickup77 = new Array(10,10);
	}else{
	var pickup77 = new Array(18,18);
	}
	rand_num77 = Math.floor( Math.random() * pickup77.length );
	result77 = pickup77[rand_num77];
	channel77.value = channel77[result77].value;
	var targetR77 = document.getElementsByName("changeLED_stundby")[20];
	targetR77.src = "parts/" + channel77.value + ".png";
//７列目始発
	var channel75 = document.getElementsByName("type7")[0];
	if(route7=="3-4"){
	var pickup75 = new Array(3,3);
	}else if(route7=="4-2"){
	var pickup75 = new Array(4,4);
	}else if(route7=="4-23"){
	var pickup75 = new Array(4,4);
	}else if(route7=="5-19"){
	var pickup75 = new Array(5,5);
	}else if(route7=="5-23"){
	var pickup75 = new Array(5,5);
	}else if(route7=="6-19"){
	var pickup75 = new Array(5,5);
	}else if(route7=="6-23"){
	var pickup75 = new Array(5,5);
	}else if(route7=="8-7"){
		if(result77=="7"){
		var pickup75 = new Array(2,2);
		}else{
		var pickup75 = new Array(0,0);
		}
	}else if(result74=="0"){
	var pickup75 = new Array(0,0);
	}else if(result74=="1"){
	var pickup75 = new Array(0,0);
	}else if(result74=="2"){
	var pickup75 = new Array(0,0);
	}else if(result74=="3"){
	var pickup75 = new Array(0,0);
	}else if(result74=="7"){
	var pickup75 = new Array(0,0);
	}else if(result74=="8"){
	var pickup75 = new Array(0,0);
	}else{
	var pickup75 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num75 = Math.floor( Math.random() * pickup75.length );
	result75 = pickup75[rand_num75];
	channel75.value = channel75[result75].value;
	var targetR75 = document.getElementsByName("changeLED")[26];
	targetR75.src = "parts/" + channel75.value + "_" + targetR75.src.slice(-7);
//================================================================================
//８列目時刻分
	var min08 = ("0"+(nowtime.getMinutes() + (plusmax * 7) - 7 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min08>=120){
	var min08re = ("0"+ (min08 - 120)).slice(-2);
	} else if(min08>=60){
	var min08re = ("0"+ (min08 - 60)).slice(-2);
	} else {
	var min08re = ("0"+ min08).slice(-2);
	}
	var minLED08 = document.getElementsByName("changeLED_stundby")[22];
	minLED08.src = "parts/time/m" + min08re + ".png";
	var num08m = Number(min08re);
	var channel82 = document.getElementsByName("timeM8")[0];
	channel82.value = channel82[num08m].value;
//８列目時刻時
	var hour08 = ("0"+nowtime.getHours()).slice(-2);
	if(min08>=120){
	var hour08re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min08>=60){
	var hour08re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour08re = ("0"+hour08).slice(-2);
	}
	if(hour08re>=24){
	var hour08th = ("0"+ (hour08re - 24)).slice(-2);
	} else {
	var hour08th = ("0"+ hour08re).slice(-2);
	}
	var hourLED08 = document.getElementsByName("changeLED_stundby")[21];
	hourLED08.src = "parts/time/h" + hour08th + ".png";
	var num08h = Number(hour08th);
	var channel81 = document.getElementsByName("timeH8")[0];
	channel81.value = channel81[num08h].value;
//８列目のりば
	var channel84 = document.getElementsByName("tra8")[0];
	var pars8 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num84 = Math.floor( Math.random() * pars8.length );
	result84 = pars8[rand_num84];
	
	if(result84=="0"){
		var colorgroup8= "none";
	}else if(result84=="1"){
		var colorgroup8= "none";
	}else if(result84=="2"){
		var colorgroup8= "toka";
	}else if(result84=="3"){
		var colorgroup8= "toka";
	}else if(result84=="4"){
		var colorgroup8= "leex";
	}else if(result84=="5"){
		var colorgroup8= "leex";
	}else if(result84=="6"){
		var colorgroup8= "leex";
	}else if(result84=="7"){
		var colorgroup8= "sysh";
	}else if(result84=="8"){
		var colorgroup8= "sysh";
	}else if(result84=="9"){
		var colorgroup8= "sysh";
	}else if(result84=="10"){
		var colorgroup8= "sysh";
	}else if(result84=="11"){
		var colorgroup8= "sysh";
	}else if(result84=="12"){
		var colorgroup8= "suka";
	}else if(result84=="13"){
		var colorgroup8= "suka";
	}else if(result84=="14"){
		var colorgroup8= "suka";
	}
	if(colorgroup8==colorgroup7){
		if(colorgroup8==colorgroup6){
			while(colorgroup8==colorgroup6){
			var pars8 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num84 = Math.floor( Math.random() * pars8.length );
			result84 = pars8[rand_num84];
			if(result84=="0"){
				var colorgroup8= "none";
			}else if(result84=="1"){
				var colorgroup8= "none";
			}else if(result84=="2"){
				var colorgroup8= "toka";
			}else if(result84=="3"){
				var colorgroup8= "toka";
			}else if(result84=="4"){
				var colorgroup8= "leex";
			}else if(result84=="5"){
				var colorgroup8= "leex";
			}else if(result84=="6"){
				var colorgroup8= "leex";
			}else if(result84=="7"){
				var colorgroup8= "sysh";
			}else if(result84=="8"){
				var colorgroup8= "sysh";
			}else if(result84=="9"){
				var colorgroup8= "sysh";
			}else if(result84=="10"){
				var colorgroup8= "sysh";
			}else if(result84=="11"){
				var colorgroup8= "sysh";
			}else if(result84=="12"){
				var colorgroup8= "suka";
			}else if(result84=="13"){
				var colorgroup8= "suka";
			}else if(result84=="14"){
				var colorgroup8= "suka";
	}
			}
		}
	}
	channel84.value = channel84[result84].value;
	var targetR84 = document.getElementsByName("changeLED")[29];
	targetR84.src = "parts/" + channel84.value + "_" + targetR84.src.slice(-7);
//８列目行先
	var channel83 = document.getElementsByName("des8")[0];
	var judge8 = channel84[result84].value;
	if(judge8=="track/b01"){
	var pickup83 = new Array(2,2,2,2,23);
	}else if(judge8=="track/b02"){
	var pickup83 = new Array(2,2,2,2,23);
	}else if(judge8=="track/o01"){
	var pickup83 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge8=="track/o02"){
	var pickup83 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge8=="track/r02"){
	var pickup83 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge8=="track/r05"){
	var pickup83 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge8=="track/r06"){
	var pickup83 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge8=="track/g01"){
	var pickup83 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge8=="track/g02"){
	var pickup83 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge8=="track/g05"){
	var pickup83 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge8=="track/g06"){
	var pickup83 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge8=="track/g07"){
	var pickup83 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge8=="track/b05"){
	var pickup83 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge8=="track/b06"){
	var pickup83 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge8=="track/b07"){
	var pickup83 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup83 = new Array(23,23);
	}
	rand_num83 = Math.floor( Math.random() * pickup83.length );
	result83 = pickup83[rand_num83];
	channel83.value = channel83[result83].value;
	var targetR83 = document.getElementsByName("changeLED")[28];
	targetR83.src = "parts/" + channel83.value + "_" + targetR83.src.slice(-7);
//８列目路線
	var channel86 = document.getElementsByName("other8")[0];
	var route8 = result84 + "-" + result83;
	if(route8=="0-2"){
	var pickup86 = new Array(18,19);
	}else if(route8=="0-23"){
	var pickup86 = new Array(18,19);
	}else if(route8=="1-2"){
	var pickup86 = new Array(18,19);
	}else if(route8=="1-23"){
	var pickup86 = new Array(18,19);
	}else if(route8=="2-0"){
	var pickup86 = new Array(0,0);
	}else if(route8=="2-1"){
	var pickup86 = new Array(0,0);
	}else if(route8=="2-2"){
	var pickup86 = new Array(0,0);
	}else if(route8=="2-3"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-4"){
	var pickup86 = new Array(0,0);
	}else if(route8=="2-6"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-7"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-8"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-9"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-10"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-11"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-12"){
	var pickup86 = new Array(1,1);
	}else if(route8=="2-23"){
	var pickup86 = new Array(0,0,1,1,1);
	}else if(route8=="3-0"){
	var pickup86 = new Array(0,0);
	}else if(route8=="3-1"){
	var pickup86 = new Array(0,0);
	}else if(route8=="3-2"){
	var pickup86 = new Array(0,0);
	}else if(route8=="3-3"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-4"){
	var pickup86 = new Array(0,0);
	}else if(route8=="3-6"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-7"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-8"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-9"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-10"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-11"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-12"){
	var pickup86 = new Array(1,1);
	}else if(route8=="3-23"){
	var pickup86 = new Array(0,0,1,1,1);
	}else if(route8=="4-2"){
	var pickup86 = new Array(16,17);
	}else if(route8=="4-23"){
	var pickup86 = new Array(16,17);
	}else if(route8=="5-19"){
	var pickup86 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route8=="5-23"){
	var pickup86 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route8=="6-19"){
	var pickup86 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route8=="6-23"){
	var pickup86 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route8=="7-5"){
	var pickup86 = new Array(2,2);
	}else if(route8=="7-6"){
	var pickup86 = new Array(2,2);
	}else if(route8=="7-7"){
	var pickup86 = new Array(2,2);
	}else if(route8=="7-8"){
	var pickup86 = new Array(2,2);
	}else if(route8=="7-23"){
	var pickup86 = new Array(2,2);
	}else if(route8=="8-5"){
	var pickup86 = new Array(2,2);
	}else if(route8=="8-6"){
	var pickup86 = new Array(2,2);
	}else if(route8=="8-7"){
	var pickup86 = new Array(2,2);
	}else if(route8=="8-8"){
	var pickup86 = new Array(2,2);
	}else if(route8=="8-23"){
	var pickup86 = new Array(2,2);
	}else if(route8=="9-9"){
	var pickup86 = new Array(2,2);
	}else if(route8=="9-10"){
	var pickup86 = new Array(2,2);
	}else if(route8=="9-11"){
	var pickup86 = new Array(2,2);
	}else if(route8=="9-12"){
	var pickup86 = new Array(2,2);
	}else if(route8=="9-23"){
	var pickup86 = new Array(2,2);
	}else if(route8=="10-9"){
	var pickup86 = new Array(2,2);
	}else if(route8=="10-10"){
	var pickup86 = new Array(2,2);
	}else if(route8=="10-11"){
	var pickup86 = new Array(2,2);
	}else if(route8=="10-12"){
	var pickup86 = new Array(2,2);
	}else if(route8=="10-23"){
	var pickup86 = new Array(2,2);
	}else if(route8=="11-9"){
	var pickup86 = new Array(2,2);
	}else if(route8=="11-10"){
	var pickup86 = new Array(2,2);
	}else if(route8=="11-11"){
	var pickup86 = new Array(2,2);
	}else if(route8=="11-12"){
	var pickup86 = new Array(2,2);
	}else if(route8=="11-23"){
	var pickup86 = new Array(2,2);
	}else if(route8=="12-0"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-1"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-4"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-13"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-14"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-15"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-16"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-17"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-18"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-19"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-20"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-21"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-22"){
	var pickup86 = new Array(3,3);
	}else if(route8=="12-23"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-0"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-1"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-4"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-13"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-14"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-15"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-16"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-17"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-18"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-19"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-20"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-21"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-22"){
	var pickup86 = new Array(3,3);
	}else if(route8=="13-23"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-0"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-1"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-4"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-13"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-14"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-15"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-16"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-17"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-18"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-19"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-20"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-21"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-22"){
	var pickup86 = new Array(3,3);
	}else if(route8=="14-23"){
	var pickup86 = new Array(3,3);
	}else{
	var pickup86 = new Array(20,20);
	}
	rand_num86 = Math.floor( Math.random() * pickup86.length );
	result86 = pickup86[rand_num86];
	channel86.value = channel86[result86].value;
	var targetR86 = document.getElementsByName("changeLED")[31];
	targetR86.src = "parts/" + channel86.value + "_" + targetR86.src.slice(-7);
//８列目偏差値
	var channel87 = document.getElementsByName("hensachi8")[0];
	if(route8=="0-2"){
	var pickup87 = new Array(16,16);
	}else if(route8=="0-23"){
	var pickup87 = new Array(16,16);
	}else if(route8=="1-2"){
	var pickup87 = new Array(16,16);
	}else if(route8=="1-23"){
	var pickup87 = new Array(16,16);
	}else if(route8=="2-0"){
	var pickup87 = new Array(0,0);
	}else if(route8=="2-1"){
	var pickup87 = new Array(1,1);
	}else if(route8=="2-2"){
	var pickup87 = new Array(2,2);
	}else if(route8=="2-3"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-4"){
	var pickup87 = new Array(4,4);
	}else if(route8=="2-6"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-7"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-8"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-9"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-10"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-11"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-12"){
	var pickup87 = new Array(3,3);
	}else if(route8=="2-23"){
		if(result86=="0"){
		var pickup87 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup87 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route8=="3-0"){
	var pickup87 = new Array(0,0);
	}else if(route8=="3-1"){
	var pickup87 = new Array(1,1);
	}else if(route8=="3-2"){
	var pickup87 = new Array(2,2);
	}else if(route8=="3-3"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-4"){
	var pickup87 = new Array(4,4);
	}else if(route8=="3-6"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-7"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-8"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-9"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-10"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-11"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-12"){
	var pickup87 = new Array(3,3);
	}else if(route8=="3-23"){
		if(result86=="0"){
		var pickup87 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup87 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route8=="3-2"){
	var pickup87 = new Array(16,17);
	}else if(route8=="3-23"){
	var pickup87 = new Array(16,17);
	}else if(route8=="4-2"){
	var pickup87 = new Array(12,12);
	}else if(route8=="4-23"){
	var pickup87 = new Array(13,13);
	}else if(route8=="5-19"){
	var pickup87 = new Array(14,14);
	}else if(route8=="5-23"){
	var pickup87 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route8=="6-19"){
	var pickup87 = new Array(14,14);
	}else if(route8=="6-23"){
	var pickup87 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route8=="7-5"){
	var pickup87 = new Array(6,6);
	}else if(route8=="7-6"){
	var pickup87 = new Array(6,6);
	}else if(route8=="7-7"){
	var pickup87 = new Array(6,6);
	}else if(route8=="7-8"){
	var pickup87 = new Array(6,6);
	}else if(route8=="7-23"){
	var pickup87 = new Array(6,6);
	}else if(route8=="8-5"){
	var pickup87 = new Array(6,6);
	}else if(route8=="8-6"){
	var pickup87 = new Array(6,6);
	}else if(route8=="8-7"){
	var pickup87 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route8=="8-8"){
	var pickup87 = new Array(6,6);
	}else if(route8=="8-23"){
	var pickup87 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route8=="9-9"){
	var pickup87 = new Array(5,5);
	}else if(route8=="9-10"){
	var pickup87 = new Array(5,5);
	}else if(route8=="9-11"){
	var pickup87 = new Array(5,5);
	}else if(route8=="9-12"){
	var pickup87 = new Array(5,5);
	}else if(route8=="9-23"){
	var pickup87 = new Array(5,5);
	}else if(route8=="10-9"){
	var pickup87 = new Array(5,5);
	}else if(route8=="10-10"){
	var pickup87 = new Array(5,5);
	}else if(route8=="10-11"){
	var pickup87 = new Array(5,5);
	}else if(route8=="10-12"){
	var pickup87 = new Array(5,5);
	}else if(route8=="10-23"){
	var pickup87 = new Array(5,5);
	}else if(route8=="11-9"){
	var pickup87 = new Array(5,5);
	}else if(route8=="11-10"){
	var pickup87 = new Array(5,5);
	}else if(route8=="11-11"){
	var pickup87 = new Array(5,5);
	}else if(route8=="11-12"){
	var pickup87 = new Array(5,5);
	}else if(route8=="11-23"){
	var pickup87 = new Array(5,5);
	}else if(route8=="12-0"){
	var pickup87 = new Array(8,8);
	}else if(route8=="12-1"){
	var pickup87 = new Array(9,9);
	}else if(route8=="12-4"){
	var pickup87 = new Array(11,11);
	}else if(route8=="12-13"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-14"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-15"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-16"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-17"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-18"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-19"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-20"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-21"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-22"){
	var pickup87 = new Array(10,10);
	}else if(route8=="12-23"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-0"){
	var pickup87 = new Array(8,8);
	}else if(route8=="13-1"){
	var pickup87 = new Array(9,9);
	}else if(route8=="13-4"){
	var pickup87 = new Array(11,11);
	}else if(route8=="13-13"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-14"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-15"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-16"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-17"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-18"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-19"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-20"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-21"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-22"){
	var pickup87 = new Array(10,10);
	}else if(route8=="13-23"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-0"){
	var pickup87 = new Array(8,8);
	}else if(route8=="14-1"){
	var pickup87 = new Array(9,9);
	}else if(route8=="14-4"){
	var pickup87 = new Array(11,11);
	}else if(route8=="14-13"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-14"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-15"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-16"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-17"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-18"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-19"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-20"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-21"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-22"){
	var pickup87 = new Array(10,10);
	}else if(route8=="14-23"){
	var pickup87 = new Array(10,10);
	}else{
	var pickup87 = new Array(18,18);
	}
	rand_num87 = Math.floor( Math.random() * pickup87.length );
	result87 = pickup87[rand_num87];
	channel87.value = channel87[result87].value;
	var targetR87 = document.getElementsByName("changeLED_stundby")[23];
	targetR87.src = "parts/" + channel87.value + ".png";
//８列目始発
	var channel85 = document.getElementsByName("type8")[0];
	if(route8=="3-4"){
	var pickup85 = new Array(3,3);
	}else if(route8=="4-2"){
	var pickup85 = new Array(4,4);
	}else if(route8=="4-23"){
	var pickup85 = new Array(4,4);
	}else if(route8=="5-19"){
	var pickup85 = new Array(5,5);
	}else if(route8=="5-23"){
	var pickup85 = new Array(5,5);
	}else if(route8=="6-19"){
	var pickup85 = new Array(5,5);
	}else if(route8=="6-23"){
	var pickup85 = new Array(5,5);
	}else if(route8=="8-7"){
		if(result87=="7"){
		var pickup85 = new Array(2,2);
		}else{
		var pickup85 = new Array(0,0);
		}
	}else if(result84=="0"){
	var pickup85 = new Array(0,0);
	}else if(result84=="1"){
	var pickup85 = new Array(0,0);
	}else if(result84=="2"){
	var pickup85 = new Array(0,0);
	}else if(result84=="3"){
	var pickup85 = new Array(0,0);
	}else if(result84=="7"){
	var pickup85 = new Array(0,0);
	}else if(result84=="8"){
	var pickup85 = new Array(0,0);
	}else{
	var pickup85 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num85 = Math.floor( Math.random() * pickup85.length );
	result85 = pickup85[rand_num85];
	channel85.value = channel85[result85].value;
	var targetR85 = document.getElementsByName("changeLED")[30];
	targetR85.src = "parts/" + channel85.value + "_" + targetR85.src.slice(-7);
//================================================================================
//９列目時刻分
	var min09 = ("0"+(nowtime.getMinutes() + (plusmax * 8) - 8 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min09>=120){
	var min09re = ("0"+ (min09 - 120)).slice(-2);
	} else if(min09>=60){
	var min09re = ("0"+ (min09 - 60)).slice(-2);
	} else {
	var min09re = ("0"+ min09).slice(-2);
	}
	var minLED09 = document.getElementsByName("changeLED_stundby")[25];
	minLED09.src = "parts/time/m" + min09re + ".png";
	var num09m = Number(min09re);
	var channel92 = document.getElementsByName("timeM9")[0];
	channel92.value = channel92[num09m].value;
//９列目時刻時
	var hour09 = ("0"+nowtime.getHours()).slice(-2);
	if(min09>=120){
	var hour09re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min09>=60){
	var hour09re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour09re = ("0"+hour09).slice(-2);
	}
	if(hour09re>=24){
	var hour09th = ("0"+ (hour09re - 24)).slice(-2);
	} else {
	var hour09th = ("0"+ hour09re).slice(-2);
	}
	var hourLED09 = document.getElementsByName("changeLED_stundby")[24];
	hourLED09.src = "parts/time/h" + hour09th + ".png";
	var num09h = Number(hour09th);
	var channel91 = document.getElementsByName("timeH9")[0];
	channel91.value = channel91[num09h].value;
//９列目のりば
	var channel94 = document.getElementsByName("tra9")[0];
	var pars9 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num94 = Math.floor( Math.random() * pars9.length );
	result94 = pars9[rand_num94];
	
	if(result94=="0"){
		var colorgroup9= "none";
	}else if(result94=="1"){
		var colorgroup9= "none";
	}else if(result94=="2"){
		var colorgroup9= "toka";
	}else if(result94=="3"){
		var colorgroup9= "toka";
	}else if(result94=="4"){
		var colorgroup9= "leex";
	}else if(result94=="5"){
		var colorgroup9= "leex";
	}else if(result94=="6"){
		var colorgroup9= "leex";
	}else if(result94=="7"){
		var colorgroup9= "sysh";
	}else if(result94=="8"){
		var colorgroup9= "sysh";
	}else if(result94=="9"){
		var colorgroup9= "sysh";
	}else if(result94=="10"){
		var colorgroup9= "sysh";
	}else if(result94=="11"){
		var colorgroup9= "sysh";
	}else if(result94=="12"){
		var colorgroup9= "suka";
	}else if(result94=="13"){
		var colorgroup9= "suka";
	}else if(result94=="14"){
		var colorgroup9= "suka";
	}
	if(colorgroup9==colorgroup8){
		if(colorgroup9==colorgroup7){
			while(colorgroup9==colorgroup7){
			var pars9 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num94 = Math.floor( Math.random() * pars9.length );
			result94 = pars9[rand_num94];
			if(result94=="0"){
				var colorgroup9= "none";
			}else if(result94=="1"){
				var colorgroup9= "none";
			}else if(result94=="2"){
				var colorgroup9= "toka";
			}else if(result94=="3"){
				var colorgroup9= "toka";
			}else if(result94=="4"){
				var colorgroup9= "leex";
			}else if(result94=="5"){
				var colorgroup9= "leex";
			}else if(result94=="6"){
				var colorgroup9= "leex";
			}else if(result94=="7"){
				var colorgroup9= "sysh";
			}else if(result94=="8"){
				var colorgroup9= "sysh";
			}else if(result94=="9"){
				var colorgroup9= "sysh";
			}else if(result94=="10"){
				var colorgroup9= "sysh";
			}else if(result94=="11"){
				var colorgroup9= "sysh";
			}else if(result94=="12"){
				var colorgroup9= "suka";
			}else if(result94=="13"){
				var colorgroup9= "suka";
			}else if(result94=="14"){
				var colorgroup9= "suka";
	}
			}
		}
	}
	channel94.value = channel94[result94].value;
	var targetR94 = document.getElementsByName("changeLED")[33];
	targetR94.src = "parts/" + channel94.value + "_" + targetR94.src.slice(-7);
//９列目行先
	var channel93 = document.getElementsByName("des9")[0];
	var judge9 = channel94[result94].value;
	if(judge9=="track/b01"){
	var pickup93 = new Array(2,2,2,2,23);
	}else if(judge9=="track/b02"){
	var pickup93 = new Array(2,2,2,2,23);
	}else if(judge9=="track/o01"){
	var pickup93 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge9=="track/o02"){
	var pickup93 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge9=="track/r02"){
	var pickup93 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge9=="track/r05"){
	var pickup93 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge9=="track/r06"){
	var pickup93 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge9=="track/g01"){
	var pickup93 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge9=="track/g02"){
	var pickup93 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge9=="track/g05"){
	var pickup93 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge9=="track/g06"){
	var pickup93 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge9=="track/g07"){
	var pickup93 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge9=="track/b05"){
	var pickup93 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge9=="track/b06"){
	var pickup93 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge9=="track/b07"){
	var pickup93 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup93 = new Array(23,23);
	}
	rand_num93 = Math.floor( Math.random() * pickup93.length );
	result93 = pickup93[rand_num93];
	channel93.value = channel93[result93].value;
	var targetR93 = document.getElementsByName("changeLED")[32];
	targetR93.src = "parts/" + channel93.value + "_" + targetR93.src.slice(-7);
//９列目路線
	var channel96 = document.getElementsByName("other9")[0];
	var route9 = result94 + "-" + result93;
	if(route9=="0-2"){
	var pickup96 = new Array(18,19);
	}else if(route9=="0-23"){
	var pickup96 = new Array(18,19);
	}else if(route9=="1-2"){
	var pickup96 = new Array(18,19);
	}else if(route9=="1-23"){
	var pickup96 = new Array(18,19);
	}else if(route9=="2-0"){
	var pickup96 = new Array(0,0);
	}else if(route9=="2-1"){
	var pickup96 = new Array(0,0);
	}else if(route9=="2-2"){
	var pickup96 = new Array(0,0);
	}else if(route9=="2-3"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-4"){
	var pickup96 = new Array(0,0);
	}else if(route9=="2-6"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-7"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-8"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-9"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-10"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-11"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-12"){
	var pickup96 = new Array(1,1);
	}else if(route9=="2-23"){
	var pickup96 = new Array(0,0,1,1,1);
	}else if(route9=="3-0"){
	var pickup96 = new Array(0,0);
	}else if(route9=="3-1"){
	var pickup96 = new Array(0,0);
	}else if(route9=="3-2"){
	var pickup96 = new Array(0,0);
	}else if(route9=="3-3"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-4"){
	var pickup96 = new Array(0,0);
	}else if(route9=="3-6"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-7"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-8"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-9"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-10"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-11"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-12"){
	var pickup96 = new Array(1,1);
	}else if(route9=="3-23"){
	var pickup96 = new Array(0,0,1,1,1);
	}else if(route9=="4-2"){
	var pickup96 = new Array(16,17);
	}else if(route9=="4-23"){
	var pickup96 = new Array(16,17);
	}else if(route9=="5-19"){
	var pickup96 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route9=="5-23"){
	var pickup96 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route9=="6-19"){
	var pickup96 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route9=="6-23"){
	var pickup96 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route9=="7-5"){
	var pickup96 = new Array(2,2);
	}else if(route9=="7-6"){
	var pickup96 = new Array(2,2);
	}else if(route9=="7-7"){
	var pickup96 = new Array(2,2);
	}else if(route9=="7-8"){
	var pickup96 = new Array(2,2);
	}else if(route9=="7-23"){
	var pickup96 = new Array(2,2);
	}else if(route9=="8-5"){
	var pickup96 = new Array(2,2);
	}else if(route9=="8-6"){
	var pickup96 = new Array(2,2);
	}else if(route9=="8-7"){
	var pickup96 = new Array(2,2);
	}else if(route9=="8-8"){
	var pickup96 = new Array(2,2);
	}else if(route9=="8-23"){
	var pickup96 = new Array(2,2);
	}else if(route9=="9-9"){
	var pickup96 = new Array(2,2);
	}else if(route9=="9-10"){
	var pickup96 = new Array(2,2);
	}else if(route9=="9-11"){
	var pickup96 = new Array(2,2);
	}else if(route9=="9-12"){
	var pickup96 = new Array(2,2);
	}else if(route9=="9-23"){
	var pickup96 = new Array(2,2);
	}else if(route9=="10-9"){
	var pickup96 = new Array(2,2);
	}else if(route9=="10-10"){
	var pickup96 = new Array(2,2);
	}else if(route9=="10-11"){
	var pickup96 = new Array(2,2);
	}else if(route9=="10-12"){
	var pickup96 = new Array(2,2);
	}else if(route9=="10-23"){
	var pickup96 = new Array(2,2);
	}else if(route9=="11-9"){
	var pickup96 = new Array(2,2);
	}else if(route9=="11-10"){
	var pickup96 = new Array(2,2);
	}else if(route9=="11-11"){
	var pickup96 = new Array(2,2);
	}else if(route9=="11-12"){
	var pickup96 = new Array(2,2);
	}else if(route9=="11-23"){
	var pickup96 = new Array(2,2);
	}else if(route9=="12-0"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-1"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-4"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-13"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-14"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-15"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-16"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-17"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-18"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-19"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-20"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-21"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-22"){
	var pickup96 = new Array(3,3);
	}else if(route9=="12-23"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-0"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-1"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-4"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-13"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-14"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-15"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-16"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-17"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-18"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-19"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-20"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-21"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-22"){
	var pickup96 = new Array(3,3);
	}else if(route9=="13-23"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-0"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-1"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-4"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-13"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-14"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-15"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-16"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-17"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-18"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-19"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-20"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-21"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-22"){
	var pickup96 = new Array(3,3);
	}else if(route9=="14-23"){
	var pickup96 = new Array(3,3);
	}else{
	var pickup96 = new Array(20,20);
	}
	rand_num96 = Math.floor( Math.random() * pickup96.length );
	result96 = pickup96[rand_num96];
	channel96.value = channel96[result96].value;
	var targetR96 = document.getElementsByName("changeLED")[35];
	targetR96.src = "parts/" + channel96.value + "_" + targetR96.src.slice(-7);
//９列目偏差値
	var channel97 = document.getElementsByName("hensachi9")[0];
	if(route9=="0-2"){
	var pickup97 = new Array(16,16);
	}else if(route9=="0-23"){
	var pickup97 = new Array(16,16);
	}else if(route9=="1-2"){
	var pickup97 = new Array(16,16);
	}else if(route9=="1-23"){
	var pickup97 = new Array(16,16);
	}else if(route9=="2-0"){
	var pickup97 = new Array(0,0);
	}else if(route9=="2-1"){
	var pickup97 = new Array(1,1);
	}else if(route9=="2-2"){
	var pickup97 = new Array(2,2);
	}else if(route9=="2-3"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-4"){
	var pickup97 = new Array(4,4);
	}else if(route9=="2-6"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-7"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-8"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-9"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-10"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-11"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-12"){
	var pickup97 = new Array(3,3);
	}else if(route9=="2-23"){
		if(result96=="0"){
		var pickup97 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup97 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route9=="3-0"){
	var pickup97 = new Array(0,0);
	}else if(route9=="3-1"){
	var pickup97 = new Array(1,1);
	}else if(route9=="3-2"){
	var pickup97 = new Array(2,2);
	}else if(route9=="3-3"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-4"){
	var pickup97 = new Array(4,4);
	}else if(route9=="3-6"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-7"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-8"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-9"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-10"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-11"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-12"){
	var pickup97 = new Array(3,3);
	}else if(route9=="3-23"){
		if(result96=="0"){
		var pickup97 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup97 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route9=="3-2"){
	var pickup97 = new Array(16,17);
	}else if(route9=="3-23"){
	var pickup97 = new Array(16,17);
	}else if(route9=="4-2"){
	var pickup97 = new Array(12,12);
	}else if(route9=="4-23"){
	var pickup97 = new Array(13,13);
	}else if(route9=="5-19"){
	var pickup97 = new Array(14,14);
	}else if(route9=="5-23"){
	var pickup97 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route9=="6-19"){
	var pickup97 = new Array(14,14);
	}else if(route9=="6-23"){
	var pickup97 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route9=="7-5"){
	var pickup97 = new Array(6,6);
	}else if(route9=="7-6"){
	var pickup97 = new Array(6,6);
	}else if(route9=="7-7"){
	var pickup97 = new Array(6,6);
	}else if(route9=="7-8"){
	var pickup97 = new Array(6,6);
	}else if(route9=="7-23"){
	var pickup97 = new Array(6,6);
	}else if(route9=="8-5"){
	var pickup97 = new Array(6,6);
	}else if(route9=="8-6"){
	var pickup97 = new Array(6,6);
	}else if(route9=="8-7"){
	var pickup97 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route9=="8-8"){
	var pickup97 = new Array(6,6);
	}else if(route9=="8-23"){
	var pickup97 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route9=="9-9"){
	var pickup97 = new Array(5,5);
	}else if(route9=="9-10"){
	var pickup97 = new Array(5,5);
	}else if(route9=="9-11"){
	var pickup97 = new Array(5,5);
	}else if(route9=="9-12"){
	var pickup97 = new Array(5,5);
	}else if(route9=="9-23"){
	var pickup97 = new Array(5,5);
	}else if(route9=="10-9"){
	var pickup97 = new Array(5,5);
	}else if(route9=="10-10"){
	var pickup97 = new Array(5,5);
	}else if(route9=="10-11"){
	var pickup97 = new Array(5,5);
	}else if(route9=="10-12"){
	var pickup97 = new Array(5,5);
	}else if(route9=="10-23"){
	var pickup97 = new Array(5,5);
	}else if(route9=="11-9"){
	var pickup97 = new Array(5,5);
	}else if(route9=="11-10"){
	var pickup97 = new Array(5,5);
	}else if(route9=="11-11"){
	var pickup97 = new Array(5,5);
	}else if(route9=="11-12"){
	var pickup97 = new Array(5,5);
	}else if(route9=="11-23"){
	var pickup97 = new Array(5,5);
	}else if(route9=="12-0"){
	var pickup97 = new Array(8,8);
	}else if(route9=="12-1"){
	var pickup97 = new Array(9,9);
	}else if(route9=="12-4"){
	var pickup97 = new Array(11,11);
	}else if(route9=="12-13"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-14"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-15"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-16"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-17"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-18"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-19"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-20"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-21"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-22"){
	var pickup97 = new Array(10,10);
	}else if(route9=="12-23"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-0"){
	var pickup97 = new Array(8,8);
	}else if(route9=="13-1"){
	var pickup97 = new Array(9,9);
	}else if(route9=="13-4"){
	var pickup97 = new Array(11,11);
	}else if(route9=="13-13"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-14"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-15"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-16"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-17"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-18"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-19"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-20"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-21"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-22"){
	var pickup97 = new Array(10,10);
	}else if(route9=="13-23"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-0"){
	var pickup97 = new Array(8,8);
	}else if(route9=="14-1"){
	var pickup97 = new Array(9,9);
	}else if(route9=="14-4"){
	var pickup97 = new Array(11,11);
	}else if(route9=="14-13"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-14"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-15"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-16"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-17"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-18"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-19"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-20"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-21"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-22"){
	var pickup97 = new Array(10,10);
	}else if(route9=="14-23"){
	var pickup97 = new Array(10,10);
	}else{
	var pickup97 = new Array(18,18);
	}
	rand_num97 = Math.floor( Math.random() * pickup97.length );
	result97 = pickup97[rand_num97];
	channel97.value = channel97[result97].value;
	var targetR97 = document.getElementsByName("changeLED_stundby")[26];
	targetR97.src = "parts/" + channel97.value + ".png";
//９列目始発
	var channel95 = document.getElementsByName("type9")[0];
	if(route9=="3-4"){
	var pickup95 = new Array(3,3);
	}else if(route9=="4-2"){
	var pickup95 = new Array(4,4);
	}else if(route9=="4-23"){
	var pickup95 = new Array(4,4);
	}else if(route9=="5-19"){
	var pickup95 = new Array(5,5);
	}else if(route9=="5-23"){
	var pickup95 = new Array(5,5);
	}else if(route9=="6-19"){
	var pickup95 = new Array(5,5);
	}else if(route9=="6-23"){
	var pickup95 = new Array(5,5);
	}else if(route9=="8-7"){
		if(result97=="7"){
		var pickup95 = new Array(2,2);
		}else{
		var pickup95 = new Array(0,0);
		}
	}else if(result94=="0"){
	var pickup95 = new Array(0,0);
	}else if(result94=="1"){
	var pickup95 = new Array(0,0);
	}else if(result94=="2"){
	var pickup95 = new Array(0,0);
	}else if(result94=="3"){
	var pickup95 = new Array(0,0);
	}else if(result94=="7"){
	var pickup95 = new Array(0,0);
	}else if(result94=="8"){
	var pickup95 = new Array(0,0);
	}else{
	var pickup95 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num95 = Math.floor( Math.random() * pickup95.length );
	result95 = pickup95[rand_num95];
	channel95.value = channel95[result95].value;
	var targetR95 = document.getElementsByName("changeLED")[34];
	targetR95.src = "parts/" + channel95.value + "_" + targetR95.src.slice(-7);
//================================================================================
//10列目時刻分
	var min10 = ("0"+(nowtime.getMinutes() + (plusmax * 9) - 9 + Math.floor( Math.random() * (plusmax + 1 - plusmin) ) + plusmin)).slice(-3);
	if(min10>=120){
	var min10re = ("0"+ (min10 - 120)).slice(-2);
	} else if(min10>=60){
	var min10re = ("0"+ (min10 - 60)).slice(-2);
	} else {
	var min10re = ("0"+ min10).slice(-2);
	}
	var minLED10 = document.getElementsByName("changeLED_stundby")[28];
	minLED10.src = "parts/time/m" + min10re + ".png";
	var num10m = Number(min10re);
	var channel102 = document.getElementsByName("timeM10")[0];
	channel102.value = channel102[num10m].value;
//10列目時刻時
	var hour10 = ("0"+nowtime.getHours()).slice(-2);
	if(min10>=120){
	var hour10re = ("0"+(nowtime.getHours() + 2)).slice(-2);
	}else if(min10>=60){
	var hour10re = ("0"+(nowtime.getHours() + 1)).slice(-2);
	} else {
	var hour10re = ("0"+hour10).slice(-2);
	}
	if(hour10re>=24){
	var hour10th = ("0"+ (hour10re - 24)).slice(-2);
	} else {
	var hour10th = ("0"+ hour10re).slice(-2);
	}
	var hourLED10 = document.getElementsByName("changeLED_stundby")[27];
	hourLED10.src = "parts/time/h" + hour10th + ".png";
	var num10h = Number(hour10th);
	var channel101 = document.getElementsByName("timeH10")[0];
	channel101.value = channel101[num10h].value;
//10列目のりば
	var channel104 = document.getElementsByName("tra10")[0];
	var pars10 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
	rand_num104 = Math.floor( Math.random() * pars10.length );
	result104 = pars10[rand_num104];
	
	if(result104=="0"){
		var colorgroup10= "none";
	}else if(result104=="1"){
		var colorgroup10= "none";
	}else if(result104=="2"){
		var colorgroup10= "toka";
	}else if(result104=="3"){
		var colorgroup10= "toka";
	}else if(result104=="4"){
		var colorgroup10= "leex";
	}else if(result104=="5"){
		var colorgroup10= "leex";
	}else if(result104=="6"){
		var colorgroup10= "leex";
	}else if(result104=="7"){
		var colorgroup10= "sysh";
	}else if(result104=="8"){
		var colorgroup10= "sysh";
	}else if(result104=="9"){
		var colorgroup10= "sysh";
	}else if(result104=="10"){
		var colorgroup10= "sysh";
	}else if(result104=="11"){
		var colorgroup10= "sysh";
	}else if(result104=="12"){
		var colorgroup10= "suka";
	}else if(result104=="13"){
		var colorgroup10= "suka";
	}else if(result104=="14"){
		var colorgroup10= "suka";
	}
	if(colorgroup10==colorgroup9){
		if(colorgroup10==colorgroup8){
			while(colorgroup10==colorgroup8){
			var pars10 = new Array(0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10,10,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14);
			rand_num104 = Math.floor( Math.random() * pars10.length );
			result104 = pars10[rand_num104];
			if(result104=="0"){
				var colorgroup10= "none";
			}else if(result104=="1"){
				var colorgroup10= "none";
			}else if(result104=="2"){
				var colorgroup10= "toka";
			}else if(result104=="3"){
				var colorgroup10= "toka";
			}else if(result104=="4"){
				var colorgroup10= "leex";
			}else if(result104=="5"){
				var colorgroup10= "leex";
			}else if(result104=="6"){
				var colorgroup10= "leex";
			}else if(result104=="7"){
				var colorgroup10= "sysh";
			}else if(result104=="8"){
				var colorgroup10= "sysh";
			}else if(result104=="9"){
				var colorgroup10= "sysh";
			}else if(result104=="10"){
				var colorgroup10= "sysh";
			}else if(result104=="11"){
				var colorgroup10= "sysh";
			}else if(result104=="12"){
				var colorgroup10= "suka";
			}else if(result104=="13"){
				var colorgroup10= "suka";
			}else if(result104=="14"){
				var colorgroup10= "suka";
	}
			}
		}
	}
	channel104.value = channel104[result104].value;
	var targetR104 = document.getElementsByName("changeLED")[37];
	targetR104.src = "parts/" + channel104.value + "_" + targetR104.src.slice(-7);
//10列目行先
	var channel103 = document.getElementsByName("des10")[0];
	var judge10 = channel104[result104].value;
	if(judge10=="track/b01"){
	var pickup103 = new Array(2,2,2,2,23);
	}else if(judge10=="track/b02"){
	var pickup103 = new Array(2,2,2,2,23);
	}else if(judge10=="track/o01"){
	var pickup103 = new Array(0,1,2,2,3,3,6,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge10=="track/o02"){
	var pickup103 = new Array(0,1,2,2,3,3,4,6,6,6,7,7,7,7,8,8,9,9,9,10,10,10,11,11,11,11,12,12,23);
	}else if(judge10=="track/r02"){
	var pickup103 = new Array(2,2,2,2,2,2,2,2,2,23);
	}else if(judge10=="track/r05"){
	var pickup103 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge10=="track/r06"){
	var pickup103 = new Array(19,19,19,19,19,19,19,19,19,23);
	}else if(judge10=="track/g01"){
	var pickup103 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge10=="track/g02"){
	var pickup103 = new Array(5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8);
	}else if(judge10=="track/g05"){
	var pickup103 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge10=="track/g06"){
	var pickup103 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge10=="track/g07"){
	var pickup103 = new Array(9,9,10,10,10,10,11,11,11,11,12,12);
	}else if(judge10=="track/b05"){
	var pickup103 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge10=="track/b06"){
	var pickup103 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else if(judge10=="track/b07"){
	var pickup103 = new Array(0,1,1,4,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22);
	}else{
	var pickup103 = new Array(23,23);
	}
	rand_num103 = Math.floor( Math.random() * pickup103.length );
	result103 = pickup103[rand_num103];
	channel103.value = channel103[result103].value;
	var targetR103 = document.getElementsByName("changeLED")[36];
	targetR103.src = "parts/" + channel103.value + "_" + targetR103.src.slice(-7);
//10列目路線
	var channel106 = document.getElementsByName("other10")[0];
	var route10 = result104 + "-" + result103;
	if(route10=="0-2"){
	var pickup106 = new Array(18,19);
	}else if(route10=="0-23"){
	var pickup106 = new Array(18,19);
	}else if(route10=="1-2"){
	var pickup106 = new Array(18,19);
	}else if(route10=="1-23"){
	var pickup106 = new Array(18,19);
	}else if(route10=="2-0"){
	var pickup106 = new Array(0,0);
	}else if(route10=="2-1"){
	var pickup106 = new Array(0,0);
	}else if(route10=="2-2"){
	var pickup106 = new Array(0,0);
	}else if(route10=="2-3"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-4"){
	var pickup106 = new Array(0,0);
	}else if(route10=="2-6"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-7"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-8"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-9"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-10"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-11"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-12"){
	var pickup106 = new Array(1,1);
	}else if(route10=="2-23"){
	var pickup106 = new Array(0,0,1,1,1);
	}else if(route10=="3-0"){
	var pickup106 = new Array(0,0);
	}else if(route10=="3-1"){
	var pickup106 = new Array(0,0);
	}else if(route10=="3-2"){
	var pickup106 = new Array(0,0);
	}else if(route10=="3-3"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-4"){
	var pickup106 = new Array(0,0);
	}else if(route10=="3-6"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-7"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-8"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-9"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-10"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-11"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-12"){
	var pickup106 = new Array(1,1);
	}else if(route10=="3-23"){
	var pickup106 = new Array(0,0,1,1,1);
	}else if(route10=="4-2"){
	var pickup106 = new Array(16,17);
	}else if(route10=="4-23"){
	var pickup106 = new Array(16,17);
	}else if(route10=="5-19"){
	var pickup106 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route10=="5-23"){
	var pickup106 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route10=="6-19"){
	var pickup106 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route10=="6-23"){
	var pickup106 = new Array(4,5,6,7,8,9,10,11,12,13,14,15);
	}else if(route10=="7-5"){
	var pickup106 = new Array(2,2);
	}else if(route10=="7-6"){
	var pickup106 = new Array(2,2);
	}else if(route10=="7-7"){
	var pickup106 = new Array(2,2);
	}else if(route10=="7-8"){
	var pickup106 = new Array(2,2);
	}else if(route10=="7-23"){
	var pickup106 = new Array(2,2);
	}else if(route10=="8-5"){
	var pickup106 = new Array(2,2);
	}else if(route10=="8-6"){
	var pickup106 = new Array(2,2);
	}else if(route10=="8-7"){
	var pickup106 = new Array(2,2);
	}else if(route10=="8-8"){
	var pickup106 = new Array(2,2);
	}else if(route10=="8-23"){
	var pickup106 = new Array(2,2);
	}else if(route10=="9-9"){
	var pickup106 = new Array(2,2);
	}else if(route10=="9-10"){
	var pickup106 = new Array(2,2);
	}else if(route10=="9-11"){
	var pickup106 = new Array(2,2);
	}else if(route10=="9-12"){
	var pickup106 = new Array(2,2);
	}else if(route10=="9-23"){
	var pickup106 = new Array(2,2);
	}else if(route10=="10-9"){
	var pickup106 = new Array(2,2);
	}else if(route10=="10-10"){
	var pickup106 = new Array(2,2);
	}else if(route10=="10-11"){
	var pickup106 = new Array(2,2);
	}else if(route10=="10-12"){
	var pickup106 = new Array(2,2);
	}else if(route10=="10-23"){
	var pickup106 = new Array(2,2);
	}else if(route10=="11-9"){
	var pickup106 = new Array(2,2);
	}else if(route10=="11-10"){
	var pickup106 = new Array(2,2);
	}else if(route10=="11-11"){
	var pickup106 = new Array(2,2);
	}else if(route10=="11-12"){
	var pickup106 = new Array(2,2);
	}else if(route10=="11-23"){
	var pickup106 = new Array(2,2);
	}else if(route10=="12-0"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-1"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-4"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-13"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-14"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-15"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-16"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-17"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-18"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-19"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-20"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-21"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-22"){
	var pickup106 = new Array(3,3);
	}else if(route10=="12-23"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-0"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-1"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-4"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-13"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-14"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-15"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-16"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-17"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-18"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-19"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-20"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-21"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-22"){
	var pickup106 = new Array(3,3);
	}else if(route10=="13-23"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-0"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-1"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-4"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-13"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-14"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-15"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-16"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-17"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-18"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-19"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-20"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-21"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-22"){
	var pickup106 = new Array(3,3);
	}else if(route10=="14-23"){
	var pickup106 = new Array(3,3);
	}else{
	var pickup106 = new Array(20,20);
	}
	rand_num106 = Math.floor( Math.random() * pickup106.length );
	result106 = pickup106[rand_num106];
	channel106.value = channel106[result106].value;
	var targetR106 = document.getElementsByName("changeLED")[39];
	targetR106.src = "parts/" + channel106.value + "_" + targetR106.src.slice(-7);
//10列目偏差値
	var channel107 = document.getElementsByName("hensachi10")[0];
	if(route10=="0-2"){
	var pickup107 = new Array(16,16);
	}else if(route10=="0-23"){
	var pickup107 = new Array(16,16);
	}else if(route10=="1-2"){
	var pickup107 = new Array(16,16);
	}else if(route10=="1-23"){
	var pickup107 = new Array(16,16);
	}else if(route10=="2-0"){
	var pickup107 = new Array(0,0);
	}else if(route10=="2-1"){
	var pickup107 = new Array(1,1);
	}else if(route10=="2-2"){
	var pickup107 = new Array(2,2);
	}else if(route10=="2-3"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-4"){
	var pickup107 = new Array(4,4);
	}else if(route10=="2-6"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-7"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-8"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-9"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-10"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-11"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-12"){
	var pickup107 = new Array(3,3);
	}else if(route10=="2-23"){
		if(result106=="0"){
		var pickup107 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup107 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route10=="3-0"){
	var pickup107 = new Array(0,0);
	}else if(route10=="3-1"){
	var pickup107 = new Array(1,1);
	}else if(route10=="3-2"){
	var pickup107 = new Array(2,2);
	}else if(route10=="3-3"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-4"){
	var pickup107 = new Array(4,4);
	}else if(route10=="3-6"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-7"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-8"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-9"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-10"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-11"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-12"){
	var pickup107 = new Array(3,3);
	}else if(route10=="3-23"){
		if(result106=="0"){
		var pickup107 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,17);
		}else{
		var pickup107 = new Array(0,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4);
		}
	}else if(route10=="3-2"){
	var pickup107 = new Array(16,17);
	}else if(route10=="3-23"){
	var pickup107 = new Array(16,17);
	}else if(route10=="4-2"){
	var pickup107 = new Array(12,12);
	}else if(route10=="4-23"){
	var pickup107 = new Array(13,13);
	}else if(route10=="5-19"){
	var pickup107 = new Array(14,14);
	}else if(route10=="5-23"){
	var pickup107 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route10=="6-19"){
	var pickup107 = new Array(14,14);
	}else if(route10=="6-23"){
	var pickup107 = new Array(14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15);
	}else if(route10=="7-5"){
	var pickup107 = new Array(6,6);
	}else if(route10=="7-6"){
	var pickup107 = new Array(6,6);
	}else if(route10=="7-7"){
	var pickup107 = new Array(6,6);
	}else if(route10=="7-8"){
	var pickup107 = new Array(6,6);
	}else if(route10=="7-23"){
	var pickup107 = new Array(6,6);
	}else if(route10=="8-5"){
	var pickup107 = new Array(6,6);
	}else if(route10=="8-6"){
	var pickup107 = new Array(6,6);
	}else if(route10=="8-7"){
	var pickup107 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route10=="8-8"){
	var pickup107 = new Array(6,6);
	}else if(route10=="8-23"){
	var pickup107 = new Array(6,6,6,6,6,6,6,7,7,7);
	}else if(route10=="9-9"){
	var pickup107 = new Array(5,5);
	}else if(route10=="9-10"){
	var pickup107 = new Array(5,5);
	}else if(route10=="9-11"){
	var pickup107 = new Array(5,5);
	}else if(route10=="9-12"){
	var pickup107 = new Array(5,5);
	}else if(route10=="9-23"){
	var pickup107 = new Array(5,5);
	}else if(route10=="10-9"){
	var pickup107 = new Array(5,5);
	}else if(route10=="10-10"){
	var pickup107 = new Array(5,5);
	}else if(route10=="10-11"){
	var pickup107 = new Array(5,5);
	}else if(route10=="10-12"){
	var pickup107 = new Array(5,5);
	}else if(route10=="10-23"){
	var pickup107 = new Array(5,5);
	}else if(route10=="11-9"){
	var pickup107 = new Array(5,5);
	}else if(route10=="11-10"){
	var pickup107 = new Array(5,5);
	}else if(route10=="11-11"){
	var pickup107 = new Array(5,5);
	}else if(route10=="11-12"){
	var pickup107 = new Array(5,5);
	}else if(route10=="11-23"){
	var pickup107 = new Array(5,5);
	}else if(route10=="12-0"){
	var pickup107 = new Array(8,8);
	}else if(route10=="12-1"){
	var pickup107 = new Array(9,9);
	}else if(route10=="12-4"){
	var pickup107 = new Array(11,11);
	}else if(route10=="12-13"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-14"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-15"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-16"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-17"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-18"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-19"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-20"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-21"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-22"){
	var pickup107 = new Array(10,10);
	}else if(route10=="12-23"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-0"){
	var pickup107 = new Array(8,8);
	}else if(route10=="13-1"){
	var pickup107 = new Array(9,9);
	}else if(route10=="13-4"){
	var pickup107 = new Array(11,11);
	}else if(route10=="13-13"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-14"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-15"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-16"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-17"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-18"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-19"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-20"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-21"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-22"){
	var pickup107 = new Array(10,10);
	}else if(route10=="13-23"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-0"){
	var pickup107 = new Array(8,8);
	}else if(route10=="14-1"){
	var pickup107 = new Array(9,9);
	}else if(route10=="14-4"){
	var pickup107 = new Array(11,11);
	}else if(route10=="14-13"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-14"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-15"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-16"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-17"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-18"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-19"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-20"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-21"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-22"){
	var pickup107 = new Array(10,10);
	}else if(route10=="14-23"){
	var pickup107 = new Array(10,10);
	}else{
	var pickup107 = new Array(18,18);
	}
	rand_num107 = Math.floor( Math.random() * pickup107.length );
	result107 = pickup107[rand_num107];
	channel107.value = channel107[result107].value;
	var targetR107 = document.getElementsByName("changeLED_stundby")[29];
	targetR107.src = "parts/" + channel107.value + ".png";
//10列目始発
	var channel105 = document.getElementsByName("type10")[0];
	if(route10=="3-4"){
	var pickup105 = new Array(3,3);
	}else if(route10=="4-2"){
	var pickup105 = new Array(4,4);
	}else if(route10=="4-23"){
	var pickup105 = new Array(4,4);
	}else if(route10=="5-19"){
	var pickup105 = new Array(5,5);
	}else if(route10=="5-23"){
	var pickup105 = new Array(5,5);
	}else if(route10=="6-19"){
	var pickup105 = new Array(5,5);
	}else if(route10=="6-23"){
	var pickup105 = new Array(5,5);
	}else if(route10=="8-7"){
		if(result107=="7"){
		var pickup105 = new Array(2,2);
		}else{
		var pickup105 = new Array(0,0);
		}
	}else if(result104=="0"){
	var pickup105 = new Array(0,0);
	}else if(result104=="1"){
	var pickup105 = new Array(0,0);
	}else if(result104=="2"){
	var pickup105 = new Array(0,0);
	}else if(result104=="3"){
	var pickup105 = new Array(0,0);
	}else if(result104=="7"){
	var pickup105 = new Array(0,0);
	}else if(result104=="8"){
	var pickup105 = new Array(0,0);
	}else{
	var pickup105 = new Array(0,0,0,0,0,0,0,0,0,1);
	}
	rand_num105 = Math.floor( Math.random() * pickup105.length );
	result105 = pickup105[rand_num105];
	channel105.value = channel105[result105].value;
	var targetR105 = document.getElementsByName("changeLED")[38];
	targetR105.src = "parts/" + channel105.value + "_" + targetR105.src.slice(-7);
}