import { useRouter } from "next/router";
import { stringifyUrl } from "query-string";

interface IAddQueryParams {
  key: string;
  value: any;
}

export const useQueryParams = () => {
  const router = useRouter();
  const { replace, pathname, asPath, query } = router;

  /**
   * @summary Добавляет данные в query params
   *
   * @param key - имя (ключ) query params
   * @param value - значение query params
   */
  const addQueryParams = (params: IAddQueryParams[]) => {
    let newParams: Record<string, any> = {};

    for (let i = 0; i < params.length; i++) {
      newParams[params[i].key] = params[i].value;
    }

    const newPathname = stringifyUrl({
      url: pathname,
      query: { ...query, ...newParams },
    });

    const newAsPath = stringifyUrl({
      url: asPath,
      query: newParams,
    });
    console.log(newParams);

    //get data that is already in server so that page will be refreshed
    if (
      (Number(newParams.page) === 1 || newParams.page == undefined) &&
      newParams.season === undefined &&
      newParams.c === undefined &&
      newParams.subc === undefined &&
      (Number(newParams.sort) === 0 || newParams.sort == undefined)
    ) {
      replace(newPathname, newAsPath);
      return;
    }

    //do not refresh page if the page is not on server
    replace(newPathname, newAsPath, {
      shallow: true,
    });
  };

  return { addQueryParams };
};
