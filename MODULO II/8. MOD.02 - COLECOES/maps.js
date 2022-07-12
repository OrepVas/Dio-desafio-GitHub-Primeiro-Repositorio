function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set ('Perogenes', 'Admin');
usuarios.set ('Marcos', 'Admin');
usuarios.set ('Wagner', 'User');
usuarios.set ('Nívea', 'Admin');
usuarios.set ('Gustavo', 'Admin');

console.log(getAdmins(usuarios));