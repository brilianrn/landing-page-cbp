export const sectionRoute = {
  home: "#hero",
  about: "#about",
  product: "#product",
  articles: "#articles",
  howToBuy: "#how-to-buy",
  contactUs: "#contact-us",
};

export const dashboardRoute = "/";

export const howToBuyRoute = "/how-to-buy";

export const contactUsRoute = "/contact-us";

export const aboutUsRoute = "/about-us";

const productRoutePrefix = "/product";
export const productRoute = {
  index: productRoutePrefix,
  detail: `${productRoutePrefix}/:id`,
};

const articleRoutePrefix = "/article";
export const articleRoute = {
  index: articleRoutePrefix,
  detail: `${articleRoutePrefix}/:id`,
};
