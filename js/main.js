// Mobile menu
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
})();

// FAQ accordion (one open at a time)
(function () {
  var items = document.querySelectorAll(".faq__item");

  function setIcon(item, open) {
    var use = item.querySelector(".faq__icon use");
    if (use) use.setAttribute("href", open ? "#i-minus" : "#i-plus");
  }

  items.forEach(function (item) {
    var btn = item.querySelector(".faq__q");
    btn.addEventListener("click", function () {
      var willOpen = !item.classList.contains("is-open");
      items.forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".faq__q").setAttribute("aria-expanded", "false");
        setIcon(other, false);
      });
      if (willOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        setIcon(item, true);
      }
    });
  });
})();
