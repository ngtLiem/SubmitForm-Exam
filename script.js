const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const phone = document.getElementById('phone');

const container = document.querySelector('.form-container');
const loveLanguages = document.getElementById('loveLanguages');
const formRows = document.querySelectorAll('.form-row');

let arrformRows = Array.from(formRows);
arrformRows.pop();
arrformRows.forEach(item => {
    let elmtSmall = document.createElement("SMALL");
    elmtSmall.className = "message";
    elmtSmall.innerText = "XYZ";
    item.appendChild(elmtSmall);
});

function checkFullname() {
    if (fullName.value === '') {
        errorMessage(fullName, "Họ tên không được để trống.");
    } else {
        successMessage(fullName);
    }
}

function successMessage(elmt) {
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('error')) {
        formRow.classList.remove('error');
        formRow.classList.add('success');
        // alert("success-classList= " + formControl.className);
    } else {
        formRow.classList.add('success');
    }
}

function errorMessage(elmt, message) {
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('success')) {
        formRow.classList.remove('success');
        formRow.classList.add('error');
        // alert("error-classList= "+formControl.getAttribute('class'));
    } else {
        formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
}

function validateEmail(phone) {
    /*https://www.w3resource.com/*/
    var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return phoneformat.test(String(phone).toLowerCase());
}

function checkPhone() {
    if (phone.value === '') {
        errorMessage(phone, "Số điện thoại không được để trống.");
    } else if (!validateEmail(phone.value)) {
        errorMessage(phone, "Nhập sai định dạng.");
    } else {
        successMessage(phone);
    }
}
fullName.addEventListener('blur', checkFullname, false);
phone.addEventListener('blur', checkPhone, false);
const listChecks = document.querySelectorAll('.type-checkbox'); //NodeList !== Array
function checkAtleastOneChecked() {
    let arrlistChecks = Array.from(listChecks);
    let test = false;
    //alert('lenght='+arrlistChecks.length);
    for (let i = 0; i < arrlistChecks.length - 1; i++) {
        if (arrlistChecks[i].checked) {
            test = true;
            break;
        }
    }
    if (test) {
        //   alert('OK chon roi');
        successMessage(this);
    } else {
        //   alert('CHUA CHON');
        errorMessage(this, "Lỗi! Không được để trống.");
    }
}
loveLanguages.addEventListener('click', checkAtleastOneChecked, true);

var vol = document.getElementById("vol");
var output = document.getElementById("money");
// Hiển thị giá trị thanh trượt mặc định
output.innerHTML = vol.value;
//Cập nhật giá trị thanh trượt hiện tại (mỗi khi bạn kéo tay cầm thanh trượt)
vol.oninput = function() {
    output.innerHTML = this.value;
}

form2b.addEventListener('submit', (evt) => {
    let isValid = true;
    arrformRows.forEach(item => {
        if (!item.classList.contains('success')) isValid = false;
    });
    //check if all input values are valid
    if (isValid) {
        container.classList.add('complete');
        alert("Bạn đã đăng ký thành công. Thank you.");
    } else {
        // evt.preventDefault();
        alert("Vui lòng nhập lại đúng định dạng.");
        container.classList.remove('complete');
    }
});



//////////////////////////////////////////////
function getQueryString() {
    const params = new URL(window.location).searchParams;
    let fullName = params.get("fullname");
    let phone = params.get("phone");
    let languages = params.getAll("languages");
    let money = params.get("vol");
    let strResult = '';
    languages.forEach(item => { strResult += item + ', ' });
    strResult = strResult.substring(0, strResult.length - 2);
    document.getElementById("info").innerHTML = "Full name: <b>" + fullName + "</b><br/>" +
        "Phone: <b>" + phone + "</b><br/>" + "Mức lương khởi điểm: <b>" + money + " triệu đồng</b><br/>" +
        "Your chosen language(s): <b>" + strResult + "</b>";
}