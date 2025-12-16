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
    initAchievements();
    initSubscriberCounter();
    initNotifications();
    initReceiptUpload();
  });

  /**
   * ملء قائمة الإنجازات بعينات تمثيلية.
   */
  function initAchievements() {
    const achievements = [
      { name: "عبدالرحمن", region: "الرياض", score: 95 },
      { name: "فاطمة", region: "جدة", score: 92 },
      { name: "يوسف", region: "الدمام", score: 88 },
      { name: "سارة", region: "المدينة", score: 90 },
      { name: "أحمد", region: "القصيم", score: 85 },
      { name: "ريم", region: "أبها", score: 93 },
      { name: "محمد", region: "تبوك", score: 87 },
      { name: "نورة", region: "حائل", score: 91 }
    ];
    const container = document.getElementById("achievementsGrid");
    if (!container) return;
    achievements.forEach((item) => {
      const div = document.createElement("div");
      div.className = "achievement-item";
      div.innerHTML = `
        <span class="student-name">${item.name}</span>
        <span class="student-region">${item.region}</span>
        <span class="student-score">${item.score}</span>
      `;
      container.appendChild(div);
    });
  }

  /**
   * عدّاد المشتركين مع زيادة تدريجية ومحاكاة لانضمام أعضاء جدد.
   */
  function initSubscriberCounter() {
    const countEl = document.getElementById("subscriberCount");
    if (!countEl) return;
    // قيمة مستهدفة تقديرية؛ يمكن تعديلها حسب البيانات الفعلية
    // نستخدم قيمة أكبر لعدد المشتركين لزيادة الثقة بشكل تقديري
    // يمكن تعديل target بسهولة لاحقاً إذا توفرت أرقام فعلية
    const target = 5200; // رقم تقديري أكبر من 100 كما طلب المستخدم
    let current = Math.floor(target * 0.8);
    // الخطوة تعتمد على الفرق بين العدد الحالي والهدف وتقسيمه على عدد التحديثات
    const step = Math.max(1, Math.ceil((target - current) / 150));
    function updateDisplay(value) {
      countEl.textContent = value.toLocaleString("ar-EG");
    }
    updateDisplay(current);
    const animInterval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        updateDisplay(current);
        clearInterval(animInterval);
        // بعد الوصول، زد الرقم كل 30 ثانية بمحاكاة انضمام عضو جديد
        setInterval(() => {
          // زيادة عشوائية بسيطة لمحاكاة انضمام أعضاء جدد
          current += Math.floor(Math.random() * 5) + 1;
          updateDisplay(current);
        }, 45000);
      } else {
        updateDisplay(current);
      }
    }, 80);
  }

  /**
   * إنشاء إشعارات عشوائية وإظهارها بشكل دوري.
   */
  function initNotifications() {
    const container = document.getElementById("notificationsContainer");
    if (!container) return;
    const messages = [
      "انضم أحمد من الرياض إلى الدورة",
      "نورة حققت درجة 90 في الاختبار",
      "يوسف من جدة سجّل الآن",
      "سارة من الدمام رفعت درجتها إلى 85",
      "محمد أنهى خطة المذاكرة الأسبوعية",
      "ريم حصلت على درجة 92",
      "عبدالله بدأ اختبار تحديد المستوى",
      "لطيفة من القصيم سجّلت للتو",
      // رسائل إضافية لزيادة تنوع الإشعارات وعددها
      "ليلى من أبها حققت درجة 88",
      "عبدالرحمن سجّل في الخطة الشهرية",
      "فاطمة أنهت جميع النماذج المكررة",
      "ياسر من مكة رفع درجته إلى 91",
      "خالد من جدة شارك تجربته بنجاح",
      "سعد بدأ دراسة قسم القراءة",
      "منى أكملت خطة الثلاثة أيام بنجاح",
      "مها حققت درجة 95",
      "خديجة من الدمام سجلت للتو",
      "عبدالعزيز رفع درجته إلى 80",
      "بدر أنهى خطة الأسبوع بنجاح",
      "مشاعل من الطائف حققت درجة 89",
      "تركي من القصيم بدأ التدريب على الاستماع",
      "هاجر رفعت درجتها إلى 83",
      "ريم من الرياض رفعت درجتها إلى 94",
      "زياد أنهى المختصر الذهبي",
      "غادة سجلت في خطة الشهر",
      "سمر حصلت على درجة 90",
      "بندر من المدينة سجّل الآن",
      "هند بدأت خطة الأسبوع",
      "سهى أكملت قراءة جميع القطع المتكررة",
      "لينا من الدمام رفعت درجتها إلى 87"
    ];
    function showNotification(msg) {
      const item = document.createElement("div");
      item.className = "notification-item";
      item.textContent = msg;
      container.appendChild(item);
      // إزالة الإشعار بعد 6 ثوانٍ مع تأثير اختفاء
      setTimeout(() => {
        item.classList.add("fade-out");
        setTimeout(() => {
          container.removeChild(item);
        }, 500);
      }, 6000);
    }
    // إظهار إشعار أولي
    showNotification(messages[Math.floor(Math.random() * messages.length)]);
    // إظهار إشعار جديد كل 15 ثانية
    setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      showNotification(msg);
    }, 15000);
  }

  /**
   * تهيئة رفع الإيصال وإشعار المستخدم بعد اختيار ملف.
   */
  function initReceiptUpload() {
    const input = document.getElementById("receiptUpload");
    if (!input) return;
    input.addEventListener("change", function () {
      if (input.files && input.files.length > 0) {
        const names = Array.from(input.files).map((f) => f.name).join(", ");
        showToast(`تم اختيار: ${names}. يرجى إرفاق الإيصال في تيليجرام عند الإرسال.`);
      }
    });
  }
})();