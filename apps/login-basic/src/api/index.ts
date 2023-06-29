import nodeFetch, { RequestInit as NodeRequestInit } from 'node-fetch';

type CustomRequestInit = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown>;
};

export const request = async <TResponse>(url: string, config: CustomRequestInit = {}): Promise<TResponse> => {
  config.headers = { 'Content-Type': 'application/json' };

  const parsedConfig = (config.body ? { ...config, body: JSON.stringify(config.body) } : config) as RequestInit;
  return fetch(url, parsedConfig)
    .then((response) => response.json())
    .then((data) => data as TResponse);
};

export const nodeRequest = async <TResponse>(url: string, config: NodeRequestInit = {}): Promise<TResponse> => {
  return nodeFetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
};
