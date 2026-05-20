// as const
// Unchangeable values with 'as const' assertion
// 1. typeof operator
// 2. keyof operator
// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }

const userRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer'
} as const;

const canEditPermission = (role: typeof userRoles[keyof typeof userRoles]) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    return false;
}

const isEditPermissable = canEdit(userRoles.Admin)
console.log(isEditPermissable)