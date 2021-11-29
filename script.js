//bussiness logic
function CrustType(name, size, top) {
    this.CrustName = name
    this.PizzaSize = size
    this.TopSize = top
} //prototype
CrustType.prototype.toppings = function() {
    return this.TopSize
}