import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import { Axis3dIcon, Building2Icon, ListStartIcon } from "lucide-react";
import { desc } from "motion/react-client";

const VALUES = [
    {
        id: 'value-startegy',
        title: 'Strategy first',
        icon: ListStartIcon,
        description: 'We start with a clear strategy and build a product that solves real problems. We focus on user research, information architecture, and product flows that solve real problems.'
    },
    {
        id: 'value-craft',
        title: 'Craft driven',
        icon: Axis3dIcon,
        description: 'We design with craft, not with a blueprint. We build modern web products using component-driven development, automated testing, and performance-first best practices. Our code is documented and deliverable-ready.'
    },
    {
        id: 'value-business',
        title: 'Business minded',
        icon: Building2Icon,
        description: 'We understand the business and its needs. We craft messaging that fits your brand and speaks to real user needs — from hero lines and product microcopy to onboarding flows and launch email sequences.'
    }
]

export function Values() {
    return (
        <section className="pt-12 pb-16 px-8">
            <div className="container">
                <TextStaggerInview as="h2" animation="bottom" className="md:w-2/3 text-3xl font-semibold mb-6">Bold brands Beautiful products Real growth</TextStaggerInview>

                <div className="flex gap-6 flex-wrap">
                    {
                        VALUES.map((value) => 
                            <div key={value.id} className="md:flex-1 p-6 border rounded-xl">
                                <div className="bg-muted w-fit mb-10 p-4 place-content-center text-center rounded">
                                    <value.icon className="text-muted-foreground size-6" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold">{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}