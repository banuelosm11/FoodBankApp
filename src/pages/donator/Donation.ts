
export class Donation { 
   //field 
    name: String; 
    organization: String;
    phone: String;
    email: String;
    donation: String;
 
   //constructor 
   constructor(name: String, organization: String, phone: String, email: String, donation: String) { 
    this.name = name; 
    this.organization = organization;
    this.phone = phone;
    this.email = email;
    this.donation = donation;
   }  

}