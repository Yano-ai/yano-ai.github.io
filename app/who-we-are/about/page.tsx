import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about us.',
};

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Welcome to our about page.
      </p>
      <p>
        <Link href="/who-we-are/about/team/willart-yao">Willart Yao</Link>
      </p>
      <p>
        <Link href="/who-we-are/about/team/gemini-ai">Gemini AI</Link>
      </p>
    </main>
  );
}
