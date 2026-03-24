import "./globals.css";

export const metadata = {
  title: "ВелоТур Юг",
  description:
    "Однодневные туры на электровелосипедах по Краснодару, Краснодарскому краю и Адыгее."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
