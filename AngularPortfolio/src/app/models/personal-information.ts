export class PersonalInformation {
    id:number|undefined = 1;
    firstName: string|undefined = "Sorifullah";
    lastName : string |undefined = "Pavel";
    email : string |undefined = "sorifullahpavelgazi@gmail.com";
    phone : string |undefined = "01760802604";
    address : string |undefined = "Dhaka, Bangladesh";
    city : string |undefined;
    state : string |undefined;
    zipCode : string |undefined;
    country : string |undefined;
    profileSummary : string |undefined = 'Full Stack Software Engineer working for PerkyRabbit Corporation Ltd. Dhaka, Bangladesh.';
    currentDesignation : string |undefined = "Software Engineer";
    linkedinProfile : string |undefined;
    githubProfile : string |undefined;
    professionStartDate:Date | undefined = new Date('2022-07-24');

}


/* const date1 = new Date('2024-09-24');
const date2 = new Date('2024-09-25');

const msBetweenDates = date2.getTime() - date1.getTime();

console.log(msBetweenDates); */