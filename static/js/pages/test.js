/**
 * Created by shenlisha on 2018/9/30.
 */
export class Test {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(this.name + 'can speak.');
	}
}