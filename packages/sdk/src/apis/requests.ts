import {MapMarker} from "..";

export function requestUserLocation(): Promise<[number, number]> {
    return Promise.resolve([1,1]);
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export function requestUserDetails(): Promise<UserDetails> {
    return Promise.resolve(null);
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export function openApp(appId: string): Promise<void> {
    return Promise.resolve(null);
}

export type PaymentMethod = 'card' | 'cash'

export abstract class OrderModule {
    type: string;
    configuration: Record<string, any> = {}

    constructor(options: Record<string, any>, type: string) {
        this.type = type
        this.configuration = options
    }
}
export interface OrderStatus {
    key: string;
    label: string;
}

export class MapTrackingModule extends OrderModule {
    constructor(options: {
        markers: MapMarker[]
    }) {
        super(options, 'mapTracking')
    }
}

export class StatusModule extends OrderModule {
    constructor(options: {
        statuses: OrderStatus[],
        initialStatusKey: string
    }) {
        super(options, 'status')
    }
}

export function createOrder(order: {
    paymentMethods: PaymentMethod[]
    modules: OrderModule[]
}): Promise<void> {
    return Promise.resolve(null);
}

createOrder({
    paymentMethods: ["card"],
    modules: [
        new StatusModule({
            statuses: [
                { key: 'Created', label: 'Order created' }
            ],
            initialStatusKey: 'Created'
        })
    ]
})