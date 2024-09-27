import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-1 row-start-2 items-center justify-items-center sm:items-start">
        <p className="text-gray-300 text-center w-full text-sm">Email me at:</p>
        <a href="mailto:roel.de.jeu@gmail.com">
          <p className="text-xl font-bold hover:underline underline-offset-1">
            roel.de.jeu@gmail.com
          </p>
        </a>
        <p className="text-gray-300 italic text-center w-full text-sm">
          {" "}
          Page is a WIP
        </p>
      </main>
      <Footer />
    </div>
  );
}
