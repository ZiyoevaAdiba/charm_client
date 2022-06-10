import Head from "next/head";

const Page500 = () => {
  return (
    <>
      <Head>
        <title>Ошибка сервера</title>
      </Head>
      <div className="my-11">
        <div className="mb-6 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/500.svg" alt="500" />
        </div>

        <div className="text-center">
          <h5 className="font-family-bold text-2xl leading-9 mb-3">
            Ошибка сервера
          </h5>
          <p className="mb-4 text-gray-500">
            Мы уже знаем об этой проблеме и пытаемся решить всеми <br />
            силами. Попробуйте обновить страницу через некоторое время.
          </p>
          <button className="btn" onClick={() => location.reload()}>
            Обновить страницу
          </button>
        </div>
      </div>
    </>
  );
};

export default Page500;
