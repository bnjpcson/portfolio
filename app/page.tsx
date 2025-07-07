import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <section className="h-screen">Main content section</section>
        <article className="h-screen">
          Standalone content like a blog post or news article
        </article>
        <aside>Related links, ads, side content</aside>
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
}
