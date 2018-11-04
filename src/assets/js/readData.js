var data = require('./data.json');

//example of data:
// {
//   "time": 1514557800,
//   "chw_total": 171.3230091631,
//   "hw_total": 201.419626236,
//   "hw_kl": 21.8,
//   "chw_kl": 42.4,
//   "hw_cob": 9.3,
//   "chw_cob": 14.7,
//   "hw_SE1": 147.5,
//   "chw_SE1": 82.4,
//   "hw_SE2": 0,
//   "chw_SE2": 9.00225,
//   "hw_SSB": 13.76,
//   "hw_SSM": "NULL",
//   "chw_SSM": "NULL",
//   "hw_SAAC": "NULL",
//   "chw_SAAC": "NULL",
//   "": ""
// },
// {
//   "time": 1514556900,
//   "chw_total": 124.903836444,
//   "hw_total": 199.9799160957,
//   "hw_kl": -0.1,
//   "chw_kl": 0,
//   "hw_cob": 51.6,
//   "chw_cob": 14.8,
//   "hw_SE1": 136.8,
//   "chw_SE1": 84.6,
//   "hw_SE2": 0,
//   "chw_SE2": 12.6031,
//   "hw_SSB": 15.2,
//   "hw_SSM": "NULL",
//   "chw_SSM": "NULL",
//   "hw_SAAC": "NULL",
//   "chw_SAAC": "NULL",
//   "": ""

export function hello(){
    console.log(data[0].time);
}

//within 86400 millisecs
export function indicesOfPrevious24Hrs(index) {
  var arr = [];
  data.map( function(d, i) {
    if (index - 86400 <= d.time) {
      arr.push(d);
    }
  });

  var chw_total_total = 0;
  var hw_total_total = 0;
  var hw_kl_total = 0;
  var chw_kl_total = 0;
  var hw_cob_total = 0;
  var chw_cob_total = 0;
  var hw_SE1_total = 0;
  var chw_SE1_total = 0;
  var hw_SE2_total = 0;
  var chw_SE2_total = 0;
  var hw_SSB_total = 0;
  var hw_SSM_total = 0;
  var chw_SSM_total = 0;
  var hw_SAAC_total = 0;
  var chw_SAAC_total = 0;

  arr.map(function(d, i) {
    chw_total_total = chw_total_total + d.chw_total;
    hw_total_total = hw_total_total + d.hw_total;
    hw_kl_total = hw_kl_total + d.hw_kl;
    chw_kl_total = chw_kl_total + d.chw_kl;
    hw_cob_total = hw_cob_total + d.hw_cob;
    chw_cob_total = chw_cob_total + d.chw_cob;
    hw_SE1_total = hw_SE1_total + d.hw_SE1;
    chw_SE1_total = chw_SE1_total + d.chw_SE1;
    hw_SE2_total = hw_SE2_total + d.hw_SE2;
    chw_SE2_total = chw_SE2_total + d.chw_SE2;
    hw_SSB_total = hw_SSB_total + d.hw_SSB;
    hw_SSM_total = hw_SSM_total + d.hw_SSM;
    chw_SSM_total = chw_SSM_total + d.chw_SSM;
    hw_SAAC_total = hw_SAAC_total + d.hw_SAAC;
    chw_SAAC_total = chw_SAAC_total + d.chw_SAAC;
  });

  var sums = [];
  sums.push(hw_total_total)
  sums.push(hw_kl_total)
  sums.push(chw_kl_total)
  sums.push(hw_cob_total)
  sums.push(chw_cob_total)
  sums.push(hw_SE1_total)
  sums.push(chw_SE1_total)
  sums.push(hw_SE2_total)
  sums.push(chw_SE2_total)
  sums.push(hw_SSB_total)
  sums.push(hw_SSM_total)
  sums.push(chw_SSM_total)
  sums.push(hw_SAAC_total)
  sums.push(chw_SAAC_total)

  console.log('chw_total_total: ' + chw_total_total);
  console.log('hw_total_total: ' + hw_total_total);
  console.log('hw_kl_total: ' + hw_kl_total);
  console.log('chw_kl_total: ' + chw_kl_total);
  console.log('hw_cob_total: ' + hw_cob_total);
  console.log('chw_cob_total: ' + chw_cob_total);
  console.log('hw_SE1_total: ' + hw_SE1_total);
  console.log('chw_SE1_total: ' + chw_SE1_total);
  console.log('hw_SE2_total: ' + hw_SE2_total);
  console.log('chw_SE2_total: ' + chw_SE2_total);
  console.log('hw_SSB_total: ' + hw_SSB_total);
  console.log('hw_SSM_total: ' + hw_SSM_total);
  console.log('chw_SSM_total: ' + chw_SSM_total);
  console.log('hw_SAAC_total: ' + hw_SAAC_total);
  console.log('chw_SAAC_total: ' + chw_SAAC_total);


  return arr;
}
