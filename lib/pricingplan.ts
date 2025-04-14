export type PricingPlan = {
    level: string;
    price: string;
    services: string[];
}

export const pricingPlan : PricingPlan[] = [
    {
        level: 'Free',
        price: '$0/month',
        services: [
            'Generate 5 forms per month',
            'Access to basic templates',
            'Email support'
        ]
    },
    {
        level: 'Pro',
        price: '$39.99/month',
        services: [
            'Generate unlimited forms',
            'Access to all templates',
            'Priority email support'
        ]
    },
    {
        level: 'Enterprise',
        price: '$79.99/month',
        services: [
            'Custom form generation',
            'Dedicated account manager',
            '24/7 support'
        ]
    }
]