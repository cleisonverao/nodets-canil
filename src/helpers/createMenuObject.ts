type MenuOptions = '' |'all' |'dog' |'cat' |'fish';

export const createMenuObject = (activeMenu:MenuOptions)=>{
    let retunObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(activeMenu !== ''){
            retunObject[activeMenu] = true
    }

    return retunObject;
}