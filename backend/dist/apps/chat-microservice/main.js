/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/chat-microservice/src/chat-microservice.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/chat-microservice/src/chat-microservice.controller.ts ***!
  \********************************************************************/
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
exports.ChatMicroserviceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_microservice_service_1 = __webpack_require__(/*! ./chat-microservice.service */ "./apps/chat-microservice/src/chat-microservice.service.ts");
let ChatMicroserviceController = class ChatMicroserviceController {
    constructor(chatMicroserviceService) {
        this.chatMicroserviceService = chatMicroserviceService;
    }
    getHello() {
        return this.chatMicroserviceService.getHello();
    }
};
exports.ChatMicroserviceController = ChatMicroserviceController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ChatMicroserviceController.prototype, "getHello", null);
exports.ChatMicroserviceController = ChatMicroserviceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_microservice_service_1.ChatMicroserviceService !== "undefined" && chat_microservice_service_1.ChatMicroserviceService) === "function" ? _a : Object])
], ChatMicroserviceController);


/***/ }),

/***/ "./apps/chat-microservice/src/chat-microservice.module.ts":
/*!****************************************************************!*\
  !*** ./apps/chat-microservice/src/chat-microservice.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatMicroserviceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_microservice_controller_1 = __webpack_require__(/*! ./chat-microservice.controller */ "./apps/chat-microservice/src/chat-microservice.controller.ts");
const chat_microservice_service_1 = __webpack_require__(/*! ./chat-microservice.service */ "./apps/chat-microservice/src/chat-microservice.service.ts");
const chat_module_1 = __webpack_require__(/*! ./chat/chat.module */ "./apps/chat-microservice/src/chat/chat.module.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let ChatMicroserviceModule = class ChatMicroserviceModule {
};
exports.ChatMicroserviceModule = ChatMicroserviceModule;
exports.ChatMicroserviceModule = ChatMicroserviceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            chat_module_1.ChatModule,
            mongoose_1.MongooseModule.forRoot('mongodb://mongo:27017/'),
        ],
        controllers: [chat_microservice_controller_1.ChatMicroserviceController],
        providers: [chat_microservice_service_1.ChatMicroserviceService],
    })
], ChatMicroserviceModule);


/***/ }),

/***/ "./apps/chat-microservice/src/chat-microservice.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/chat-microservice/src/chat-microservice.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatMicroserviceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ChatMicroserviceService = class ChatMicroserviceService {
    getHello() {
        return 'Hello World!';
    }
};
exports.ChatMicroserviceService = ChatMicroserviceService;
exports.ChatMicroserviceService = ChatMicroserviceService = __decorate([
    (0, common_1.Injectable)()
], ChatMicroserviceService);


/***/ }),

/***/ "./apps/chat-microservice/src/chat/chat.controller.ts":
/*!************************************************************!*\
  !*** ./apps/chat-microservice/src/chat/chat.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./apps/chat-microservice/src/chat/chat.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const chat_pattern_1 = __webpack_require__(/*! @app/contracts/chat.pattern */ "./libs/patterns/src/chat.pattern.ts");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    findOrCreateConversation(payload) {
        return this.chatService.findOrCreateConversation(payload.userIds, payload.name);
    }
    find(payload) {
        return this.chatService.findConversations(payload.userId);
    }
    getMessages(payload) {
        return this.chatService.getMessages(payload.conversationId, payload.page, 20);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, microservices_1.MessagePattern)(chat_pattern_1.CHAT_PATTERN.FIND_CREATE_CONVERSATION),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findOrCreateConversation", null);
__decorate([
    (0, microservices_1.MessagePattern)(chat_pattern_1.CHAT_PATTERN.FIND_USER_CONVERSATION),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "find", null);
__decorate([
    (0, microservices_1.MessagePattern)(chat_pattern_1.CHAT_PATTERN.GET_MESSAGES),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getMessages", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatController);


/***/ }),

/***/ "./apps/chat-microservice/src/chat/chat.gateway.ts":
/*!*********************************************************!*\
  !*** ./apps/chat-microservice/src/chat/chat.gateway.ts ***!
  \*********************************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./apps/chat-microservice/src/chat/chat.service.ts");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async handleConnection(client) {
        const clients = Array.from(this.server.sockets.sockets.values()).map((socket) => socket.id);
        console.log('Connected clients:', clients);
    }
    async handleSendMessage(client, payload) {
        const { conversationId, senderId, messageType, content } = payload;
        const message = await this.chatService.addMessage(conversationId, senderId, messageType, content);
        this.server.to(conversationId).emit('receiveMessage', message);
    }
    async handleJoinConversation(client, payload) {
        const { conversationId, userId } = payload;
        const isUserInConversation = await this.chatService.isUserInConversation(conversationId, userId);
        if (!isUserInConversation) {
            client.emit('error', 'User is not part of the conversation');
            return;
        }
        client.join(conversationId);
    }
    async handleLeaveConversation(client) {
        const rooms = Array.from(client.rooms);
        rooms.forEach((room) => {
            if (room !== client.id) {
                client.leave(room);
            }
        });
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinConversation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoinConversation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveConversation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleLeaveConversation", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatGateway);


/***/ }),

/***/ "./apps/chat-microservice/src/chat/chat.module.ts":
/*!********************************************************!*\
  !*** ./apps/chat-microservice/src/chat/chat.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./apps/chat-microservice/src/chat/chat.service.ts");
const chat_gateway_1 = __webpack_require__(/*! ./chat.gateway */ "./apps/chat-microservice/src/chat/chat.gateway.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const conversation_schema_1 = __webpack_require__(/*! @app/dtos/chat/conversation.schema */ "./libs/dtos/src/chat/conversation.schema.ts");
const message_schema_1 = __webpack_require__(/*! @app/dtos/chat/message.schema */ "./libs/dtos/src/chat/message.schema.ts");
const chat_controller_1 = __webpack_require__(/*! ./chat.controller */ "./apps/chat-microservice/src/chat/chat.controller.ts");
const user_schema_1 = __webpack_require__(/*! @app/dtos/users/user.schema */ "./libs/dtos/src/users/user.schema.ts");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: conversation_schema_1.Conversation.name, schema: conversation_schema_1.ConversationSchema },
                { name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
            ]),
        ],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_gateway_1.ChatGateway, chat_service_1.ChatService],
    })
], ChatModule);


/***/ }),

/***/ "./apps/chat-microservice/src/chat/chat.service.ts":
/*!*********************************************************!*\
  !*** ./apps/chat-microservice/src/chat/chat.service.ts ***!
  \*********************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatService = void 0;
const conversation_schema_1 = __webpack_require__(/*! @app/dtos/chat/conversation.schema */ "./libs/dtos/src/chat/conversation.schema.ts");
const message_schema_1 = __webpack_require__(/*! @app/dtos/chat/message.schema */ "./libs/dtos/src/chat/message.schema.ts");
const user_schema_1 = __webpack_require__(/*! @app/dtos/users/user.schema */ "./libs/dtos/src/users/user.schema.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ChatService = class ChatService {
    constructor(conversationModel, messageModel, userModel) {
        this.conversationModel = conversationModel;
        this.messageModel = messageModel;
        this.userModel = userModel;
    }
    async findOrCreateConversation(userIds, name) {
        let conversation = await this.conversationModel.findOne({
            participants: { $size: userIds.length, $all: userIds },
        });
        if (!conversation) {
            conversation = new this.conversationModel({
                participants: userIds,
                name: name,
            });
            await conversation.save();
        }
        return conversation;
    }
    async findConversations(userId) {
        const conversations = await this.conversationModel
            .find({ participants: userId })
            .sort({ updatedAt: -1 })
            .exec();
        const populatedConversations = await Promise.all(conversations.map(async (conversation) => {
            const participants = await this.userModel
                .find({ _id: { $in: conversation.participants } }, '_id username')
                .exec();
            const lastMessage = await this.messageModel
                .findOne({ conversationId: conversation._id })
                .sort({ createdAt: -1 })
                .exec();
            return {
                ...conversation.toObject(),
                participants: participants.map((participant) => ({
                    id: participant._id,
                    username: participant.username,
                })),
                lastMessage: lastMessage ? lastMessage.toObject() : null,
            };
        }));
        return populatedConversations;
    }
    async isUserInConversation(conversationId, userId) {
        const conversation = await this.conversationModel
            .findById(conversationId)
            .exec();
        if (!conversation) {
            throw new Error('Conversation not found');
        }
        return conversation.participants.includes(userId);
    }
    async addMessage(conversationId, senderId, messageType, content) {
        const message = new this.messageModel({
            conversationId,
            senderId,
            messageType,
            content,
        });
        console.log(content);
        await this.conversationModel.findByIdAndUpdate(conversationId, {
            updatedAt: new Date(),
        });
        return message.save();
    }
    async getMessages(conversationId, page, nbElements) {
        const messages = await this.messageModel
            .find({ conversationId })
            .sort({ createdAt: -1 })
            .skip((page - 1) * nbElements)
            .limit(nbElements)
            .exec();
        messages.reverse();
        const uniqueSenderIds = [
            ...new Set(messages.map((message) => message.senderId)),
        ];
        const senders = await this.userModel
            .find({ _id: { $in: uniqueSenderIds } }, '_id username')
            .exec();
        const senderMap = new Map(senders.map((sender) => [sender._id.toString(), sender.username]));
        const messagesWithUsernames = messages.map((message) => ({
            ...message.toObject(),
            senderUsername: senderMap.get(message.senderId.toString()),
        }));
        return messagesWithUsernames;
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __param(1, (0, mongoose_1.InjectModel)(message_schema_1.Message.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], ChatService);


/***/ }),

/***/ "./libs/dtos/src/chat/conversation.schema.ts":
/*!***************************************************!*\
  !*** ./libs/dtos/src/chat/conversation.schema.ts ***!
  \***************************************************/
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
exports.ConversationSchema = exports.Conversation = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Conversation = class Conversation extends mongoose_2.Document {
};
exports.Conversation = Conversation;
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Schema.Types.ObjectId], required: true }),
    __metadata("design:type", Array)
], Conversation.prototype, "participants", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Conversation.prototype, "name", void 0);
exports.Conversation = Conversation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Conversation);
exports.ConversationSchema = mongoose_1.SchemaFactory.createForClass(Conversation);


/***/ }),

/***/ "./libs/dtos/src/chat/message.schema.ts":
/*!**********************************************!*\
  !*** ./libs/dtos/src/chat/message.schema.ts ***!
  \**********************************************/
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
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Message = class Message extends mongoose_2.Document {
};
exports.Message = Message;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Conversation', required: true }),
    __metadata("design:type", String)
], Message.prototype, "conversationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Message.prototype, "messageType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, required: true }),
    __metadata("design:type", String)
], Message.prototype, "senderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
exports.Message = Message = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Message);
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);


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

/***/ "./libs/patterns/src/chat.pattern.ts":
/*!*******************************************!*\
  !*** ./libs/patterns/src/chat.pattern.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CHAT_PATTERN = void 0;
exports.CHAT_PATTERN = {
    FIND_CREATE_CONVERSATION: 'chat.findOrCreate',
    FIND_USER_CONVERSATION: 'chat.find',
    GET_MESSAGES: 'chat.getMessages',
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

/***/ "@nestjs/platform-socket.io":
/*!*********************************************!*\
  !*** external "@nestjs/platform-socket.io" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

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
/*!********************************************!*\
  !*** ./apps/chat-microservice/src/main.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const chat_microservice_module_1 = __webpack_require__(/*! ./chat-microservice.module */ "./apps/chat-microservice/src/chat-microservice.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ "@nestjs/platform-socket.io");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const rmqMicroservice = await core_1.NestFactory.createMicroservice(chat_microservice_module_1.ChatMicroserviceModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
            queue: 'chat_queue',
            queueOptions: {
                durable: false
            },
        },
    });
    rmqMicroservice.listen();
    const app = await core_1.NestFactory.create(chat_microservice_module_1.ChatMicroserviceModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    await app.listen(4000);
    logger.log('WebSocket Server is running on port 4000');
}
bootstrap();

})();

/******/ })()
;