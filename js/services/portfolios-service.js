'use strict';

var gProjs = [
    {
        id: "hamsa",
        name: "Hamsa",
        title: "custom photo-blocks e-commerce",
        desc: "a web-site that built with purpose of giving the owner's customers an automatic product-designing proccess. right now this website's design matches only to a mobile view",
        url: "https://hamsa.shop/Learn/wordpress/?page_id=162",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        client: 'self use',
        category: 'e-commerce'
    },
    {
        id: "minesweeper",
        name: "MinesSweeper",
        title: "The old and loved game we all know",
        desc: "this game was built due to sprint-1 of coding academy",
        url: "https://hadarharush.github.io/minesweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        client: 'coding academy',
        category: 'games'
    },
    {
        id: "minesweeper",
        name: "MinesSweeper",
        title: "The old and loved game we all know",
        desc: "this game was built due to sprint-1 of coding academy",
        url: "https://hadarharush.github.io/minesweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        client: 'coding academy',
        category: 'games'
    }
];


function getProjs() {
    return gProjs;
}

function getProj(projId) {
    return gProjs.find(function (item) {
        if (projId === item.id) return true;
        return false;
    });
}