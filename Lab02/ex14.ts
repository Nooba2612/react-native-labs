const asyncFunc = async (num: number): Promise<number> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
};

asyncFunc(10000).then((result) => {
    console.log(result);
});
