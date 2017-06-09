
export class Donation { 
    
    name: String; 
    organization: String;
    phone: String;
    email: String;
    address: String;
    city: String;
    state: String;
    zipCode: String;
    donation: String;
 
   
   constructor(name: String, organization: String, phone: String, email: String, address: String,
    city: String,state: String, zipCode: String, donation: String) { 
    this.name = name; 
    this.organization = organization;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.donation = donation;
   }  

}