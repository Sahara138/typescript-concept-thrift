// as const
// set of fixed string lateral values
// Ek jaigai thake

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

enum UserRoles {
    admin = 'Admin',
    editor = 'Editor',
    Viewer = 'Viewer'
}
const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    return false;
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable)