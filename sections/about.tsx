import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";


export function About () {
return (
    <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto space-y-6 ">
            <h3 className="text-nowrap mt-1 text-xs font-medium uppercase tracking-wide text-primary">/ our story</h3>
            <TextStaggerInview stagger={0.005} className="text-xl leading-relaxed">
            Focused, strategy-led studio that marries brand thinking with product design and frontend engineering to build digital experiences people remember. We start with research to find what matters, design clear, usable interfaces, and ship performant, accessible front-ends you can iterate on. Small team, senior talent, measurable outcomes — fewer rewrites, faster launches, and products that actually move the needle.
            </TextStaggerInview>
        </div>
    </section>
)}