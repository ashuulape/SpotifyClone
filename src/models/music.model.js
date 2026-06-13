const mongoose=require('mongoose')

const MusicSchema=new mongoose.Schema({

    url:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    artist:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user",
       require:true
    }
 
    

})


const MusicModel=mongoose.model("music",MusicSchema)

module.exports=MusicModel