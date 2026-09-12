import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="site-shell">
   		 <Navbar />

			<div className="lg:ml-60">
				<div className="mx-auto max-w-5xl px-6 lg:px-8">
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Experience />
					<Certifications />
					<Footer />
				</div>
			</div>
		</main>
    );
}