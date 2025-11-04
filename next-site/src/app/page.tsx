import { getWordPressBody } from "@/lib/wordpress";

export default function HomePage() {
  const bodyHtml = getWordPressBody();

  return (
    <div
      className="wp-legacy"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
