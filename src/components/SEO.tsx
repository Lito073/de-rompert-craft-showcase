import { useEffect } from "react";
import { getCanonicalUrl, SITE_NAME } from "@/data/locations";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "business.business";
};

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const SEO = ({ title, description, path = "/", type = "website" }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);

    document.title = title;
    setMeta('meta[name="title"]', "content", title);
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[name="twitter:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [description, path, title, type]);

  return null;
};

export default SEO;
