function themDanhGia() {
    let ten = document.getElementById("ten").value;
    let sao = document.getElementById("sao").value;
    let nhanxet = document.getElementById("nhanxet").value;
    if (ten == "" || nhanxet == "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let review = document.createElement("div");
    review.className = "review-card";

    review.innerHTML = `
    <h3>${ten}</h3>
    <p>${sao}</p>
    <p>${nhanxet}</p>
`;
    document.getElementById("reviewList").prepend(review);
    document.getElementById("ten").value = "";
    document.getElementById("nhanxet").value = "";
    alert("Cảm ơn bạn đã đánh giá!");

}