import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";

export const LanguageSelector = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(asPath, asPath, { locale });
  };

  return (
    <select
      className="selectpicker nav-link text-primary p-2"
      defaultValue={locale}
      onChange={handleLanguage}
    >
      <option value="ru">РУ</option>
      <option value="tj">ТҶ</option>
      <option value="en">EN</option>
      <option value="ch">中文</option>
    </select>
  );
};
