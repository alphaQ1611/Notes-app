const fs=require('fs')
const chalk=require('chalk')


const removeNote=function(title){
    const notes=listNotes()
    for(let i=0;i<notes.length;i++){
        if(notes[i].title===title){
            notes.splice(i,1)
            saveNotes(notes)
            console.log(chalk.bgGreen.black('Note Removed!'))
            return true
        }
    }
    console.log(chalk.bgRed("Note not found"))
    
}
const displayNotes=function(){
    const notes=listNotes()
    if (notes.length===0){
        console.log("No note present")
    }
    else{
    for(let i=0;i<notes.length;i++){
        console.log("Title: "+notes[i].title)
        console.log(notes[i].body)
        console.log("")
    }
}
}
const addNote=function(title,body){
    const notes=listNotes()
    if(!duplicate(title)){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log("New note added")
    }
    else{
        return false
    }
    
}
const duplicate =function(title){
    const notes=listNotes()
    for(let i=0;i<notes.length;i++){
        if(notes[i].title===title)
        {
            return true
        }
    }
    return false
}
const saveNotes=function(notes){
    const data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const listNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch(e){
        return []

    }
}
const lt =function(title){
    const notes=listNotes()
    
    for(let i=0;i<notes.length;i++){
        if(notes[i].title===title){
            console.log(notes[i].body)
            return true
            
        }
    }
   console.log(chalk.bgRed.white("Note not found!"))
}
module.exports={
    addNote:addNote,
    listNotes:listNotes,
    saveNotes:saveNotes,
    removeNote:removeNote,
    displayNotes:displayNotes,
    lt:lt
}