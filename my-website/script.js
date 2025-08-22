// 这里可以写一些简单的交互效果
// 比如用户点击按钮时提示信息
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    alert("谢谢你的关注！即将跳转到 WhatsApp 联系我~");
  });
});
