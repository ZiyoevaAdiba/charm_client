// import { BASE_URL } from '@utils/baseUrl';

const caseParams = (obj: Record<string, any> | undefined) =>
  obj ? "?" + new URLSearchParams(obj) : "";

  

export const Send = {
  Request: async <A>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    params?: Record<string, any>,
    data?: Record<string, any>,
    headers?: Headers
  ): Promise<A> => {
    return new Promise((resolve, reject) => {
      const queryParams = caseParams(params);
      fetch(`${process.env.NEXT_PUBLIC_API_CHARM_TJ}${url}${queryParams}`, {
        body: JSON.stringify(data),
        headers: headers,
        method: `${method}`,
      })
        .then(async (response) => {
          if (response.status === 200) {
            return response
              .json()
              .then((json) => resolve(json?.payload))
              .catch((error) => {
                return reject(error);
              });
          }
          return reject(response.json());
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
