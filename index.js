//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    myTab: ['泄漏率LR', '容积V', '时间T', '单位换算'],
    active: 0,
    result: [{
      volume: '', // 容积
      time: '', // 时间
      pressure: 14.7, // 压力
      pressureDrop: '0.02', // 压降
      leakRate: 0, // 泄漏率
    }, {
      volume: 0, // 容积
      time: '', // 时间
      pressure: 14.7, // 压力
      pressureDrop: '0.02', // 压降
      leakRate: '', // 泄漏率
    }, {
      volume: '', // 容积
      time: 0, // 时间
      pressure: 14.7, // 压力
      pressureDrop: '0.02', // 压降
      leakRate: '', // 泄漏率
    }],
    units: ['atm', 'bar', 'mbar', 'InH2O', 'InHg', 'kg/m2', 'kg/cm2', 'kPa', 'Pa', 'Torr', 'PSI', 'mmH2O', 'mmHg'],
    unit1: 0,
    unit2: 0,
    automatic: '', // 需要单位换算的值
    conversion: 0, // 单位换算后的结果
    formula: {
      'atm=atm': 1, // 两个相等，值为1.
      'atm=bar': 1.01325,
      'atm=mbar': 1013.25027,
      'atm=InH2O': 407.52014,
      'atm=InHg': 29.91996,
      'atm=kg/m2': 10321.98054,
      'atm=kg/cm2': 1.0333,
      'atm=kPa': 101.325,
      'atm=Pa': 101325,
      'atm=Torr': 760.00053,
      'atm=PSI': 14.69588,
      'atm=mmH2O': 10332.01172,
      'atm=mmHg': 760,
      "bar=atm": 0.986923,
      "bar=bar": 1,
      "bar=mbar": 1000,
      "bar=InH2O": 402.191,
      "bar=InHg": 29.5287,
      "bar=kg/m2": 10187,
      "bar=kg/cm2": 1.01979,
      "bar=kPa": 100,
      "bar=Pa": 100000,
      "bar=Torr": 750.062,
      "bar=PSI": 14.5037,
      "bar=mmH2O": 10196.9,
      "bar=mmHg": 750.062,
      "mbar=atm": 0.000986923,
      "mbar=bar": 0.001,
      "mbar=mbar": 1,
      "mbar=InH2O": 0.402191,
      "mbar=InHg": 0.0295287,
      "mbar=kg/m2": 10.187,
      "mbar=kg/cm2": 0.00101979,
      "mbar=kPa": 0.1,
      "mbar=Pa": 100,
      "mbar=Torr": 0.750062,
      "mbar=PSI": 0.0145037,
      "mbar=mmH2O": 10.1969,
      "mbar=mmHg": 0.750062,
      "InH2O=atm": 0.00245387,
      "InH2O=bar": 0.00248638,
      "InH2O=mbar": 2.48638,
      "InH2O=InH2O": 1,
      "InH2O=InHg": 0.0734196,
      "InH2O=kg/m2": 25.32876,
      "InH2O=kg/cm2": 0.00253559,
      "InH2O=kPa": 0.248638,
      "InH2O=Pa": 248.63808,
      "InH2O=Torr": 1.86494,
      "InH2O=PSI": 0.0360617,
      "InH2O=mmH2O": 25.35338,
      "InH2O=mmHg": 1.86494,
      "InHg=atm": 0.0334225,
      "InHg=bar": 0.0338654,
      "InHg=mbar": 33.86536,
      "InHg=InH2O": 13.62034,
      "InHg=InHg": 1,
      "InHg=kg/m2": 344.9864,
      "InHg=kg/cm2": 0.0345356,
      "InHg=kPa": 3.38654,
      "InHg=Pa": 3386.53581,
      "InHg=Torr": 25.40112,
      "InHg=PSI": 0.491173,
      "InHg=mmH2O": 345.32167,
      "InHg=mmHg": 25.40112,
      "kg/m2=atm": 0.0000968806,
      "kg/m2=bar": 0.0000981643,
      "kg/m2=mbar": 0.0981643,
      "kg/m2=InH2O": 0.0394808,
      "kg/m2=InHg": 0.00289866,
      "kg/m2=kg/m2": 1,
      "kg/m2=kg/cm2": 10000,
      "kg/m2=kPa": 0.00981643,
      "kg/m2=Pa": 9.81643,
      "kg/m2=Torr": 0.0736293,
      "kg/m2=PSI": 0.00142375,
      "kg/m2=mmH2O": 10000,
      "kg/m2=mmHg": 0.0736293,
      "kg/cm2=atm": 0.967771,
      "kg/cm2=bar": 0.980594,
      "kg/cm2=mbar": 980.59404,
      "kg/cm2=InH2O": 394.3861,
      "kg/cm2=InHg": 28.95567,
      "kg/cm2=kg/m2": 0.0001,
      "kg/cm2=kg/cm2": 1,
      "kg/cm2=kPa": 98.0594,
      "kg/cm2=Pa": 98059.40439,
      "kg/cm2=Torr": 735.50633,
      "kg/cm2=PSI": 14.22224,
      "kg/cm2=mmH2O": 14.22224,
      "kg/cm2=mmHg": 735.50633,
      "kPa=atm": 0.00986923,
      "kPa=bar": 0.01,
      "kPa=mbar": 10,
      "kPa=InH2O": 4.02191,
      "kPa=InHg": 0.295287,
      "kPa=kg/m2": 101.87,
      "kPa=kg/cm2": 0.0101979,
      "kPa=kPa": 1,
      "kPa=Pa": 1000,
      "kPa=Torr": 7.50062,
      "kPa=PSI": 0.145037,
      "kPa=mmH2O": 101.969,
      "kPa=mmHg": 7.50062,
      "Pa=atm": 9.86923e-6,
      "Pa=bar": 0.00001,
      "Pa=mbar": 0.01,
      "Pa=InH2O": 0.00402191,
      "Pa=InHg": 0.000295287,
      "Pa=kg/m2": 0.10187,
      "Pa=kg/cm2": 0.0000101979,
      "Pa=kPa": 0.001,
      "Pa=Pa": 1,
      "Pa=Torr": 0.00750062,
      "Pa=PSI": 0.000145037,
      "Pa=mmH2O": 0.101969,
      "Pa=mmHg": 0.00750062,
      "Torr=atm": 0.00131579,
      "Torr=bar": 0.00133322,
      "Torr=mbar": 1.33322,
      "Torr=InH2O": 0.53621,
      "Torr=InHg": 0.0393683,
      "Torr=kg/m2": 13.58154,
      "Torr=kg/cm2": 0.00135961,
      "Torr=kPa": 0.133322,
      "Torr=Pa": 133.32231,
      "Torr=Torr": 1,
      "Torr=PSI": 0.0193367,
      "Torr=mmH2O": 13.59474,
      "Torr=mmHg": 1,
      "PSI=atm": 0.0680463,
      "PSI=bar": 0.0689479,
      "PSI=mbar": 68.94792,
      "PSI=InH2O": 27.73023,
      "PSI=InHg": 2.03594,
      "PSI=kg/m2": 702.3725,
      "PSI=kg/cm2": 0.0703124,
      "PSI=kPa": 6.89479,
      "PSI=Pa": 6894.79236,
      "PSI=Torr": 51.71522,
      "PSI=PSI": 1,
      "PSI=mmH2O": 703.05508,
      "PSI=mmHg": 51.71522,
      "mmH2O=atm": 0.0000967866,
      "mmH2O=bar": 0.000098069,
      "mmH2O=mbar": 0.098069,
      "mmH2O=InH2O": 0.0394425,
      "mmH2O=InHg": 0.00289585,
      "mmH2O=kg/m2": 0.0001,
      "mmH2O=kg/cm2": 0.0001,
      "mmH2O=kPa": 0.0098069,
      "mmH2O=Pa": 9.8069,
      "mmH2O=Torr": 0.0735578,
      "mmH2O=PSI": 0.00142236,
      "mmH2O=mmH2O": 1,
      "mmH2O=mmHg": 0.0735578,
      "mmHg=atm": 0.00131579,
      "mmHg=bar": 0.00133322,
      "mmHg=mbar": 1.33322,
      "mmHg=InH2O": 0.53621,
      "mmHg=InHg": 0.0393683,
      "mmHg=kg/m2": 13.58154,
      "mmHg=kg/cm2": 0.00135961,
      "mmHg=kPa": 0.133322,
      "mmHg=Pa": 133.32231,
      "mmHg=Torr": 1,
      "mmHg=PSI": 0.0193367,
      "mmHg=mmH2O": 13.59474,
      "mmHg=mmHg": 1,
    }
  },

  bindChange(e) {
    console.log('选择器打印', e);

    // 1111结构重组写法
    // 这里用的是解构重组，因为有四个选择器，他的value值是一个数组，打印就知道了
    const {  
      value
    } = e.detail // 如果不用解构重组，那就这样表达：e.detail.value[1]
    
    this.setData({
      // 为什么是value3，因为wxml做了四个选择器，只有1,3个才有内容，其它两个占位用
      unit1: value[1],
      unit2: value[3] 
    }, () => {
      this.calculation()
    })

    // 222不用解构重组
    // this.setData({
    //   unit1: e.detail.value[1],
    //   unit2: e.detail.value[3]
    // }, this.calculation())
  },

  // hideKB(e) {
  //   wx.hideKeyboard();
  //   return true;
  // },
  showAbout(e) {
    wx.hideKeyboard();
    wx.navigateTo({ // web-view，保留当前页面，跳转到应用内的某个页面，非 tabBar 的页面的路径 。
      url: '../info/index',
    })
  },

  // 计算结果
  calculation() { // 只要改变了，就会执行函数，判断能不能执行，最终得出结果
    let { // 解构赋值，就是从data里面拿值，相当于this。data。xxx
      active,
      result,
      units,
      unit1,
      unit2,
      automatic,
      conversion,
      formula,
    } = this.data
    let calculation = null
    let canCalculation = true
    let tmp = {}
    switch (active) { // active是哪一个tab是被选中的
      case 0: // active == 0， tmp是一个对象，对象有键值对。
      // 1.计算第一步。获取每一个tab的值
        tmp = {
          volume: result[0].volume, // 容积
          time: result[0].time, // 时间
          pressureDrop: result[0].pressureDrop, // 压降
        }
        // 2.第二部是判断值是否为空，能否进行计算
        for (var key in tmp) { // 属于http页面能够看得懂得相当于是前端的JS或jQuery的语法。
          // console.log('打印key', key); // 打印出来发现是volume，time
          // console.log('打印tem', tmp[key]); // 打印tem[key]发现是它的值，输入的值，固定的值或者是空值，也就是value
          if (!tmp[key].trim().length) { // key：value，有三个key，就是说遍历三个key如果有空值就是false
            // !!??这里为啥是 = 号。
            canCalculation = false // 如果每一个键对应的每一个值，有一个为空就false
          }
        }
        if (!canCalculation) { // 
          this.setData({
            // 数组叫result，其中有四个对象，每个对象里有各个值
            ['result[0].leakRate']: 0
          })
          // 如果这里没有return，那么会有inifity无穷大(的数)结果
          return // 退出函数，不用再计算结果了，给它0
        }
        calculation = 60 * Number(result[0].volume) * (Number(result[0].pressureDrop * 0.145037) / Number(result[0].pressure)) / Number(result[0].time)
        this.setData({ 

          ['result[0].leakRate']: calculation.toFixed(7), // 赋值
          // result[0].leakRate: 0 ,出错
        })
        break;

      case 1:
        tmp = {
          leakRate: result[1].leakRate, // 泄漏率
          time: result[1].time, // 时间
          pressureDrop: result[1].pressureDrop, // 压降
        }
        for (var key in tmp) { // 每一个case都有这些相同的话，就是判断是否为空值
          if (!tmp[key].trim().length) {
            canCalculation = false
          }
        }
        if (!canCalculation) {
          this.setData({
            ['result[1].volume']: 0
          })
          return
        }
        calculation = Number(result[1].leakRate) * Number(result[1].time) * Number(result[1].pressure) / 60 / Number(result[1].pressureDrop * 0.145037)
        this.setData({
          ['result[1].volume']: calculation.toFixed(5)
        })
        break;
        
      case 2:
        // 1、要拿到要计算的数，每个页面的不同所以要注意
        tmp = {
          leakRate: result[2].leakRate, // 泄漏率
          volume: result[2].volume, // 容积
          pressureDrop: result[2].pressureDrop, // 压降
        }
        // 2、要判断是否进行计算，如果没有拿到所有的值就不计算
        for (var key in tmp) { // key要在外部定义，在data
          if (!tmp[key].trim().length) { // 用每个值的长度来判断
            canCalculation = false
          }
        }
        // 3、不计算的时候为0，记得返回，否则会接着计算下面得出结果
        if (!canCalculation) {
          this.setData({
            ['result[2].time']: 0
          })
          return
        }
        calculation = 60 * Number(result[2].volume) * (Number(result[2].pressureDrop * 0.145037) / Number(result[2].leakRate)) / Number(result[2].pressure)
        // 4、计算后赋值，可以做一些格式化用括号和单引号
        this.setData({
          ['result[2].time']: calculation.toFixed(5)
        })
        break;
      case 3: // 输入的值automatic
        conversion = automatic * formula[`${units[unit1]}=${units[unit2]}`] // 乘以它的值。util1，2是一个索引，4个选择器中的第1，第3个（是value的索引，四个选择器是0，1，2，3），utils是数组
        // if (units[unit1] == 'Pa' && units[unit2]) {
        //   var p = Math.floor(Math.log(conversion) / Math.LN10);
        //   var n = conversion * Math.pow(10, -p);
        //   conversion = n + 'e' + p;
        // }
        this.setData({
          conversion,
        })
        break;
      default:
        break
    }
  },

  bindInput(e) {
    console.log('打印input传参', e);
    const {
      name
    } = e.currentTarget.dataset
    let {
      active
    } = this.data;
    console.log('这个data', this.data);
    let key = `result[${active}].${name}` // active 在上面刚刚拿出来key = result[0].name,
    console.log('input输入时创造的key', key); // 发现就是key，不是value
    if (active == 3) { // 如果active = 3，key = actomatic
      key = 'automatic'
    }
    this.setData({
      [key]: e.detail.value
    }, () => {
      // setData引起的界面更新渲染完毕后的回调函数
      this.calculation()
    })
  },

  changeTab(e) {
    console.log('打印e', e);
    this.setData({
      // index等于后面那一部分，把index 赋值给active
      active: e.currentTarget.dataset.active
    })
  },

  onLoad: function () {

  },
  onUnload: function () {

  },
  onShareAppMessage: function () {

  },
})