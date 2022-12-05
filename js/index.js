var fir = document.querySelector('.fir');
var sec = document.querySelector('.sec');
var third = document.querySelector('.third');
var four = document.querySelector('.four');
var position1 = document.querySelector('.position1');
var position2 = document.querySelector('.position2');
var position3 = document.querySelector('.position3');
var position4 = document.querySelector('.position4');
var cards = document.querySelectorAll('.card');
var positions = document.querySelectorAll('.position');
var reset = document.querySelector('button');
const cardWidth = 100;
const cardHeight = 100;

initCards();

reset.addEventListener('click', () => {
  location.reload();
});

cards.forEach((card, index) => {
  let pos = positions[index]; // 获取当前card的目标位置
  let newMove = move.bind(this, card, pos); // 利用bind传递参数，返回新的函数
  // 监听是否在卡片上按下
  card.addEventListener('mousedown', () => {
    // 按下的同时，鼠标是否在移动
    document.addEventListener('mousemove', newMove); // 若鼠标在移动，那么移动card
  });
  card.addEventListener('mouseup', () => {
    // 抬起鼠标，移除移动事件
    document.removeEventListener('mousemove', newMove);
  });
});

function move(dom, pos, event) {
  e = event || window.event;
  let posLeft = pos.offsetLeft;
  let posTop = pos.offsetTop;
  if (Math.abs(e.clientX - 50 - posLeft) < 30 && Math.abs(e.clientY - 50 - posTop) < 30) {
    dom.style.left = posLeft + 'px';
    dom.style.top = posTop + 'px';
    return;
  }
  dom.style.left = e.clientX - 50 + 'px';
  dom.style.top = e.clientY - 50 + 'px';
}

function initCards() {
  // 获取屏幕可视区的大小
  screenWidth = document.documentElement.clientWidth;
  screenHeight = document.documentElement.clientHeight;
  // card的left top范围
  leftRange = screenWidth - cardWidth; // left最大值
  topRange = screenHeight - cardHeight; // top最大值
  // 让所有卡片随机分布在屏幕中
  cards.forEach(card => {
    let left = leftRange * Math.random();
    let top = topRange * Math.random();
    card.style.left = left + 'px';
    card.style.top = top + 'px';
  });
}

// 使用闭包的方式封装函数（此处未使用该方法）
function movewrapper(dom) {
  return event => {
    e = event || window.event;
    dom.style.left = e.clientX - 50 + 'px';
    dom.style.top = e.clientY - 50 + 'px';
  };
}
