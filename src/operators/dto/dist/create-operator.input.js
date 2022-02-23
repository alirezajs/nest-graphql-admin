"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOperatorInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var CreateOperatorInput = /** @class */ (function () {
    function CreateOperatorInput() {
    }
    __decorate([
        graphql_1.Field(function () { return graphql_1.Int; }, { description: 'Example field (placeholder)' })
    ], CreateOperatorInput.prototype, "Id");
    __decorate([
        graphql_1.Field(function () { return String; })
    ], CreateOperatorInput.prototype, "Name");
    CreateOperatorInput = __decorate([
        graphql_1.InputType()
    ], CreateOperatorInput);
    return CreateOperatorInput;
}());
exports.CreateOperatorInput = CreateOperatorInput;
