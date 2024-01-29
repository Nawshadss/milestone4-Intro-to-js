var age = 60;
var ticket = 50;
var student = false;

if (age <= 12) {
  console.log("your bus tour is free");
} else if ((age > 12 && age < 59) || student) {
  discount = (ticket * 50) / 100;
  console.log(discount);
} else if (age > 59) {
  // 5% discount
  discount = (ticket * 25) / 100;
  console.log(discount);
}
