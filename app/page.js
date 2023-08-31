import localFont from "next/font/local";
import Hero from "./_componets/Hero/Hero";
import Available from "./_componets/Available/Available";

const heroFont = localFont({
    src: "../fonts/AllrounderMonumentTest-Book.otf",
});

export default function Home() {
    return (
        <main className={heroFont.className}>
            <Hero />
            <Available />
        </main>
    );
}
