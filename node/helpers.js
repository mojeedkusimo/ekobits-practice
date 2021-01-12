module.exports = {
    name: "Elie",
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

console.log(process.env.NODE_ENV);