var transfer = new Array();
var duty = new Array();
var lodge = new Array();
var bondlodge = new Array();
var bondfee = new Array();
var count_transfer;
var count_duty;
var count_lodge;
var count_bond_lodge;
var count_bond_fee;


function transfer_tariff(tariff,fee) {
	this.tariff = tariff;
	this.fee = fee;
}

transfer[0] = new transfer_tariff(	18001	,	3200	);
transfer[1] = new transfer_tariff(	30001	,	3200	);
transfer[2] = new transfer_tariff(	45001	,	3200	);
transfer[3] = new transfer_tariff(	60001	,	3200	);
transfer[4] = new transfer_tariff(	70001	,	3200	);
transfer[5] = new transfer_tariff(	80001	,	3200	);
transfer[6] = new transfer_tariff(	90001	,	3400	);
transfer[7] = new transfer_tariff(	100001	,	3650	);
transfer[8] = new transfer_tariff(	125001	,	3750	);
transfer[9] = new transfer_tariff(	150001	,	3900	);
transfer[10] = new transfer_tariff(	175001	,	4200	);
transfer[11] = new transfer_tariff(	200001	,	4400	);
transfer[12] = new transfer_tariff(	250001	,	4800	);
transfer[13] = new transfer_tariff(	300001	,	5500	);
transfer[14] = new transfer_tariff(	350001	,	5900	);
transfer[15] = new transfer_tariff(	400001	,	6400	);
transfer[16] = new transfer_tariff(	450001	,	6900	);
transfer[17] = new transfer_tariff(	500001	,	7500	);
transfer[18] = new transfer_tariff(	600001	,	8500	);
transfer[19] = new transfer_tariff(	700001	,	9500	);
transfer[20] = new transfer_tariff(	800001	,	10500	);
transfer[21] = new transfer_tariff(	900001	,	11500	);
transfer[22] = new transfer_tariff(	1000001	,	12500	);
transfer[23] = new transfer_tariff(	1100001	,	13000	);
transfer[24] = new transfer_tariff(	1200001	,	13500	);
transfer[25] = new transfer_tariff(	1300001	,	14000	);
transfer[26] = new transfer_tariff(	1400001	,	14500	);
transfer[27] = new transfer_tariff(	1500001	,	15000	);
transfer[28] = new transfer_tariff(	1600001	,	15500	);
transfer[29] = new transfer_tariff(	1700001	,	16000	);
transfer[30] = new transfer_tariff(	1800001	,	16500	);
transfer[31] = new transfer_tariff(	1900001	,	17000	);
transfer[32] = new transfer_tariff(	2000001	,	17500	);
transfer[33] = new transfer_tariff(	2100001	,	18000	);
transfer[34] = new transfer_tariff(	2200001	,	18500	);
transfer[35] = new transfer_tariff(	2300001	,	19000	);
transfer[36] = new transfer_tariff(	2400001	,	19500	);
transfer[37] = new transfer_tariff(	2500001	,	20000	);
transfer[38] = new transfer_tariff(	2600001	,	20500	);
transfer[39] = new transfer_tariff(	2700001	,	21000	);
transfer[40] = new transfer_tariff(	2800001	,	21500	);
transfer[41] = new transfer_tariff(	2900001	,	22000	);
transfer[42] = new transfer_tariff(	3000001	,	22500	);
transfer[43] = new transfer_tariff(	3100001	,	23000	);
transfer[44] = new transfer_tariff(	3200001	,	23500	);
transfer[45] = new transfer_tariff(	3300001	,	24000	);
transfer[46] = new transfer_tariff(	3400001	,	24500	);
transfer[47] = new transfer_tariff(	3500001	,	25000	);
transfer[48] = new transfer_tariff(	3600001	,	25500	);
transfer[49] = new transfer_tariff(	3700001	,	26000	);
transfer[50] = new transfer_tariff(	3800001	,	26500	);
transfer[51] = new transfer_tariff(	3900001	,	27000	);
transfer[52] = new transfer_tariff(	4000001	,	27500	);
transfer[53] = new transfer_tariff(	4100001	,	28000	);
transfer[54] = new transfer_tariff(	4200001	,	28500	);
transfer[55] = new transfer_tariff(	4300001	,	29000	);
transfer[56] = new transfer_tariff(	4400001	,	29500	);
transfer[57] = new transfer_tariff(	4500001	,	30000	);
transfer[58] = new transfer_tariff(	4600001	,	30500	);
transfer[59] = new transfer_tariff(	4700001	,	31000	);
transfer[60] = new transfer_tariff(	4800001	,	31500	);
transfer[61] = new transfer_tariff(	4900001	,	32000	);
transfer[62] = new transfer_tariff(	5000001	,	32500	);
transfer[63] = new transfer_tariff(	5100001	,	32750	);
transfer[64] = new transfer_tariff(	5200001	,	33000	);
transfer[65] = new transfer_tariff(	5300001	,	33250	);
transfer[66] = new transfer_tariff(	5400001	,	33500	);
transfer[67] = new transfer_tariff(	5500001	,	33750	);
transfer[68] = new transfer_tariff(	5600001	,	34000	);
transfer[69] = new transfer_tariff(	5700001	,	34250	);
transfer[70] = new transfer_tariff(	5800001	,	34500	);
transfer[71] = new transfer_tariff(	5900001	,	34750	);
transfer[72] = new transfer_tariff(	6000001	,	35000	);
transfer[73] = new transfer_tariff(	6100001	,	35250	);
transfer[74] = new transfer_tariff(	6200001	,	35500	);
transfer[75] = new transfer_tariff(	6300001	,	35750	);
transfer[76] = new transfer_tariff(	6400001	,	36000	);
transfer[77] = new transfer_tariff(	6500001	,	36250	);
transfer[78] = new transfer_tariff(	6600001	,	36500	);
transfer[79] = new transfer_tariff(	6700001	,	36750	);
transfer[80] = new transfer_tariff(	6800001	,	37000	);
transfer[81] = new transfer_tariff(	6900001	,	37250	);
transfer[82] = new transfer_tariff(	7000001	,	37500	);
transfer[83] = new transfer_tariff(	7100001	,	37750	);
transfer[84] = new transfer_tariff(	7200001	,	38000	);
transfer[85] = new transfer_tariff(	7300001	,	38250	);
transfer[86] = new transfer_tariff(	7400001	,	38500	);
transfer[87] = new transfer_tariff(	7500001	,	38750	);
transfer[88] = new transfer_tariff(	7600001	,	39000	);
transfer[89] = new transfer_tariff(	7700001	,	39250	);
transfer[90] = new transfer_tariff(	7800001	,	39500	);
transfer[91] = new transfer_tariff(	7900001	,	39750	);
transfer[92] = new transfer_tariff(	8000001	,	40000	);
transfer[93] = new transfer_tariff(	8100001	,	40250	);
transfer[94] = new transfer_tariff(	8200001	,	40500	);
transfer[95] = new transfer_tariff(	8300001	,	40750	);
transfer[96] = new transfer_tariff(	8400001	,	41000	);
transfer[97] = new transfer_tariff(	8500001	,	41250	);
transfer[98] = new transfer_tariff(	8600001	,	41500	);
transfer[99] = new transfer_tariff(	8700001	,	41750	);
transfer[100] = new transfer_tariff(	8800001	,	42000	);
transfer[101] = new transfer_tariff(	8900001	,	42250	);
transfer[102] = new transfer_tariff(	9000001	,	42500	);
transfer[103] = new transfer_tariff(	9100001	,	42750	);
transfer[104] = new transfer_tariff(	9200001	,	43000	);
transfer[105] = new transfer_tariff(	9300001	,	43250	);
transfer[106] = new transfer_tariff(	9400001	,	43500	);
transfer[107] = new transfer_tariff(	9500001	,	43750	);
transfer[108] = new transfer_tariff(	9600001	,	44000	);
transfer[109] = new transfer_tariff(	9700001	,	44250	);
transfer[110] = new transfer_tariff(	9800001	,	44500	);
transfer[111] = new transfer_tariff(	9900001	,	44750	);
transfer[112] = new transfer_tariff(	10000001	,	45000	);
transfer[113] = new transfer_tariff(	10100001	,	45250	);
transfer[114] = new transfer_tariff(	10200001	,	45500	);
transfer[115] = new transfer_tariff(	10300001	,	45750	);
transfer[116] = new transfer_tariff(	10400001	,	46000	);
transfer[117] = new transfer_tariff(	10500001	,	46250	);
transfer[118] = new transfer_tariff(	10600001	,	46500	);
transfer[119] = new transfer_tariff(	10700001	,	46750	);
transfer[120] = new transfer_tariff(	10800001	,	47000	);
transfer[121] = new transfer_tariff(	10900001	,	47250	);
transfer[122] = new transfer_tariff(	11000001	,	47500	);
transfer[123] = new transfer_tariff(	11100001	,	47750	);
transfer[124] = new transfer_tariff(	11200001	,	48000	);
transfer[125] = new transfer_tariff(	11300001	,	48250	);
transfer[126] = new transfer_tariff(	11400001	,	48500	);
transfer[127] = new transfer_tariff(	11500001	,	48750	);
transfer[128] = new transfer_tariff(	11600001	,	49000	);
transfer[129] = new transfer_tariff(	11700001	,	49250	);
transfer[130] = new transfer_tariff(	11800001	,	49500	);
transfer[131] = new transfer_tariff(	11900001	,	49750	);
transfer[132] = new transfer_tariff(	12000001	,	50000	);
transfer[133] = new transfer_tariff(	12100001	,	50250	);
transfer[134] = new transfer_tariff(	12200001	,	50500	);
transfer[135] = new transfer_tariff(	12300001	,	50750	);
transfer[136] = new transfer_tariff(	12400001	,	51000	);
transfer[137] = new transfer_tariff(	12500001	,	51250	);
transfer[138] = new transfer_tariff(	12600001	,	51500	);
transfer[139] = new transfer_tariff(	12700001	,	51750	);
transfer[140] = new transfer_tariff(	12800001	,	52000	);
transfer[141] = new transfer_tariff(	12900001	,	52250	);
transfer[142] = new transfer_tariff(	13000001	,	52500	);
transfer[143] = new transfer_tariff(	13100001	,	52750	);
transfer[144] = new transfer_tariff(	13200001	,	53000	);
transfer[145] = new transfer_tariff(	13300001	,	53250	);
transfer[146] = new transfer_tariff(	13400001	,	53500	);
transfer[147] = new transfer_tariff(	13500001	,	53750	);
transfer[148] = new transfer_tariff(	13600001	,	54000	);
transfer[149] = new transfer_tariff(	13700001	,	54250	);
transfer[150] = new transfer_tariff(	13800001	,	54500	);
transfer[151] = new transfer_tariff(	13900001	,	54750	);
transfer[152] = new transfer_tariff(	14000001	,	55000	);
transfer[153] = new transfer_tariff(	14100001	,	55250	);
transfer[154] = new transfer_tariff(	14200001	,	55500	);
transfer[155] = new transfer_tariff(	14300001	,	55750	);
transfer[156] = new transfer_tariff(	14400001	,	56000	);
transfer[157] = new transfer_tariff(	14500001	,	56250	);
transfer[158] = new transfer_tariff(	14600001	,	56500	);
transfer[159] = new transfer_tariff(	14700001	,	56750	);
transfer[160] = new transfer_tariff(	14800001	,	57000	);
transfer[161] = new transfer_tariff(	14900001	,	57250	);
transfer[162] = new transfer_tariff(	15000001	,	57500	);
transfer[163] = new transfer_tariff(	15100001	,	57750	);
transfer[164] = new transfer_tariff(	15200001	,	58000	);
transfer[165] = new transfer_tariff(	15300001	,	58250	);
transfer[166] = new transfer_tariff(	15400001	,	58500	);
transfer[167] = new transfer_tariff(	15500001	,	58750	);
transfer[168] = new transfer_tariff(	15600001	,	59000	);
transfer[169] = new transfer_tariff(	15700001	,	59250	);
transfer[170] = new transfer_tariff(	15800001	,	59500	);
transfer[171] = new transfer_tariff(	15900001	,	59750	);
transfer[172] = new transfer_tariff(	16000001	,	60000	);
transfer[173] = new transfer_tariff(	16100001	,	60250	);
transfer[174] = new transfer_tariff(	16200001	,	60500	);
transfer[175] = new transfer_tariff(	16300001	,	60750	);
transfer[176] = new transfer_tariff(	16400001	,	61000	);
transfer[177] = new transfer_tariff(	16500001	,	61250	);
transfer[178] = new transfer_tariff(	16600001	,	61500	);
transfer[179] = new transfer_tariff(	16700001	,	61750	);
transfer[180] = new transfer_tariff(	16800001	,	62000	);
transfer[181] = new transfer_tariff(	16900001	,	62250	);
transfer[182] = new transfer_tariff(	17000001	,	62500	);
transfer[183] = new transfer_tariff(	17100001	,	62750	);
transfer[184] = new transfer_tariff(	17200001	,	63000	);
transfer[185] = new transfer_tariff(	17300001	,	63250	);
transfer[186] = new transfer_tariff(	17400001	,	63500	);
transfer[187] = new transfer_tariff(	17500001	,	63750	);
transfer[188] = new transfer_tariff(	17600001	,	64000	);
transfer[189] = new transfer_tariff(	17700001	,	64250	);
transfer[190] = new transfer_tariff(	17800001	,	64500	);
transfer[191] = new transfer_tariff(	17900001	,	64750	);
transfer[192] = new transfer_tariff(	18000001	,	65000	);
transfer[193] = new transfer_tariff(	18100001	,	65250	);
transfer[194] = new transfer_tariff(	18200001	,	65500	);
transfer[195] = new transfer_tariff(	18300001	,	65750	);
transfer[196] = new transfer_tariff(	18400001	,	66000	);
transfer[197] = new transfer_tariff(	18500001	,	66250	);
transfer[198] = new transfer_tariff(	18600001	,	66500	);
transfer[199] = new transfer_tariff(	18700001	,	66750	);
transfer[200] = new transfer_tariff(	18800001	,	67000	);
transfer[201] = new transfer_tariff(	18900001	,	67250	);
transfer[202] = new transfer_tariff(	19000001	,	67500	);
transfer[203] = new transfer_tariff(	19100001	,	67750	);
transfer[204] = new transfer_tariff(	19200001	,	68000	);
transfer[205] = new transfer_tariff(	19300001	,	68250	);
transfer[206] = new transfer_tariff(	19400001	,	68500	);
transfer[207] = new transfer_tariff(	19500001	,	68750	);
transfer[208] = new transfer_tariff(	19600001	,	69000	);
transfer[209] = new transfer_tariff(	19700001	,	69250	);
transfer[210] = new transfer_tariff(	19800001	,	69500	);
transfer[211] = new transfer_tariff(	19900001	,	69750	);
transfer[212] = new transfer_tariff(	20000001	,	70000	);
count_transfer = 213;

function format_cur_2(curvalue)
{
  var vat = 0,vatstr = "",vatlen = 0;
  
  vatstr = "";
  vat = Math.round(eval(curvalue)*100)
  vatstr = vatstr + vat;

  vatlen = vatstr.length;
  vatstr2 = vatstr.substring(0,vatlen-2)+"."+vatstr.substring(vatlen-2,vatlen);
  return vatstr2;
}

function format_cur(curvalue)
{
  var vat = 0,vatstr = "",vatlen = 0;
  
  //vatstr = "00";
  
  if (curvalue < 0.1)
  {
    vat = Math.round(eval(curvalue)*100)/100
    vatstr2 = "" + vat;
  }
  else
  {
    vat = Math.round(eval(curvalue)*100)
    vatstr = "" + vat;
    vatlen = vatstr.length;
    vatstr2 = vatstr.substring(0,vatlen-2)+"."+vatstr.substring(vatlen-2,vatlen);
  }
  return vatstr2;
}

function transfer_duty(tariff,perc,adder) {
	this.tariff = tariff;
	this.perc = perc;
	this.adder = adder;
}

//duty[0] = new transfer_duty(	1,	0.00, 0	);
//duty[1] = new transfer_duty(	140001	,	0.05	,	0	);
//duty[2] = new transfer_duty(	320001	,	0.08	,	9000	);
//count_duty = 3;

//duty[0] = new transfer_duty(	1,	0.00, 0	);
//duty[1] = new transfer_duty(	500001	,	0.05	,	0	);
//duty[2] = new transfer_duty(	1000001	,	0.08	,	25000	);
//count_duty = 3;

duty[0] = new transfer_duty(	1,	0.00, 0	);
duty[1] = new transfer_duty(	600001	,	0.03	,	0	);
duty[2] = new transfer_duty(	1000001	,	0.05	,	12000	);
duty[3] = new transfer_duty(	1500001	,	0.08	,	37000	);
count_duty = 4;


function transfer_lodge(tariff,fee) {
	this.tariff = tariff;
	this.fee = fee;
}

lodge[0] = new transfer_lodge(	0	,	70	);
lodge[1] = new transfer_lodge(	18001	,	70	);
lodge[2] = new transfer_lodge(	80001	,	70	);
lodge[3] = new transfer_lodge(	150001	,	350	);
lodge[4] = new transfer_lodge(	300001	,	450	);
lodge[5] = new transfer_lodge(	500001	,	550	);
lodge[6] = new transfer_lodge(	1000001	,	650	);
lodge[7] = new transfer_lodge(	2000001	,	850	);
lodge[8] = new transfer_lodge(	3000001	,	1050);
lodge[9] = new transfer_lodge(	5000001	,	1250);


count_lodge = 10

function bond_lodge(tariff,fee) {
	this.tariff = tariff;
	this.fee = fee;
}

bondlodge[0] = new bond_lodge(	0	,	310	);
bondlodge[1] = new bond_lodge(	150001	,	350	);
bondlodge[2] = new bond_lodge(	300001	,	450	);
bondlodge[3] = new bond_lodge(	500001	,	550	);
bondlodge[4] = new bond_lodge(	1000001	,	700	);
bondlodge[5] = new bond_lodge(	2000001	,	1050);
bondlodge[6] = new bond_lodge(	3000001	,	1050);
bondlodge[7] = new bond_lodge(	5000001	,	2050);
count_bond_lodge = 8;

function bond_fee(tariff,fee) {
	this.tariff = tariff;
	this.fee = fee;
}

bondfee[0] = new bond_fee(	0	,	2500	);
bondfee[1] = new bond_fee(	10001	,	2500	);
bondfee[2] = new bond_fee(	15001	,	2500	);
bondfee[3] = new bond_fee(	20001	,	2500	);
bondfee[4] = new bond_fee(	25001	,	2500	);
bondfee[5] = new bond_fee(	30001	,	2500	);
bondfee[6] = new bond_fee(	35001	,	2500	);
bondfee[7] = new bond_fee(	40001	,	2500	);
bondfee[8] = new bond_fee(	45001	,	2500	);
bondfee[9] = new bond_fee(	50001	,	2500	);
bondfee[10] = new bond_fee(	60001	,	2500	);
bondfee[11] = new bond_fee(	70001	,	2500	);
bondfee[12] = new bond_fee(	80001	,	2500	);
bondfee[13] = new bond_fee(	90001	,	2500	);
bondfee[14] = new bond_fee(	100001	,	2600	);
bondfee[15] = new bond_fee(	125001	,	2700	);
bondfee[16] = new bond_fee(	150001	,	2900	);
bondfee[17] = new bond_fee(	175001	,	3000	);
bondfee[18] = new bond_fee(	200001	,	3300	);
bondfee[19] = new bond_fee(	250001	,	3700	);
bondfee[20] = new bond_fee(	300001	,	4100	);
bondfee[21] = new bond_fee(	350001	,	4600	);
bondfee[22] = new bond_fee(	400001	,	5000	);
bondfee[23] = new bond_fee(	450001	,	5400	);
bondfee[24] = new bond_fee(	500001	,	6200	);
bondfee[25] = new bond_fee(	600001	,	7000	);
bondfee[26] = new bond_fee(	700001	,	7800	);
bondfee[27] = new bond_fee(	800001	,	8600	);
bondfee[28] = new bond_fee(	900001	,	9400	);
bondfee[29] = new bond_fee(	1000001	,	9800	);
bondfee[30] = new bond_fee(	1100001	,	10200	);
bondfee[31] = new bond_fee(	1200001	,	10600	);
bondfee[32] = new bond_fee(	1300001	,	11000	);
bondfee[33] = new bond_fee(	1400001	,	11400	);
bondfee[34] = new bond_fee(	1500001	,	11800	);
bondfee[35] = new bond_fee(	1600001	,	12200	);
bondfee[36] = new bond_fee(	1700001	,	12600	);
bondfee[37] = new bond_fee(	1800001	,	13000	);
bondfee[38] = new bond_fee(	1900001	,	13400	);
bondfee[39] = new bond_fee(	2000001	,	13800	);
bondfee[40] = new bond_fee(	2100001	,	14200	);
bondfee[41] = new bond_fee(	2200001	,	14600	);
bondfee[42] = new bond_fee(	2300001	,	15000	);
bondfee[43] = new bond_fee(	2400001	,	15400	);
bondfee[44] = new bond_fee(	2500001	,	15800	);
bondfee[45] = new bond_fee(	2600001	,	16200	);
bondfee[46] = new bond_fee(	2700001	,	16600	);
bondfee[47] = new bond_fee(	2800001	,	17000	);
bondfee[48] = new bond_fee(	2900001	,	17400	);
bondfee[49] = new bond_fee(	3000001	,	17800	);
bondfee[50] = new bond_fee(	3100001	,	18200	);
bondfee[51] = new bond_fee(	3200001	,	18600	);
bondfee[52] = new bond_fee(	3300001	,	19000	);
bondfee[53] = new bond_fee(	3400001	,	19400	);
bondfee[54] = new bond_fee(	3500001	,	19800	);
bondfee[55] = new bond_fee(	3600001	,	20200	);
bondfee[56] = new bond_fee(	3700001	,	20600	);
bondfee[57] = new bond_fee(	3800001	,	21000	);
bondfee[58] = new bond_fee(	3900001	,	21400	);
bondfee[59] = new bond_fee(	4000001	,	21800	);
bondfee[60] = new bond_fee(	4100001	,	22200	);
bondfee[61] = new bond_fee(	4200001	,	22600	);
bondfee[62] = new bond_fee(	4300001	,	23000	);
bondfee[63] = new bond_fee(	4400001	,	23400	);
bondfee[64] = new bond_fee(	4500001	,	23800	);
bondfee[65] = new bond_fee(	4600001	,	24200	);
bondfee[66] = new bond_fee(	4700001	,	24600	);
bondfee[67] = new bond_fee(	4800001	,	25000	);
bondfee[68] = new bond_fee(	4900001	,	25400	);
bondfee[69] = new bond_fee(	5000001	,	25600	);
bondfee[70] = new bond_fee(	5100001	,	25800	);
bondfee[71] = new bond_fee(	5200001	,	26000	);
bondfee[72] = new bond_fee(	5300001	,	26200	);
bondfee[73] = new bond_fee(	5400001	,	26400	);
bondfee[74] = new bond_fee(	5500001	,	26600	);
bondfee[75] = new bond_fee(	5600001	,	26800	);
bondfee[76] = new bond_fee(	5700001	,	27000	);
bondfee[77] = new bond_fee(	5800001	,	27200	);
bondfee[78] = new bond_fee(	5900001	,	27400	);
bondfee[79] = new bond_fee(	6000001	,	27600	);
bondfee[80] = new bond_fee(	6100001	,	27800	);
bondfee[81] = new bond_fee(	6200001	,	28000	);
bondfee[82] = new bond_fee(	6300001	,	28200	);
bondfee[83] = new bond_fee(	6400001	,	28400	);
bondfee[84] = new bond_fee(	6500001	,	28600	);
bondfee[85] = new bond_fee(	6600001	,	28800	);
bondfee[86] = new bond_fee(	6700001	,	29000	);
bondfee[87] = new bond_fee(	6800001	,	29200	);
bondfee[88] = new bond_fee(	6900001	,	29400	);
bondfee[89] = new bond_fee(	7000001	,	29600	);
bondfee[90] = new bond_fee(	7100001	,	29800	);
bondfee[91] = new bond_fee(	7200001	,	30000	);
bondfee[92] = new bond_fee(	7300001	,	30200	);
bondfee[93] = new bond_fee(	7400001	,	30400	);
bondfee[94] = new bond_fee(	7500001	,	30600	);
bondfee[95] = new bond_fee(	7600001	,	30800	);
bondfee[96] = new bond_fee(	7700001	,	31000	);
bondfee[97] = new bond_fee(	7800001	,	31200	);
bondfee[98] = new bond_fee(	7900001	,	31400	);
bondfee[99] = new bond_fee(	8000001	,	31600	);
bondfee[100] = new bond_fee(	8100001	,	31800	);
bondfee[101] = new bond_fee(	8200001	,	32000	);
bondfee[102] = new bond_fee(	8300001	,	32200	);
bondfee[103] = new bond_fee(	8400001	,	32400	);
bondfee[104] = new bond_fee(	8500001	,	32600	);
bondfee[105] = new bond_fee(	8600001	,	32800	);
bondfee[106] = new bond_fee(	8700001	,	33000	);
bondfee[107] = new bond_fee(	8800001	,	33200	);
bondfee[108] = new bond_fee(	8900001	,	33400	);
bondfee[109] = new bond_fee(	9000001	,	33600	);
bondfee[110] = new bond_fee(	9100001	,	33800	);
bondfee[111] = new bond_fee(	9200001	,	34000	);
bondfee[112] = new bond_fee(	9300001	,	34200	);
bondfee[113] = new bond_fee(	9400001	,	34400	);
bondfee[114] = new bond_fee(	9500001	,	34600	);
bondfee[115] = new bond_fee(	9600001	,	34800	);
bondfee[116] = new bond_fee(	9700001	,	35000	);
bondfee[117] = new bond_fee(	9800001	,	35200	);
bondfee[118] = new bond_fee(	9900001	,	35400	);
bondfee[119] = new bond_fee(	10000001	,	35600	);
bondfee[120] = new bond_fee(	10100001	,	35800	);
bondfee[121] = new bond_fee(	10200001	,	36000	);
bondfee[122] = new bond_fee(	10300001	,	36200	);
bondfee[123] = new bond_fee(	10400001	,	36400	);
bondfee[124] = new bond_fee(	10500001	,	36600	);
bondfee[125] = new bond_fee(	10600001	,	36800	);
bondfee[126] = new bond_fee(	10700001	,	37000	);
bondfee[127] = new bond_fee(	10800001	,	37200	);
bondfee[128] = new bond_fee(	10900001	,	37400	);
bondfee[129] = new bond_fee(	11000001	,	37600	);
bondfee[130] = new bond_fee(	11100001	,	37800	);
bondfee[131] = new bond_fee(	11200001	,	38000	);
bondfee[132] = new bond_fee(	11300001	,	38200	);
bondfee[133] = new bond_fee(	11400001	,	38400	);
bondfee[134] = new bond_fee(	11500001	,	38600	);
bondfee[135] = new bond_fee(	11600001	,	38800	);
bondfee[136] = new bond_fee(	11700001	,	39000	);
bondfee[137] = new bond_fee(	11800001	,	39200	);
bondfee[138] = new bond_fee(	11900001	,	39400	);
bondfee[139] = new bond_fee(	12000001	,	39600	);
bondfee[140] = new bond_fee(	12100001	,	39800	);
bondfee[141] = new bond_fee(	12200001	,	40000	);
bondfee[142] = new bond_fee(	12300001	,	40200	);
bondfee[143] = new bond_fee(	12400001	,	40400	);
bondfee[144] = new bond_fee(	12500001	,	40600	);
bondfee[145] = new bond_fee(	12600001	,	40800	);
bondfee[146] = new bond_fee(	12700001	,	41000	);
bondfee[147] = new bond_fee(	12800001	,	41200	);
bondfee[148] = new bond_fee(	12900001	,	41400	);
bondfee[149] = new bond_fee(	13000001	,	41600	);
bondfee[150] = new bond_fee(	13100001	,	41800	);
bondfee[151] = new bond_fee(	13200001	,	42000	);
bondfee[152] = new bond_fee(	13300001	,	42200	);
bondfee[153] = new bond_fee(	13400001	,	42400	);
bondfee[154] = new bond_fee(	13500001	,	42600	);
bondfee[155] = new bond_fee(	13600001	,	42800	);
bondfee[156] = new bond_fee(	13700001	,	43000	);
bondfee[157] = new bond_fee(	13800001	,	43200	);
bondfee[158] = new bond_fee(	13900001	,	43400	);
bondfee[159] = new bond_fee(	14000001	,	43600	);
bondfee[160] = new bond_fee(	14100001	,	43800	);
bondfee[161] = new bond_fee(	14200001	,	44000	);
bondfee[162] = new bond_fee(	14300001	,	44200	);
bondfee[163] = new bond_fee(	14400001	,	44400	);
bondfee[164] = new bond_fee(	14500001	,	44600	);
bondfee[165] = new bond_fee(	14600001	,	44800	);
bondfee[166] = new bond_fee(	14700001	,	45000	);
bondfee[167] = new bond_fee(	14800001	,	45200	);
bondfee[168] = new bond_fee(	14900001	,	45400	);
bondfee[169] = new bond_fee(	15000001	,	45600	);
bondfee[170] = new bond_fee(	15100001	,	45800	);
bondfee[171] = new bond_fee(	15200001	,	46000	);
bondfee[172] = new bond_fee(	15300001	,	46200	);
bondfee[173] = new bond_fee(	15400001	,	46400	);
bondfee[174] = new bond_fee(	15500001	,	46600	);
bondfee[175] = new bond_fee(	15600001	,	46800	);
bondfee[176] = new bond_fee(	15700001	,	47000	);
bondfee[177] = new bond_fee(	15800001	,	47200	);
bondfee[178] = new bond_fee(	15900001	,	47400	);
bondfee[179] = new bond_fee(	16000001	,	47600	);
bondfee[180] = new bond_fee(	16100001	,	47800	);
bondfee[181] = new bond_fee(	16200001	,	48000	);
bondfee[182] = new bond_fee(	16300001	,	48200	);
bondfee[183] = new bond_fee(	16400001	,	48400	);
bondfee[184] = new bond_fee(	16500001	,	48600	);
bondfee[185] = new bond_fee(	16600001	,	48800	);
bondfee[186] = new bond_fee(	16700001	,	49000	);
bondfee[187] = new bond_fee(	16800001	,	49200	);
bondfee[188] = new bond_fee(	16900001	,	49400	);
bondfee[189] = new bond_fee(	17000001	,	49600	);
bondfee[190] = new bond_fee(	17100001	,	49800	);
bondfee[191] = new bond_fee(	17200001	,	50000	);
bondfee[192] = new bond_fee(	17300001	,	50200	);
bondfee[193] = new bond_fee(	17400001	,	50400	);
bondfee[194] = new bond_fee(	17500001	,	50600	);
bondfee[195] = new bond_fee(	17600001	,	50800	);
bondfee[196] = new bond_fee(	17700001	,	51000	);
bondfee[197] = new bond_fee(	17800001	,	51200	);
bondfee[198] = new bond_fee(	17900001	,	51400	);
bondfee[199] = new bond_fee(	18000001	,	51600	);
bondfee[200] = new bond_fee(	18100001	,	51800	);
bondfee[201] = new bond_fee(	18200001	,	52000	);
bondfee[202] = new bond_fee(	18300001	,	52200	);
bondfee[203] = new bond_fee(	18400001	,	52400	);
bondfee[204] = new bond_fee(	18500001	,	52600	);
bondfee[205] = new bond_fee(	18600001	,	52800	);
bondfee[206] = new bond_fee(	18700001	,	53000	);
bondfee[207] = new bond_fee(	18800001	,	53200	);
bondfee[208] = new bond_fee(	18900001	,	53400	);
bondfee[209] = new bond_fee(	19000001	,	53600	);
bondfee[210] = new bond_fee(	19100001	,	53800	);
bondfee[211] = new bond_fee(	19200001	,	54000	);
bondfee[212] = new bond_fee(	19300001	,	54200	);
bondfee[213] = new bond_fee(	19400001	,	54400	);
bondfee[214] = new bond_fee(	19500001	,	54600	);
bondfee[215] = new bond_fee(	19600001	,	54800	);
bondfee[216] = new bond_fee(	19700001	,	55000	);
bondfee[217] = new bond_fee(	19800001	,	55200	);
bondfee[218] = new bond_fee(    19900001	,	55400	);
bondfee[219] = new bond_fee(    20000001	,	55600	);

count_bond_fee = 220;


//Form1 Function 1
function find_fee(trans_value)
{
  var ncount = 0;
  while (ncount < count_transfer)
  {
    
    if (transfer[ncount].tariff > trans_value)
    {
      document.form1.transfer_fee.value = format_cur(transfer[ncount].fee);
      document.form1.transfer_fee_2.value = format_cur(transfer[ncount].fee);
      //document.form1.VAT1.value = format_cur(eval(transfer[ncount].fee)*.14);
      //document.form1.VAT1_2.value = format_cur(eval(transfer[ncount].fee)*.14);      
      //document.form1.VAT2.value = format_cur(eval(document.form1.sundry.value)*.14);
      //document.form1.VAT2_2.value = format_cur(eval(document.form1.sundry_2.value)*.14);
      return transfer[ncount].fee;
    }
    ncount++;
  }
  
  return -1;
}

//Form1 Function 2
function find_duty(trans_value)
{
  var ncount = 0;
  while (ncount < count_duty)
  {
    
    if (duty[ncount].tariff > trans_value)
    {
      if (trans_value > 0)
      {
        document.form1.duty.value = format_cur(((trans_value-(duty[ncount-1].tariff-1))*duty[ncount-1].perc)+duty[ncount-1].adder);
        //document.form1.duty_2.value = format_cur(trans_value*0.08); // commented out 14-04-2011
        document.form1.duty_2.value = format_cur(((trans_value-(duty[ncount-1].tariff-1))*duty[ncount-1].perc)+duty[ncount-1].adder);
      }
      else
      {
        document.form1.duty.value = format_cur(((trans_value-(duty[ncount].tariff-1))*duty[ncount].perc)+duty[ncount].adder);
        //document.form1.duty_2.value = format_cur(trans_value*0.08); // commented out 14-04-2011
        document.form1.duty_2.value = format_cur(((trans_value-(duty[ncount].tariff-1))*duty[ncount].perc)+duty[ncount].adder);
      }
      return ;
    }
    ncount++;
  }
  
  document.form1.duty.value = format_cur(((trans_value-(duty[count_duty-1].tariff-1))*duty[ncount-1].perc)+duty[ncount-1].adder);
  //document.form1.duty_2.value = format_cur(trans_value*0.08); // commented out 14-04-2011
  document.form1.duty_2.value = format_cur(((trans_value-(duty[count_duty-1].tariff-1))*duty[ncount-1].perc)+duty[ncount-1].adder);
  return ;
}


//Form1 Function 3
function find_lodge(trans_value)
{
  var ncount = 0;
  while (ncount < count_lodge)
  {
    
    if (lodge[ncount].tariff > trans_value)
    {
    
      document.form1.lodge.value = format_cur(lodge[ncount-1].fee);
      document.form1.lodge_2.value = format_cur(lodge[ncount-1].fee);      
      return ;
    }
    ncount++;
  }
  
  document.form1.lodge.value = format_cur(lodge[ncount-1].fee);
  document.form1.lodge_2.value = format_cur(lodge[ncount-1].fee);  
  return ;
}

//Form1 Function 4
function calc_total()
{
  total = eval(document.form1.transfer_fee.value);
  //total = total + eval(document.form1.VAT1.value);
  total = total + eval(document.form1.duty.value);
  total = total + eval(document.form1.lodge.value);
  total = total + eval(document.form1.sundry.value);  
  total = total + eval(document.form1.cert.value);  
  //total = total + eval(document.form1.VAT2.value);
  
  document.form1.total.value = format_cur(total);
  //document.form1.sec_total.value = format_cur(total-eval(document.form1.cert.value)+285);
  document.form1.sec_total.value = format_cur(total+750);

  total = eval(document.form1.transfer_fee_2.value);
  //total = total + eval(document.form1.VAT1_2.value);
  total = total + eval(document.form1.duty_2.value);
  total = total + eval(document.form1.lodge_2.value);
  total = total + eval(document.form1.sundry_2.value);  
  total = total + eval(document.form1.cert_2.value);  
  //total = total + eval(document.form1.VAT2_2.value);
  
  document.form1.total_2.value = format_cur(total);
  //document.form1.sec_total_2.value = format_cur(total-eval(document.form1.cert_2.value)+285);
  document.form1.sec_total_2.value = format_cur(total+750);

}



//function 1
function find_bond_fee(trans_value)
{
  var ncount = 0;
  while (ncount < count_bond_fee)
  {
    
    if (bondfee[ncount].tariff > trans_value)
    {
    
      document.form2.tariff_fee.value = format_cur(bondfee[ncount-1].fee);
      //document.form2.VAT1.value = format_cur(eval(document.form2.tariff_fee.value)*.14);
      //document.form2.VAT2.value = format_cur(eval(document.form2.sundry.value)*.14);
      return ;
    }
    ncount++;
  }
  
  document.form2.tariff_fee.value = format_cur(bondfee[ncount-1].fee);
  //document.form2.VAT1.value = format_cur(eval(document.form2.tariff_fee.value)*.14);
  //document.form2.VAT2.value = format_cur(eval(document.form2.sundry_2.value)*.14);
  return ;
}


// Function 2
function find_bond_lodge(trans_value)
{
  var ncount = 0;
  while (ncount < count_bond_lodge)
  {
    
    if (bondlodge[ncount].tariff > trans_value)
    {
    
      document.form2.lodge.value = format_cur(bondlodge[ncount-1].fee);
      return ;
    }
    ncount++;
  }
  
  document.form2.lodge.value = format_cur(bondlodge[ncount-1].fee);
  
  return ;
}


//Function 3
function calc_total_bond()
{
  total = eval(document.form2.tariff_fee.value);
  //total = total + eval(document.form2.VAT1.value);
  /*total = total + eval(document.form2.duty.value);*/
  total = total + eval(document.form2.lodge.value);
  total = total + eval(document.form2.sundry.value);  
  //total = total + eval(document.form2.VAT2.value);
  
  document.form2.total.value = format_cur(total);
}


jQuery.noConflict();
(function($) {
    $(function() {
       $( "#tabs" ).tabs();
    });   
})(jQuery);