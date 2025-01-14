/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/notes-microservice/src/notes-microservice.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/notes-microservice/src/notes-microservice.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesMicroserviceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notes_microservice_service_1 = __webpack_require__(/*! ./notes-microservice.service */ "./apps/notes-microservice/src/notes-microservice.service.ts");
let NotesMicroserviceController = class NotesMicroserviceController {
    constructor(notesMicroserviceService) {
        this.notesMicroserviceService = notesMicroserviceService;
    }
    getHello() {
        return this.notesMicroserviceService.getHello();
    }
};
exports.NotesMicroserviceController = NotesMicroserviceController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], NotesMicroserviceController.prototype, "getHello", null);
exports.NotesMicroserviceController = NotesMicroserviceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notes_microservice_service_1.NotesMicroserviceService !== "undefined" && notes_microservice_service_1.NotesMicroserviceService) === "function" ? _a : Object])
], NotesMicroserviceController);


/***/ }),

/***/ "./apps/notes-microservice/src/notes-microservice.module.ts":
/*!******************************************************************!*\
  !*** ./apps/notes-microservice/src/notes-microservice.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesMicroserviceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notes_microservice_controller_1 = __webpack_require__(/*! ./notes-microservice.controller */ "./apps/notes-microservice/src/notes-microservice.controller.ts");
const notes_microservice_service_1 = __webpack_require__(/*! ./notes-microservice.service */ "./apps/notes-microservice/src/notes-microservice.service.ts");
const notes_module_1 = __webpack_require__(/*! ./notes/notes.module */ "./apps/notes-microservice/src/notes/notes.module.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let NotesMicroserviceModule = class NotesMicroserviceModule {
};
exports.NotesMicroserviceModule = NotesMicroserviceModule;
exports.NotesMicroserviceModule = NotesMicroserviceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            notes_module_1.NotesModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://alexist103:laS31WAxFPpgAjxV@soaproject.c2z5s.mongodb.net/?retryWrites=true&w=majority&appName=SOAProject'),
        ],
        controllers: [notes_microservice_controller_1.NotesMicroserviceController],
        providers: [notes_microservice_service_1.NotesMicroserviceService],
    })
], NotesMicroserviceModule);


/***/ }),

/***/ "./apps/notes-microservice/src/notes-microservice.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/notes-microservice/src/notes-microservice.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesMicroserviceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let NotesMicroserviceService = class NotesMicroserviceService {
    getHello() {
        return 'Hello World!';
    }
};
exports.NotesMicroserviceService = NotesMicroserviceService;
exports.NotesMicroserviceService = NotesMicroserviceService = __decorate([
    (0, common_1.Injectable)()
], NotesMicroserviceService);


/***/ }),

/***/ "./apps/notes-microservice/src/notes/notes.controller.ts":
/*!***************************************************************!*\
  !*** ./apps/notes-microservice/src/notes/notes.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notes_service_1 = __webpack_require__(/*! ./notes.service */ "./apps/notes-microservice/src/notes/notes.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const notes_pattern_1 = __webpack_require__(/*! @app/contracts/notes.pattern */ "./libs/patterns/src/notes.pattern.ts");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    createNote(payload) {
        return this.notesService.createNote(payload.userId, payload.title);
    }
    updateContent(payload) {
        return this.notesService.updateContent(payload.noteId, payload.content);
    }
    addUser(payload) {
        return this.notesService.addParticipant(payload.noteId, payload.userId);
    }
    getAll() {
        return this.notesService.findAll();
    }
    findAllByUser(payload) {
        return this.notesService.findAllByUser(payload.userId, payload.page, 20);
    }
    findById(payload) {
        return this.notesService.findById(payload.noteId);
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "updateContent", null);
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.ADD_USER),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "addUser", null);
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "getAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.FIND_ALL_BY_USER),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findAllByUser", null);
__decorate([
    (0, microservices_1.MessagePattern)(notes_pattern_1.NOTE_PATTERN.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "findById", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notes_service_1.NotesService !== "undefined" && notes_service_1.NotesService) === "function" ? _a : Object])
], NotesController);


/***/ }),

/***/ "./apps/notes-microservice/src/notes/notes.module.ts":
/*!***********************************************************!*\
  !*** ./apps/notes-microservice/src/notes/notes.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notes_service_1 = __webpack_require__(/*! ./notes.service */ "./apps/notes-microservice/src/notes/notes.service.ts");
const notes_controller_1 = __webpack_require__(/*! ./notes.controller */ "./apps/notes-microservice/src/notes/notes.controller.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const note_schema_1 = __webpack_require__(/*! @app/dtos/notes/note.schema */ "./libs/dtos/src/notes/note.schema.ts");
const user_schema_1 = __webpack_require__(/*! @app/dtos/users/user.schema */ "./libs/dtos/src/users/user.schema.ts");
let NotesModule = class NotesModule {
};
exports.NotesModule = NotesModule;
exports.NotesModule = NotesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: note_schema_1.Note.name, schema: note_schema_1.NoteSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
            ]),
        ],
        providers: [notes_service_1.NotesService],
        controllers: [notes_controller_1.NotesController]
    })
], NotesModule);


/***/ }),

/***/ "./apps/notes-microservice/src/notes/notes.service.ts":
/*!************************************************************!*\
  !*** ./apps/notes-microservice/src/notes/notes.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotesService = void 0;
const note_schema_1 = __webpack_require__(/*! @app/dtos/notes/note.schema */ "./libs/dtos/src/notes/note.schema.ts");
const user_schema_1 = __webpack_require__(/*! @app/dtos/users/user.schema */ "./libs/dtos/src/users/user.schema.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NotesService = class NotesService {
    constructor(userModel, noteModel) {
        this.userModel = userModel;
        this.noteModel = noteModel;
    }
    createNote(userId, title) {
        return this.noteModel.create({
            title: title,
            ownerId: userId,
            participants: [userId],
            content: '',
        });
    }
    updateContent(noteId, content) {
        return this.noteModel
            .findOneAndUpdate({ _id: noteId }, { content: content }, { new: true })
            .exec();
    }
    addParticipant(noteId, userId) {
        return this.noteModel
            .findOneAndUpdate({ _id: noteId, participants: { $ne: userId } }, { $addToSet: { participants: userId } }, { new: true })
            .exec();
    }
    findAll() {
        return this.noteModel.find();
    }
    async findAllByUser(userId, page, limit) {
        const skip = (page - 1) * limit;
        const notes = await this.noteModel
            .find({ participants: userId })
            .sort({ updatedAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
        const totalNotes = await this.noteModel.countDocuments({ participants: userId });
        const hasNextPage = skip + notes.length < totalNotes;
        return { notes, hasNextPage };
    }
    findById(noteId) {
        return this.noteModel.findById(noteId).exec();
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], NotesService);


/***/ }),

/***/ "./libs/dtos/src/notes/note.schema.ts":
/*!********************************************!*\
  !*** ./libs/dtos/src/notes/note.schema.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoteSchema = exports.Note = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Note = class Note {
};
exports.Note = Note;
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Note.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Note.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Note.prototype, "ownerId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Note.prototype, "participants", void 0);
exports.Note = Note = __decorate([
    (0, mongoose_1.Schema)()
], Note);
exports.NoteSchema = mongoose_1.SchemaFactory.createForClass(Note);


/***/ }),

/***/ "./libs/dtos/src/users/user.schema.ts":
/*!********************************************!*\
  !*** ./libs/dtos/src/users/user.schema.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./libs/patterns/src/notes.pattern.ts":
/*!********************************************!*\
  !*** ./libs/patterns/src/notes.pattern.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOTE_PATTERN = void 0;
exports.NOTE_PATTERN = {
    CREATE: 'notes.create',
    FIND_ALL: 'notes.findAll',
    FIND_ALL_BY_USER: 'notes.findAllByUser',
    FIND_ONE: 'notes.findOne',
    UPDATE: 'notes.update',
    ADD_USER: 'notes.addUser',
    REMOVE: 'notes.remove'
};


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************************!*\
  !*** ./apps/notes-microservice/src/main.ts ***!
  \*********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const notes_microservice_module_1 = __webpack_require__(/*! ./notes-microservice.module */ "./apps/notes-microservice/src/notes-microservice.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(notes_microservice_module_1.NotesMicroserviceModule, {
        transport: microservices_1.Transport.TCP,
        options: { port: 3003 },
    });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;