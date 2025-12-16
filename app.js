// وظائف تفاعلية للموقع
// يجب تحميل هذا الملف بعد تحميل app-config.js للتأكد من توفر الإعدادات

(function () {
  const cfg = window.APP_CONFIG || {};

  /**
   * تنسيق الأرقام مع العلامة والعملة.
   * @param {number} n
   * @returns {string}
   */
  function formatCurrency(n) {
    return `${n.toLocaleString("ar-EG")} ${cfg.pricing.currency}`;
  }

  /**
   * إضافة مسافة كل 4 أحرف في الآيبان للقراءة بسهولة.
   * @param {string} s
   * @returns {string}
   */
  function formatIban(s) {
    return s.replace(/\s+/g, "").replace(/(.{4})/g, "$1 ").trim();
  }

  /**
   * التحقق من صحة الآيبان باستخدام معادلة Mod-97.
   * @param {string} iban
   * @returns {boolean}
   */
  function ibanValid(iban) {
    const clean = iban.replace(/\s+/g, "").toUpperCase();
    const rearranged = clean.slice(4) + clean.slice(0, 4);
    const converted = rearranged.replace(/[A-Z]/g, (c) => c.charCodeAt(0) - 55);
    let remainder = 0;
    for (let i = 0; i < converted.length; i += 9) {
      remainder = parseInt(String(remainder) + converted.slice(i, i + 9), 10) % 97;
    }
    return remainder === 1;
  }

  /**
   * نسخ نص إلى الحافظة وعرض إشعار بسيط.
   * @param {string} text
   */
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("تم النسخ بنجاح"))
      .catch(() => showToast("تعذّر النسخ"));
  }

  /**
   * عرض رسالة مؤقتة (توست).
   * @param {string} message
   */
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: cfg.pricing ? (cfg.pricing.label ? "#0ea56b" : "#444") : "#0ea56b",
      color: cfg.pricing ? "#012b28" : "#fff",
      padding: "0.6rem 1rem",
      borderRadius: "8px",
      zIndex: 9999,
      fontWeight: 700,
    });
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  /**
   * تهيئة قسم السعر وبيانات البنك.
   */
  function initPaymentSection() {
    const saleEl = document.getElementById("salePrice");
    const originalEl = document.getElementById("originalPrice");
    const pctEl = document.getElementById("discountPct");
    const labelNoteEl = document.getElementById("labelNote");
    const bankNameEl = document.getElementById("bankName");
    const beneficiaryEl = document.getElementById("beneficiary");
    const accountEl = document.getElementById("accountNumber");
    const ibanEl = document.getElementById("iban");
    const ibanStatusEl = document.getElementById("ibanValidity");
    const tgOpen = document.getElementById("tgOpen");
    const copyAllBtn = document.getElementById("copyAll");
    // عرض السعر والخصم
    const { original, sale, label } = cfg.pricing;
    saleEl.textContent = formatCurrency(sale);
    originalEl.textContent = formatCurrency(original);
    const discount = Math.round(((original - sale) / original) * 100);
    pctEl.textContent = `خصم ${discount}%`;
    labelNoteEl.textContent = label || "";
    // بيانات البنك
    bankNameEl.textContent = cfg.bank.bankName;
    beneficiaryEl.textContent = cfg.bank.beneficiary;
    accountEl.textContent = cfg.bank.accountNumber;
    ibanEl.textContent = formatIban(cfg.bank.iban);
    // حالة الآيبان
    const valid = ibanValid(cfg.bank.iban);
    ibanStatusEl.textContent = valid
      ? "تم التحقق من صحة صيغة الآيبان"
      : "تحقق من صيغة الآيبان";
    ibanStatusEl.classList.add(valid ? "ok" : "bad");
    // إعداد روابط النسخ
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const targetSelector = btn.dataset.copyTarget;
        const el = document.querySelector(targetSelector);
        const raw = el.textContent.replace(/\s+/g, "");
        copyToClipboard(raw);
      });
    });
    // رابط تيليجرام للمنسق
    tgOpen.setAttribute(
      "href",
      `https://t.me/${encodeURIComponent(cfg.coordinator.telegramUser)}`
    );
    // نسخ كل البيانات
    copyAllBtn.addEventListener("click", () => {
      const message = [
        "بيانات التحويل – دورة STEP الشاملة الحديثة",
        `المبلغ: ${formatCurrency(sale)} (${discount}% خصم؛ كان ${formatCurrency(
          original
        )})`,
        `البنك: ${cfg.bank.bankName}`,
        `اسم المستفيد: ${cfg.bank.beneficiary}`,
        `رقم الحساب: ${cfg.bank.accountNumber}`,
        `الآيبان: ${cfg.bank.iban}`,
      ].join("\n");
      copyToClipboard(message);
    });
  }

  /**
   * تهيئة نموذج التسجيل.
   */
  function initRegisterForm() {
    const contactMethodSelect = document.getElementById("contactMethod");
    const contactLinkInput = document.getElementById("contactLink");
    const sendBtn = document.getElementById("sendBtn");
    const copyBtn = document.getElementById("copyBtn");
    const formEl = document.getElementById("stepForm");

    contactMethodSelect.addEventListener("change", function () {
      const method = this.value;
      if (method === "تلجرام") {
        contactLinkInput.placeholder = "مثال: @Username";
      } else if (method === "واتساب") {
        contactLinkInput.placeholder = "مثال: +966123456789";
      } else if (method === "إيميل") {
        contactLinkInput.placeholder = "مثال: name@example.com";
      }
    });

    /**
     * توليد نص الرسالة من بيانات النموذج.
     * @returns {string}
     */
    function buildMessage() {
      const name = document.getElementById("fullName").value.trim();
      const method = document.getElementById("contactMethod").value;
      const contact = document.getElementById("contactLink").value.trim();
      const testDate = document.getElementById("testDate").value;
      const currentScore = document
        .getElementById("currentScore")
        .value.trim();
      const targetScore = document.getElementById("targetScore").value;
      const reason = document.getElementById("reason").value;
      const level = document.getElementById("level").value;
      const notes = document.getElementById("notes").value.trim();
      let message = "";
      message += `الاسم الكامل: ${name}\n`;
      message += `وسيلة التواصل المفضلة: ${method}\n`;
      message += `رابط حساب التواصل: ${contact}\n`;
      message += `موعد الاختبار: ${testDate}\n`;
      if (currentScore !== "") {
        message += `الدرجة الحالية: ${currentScore}\n`;
      }
      message += `الدرجة المستهدفة: ${targetScore}\n`;
      message += `سبب الرغبة في الاختبار: ${reason}\n`;
      message += `مستوى الطالب: ${level}\n`;
      if (notes !== "") {
        message += `ملاحظات إضافية: ${notes}\n`;
      }
      message += "تم الإرسال من الموقع الرسمي.";
      return message;
    }

    sendBtn.addEventListener("click", function () {
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      const message = buildMessage();
      const encoded = encodeURIComponent(message);
      const url = `https://t.me/${cfg.coordinator.telegramUser}?text=${encoded}`;
      window.open(url, "_blank");
    });

    copyBtn.addEventListener("click", function () {
      if (!formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      const message = buildMessage();
      copyToClipboard(message);
    });
  }

  // تهيئة جميع الأقسام عند تحميل الصفحة
  document.addEventListener("DOMContentLoaded", function () {
    initPaymentSection();
    initRegisterForm();
  });
})();