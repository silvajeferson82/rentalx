"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCoursesService_1 = __importDefault(require("./CreateCoursesService"));
function createCourse(request, response) {
    CreateCoursesService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });
    CreateCoursesService_1.default.execute({
        name: "Rails",
        educator: "Jeferson"
    });
    return response.send();
}
exports.createCourse = createCourse;
