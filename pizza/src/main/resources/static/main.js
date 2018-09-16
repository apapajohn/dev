(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <app-pizza></app-pizza>\n  <app-messages></app-messages>\n  <app-orders></app-orders>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Greek Pizza';
        this.step1 = 'Enter first name';
        this.step2 = 'Select toppings';
        this.step3 = 'Place order';
        this.errorToppingTaken1 = 'Sorry, all out of ';
        this.errorToppingTaken2 = '. Please change your selections.';
        this.success = 'Pick up in 15 minutes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizza/pizza.component */ "./src/app/pizza/pizza.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_3__["PizzaComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/messages.service.ts":
/*!*************************************!*\
  !*** ./src/app/messages.service.ts ***!
  \*************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.hasMessage = function () {
        return this.messages.length > 0;
    };
    MessageService.prototype.displayNext = function () {
        return this.messages.pop();
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.hasMessage()\">\n\n  <h2>Messages</h2>\n  {{messageService.displayNext()}} \n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/orders.service.ts":
/*!***********************************!*\
  !*** ./src/app/orders.service.ts ***!
  \***********************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.service */ "./src/app/messages.service.ts");
/* harmony import */ var _orders_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/order */ "./src/app/orders/order.ts");
/* harmony import */ var _tally_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tally.service */ "./src/app/tally.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = /** @class */ (function () {
    function OrdersService(messageService, tallyService, http) {
        this.messageService = messageService;
        this.tallyService = tallyService;
        this.http = http;
        this.NEW_ORDER_PATH = "/order";
        //A service should be stateless, but I need a way to communicate
        //the order information across components. This is similar to messageService in that way.
        this.order = new _orders_order__WEBPACK_IMPORTED_MODULE_1__["Order"]();
    }
    OrdersService.prototype.placeOrder = function () {
        return this.http.post(this.NEW_ORDER_PATH, this.order);
    };
    OrdersService.prototype.isOkToPlaceOrder = function () {
        return this.order.isComplete();
    };
    OrdersService.prototype.getToppings = function () {
        return this.order.getToppings();
    };
    OrdersService.prototype.addTopping = function (topping) {
        this.order.addTopping(topping);
        this.order.totalInCents = this.tallyService.getTotalInCents(this.order);
    };
    OrdersService.prototype.clearToppings = function () {
        this.order.clearToppings();
    };
    OrdersService.prototype.isOkToShowOrder = function () {
        return this.order.isIngredientsComplete();
    };
    OrdersService.prototype.updateOrder = function (orderForm) {
        this.order.customerFirstName = orderForm.customerFirstName;
    };
    OrdersService.prototype.getOrderTotal = function () {
        return this.order.totalInCents;
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
            _tally_service__WEBPACK_IMPORTED_MODULE_2__["TallyService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/orders/order.ts":
/*!*********************************!*\
  !*** ./src/app/orders/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
        //TODO: change toppings to an object
        //for better flexibility of adding and removing
        this.toppings = [];
    }
    Order.prototype.isComplete = function () {
        return this.validate();
    };
    Order.prototype.validate = function () {
        return this.customerInfoCorrect() && this.isIngredientsComplete();
    };
    Order.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    Order.prototype.getToppings = function () {
        return this.toppings;
    };
    Order.prototype.clearToppings = function () {
        this.toppings = [];
    };
    Order.prototype.isIngredientsComplete = function () {
        return this.toppings.length > 0;
    };
    Order.prototype.customerInfoCorrect = function () {
        return this.customerFirstName.length > 2;
    };
    return Order;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n<div  *ngIf=\"isOkToShowOrder()\">\r\n<P>\r\n<h2>Order total: ${{getOrderTotal()}}</h2>\r\n <P>\r\n <div>\r\n\r\n    <label>First name :\r\n       <input [(ngModel)]=\"orderForm.customerFirstName\" placeholder=\"customerFirstName\"/>\r\n    </label>\r\n    <P>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"isOkToPlaceOrder()\">\r\n     <button (click)=\"placeOrder()\">Place order</button>\r\n    </div>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService, messageService) {
        this.ordersService = ordersService;
        this.messageService = messageService;
        this.orderForm = { customerFirstName: '' };
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent.prototype.ngOnChanges = function (changes) {
        this.ordersService.updateOrder(this.orderForm);
    };
    OrdersComponent.prototype.reinit = function () {
        this.orderForm = { customerFirstName: '' };
    };
    OrdersComponent.prototype.isOkToShowOrder = function () {
        return this.ordersService.isOkToShowOrder();
    };
    OrdersComponent.prototype.getOrderTotal = function () {
        return this.ordersService.getOrderTotal();
    };
    OrdersComponent.prototype.isOkToPlaceOrder = function () {
        //TODO: shouldn't have to call this here. get event listening working
        this.ordersService.updateOrder(this.orderForm);
        return this.ordersService.isOkToPlaceOrder();
    };
    OrdersComponent.prototype.placeOrder = function () {
        var _this = this;
        this.ordersService.placeOrder().subscribe(function (or) {
            if (or.success == true) {
                _this.messageService.add("Order placed. Pick up in " + or.pickUpInMinutes + " minutes");
            }
            else {
                //todo, better messaging needed.
                _this.messageService.add(or.orderStatus.status);
            }
            _this.reinit();
            _this.ordersService.clearToppings();
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _messages_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pizza/pizza.component.css":
/*!*******************************************!*\
  !*** ./src/app/pizza/pizza.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* toppingsComponent's private CSS styles */\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.toppings {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.toppings li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.toppings li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\n.toppings li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.toppings .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.toppings .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}"

/***/ }),

/***/ "./src/app/pizza/pizza.component.html":
/*!********************************************!*\
  !*** ./src/app/pizza/pizza.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ul class=\"toppings\">\n<h2>Available Toppings</h2>\n  <li *ngFor=\"let topping of toppings\" (click)=\"onSelect(topping)\">\n  <div *ngIf=\"topping.quantity > 0\">\n    <span class=\"badge\">{{topping.quantity}} left</span> {{topping.name}}\n    </div>\n  </li>\n</ul>\n<div *ngIf=\"hasSelectedToppings()\">\n\t<button (click)=\"clearSelectedToppings()\">Clear all</button>\n</div>\n\n<li *ngFor=\"let selectedTopping of getSelectedToppings()\">\n   <div>\n    <label>name:\n      <input [(ngModel)]=\"selectedTopping.name\" placeholder=\"name\">\n    </label>\n  </div>\n</li>\n\n"

/***/ }),

/***/ "./src/app/pizza/pizza.component.ts":
/*!******************************************!*\
  !*** ./src/app/pizza/pizza.component.ts ***!
  \******************************************/
/*! exports provided: PizzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaComponent", function() { return PizzaComponent; });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages.service */ "./src/app/messages.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _topping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topping.service */ "./src/app/topping.service.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PizzaComponent = /** @class */ (function () {
    function PizzaComponent(toppingService, messageService, ordersService) {
        this.toppingService = toppingService;
        this.messageService = messageService;
        this.ordersService = ordersService;
    }
    PizzaComponent.prototype.ngOnInit = function () {
        this.initToppings();
    };
    PizzaComponent.prototype.initToppings = function () {
        var _this = this;
        this.toppingService.getToppings()
            .subscribe(function (t) { return _this.toppings = t.slice(); });
    };
    PizzaComponent.prototype.getSelectedToppings = function () {
        return this.ordersService.getToppings();
    };
    PizzaComponent.prototype.hasSelectedToppings = function () {
        return this.ordersService.getToppings().length > 0;
    };
    PizzaComponent.prototype.clearSelectedToppings = function () {
        this.ordersService.clearToppings();
        this.initToppings();
    };
    PizzaComponent.prototype.onSelect = function (topping) {
        if (topping.quantity > 0) {
            topping.quantity--;
            this.ordersService.addTopping(topping);
            this.messageService.add("Added " + topping.name);
        }
        else {
            this.messageService.add("Sorry, we've run out of " + topping.name);
        }
    };
    PizzaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza',
            template: __webpack_require__(/*! ./pizza.component.html */ "./src/app/pizza/pizza.component.html"),
            styles: [__webpack_require__(/*! ./pizza.component.css */ "./src/app/pizza/pizza.component.css")]
        }),
        __metadata("design:paramtypes", [_topping_service__WEBPACK_IMPORTED_MODULE_2__["ToppingService"],
            _messages_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"],
            _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]])
    ], PizzaComponent);
    return PizzaComponent;
}());



/***/ }),

/***/ "./src/app/tally.service.ts":
/*!**********************************!*\
  !*** ./src/app/tally.service.ts ***!
  \**********************************/
/*! exports provided: TallyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallyService", function() { return TallyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TallyService = /** @class */ (function () {
    function TallyService() {
    }
    //TODO: hit http service
    TallyService.prototype.getTotalInCents = function (order) {
        //mock func:
        return order.toppings.length * 150;
    };
    TallyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TallyService);
    return TallyService;
}());



/***/ }),

/***/ "./src/app/topping.service.ts":
/*!************************************!*\
  !*** ./src/app/topping.service.ts ***!
  \************************************/
/*! exports provided: ToppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToppingService", function() { return ToppingService; });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.service */ "./src/app/messages.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToppingService = /** @class */ (function () {
    function ToppingService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.TOPPINGS_PATH = "/toppings";
    }
    ToppingService.prototype.getToppings = function () {
        return this.http.get(this.TOPPINGS_PATH);
    };
    ToppingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _messages_service__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], ToppingService);
    return ToppingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\apapajohn\dev\pizza\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map