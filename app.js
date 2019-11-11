const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:
        {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }

    },
    handler:function(argv){
        const add =notes.addNote(argv.title,argv.body)
        if(add===false){
            console.log("Title already present")
        }

        
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title: {
            describe:'title of the note to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        const rem = notes.removeNote(argv.title)

    }

})
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler:function(argv){
        const list = notes.displayNotes()
    }
})
yargs.command({
    command:'lbt',
    describe:'Display note by title',
    builder:{
        title:{
            describe:'Title of the note to be displayed',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        const list=notes.lt(argv.title)
    }
})
yargs.parse()