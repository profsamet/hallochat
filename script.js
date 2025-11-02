document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Giriş
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      alert(`Hoş geldin ${user}! (Demo giriş)`);
      // burada ileride chat.html yönlendirmesi olur
    });
  }

  // Kayıt
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const pass = document.getElementById("password").value;
      const confirm = document.getElementById("confirm").value;

      if (pass !== confirm) {
        alert("Şifreler uyuşmuyor!");
        return;
      }

      alert("Kayıt başarılı! Artık giriş yapabilirsiniz.");
      window.location.href = "index.html";
    });
  }
});