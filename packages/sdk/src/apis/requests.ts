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