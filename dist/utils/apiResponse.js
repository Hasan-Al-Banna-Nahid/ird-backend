"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotFoundResponse = exports.sendErrorResponse = exports.sendCreatedResponse = exports.sendSuccessResponse = exports.sendResponse = void 0;
const sendResponse = (res, statusCode, success, message, data, error, metadata) => {
    const response = { success };
    if (message)
        response.message = message;
    if (data)
        response.data = data;
    if (error)
        response.error = error;
    if (metadata)
        response.metadata = metadata;
    res.status(statusCode).json(response);
};
exports.sendResponse = sendResponse;
const sendSuccessResponse = (res, data, message = "Request successful", metadata) => {
    (0, exports.sendResponse)(res, 200, true, message, data, undefined, metadata);
};
exports.sendSuccessResponse = sendSuccessResponse;
const sendCreatedResponse = (res, data, message = "Resource created successfully") => {
    (0, exports.sendResponse)(res, 201, true, message, data);
};
exports.sendCreatedResponse = sendCreatedResponse;
const sendErrorResponse = (res, statusCode = 500, error = "Internal server error", message) => {
    (0, exports.sendResponse)(res, statusCode, false, message, undefined, error);
};
exports.sendErrorResponse = sendErrorResponse;
const sendNotFoundResponse = (res, message = "Resource not found") => {
    (0, exports.sendResponse)(res, 404, false, message);
};
exports.sendNotFoundResponse = sendNotFoundResponse;
