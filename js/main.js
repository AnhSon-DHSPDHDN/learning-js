class MotoBike {
  constructor(name, brand, maxSpeed, color, cc) {
    this.name = name;
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.cc = cc;
  }

  netbo() {
    console.log('Khói trắng')
  }
}

class MotoHonda extends MotoBike {
  constructor(name, brand, maxSpeed, color, cc, price) {
    super(name, brand, maxSpeed, color, cc, price);
    this.price = price
  }

  dongCo = ''
  hopSo = ''

  netbo() {
    console.log('Phun lửa!')
  }

  setDongCo(dongCo) {
    this.dongCo = dongCo
  }

  setHopSo(hopSo) {
    this.hopSo = hopSo
  }
}

function Yamaha(name, price) {
  this.name = name
  this.price = price
}