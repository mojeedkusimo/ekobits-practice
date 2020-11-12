let processArr = process.argv;

processArr.forEach((data, index) => {
    if (index > 1) {
        console.log(data);
    }
});

// console.log(process.argv);
