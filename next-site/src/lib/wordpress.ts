import { cache } from "react";
import path from "path";
import fs from "fs";
import { load } from "cheerio";

const htmlFilePath = path.join(process.cwd(), "..", "index.html");

const loadDocument = () => {
  const fileContent = fs.readFileSync(htmlFilePath, "utf-8");
  return load(fileContent);
};

export const getWordPressBody = cache(() => {
  const $ = loadDocument();
  const body = $("body");
  return body.html() ?? "";
});

export const getCookieConsentConfig = cache(() => {
  const $ = loadDocument();
  const script = $("script#locomotive-cookie-consent-js-before");
  return script.html()?.trim() ?? "";
});

export type HeadTag = {
  tagName: "link" | "meta";
  attributes: Record<string, string>;
};

export const getFavicons = cache((): HeadTag[] => {
  const $ = loadDocument();
  const tags: HeadTag[] = [];

  $(
    "link[rel='icon'], link[rel='apple-touch-icon'], link[rel='manifest'], link[rel='preload'][as='font'], meta[name='theme-color'], meta[name='msapplication-TileImage']"
  ).each((_, element) => {
    const tagName = element.tagName as "link" | "meta";
    const attribs = element.attribs ?? {};
    tags.push({ tagName, attributes: attribs });
  });

  return tags;
});
