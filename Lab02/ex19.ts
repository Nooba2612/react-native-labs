const userArr = [
    { id: 1, name: "Nguyen" },
    { id: 2, name: "Man" },
];

const fetchUser = async (id: number) => {
    return await new Promise((resolve) => resolve(userArr.find((user) => user.id === id)));
};

const fetchUsers = async (ids: number[]) => {
    const userPromises = ids.map((id) => fetchUser(id));
    return await Promise.all(userPromises);
};

fetchUsers([1, 2]).then((users) => console.log(users));
