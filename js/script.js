
//Business Logic
$(document).ready(function() {
    $("#formOne").submit(function (event){


        const firstNameInput = $("input#first-name").val();
        const lastNameInput = $("input#last-name").val();
        const numberInput = $("input#tel-number").val();
        const typeInput = $("select#sneaker-type").val();
        const addressInput = $("input#address").val();
        const itemInput = $("select#sneaker-name").val();
        const quantityInput = $("input#quantity").val();
        const colorInput = $("input#color").val();
        const expectedDateInput = $("input#expected-date").val();
        const orderDateInput = $("input#order").val();
        const genderInput = $("input:radio[name=Gender]:checked").val();
        const methodInput = $("input:radio[name=payment]:checked").val();
        

        $(".name1").text(firstNameInput);
        $(".name2").text(lastNameInput);
        $(".number").text(numberInput);
        $(".gender").text(genderInput);
        $(".type").text(typeInput);
        $(".address").text(addressInput);
        $(".color").text(colorInput);
        $(".item").text(itemInput);
        $(".quantity").text(quantityInput);
        $(".method").text(methodInput);
        $(".order").text(orderDateInput);
        $(".expected").text(expectedDateInput);

        $(".content").hide();
        $(".receipt").show();

        event.preventDefault();
    });

});