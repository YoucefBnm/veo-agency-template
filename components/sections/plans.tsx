import { cn } from '@/lib/utils';
import {
  FloatingElementItem,
  FloatingElements,
} from '../systaliko-ui/floating-elements';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CheckIcon } from 'lucide-react';
import { Separator } from '../ui/separator';

interface PlanT {
  id: string;
  label: string;
  price: number;
  description: string;
  features: string[];
}
const PLANS_DATA: PlanT[] = [
  {
    id: 'plan-landing',
    label: 'One page',
    price: 300,
    description: 'A one page landing page for your business',
    features: [
      'Customize the page with your own branding',
      'Include a call to action button',
      'Choose from a variety of pre-designed templates',
      'Add your own content and images',
      'Integrate with popular tools like Google Analytics and Mailchimp',
      'Get a free domain name and SSL certificate',
      'Access to our community of designers and developers',
    ],
  },
  {
    id: 'plan-website',
    label: 'Full website',
    price: 800,
    description: 'A full website for your business',
    features: [
      'Fully customizable with your own branding',
      'Up to 10 pages',
      'Choose from a variety of pre-designed templates',
      'Add your own content and images',
      'Integrate with popular tools like Google Analytics and Mailchimp',
      'Get a free domain name and SSL certificate',
      'Access to our community of designers and developers',
    ],
  },
];

function PlanCard({
  plan,
  ...props
}: React.ComponentProps<'div'> & { plan: PlanT }) {
  return (
    <div {...props}>
      <div className="flex items-center gap-2">
        <Badge variant={'outline'} className="bg-primary/15">
          {plan.label}
        </Badge>
        <span className="text-xs">{plan.description}</span>
      </div>

      <div className="my-6">
        <span className="text-foreground/80">Starts at</span>
        <div className="flex items-center gap-4">
          <span className="font-extrabold text-4xl tabular-nums">
            ${plan.price}
            <sup className="text-xs align-super">usd</sup>
          </span>
          <span className="text-xs text-foreground/80">one time payment</span>
        </div>
      </div>

      <Button variant={'secondary'} className="w-full" size="lg">
        Start your project
      </Button>

      <Separator className="my-10" />

      <div className="space-y-4">
        <p>What's included</p>
        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs">
              <div className="aspect-square border border-foreground/30 rounded-full p-0.5 bg-foreground/40">
                <CheckIcon className="size-2.5 stroke-[2.5] stroke-background" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function Plans() {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto space-y-10">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h2 className="font-bold text-3xl text-balance">Our Plans</h2>
          <p className="max-w-[45ch] text-muted-foreground text-balance text-sm">
            We offer a variety of plans to suit your needs and budget. Our plans
            are designed to provide flexibility and customization to fit your
            specific requirements.
          </p>
        </div>

        <FloatingElements className="flex gap-8 justify-center flex-wrap">
          {PLANS_DATA.map((plan) => (
            <FloatingElementItem
              className="rounded-xl bg-card p-8 ring ring-ring/20 shadow nth-[2]:bg-primary nth-[2]:text-primary-foreground  first:-rotate-3 nth-[2]:rotate-4 "
              key={plan.id}
              intensity={5}
            >
              <PlanCard plan={plan} className="" />
            </FloatingElementItem>
          ))}
        </FloatingElements>
      </div>
    </section>
  );
}
