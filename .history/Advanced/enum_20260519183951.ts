// enum

// set of fixed string lateral values
// Ek jaigai thake

type UserRoles = 'Admin' | 'Editor' | 'Viewer';

const canEdit = (role: UserRoles) => {
    if (role === 'Admin' || role === 'Editor') {
        return true;
    }
    return false;
}

const isEditPermissable = canEdit()