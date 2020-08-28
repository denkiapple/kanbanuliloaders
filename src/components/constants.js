export const titles = ["Houses", "Buyers", "About"];
export const loaders = [
    {
        id: 1,
        name: "Full Screen Loader (Current)",
        value: "current",
    },
    {
        id: 2,
        name: "Individual Loader",
        value: "individual",
    },
    {
        id: 3,
        name: "Card Skelington",
        value: "skellington",
    },
    {
        id: 4,
        name: "Content Skelington",
        value: "inner-skellington",
    },
    {
        id: 5,
        name: "Card Arrival",
        value: "arrival",
    },
];

export const viewPorts = [
    {
        id: 1,
        name: "Desktop",
        value: false,
    },
    {
        id: 2,
        name: "Mobile",
        value: true,
    },
];

export const dolorSit = `Dolor sit amet, consectetur adipiscing elit. 
Nulla non blandit felis, at suscipit libero. 
Pellentesque feugiat dictum consectetur. `;

export const about = `This small project was developed as a UI test, 
to ilustrate a couple of different options to use as loaders for an internal project in my current job.
This implementation is not ment to be used under production. 
Feel free to leave any comments or check the source code!
Created using: react, css-modules and js.
Developed in August 2020 by uli.
`;

export const classes = (...list) => list.filter(c => c).join(" ");
