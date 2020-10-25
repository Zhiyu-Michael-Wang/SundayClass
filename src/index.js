const { find } = require("all-the-cities")

const favoriteFood = [
    {
        id: 'f001',
        name: 'Pizza',
        isHot: true,
        isWestern: true
    },{
        id: 'f002',
        name: 'Pizza dsfhai',
        isHot: true,
        isWestern: false
    },{
        id: 'f003',
        name: 'Pizza',
        isHot: true,
        isWestern: true
    },{
        id: 'f004',
        name: 'Pizza fafn',
        isHot: true,
        isWestern: false
    }
]


const findWesternDishes = function(listDishes){
    for(var ii = 0; ii < listDishes.length; ii++){
        var item = listDishes[ii]
        if(item.isWestern){
            console.log(item)
        }
    }
}


const findFood = function(name, listDishes){
    for(var ii = 0; ii < listDishes.length; ii++){
        var item = listDishes[ii]
        if(item.name === name){
            console.log(item)
        }
    }
}

// findWesternDishes(favoriteFood)
// findFood("Pizza", favoriteFood)
// findFood("Piszza", favoriteFood)


//Javascript Data Methods: FIND
//find is a lazy function that require another funtion to work
//the parameter of the funtion inside find should always be 'item'
//it returns the first element that meets the requirement

const pizza = favoriteFood.find(function(item){
    return (item.name === 'Pizza')
})

// console.log(pizza)

//we used to pair 'find' with id
const theSecond = favoriteFood.find(function(item){
    return (item.id === 'f002')
})

// console.log(theSecond)

//FILTER would return all the elements that fulfill the condition and put them into an array
const westernFood = favoriteFood.filter(function(item){
    return (item.isWestern)
})


console.log(westernFood)