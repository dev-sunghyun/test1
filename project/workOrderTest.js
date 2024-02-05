window.addEventListener("load", function() {

    menuHover();
    popup();
    popupRun();

});

function menuHover() {
    
    const hover = document.querySelectorAll('a.hover');
    const menuBar = document.querySelector('.menu-bar');
    const nav = document.querySelector('nav');
    const wrap = document.querySelector('.wrap');

    // if() {
    // document.querySelector("#mainTitle1").style.display = "block";
    // } else {
    document.querySelector("#mainTitle2").style.display = "block";
    // }

    let isHovered = false;

    hover.forEach(button => {
        button.addEventListener('mouseover', () => {
            showMenuBar();
            isHovered = true;
        });
    });

    wrap.addEventListener("mouseleave", function () {
        if (!isHovered) {
            hideMenuBar();
        }
    });

    menuBar.addEventListener("mouseenter", function () {
        isHovered = true;
    });

    menuBar.addEventListener("mouseleave", function () {
        hideMenuBar();
    });

    function showMenuBar() {
        nav.classList.add('active');
    }

    function hideMenuBar() {
        nav.classList.remove('active');
    }

}


function popup() {

    // 품질검사 지침서 팝업
    // 팝업 div 랑 버튼가져오기
    const order_add_popup = document.getElementById("order-add-popup");
    const list_add_button = document.getElementById("list-add-button");
    const cancel_apply_button = document.getElementById("cancel-apply-button");

    // 팝업 div 열기
    list_add_button.addEventListener("click", function () {
        order_add_popup.style.display = "block";
        // 다른영역 클릭 비활성화
        order_add_popup.style.pointerEvents = "auto";
    });

    // 팝업 div 닫기 => 닫기버튼누를시
    cancel_apply_button.addEventListener("click", function () {
        order_add_popup.style.display = "none";
        // 다른영역 클릭 활성화
        order_add_popup.style.pointerEvents = "none";
    });

    // 팝업 div 닫기버튼 비활성화
    order_add_popup.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // 팝업 div 닫기버튼 활성화
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            order_add_popup.style.display = "none";
            // 다른영역 클릭 활성화
            order_add_popup.style.pointerEvents = "none";
        }
    });

}

function popupRun() {

    // 적용하기 버튼
    const add_button = document.querySelector("#add-apply-button");

    // 적용하기 버튼을 누르면 실행
    add_button.addEventListener("click", function() {

        const work_content = document.querySelector("#work-content");
        const add_title = document.querySelector("#add-title");
        const add_detail = document.querySelector("#add-detail");
        const add_img = document.querySelector("#add-img");

        let input_img = "";

        if(add_img.value == "") {
            input_img = `<img src="https://cdn.discordapp.com/attachments/1185161279804026893/1202813706736766996/fox.jpg?ex=65ced28e&is=65bc5d8e&hm=7af0e56f9236cf70765bfa1e2f9ad9d2549215854fa0b854c4d4d00ad7af7967&">`;
        } else if(add_img != "") {
            input_img = `<img src="${add_img.value}">`;
        } else if(img_file.name != "") {
            
        }

        // console.log(img_file);
        
        
        
        
        let html = "";
        html += `<div class="workList">
        <div class="workOrder">
        <span>
        ${add_title.value}
        </span>
        <p>
        ${add_detail.value}
        </p>
        </div>
        <div class="workImg">
        ${input_img}
                    </div>
                    <div id="delete-checkbox">
                        <input type="checkbox">
                    </div>
                </div>
                `;
                
        work_content.innerHTML += html;
        


    });

    const img_select_button = document.querySelector("#img-select-button");
    
    img_select_button.addEventListener("click", function() {
        
        const img_preview = document.querySelector(".img-preview");
        let img_file = document.querySelector("#add-img-button").files[0];
        console.log(img_file.name);
        
        const read = new FileReader();
    
        read.onload = function (e) {
            // 미리보기 이미지를 생성
            const imgPreview = document.createElement('img');
            imgPreview.src = e.target.result;
            console.log(e.target.result);
    
            // 이미지를 표시할 div에 추가
            // const imgDiv = document.querySelector('.workImg');
            img_preview.innerHTML = ''; // 이미지가 이미 있다면 초기화
            img_preview.appendChild(imgPreview);
        };
    
        // FileReader를 사용하여 Blob을 Data URL로 읽어옴
        read.readAsDataURL(img_file);
    
    
    });

    
}




// function imgPopup() {
    
    //     // 품질검사 지침서 팝업
    //     // 팝업 div 랑 버튼가져오기
    //     const img_push_popup = document.getElementById("img-push-popup");
    //     const img_add_button = document.getElementById("add-img-button");
    //     const img_cancel_button = document.getElementById("img-apply-cancel-button");
    
    //     // 팝업 div 열기
    //     img_add_button.addEventListener("click", function () {
        //         img_push_popup.style.display = "block";
//         // 다른영역 클릭 비활성화
//         img_push_popup.style.pointerEvents = "auto";
//     });

//     // 팝업 div 닫기 => 닫기버튼누를시
//     cancel_img_button.addEventListener("click", function () {
//         img_push_popup.style.display = "none";
//         // 다른영역 클릭 활성화
//         img_push_popup.style.pointerEvents = "none";
//     });

//     // 팝업 div 닫기버튼 비활성화
//     img_push_popup.addEventListener("click", function (event) {
//         event.stopPropagation();
//     });

//     // 팝업 div 닫기버튼 활성화
//     window.addEventListener("click", function (event) {
//         if (event.target == modal) {
//             img_push_popup.style.display = "none";
//             // 다른영역 클릭 활성화
//             img_push_popup.style.pointerEvents = "none";
//         }
//     });

// }