var customers = [];
var index = 0;


// 생성자 함수
function Customer(background) {
    this.background = background;
}

function createCustomer(background) {    
    var customer = new Customer(background);
    customers.push(customer);
}




document.querySelectorAll('.slick-arrow').forEach(function(item) {

    item.addEventListener('click', function (e) {

        e.preventDefault();

        // console.log(e.target);
        if (e.target.classList.contains('slide_btn_prev')) {

            // 배열의 가장 앞 데이터에 접근했을 때
            if (index === 0) {
                index = customers.length;
            }

            index--;
            document.getElementById('slide_content').backgroundImage = customers[index].background;
        }

        if (e.target.classList.contains('slide_btn_next')) {
            // 배열의 가장 끝 데이터에 접근했을 때
            if (index === (customers.length - 1)) {
                index = -1;
            }

            index++;
            document.getElementById('slide_content').backgroundImage = customers[index].background;
        }
    })
})