export class User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    countryRegion: string;
    address: string;
    city: string;
    stateOrProvince: string;
    postalCode: string;
    email: string;
    phone: string;
    role: string;

    constructor(username: string,
                password: string,
                firstName: string,
                middleName: string,
                lastName: string,
                gender: string,
                dateOfBirth: Date,
                countryRegion: string,
                address: string,
                city: string,
                stateOrProvince: string,
                postalCode: string,
                email: string,
                phone: string,
                role: string) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.countryRegion = countryRegion;
        this.address = address;
        this.city = city;
        this.stateOrProvince = stateOrProvince;
        this.postalCode = postalCode;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
}
