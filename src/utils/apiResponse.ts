import { Response } from "express";

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  metadata?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message?: string,
  data?: T,
  error?: string,
  metadata?: {
    total?: number;
    page?: number;
    limit?: number;
  }
): void => {
  const response: ApiResponse<T> = { success };

  if (message) response.message = message;
  if (data) response.data = data;
  if (error) response.error = error;
  if (metadata) response.metadata = metadata;

  res.status(statusCode).json(response);
};

export const sendSuccessResponse = <T>(
  res: Response,
  data?: T,
  message: string = "Request successful",
  metadata?: {
    total?: number;
    page?: number;
    limit?: number;
  }
): void => {
  sendResponse(res, 200, true, message, data, undefined, metadata);
};

export const sendCreatedResponse = <T>(
  res: Response,
  data?: T,
  message: string = "Resource created successfully"
): void => {
  sendResponse(res, 201, true, message, data);
};

export const sendErrorResponse = (
  res: Response,
  statusCode: number = 500,
  error: string = "Internal server error",
  message?: string
): void => {
  sendResponse(res, statusCode, false, message, undefined, error);
};

export const sendNotFoundResponse = (
  res: Response,
  message: string = "Resource not found"
): void => {
  sendResponse(res, 404, false, message);
};
