//bussiness logic
function CrustType(name, size, top) {
    this.CrustName = name
    this.PizzaSize = size
    this.TopSize = top
} //prototype
CrustType.prototype.toppings = function() {
        return this.TopSize
    } //user logic
$(document).ready(function() {
    $(document).on("click", "#chec", function(event) {
        event.preventDefault()
        var input = $("#crustType option:selected").text()
        var input1 = $("#pizzaSize option:selected").text()
        var input2 = $("#toppingsType option:selected").text()
        var pizzaValue = parseInt($("#pizzaSize option:selected").val())
        var crustValue = parseInt($("#crustType option:selected").val())
        var toppingsValue = parseInt($("#toppingsType option:selected").val())
            // alert(pizzaValue+crustValue)
        if ($("#pizzaSize ")[0].selectedIndex <= 0) {
            alert("please enter the desired size")
            return false
        }
        if ($("#crustType ")[0].selectedIndex <= 0) {

            alert("Please enter the crust type")
            return false
        }
        if ($("#toppingsType ")[0].selectedIndex <= 0) {
            alert("please enter the toppings type")
            return false
        }
        var myNumber = parseInt($("#integer").val());
        var totalAmount = (pizzaValue + crustValue + toppingsValue) * myNumber;


        var object = new CrustType(input, input1, input2)


        $("#0rdered").html("<h3>" + "PizzaSize:" + object.PizzaSize + "<br> " + "Crust Type:" + object.CrustName + " <br>" + "Toppings:" + object.toppings() + "<br>" + "Total Sum:" + totalAmount + "<br>" + "  <button id='checprimary'class='btn btn-primary'>Deliver</button>" +
            "</h3>")

    })
    $(document).on("click", "#checprimary", function() {
        var myLocation = prompt("Enter your location")
        if (!myLocation) {
            alert("Kindly enter your current location")


        } else {
            alert("your order will be delivered to " + myLocation + " Kindly you have to pay extra delivery fee of ksh.350")
        }
        $("#toppingsType").get(0).selectedIndex = 0
        $("#pizzaSize").get(0).selectedIndex = 0
        $("#crustType").get(0).selectedIndex = 0
        $("#integer").val("")


    })
    $(document).on("click", "#btn", function(e) {
        e.preventDefault()
        var fname = $("#fname").val()
        var lname = $("#lname").val()
        var message = $("#message").val()



        if (!(fname) || !(lname) || !(message)) {

            alert("please fill the required details")
            return false
        } else {
            alert("Success")
            $("#fname").val("")
            $("#lname").val("")
            $("#message").val("")
        }
    })
})