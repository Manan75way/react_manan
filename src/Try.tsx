function Try(){
    let name: (string | number)[];
    name = ["d", "d", "d", "k", "s", 345, "m", "j", 34];
  
    // type Person = {
    //   name: string;
    //   age?: number;
    //   isUser?: boolean;
    // };
  
    // type Person1 = Person & {
    //   profession: string;
    // };
  
    // let person: Person1 = {
    //   name: "ram",
    //   profession: "God",
    // };
  
    // let lotsOfPeople: Person1[];
    // lotsOfPeople = [
    //   { name: "ram1", profession: "god" },
    //   { name: "ram2", profession: "god" },
    // ];
  
    // let printName = (name: string): void => {
    //   console.log(name);
    // };
    // printName("Ram");
  
    type printMyname = (names: string) => void;
  
    let printName: printMyname = (name) => {
      console.log(name);
    };
    printName("Ram");
  
    interface Person {
      name: string;
      age?: number;
    }
  
    interface Person1 extends Person {
      profession: string[];
    }
  
    let person: Person1 = {
      name: "Ram",
      profession: ["god", "creator"],
    };
  
}

export default Try;