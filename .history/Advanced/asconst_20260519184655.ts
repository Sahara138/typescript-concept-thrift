// as const
// set of fixed string lateral values
// Ek jaigai thake

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

const canEdit = (role: typeof userRoles[keyof typeof userRoles]) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    return false;
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable)