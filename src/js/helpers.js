export const fixedHeader = (fixedElement) => {
  window.onscroll = function () {
    if (window.scrollY > fixedElement.offsetTop) {
      fixedElement.classList.add("fixed");
    } else {
      if (fixedElement.classList.contains("fixed")) {
        fixedElement.classList.remove("fixed");
      }
    }
  };
};

// Mobile Menu
export const mobileMenu = (btnClose, menu) => {
  const burgerArr = document.querySelectorAll(".btn-catalog");
  
  burgerArr.forEach(function(el) {
    el.addEventListener("click", openMenu);
  });
  
  function openMenu () {
    menu.classList.toggle("active");
  }
  
  btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("active");
  });
};

//Mask for input phone
export const maskInput = (phoneInputSelector) => {
  [].forEach.call(document.querySelectorAll(phoneInputSelector), function (input) {
    let keyCode;
    
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i !== -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type === "blur" && this.value.length < 5) this.value = "";
    }
    
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
    
  });
};

//Tabs
export const tabs = (tabLinks, tabContent) => {
  tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
  });
  
  function openTabs(el) {
    const btnTarget = el.currentTarget;
    const tab = btnTarget.dataset.tab;
    
    tabContent.forEach(function(el) {
      el.classList.remove("active");
    });
    
    tabLinks.forEach(function(el) {
      el.classList.remove("active");
    });
    
    document.querySelector("#" + tab).classList.add("active");
    btnTarget.classList.add("active");
  }
}
