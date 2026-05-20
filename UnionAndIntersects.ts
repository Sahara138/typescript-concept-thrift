// union |

type userRole = "admin" | "editor" | "viewer";

const getDashboard = (role: userRole) => {
    if (role === "admin") {
        return "Admin Dashboard";   
    } else if (role === "editor") {
        return "Editor Dashboard";
    } else {
        return "Viewer Dashboard";
    }
}
(getDashboard("admin")); // Admin Dashboard

// intersection &

type Employee = {
    id: number,
    name: string,
    age: number,
    department: string,
}

type Manager    = {
    id: number,
    name: string,
    age: number,
    designation: string,
    teamSize: number,

}

type ManagementEmployee = Employee & Manager;

const manager1 : ManagementEmployee = {
    id: 1,
    name: "John Doe",
    age: 35,
    department: "Engineering",
    designation: "Software Engineer",
    teamSize: 5
};

