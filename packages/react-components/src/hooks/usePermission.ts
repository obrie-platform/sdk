export enum Permission {
    UserDetails = 'userDetails'
}

export enum PermissionStatus {
    Granted,
    Rejected,
    Error
}

export const usePermission = (permission: Permission | Permission[], callback: (status: PermissionStatus) => any) => {
}
