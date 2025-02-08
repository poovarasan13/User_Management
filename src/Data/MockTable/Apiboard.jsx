export const apitodoboard = {
    columns: [
        {
            id: 1,
            title: 'Todo',
            cards: [
                {
                    id: 2,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Themeforest, australia',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                },
                {
                    id: 3,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Pixelstrap, New york',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                }
            ]
        },
        {
            id: 4,
            title: 'Working',
            cards: [
                {
                    id: 5,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    backgroundImg: require('../../assets/images/other-images/maintenance-bg.jpg'),
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Themeforest, australia',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                },
                {
                    id: 6,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Pixelstrap, New york',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                }
            ]
        },
        {
            id: 7,
            title: 'Done',
            cards: [
                {
                    id: 8,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Themeforest, australia',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                },
                {
                    id: 9,
                    title: 'Test Sidebar',
                    date: '24/7/22',
                    priority: 'Urgent',
                    img: require('../../assets/images/user/3.jpg'),
                    company: 'Pixelstrap, New york',
                    rate: '+5',
                    customer_img1: require('../../assets/images/user/3.jpg'),
                    customer_img2: require('../../assets/images/user/1.jpg'),
                    customer_img3: require('../../assets/images/user/5.jpg'),
                }
            ]
        }
    ]
};

const board = apitodoboard;
export const CardData = [
    {
        id: board.columns.length + 2,
        title: 'Test Sidebar',
        date: '24/7/22',
        priority: 'Urgent',
        img: require('../../assets/images/user/3.jpg'),
        company: 'Themeforest, australia',
        rate: '+5',
        customer_img1: require('../../assets/images/user/3.jpg'),
        customer_img2: require('../../assets/images/user/1.jpg'),
        customer_img3: require('../../assets/images/user/5.jpg'),
    },
    {
        id: board.columns.length + 4,
        title: 'Test Sidebar',
        date: '24/7/22',
        priority: 'Urgent',
        backgroundImg: require('../../assets/images/other-images/maintenance-bg.jpg'),
        img: require('../../assets/images/user/3.jpg'),
        company: 'Pixelstrap, New york',
        rate: '+5',
        customer_img1: require('../../assets/images/user/3.jpg'),
        customer_img2: require('../../assets/images/user/1.jpg'),
        customer_img3: require('../../assets/images/user/5.jpg'),
    }
];

export const defaultData =
{
    columns: [
        {
            id: 1,
            title: "Todo (2)",
            cards: [
                {
                    id: 2,
                    title: "Design Dashboard",
                    date: "23/7/22",
                    priority: "medium",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+10",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                },
                {
                    id: 3,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "Urgent",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                }
            ]
        },
        {
            id: 4,
            title: "Doing (2)",
            cards: [
                {
                    id: 5,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "Urgent",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                },
                {
                    id: 6,
                    title: "Dashboard issue",
                    date: "24/7/22",
                    priority: "Low",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                }
            ]
        },
        {
            id: 7,
            title: "Done (2)",
            cards: [
                {
                    id: 8,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "Urgent",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                },
                {
                    id: 9,
                    title: "Design Dashboard",
                    date: "23/7/22",
                    priority: "Medium",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+10",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg"
                }
            ]
        }
    ]
}

export const customDefaultData = {
    columns: [
        {
            id: 10,
            title: "To Do (Item only in Working)",
            cards: [
                {
                    id: 11,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "medium",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-info"
                },
                {
                    id: 12,
                    title: "Dashboard issue",
                    date: "24/7/22",
                    priority: "Low",
                    img: "user/3.jpg",
                    company: "Pixelstrap, New york",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-info"
                }
            ]
        },
        {
            id: 13,
            title: "Working",
            cards: [
                {
                    id: 14,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "Urgent",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-warning"
                },
                {
                    id: 15,
                    title: "Dashboard issue",
                    date: "24/7/22",
                    priority: "Low",
                    img: "user/3.jpg",
                    company: "Pixelstrap, New york",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-warning"
                }
            ]
        },
        {
            id: 16,
            title: "Done (Item only in Working)",
            cards: [
                {
                    id: 17,
                    title: "Test Sidebar",
                    date: "24/7/22",
                    priority: "Urgent",
                    img: "user/3.jpg",
                    company: "Themeforest, australia",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-success"
                },
                {
                    id: 18,
                    title: "Dashboard issue",
                    date: "24/7/22",
                    priority: "Low",
                    img: "user/3.jpg",
                    company: "Pixelstrap, New york",
                    rate: "+5",
                    customer_img1: "user/3.jpg",
                    customer_img2: "user/1.jpg",
                    customer_img3: "user/5.jpg",
                    bg_color: "bg-light-success"
                }
            ]
        }
    ]
}

