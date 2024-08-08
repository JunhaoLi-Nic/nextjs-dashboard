import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({children,}: {
  children: React.ReactNode;  //It's one of the most common types used in React for properties and return types where any renderable content is expected.
}) {
  return (
    <html lang="en">
   <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
