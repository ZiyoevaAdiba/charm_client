import { useRouter } from "next/router";
import { UrlParams } from "@consts";
import { useAppSelector } from "@store";
import { useQueryParams } from "hooks/useQueryParams";

export const Pagination = () => {
  const { page } = useRouter().query;
  const { addQueryParams } = useQueryParams();
  const totalElements = useAppSelector((state) => state.products.totalElements);
  const pageNumber = page ? parseInt(String(page)) : 1;
  const totalPages = Math.ceil(totalElements / 12);

  return !!totalElements ? (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li
          className={`page-item ${pageNumber === 1 && "disabled"}`}
          onClick={() =>
            addQueryParams([{ key: UrlParams.Page, value: pageNumber - 1 }])
          }
        >
          <span aria-hidden="true" className="page-link">
            &laquo;
          </span>
        </li>
        {Array.from(Array(totalPages).keys()).map((i) => {
          return (
            <li
              className={`page-item ${pageNumber === i + 1 && "active"}`}
              key={i}
              onClick={() =>
                addQueryParams([{ key: UrlParams.Page, value: i + 1 }])
              }
            >
              <span className="page-link">{i + 1}</span>
            </li>
          );
        })}

        <li
          className={`page-item ${pageNumber === totalPages && "disabled"} `}
          onClick={() =>
            addQueryParams([{ key: UrlParams.Page, value: pageNumber + 1 }])
          }
        >
          <span aria-hidden="true" className="page-link">
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  ) : (
    <></>
  );
};
