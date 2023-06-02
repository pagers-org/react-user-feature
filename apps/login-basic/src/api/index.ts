export const request = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
};
