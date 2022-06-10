import {
  companyAddress,
  contactsButton,
  contactsDataTitle,
  contactsFields,
  contactsTextarea,
  contactsTitle,
} from "@consts";
import { contactType, ILangTitles } from "@interfaces";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const Contacts = () => {
  const { locale } = useRouter();

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const initialFormData = {
    name: "",
    email: "",
    body: "",
    phoneNumber: "",
  };

  const [contacts, setContacts] = useState(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !contacts.name ||
      !contacts.email ||
      !contacts.body ||
      !contacts.phoneNumber
    ) {
      setIsError(true);
      setIsSuccess(false);
      return;
    }
    setIsError(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
    fetch(`${process.env.NEXT_PUBLIC_API_CHARM_TJ}api/email/sendemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contacts),
    });
    setContacts(initialFormData);
  };

  return (
    <section id="contacts" className="bg-light">
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <div className="py-5">
          <h2 className="text-center text-uppercase">
            {contactsTitle[locale as ILangTitles]}
          </h2>
        </div>
      </div>
      <div
        className="row p-3 py-0 p-md-5 pb-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="col-sm-6">
          <form
            className="p-1 p-sm-3 py-0 d-flex flex-column gap-3"
            onSubmit={handleSubmit}
          >
            {contactsFields.map((item: any, index: number) => (
              <div key={index}>
                <label htmlFor={item.id}>
                  {item.label[locale as ILangTitles]}
                </label>
                <input
                  type={item.type}
                  id={item.id}
                  className="form-control p-2  form-inputs"
                  onChange={handleChange}
                  name={item.id}
                  value={contacts[item.id as contactType]}
                />
              </div>
            ))}

            <div className="mb-3">
              <label htmlFor="body">
                {contactsTextarea[locale as ILangTitles]}
              </label>
              <textarea
                className="form-control form-inputs "
                id="body"
                rows={7}
                onChange={handleChange}
                name="body"
                value={contacts.body}
              ></textarea>
              {isError && (
                <div className="text-danger mt-2" role="alert">
                  Заполните все поля
                </div>
              )}
              {isSuccess && (
                <div className="text-success mt-2" role="alert">
                  Сообщение успешно отправлено
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary mb-3 text-white">
              {contactsButton[locale as ILangTitles]}
            </button>
          </form>
        </div>
        <div className="col-sm-6">
          <div className="contacts ">
            <ul>
              <h4 className="py-2">
                {contactsDataTitle[locale as ILangTitles]}
              </h4>
              {companyAddress.map((item: any, index) => (
                <li key={index} className="d-flex">
                  <i className={`${item.className} pe-2 py-1`}></i>
                  <p>{item.title.ru ? item.title.ru : item.title}</p>
                </li>
              ))}
              <li className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12483.72353696188!2d68.76373309864938!3d38.53536136040167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d0fd0950c0f5%3A0x8e33af2b92fa0d8f!2z0KTQuNGA0LzQtdC90L3Ri9C5INC80LDQs9Cw0LfQuNC9ICLQn9C-0LnQsNGE0LfQvtC70Lgg0YfQsNGA0LzToyI!5e0!3m2!1sen!2s!4v1652156913889!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
