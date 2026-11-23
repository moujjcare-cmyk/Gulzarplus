# 🌹 گلزار سمارٹ ہوم گارڈن (GULZAR Smart Home Garden — v34.0 MOUJ SYNC Edition)

**پیشکش و کنٹرولڈ بائے: موج سِنک (Powered & Controlled by MOUJ SYNC)**

## 📦 اس مکمل زپ پیکج میں شامل فائلیں:
1. **`index.html`**: مکمل اپڈیٹ شدہ گلزار ایپ (v34.0) — جس میں موبائل فولڈر (`Documents/Gulzar/gulzar-database.json`) میں براہِ راست محفوظ و بحال کرنے کے بٹن، گوگل ڈرائیو / واٹس ایپ شیئر، جیمینائی اے آئی چیٹ پرامپٹ و 1-ٹچ پیسٹ باکس، خام JSON خودکار صفائی، پانچ انٹرایکٹو کیئر بٹن، شیڈول گارڈ، اور 370+ پودوں کا آف لائن انسائیکلوپیڈیا شامل ہے۔
2. **`icon-192.png` اور `icon-512.png`**: سرخ گلاب والا آفیشل گلزار ایپ آئیکن (دونوں مطلوبہ سائز)۔
3. **`.github/workflows/build-apk.yml`** (اور اس کی نمایاں کاپی **`GITHUB_ACTION_build-apk.yml`**): گٹ ہب ایکشنز سے خودکار اینڈرائیڈ APK بنانے کی اپڈیٹ شدہ بلڈ فائل۔
4. **`sw.js`، `manifest.json`، `package.json`، `capacitor.config.json`**: نئے ورژن v34.0 کی کنفیگریشن اور آف لائن سروس ورکر فائلیں۔
5. **`OPTIONAL_GoogleDrive_Code.gs`**: اختیاری گوگل ڈرائیو اسکرپٹ (اگر کبھی لیپ ٹاپ سے سیٹ کرنا ہو، موبائل کے لیے ضروری نہیں)۔

## 🚀 گٹ ہب ریپوزٹری (`Gulzarplus`) پر اپڈیٹ کرنے کا آسان طریقہ:
1. اپنی گٹ ہب ریپوزٹری (`moujjcare-cmyk/Gulzarplus`) کھولیں۔
2. ریپوزٹری کے مین فولڈر میں یہ فائلیں اپلوڈ (Replace) کریں:
   - `index.html`
   - `icon-192.png` (یہ نئی فائل ضرور اپلوڈ کریں)
   - `icon-512.png`
   - `sw.js`
   - `package.json`
   - `manifest.json`
   - `capacitor.config.json`
3. اب ریپوزٹری میں `.github/workflows/build-apk.yml` کھول کر اسے `GITHUB_ACTION_build-apk.yml` کے نئے کوڈ سے اپڈیٹ کر دیں۔
4. **Commit changes** کرتے ہی **Actions** ٹیب میں نیا **Gulzar-Smart-Garden-v34-APK** خودکار تیار ہو جائے گا۔
