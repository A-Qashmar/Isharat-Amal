// دالة لتحديث موقع المريض وزمن الوصول
function receiveHelpRequest(location, eta) {
    document.getElementById("alertSection").style.display = "block";
    document.getElementById("patientLocation").textContent = location;
    document.getElementById("eta").textContent = eta;
}

// دالة لقبول الطلب
function acceptRequest() {
    alert("لقد قبلت الطلب، يرجى التوجه إلى موقع المريض.");
}

// مثال على تلقي إشعار (يمكن استبداله بتكامل مع قاعدة بيانات)
receiveHelpRequest("الشارقة، شارع الملك فيصل", 7); // هنا يتم تزويد الموقع وزمن الوصول
