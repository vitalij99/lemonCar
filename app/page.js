import localFont from "next/font/local";
import Hero from "./_componets/Hero/Hero";

const heroFont = localFont({
    src: "../fonts/AllrounderMonumentTest-Book.otf",
});

export default function Home() {
    return (
        <main>
            <Hero font={heroFont.className} />
        </main>
    );
}
