"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesModule = void 0;
const common_1 = require("@nestjs/common");
const times_service_1 = require("./times.service");
const times_controller_1 = require("./times.controller");
let TimesModule = class TimesModule {
};
exports.TimesModule = TimesModule;
exports.TimesModule = TimesModule = __decorate([
    (0, common_1.Module)({
        controllers: [times_controller_1.TimesController],
        providers: [times_service_1.TimesService],
    })
], TimesModule);
//# sourceMappingURL=times.module.js.map