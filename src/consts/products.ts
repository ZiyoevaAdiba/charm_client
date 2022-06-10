import { Routes } from "./routes";

export const productsTitle = {
  en: "OUR PRODUCTS",
  ru: "НАШИ ПРОДУКЦИИ",
  tj: "МАҲСУЛОТҲОИ МО",
  ch: "我们的产品",
};

export const productsTypesTitles = {
  shoes: {
    ru: "Обувь",
    en: "Footwear",
    tj: "Пойафзол",
    ch: "鞋",
  },
  leather: { ru: "Кожа", en: "Leather", tj: "Чарм", ch: "皮革" },
  belts: { ru: "Ремни", en: "Belts", tj: "Ремҳо", ch: "腰带" },
  soles: { ru: "Подошва", en: "Shoe sole", tj: "Подошҳое", ch: "鞋底" },
};

export const productsTypes = [
  {
    title: productsTypesTitles.shoes,
    description: {
      ru: "Производство обуви является одним из основных направлений деятельности нашего предприятия, мы обращаем особое внимание к качеству и технологиии ее обработки и всегда стараемся, чтобы наша продукция отвечала к современным потребностям. А также предприятие готово производить обувь по заявку клиентов.",
      en: "Manufacture of footwear is one of the main activities of our company, we pay special attention to the quality and technology of its processing and always try to ensure that our products meet modern needs. The company is also ready to produce shoes according to customers’ request.",
      tj: "Истеҳсоли пойафзол яке аз самтҳои асосии фаолияти корхонаи мо буда, ба сифат ва технологияи коркарди он диққати махсус медиҳем ва ҳамавақт кушиш менамоем, ки маҳсулоти мо ба талаботҳои замона ҷавобгу бошад. Инчунин корхона омодааст пойафзолҳоро дар асосӣ дархости мизоҷон истеҳсол намояд.",
      ch: "鞋类制造是本公司的主要活动之一，我们注重产品的质量和加工技术，始终努力使我们的产品符合现代的需求。 本公司能生产鞋子根据客户的要求。",
    },
    link: Routes.shoes,
  },
  {
    title: productsTypesTitles.leather,
    description: {
      ru: "Наше предприятие на основании принадлежащих нам современных оборудований имеет возможность изготовить высококачественную кожу из любой кожи животных, исползуемых для обработки. Наши кожи обрабативаются высококачественным турецким химическим раствороми и соответствуют мировым стандартам. По заявку клиентов мы можем обрабативать кожи с толщиной от 0,4 мм до 5 мм и предать ей необходимого чертежа.",

      tj: "Корхонаи мо дар асоси таҷҳизотҳои ҳозиразамони дар ихтиёраш дошта имкон дорад аз дилхоҳ пусти ҳайвонҳое, ки барои коркард истифода мешавад, чарми баланд сифатро омода намояд. Чармҳои мо бо маҳлулҳои кимиёии хуш сифати Туркӣ коркард шуда, ҷавобгу ба стандартҳои ҷаҳони мебошад. Бо дархости мизоҷон мо метавонем чармҳои ғафсиашон аз 0.4 мм то 5 мм –ро коркард карда ба он нақши лозимаро гузорем.",
      en: "Our company on the basis of our modern equipment has the opportunity to produce high-quality leather from any skin of animals used for processing. Our leathers are processed by high quality Turkish chemical solutions and meet world standards. On the request of clients, we can handle leather with a thickness of 0.4 mm to 5 mm and give it the necessary drawing.",
      ch: "本公司以自己的现代化设备为基础，生产各种加工用动物皮的优质皮革. 我们的皮革加工高品质的土耳其化学溶液，符合世界标准。 根据要求，我们可以处理厚度从0.4毫米到5毫米的皮革，并给它必要的图纸",
    },
    link: Routes.leather,
  },
  {
    title: productsTypesTitles.soles,
    description: {
      ru: "Подошвы, производимые в нашем предприятии изготовлены из высококачественной продукций и по современной технологии, соответствуют всем временам года и мировым стандартам.",
      tj: "Подошҳое, ки дар корхонаи мо истеҳсол мешаванд аз маҳсулоти баландсифат ва бо технологияи ҳозиразамон коркард шуда, мутобиқ ба ҳамаи фасли сол ва ҷавобгу ба стандартҳои ҷаҳони мебошанд.",
      en: "The sole produced in our enterprise are made of high-quality products and by modern technology, meet all the seasons and world standards.",
      ch: "我公司生产的鞋底是优质的产品和最新的技术制成的，符合所有季节和世界标准。",
    },
    link: Routes.soles,
  },

  {
    title: productsTypesTitles.belts,
    description: {
      tj: "ҶДММ ЧАРМ ба  истеҳсоли пойафзолҳои низомӣ, корӣ ва мардона машғул буда инчунин истеҳсоли  миёнбандҳои афсарӣ ва мардонаи гуногунро ба роҳ мондааст. Мувофиқи дархост ва фармоиши мизоҷон миёнбандҳоро аз чарми табии ранга ба андоза 1метру 40 см бо паҳнои 5 см қабул менамояд.",
      ru: "ООО «ЧАРМ» занимается производством военной, рабочей и мужской обуви, а также налажено производство различных офицерских и мужских ремней. По запросу и заказу заказчика изготавливаем ремни из натуральной цветной кожи размером 1 метр 40 см шириной 5 см.",
      en: "LLC «CHARM» is engaged in the production of military, work and men's shoes, as well as the production of various officers and men's belts. On request and order of customer, we product belts made of natural colored leather in the size of 1 meter 40 cm and a width of 5 cm.",
      ch: "Charm有限公司生产工人男鞋和各种军用鞋子。并开始生产军用皮带和各种皮质品种。并以客户的订单和要求生产皮质皮带和各种彩色皮带（长1米40  宽5厘米）",
    },
    link: Routes.belts,
  },
];

export const productsMainCategories = [
  {
    title: productsTypesTitles.shoes,
    value: "1",
    path: Routes.shoes,
  },
  {
    title: productsTypesTitles.leather,
    value: "2",
    path: Routes.leather,
  },
  {
    title: productsTypesTitles.soles,
    value: "3",
    path: Routes.soles,
  },
  {
    title: productsTypesTitles.belts,
    value: "4",
    path: Routes.belts,
  },
];
