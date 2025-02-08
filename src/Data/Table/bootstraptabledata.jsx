import { AlertCircle, AlertTriangle, CheckCircle } from "react-feather"

export const inverse = [
  {
    id: 1,
    firstName: "Stephan",
    lastName: "Laiten",
    office: "Tokyo",
    role: "Accountant",
    salary: "$2100.00",
    age: 20,
    join: "21/01/2023"
  },
  {
    id: 2,
    firstName: "Fay",
    lastName: "Van Damme",
    office: "London",
    role: "CEO",
    salary: "$1420.00",
    age: 22,
    join: "14/02/2022"
  },
  {
    id: 3,
    firstName: "Brevin",
    lastName: "Oleveria",
    office: "New York",
    role: "Software Engineer",
    salary: "$1340.00",
    age: 18,
    join: "04/06/2023"
  },
  {
    id: 4,
    firstName: "Regina",
    lastName: "Ottandy",
    office: "France",
    role: "Pre-sale Support",
    salary: "$3400.00",
    age: 25,
    join: "10/08/2023"
  },
  {
    id: 5,
    firstName: "Vani",
    lastName: "Shah",
    office: "Los Angeles",
    role: "Senior Developer",
    salary: "$3500.00",
    age: 28,
    join: "23/07/2023"
  }
]

export const Hovertabledata = [
  {
    id: 1,
    icon:<AlertTriangle/>,
    status: "No Signal",
    signalName: "Astrid: NE Shared managed",
    security: "Medium",
    stage: "Triaged",
    schedule: "0.33",
    bgClass: "bg-light-primary font-primary",
    teamLead: "Chase Nguyen"
  },
  {
    id: 2,
    icon: <AlertTriangle/>,
    status: "Offline",
    signalName: "Cosmo: prod shared ares",
    security: "Huge",
    stage: "Triaged",
    schedule: "0.39",
    bgClass: "bg-light-danger font-danger",
    teamLead: "Brie Furman"
  },
  {
    id: 3,
    icon: <AlertCircle/>,
    status: "Online",
    signalName: "Phoenix: prod shared lyra-lists",
    security: "Minor",
    stage: "No Triaged",
    schedule: "3.12",
    bgClass: "bg-light-success font-success",
    teamLead: "Jeremy Lake"
  },
  {
    id: 4,
    icon: <CheckCircle/>,
    status: "No Signal",
    signalName: "Astrid: NE Shared managed",
    security: "Negligible",
    stage: "triaged",
    schedule: "13.18",
    bgClass: "bg-light-primary font-primary",
    teamLead: "Angelica Howards"
  },
  {
    id: 5,
    icon: <CheckCircle/>,
    status: "Online",
    signalName: "Astrid: NE Shared managed",
    security: "Negligible",
    stage: "triaged",
    schedule: "5.33",
    bgClass: "bg-light-success font-success",
    teamLead: "Diane Okuma"
  },
]

export const Inversetabaledata = [
  {
    id: 1,
    firstname: "Ram Jacob",
    lastname: "Wolfe",
    company: "Apple Inc.",
    credit: "$3500.00",
    email: "RamJacob@twitter",
    role: "Developer",
    country: "IND"
  },
  {
    id: 2,
    firstname: "John Deo",
    lastname: "Gummer",
    company: "Hewlett packard",
    credit: "$2400.00",
    email: "JohnDeo@twitter",
    role: "Designer",
    country: "US"
  },
  {
    id: 3,
    firstname: "Elana John",
    lastname: "Cazale",
    company: "Microsoft",
    credit: "$2560.00	",
    email: "ElanaJohn@twitter",
    role: "Designer",
    country: "UK"
  },
  {
    id: 4,
    firstname: "Meryl Streep",
    lastname: "Roberts",
    company: "Tata Ltd.",
    credit: "$1870.00",
    email: "MerylStreep@twitter",
    role: "Developer",
    country: "IND"
  },
  {
    id: 5,
    firstname: "Emma Stone",
    lastname: "Stone",
    company: "Wipro Ltd.",
    credit: "$4580.00",
    email: "EmmaStone@twitter",
    role: "Developer",
    country: "IND"
  },
  {
    id: 6,
    firstname: "Eliana Jons",
    lastname: "jons",
    company: "Info Ltd.",
    credit: "$3910.00",
    email: "ElianaJons@twitter",
    role: "Developer",
    country: "IND"
  }
]

export const Captiontabledata = [
  {
    id: 1,
    firstName: "Mark",
    name: "Elana Robbert",
    email: "ElanaRob@gmail.com",
    lastName: "Otto",
    exp: "1 Year",
    sex: "Male",
    contact: "+91 9789887777",
    userName: "Mark@twitter",
    age: "28",
    dessert: "KitKat",
    calories: "518",
    fat: "26",
    price: "20"
  },
  {
    id: 2,
    firstName: "Elana",
    name: "Stiphen Deo",
    email: "Stiphen@yahoo.com",
    lastName: "Thornton",
    exp: "6 Month",
    sex: "Female",
    contact: "+91 9874563210",
    userName: "Elana@twitter",
    age: "22",
    dessert: "Donut",
    calories: "452",
    fat: "25",
    price: "80"
  },
  {
    id: 3,
    firstName: "Larry",
    name: "Genelia Ottre",
    email: "Genelia@gmail.com",
    lastName: "Otthe Birdto",
    exp: "2 Days",
    sex: "Male",
    contact: "+91 8794562135",
    userName: "Larry@twitter",
    age: "24",
    dessert: "Eclair",
    calories: "262",
    fat: "16",
    price: "10"
  },
]

export const stripedrowtabledata =[
  {
    id: 1,
    firstname:'Harward',
    lastname:'Mark',
    game:'Football',
    points:'126'
  },
  {
    id: 2,
    firstname:'Jackson',
    lastname:'Depth',
    game:'Wallyball',
    points:'96'
  },
  {
    id: 3,
    firstname:'Piter',
    lastname:'Samson',
    game:'Cricket',
    points:'185'
  },
]
export const stripedwithinverse =[
  {
    id: 1,
    dessert:'Kitkat',
    type:'Ice-cream',
    calories:'518',
    weigth:'250ml',
    fat:'28',
    price:'60',
  },
  {
    id: 2,
    dessert:'Donut',
    type:'Sweet-Snacks',
    calories:'482',
    weigth:'200gm',
    fat:'30',
    price:'120',
  },
  {
    id: 3,
    dessert:'Brownie',
    type:'Cake',
    calories:'415',
    weigth:'500gm',
    fat:'268',
    price:'250',
  },
]

export const responsivetabledata =[
  {
    id: 1,
    task:'Web Development',
    email:'Pixel@efo.com',
    phone:'+91 7874226671',
    assign:'Mark Jecno',
    date:'12/07/2023',
    price:'$2315.00',
    status:'Pending',
    progress:'75%'
  },
  {
    id: 2,
    task:'Graphic Design',
    email:'Strap@google.com',
    phone:'+91 8347855785',
    assign:'Elana John',
    date:'23/08/2023',
    price:'$4125.00',
    status:'Pending',
    progress:'45%'
  },
  {
    id: 3,
    task:'WordPress',
    email:'Pixelstrap@gmail.com',
    phone:'+91 635609347',
    assign:'John Deo',
    date:'	15/04/2023',
    price:'$6123.00',
    status:'Done',
    progress:'100%'
  }
] 


export const breckpointSpecific = [
  {
    id: 1,
    name:'Iphone X Grey',
    oderid:'C12345',
    price:'$12550',
    qty:'1',
    total:'$12550'
  },
  {
    id: 2,
    name:'Titan Watch',
    oderid:'A14725',
    price:'$120',
    qty:'2',
    total:'$240'
  },
  {
    id: 3,
    name:'Apple Airpods',
    oderid:'B54213',
    price:'$210',
    qty:'1',
    total:'$210'
  }
]

export const Sizingtabledata =[
  {
    id: 1,
    name:'Mark Jecno',
    date:'Mark Jecno',
    status:'On leave',
    time :'0',
    performance:'29/30'
  },
  {
    id: 2,
    name:'Elana Robbert',
    date:'21/08/2022',
    status:'Present',
    time :'10',
    performance:'30/30'
  },
  {
    id: 3,
    name:'John Deo',
    date:'18/08/2022',
    status:'On leave',
    time :'8',
    performance:'28/30'
  }
]

export const customtablecolor =[
  {
    id: 1,
    title:'Frozen',
    releaseddate:'2013',
    studio:'Disney',
    budget:'$150,000,000',
    gross:'$400,953,009'   
  },
  {
    id: 2,
    title:'Minions',
    releaseddate:'2015',
    studio:'Universal',
    budget:'$74,000,000',
    gross:'$336,205,000'   
  },
  {
    id: 3,
    title:'Zootopia',
    releaseddate:'2016',
    studio:'Disney',
    budget:'$150,000,000',
    gross:'$341,258,140'   
  },
  {
    id: 4,
    title:'Finding Dory',
    releaseddate:'2016',
    studio:'Disney Pixar',
    budget:'$175,000,000',
    gross:'$486,125,203'   
  },
  {
    id: 5,
    title:'Toy Story 3',
    releaseddate:'2010',
    studio:'Disney Pixar',
    budget:'$200,000,000',
    gross:'$415,452,880'   
  }
]

export const dashedborderdata =[
  {
    id: 1,
    name:'	Crit Cardio',
    type:'Gym',
    time:'9:00 AM - 11:00 AM',
    trainer:'	Aaron Chapman',
    spots:'10'
  },
  {
    id: 2,
    name:'Zumba Dance',
    type:'Dance',
    time:'8:00 AM - 9:00 AM',
    trainer:'Donna Wilson',
    spots:'12'
  },
  {
    id: 3,
    name:'Like a butterfly',
    type:'Boxing',
    time:'9:00 AM - 10:00 AM',
    trainer:'	Randy Porter',
    spots:'13'
  },
  {
    id: 4,
    name:'Pilates Reformer',
    type:'Gym',
    time:'7:00 AM - 8:30 AM',
    trainer:'Aaron Chapman',
    spots:'15'
  },
  {
    id: 5,
    name:'Mind & Body',
    type:'Yoga',
    time:'8:00 AM - 9:00 AM',
    trainer:'Adam Stewart',
    spots:'20'
  },
]