const userArr = [
    { id: 1, name: "Nguyen" },
    { id: 1, name: "Man" },
];

const fetchUser = async (id: number) => {
    return await new Promise((resolve) => resolve(userArr.find((user) => user.id === id)));
};

fetchUser(1).then((user) => console.log(user));
