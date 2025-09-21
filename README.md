<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>الدورة الشاملة لاختبار STEP | أكاديمية عايد – مبادرة حلم</title>
<meta name="description" content="الدورة الشاملة لاختبار STEP – شروحات، نماذج مكررة، خطط مذاكرة، دعم، وتحديثات مدى الحياة. عرض خاص ممتد حتى نهاية الشهر.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --green:#0b7d4f;      /* أخضر موحي باليوم الوطني */
    --green-2:#0ea86b;    /* تدرّج أخضر فاتح */
    --gold:#c9a441;       /* لمسة ذهبية */
    --ink:#17212a;        /* أسود مزرق أنيق */
    --bg:#f6faf7;         /* خلفية ناعمة */
    --card:#ffffff;
    --muted:#6b7b88;
    --danger:#d02b2b;
    --success:#0b7d4f;
    --shadow: 0 10px 30px rgba(11,125,79,.08);
    --radius:18px;
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:var(--bg);color:var(--ink);font-family:"Cairo",system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial}
  a{color:var(--green);text-decoration:none}
  .wrap{max-width:1100px;margin:0 auto;padding:24px}
  .hero{
    background: radial-gradient(1200px 600px at 90% -10%, rgba(14,168,107,.12), transparent 60%),
                linear-gradient(135deg, #e9f7f0 0%, #fff 50%);
    border:1px solid #edf4ef; border-radius:var(--radius); box-shadow:var(--shadow);
    padding:28px 24px; position:relative; overflow:hidden;
  }
  .hero .badge{
    display:inline-flex; align-items:center; gap:10px;
    padding:8px 14px; background: #eaf7f1; color:var(--green);
    border:1px solid #d4efdf; border-radius:999px; font-weight:700; font-size:14px;
  }
  .hero h1{margin:14px 0 8px; font-size:32px; line-height:1.25; font-weight:900}
  .hero p{margin:0; color:var(--muted); font-size:16px}
  .hero .cta{
    margin-top:18px; display:flex; gap:12px; flex-wrap:wrap;
  }
  .btn{
    display:inline-flex; align-items:center; justify-content:center; gap:8px;
    padding:12px 18px; border-radius:14px; font-weight:800; cursor:pointer; border:none
  }
  .btn-primary{background:linear-gradient(135deg,var(--green),var(--green-2)); color:#fff; box-shadow:0 8px 20px rgba(14,168,107,.25)}
  .btn-ghost{background:#fff; color:var(--green); border:1px solid #d9ecdf}
  .grid{display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-top:22px}
  @media (max-width:900px){.grid{grid-template-columns: 1fr}}
  .card{
    background:var(--card); border:1px solid #eef3ef; border-radius:var(--radius);
    box-shadow:var(--shadow); padding:18px
  }
  .card h3{margin:0 0 10px; font-size:20px}
  .list{margin:0; padding:0 18px}
  .list li{margin:8px 0; color:#2b3740}
  .pill{display:inline-flex; align-items:center; gap:10px; padding:6px 12px; background:#f5fbf7; border:1px solid #e6f3ea; color:#20684b; border-radius:999px; font-weight:700; font-size:14px}
  .bank-box{
    border:1px dashed #cfe8d9; background:#f7fbf9; padding:14px; border-radius:12px; margin:12px 0
  }
  .bank-row{display:flex; align-items:center; justify-content:space-between; gap:10px; margin:8px 0; flex-wrap:wrap}
  .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace; font-weight:700; color:#234a3b}
  .copy-btn{
    padding:8px 10px; border-radius:10px; border:1px solid #d9ecdf; background:#fff; color:#216343; cursor:pointer; font-weight:800
  }
  .faq details{border:1px solid #eef3ef; border-radius:12px; background:#fff; padding:12px 14px; margin:10px 0}
  .faq summary{cursor:pointer; font-weight:800; color:#204f3d}
  .note{font-size:13px; color:var(--muted)}
  .muted{color:var(--muted)}
  .danger{color:var(--danger); font-weight:800}
  .success{color:var(--success); font-weight:800}
  .sep{height:1px; background:#eef3ef; margin:16px 0}
  .foot{margin:26px 0 0; text-align:center; color:var(--muted); font-size:13px}

  /* نموذج التسجيل */
  .form{
    display:grid; gap:12px;
  }
  .field label{font-weight:800; font-size:14px; color:#27433a}
  .field input[type="text"],
  .field input[type="tel"],
  .field input[type="file"],
  .field textarea,
  .field select{
    width:100%; padding:12px 12px; border-radius:12px; border:1px solid #dfe9e3; background:#fff; font-size:15px
  }
  .field small{display:block; color:var(--muted); margin-top:6px}
  .tos{font-size:13px; color:#315a48}
  .toast{
    position:fixed; bottom:18px; left:50%; transform:translateX(-50%);
    background:#0b7d4f; color:#fff; padding:12px 16px; border-radius:12px; box-shadow:0 8px 24px rgba(11,125,79,.35);
    display:none; z-index:9999; font-weight:800
  }
  .kicker{display:flex; align-items:center; gap:10px; font-weight:800; color:#1d4e3a; margin-top:4px}
  .mark{background: #eaf7f1; color:#184f3a; border-radius:8px; padding:2px 8px; font-weight:800}
  .free-links a{display:inline-flex; align-items:center; gap:8px; padding:8px 10px; border:1px solid #dfe9e3; border-radius:10px; background:#fff; margin:4px 8px 0 0}
</style>
</head>
<body>
<div class="wrap">

  <!-- هيدر / هيرو -->
  <section class="hero">
    <div class="badge">عرض خاص ممتد حتى نهاية الشهر ⌛ – سعر موحّد: 100 ريال (بدل 400)</div>
    <h1>الدورة الشاملة لاختبار <span style="color:var(--green)">STEP</span> | أكاديمية عايد – مبادرة حلم</h1>
    <p>شروحات مبسطة، نماذج مكررة، خطط مذاكرة، دعم مستمر، وتحديثات مدى الحياة. كل شي جاهز لك بخطوات واضحة وبأسلوب فعّال.</p>
    <div class="cta">
      <button class="btn btn-primary" onclick="document.getElementById('signup').scrollIntoView({behavior:'smooth'})">سجل الآن – تأكيد الاشتراك</button>
      <a class="btn btn-ghost" href="https://t.me/ayedacadmeybot" target="_blank" rel="noopener">المحتوى المجاني (بوت تيليجرام)</a>
    </div>
  </section>

  <!-- تعريف + لماذا STEP -->
  <div class="grid" style="margin-top:20px">
    <div class="card">
      <h3>ليش اختبار STEP مهم؟</h3>
      <ul class="list">
        <li>مطلوب للقبول الجامعي/الدراسات العليا/ الوظائف.</li>
        <li>يقيس: قراءة، استماع، قواعد/تراكيب، وتحليل كتابي.</li>
        <li>الدرجة من 100 – 70+ جيد جدًا، 90+ ممتاز.</li>
        <li>الأسئلة تتكرر كثير، والتركيز على التجميعات يفرق معك جدًا.</li>
      </ul>
    </div>
    <div class="card">
      <h3>وش تحتوي الدورة الشاملة؟</h3>
      <ul class="list">
        <li>شروحات مسجلة لكل الأقسام (Grammar – Reading – Listening – Structure).</li>
        <li>ملفات PDF للطباعة + ملخصات مختصرة.</li>
        <li>تجميعات وأسئلة محلولة + كويزات تدريبية.</li>
        <li>خطط مذاكرة مرنة حسب وقتك + دعم واستشارات.</li>
        <li><span class="success">اشتراك مدى الحياة</span> + تحديثات مجانية مستمرة.</li>
      </ul>
      <div class="kicker">روابط مهمة: 
        <span class="free-links">
          <a href="https://t.me/Hilm_STEP1" target="_blank" rel="noopener">منسق الدورة</a>
          <a href="https://t.me/ayedacadmeybot" target="_blank" rel="noopener">بوت المحتوى المجاني</a>
          <a href="https://t.me/stepp2024" target="_blank" rel="noopener">قناة الإعلانات</a>
        </span>
      </div>
    </div>
  </div>

  <!-- سبب اختلاف السعر -->
  <div class="card" style="margin-top:18px">
    <h3>ليه السعر مختلف عن الموقع الرسمي؟</h3>
    <p>ببساطة لأننا في <b>مبادرة حُلم</b> وفرنا <b>بكج شامل</b> بمحتوى أكاديمية عايد الشامل + تحديثات إضافية وتنسيق جاهز على تيليجرام، بسعر رمزي <b>(100 ريال)</b> و<b>مدى الحياة</b>، بدل اشتراكات وقتية أو أسعار أعلى. هدفنا نوصل المحتوى بذكاء وبأقل تكلفة ممكنة للطالب.</p>
  </div>

  <!-- بيانات التحويل + نسخ -->
  <div class="grid" style="margin-top:18px">
    <div class="card">
      <h3>📌 طريقة الدفع</h3>
      <div class="bank-box">
        <div class="bank-row"><span>البنك:</span> <b>العربي الوطني</b></div>
        <div class="bank-row"><span>رقم الحساب:</span> <span class="mono" id="acc">949000009744524</span> <button class="copy-btn" onclick="copyText('acc')">نسخ</button></div>
        <div class="bank-row"><span>رقم الآيبان:</span> <span class="mono" id="iban">SA3130100949000009744524</span> <button class="copy-btn" onclick="copyText('iban')">نسخ</button></div>
        <div class="bank-row"><span>الاسم على الحساب:</span> <span class="mono" id="name">HALA PAYMENTS CLINTE</span> <button class="copy-btn" onclick="copyText('name')">نسخ</button></div>
      </div>
      <p class="note">حتى لو كان بنكك مختلف، تقدر تحوّل عادي باستخدام الآيبان.</p>
      <div class="sep"></div>
      <div class="pill">💰 السعر بعد الخصم: 100 ريال – العرض ممتد حتى نهاية هذا الشهر</div>
    </div>

    <!-- نموذج التسجيل -->
    <div class="card" id="signup">
      <h3>📝 تأكيد الاشتراك – أرفق الإيصال</h3>
      <form class="form" id="paymentForm">
        <div class="field">
          <label>الاسم الثلاثي</label>
          <input type="text" id="fName" placeholder="مثال: أحمد محمد العتيبي" required>
        </div>
        <div class="field">
          <label>رقم الجوال</label>
          <input type="tel" id="phone" placeholder="05XXXXXXXX" required>
        </div>
        <div class="field">
          <label>يوزر تيليجرام (اختياري)</label>
          <input type="text" id="tg" placeholder="@username (إن وُجد)">
          <small>ما عندك يوزر؟ عادي، راح نفتح لك محادثة تأكيد تلقائيًا.</small>
        </div>
        <div class="field">
          <label>موعد اختبارك التقريبي</label>
          <select id="exam">
            <option value="لم يحجز بعد">لم أحجز بعد</option>
            <option>خلال شهر</option>
            <option>خلال 2-3 شهر</option>
            <option>بعد أكثر من 3 شهور</option>
            <option>غير محدد</option>
          </select>
        </div>
        <div class="field">
          <label>ملاحظات (اختياري)</label>
          <textarea id="notes" rows="3" placeholder="اذكر لنا أي ملاحظة مهمة"></textarea>
        </div>
        <div class="field">
          <label>إرفاق الإيصال (صورة أو PDF) <span class="danger">*</span></label>
          <input type="file" id="receipt" accept=".jpg,.jpeg,.png,.pdf" required>
          <small>مهم: سيُفتح لك تيليجرام برسالة جاهزة — فقط أرفق هذا الإيصال يدويًا ثم أرسل.</small>
        </div>
        <div class="field tos">
          ✅ بالتقديم أنت توافق على مراجعة الاشتراك يدويًا خلال الضغط الحالي، وأولوية الرد للمحوّلين.
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap">
          <button type="submit" class="btn btn-primary">تأكيد الدفع والاشتراك</button>
          <button type="button" class="btn btn-ghost" onclick="previewMsg()">معاينة الرسالة</button>
        </div>
        <small class="note">بعد الإرسال: إذا ما وصلك رد خلال وقت معقول، أعد فتح الرسالة وأرسلها مجددًا بسبب ضغط الرسائل.</small>
      </form>
    </div>
  </div>

  <!-- أسئلة شائعة + تنبيهات -->
  <div class="grid" style="margin-top:18px">
    <div class="card faq">
      <h3>❓ الأسئلة الشائعة</h3>
      <details>
        <summary>هل الاشتراك مدى الحياة؟</summary>
        <p>نعم ✅ تدفع مرة واحدة فقط، وكل التحديثات الجاية توصلك مجانًا مدى الحياة.</p>
      </details>
      <details>
        <summary>لو اختباري بعد شهور… ينفع أشترك الآن؟</summary>
        <p>أكيد ✅ اشترك وخذ راحتك بالمذاكرة. معك التحديثات كلها أول بأول.</p>
      </details>
      <details>
        <summary>هل فيه كويزات ونماذج حديثة؟</summary>
        <p>نعم، كويزات تدريبية + تجميعات مكررة ومحلولة + ملفات مختصرة لكل الأقسام.</p>
      </details>
      <details>
        <summary>وش سبب اختلاف السعر عن الموقع؟</summary>
        <p>نسخة مبادرة حُلم باقة خاصة مرتبة على تيليجرام وبسعر رمزي (100 ريال) ومدى الحياة.</p>
      </details>
      <details>
        <summary>هل أقدر أجرب محتوى مجاني؟</summary>
        <p>طبعًا: <a href="https://t.me/ayedacadmeybot" target="_blank" rel="noopener">بوت المحتوى المجاني</a>.</p>
      </details>
    </div>
    <div class="card">
      <h3>تنبيهات مهمة</h3>
      <ul class="list">
        <li>الرد يتم أولًا على اللي يرسلون <b>تأكيد الدفع</b> مع الإيصال.</li>
        <li>لو ما كنت واثق/مو جاد، لا ترسل — عندك المحتوى المجاني تستفيد منه بدون التزام.</li>
        <li>بعض الفيديوهات قد تكون خاصة أثناء التحديث — كل شيء مرتب ومتاح عبر الدرايف داخل قنوات المشتركين.</li>
      </ul>
      <div class="sep"></div>
      <div class="pill">🎯 مع أكاديمية عايد – مبادرة حلم: +90 صارت هدف واقعي</div>
    </div>
  </div>

  <div class="foot">
    © أكاديمية عايد – مبادرة حُلم | الروابط الرسمية:
    <a href="https://t.me/Hilm_STEP1" target="_blank" rel="noopener">المنسق</a> •
    <a href="https://t.me/ayedacadmeybot" target="_blank" rel="noopener">المحتوى المجاني</a> •
    <a href="https://t.me/stepp2024" target="_blank" rel="noopener">قناة الإعلانات</a>
  </div>
</div>

<div class="toast" id="toast">تم نسخ الرسالة الجاهزة… افتح تيليجرام وأرفق الإيصال ثم أرسل ✅</div>

<script>
  // نسخ نص
  function copyText(id){
    const el = document.getElementById(id);
    if(!el) return;
    navigator.clipboard.writeText(el.textContent.trim()).then(()=>showToast("تم النسخ ✅"));
  }
  function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.display = 'block';
    setTimeout(()=>{ t.style.display = 'none'; }, 2800);
  }

  // توليد الرسالة الجاهزة
  function buildMessage(){
    const name = document.getElementById('fName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const tg = document.getElementById('tg').value.trim() || '—';
    const exam = document.getElementById('exam').value;
    const notes = document.getElementById('notes').value.trim() || '—';

    const msg =
`تأكيد الدفع – اشتراك STEP ✅

• الاسم: ${name}
• الجوال: ${phone}
• تيليجرام: ${tg}
• موعد الاختبار التقريبي: ${exam}
• ملاحظات: ${notes}

بيانات التحويل التي استخدمتها:
- البنك: العربي الوطني
- رقم الحساب: 949000009744524
- الآيبان: SA3130100949000009744524
- الاسم على الحساب: HALA PAYMENTS CLINTE

📎 مرفق إيصال التحويل (صورة/‏PDF).
أرجو تأكيد اشتراكي وإرسال روابط الدخول للدورة الشاملة. وشكرًا لكم.`;

    return msg;
  }

  // معاينة
  function previewMsg(){
    const txt = buildMessage();
    alert(txt);
  }

  // إرسال (نسخ + فتح تيليجرام)
  const form = document.getElementById('paymentForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const receipt = document.getElementById('receipt');
    if(!receipt.files || !receipt.files.length){
      showToast("أرفق الإيصال أولاً ❗");
      return;
    }
    const msg = buildMessage();
    navigator.clipboard.writeText(msg).then(()=>{
      showToast("تم نسخ الرسالة الجاهزة…");
      // فتح محادثة المنسق برسالة مُعبأة
      const encoded = encodeURIComponent(msg);
      const url = "https://t.me/Hilm_STEP1?text=" + encoded;
      window.open(url, "_blank", "noopener");
      // تذكير بإرفاق الإيصال
      setTimeout(()=>showToast("افتح تيليجرام وأرفق الإيصال ثم أرسل ✅"), 800);
    });
  });
</script>
</body>
</html>
