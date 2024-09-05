// Kiểm tra tuổi lái xe
function checkAge() {
  let kq;
  const age = document.getElementById("age").value * 1;
  if (age < 16) {
    kq = `Bãn chưa đủ tuổi lái xe`;
  } else {
    kq = `Bạn đủ tuổi lái xe`;
  }
  const result = document.getElementById("result");
  result.innerHTML = kq;
}
// Tính tiền thưởng doanh số

function checkProduct() {
  let kq;
  const product = document.getElementById("product").value * 1;
  if (product > 100) {
    kq = product + product * 0.1;
  } else {
    kq = product;
  }
  const result_2 = document.getElementById("result_2");
  result_2.innerHTML = kq;
}

//tính chiết khấu
function checkMoney() {
  const money = document.getElementById("money").value * 1;
  let chietKhau = 0;
  if (money > 500) {
    chietKhau = money * 0.2;
  } else {
    chietKhau = money;
  }
  const result_3 = document.getElementById("result_3");
  result_3.innerHTML = chietKhau;
}

//
function checkPassword() {
  let pass;
  const password = document.getElementById("matKhau").value;
  if (password.length >= 8) {
    pass = `mạnh`;
  } else {
    pass = `yếu`;
  }
  const result_4 = document.getElementById("result_4");
  result_4.innerHTML = pass;
}
