// إنشاء الخريطة
const map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// تحديد الموقع الحالي للمستخدم
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    map.setView([lat, lon], 15);
    L.marker([lat, lon]).addTo(map).bindPopup("موقعك الحالي").openPopup();
});

// طلب النجدة
document.getElementById('requestHelp').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // يتم إرسال البيانات إلى قاعدة البيانات أو تنبيه الأطباء هنا
        alert("تم إرسال طلب النجدة إلى الأطباء القريبين!");

        // عرض إشارة النجدة على الخريطة
        L.marker([lat, lon], { color: 'red' }).addTo(map)
            .bindPopup("طلب نجدة!")
            .openPopup();
    });
});
