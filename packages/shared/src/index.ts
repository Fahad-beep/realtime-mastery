export interface BaseResponse {
  status: string;
  timestamp: string;
}

export function generateMetaResponse(status: string): BaseResponse {
  return {
    status,
    timestamp: new Date().toISOString(),
  };
}
