window.addEventListener("load", function() {
    bind();
});

function bind() {
    
    // 할일 추가 버튼을 클릭하면
    let add = document.querySelector("#add");

    add.addEventListener("click", function() {
        // console.log("클릭함");
        // input 의 글씨를
        let todo = document.querySelector("#todo");

        // 목록에 추가한다
        let todoList = document.querySelector("#todoList");
        
        let html = "";
        html += `
                    <td>
                        <input type="checkbox" class="chk">
                    </td>
                    <td>
                        ${todo.value}
                    </td>
                    <td>
                        날짜?
                    </td>
                    <td>
                        <button type="button" class="del">삭제</button>
                    </td>
                `;

        let tr = document.createElement("tr");
        tr.innerHTML = html;

        // 추가되는 애들을 삭제
        // 삭제 이벤트 부여/바인딩
        tr.querySelector(".del")
          .addEventListener("click", function(event) {
        // 실제로 클릭된 요소
            console.log(event.target);
            console.log(this);
            console.log(event.target === this);

            // 구조상 내 부모의 부모를
            let parent_tr = event.target.parentNode.parentNode;
            console.log(tr);
            
            // 지우자
            parent_tr.remove();

        });

        
        // 내 자식 요소 중에서 마지막에 DOM 추가
        todoList.append(tr);


        tr.querySelector(".chk")
          .addEventListener("click", function(event) {
            // 내가 check 가 풀렸다면
            // 전체 선택도 check 를 풀어버림
            if(!event.target.checked) {
                document.querySelector("#select_all").checked = false;
            } else {
                let allCount = document.querySelectorAll(".chk").length;
                let checkedCount = document.querySelectorAll(".chk:checked").length;
                if(allCount == checkedCount) {
                    document.querySelector("#select_all").checked = true;
                } else {
                    document.querySelector("#select_all").checked = false;
                }
            }

        });



    });

    // 개별 삭제 버튼을
    // 클릭하면
    // 줄 삭제 

    // // 개별 삭제 버튼들 모두 가져와서
    // let list_del = document.querySelectorAll(".del");
    // for(let i = 0; i < list_del.length; i++) {
    //     // 개별 삭제 버튼 하나마다 클릭 이벤트 주기
    //     list_del[i].addEventListener("click", function(event) {
    //         // 실제로 클릭된 요소
    //         console.log(event.target);
    //         console.log(this);
    //         console.log(event.target === this);

    //         // 구조상 내 부모의 부모를
    //         let tr = event.target.parentNode.parentNode;
    //         console.log(tr);
            
    //         // 지우자
    //         tr.remove();

    //     });

    // };

    // // table 은 처음부터 끝까지 함께하니까
    // document.querySelector("#todoList")
    //         .addEventListener("click", function(event) {
    //             console.log(event.target);

    //             // 이벤트가 바인딩된 요소
    //             console.log(event.currentTarget);
    //             // 단점 : 테이블의 모든 요소에서 클릭 이벤트가 발생하므로
    //             // 삭제 버튼 여부를 확인해야 한다
    //         });


    
    // 선택 삭제 버튼을
    // 누르면
    // checkbox 가 선택된 줄을
    // 모두 지운다
    document.querySelector("#selected_del")
            .addEventListener("click", function() {

                // checkbox 가 선택된 줄을
                //  1. 모든 줄마다 check 여부를 검사        
                // let list_checked = document.querySelectorAll(".chk");

                // for(let i = 0; i < list_checked.length; i++) {
                //     if(list_checked[i].checked) {
                //         list_checked[i].parentNode.parentNode.remove();
                //     }
                // }
                
                //  2. check 된 것만 선택
                let list_checked = document.querySelectorAll(".chk:checked");

                for(let i = 0; i < list_checked.length; i++) {
                    list_checked[i].parentNode.parentNode.remove();
                }

                // 모두지운다

            });

            


    // 전체 선택 checkbox 를 클릭하면
    // check 상태에 따라서
    //      전부 check 한 상태로
    //      전부 check 안한 생태로

    document.querySelector("#select_all")
            .addEventListener("click", function(event) {

                let list_check = document.querySelectorAll(".chk");

                // 클릭된 요소가
                // check 상태라면
                if(event.target.checked) {
                    for(let i = 0; i < list_check.length; i++) {
                        list_check[i].checked = true;
                    }
                // check 상태가 아니라면
                } else {
                    for(let i = 0; i < list_check.length; i++) {
                        list_check[i].checked = true;
                    }
                }



            });

};